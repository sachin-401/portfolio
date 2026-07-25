import { modalKeys } from "@/constants/modals";
import { useModalStore } from "@/store/modalStore";
import { BiHelpCircle } from "react-icons/bi";

const ShortcutsButton = () => {
  const openModal = useModalStore((state) => state.openModal);

  const handleOpenThemeChangeModal = () => {
    openModal(modalKeys.shortcuts!);
  };
  return (
    <button onClick={handleOpenThemeChangeModal} className="btn-dock px-1">
      <BiHelpCircle size={18} />
    </button>
  );
};

export default ShortcutsButton;
