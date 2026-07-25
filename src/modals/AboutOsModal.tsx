"use client";

import { Modal } from "@/components/Modal";
import { modalKeys } from "@/constants/modals";
import { FiCode, FiGithub, FiInfo } from "react-icons/fi";
import {
  SiFramer,
  SiNextdotjs,
  SiReact,
  SiRedux,
  SiTailwindcss,
} from "react-icons/si";

export const AboutOsModal = () => {
  return (
    <Modal modalKey={modalKeys["about-os"]} title="About OS Sachin">
      <div className="space-y-6 glass-window p-10">
        {/* Header */}
        <div className="flex items-center gap-3 justify-center">
          <FiCode className="text-3xl text-os-primary" />
          <h2 className="text-2xl font-semibold">Personal Portfolio OS</h2>
        </div>

        {/* Quick intro */}
        <p>
          A modern, Next.js‑powered portfolio that feels like a desktop OS. It
          showcases projects, experiences and contacts, all wrapped in a
          glass‑morphism UI with smooth animations.
        </p>

        {/* Tech stack */}
        <div>
          <h3 className="font-medium mb-2 flex items-center gap-2">
            <SiNextdotjs className="text-xl" /> Tech Stack
          </h3>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-sm">
            <li className="flex items-center gap-1">
              <SiNextdotjs className="text-nextjs" /> Next.js 14 (App Router)
            </li>
            <li className="flex items-center gap-1">
              <SiReact className="text-react" /> React 18
            </li>
            <li className="flex items-center gap-1">
              <SiTailwindcss className="text-tailwind" /> Tailwind CSS
            </li>
            <li className="flex items-center gap-1">
              <SiRedux className="text-zustand" /> Zustand (store)
            </li>
            <li className="flex items-center gap-1">
              <SiFramer className="text-framer" /> Framer Motion
            </li>
            <li className="flex items-center gap-1">
              <FiGithub className="text-github" /> React‑Icons
            </li>
          </ul>
        </div>

        {/* Architecture notes */}
        <div>
          <h3 className="font-medium mb-2 flex items-center gap-2">
            <FiInfo className="text-xl" /> Architecture
          </h3>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>
              Single global modal store (`modalStore`) – any component can open
              a modal by key.
            </li>
            <li>
              Context‑menu (`ContextMenu`) registers items with `modalKey`;
              clicking an item triggers the store.
            </li>
            <li>
              All modals share the same {`<Modal>`} wrapper for consistent
              backdrop and animations.
            </li>
            <li>
              Responsive glass‑morphism UI built with Tailwind utilities and CSS
              variables (`bg‑os‑desktop/50`).
            </li>
          </ul>
        </div>

        {/* Links */}
        <div className="flex gap-4 pt-2">
          <a
            href="https://github.com/sachin-401/portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-os-primary hover:underline"
          >
            <FiGithub /> GitHub
          </a>
        </div>
      </div>
    </Modal>
  );
};
