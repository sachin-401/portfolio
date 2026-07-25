"use client";
import { useThemeStore } from "@/store/themeStore";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import LogoPNGDark from "../assets/dark_logo.png";
import LogoPNGLight from "../assets/light_logo.png";
import { FullScreenToggleButton } from "./FullScreenToggleButton";
import { ThemeChanger } from "./ThemeChanger";
import MinimizedIcons from "./MinimizedIcons";
import { useModalStore } from "@/store/modalStore";
import ShortcutsButton from "./ShortcutsButton";

const HomeDock = () => {
  const [date, setDate] = useState(new Date());
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const themeMode = useThemeStore((s) => s.mode);
  const isDark = themeMode === "dark";
  const openModal = useModalStore((s) => s.openModal);
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
      className="glass-window w-full md:w-1/2 h-14 mx-auto rounded-xl flex items-center px-4 justify-between"
    >
      <div className="flex gap-1 items-center">
        <button
          className="btn-main p-0.5 shrink-0 "
          onClick={() => openModal("about")}
        >
          <Image
            src={isDark ? LogoPNGDark : LogoPNGLight}
            alt="logo"
            className="w-8 h-8 object-contain"
          />
        </button>

        <div className="h-8 w-0.5 bg-black/20 mx-3 rounded-full" />

        <MinimizedIcons />
      </div>

      <div className="flex gap-1 items-center shrink-0">
        <ShortcutsButton />
        <ThemeChanger />
        <FullScreenToggleButton />
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
