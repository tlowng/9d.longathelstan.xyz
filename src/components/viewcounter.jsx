import React, { useState, useEffect, useImperativeHandle  } from 'react';
import { db } from '../lib/firebaseConfig'; 
import { doc, getDoc, updateDoc, arrayUnion } from 'firebase/firestore';
import AudioDestination from './audiodestination';

function ViewCounter({ pageId }, ref) {
  const [views, setViews] = useState(0);

  const [hearts, setHearts] = useState(0);
  const [liked, setLiked] = useState(false);
  const [barHeights, setBarHeights] = useState(Array(6).fill(0)); 

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBarHeights(barHeights.map(() => Math.random() * 100));
    }, 100); 

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        const pageRef = doc(db, 'page-views', pageId);
        const pageDoc = await getDoc(pageRef);

        if (pageDoc.exists()) {
          const data = pageDoc.data();
          setViews(data.views || 0);
          setHearts(data.hearts ? data.hearts.length : 0); 
        }
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error);
      }
    };

    fetchPageData();
  }, [pageId]);

  useEffect(() => {
    const hasLiked = localStorage.getItem(`liked-${pageId}`);
    if (hasLiked) {
      setLiked(true);
    }
  }, [pageId]);

  const handleIncrementView = async () => {
    if (views != 0) {
      try {
        const pageRef = doc(db, 'page-views', pageId);
        await updateDoc(pageRef, {
          views: views + 1,
        });
        setViews(views + 1);
      } catch (error) {
        console.error("Lỗi khi tăng lượt xem:", error);
      }
    }
  };

  const handleHeartClick = async () => {
    if (liked) return;

    try {
      const userIP = await fetch('https://api.ipify.org?format=json')
        .then(res => res.json())
        .then(data => data.ip);

      const pageRef = doc(db, 'page-views', pageId);
      await updateDoc(pageRef, {
        hearts: arrayUnion(userIP),
      });

      setHearts(hearts + 1);
      setLiked(true);
      localStorage.setItem(`liked-${pageId}`, true);
    } catch (error) {
      console.error("Lỗi khi thích:", error);
    }
  };

  useImperativeHandle(ref, () => ({
    handleIncrementView,
  }));

  return (

    <div className='viewCounter'>
      <div className="audio-visualizer">
        {barHeights.map((height, index) => (
          <div key={index} className="bar" style={{ height: `${height}%` }}></div>
        ))}
      </div>
      <img src='views.svg' className='viewIcon'/>
      <span className='viewText'>{views}</span>
      <span className="tooltip">Lượt Xem & Tim</span>
      <button
        className={`heart-button ${liked ? 'liked' : ''}`}
        onClick={handleHeartClick}
        disabled={liked}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="heart-icon">
          <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
        </svg>
        <span className='viewText'>{hearts}</span>
      </button>
    </div>

  );
}

export default React.forwardRef(ViewCounter);