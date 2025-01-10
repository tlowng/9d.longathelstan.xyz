import React, { useState, useEffect, useRef } from 'react';

const AudioPlayer = () => {
    const [audioNames, setAudioNames] = useState([
        "1.mp3", 
        "2.mp3",
/*        "3.mp3", 
        "4.mp3",
        "5.mp3",*/
      ]);
      
  const [randomAudioFile, setAudioFile] = useState('');
  const audioSourceRef = useRef(null);

  useEffect(() => {
    if (audioNames.length > 0) {
      const randomIndex = Math.floor(Math.random() * audioNames.length);
      const randomAudioFile = audioNames[randomIndex];
      setAudioFile(randomAudioFile);

      if (audioSourceRef.current === null) {
        // audioSourceRef.current = require(`./audio/${randomAudioFile}`);
        audioSourceRef.current = require(`./audio/lny/${randomAudioFile}`);
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