import React, { useEffect, useState } from "react";
import "../App.css";

export default function ProgressBarWithButtons() {
  const [progress, setProgress] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning && progress < 100) {
      timer = setInterval(() => {
        setProgress((prev) => prev + 1);
      }, 1000);
    } else if (progress >= 100) {
      clearInterval(timer);
      setIsRunning(false);
    }

    return () => clearInterval(timer);
  }, [isRunning, progress]);

  const handleStart = () => {
    setIsRunning((prev) => !prev);
  };

  const handleReset = () => {
    setProgress(0);
    setIsRunning(false);
  };

  return (
    <div>
      <h1>Progress Bar</h1>
      <div className="progress-container">
        <div
          className="progress-bar"
          style={{ width: `${progress}%`, backgroundColor: 'blue' }}
        ></div>
      </div>
      <div className="percentage">{progress}%</div>
      <br />
      <button className="btnStart" onClick={handleStart}>
        {isRunning ? 'Stop' : 'Start'}
      </button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
