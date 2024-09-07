import React, { useState, useEffect, useRef } from 'react';

const AudioPlayer = () => {
    const [audioNames, setAudioNames] = useState([
        "1.mp3", 
        "2.mp3", 
        "3.mp3", 
        "4.mp3", 
        "5.mp3", 
        "6.mp3", 
        "7.mp3", 
        "8.mp3", 
        "9.mp3", 
        "10.mp3", 
        "11.mp3", 
        "12.mp3",
        "13.mp3",
        "14.mp3",
        "15.mp3",
        "16.mp3",
        "17.mp3",
        "18.mp3",
      ]);
      
  const [randomAudioFile, setAudioFile] = useState('');
  const audioSourceRef = useRef(null);

  useEffect(() => {
    if (audioNames.length > 0) {
      const randomIndex = Math.floor(Math.random() * audioNames.length);
      const randomAudioFile = audioNames[randomIndex];
      setAudioFile(randomAudioFile);

      if (audioSourceRef.current === null) {
        audioSourceRef.current = require(`./audio/${randomAudioFile}`);
      }
    }
  }, [audioNames]);

  return (
    <audio
      src={audioSourceRef.current}
      className="myAudio"
      preload="auto"
      loop
      autoPlay={true} 
    />
  );
};

export default AudioPlayer;