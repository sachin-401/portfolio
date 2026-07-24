"use client";
import { Modal } from "@/components/Modal";
import { CardSection } from "@/components/CardSection";
import { ContactLinkButton } from "@/components/ContactLinkButton";
import { contactContent } from "@/constants/contactContent";
import { modalKeys } from "@/constants/modals";
import {
  FiClock,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiMessageSquare,
  FiSend,
  FiShare2,
} from "react-icons/fi";

export const ContactsModal = () => {
  const {
    name,
    title,
    email,
    availability,
    responseTime,
    primaryContacts,
    socialLinks,
  } = contactContent;

  const getContactIcon = (id: string) => {
    switch (id) {
      case "email":
        return FiMail;
      case "location":
        return FiMapPin;
      default:
        return FiMail;
    }
  };

  const getSocialIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case "github":
        return FiGithub;
      case "linkedin":
        return FiLinkedin;
      default:
        return FiShare2;
    }
  };

  return (
    <Modal
      title="Contacts"
      modalKey={modalKeys.contacts}
      width={620}
      height={520}
    >
      <div className="p-4 space-y-4 text-os-main text-sm">
        {/* Banner Card */}
        <div className="glass-window p-5 rounded-2xl border border-os/10 bg-os-desktop/60 backdrop-blur-md space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h1 className="text-xl font-bold tracking-tight accent-os">
                Let&apos;s Connect
              </h1>
              <p className="text-xs opacity-75 font-medium">
                {name} • {title}
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] font-medium text-green-500 bg-green-500/10 px-3 py-1.5 rounded-full border border-green-500/20 w-fit">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span>Available for hire</span>
            </div>
          </div>

          <p className="text-xs opacity-90 leading-relaxed">{availability}</p>

          <div className="flex items-center gap-2 text-[11px] opacity-70 pt-1 font-mono">
            <FiClock className="accent-os" />
            <span>{responseTime}</span>
          </div>
        </div>

        {/* Primary Contact Channels */}
        <CardSection icon={FiMail} title="Direct Communication">
          <div className="grid grid-cols-1 gap-2.5">
            {primaryContacts.map((contact) => (
              <ContactLinkButton
                key={contact.id}
                href={contact.href}
                icon={getContactIcon(contact.id)}
                label={contact.label}
                sublabel={contact.value}
                copyValue={contact.type === "email" ? contact.value : undefined}
                isExternal={contact.type === "location"}
              />
            ))}
          </div>
        </CardSection>

        {/* Social & Professional Links */}
        <CardSection icon={FiShare2} title="Social & Professional Networks">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {socialLinks.map((social) => (
              <ContactLinkButton
                key={social.platform}
                href={social.url}
                icon={getSocialIcon(social.platform)}
                label={social.platform}
                sublabel={social.username}
                copyValue={social.url}
                isExternal
              />
            ))}
          </div>
        </CardSection>

        {/* Quick Message Callout */}
        <CardSection
          icon={FiMessageSquare}
          title="Send a Message"
          subtitle="Have a project idea or job opportunity?"
        >
          <div className="p-4 rounded-xl bg-os-desktop/60 border border-os/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-xs opacity-80 leading-normal">
              Feel free to reach out via email for inquiries, collaborations, or
              just to say hello.
            </p>
            <a
              href={`mailto:${email}?subject=Hello%20Sachin`}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-os-accent text-white font-medium text-xs shadow-md hover:opacity-90 transition-all flex-shrink-0"
            >
              <FiSend size={14} />
              <span>Compose Email</span>
            </a>
          </div>
        </CardSection>
      </div>
    </Modal>
  );
};
