export interface DetailedExperience {
  id: string;
  company: string;
  role: string;
  period: string;
  location?: string;
  overview: string;
  responsibilities: string[];
  technologies: string[];
}

export const experiencesContent = {
  title: "Professional Work History",
  subtitle: "6+ years of engineering experience delivering high-impact solutions for international clients and growing startups.",
  experiences: [
    {
      id: "intosoft",
      company: "Intosoft Technologies",
      role: "Fullstack Developer",
      period: "2023 – 2026",
      location: "Nepal",
      overview: "Led development teams in architecting and delivering fullstack web applications, ensuring high code quality, timely milestone releases, and client satisfaction.",
      responsibilities: [
        "Led cross-functional development teams by delegating tasks, performing rigorous code reviews, and mentoring junior developers.",
        "Delivered complex client projects strictly on schedule while upholding clean architecture and best coding practices.",
        "Engineered end-to-end frontend and backend services utilizing React, Next.js, Node.js, Socket.IO, and MongoDB.",
        "Integrated secure payment workflows via Stripe and implemented schema validation using Zod and Yup.",
        "Designed and published modular, reusable UI component systems to accelerate cross-project development efficiency.",
        "Collaborated directly with stakeholders, project managers, and UI/UX designers to translate requirements into technical solutions.",
      ],
      technologies: [
        "React",
        "Next.js",
        "Node.js",
        "Socket.IO",
        "MongoDB",
        "Stripe",
        "Zod",
        "Yup",
        "TypeScript",
      ],
    },
    {
      id: "tekkon",
      company: "Tekkon Technologies",
      role: "Frontend Developer",
      period: "2022 – 2023",
      location: "Nepal",
      overview: "Focused on developing real-time interactive user interfaces for international client platforms with an emphasis on performance and responsiveness.",
      responsibilities: [
        "Engineered a real-time social platform tailored for child safety and educational environments (DiGii Social).",
        "Transformed Figma wireframes and design tokens into pixel-perfect, fully responsive web layouts.",
        "Architected enterprise-grade client state flows using Redux and Redux-Saga middleware.",
        "Built real-time interactive features using Socket.IO, including instant messaging, activity feeds, user presence, and notification systems.",
        "Seamlessly integrated RESTful APIs, session management, and authentication workflows.",
      ],
      technologies: [
        "React",
        "Redux",
        "Redux-Saga",
        "Socket.IO",
        "REST APIs",
        "JavaScript (ES6+)",
        "CSS3 / SCSS",
      ],
    },
    {
      id: "revv",
      company: "Revv Inc.",
      role: "Fullstack Developer",
      period: "2020 – 2022",
      location: "Nepal",
      overview: "Developed core ad delivery engines and analytics dashboards powering digital news portals and publisher networks.",
      responsibilities: [
        "Developed high-traffic advertisement delivery platforms for leading digital news outlets.",
        "Built responsive publisher and advertiser analytics dashboards using React and Next.js.",
        "Constructed scalable backend microservices leveraging Node.js, PostgreSQL, and Prisma ORM.",
        "Designed campaign management tools, click-through tracking mechanisms, and real-time reporting analytics.",
        "Optimized database queries and API response times for fast ad delivery under high request volumes.",
      ],
      technologies: [
        "React",
        "Next.js",
        "Node.js",
        "PostgreSQL",
        "Prisma",
        "REST APIs",
        "Tailwind CSS",
      ],
    },
  ] as DetailedExperience[],
};

export type ExperiencesContent = typeof experiencesContent;
