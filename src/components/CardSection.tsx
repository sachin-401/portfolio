import React from "react";
import { IconType } from "react-icons";

type CardSectionProps = {
  icon?: IconType | React.ReactNode;
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
};

export const CardSection: React.FC<CardSectionProps> = ({
  icon: Icon,
  title,
  subtitle,
  action,
  children,
  className = "",
}) => {
  const renderIcon = () => {
    if (!Icon) return null;
    if (typeof Icon === "function") {
      const IconComponent = Icon as IconType;
      return <IconComponent className="text-lg accent-os" />;
    }
    return Icon;
  };

  return (
    <div
      className={`glass-window p-4 rounded-2xl border border-os/10 bg-os-desktop/40 backdrop-blur-md space-y-3 ${className}`}
    >
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 font-semibold text-base accent-os">
          {renderIcon()}
          <div>
            <h3>{title}</h3>
            {subtitle && (
              <p className="text-xs opacity-60 font-normal">{subtitle}</p>
            )}
          </div>
        </div>
        {action && <div>{action}</div>}
      </div>
      {children}
    </div>
  );
};
