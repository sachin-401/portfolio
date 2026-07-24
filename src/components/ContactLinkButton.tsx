"use client";
import React, { useState } from "react";
import { IconType } from "react-icons";
import { FiCopy, FiCheck, FiExternalLink } from "react-icons/fi";

type ContactLinkButtonProps = {
  href: string;
  icon?: IconType;
  label: string;
  sublabel?: string;
  copyValue?: string;
  isExternal?: boolean;
  className?: string;
};

export const ContactLinkButton: React.FC<ContactLinkButtonProps> = ({
  href,
  icon: Icon,
  label,
  sublabel,
  copyValue,
  isExternal = true,
  className = "",
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    if (!copyValue) return;
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(copyValue);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={`group flex items-center justify-between gap-3 p-3 rounded-xl bg-os-desktop/60 border border-os/10 hover:border-os/30 transition-all ${className}`}
    >
      <a
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className="flex items-center gap-3 flex-1 min-w-0"
      >
        {Icon && (
          <div className="p-2 rounded-lg bg-os-accent/10 text-os-accent accent-os flex-shrink-0">
            <Icon size={18} />
          </div>
        )}
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5 font-medium text-xs sm:text-sm text-os-main group-hover:accent-os transition-colors truncate">
            <span className="truncate">{label}</span>
            {isExternal && (
              <FiExternalLink size={12} className="opacity-50 flex-shrink-0" />
            )}
          </div>
          {sublabel && (
            <p className="text-[11px] opacity-70 truncate">{sublabel}</p>
          )}
        </div>
      </a>

      {copyValue && (
        <button
          onClick={handleCopy}
          className="p-2 rounded-lg bg-os-accent/10 hover:bg-os-accent/20 accent-os text-xs transition-colors flex items-center gap-1 flex-shrink-0"
          title="Copy to clipboard"
          aria-label="Copy"
        >
          {copied ? (
            <>
              <FiCheck size={14} className="text-green-500" />
              <span className="text-[10px] text-green-500 font-medium hidden sm:inline">
                Copied!
              </span>
            </>
          ) : (
            <>
              <FiCopy size={14} />
              <span className="text-[10px] font-medium hidden sm:inline">
                Copy
              </span>
            </>
          )}
        </button>
      )}
    </div>
  );
};
