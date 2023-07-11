/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "./pomodoro.css";
export default function Pomodoro() {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(10);
  const [start, setStart] = useState(false);
  const [displayMessage, setDisplayMessage] = useState(false);
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );

  useEffect(() => {
    let interval = null;
    if (start) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes !== 0) {
            setSeconds(59);
            setMinutes(minutes - 1);
          } else {
            let minutes = displayMessage ? 24 : 5;
            let seconds = 59;
            setSeconds(seconds);
            setMinutes(minutes);
            setDisplayMessage(!displayMessage);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [seconds, start, displayMessage, minutes]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

  const handleStartPause = () => {
    setStart((prevStart) => !prevStart);
  };
  return (
    <>
      <div className={`pomodoro ${displayMessage ? "break-time" : ""}`}>
        <p>Bây giờ là {currentTime}</p>
        <div>
          <button className="button-pomodoro" onClick={handleStartPause}>
            {!start ? "Start" : "Pause"}
          </button>
        </div>
        <div className="message">
          {displayMessage && <div>Thời gian nghỉ</div>}
          {!displayMessage && <div>Làm việc đi</div>}
        </div>
        <div className="timer">
          {timerMinutes}:{timerSeconds}
        </div>
      </div>
    </>
  );
}
