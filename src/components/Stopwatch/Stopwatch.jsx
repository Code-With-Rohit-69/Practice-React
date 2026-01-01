import React, { useEffect, useRef, useState } from "react";

function Stopwatch() {
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef(null);

  const handleStart = () => {
    if (intervalRef.current !== null) {
      return;
    }
    intervalRef.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const handleReset = () => {
    handleStop();
    setSeconds(0);
  };

  //   useEffect(() => {
  //     let curr = seconds;

  //     let interval = setInterval(() => {
  //       handleStart();
  //     }, 1000);

  //     return () => clearInterval(interval);
  //   }, [seconds]);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Time: {seconds}s</h1>
      <button className="bg-black text-white w-20 mr-2" onClick={handleStart}>
        Start
      </button>
      <button className="bg-black text-white w-20 mr-2" onClick={handleStop}>
        Stop
      </button>
      <button className="bg-black text-white w-20 mr-2" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}

export default Stopwatch;
