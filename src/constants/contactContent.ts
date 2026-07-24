export interface ContactMethod {
  id: string;
  label: string;
  value: string;
  href: string;
  type: "email" | "link" | "location";
  description?: string;
}

export interface SocialLink {
  platform: string;
  username: string;
  url: string;
}

export const contactContent = {
  name: "Sachin Bhattarai",
  title: "Fullstack Developer",
  email: "sachinbhattarai55@gmail.com",
  location: "Lalitpur, Nepal",
  availability:
    "Available for full-time opportunities, freelance projects & technical consulting.",
  responseTime: "Usually responds within 24 hours",
  primaryContacts: [
    {
      id: "email",
      label: "Email Address",
      value: "sachinbhattarai55@gmail.com",
      href: "mailto:sachinbhattarai55@gmail.com",
      type: "email",
      description: "Best way to get in touch for projects or career inquiries",
    },
    {
      id: "location",
      label: "Location",
      value: "Bhaktapur, Nepal",
      href: "https://maps.google.com/?q=Bhaktapur,+Nepal",
      type: "location",
      description: "Open to remote work worldwide and local hybrid setups",
    },
  ] as ContactMethod[],
  socialLinks: [
    {
      platform: "GitHub",
      username: "@sachin-55",
      url: "https://github.com/sachin-55",
    },
    {
      platform: "LinkedIn",
      username: "5achin-bhattarai",
      url: "https://linkedin.com/in/5achin-bhattarai",
    },
  ] as SocialLink[],
};

export type ContactContent = typeof contactContent;
