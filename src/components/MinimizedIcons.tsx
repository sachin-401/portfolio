"use client";
import { homeIcons } from "@/constants/home";
import { useModalStore } from "@/store/modalStore";

const MinimizedIcons = () => {
  const minimizedModals = useModalStore((s) => s.minimizedModals);
  const modals = useModalStore((s) => s.modal);
  const toggleMinimizeModal = useModalStore((s) => s.toggleMinimizeModal);
  const updateZIndexToTop = useModalStore((s) => s.updateZIndexToTop);
  const openedModals = Object.entries(modals).filter(([k, v]) => v.status);
  return (
    <div className="flex items-center gap-1">
      {openedModals.map(([modalKey, modalValue]) => {
        const icon = homeIcons.find((k) => k.key === modalKey);
        if (!icon) {
          return null;
        }
        const isMinimized = minimizedModals.includes(icon.key);
        return (
          <button
            className={`relative btn-dock p-0.5 rounded-sm text-white ${modalValue.onTop && !isMinimized ? "bg-[rgba(var(--accent-rgb),0.5)]" : ""}`}
            key={icon?.key}
            onClick={() =>
              icon?.key &&
              (isMinimized
                ? toggleMinimizeModal(icon?.key)
                : updateZIndexToTop(icon?.key))
            }
            onDoubleClick={() =>
              icon?.key && !isMinimized && toggleMinimizeModal(icon?.key)
            }
          >
            {icon?.icon && <icon.icon size={27} />}
            {isMinimized && (
              <span className="absolute top-0.5 right-0.5 h-1 w-1 rounded-full bg-red-600" />
            )}
          </button>
        );
      })}
    </div>
  );
};

export default MinimizedIcons;
