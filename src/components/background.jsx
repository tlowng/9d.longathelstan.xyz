import React, { useState, useEffect } from 'react';

const Background = () => {
  const [currentImage, setCurrentImage] = useState(null);

  const imageList = [
    "./bg/fall.png",
    "./bg/spring.png",
    "./bg/summer.png", 
    "./bg/winter.png",
    "./bg/bg.gif"  
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