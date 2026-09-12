"use client";

import { useEffect, useState } from "react";
import TimerCounter from "./timerCounter/TimerCounter";

const BestOffersTimer = () => {
  const [time, setTime] = useState({ hour: 23, minute: 59, second: 59 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => {
        let { hour, minute, second } = prev;

        second -= 1;

        if (second < 0) {
          second = 59;
          minute -= 1;
        }

        if (minute < 0) {
          minute = 59;
          hour -= 1;
        }

        if (hour < 0) {
          hour = 23;
          second = 59;
          minute = 59;
        }

        return { hour, minute, second };
      });
    }, 1000);
  }, []);

  return (
    <section className="bg-white px-4 py-1 rounded-2xl flex gap-2.5">
      <p className="flex flex-col flex-1 text-main-800 ">
        <span>زمان</span>
        <span className="font-bold">باقیمانده</span>
      </p>
      <section className="flex-3 flex justify-between">
        <TimerCounter title="ثانیه" value={time.second} />
        <section className="timer-separator"></section>
        <TimerCounter title="دقیقه" value={time.minute} />
        <section className="timer-separator"></section>
        <TimerCounter title="ساعت" value={time.hour} />
      </section>
    </section>
  );
};

export default BestOffersTimer;
