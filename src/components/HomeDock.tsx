"use client";

import { useEffect, useRef, useState } from "react";
import { ThemeChanger } from "./ThemeChanger";
import { MdOutlineFullscreen, MdOutlineFullscreenExit } from "react-icons/md";
import Image from "next/image";
import LogoPNGDark from "../assets/dark_logo.png";
import LogoPNGLight from "../assets/light_logo.png";
import { useThemeStore } from "@/store/themeStore";
const HomeDock = () => {
  const [date, setDate] = useState(new Date());
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const themeMode = useThemeStore((s) => s.mode);
  const isDark = themeMode === "dark";

  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  function toggleFullScreen() {
    if (!document?.fullscreenElement) {
      // Enter full screen on the entire page
      document?.documentElement.requestFullscreen().catch((err) => {
        alert(
          `Error attempting to enable fullscreen: ${err.message} (${err.name})`,
        );
      });
    } else {
      // Exit full screen
      document?.exitFullscreen();
    }
  }
  function isFullScreen() {
    if (typeof window === "undefined") return false;
    return document?.fullscreenElement !== null;
  }

  return (
    <div
      id="menu-dock"
      className="glass-window w-1/2 h-14 mx-auto rounded-xl flex items-center px-4 justify-between"
    >
      <button className="btn-main p-0.5">
        <Image
          src={isDark ? LogoPNGDark : LogoPNGLight}
          alt="logo"
          className="w-8 h-8 object-contain"
        />
      </button>
      <div className="flex gap-1 items-center">
        <ThemeChanger />
        <button className="btn-dock px-1" onClick={toggleFullScreen}>
          {isFullScreen() ? (
            <MdOutlineFullscreenExit size={24} />
          ) : (
            <MdOutlineFullscreen size={24} />
          )}
        </button>
        <div className="flex flex-col">
          <div className="text-xs font-mono opacity-70">
            {date.toLocaleDateString()}
          </div>
          <div className="text-xs font-mono opacity-70">
            {date.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDock;
