import { Modal } from "@/components/Modal";
import { modalKeys } from "@/constants/modals";

export const ThemeChangerModal = () => {
  return (
    <Modal title="Change Theme" modalKey={modalKeys.themeChanger}>
      <p> Theme Changer</p>
    </Modal>
  );
};
