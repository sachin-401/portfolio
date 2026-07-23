import { Modal } from "@/components/Modal";
import { modalKeys } from "@/constants/modals";

export const ProjectsModal = () => {
  return (
    <Modal title="Projects" modalKey={modalKeys.projects}>
      <p>Projects</p>
    </Modal>
  );
};
