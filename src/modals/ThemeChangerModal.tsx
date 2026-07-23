"use client";
import { Modal } from "@/components/Modal";
import { modalKeys } from "@/constants/modals";
import { useThemeStore } from "@/store/themeStore";
import { useState, useEffect } from "react";

type ThemeOption = {
  id: string;
  name: string;
  mode: "light" | "dark";
  theme: "default" | "orange" | "purple";
  color: string;
  bgClass: string;
};

const themes: ThemeOption[] = [
  // Default
  {
    id: "default-light",
    name: "Default Light",
    mode: "light",
    theme: "default",
    color: "#e5e5e7",
    bgClass: "bg-theme-default-light",
  },
  {
    id: "default-dark",
    name: "Default Dark",
    mode: "dark",
    theme: "default",
    color: "#141414",
    bgClass: "bg-theme-default-dark",
  },

  // Orange
  {
    id: "orange-light",
    name: "Orange Light",
    mode: "light",
    theme: "orange",
    color: "#d2bda0",
    bgClass: "bg-theme-orange-light",
  },
  {
    id: "orange-dark",
    name: "Orange Dark",
    mode: "dark",
    theme: "orange",
    color: "#23190f",
    bgClass: "bg-theme-orange-dark",
  },
  // Purple
  {
    id: "purple-light",
    name: "Purple Light",
    mode: "light",
    theme: "purple",
    color: "#af52de",
    bgClass: "bg-theme-purple-light",
  },
  {
    id: "purple-dark",
    name: "Purple Dark",
    mode: "dark",
    theme: "purple",
    color: "#190f23",
    bgClass: "bg-theme-purple-dark",
  },
];

export const ThemeChangerModal = () => {
  const { setMode, setTheme, mode, theme } = useThemeStore();
  const currentTheme = `${theme}-${mode}`;
  // Load current theme on mount
  useEffect(() => {
    const mode = localStorage.getItem("theme-mode") || "light";
    const theme = localStorage.getItem("theme-name") || "default";
    const themeId = `${theme}-${mode}`;
    // Find matching theme or fallback
    const matched = themes.find((t) => t.id === themeId);
    if (matched) {
      setTheme(matched.theme);
      setMode(matched.mode);
    }
  }, []);

  const applyTheme = (themeOption: ThemeOption) => {
    setTheme(themeOption.theme);
    setMode(themeOption.mode);
    // Apply mode
    document.documentElement.setAttribute("data-mode", themeOption.mode);

    // Apply theme
    document.documentElement.setAttribute("data-theme", themeOption.theme);

    // Save to localStorage
    localStorage.setItem("theme-mode", themeOption.mode);
    localStorage.setItem("theme-name", themeOption.theme);
  };

  return (
    <Modal
      title="Change Theme"
      modalKey={modalKeys.themeChanger}
      disableMaximize
    >
      <div className="flex flex-col items-center gap-6 p-2">
        <p className="text-center text-xs font-medium opacity-60">
          Click a color to change the theme
        </p>

        {/* Alternative: Grid layout for better UX */}
        <div className="w-full grid grid-cols-4 gap-2 mt-2">
          {themes.map((theme) => (
            <button
              key={theme.id}
              onClick={() => applyTheme(theme)}
              className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-all duration-200
                ${
                  currentTheme === theme.id
                    ? "bg-white/10 ring-2 ring-os-accent scale-105"
                    : "hover:bg-white/5 hover:scale-105"
                }
              `}
            >
              <div
                className={`w-8 h-8 rounded-full ${theme.bgClass} border border-white/10 shadow-md`}
              />
              <span className="text-[10px] opacity-60 truncate w-full text-center">
                {theme.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </Modal>
  );
};
