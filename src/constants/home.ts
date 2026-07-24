import { IconType } from "react-icons";
import { BiInfoSquare } from "react-icons/bi";
import { BsInfoCircleFill } from "react-icons/bs";
import { FaInfoCircle } from "react-icons/fa";
import {
  FcBriefcase,
  FcBusinessContact,
  FcComboChart,
  FcOpenedFolder,
} from "react-icons/fc";
import { IoInformation } from "react-icons/io5";

export type HomeKeyType =
  | "projects"
  | "contacts"
  | "skills"
  | "experiences"
  | "about";

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
    {
      key: "about",
      title: "About",
      icon: BsInfoCircleFill,
    },
  ];
