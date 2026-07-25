import { create } from "zustand";

interface ContextMenuState {
  open: boolean;
  openContextMenu: () => void;
  closeContextMenu: () => void;
  mousePosition: { x: number; y: number };
  updateMousePosition: (data: { x: number; y: number }) => void;
  position: { x: number; y: number };
  updatePosition: (data: { x: number; y: number }) => void;
}

export const useContextMenuStore = create<ContextMenuState>()((set) => ({
  open: false,
  openContextMenu: () => {
    set((state) => ({ open: !state.open }));
  },
  closeContextMenu: () => {
    set({ open: false });
  },
  mousePosition: { x: 10, y: 10 },
  updateMousePosition: (data) => {
    set({ mousePosition: data });
  },
  position: { x: 0, y: 0 },
  updatePosition: (data) => {
    set({ position: data });
  },
}));
