"use client";
import { ModalKeysType } from "@/constants/modals";
import { useContextMenu } from "@/hooks/useContextMenu";
import { useContextMenuStore } from "@/store/contextMenu";
import { useModalStore } from "@/store/modalStore";
import { useNavigationStore } from "@/store/navigationStore";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useRef } from "react";
import { BsInfo } from "react-icons/bs";
import { FiLock, FiRefreshCw } from "react-icons/fi";

type MenuItem = {
  label?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  divider?: boolean;
  id?: string;
  modalKey?: ModalKeysType;
};

const items: MenuItem[] = [
  {
    label: "Reload Page",
    icon: <FiRefreshCw />,
    onClick: () => window.location.reload(),
  },
  {
    label: "Lock Screen",
    icon: <FiLock />,
    onClick: () => {
      useNavigationStore.getState().setDesktopRevealed(false);
    },
  },
  {
    divider: true,
  },
  {
    label: "About OS",
    icon: <BsInfo />,
    id: "about-os",
    modalKey: "about-os",
  },
];

export const ContextMenu = () => {
  const isOpen = useContextMenuStore((s) => s.open);
  const mousePosition = useContextMenuStore((s) => s.mousePosition);
  const position = useContextMenuStore((s) => s.position);
  const updatePosition = useContextMenuStore((s) => s.updatePosition);
  const openModal = useModalStore((s) => s.openModal);

  const { x, y } = mousePosition;
  const menuRef = useRef<HTMLDivElement>(null);
  const { hideContextMenu } = useContextMenu();

  const onClose = useCallback(() => {
    hideContextMenu();
  }, [hideContextMenu]);

  // Adjust position to keep menu within viewport
  useEffect(() => {
    if (menuRef.current) {
      const menuRect = menuRef.current.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      let newX = x;
      let newY = y;

      if (x + menuRect.width > viewportWidth) {
        newX = viewportWidth - menuRect.width - 10;
      }

      if (y + menuRect.height > viewportHeight) {
        newY = viewportHeight - menuRect.height - 10;
      }

      updatePosition({ x: newX, y: newY });
    }
  }, [updatePosition, x, y]);

  // Close menu on outside click or escape
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  useEffect(() => {
    if (!isOpen) return;

    const listenerItems = items.filter((x) => x.id && x.modalKey);
    if (listenerItems.length === 0) return;

    const cleanupFunctions: (() => void)[] = [];

    listenerItems.forEach((item) => {
      const element = document.getElementById(
        `ctx-${item.id}`,
      ) as HTMLButtonElement | null;
      if (!element) return;

      const handler = (e: MouseEvent) => {
        e.stopPropagation();
        if (item.modalKey) openModal(item.modalKey);
        onClose();
      };

      element.addEventListener("click", handler);

      // Store cleanup function
      cleanupFunctions.push(() => {
        element.removeEventListener("click", handler);
      });
    });

    // Return cleanup for all listeners
    return () => {
      cleanupFunctions.forEach((cleanup) => cleanup());
    };
  }, [openModal, onClose, isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={menuRef}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.1 }}
          className="fixed z-[9999] min-w-[220px] max-w-[280px]  rounded-xl shadow-2xl border bg-os-desktop/50 backdrop-blur-2xl border-os py-1.5 overflow-hidden"
          style={{
            top: position.y,
            left: position.x,
            transformOrigin: "top left",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {items.map((item, index) => {
            if (item.divider) {
              return (
                <div
                  key={`divider-${index}`}
                  className="my-1.5 border-t border-os/30"
                />
              );
            }

            return (
              <button
                key={item.label}
                onClick={(e) => {
                  e.stopPropagation();
                  item?.onClick?.();
                  onClose();
                }}
                id={`ctx-${item.id || index}`}
                className={`w-full flex items-center justify-between px-4 py-2 text-sm transition-colors cursor-pointer hover:bg-os-accent`}
              >
                <span className="flex items-center gap-3">
                  {item.icon && <span className="text-base">{item.icon}</span>}
                  <span>{item.label}</span>
                </span>
              </button>
            );
          })}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
