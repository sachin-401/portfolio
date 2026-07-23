"use client";

import { useEffect, useRef, useState } from "react";
import { ThemeChanger } from "./ThemeChanger";

const HomeDock = () => {
  const [date, setDate] = useState(new Date());
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div
      id="menu-dock"
      className="glass-window w-1/2 h-14 mx-auto rounded-xl flex items-center px-4 justify-between"
    >
      <button className="btn-main ">Start</button>
      <ThemeChanger />
      <div className="flex flex-col">
        <div className="text-xs font-mono opacity-70">
          {date.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </div>
        <div className="text-xs font-mono opacity-70">
          {date.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </div>
      </div>
    </div>
  );
};

export default HomeDock;
