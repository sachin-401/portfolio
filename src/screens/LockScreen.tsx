"use client";
import { useNavigationStore } from "@/store/navigationStore";
import { useEffect, useState } from "react";

export const LockScreen = () => {
  const { desktopRevealed, setDesktopRevealed } = useNavigationStore();
  const [isRevealing, setIsRevealing] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Check for Ctrl + Alt + L (or Cmd + Alt + L on Mac)
      if ((e.ctrlKey || e.metaKey) && e.altKey && e.key.toLowerCase() === "l") {
        e.preventDefault(); // Prevent browser default (like focusing URL bar)
        setDesktopRevealed(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Cleanup
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Prevent flash: Don't render anything until mounted
  if (!isMounted) {
    return null;
  }

  if (desktopRevealed) {
    return null;
  }

  const handleUnlockScreen = () => {
    setIsRevealing(true);
    setTimeout(() => {
      setDesktopRevealed(true);
      setIsRevealing(false);
    }, 500);
  };

  return (
    <div
      className={`fixed h-screen w-screen z-9999 select-none text-os-main flex items-center justify-center p-4 selection:bg-os-accent selection:text-black overflow-hidden bg-[rgba(var(--background-rgb),0.5)] backdrop-blur-xs 
         transition-all duration-500 ease-in-out 
         ${isRevealing ? "scale-120 blur-md opacity-0 pointer-events-none" : ""} 
         ${desktopRevealed ? "scale-0 opacity-0 pointer-events-none" : "scale-100 blur-none opacity-100"}
         `}
    >
      <div
        className={`glass-window max-w-sm w-full rounded-2xl p-8 text-center flex flex-col items-center tracking-wide transition-all duration-500 ease-in-out transform`}
      >
        {/* User OS Avatar Placeholder */}
        <div className="h-20 w-20 rounded-full bg-os-accent/20 border-2 border-os-accent/40 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(var(--accent-rgb),0.2)]">
          <svg
            className="w-10 h-10 text-os-main opacity-80"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M12 11c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5-3-8-3z"
            />
          </svg>
        </div>

        <h1 className="text-2xl font-bold font-sans tracking-tight mb-2">
          Sachin Bhattarai
        </h1>
        <p className="text-xs font-mono opacity-60 uppercase tracking-widest mb-8">
          Web Developer
        </p>

        <button
          onClick={handleUnlockScreen}
          className="w-full py-3 px-6 rounded-xl bg-os-accent text-black dark:text-white font-medium hover:opacity-90 active:scale-[0.98] transition-all duration-200 shadow-md cursor-pointer"
        >
          Click To Proceed
        </button>
      </div>
    </div>
  );
};
