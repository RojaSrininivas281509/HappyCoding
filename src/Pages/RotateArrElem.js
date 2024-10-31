import React, { useState, useRef, useEffect } from "react";
import "./style.css";

export default function App() {
  const [arrEle, setArrEle] = useState('');
  const arr = [1, 2, 4, 5, 7, 8, 9];
  const [index, setIndex] = useState(0); // Track the current index
  const timer = useRef(null);

  useEffect(() => {
    // Set up the interval when the index changes
    timer.current = setInterval(() => {
      setArrEle(arr[index]); // Set current array element
      setIndex((prevIndex) => (prevIndex + 1) % arr.length); // Update index, wrap around
    }, 1000);

    // Cleanup function to clear the interval
    return () => clearInterval(timer.current);
  }, [index, arr]); // Run this effect when index or arr changes

  const StartStop = () => {
    // Start the interval by resetting the index to 0
    setIndex(0);
  };

  const Pause = () => {
    clearInterval(timer.current);
    timer.current = null;
  };

  return (
    <div>
      <h1>Show Array Value</h1>
      <p>{arrEle}</p>
      <button onClick={StartStop}>Start</button>
      <button onClick={Pause}>Pause</button>
    </div>
  );
}
