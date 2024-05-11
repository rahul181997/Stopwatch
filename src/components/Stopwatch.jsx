import React, { useState, useEffect } from 'react';
import './Stopwatch.css';

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const startStop = () => {
    setIsRunning(!isRunning);
  };

  const reset = () => {
    setTime(0);
    setIsRunning(false);
  };

  const formatTime = () => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `Time: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="stopwatch-container">
      <h1 className="stopwatch-title">Stopwatch</h1>
      <div className="stopwatch-time">{formatTime()}</div>
      <div className="button-container">
        {isRunning ? (
          <button className="stopwatch-button" onClick={startStop}>Stop</button>
        ) : (
          <button className="stopwatch-button" onClick={startStop}>Start</button>
        )}
        <button className="stopwatch-button" onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default Stopwatch;
