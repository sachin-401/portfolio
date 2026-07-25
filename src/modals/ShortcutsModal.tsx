"use client";
import { Modal } from "@/components/Modal";
import { modalKeys } from "@/constants/modals";
import { shortcutsContent } from "@/constants/shortcutContent";
import { useModalStore } from "@/store/modalStore";
import { useEffect } from "react";

export const ShortcutsModal = () => {
  const { description, shortcuts, title } = shortcutsContent;
  const openModal = useModalStore((s) => s.openModal);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger shortcuts if typing in input;
      const target = e.target as HTMLElement;
      if (
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable
      ) {
        return;
      }
      // Check for Ctrl/Cmd + Alt combination
      if (!(e.ctrlKey || e.metaKey) || !e.altKey) {
        return;
      }

      shortcutsContent.shortcuts.forEach((shortcut) => {
        if (shortcut.keyLetter.toLowerCase() === e.key.toLowerCase()) {
          if (shortcut.modalKey) {
            openModal(shortcut.modalKey);
          }
        }
      });

      e.preventDefault(); // Prevent browser default (like focusing URL bar)
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <Modal
      title="Shortcuts"
      modalKey={modalKeys.shortcuts}
      width={680}
      height={540}
    >
      <div className="flex flex-col gap-10 p-3">
        <div className="flex flex-col gap-2">
          <p className="text-xl font-medium">{title}</p>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        <div className="flex flex-col gap-2">
          {/* Make it in table not just map. content should be centered and need table borders*/}
          <table className="max-w-4xl w-full mx-auto">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">Label</th>
                <th className="text-center py-2">Key</th>
                <th className="text-center py-2">Description</th>
              </tr>
            </thead>
            <tbody>
              {shortcuts.map((shortcut) => (
                <tr key={shortcut.key} className="border-b border-gray-400/80">
                  <td className="text-left py-2">{shortcut.label}</td>
                  <td className="text-center py-2">{shortcut.key}</td>
                  <td className="text-center py-2">{shortcut.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Modal>
  );
};
