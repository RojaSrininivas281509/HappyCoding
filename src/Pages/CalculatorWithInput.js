import React, { useState, useEffect } from 'react';

const Stopwatch = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setSeconds(prev => {
          if (prev < 59) {
            return prev + 1;
          } else {
            setMinutes(prevMinutes => {
              if (prevMinutes < 59) {
                return prevMinutes + 1;
              } else {
                setHours(prevHours => prevHours + 1);
                return 0;
              }
            });
            return 0;
          }
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const startStop = () => {
    setIsRunning(!isRunning);
  };

  const reset = () => {
    setIsRunning(false);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  };

  return (
    <div>
      <h2>Stopwatch</h2>
      <div>
        <input
          type="number"
          value={hours}
          onChange={(e) => setHours(Math.max(0, parseInt(e.target.value) || 0))}
        /> : 
        <input
          type="number"
          value={minutes}
          onChange={(e) => setMinutes(Math.max(0, Math.min(59, parseInt(e.target.value) || 0)))}
        /> : 
        <input
          type="number"
          value={seconds}
          onChange={(e) => setSeconds(Math.max(0, Math.min(59, parseInt(e.target.value) || 0)))}
        />
      </div>
      <button onClick={startStop}>{isRunning ? 'Stop' : 'Start'}</button>
      <button onClick={reset} disabled={!hours && !minutes && !seconds}>Reset</button>
    </div>
  );
};

export default Stopwatch;
