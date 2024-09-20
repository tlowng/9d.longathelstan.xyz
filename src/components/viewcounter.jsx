import React, { useState, useEffect, useImperativeHandle  } from 'react';
import { db } from '../lib/firebaseConfig'; 
import { doc, getDoc, updateDoc } from 'firebase/firestore';

function ViewCounter({ pageId }, ref) {
  const [views, setViews] = useState(0);

  useEffect(() => {
    const fetchViews = async () => {
      try {
        const pageRef = doc(db, 'page-views', pageId);
        const pageDoc = await getDoc(pageRef);

        if (pageDoc.exists()) {
          setViews(pageDoc.data().views);
        } 
      } catch (error) {
        console.error("Lỗi khi lấy số lượt xem:", error);
      }
    };

    fetchViews();
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

  useImperativeHandle(ref, () => ({
    handleIncrementView,
  }));

  return (
    <div className='viewCounter'>
      <img src='views.svg' className='viewIcon'/>
      <span className='viewText'>{views}</span>
      <span className="tooltip">Lượt Xem</span>
    </div>
  );
}

export default React.forwardRef(ViewCounter);