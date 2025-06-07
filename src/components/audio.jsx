import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './members.css'; // Keep this import if members.css is still needed

// Import the specific audio files used from the new assets path
import lny1 from '../assets/audio/lny/1.mp3';
import lny2 from '../assets/audio/lny/2.mp3';

// Array of available audio files to choose from
const lnyAudios = [lny1, lny2];

const AudioPlayer = () => {
  const [audioSrc, setAudioSrc] = useState(null);

  useEffect(() => {
    // Select a random audio file when the component mounts
    const randomIndex = Math.floor(Math.random() * lnyAudios.length);
    const randomAudio = lnyAudios[randomIndex];
    setAudioSrc(randomAudio);
  }, []); // Empty dependency array means this effect runs only once on mount

  return (
    // Use the audioSrc state for the <audio> tag's src
    <audio
      src={audioSrc}
      className="myAudio"
      preload="auto"
      loop
      autoPlay={true} 
    />
  );
};

// Keep PropTypes if you still need them, or remove if no props are used.
// Based on the refactoring, no props are used currently.
// You might want to remove PropTypes for simplicity unless you plan to add props later.
/*
AudioPlayer.propTypes = {
  // Add any props here if needed in the future
};
*/

export default AudioPlayer;
