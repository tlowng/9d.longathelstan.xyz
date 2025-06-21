import React, { useState, useRef, useEffect } from 'react';
import './AudioPlayer.css';

// Danh sách bài hát
const audioTracks = [
  {
    title: 'Đại Lộ Mặt Trời',
    artist: 'Chillies',
    src: require('../assets/audio/theend/dailomattroi.mp3'),
  },
  {
    title: 'Vùng Ký Ức',
    artist: 'Chillies',
    src: require('../assets/audio/theend/vungkyuc.mp3')
  },
  {
    title: 'Lời Tạm Biệt',
    artist: 'buitruonglinh',
    src: require('../assets/audio/theend/loitambiet.mp3'),
  },
  {
    title: 'Phép Màu',
    artist: ':(',
    src: require('../assets/audio/theend/phepmau.mp3')
  },
  {
    title: 'Có Hẹn Với Thanh Xuân',
    artist: 'MONSTAR',
    src: require('../assets/audio/theend/cohenvoithanhxuan.mp3'),
  },
  {
    title: 'Hạ Tàn',
    artist: 'MinnxBon',
    src: require('../assets/audio/theend/hatan.mp3'),
  },
];

const AudioPlayer = () => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(null);

  const currentTrack = audioTracks[currentTrackIndex];

  const PlayIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="icon">
      <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
    </svg>
  );

  const PauseIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="icon">
      <path fillRule="evenodd" d="M5.25 4.5A.75.75 0 0 1 6 3.75h2.25a.75.75 0 0 1 .75.75v15a.75.75 0 0 1-.75.75H6a.75.75 0 0 1-.75-.75v-15Zm10.5 0a.75.75 0 0 1 .75-.75H18.75a.75.75 0 0 1 .75.75v15a.75.75 0 0 1-.75.75H16.5a.75.75 0 0 1-.75-.75v-15Z" clipRule="evenodd" />
    </svg>
  );

  useEffect(() => {
    const random = Math.floor(Math.random() * audioTracks.length);
    setCurrentTrackIndex(random);
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      isPlaying ? audio.play().catch(() => {}) : audio.pause();
    }
  }, [isPlaying, currentTrackIndex]);

  useEffect(() => {
    const audio = audioRef.current;
    const updateProgress = () => {
      if (audio) {
        const percent = (audio.currentTime / audio.duration) * 100;
        setProgress(isNaN(percent) ? 0 : percent);
      }
    };

    audio.addEventListener('timeupdate', updateProgress);
    return () => {
      audio.removeEventListener('timeupdate', updateProgress);
    };
  }, []);

  useEffect(() => {
    const handleAutoplay = () => {
      setIsPlaying(true);
    };

    window.addEventListener('trigger-audio-autoplay', handleAutoplay);
    return () => {
      window.removeEventListener('trigger-audio-autoplay', handleAutoplay);
    };
  }, []);

  const togglePlay = (index) => {
    if (index === currentTrackIndex) {
      setIsPlaying(!isPlaying);
    } else {
      setCurrentTrackIndex(index);
      setIsPlaying(true);
    }
  };

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = Math.floor(seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  return (
    <div className="audio-player">
      <audio ref={audioRef} src={currentTrack.src} preload="auto" className="myAudio" />
      <ul className="playlist">
        {audioTracks.map((track, index) => (
          <li
            key={index}
            className={`track ${index === currentTrackIndex ? 'active' : ''}`}
            onClick={() => togglePlay(index)}
          >
            <div className="play-icon">
              {index === currentTrackIndex && isPlaying ? PauseIcon : PlayIcon}
            </div>
            <div className="track-info">
              <div className="title">{track.title}</div>
              <div className="artist">{track.artist}</div>
            </div>
          </li>
        ))}
      </ul>
      <div className="progress-container">
        <span>{formatTime(audioRef.current?.currentTime || 0)}</span>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${progress}%` }} />
        </div>
        <span>{formatTime(audioRef.current?.duration || 0)}</span>
      </div>
    </div>
  );
};

export default AudioPlayer;
