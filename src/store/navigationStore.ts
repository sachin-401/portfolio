import { create } from "zustand";
import { persist } from "zustand/middleware";

interface NavigationState {
  desktopRevealed: boolean;
  setDesktopRevealed: (value: boolean) => void;
}

export const useNavigationStore = create<NavigationState>()(
  persist(
    (set) => ({
      desktopRevealed: false,
      setDesktopRevealed: (value) => {
        set({ desktopRevealed: value });
      },
    }),
    {
      name: "os-navigation-settings",
    },
  ),
);
