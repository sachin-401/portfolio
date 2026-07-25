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
  minimizedModals: ModalKeysType[];
  toggleMinimizeModal: (key: ModalKeysType) => void;
}

export const useModalStore = create<ModalStoreState>()(
  persist(
    (set, get) => ({
      modal: {},
      openModal: (_key) => {
        set((state) => {
          const modalValues = Object.entries(state.modal).sort(
            (a, b) => Number(b[1].status) - Number(a[1].status),
          );
          const isMinimized = state.minimizedModals.includes(_key);
          if (isMinimized) {
            get().toggleMinimizeModal(_key);
          }
          const modalValuesObject = modalValues.reduce<
            ModalStoreState["modal"]
          >((acc, [key, value]) => {
            if (key === _key) {
              return {
                ...acc,
                [key]: { ...value, status: true },
              };
            }
            return {
              ...acc,
              [key]: value,
            };
          }, {});

          const updatedValuesSort = Object.entries(modalValuesObject).sort(
            (a, b) => Number(b[1].status) - Number(a[1].status),
          );

          return {
            modal: updatedValuesSort.reduce<ModalStoreState["modal"]>(
              (acc, [key, value]) => {
                return {
                  ...acc,
                  [key]: value,
                };
              },
              {},
            ),
          };
        });

        get().updateZIndexToTop(_key);
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
          modalArray
            .sort((a, b) => b[1].zIndex - a[1].zIndex) // sort by z-index in descending order
            .forEach(([modalKey, modalValue], i) => {
              if (modalValue?.status && modalKey === key) {
                modalValue.zIndex = (activeModal?.length + 1) * 1000;
                modalValue.onTop = true;
              } else if (modalValue.status) {
                modalValue.zIndex = Math.max(
                  (activeModal?.length - i) * 1000,
                  10,
                );
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
      minimizedModals: [],
      toggleMinimizeModal: (key) => {
        set((state) => {
          const { minimizedModals } = state;
          if (minimizedModals.includes(key)) {
            get().updateZIndexToTop(key);
            return {
              minimizedModals: [...minimizedModals.filter((x) => x !== key)],
            };
          } else {
            return { minimizedModals: [...minimizedModals, key] };
          }
        });
      },
    }),
    {
      name: "os-modal-settings",
    },
  ),
);
