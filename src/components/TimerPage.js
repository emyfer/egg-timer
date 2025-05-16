import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import "./timerPage.css"

function TimerPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { time } = location.state || {};

  const [secondsLeft, setSecondsLeft] = useState(time);

  useEffect(() => {
    if (!time) return;

    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  // 🕒 Navigate to FinalPage when done
  useEffect(() => {
    if (secondsLeft === 0) {
      const timeout = setTimeout(() => {
        navigate('/final');
      }, 1500); // delay before transition (optional)

      return () => clearTimeout(timeout);
    }
  }, [secondsLeft, navigate]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <div className='timer'>
      <p className='question'>Your egg is ready in...</p>
      <img alt='clock' src='.\clock.png'></img>
      <p className='time'>{formatTime(secondsLeft)}</p>
    </div>
  );
}

export default TimerPage;
