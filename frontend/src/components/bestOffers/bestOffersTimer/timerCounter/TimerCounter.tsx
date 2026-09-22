"use client";

interface TimerCounterProps {
  title: string;
  value: number;
}

const TimerCounter = ({ title, value }: TimerCounterProps) => {
  return (
    <section className="bestOffers-timer_counter">
      <span className="font-bold text-xl">
        {value < 10 ? `0${value}` : value === 0 ? "00" : value}
      </span>
      <span className="text-sm">{title}</span>
    </section>
  );
};

export default TimerCounter;
