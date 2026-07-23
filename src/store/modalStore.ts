import { ModalKeysType } from "@/constants/modals";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ModalStoreState {
  modal: {
    [key: string]: {
      status: boolean;
      position: { x: number; y: number };
      zIndex: number;
      onTop: boolean;
    };
  };
  openModal: (key: ModalKeysType) => void;
  closeModal: (key: ModalKeysType) => void;

  updatePosition: (
    key: ModalKeysType,
    position: { x: number; y: number },
  ) => void;
  updateZIndexToTop: (key: ModalKeysType) => void;
}

export const useModalStore = create<ModalStoreState>()(
  persist(
    (set, get) => ({
      modal: {},
      openModal: (key) => {
        set((state) => ({
          modal: {
            ...state.modal,
            [key]: {
              ...(state?.modal?.[key] || {}),
              status: true,
            },
          },
        }));
        get().updateZIndexToTop(key);
      },

      closeModal: (key: string) => {
        set((state) => ({
          modal: {
            ...state.modal,
            [key]: {
              ...(state?.modal?.[key] || {}),
              status: false,
            },
          },
        }));
      },

      updatePosition: (key: string, position: { x: number; y: number }) => {
        set((state) => ({
          modal: {
            ...state.modal,
            [key]: {
              ...(state?.modal?.[key] || {}),
              position,
            },
          },
        }));
      },
      updateZIndexToTop: (key) => {
        set((state) => {
          const { modal } = state;

          const modalValues = Object.values(modal);
          const activeModal = modalValues.filter((item) => item.status);
          if (activeModal.length === 0) return state;

          const modalArray = Object.entries(modal);
          let indexPositionOffset = 0;
          modalArray
            .sort((a, b) => a[1].zIndex - b[1].zIndex) // sort by z-index in ascending order
            .forEach(([modalKey, modalValue], i) => {
              if (modalValue?.status && modalKey === key) {
                modalValue.zIndex = activeModal?.length * 100;
                modalValue.onTop = true;
                indexPositionOffset = 1;
              } else if (modalValue.status) {
                modalValue.zIndex = (i + 1 - indexPositionOffset) * 100;
                modalValue.onTop = false;
              }
            });

          return {
            modal: {
              ...modal,
              ...modalArray.reduce((acc, [modalKey, modalValue]) => {
                return {
                  ...acc,
                  [modalKey]: modalValue,
                };
              }, {}),
            },
          };
        });
      },
    }),
    {
      name: "os-modal-settings",
    },
  ),
);
