"use client";
import { Modal } from "@/components/Modal";
import { CardSection } from "@/components/CardSection";
import { skillsContent } from "@/constants/skillsContent";
import { modalKeys } from "@/constants/modals";
import {
  FiCheckCircle,
  FiCode,
  FiCpu,
  FiDatabase,
  FiGlobe,
  FiLayers,
  FiSmartphone,
} from "react-icons/fi";

export const SkillsModal = () => {
  const { title, description, groups } = skillsContent;

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case "frontend development":
        return FiCode;
      case "mobile development":
        return FiSmartphone;
      case "backend & cloud":
        return FiCpu;
      case "databases & storage":
        return FiDatabase;
      case "state management":
        return FiLayers;
      default:
        return FiGlobe;
    }
  };

  return (
    <Modal title="Skills" modalKey={modalKeys.skills} width={680} height={540}>
      <div className="p-4 space-y-4 text-os-main text-sm">
        {/* Banner Card */}
        <div className="glass-window p-5 rounded-2xl border border-os/10 bg-os-desktop/60 backdrop-blur-md space-y-2">
          <div className="flex items-center gap-2 accent-os font-bold text-xl">
            <FiCode className="text-2xl" />
            <h1>{title}</h1>
          </div>
          <p className="text-xs opacity-80 leading-relaxed">{description}</p>
        </div>

        {/* Skill Groups rendered as Tiles */}
        <div className="space-y-4">
          {groups.map((group) => {
            const GroupIcon = getCategoryIcon(group.category);
            return (
              <CardSection
                key={group.category}
                icon={GroupIcon}
                title={group.category}
                subtitle={group.description}
              >
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1">
                  {group.skills.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center gap-2 p-2.5 rounded-xl bg-os-desktop/60 border border-os/10 hover:border-os/30 transition-all text-xs font-medium shadow-sm hover:scale-[1.01]"
                    >
                      <FiCheckCircle className="accent-os text-sm flex-shrink-0" />
                      <span className="truncate">{skill}</span>
                    </div>
                  ))}
                </div>
              </CardSection>
            );
          })}
        </div>
      </div>
    </Modal>
  );
};
