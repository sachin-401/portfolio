import { HomeKeyType } from "./home";

export type ModalKeysType = HomeKeyType | "themeChanger" | "os-modal";

export const modalKeys: Partial<Record<ModalKeysType, ModalKeysType>> = {
  themeChanger: "themeChanger",
  projects: "projects",
  contacts: "contacts",
  experiences: "experiences",
  skills: "skills",
  "os-modal": "os-modal",
};
