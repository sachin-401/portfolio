import { HomeKeyType } from "./home";

export type ModalKeysType =
  | HomeKeyType
  | "themeChanger"
  | "os-modal"
  | "about"
  | "shortcuts"
  | "about-os";

export const modalKeys: Partial<Record<ModalKeysType, ModalKeysType>> = {
  themeChanger: "themeChanger",
  projects: "projects",
  contacts: "contacts",
  experiences: "experiences",
  about: "about",
  skills: "skills",
  "os-modal": "os-modal",
  shortcuts: "shortcuts",
  "about-os": "about-os",
};
