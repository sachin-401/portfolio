import { Modal } from "@/components/Modal";
import { modalKeys } from "@/constants/modals";

export const AboutModal = () => {
  return (
    <Modal title="About" modalKey={modalKeys.about}>
      <p>About</p>
    </Modal>
  );
};
