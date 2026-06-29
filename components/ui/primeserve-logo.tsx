"use client";

import React from "react";
import { cn } from "@/lib/utils";

/* ─────────────────────────────────────────────────────
   PrimeServe brand logo - 3 arc strokes + baseline
   variant="light"  → teal arcs + black baseline (on white bg)
   variant="dark"   → teal arcs + white baseline (on dark bg)
   ───────────────────────────────────────────────────── */
export function LogoMark({
  size = 36,
  variant = "light",
  className,
}: {
  size?: number;
  variant?: "light" | "dark";
  className?: string;
}) {
  const baseline = variant === "dark" ? "#ffffff" : "#111827";
  const h = Math.round(size * 1.15);
  return (
    <svg
      width={size}
      height={h}
      viewBox="0 0 40 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Bottom baseline smile */}
      <path
        d="M 5 43 Q 19 51 35 43"
        stroke={baseline}
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      {/* Arc 1 – inner / darkest teal */}
      <path
        d="M 7 41 C 3 28, 8 15, 14 6"
        stroke="#0f766e"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      {/* Arc 2 – mid teal */}
      <path
        d="M 15 43 C 10 28, 16 13, 22 4"
        stroke="#0d9488"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      {/* Arc 3 – outer / lightest teal */}
      <path
        d="M 23 44 C 17 28, 24 11, 31 2"
        stroke="#14b8a6"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* Full horizontal lockup: mark + "Prime" + "Serve" */
export function LogoFull({
  className,
  iconSize = 32,
  textSize = "text-lg",
  variant = "light",
}: {
  className?: string;
  iconSize?: number;
  textSize?: string;
  variant?: "light" | "dark";
}) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <LogoMark size={iconSize} variant={variant} />
      <span className={cn("font-display font-bold tracking-tight leading-none", textSize)}>
        <span className={variant === "dark" ? "text-white" : "text-brand-black"}>Prime</span>
        <span className="text-brand-teal">Serve</span>
      </span>
    </div>
  );
}

/* Vertical hub card mark (for dark gradient cards) */
export function LogoHub({
  className,
  showSubtitle = false,
}: {
  className?: string;
  showSubtitle?: boolean;
}) {
  return (
    <div className={cn("flex flex-col items-center gap-1.5", className)}>
      <LogoMark size={36} variant="dark" />
      <p className="font-display font-bold text-sm tracking-widest leading-none text-center">
        <span className="text-white">PRIME</span>
        <span className="text-teal-200">SERVE</span>
      </p>
      {showSubtitle && (
        <p className="text-[8.5px] text-white/50 uppercase tracking-widest font-medium">
          Procurement OS
        </p>
      )}
    </div>
  );
}
