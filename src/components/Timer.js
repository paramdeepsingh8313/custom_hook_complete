import React, { useEffect, useState } from "react";

function Timer() {
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);

  var timer;
  useEffect(() => {
    timer = setInterval(() => {
      setSec(sec + 1);
      if (sec >= 10) {
        setMin(min + 1);
        setSec(0);
      }
    }, 1000);

    return () => clearInterval(timer);
  });

  const handleStart = () => {
    setMin(0);
    setSec(0);
  };

  const Stop = () => {
    clearInterval(timer);
  };

  const Resume = () => {
    setMin((prevState) => prevState + 0);
    setSec((prev) => prev + 1);
  };

  return (
    <div>
      {min < 10 ? "0" + min : min} : {sec < 10 ? "0" + sec : sec}
      <br />
      <button onClick={handleStart}>Start</button>
      <button onClick={Stop}>Stop</button>
      <button onClick={Resume}>Resume</button>
    </div>
  );
}

export default Timer;
