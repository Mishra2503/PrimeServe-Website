"use client";

import { FC, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface HighlightCardProps {
  title: string;
  description: string[];
  icon?: ReactNode;
  className?: string;
  accentColor?: "teal" | "navy" | "default";
}

const HighlightCard: FC<HighlightCardProps> = ({
  title,
  description,
  icon,
  className,
  accentColor = "default",
}) => {
  const glowColor =
    accentColor === "teal"
      ? "from-brand-teal/20 to-transparent"
      : accentColor === "navy"
      ? "from-brand-navy/40 to-transparent"
      : "from-white/10 to-transparent";

  return (
    <div
      className={cn(
        "group cursor-pointer transform transition-all duration-500 hover:scale-[1.03] hover:-rotate-1 h-full",
        className
      )}
    >
      <div
        className={cn(
          "text-white rounded-2xl border border-white/10 shadow-2xl relative overflow-hidden h-full flex flex-col",
          "bg-gradient-to-br from-brand-navy via-[#0d1829] to-brand-navy",
          "hover:border-brand-teal/30 hover:shadow-2xl"
        )}
      >
        {/* Background glow layers */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div
            className={cn(
              "absolute inset-0 bg-gradient-to-tr opacity-40 group-hover:opacity-60 transition-opacity duration-500",
              glowColor
            )}
          />
          <div className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-brand-teal/10 blur-3xl opacity-30 group-hover:opacity-60 transform group-hover:scale-110 transition-all duration-700" />
          <div className="absolute top-10 left-10 w-16 h-16 rounded-full bg-brand-teal/5 blur-xl animate-ping" />
          <div className="absolute bottom-16 right-16 w-12 h-12 rounded-full bg-brand-tealLight/5 blur-lg animate-ping" style={{ animationDelay: "0.3s" }} />
          {/* Shimmer sweep */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000" />
        </div>

        {/* Content - flex-1 so all cards grow to same height */}
        <div className="p-8 relative z-10 flex flex-col items-center text-center flex-1">
          {icon && (
            <div className="relative mb-6">
              <div className="absolute inset-0 rounded-full border-2 border-brand-teal/20 animate-ping" />
              <div className="absolute inset-0 rounded-full border border-brand-teal/10 animate-pulse" />
              <div className="p-5 rounded-full backdrop-blur-lg border border-white/20 bg-gradient-to-br from-black/80 to-black/60 shadow-2xl transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500">
                <div className="transform group-hover:rotate-180 transition-transform duration-700">
                  {icon}
                </div>
              </div>
            </div>
          )}

          <h3 className="mb-4 text-2xl font-bold font-display text-white group-hover:scale-105 transition-transform duration-300">
            {title}
          </h3>

          <div className="space-y-1 max-w-sm flex-1">
            {description.map((line, idx) => (
              <p
                key={idx}
                className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-100 transition-colors duration-300"
              >
                {line}
              </p>
            ))}
          </div>

          {/* Bottom accent line */}
          <div className="mt-6 w-1/3 h-0.5 bg-gradient-to-r from-transparent via-brand-teal to-transparent rounded-full transform group-hover:w-1/2 group-hover:h-1 transition-all duration-500 animate-pulse" />

          <div className="flex space-x-2 mt-4 opacity-40 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-1.5 h-1.5 bg-brand-teal rounded-full animate-bounce" />
            <div className="w-1.5 h-1.5 bg-brand-teal rounded-full animate-bounce" style={{ animationDelay: "0.1s" }} />
            <div className="w-1.5 h-1.5 bg-brand-tealLight rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
          </div>
        </div>

        {/* Corner glows */}
        <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-brand-teal/10 to-transparent rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-brand-teal/10 to-transparent rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </div>
  );
};

export default HighlightCard;
