"use client";
import { Modal } from "@/components/Modal";
import { CardSection } from "@/components/CardSection";
import { projectsContent } from "@/constants/projectsContent";
import { modalKeys } from "@/constants/modals";
import {
  FiCheckCircle,
  FiCpu,
  FiExternalLink,
  FiFolder,
  FiGlobe,
} from "react-icons/fi";

export const ProjectsModal = () => {
  const { title, subtitle, projects } = projectsContent;

  return (
    <Modal
      title="Projects"
      modalKey={modalKeys.projects}
      width={720}
      height={560}
    >
      <div className="p-4 space-y-4 text-os-main text-sm">
        {/* Banner Card */}
        <div className="glass-window p-5 rounded-2xl border border-os/10 bg-os-desktop/60 backdrop-blur-md space-y-2">
          <div className="flex items-center gap-2 accent-os font-bold text-xl">
            <FiFolder className="text-2xl" />
            <h1>{title}</h1>
          </div>
          <p className="text-xs opacity-80 leading-relaxed">{subtitle}</p>
        </div>

        {/* Detailed Projects List */}
        <div className="space-y-4">
          {projects.map((proj) => (
            <CardSection
              key={proj.id}
              icon={FiFolder}
              title={proj.name}
              action={
                <a
                  href={proj.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-os-accent text-white text-xs font-medium hover:opacity-90 transition-all shadow-sm"
                >
                  <span>Visit Site</span>
                  <FiExternalLink size={13} />
                </a>
              }
            >
              <div className="space-y-3 pt-1">
                {/* Region / Market */}
                <div className="flex items-center gap-2 text-xs opacity-75 border-b border-os/10 pb-2">
                  <FiGlobe className="accent-os" />
                  <span>Market / Client Region: <strong>{proj.region}</strong></span>
                </div>

                {/* Overview */}
                <p className="text-xs opacity-90 leading-relaxed">
                  {proj.overview}
                </p>

                {/* Detailed Features & Technical Contributions */}
                <div className="space-y-1.5 pt-1">
                  <h4 className="text-xs font-semibold uppercase tracking-wider opacity-70">
                    Key Features & Engineering Highlights:
                  </h4>
                  <ul className="space-y-1.5">
                    {proj.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs opacity-85 leading-normal">
                        <FiCheckCircle className="accent-os text-sm flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="pt-2 border-t border-os/10 space-y-1.5">
                  <div className="flex items-center gap-1.5 text-xs font-semibold opacity-70">
                    <FiCpu className="accent-os" />
                    <span>Tech Stack:</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {proj.technologies.map((tech) => (
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
