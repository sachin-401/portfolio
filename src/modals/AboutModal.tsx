import { Modal } from "@/components/Modal";
import { CardSection } from "@/components/CardSection";
import { aboutContent } from "@/constants/aboutContent";
import { modalKeys } from "@/constants/modals";
import {
  FiAward,
  FiBriefcase,
  FiCode,
  FiExternalLink,
  FiFolder,
  FiGithub,
  FiGlobe,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiTarget,
  FiUser,
} from "react-icons/fi";
import CoverJPG from "@/assets/cover.jpg";
import Image from "next/image";

export const AboutModal = () => {
  const {
    name,
    title,
    email,
    github,
    linkedin,
    location,
    profileSummary,
    futureVision,
    technicalSkills,
    experiences,
    keyProjects,
    education,
    languages,
  } = aboutContent;

  return (
    <Modal title="About Me" modalKey={modalKeys.about} width={680} height={540}>
      <div className="p-4 space-y-4 text-os-main text-sm">
        {/* Header / Hero Card */}
        <div className="glass-window p-5 rounded-2xl border border-os/10 bg-os-desktop/60 backdrop-blur-md space-y-3">
          <div className="relative w-full h-38 rounded-md overflow-clip">
            <Image
              src={CoverJPG}
              alt="cover"
              objectFit="contain"
              fill
              className=""
            />
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h1 className="text-2xl font-bold tracking-tight accent-os">
                {name}
              </h1>
              <p className="text-xs opacity-75 font-medium">{title}</p>
            </div>
            <div className="flex items-center gap-1.5 text-xs opacity-80 bg-os-accent/10 px-3 py-1.5 rounded-full border border-os/10 w-fit">
              <FiMapPin className="accent-os" />
              <span>{location}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 pt-1">
            <a
              href={`mailto:${email}`}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-os-accent/10 hover:bg-os-accent/20 border border-os/10 transition-colors text-xs font-medium"
            >
              <FiMail className="accent-os" />
              <span>{email}</span>
            </a>
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-os-accent/10 hover:bg-os-accent/20 border border-os/10 transition-colors text-xs font-medium"
            >
              <FiGithub className="accent-os" />
              <span>GitHub</span>
              <FiExternalLink className="opacity-50 text-[10px]" />
            </a>
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-os-accent/10 hover:bg-os-accent/20 border border-os/10 transition-colors text-xs font-medium"
            >
              <FiLinkedin className="accent-os" />
              <span>LinkedIn</span>
              <FiExternalLink className="opacity-50 text-[10px]" />
            </a>
          </div>
        </div>

        {/* Profile Summary Card */}
        <CardSection icon={FiUser} title="Profile Summary">
          <p className="opacity-90 leading-relaxed text-xs sm:text-sm">
            {profileSummary}
          </p>
        </CardSection>

        {/* Future Vision & Ambitions Card */}
        <CardSection icon={FiTarget} title="Future & Ambitions">
          <div className="space-y-3">
            {futureVision.paragraphs.map((para, idx) => (
              <p
                key={idx}
                className="opacity-90 leading-relaxed text-xs sm:text-sm"
              >
                {para}
              </p>
            ))}
            <div className="mt-3 p-3.5 rounded-xl bg-os-accent/10 border-l-4 border-os-accent/70 bg-os-desktop/60 italic space-y-1">
              <p className="opacity-95 text-xs sm:text-sm font-medium">
                &ldquo;{futureVision.quote.text}&rdquo;
              </p>
              <span className="block text-right text-[11px] font-semibold not-italic accent-os opacity-90">
                — {futureVision.quote.author}
              </span>
            </div>
          </div>
        </CardSection>

        {/* Technical Skills Card */}
        <CardSection icon={FiCode} title="Technical Skills">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {technicalSkills.map((cat) => (
              <div
                key={cat.category}
                className="p-3 rounded-xl bg-os-desktop/60 border border-os/10 space-y-1.5"
              >
                <span className="text-xs font-semibold uppercase tracking-wider accent-os block">
                  {cat.category}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 text-[11px] rounded-md bg-os-accent/10 border border-os/10 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardSection>

        {/* Key Projects Card */}
        <CardSection icon={FiFolder} title="Key Projects">
          <div className="grid grid-cols-1 gap-3">
            {keyProjects.map((proj) => (
              <div
                key={proj.name}
                className="p-3 rounded-xl bg-os-desktop/60 border border-os/10 space-y-2 hover:border-os/30 transition-all"
              >
                <div className="flex items-center justify-between">
                  <a
                    href={proj.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-sm accent-os hover:underline flex items-center gap-1.5"
                  >
                    <span>{proj.name}</span>
                    <FiExternalLink className="text-xs opacity-70" />
                  </a>
                </div>
                <p className="text-xs opacity-85 leading-normal">
                  {proj.description}
                </p>
                {proj.tech && proj.tech.length > 0 && (
                  <div className="flex flex-wrap gap-1 pt-1">
                    {proj.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 text-[10px] rounded-full bg-os-accent/10 text-os-main opacity-80"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardSection>

        {/* Professional Experience Card */}
        <CardSection icon={FiBriefcase} title="Professional Experience">
          <div className="space-y-2.5">
            {experiences.map((exp) => (
              <div
                key={exp.company}
                className="p-3 rounded-xl bg-os-desktop/60 border border-os/10 space-y-1"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <span className="font-semibold text-xs text-os-main">
                    {exp.company}
                  </span>
                  <span className="text-[11px] opacity-60 font-mono">
                    {exp.period}
                  </span>
                </div>
                <div className="text-xs font-medium accent-os">{exp.role}</div>
                <p className="text-xs opacity-80 pt-0.5">{exp.summary}</p>
              </div>
            ))}
          </div>
        </CardSection>

        {/* Education & Languages Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Education Card */}
          <CardSection icon={FiAward} title="Education">
            <div className="space-y-1 text-xs">
              <p className="font-semibold text-os-main">{education.degree}</p>
              <p className="opacity-80">{education.institution}</p>
              <p className="opacity-60 text-[11px] font-mono">
                {education.location} • {education.year}
              </p>
            </div>
          </CardSection>

          {/* Languages Card */}
          <CardSection icon={FiGlobe} title="Languages">
            <div className="space-y-2 pt-1">
              {languages.map((lang) => (
                <div
                  key={lang.name}
                  className="flex items-center justify-between text-xs"
                >
                  <span className="font-medium text-os-main">{lang.name}</span>
                  <span className="px-2 py-0.5 text-[10px] rounded-full bg-os-accent/10 accent-os font-medium">
                    {lang.proficiency}
                  </span>
                </div>
              ))}
            </div>
          </CardSection>
        </div>
      </div>
    </Modal>
  );
};
