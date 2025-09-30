import React from "react";

interface InfoBoxProps {
  type: "info" | "warning" | "tip" | "success";
  children: React.ReactNode;
  title?: string;
}

const configs = {
  info: {
    border: "border-teal/30",
    bg: "bg-teal/5",
    iconBg: "bg-teal/10",
    iconColor: "text-teal",
    textColor: "text-dark-navy",
    titleColor: "text-teal",
    icon: "ℹ️",
  },
  warning: {
    border: "border-yellow/30",
    bg: "bg-yellow/5",
    iconBg: "bg-yellow/10",
    iconColor: "text-yellow-dark",
    textColor: "text-dark-navy",
    titleColor: "text-yellow-dark",
    icon: "⚠️",
  },
  tip: {
    border: "border-green/30",
    bg: "bg-green/5",
    iconBg: "bg-green/10",
    iconColor: "text-green",
    textColor: "text-dark-navy",
    titleColor: "text-green",
    icon: "💡",
  },
  success: {
    border: "border-green/30",
    bg: "bg-green/5",
    iconBg: "bg-green/10",
    iconColor: "text-green",
    textColor: "text-dark-navy",
    titleColor: "text-green",
    icon: "✅",
  },
} as const;

export default function InfoBox({ type, children, title }: InfoBoxProps) {
  const config = configs[type];

  return (
    <div className={`my-6 rounded-xl border-2 ${config.border} ${config.bg} p-6`}>
      <div className="flex items-start gap-4">
        <div className={`flex h-8 w-8 items-center justify-center rounded-lg text-lg flex-shrink-0 ${config.iconBg} ${config.iconColor}`}>
          {config.icon}
        </div>
        <div className="flex-1 min-w-0">
          {title && (
            <h4 className={`font-bold mb-3 text-lg ${config.titleColor}`}>{title}</h4>
          )}
          <div className={`leading-relaxed ${config.textColor}`}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}