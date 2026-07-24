export interface SkillGroup {
  category: string;
  description: string;
  skills: string[];
}

export const skillsContent = {
  title: "Technical Expertise",
  description: "Over 6+ years of fullstack web development and 2+ years of mobile engineering experience.",
  groups: [
    {
      category: "Frontend Development",
      description: "Building responsive, modern, performant web applications",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "HTML5",
        "CSS3 / SCSS",
        "Tailwind CSS",
        "Chakra UI",
        "Storybook",
      ],
    },
    {
      category: "Mobile Development",
      description: "Cross-platform iOS and Android application engineering",
      skills: ["React Native", "Expo"],
    },
    {
      category: "Backend & Cloud",
      description: "Scalable server architectures, APIs, and cloud services",
      skills: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "Socket.IO",
        "Stripe Gateway",
        "AWS SES",
        "AWS S3",
        "AWS Lambda",
        "Pug / MJML",
      ],
    },
    {
      category: "Databases & Storage",
      description: "Data modeling, optimization, and management systems",
      skills: ["MongoDB (Mongoose)", "PostgreSQL (Prisma)"],
    },
    {
      category: "State Management",
      description: "Predictable application state and data fetching strategies",
      skills: [
        "Redux / Redux Toolkit",
        "Redux-Saga",
        "Zustand",
        "React Query",
        "React Context",
      ],
    },
  ] as SkillGroup[],
};

export type SkillsContent = typeof skillsContent;
