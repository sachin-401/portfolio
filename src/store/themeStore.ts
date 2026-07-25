import { create } from "zustand";
import { persist } from "zustand/middleware";

type ThemeMode = "light" | "dark";
type ThemeType = "default" | "orange" | "purple";
interface ThemeState {
  mode: ThemeMode;
  theme: ThemeType;
  setMode: (newMode: ThemeMode) => void;
  setTheme: (newTheme: ThemeType) => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      mode: "dark",
      theme: "default",

      setMode: (newMode) => {
        document.documentElement.setAttribute("data-mode", newMode);
        set({ mode: newMode });
      },

      setTheme: (newTheme) => {
        document.documentElement.setAttribute("data-theme", newTheme);
        set({ theme: newTheme });
      },
    }),
    {
      name: "os-appearance-settings",
    },
  ),
);
