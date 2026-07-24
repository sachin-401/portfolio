export interface DetailedProject {
  id: string;
  name: string;
  region: string;
  url: string;
  overview: string;
  features: string[];
  technologies: string[];
}

export const projectsContent = {
  title: "Featured Projects",
  subtitle: "Highlights of production platforms, mobile applications, and web services engineered for global clients.",
  projects: [
    {
      id: "rentisity",
      name: "Rentisity",
      region: "Ireland",
      url: "https://www.rentisity.com/",
      overview: "A comprehensive property rental marketplace connecting landlords, tenants, and service providers with real-time communication tools.",
      features: [
        "Real-time instant messaging system built with Socket.IO for seamless landlord-tenant communication.",
        "Integrated appointment scheduling and property viewing booking system.",
        "Multi-channel automated notifications via email, SMS, and push channels.",
        "Service provider marketplace allowing landlords to book maintenance and repair contractors.",
        "Cross-platform Web application and companion React Native mobile applications for iOS & Android.",
        "Cloud-native serverless email template delivery powered by AWS SES, AWS Lambda, Pug, and MJML.",
      ],
      technologies: [
        "React",
        "Next.js",
        "Node.js",
        "MongoDB",
        "Socket.IO",
        "React Native",
        "Expo",
        "AWS SES",
        "AWS S3",
        "AWS Lambda",
        "Pug",
        "MJML",
      ],
    },
    {
      id: "housebuild-energyfix",
      name: "EnergyFix & HouseBuild",
      region: "Ireland",
      url: "https://www.housebuild.com",
      overview: "Enterprise construction management and energy efficiency platform migration connecting homeowners with certified contractors.",
      features: [
        "Successfully migrated legacy Ruby on Rails platform architectures to high-performance React and Node.js microservices.",
        "Integrated Stripe payment gateway for subscription billing, invoice settlement, and service deposits.",
        "Implemented Brevo CRM integration for automated customer journey tracking and email marketing workflows.",
        "Built responsive contractor directories, project estimation calculators, and compliance verification modules.",
        "Engineered global state management using Zustand for fast client-side rendering.",
      ],
      technologies: [
        "React",
        "Next.js",
        "Node.js",
        "MongoDB",
        "Stripe",
        "Zustand",
        "Brevo CRM",
      ],
    },
    {
      id: "teritori",
      name: "Teritori",
      region: "Global",
      url: "https://teritori.com/",
      overview: "An all-in-one multi-chain Web3 super-app operating across Cosmos, Ethereum, and Solana ecosystems.",
      features: [
        "Developed the cross-platform React Native mobile application for iOS and Android.",
        "Implemented decentralized social feeds, NFT minting/viewing interface, and Web3 wallet connections.",
        "Optimized mobile app performance for smooth gesture handling, native UI elements, and real-time state sync with web app.",
      ],
      technologies: ["React Native", "Expo", "TypeScript", "React"],
    },
    {
      id: "digii-social",
      name: "DiGii Social",
      region: "Australia",
      url: "https://digiisocial.com/",
      overview: "An educational social media simulation platform designed to teach digital citizenship and online safety to school children.",
      features: [
        "Built interactive parent and student portal interfaces with granular child safety controls.",
        "Integrated Wonde school management APIs for automatic student roster and classroom synchronization.",
        "Engineered real-time social engagement modules: posts, comments, moderation flags, and reactions.",
        "Implemented real-time Socket.IO socket connections for live classroom activity feeds.",
      ],
      technologies: ["React", "Redux", "Socket.IO", "Wonde API", "REST APIs"],
    },
  ] as DetailedProject[],
};

export type ProjectsContent = typeof projectsContent;
