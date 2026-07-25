"use client";
import { AboutModal } from "./AboutModal";
import { ContactsModal } from "./ContactsModal";
import { ExperiencesModal } from "./ExperiencesModal";
import { ProjectsModal } from "./ProjectsModal";
import { ShortcutsModal } from "./ShortcutsModal";
import { SkillsModal } from "./SkillsModal";
import { ThemeChangerModal } from "./ThemeChangerModal";

export const AllModals = () => {
  return (
    <div>
      <ThemeChangerModal />
      <ProjectsModal />
      <ContactsModal />
      <ExperiencesModal />
      <SkillsModal />
      <AboutModal />
      <ShortcutsModal />
    </div>
  );
};
