"use client";
import { isFullScreen, toggleFullScreen } from "@/utils/fullscreen";
import { isWindow } from "@/utils/window";
import { useEffect } from "react";
import { MdOutlineFullscreen, MdOutlineFullscreenExit } from "react-icons/md";

export const FullScreenToggleButton = () => {
  useEffect(() => {
    if (!isWindow) return;
    // add eventlistener to toggle fullscreen using ctrl + alt + f
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.altKey && e.key.toLowerCase() === "f") {
        e.preventDefault();
        toggleFullScreen();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <button className="btn-dock px-1" onClick={toggleFullScreen}>
      {isFullScreen() ? (
        <MdOutlineFullscreenExit size={24} />
      ) : (
        <MdOutlineFullscreen size={24} />
      )}
    </button>
  );
};
