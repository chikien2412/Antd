/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "./pomodoro.css";
import { Button, Modal, Input, Space } from "antd";
import Setting from "../logo/Setting";

export default function Pomodoro() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pomodoroTime, setPomodoroTime] = useState(25);
  const [breakTime, setBreakTime] = useState(5); 
  const [minutes, setMinutes] = useState(pomodoroTime);
  const [seconds, setSeconds] = useState(0);
  const [start, setStart] = useState(false);
  const [displayMessage, setDisplayMessage] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    let interval = null;
    if (start) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes !== 0) {
            setSeconds(59);
            setMinutes(minutes - 1);
          } else {
            let minutes = displayMessage ? pomodoroTime-1 : breakTime;
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

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    setMinutes(pomodoroTime);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className={`pomodoro ${displayMessage ? "break-time" : ""}`}>
        <div style={{ paddingLeft: "1400px", marginBottom: "" }}>
          <Button className={`button-setting ${displayMessage ? "break-time" : ""}`} onClick={showModal}>
            <Setting />
          </Button>
          <Modal
            title="Time (minutes)"
            open={isModalOpen} // Sử dụng visible thay vì open
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <Space>
              <Space direction="vertical">
                <label>Pomodoro</label>
                <Input
                  value={pomodoroTime}
                  onChange={(e) => setPomodoroTime(Number(e.target.value))}
                />
              </Space>
              <Space direction="vertical">
                <label>Short Break</label>
                <Input
                  value={breakTime}
                  onChange={(e) => setBreakTime(Number(e.target.value))}
                />
              </Space>
            </Space>
          </Modal>
        </div>
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
