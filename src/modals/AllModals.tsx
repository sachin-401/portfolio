import { ContactsModal } from "./ContactsModal";
import { ExperiencesModal } from "./ExperiencesModal";
import { ProjectsModal } from "./ProjectsModal";
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
    </div>
  );
};
