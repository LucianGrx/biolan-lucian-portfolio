import React, { useState, useRef, useEffect } from 'react';

const RadioPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (!isPlaying) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };


  return (
    <div>
      <audio ref={audioRef} src="https://live.kissfm.ro/kissfm.aacp" />

      <button onClick={handlePlay}>{isPlaying ? 'Pause' : 'Play'}</button>

    </div>
  );
};

export default RadioPlayer;