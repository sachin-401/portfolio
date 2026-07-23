"use client";
import { modalKeys } from "@/constants/modals";
import { useModalStore } from "@/store/modalStore";
import { VscSymbolColorCompact } from "react-icons/vsc";
const MODAL_KEY = modalKeys.themeChanger;

export const ThemeChanger = () => {
  const openModal = useModalStore((state) => state.openModal);

  const handleOpenThemeChangeModal = () => {
    openModal(MODAL_KEY!);
  };

  return (
    <div>
      <button onClick={handleOpenThemeChangeModal} className="btn-dock px-1">
        <VscSymbolColorCompact size={18} />
      </button>
    </div>
  );
};
