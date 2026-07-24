"use client";
import { Modal } from "@/components/Modal";
import { CardSection } from "@/components/CardSection";
import { experiencesContent } from "@/constants/experiencesContent";
import { modalKeys } from "@/constants/modals";
import {
  FiBriefcase,
  FiCalendar,
  FiCheck,
  FiCpu,
  FiMapPin,
} from "react-icons/fi";

export const ExperiencesModal = () => {
  const { title, subtitle, experiences } = experiencesContent;

  return (
    <Modal
      title="Experiences"
      modalKey={modalKeys.experiences}
      width={720}
      height={560}
    >
      <div className="p-4 space-y-4 text-os-main text-sm">
        {/* Banner Card */}
        <div className="glass-window p-5 rounded-2xl border border-os/10 bg-os-desktop/60 backdrop-blur-md space-y-2">
          <div className="flex items-center gap-2 accent-os font-bold text-xl">
            <FiBriefcase className="text-2xl" />
            <h1>{title}</h1>
          </div>
          <p className="text-xs opacity-80 leading-relaxed">{subtitle}</p>
        </div>

        {/* Detailed Work Experience Cards */}
        <div className="space-y-4">
          {experiences.map((exp) => (
            <CardSection
              key={exp.id}
              icon={FiBriefcase}
              title={exp.company}
              action={
                <div className="flex items-center gap-2 text-xs font-mono opacity-75 bg-os-accent/10 px-3 py-1 rounded-full border border-os/10">
                  <FiCalendar className="accent-os" />
                  <span>{exp.period}</span>
                </div>
              }
            >
              <div className="space-y-3 pt-1">
                {/* Role & Location */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-os/10 pb-2">
                  <span className="font-bold text-sm accent-os">{exp.role}</span>
                  {exp.location && (
                    <div className="flex items-center gap-1 text-xs opacity-70">
                      <FiMapPin size={12} />
                      <span>{exp.location}</span>
                    </div>
                  )}
                </div>

                {/* Overview */}
                <p className="text-xs opacity-90 leading-relaxed italic">
                  {exp.overview}
                </p>

                {/* Responsibilities */}
                <div className="space-y-1.5 pt-1">
                  <h4 className="text-xs font-semibold uppercase tracking-wider opacity-70">
                    Key Responsibilities & Accomplishments:
                  </h4>
                  <ul className="space-y-1.5">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs opacity-85 leading-normal">
                        <FiCheck className="accent-os text-sm flex-shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="pt-2 border-t border-os/10 space-y-1.5">
                  <div className="flex items-center gap-1.5 text-xs font-semibold opacity-70">
                    <FiCpu className="accent-os" />
                    <span>Technologies & Tools:</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-[11px] rounded-lg bg-os-accent/10 border border-os/10 font-medium text-os-main"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </CardSection>
          ))}
        </div>
      </div>
    </Modal>
  );
};
