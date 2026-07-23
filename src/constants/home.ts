import { IconType } from "react-icons";
import {
  FcBriefcase,
  FcBusinessContact,
  FcComboChart,
  FcOpenedFolder,
} from "react-icons/fc";

export type HomeKeyType = "projects" | "contacts" | "skills" | "experiences";

export const homeIcons: { key: HomeKeyType; title: string; icon: IconType }[] =
  [
    {
      key: "projects",
      title: "Projects",
      icon: FcOpenedFolder,
    },
    {
      key: "contacts",
      title: "Contacts",
      icon: FcBusinessContact,
    },
    {
      key: "skills",
      title: "Skills",
      icon: FcComboChart,
    },
    {
      key: "experiences",
      title: "Experiences",
      icon: FcBriefcase,
    },
  ];
