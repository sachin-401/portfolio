import { Modal } from "@/components/Modal";
import { modalKeys } from "@/constants/modals";

export const ExperiencesModal = () => {
  return (
    <Modal title="Experiences" modalKey={modalKeys.experiences}>
      <p>Experiences</p>
    </Modal>
  );
};
