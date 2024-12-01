import React, { useState, useEffect } from 'react';

const Background = () => {
  const [currentImage, setCurrentImage] = useState(null);

  const imageList = [
 /*   "./bg/1.gif",
    "./bg/2.gif",
    "./bg/3.gif", 
    "./bg/5.gif",
    "./bg/6.gif",
    "./bg/bg.gif" */ 
    "./bg/4.gif",
    "./bg/7.gif"
  ];

  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * imageList.length);
    return imageList[randomIndex];
  };

  useEffect(() => {
    localStorage.removeItem('currentImage');
    const storedImage = localStorage.getItem('currentImage');
    if (storedImage) {
      setCurrentImage(storedImage);
    } else {
      const newImage = getRandomImage();
      setCurrentImage(newImage);
      localStorage.setItem('currentImage', newImage);
    }
  }, []);

  return (
    <div className="bg-container">
      <img
        src={currentImage}
        className="bg-main"
      />
    </div>
  );
};

export default Background;