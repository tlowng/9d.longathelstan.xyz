import React, { useState, useRef } from 'react';
import './Firework.css';
import fireworkSound from './firework.mp3';

const Firework = () => {
  const [fireworks, setFireworks] = useState([]);
  const audioRef = useRef(null);

  const handleClick = (e) => {
    const x = e.clientX;
    const y = e.clientY;
    const newFirework = { x, y, id: Date.now() };
    setFireworks([...fireworks, newFirework]);

    if (audioRef.current) {
      audioRef.current.currentTime = 0; 
      audioRef.current.play();
    }

    setTimeout(() => {
      setFireworks((currentFireworks) =>
        currentFireworks.filter((fw) => fw.id !== newFirework.id)
      );
    }, 2000);
  };

  React.useEffect(() => {
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, [fireworks]);

  return (
    <>
      <audio ref={audioRef} src={fireworkSound} preload="auto"></audio>
      {fireworks.map((firework) => (
        <div
          key={firework.id}
          className="firework"
          style={{
            left: firework.x,
            top: firework.y,
          }}
        >
          <img
            src="./firework.png"
            alt="Minecraft Firework Rocket"
            className="firework-rocket"
          />
          <div className="particles">
            {[...Array(20)].map((_, index) => (
              <div key={index} className="particle"></div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default Firework;