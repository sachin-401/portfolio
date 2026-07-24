export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface ProjectItem {
  name: string;
  url: string;
  description: string;
  tech?: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  summary: string;
}

export interface EducationInfo {
  degree: string;
  institution: string;
  location: string;
  year: string;
}

export interface LanguageItem {
  name: string;
  proficiency: string;
}

export const aboutContent = {
  name: "Sachin Bhattarai",
  title: "Fullstack Developer",
  email: "sachinbhattarai55@gmail.com",
  github: "https://github.com/sachin-55",
  linkedin: "https://linkedin.com/in/5achin-bhattarai",
  location: "Lalitpur, Nepal",
  profileSummary:
    "Fullstack Developer with 6+ years of professional experience in web development and 2+ years in mobile and backend development. Specialized in building high-performance applications using React, Next.js, Node.js, TypeScript, and modern frontend/backend technologies. Experienced in leading dev teams, collaborating with international clients, and delivering scalable products across e-commerce, property rental, and social platforms.",
  technicalSkills: [
    {
      category: "Frontend",
      skills: ["React", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Chakra UI", "Storybook"],
    },
    {
      category: "Mobile",
      skills: ["React Native", "Expo"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express.js", "REST APIs", "Stripe", "AWS (SES, S3, Lambda)", "Socket.IO"],
    },
    {
      category: "Databases",
      skills: ["MongoDB", "PostgreSQL"],
    },
    {
      category: "State Management",
      skills: ["Redux Toolkit", "React Context", "Zustand", "React Query"],
    },
  ] as SkillCategory[],
  experiences: [
    {
      company: "Intosoft Technologies",
      role: "Fullstack Developer",
      period: "2023 – 2026",
      summary: "Led dev teams, built fullstack systems using React, Next.js, Node.js, Socket.IO & MongoDB.",
    },
    {
      company: "Tekkon Technologies",
      role: "Frontend Developer",
      period: "2022 – 2023",
      summary: "Developed real-time social platforms, child safety UI, Redux-Saga architecture & Socket.IO features.",
    },
    {
      company: "Revv Inc.",
      role: "Fullstack Developer",
      period: "2020 – 2022",
      summary: "Built ad delivery platform dashboards, Node.js/PostgreSQL microservices & analytics engines.",
    },
  ] as ExperienceItem[],
  keyProjects: [
    {
      name: "Rentisity",
      url: "https://www.rentisity.com/",
      description: "Real-time messaging, appointment scheduling, and marketplace for property rentals.",
      tech: ["React", "Next.js", "Node.js", "MongoDB", "Socket.IO", "React Native"],
    },
    {
      name: "HouseBuild & EnergyFix",
      url: "https://www.housebuild.com",
      description: "Migrated Ruby on Rails platforms to React & Node.js with Stripe payment integration.",
      tech: ["React", "Next.js", "Node.js", "MongoDB", "Stripe", "Zustand"],
    },
    {
      name: "Teritori",
      url: "https://teritori.com/",
      description: "Cross-platform React Native mobile application for Web3 social platform.",
      tech: ["React Native", "Expo", "TypeScript"],
    },
    {
      name: "DiGii Social",
      url: "https://digiisocial.com/",
      description: "Child safety social platform with school management APIs and real-time features.",
      tech: ["React", "Redux", "Socket.IO"],
    },
  ] as ProjectItem[],
  education: {
    degree: "Bachelor in Computer Engineering",
    institution: "Himalaya College of Engineering",
    location: "Lalitpur, Nepal",
    year: "2019",
  } as EducationInfo,
  languages: [
    { name: "Nepali", proficiency: "Native" },
    { name: "English", proficiency: "Professional Working" },
  ] as LanguageItem[],
};

export type AboutContent = typeof aboutContent;

