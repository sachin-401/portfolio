"use client";
import { useThemeStore } from "@/store/themeStore";
import React, { HTMLAttributes, ReactNode, useEffect } from "react";

type Props = {
  children: ReactNode;
  className?: HTMLAttributes<Element>["className"];
  overrideClass?: boolean;
};

export const ScreenMainWrapper = ({
  children,
  className,
  overrideClass,
}: Props) => {
  const { mode, theme } = useThemeStore();

  // Sync theme/mode with the HTML tag on initial load
  useEffect(() => {
    document.documentElement.setAttribute("data-mode", mode);
    document.documentElement.setAttribute("data-theme", theme);
  }, [mode, theme]);

  return (
    <main
      className={
        overrideClass
          ? className
          : `relative h-screen w-screen bg-os-desktop text-os-main flex items-center justify-center selection:bg-os-accent selection:text-black overflow-hidden ${className}`
      }
    >
      {children}
    </main>
  );
};
