"use client";
import { Modal } from "@/components/Modal";
import { modalKeys } from "@/constants/modals";

export const AboutOsModal = () => {
  return (
    <Modal modalKey={modalKeys["about-os"]} title="About OS Sachin">
      <div></div>
    </Modal>
  );
};
