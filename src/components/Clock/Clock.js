import React, { useState, useEffect } from 'react';

export default function Clock() {
  const [hour, setHour] = useState(0);
  const [minutes, setMinutes] = useState(0);

  let date = new Date();

  let refreshClock = () => {
    date = new Date();
    setHour(date.getHours());
    setMinutes(date.getMinutes());
  }

  useEffect(() => {
    refreshClock();

    //Refresh every 3 seconds because seconds are not shown and there's no need for 100% accuracy
    let clockTick = setInterval(() => {
      refreshClock();
    }, 3000);

    //Cleanup
    return () => {
      clearInterval(clockTick);
    }
  }, []);

  return (
    <p className="clock">{('0' + hour).slice(-2)}:{('0' + minutes).slice(-2)}</p>
  )
}