"use client";
import { homeIcons } from "@/constants/home";
import { modalKeys } from "@/constants/modals";
import useIsMobile from "@/hooks/useIsMobile";
import { useModalStore } from "@/store/modalStore";
import { useEffect, useState } from "react";

export const DesktopIcons = () => {
  const [selectedIcon, setSelectedIcon] = useState("");
  const openModal = useModalStore((state) => state.openModal);
  const { isMobile } = useIsMobile();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const clearIconSelectionOnOutsideClick = (e: MouseEvent) => {
      const validClicks = homeIcons?.map((i) => `#${i.key}-menu-icon`);

      const target = e.target as HTMLElement;
      if (validClicks?.some((id) => target?.closest(id))) return;
      setSelectedIcon("");
    };
    window.addEventListener("click", clearIconSelectionOnOutsideClick);
    return () => {
      window.removeEventListener("click", clearIconSelectionOnOutsideClick);
    };
  }, []);

  return (
    <div className="flex flex-col gap-2.5 flex-1 h-full mt-10">
      {homeIcons.map((icon) => {
        if (icon.key === "about" || icon.key === "about-os") return null;
        return (
          <div
            key={icon.key}
            id={`${icon.key}-menu-icon`}
            className={`w-28 flex flex-col items-center border border-os/10  gap-2 p-2 rounded-xl cursor-pointer select-none ${
              selectedIcon === icon.key ? "border-os/80" : "hover:border-os/30"
            }`}
            onClick={() => {
              if (isMobile?.current) {
                const key = modalKeys?.[icon.key];
                if (key) openModal(key);
                return;
              }
              setSelectedIcon(icon.key);
            }}
            onDoubleClick={() => {
              const key = modalKeys?.[icon.key];
              if (key) openModal(key);
            }}
          >
            <icon.icon size={36} className="shrink-0 text-os-accent" />
            <p>{icon.title}</p>
          </div>
        );
      })}
    </div>
  );
};
