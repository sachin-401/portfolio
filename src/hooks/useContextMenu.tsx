"use client";
import { useContextMenuStore } from "@/store/contextMenu";
import { useCallback, useEffect } from "react";

export const useContextMenu = () => {
  const updateMousePosition = useContextMenuStore((s) => s.updateMousePosition);
  const openContextMenu = useContextMenuStore((s) => s.openContextMenu);
  const closeContextMenu = useContextMenuStore((s) => s.closeContextMenu);

  const showContextMenu = useCallback(
    (e: MouseEvent) => {
      e.preventDefault();
      const element = document.getElementById("lock-screen");

      const target = e.target;
      if (target instanceof Element && element?.contains(target)) {
        return;
      }
      openContextMenu();
      updateMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    },
    [openContextMenu, updateMousePosition],
  );

  const hideContextMenu = useCallback(() => {
    closeContextMenu();
    updateMousePosition({
      x: 0,
      y: 0,
    });
  }, [closeContextMenu, updateMousePosition]);

  useEffect(() => {
    const handleGlobalContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      showContextMenu(e);
    };

    document.addEventListener("contextmenu", handleGlobalContextMenu);

    return () => {
      document.removeEventListener("contextmenu", handleGlobalContextMenu);
    };
  }, [showContextMenu]);

  return {
    showContextMenu,
    hideContextMenu,
  };
};
