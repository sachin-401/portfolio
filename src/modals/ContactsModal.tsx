import { Modal } from "@/components/Modal";
import { modalKeys } from "@/constants/modals";

export const ContactsModal = () => {
  return (
    <Modal title="Contacts" modalKey={modalKeys.contacts}>
      <p>Contacts</p>
    </Modal>
  );
};
