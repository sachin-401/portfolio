import { Modal } from "@/components/Modal";
import { modalKeys } from "@/constants/modals";

export const SkillsModal = () => {
  return (
    <Modal title="Skills" modalKey={modalKeys.skills}>
      <p>Skills</p>
    </Modal>
  );
};
