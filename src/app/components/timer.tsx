"use client";

import React, { useState, useEffect } from "react";

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const countdown = () => {
      const now = new Date().getTime();
      const difference = new Date("October 2, 2025 00:00:00").getTime() - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    const intervalId = setInterval(countdown, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-col gap-5 px-4 sm:px-6 md:px-10 lg:px-20">
      <span className="text-text40 sm:text-text48 md:text-text56 text-white leading-[140%] font-allegro text-center">
        Miqayel
        <br /> & <br />
        Anush
      </span>
      <span className="text-text40 text-white sm:text-text48 md:text-text56 leading-[140%] text-nowrap font-allegro text-center">
        <span className=" text-5xl">2</span> Հոկտեմբերի 2025
      </span>
      <p className="text-text24 text-center sm:text-text28 md:text-text32 text-white font-armBoloragir">
        Մնացել է
      </p>
      <div className="grid grid-cols-4 text-center divide-x ">
        <div className="flex flex-col text-white gap-2 p-2 items-center">
          <span className="text-text40 sm:text-text48 md:text-text56 font-armBoloragir">
            {timeLeft.days}
          </span>
          <span className="font-armBoloragir text-text18 sm:text-text24 md:text-text32">
            Օր
          </span>
        </div>
        <div className="flex flex-col text-white gap-2 items-center p-2">
          <span className="text-text40 sm:text-text48 md:text-text56 font-armBoloragir">
            {timeLeft.hours}
          </span>
          <span className="font-armBoloragir text-text18 sm:text-text24 md:text-text32">
            Ժամ
          </span>
        </div>
        <div className="flex flex-col gap-2 text-white items-center p-2">
          <span className="text-text40 sm:text-text48 font-armBoloragir md:text-text56">
            {timeLeft.minutes}
          </span>
          <span className="font-armBoloragir text-text18 sm:text-text24 md:text-text32">
            Րոպե
          </span>
        </div>
        <div className="flex flex-col gap-2 text-white items-center p-2">
          <span className="text-text40 sm:text-text48 font-armBoloragir md:text-text56">
            {timeLeft.seconds}
          </span>
          <span className="font-armBoloragir text-text18 sm:text-text24 md:text-text32">
            Վյրկ
          </span>
        </div>
      </div>
    </div>
  );
};
export default Timer;
