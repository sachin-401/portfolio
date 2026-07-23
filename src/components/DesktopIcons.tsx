"use client";
import { homeIcons } from "@/constants/home";
import { modalKeys } from "@/constants/modals";
import { useModalStore } from "@/store/modalStore";
import { useState } from "react";

export const DesktopIcons = () => {
  const [selectedIcon, setSelectedIcon] = useState("");
  const openModal = useModalStore((state) => state.openModal);

  return (
    <div className="flex flex-col gap-2.5 flex-1 h-full">
      {homeIcons.map((icon) => (
        <div
          key={icon.key}
          className={`w-28 flex flex-col items-center border border-os/10  gap-2 p-2 rounded-xl cursor-pointer select-none ${
            selectedIcon === icon.key ? "border-os/80" : "hover:border-os/30"
          }`}
          onClick={() => setSelectedIcon(icon.key)}
          onDoubleClick={() => {
            const key = modalKeys?.[icon.key];
            if (key) openModal(key);
          }}
        >
          <icon.icon size={36} className="shrink-0 text-os-accent" />
          <p>{icon.title}</p>
        </div>
      ))}
    </div>
  );
};
