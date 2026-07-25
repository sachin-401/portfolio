import { modalKeys, ModalKeysType } from "./modals";

export interface Shortcut {
  key: string;
  keyLetter: string;
  label: string;
  description: string;
  modalKey?: ModalKeysType;
}

export const shortcutsContent = {
  title: "Shortcuts",
  description:
    "Press any shortcut key to open the corresponding screen. Commands are bind with CTRL(⌘) and ALT(⌥)",
  shortcuts: [
    {
      key: "⌘ + ⌥ + L",
      keyLetter: "L",
      label: "Lock Screen",
      description: "To lock the screen",
    },
    {
      key: "⌘ + ⌥ + F",
      keyLetter: "F",
      label: "Toggle Fullscreen",
      description: "To open and close on fullscreen",
    },
    {
      key: "⌘ + ⌥ + S",
      keyLetter: "S",
      label: "Skills",
      description: "Open skills modal",
      modalKey: modalKeys.skills,
    },
    {
      key: "⌘ + ⌥ + A",
      keyLetter: "A",
      label: "About",
      description: "Open about modal",
      modalKey: modalKeys.about,
    },
    {
      key: "⌘ + ⌥ + C",
      keyLetter: "C",
      label: "Contacts",
      description: "Open contacts modal",
      modalKey: modalKeys.contacts,
    },
    {
      key: "⌘ + ⌥ + H",
      keyLetter: "H",
      label: "Help",
      description: "Open shortcuts modal",
      modalKey: modalKeys.shortcuts,
    },
    {
      key: "⌘ + ⌥ + E",
      keyLetter: "E",
      label: "Experiences",
      description: "Open experiences modal",
      modalKey: modalKeys.experiences,
    },
    {
      key: "⌘ + ⌥ + P",
      keyLetter: "P",
      label: "Projects",
      description: "Open projects modal",
      modalKey: modalKeys.projects,
    },
  ] as Shortcut[],
};
