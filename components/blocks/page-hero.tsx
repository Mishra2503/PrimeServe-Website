"use client";

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Truck,
  Sparkles,
  ShieldCheck,
  FileCheck,
  CreditCard,
  BarChart3,
  X as XIcon,
  CheckCircle2,
  Target,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";

type HeroVariant = "solutions" | "why" | "about" | "contact" | "default";

interface PageHeroCta {
  label: string;
  href: string;
}

interface PageHeroProps {
  badge?: string;
  headline: string;
  subtext?: string;
  align?: "center" | "left";
  variant?: HeroVariant;
  cta?: PageHeroCta;
  secondaryCta?: PageHeroCta;
}

/* ---------- per-variant animated backgrounds ---------- */

const SOLUTIONS_EASE = [0.21, 0.47, 0.32, 0.98] as const;

const FLOAT_CHIPS = [
  {
    icon: Truck,
    iconBg: "bg-emerald-50 ring-1 ring-emerald-100",
    iconColor: "text-emerald-600",
    label: "Delivered in 24h",
    sub: "Pan-India, every order",
    pos: "top-[14%] right-[4%]",
    delay: 0.7,
    range: 7,
  },
  {
    icon: Sparkles,
    iconBg: "bg-brand-teal/10 ring-1 ring-brand-teal/20",
    iconColor: "text-brand-teal",
    label: "AI Best Price",
    sub: "Found in seconds",
    pos: "top-[62%] left-[3%]",
    delay: 1.0,
    range: 9,
  },
  {
    icon: ShieldCheck,
    iconBg: "bg-blue-50 ring-1 ring-blue-100",
    iconColor: "text-blue-600",
    label: "Audit-Ready",
    sub: "GST compliant, monthly",
    pos: "bottom-[16%] right-[5%]",
    delay: 1.3,
    range: 6,
  },
];

function SolutionsBackground({ reduced }: { reduced: boolean | null }) {
  const nodes = [
    { cx: "13%", cy: "26%" },
    { cx: "36%", cy: "58%" },
    { cx: "64%", cy: "22%" },
    { cx: "87%", cy: "54%" },
  ];

  return (
    <>
      {/* Ambient orbs */}
      <motion.div
        animate={reduced ? {} : { scale: [1, 1.06, 1], opacity: [0.07, 0.11, 0.07] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-40 right-[-8%] w-[800px] h-[800px] rounded-full bg-brand-teal blur-[160px] pointer-events-none"
      />
      <div className="absolute bottom-[-8%] left-[-6%] w-[600px] h-[600px] rounded-full bg-brand-navy/[0.04] blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[300px] rounded-full bg-brand-teal/[0.03] blur-[80px] pointer-events-none" />

      {/* SVG network */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true">
        <defs>
          <filter id="node-glow-sol">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        {nodes.slice(0, -1).map((n, i) => (
          <motion.line
            key={i}
            x1={n.cx} y1={n.cy}
            x2={nodes[i + 1].cx} y2={nodes[i + 1].cy}
            stroke="#0F766E"
            strokeWidth="1.5"
            strokeDasharray="7 5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.2 }}
            transition={{ duration: 1.5, delay: i * 0.22 + 0.35, ease: "easeOut" }}
          />
        ))}
        {nodes.map((n, i) => (
          <g key={i} filter="url(#node-glow-sol)">
            <motion.circle
              cx={n.cx} cy={n.cy} r="5"
              fill="#0F766E"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.45 }}
              transition={{ duration: 0.5, delay: i * 0.13 }}
            />
            {!reduced && (
              <motion.circle
                cx={n.cx} cy={n.cy} r="5"
                fill="none"
                stroke="#19B89A"
                strokeWidth="1.5"
                animate={{ r: [5, 22], opacity: [0.5, 0] }}
                transition={{ duration: 2.4, delay: i * 0.5 + 0.6, repeat: Infinity, repeatDelay: 1.2 }}
              />
            )}
          </g>
        ))}
      </svg>

      {/* Floating metric chips */}
      {FLOAT_CHIPS.map((chip, i) => {
        const Icon = chip.icon;
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.86, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: chip.delay, ease: SOLUTIONS_EASE }}
            className={`hidden xl:block absolute ${chip.pos} z-20`}
          >
            <motion.div
              animate={reduced ? {} : { y: [0, -chip.range, 0] }}
              transition={{ duration: 4.2 + i * 0.8, repeat: Infinity, ease: "easeInOut" }}
              className="flex items-center gap-2.5 bg-white/92 backdrop-blur-md ring-1 ring-black/[0.06] shadow-[0_8px_40px_-8px_rgba(11,31,51,0.18)] rounded-2xl px-3.5 py-2.5"
            >
              <div className={`w-9 h-9 rounded-xl ${chip.iconBg} flex items-center justify-center shrink-0`}>
                <Icon className={`h-[18px] w-[18px] ${chip.iconColor}`} />
              </div>
              <div>
                <p className="text-[11px] font-bold text-brand-navy leading-none">{chip.label}</p>
                <p className="text-[10px] text-brand-black/45 mt-0.5 leading-none">{chip.sub}</p>
              </div>
            </motion.div>
          </motion.div>
        );
      })}
    </>
  );
}

/* Problem chips for Why hero */
const WHY_PROBLEMS = [
  { label: "12 suppliers to chase", delay: 0.6, range: 6 },
  { label: "Scattered bills & paperwork", delay: 0.85, range: 8 },
  { label: "No spend visibility", delay: 1.1, range: 5 },
];

function WhyBackground({ reduced }: { reduced: boolean | null }) {
  return (
    <>
      {/* Ambient glow */}
      <motion.div
        animate={reduced ? {} : { scale: [1, 1.08, 1], opacity: [0.05, 0.09, 0.05] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 right-[-6%] w-[700px] h-[700px] rounded-full bg-brand-teal blur-[150px] pointer-events-none"
      />
      <div className="absolute bottom-0 left-[-4%] w-[500px] h-[400px] rounded-full bg-brand-navy/[0.04] blur-[100px] pointer-events-none" />

      {/* Problem chips — crossed out */}
      <div className="hidden xl:block absolute right-[6%] top-[18%] space-y-3 z-20">
        {WHY_PROBLEMS.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: p.delay, ease: SOLUTIONS_EASE }}
          >
            <motion.div
              animate={reduced ? {} : { y: [0, -p.range, 0] }}
              transition={{ duration: 4 + i * 0.7, repeat: Infinity, ease: "easeInOut" }}
              className="flex items-center gap-2.5 bg-white/80 backdrop-blur-md ring-1 ring-red-100 shadow-[0_6px_28px_-6px_rgba(11,31,51,0.14)] rounded-xl px-3.5 py-2"
            >
              <div className="w-7 h-7 rounded-lg bg-red-50 flex items-center justify-center shrink-0">
                <XIcon className="h-3.5 w-3.5 text-red-400" />
              </div>
              <p className="text-[11px] font-semibold text-brand-black/60 line-through leading-none">{p.label}</p>
            </motion.div>
          </motion.div>
        ))}

        {/* Resolution chip */}
        <motion.div
          initial={{ opacity: 0, x: 30, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.4, ease: SOLUTIONS_EASE }}
        >
          <motion.div
            animate={reduced ? {} : { y: [0, -7, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            className="flex items-center gap-2.5 bg-brand-navy shadow-[0_8px_32px_-6px_rgba(15,118,110,0.4)] rounded-xl px-3.5 py-2.5 border border-brand-teal/30"
          >
            <div className="w-7 h-7 rounded-lg bg-brand-teal/20 flex items-center justify-center shrink-0">
              <CheckCircle2 className="h-3.5 w-3.5 text-brand-tealLight" />
            </div>
            <div>
              <p className="text-[11px] font-bold text-white leading-none">PrimeServe</p>
              <p className="text-[10px] text-brand-tealLight/80 mt-0.5 leading-none">One name. End to end.</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}

/* About hero right-side card */
function AboutHeroCard({ reduced }: { reduced: boolean | null }) {
  const pills = [
    { icon: Truck, label: "24h delivery, pan-India", color: "text-brand-teal" },
    { icon: FileCheck, label: "One invoice, every order", color: "text-brand-teal" },
    { icon: Sparkles, label: "AI best-price quotes", color: "text-amber-400" },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, x: 40, y: 10 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.7, delay: 0.45, ease: SOLUTIONS_EASE }}
      className="hidden lg:block"
    >
      <motion.div
        animate={reduced ? {} : { y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="rounded-3xl bg-gradient-to-br from-brand-navy to-[#0d1829] border border-white/10 shadow-[0_24px_80px_-16px_rgba(11,31,51,0.5)] p-8 space-y-6"
      >
        {/* Mission */}
        <div className="space-y-2">
          <span className="text-[10px] font-bold uppercase tracking-widest text-brand-tealLight/60">Our Mission</span>
          <p className="font-display font-bold text-xl text-white leading-snug">
            Make facility supply effortless for every business in India.
          </p>
        </div>

        <div className="h-px bg-white/8" />

        {/* Metric pills */}
        <div className="space-y-3">
          {pills.map(({ icon: Icon, label, color }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.65 + i * 0.1, ease: "easeOut" }}
              className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/8 hover:border-brand-teal/30 transition-colors"
            >
              <div className="w-8 h-8 rounded-lg bg-brand-teal/15 flex items-center justify-center shrink-0">
                <Icon className={`h-4 w-4 ${color}`} />
              </div>
              <span className="text-sm font-medium text-white/80">{label}</span>
            </motion.div>
          ))}
        </div>

        {/* Bottom tagline */}
        <div className="flex items-center gap-2 pt-1">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-teal animate-pulse" />
          <span className="text-[11px] text-white/35 font-medium">Sourced · Delivered · Invoiced under one name</span>
        </div>
      </motion.div>
    </motion.div>
  );
}

function AboutBackground({ reduced }: { reduced: boolean | null }) {
  return (
    <>
      <motion.div
        animate={reduced ? {} : { scale: [1, 1.06, 1], opacity: [0.06, 0.1, 0.06] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-40 right-[-8%] w-[700px] h-[700px] rounded-full bg-brand-teal blur-[150px] pointer-events-none"
      />
      <div className="absolute bottom-[-6%] left-[-4%] w-[500px] h-[400px] rounded-full bg-brand-navy/[0.04] blur-[100px] pointer-events-none" />
    </>
  );
}

/* Contact hero right-side card */
function ContactHeroCard({ reduced }: { reduced: boolean | null }) {
  const items = [
    { icon: Sparkles, title: "AI best-price quote", sub: "Upload a list, get the best price in seconds" },
    { icon: Truck, title: "24h delivery, pan-India", sub: "Order today, doorstep tomorrow" },
    { icon: CreditCard, title: "Credit or instant pay", sub: "Buy the way your business prefers" },
    { icon: FileCheck, title: "One invoice for everything", sub: "PO, DC & invoice — all under one name" },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, x: 40, y: 10 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.7, delay: 0.45, ease: SOLUTIONS_EASE }}
      className="hidden lg:block"
    >
      <motion.div
        animate={reduced ? {} : { y: [0, -6, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        className="rounded-3xl bg-white border border-black/6 shadow-[0_24px_80px_-16px_rgba(11,31,51,0.18)] p-8 space-y-5"
      >
        <div className="space-y-1">
          <span className="text-[10px] font-bold uppercase tracking-widest text-brand-teal/60">What you get</span>
          <p className="font-display font-semibold text-lg text-brand-black leading-snug">
            Everything you need, from one name.
          </p>
        </div>

        <div className="space-y-3">
          {items.map(({ icon: Icon, title, sub }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.65 + i * 0.09, ease: "easeOut" }}
              className="flex items-start gap-3 p-3 rounded-xl hover:bg-brand-nearWhite transition-colors"
            >
              <div className="w-9 h-9 rounded-xl bg-brand-teal/10 flex items-center justify-center shrink-0 mt-0.5">
                <Icon className="h-4 w-4 text-brand-teal" />
              </div>
              <div>
                <p className="text-sm font-semibold text-brand-black leading-snug">{title}</p>
                <p className="text-xs text-brand-black/45 mt-0.5 leading-snug">{sub}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex items-center gap-2 pt-1 border-t border-black/5">
          <BarChart3 className="h-3.5 w-3.5 text-brand-teal/50" />
          <span className="text-[11px] text-brand-black/35 font-medium">We respond within 24 hours, Mon–Sat.</span>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ContactBackground({ reduced }: { reduced: boolean | null }) {
  return (
    <>
      {/* Soft teal radial glow */}
      <motion.div
        animate={reduced ? {} : { scale: [1, 1.05, 1], opacity: [0.06, 0.1, 0.06] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 right-[-6%] w-[600px] h-[600px] rounded-full bg-brand-teal blur-[140px] pointer-events-none"
      />
      <div className="absolute bottom-0 left-[-4%] w-[400px] h-[300px] rounded-full bg-brand-navy/[0.03] blur-[90px] pointer-events-none" />
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.018]"
        style={{
          backgroundImage: "radial-gradient(circle, #0F766E 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />
    </>
  );
}

const ease = [0.21, 0.47, 0.32, 0.98] as const;

export function PageHero({
  badge,
  headline,
  subtext,
  align = "center",
  variant = "default",
  cta,
  secondaryCta,
}: PageHeroProps) {
  const prefersReduced = useReducedMotion();

  const baseDelay = badge ? 0.05 : 0;
  const headlineDelay = badge ? 0.15 : 0.05;
  const subtextDelay = badge ? 0.25 : 0.15;
  const ctaDelay = badge ? 0.38 : 0.28;

  /* Split layout for about + contact variants */
  const isSplit = variant === "about" || variant === "contact";
  const effectiveAlign = isSplit ? "left" : align;

  return (
    <section className={`${variant === "solutions" ? "pt-36 pb-28" : "pt-32 pb-16"} bg-brand-nearWhite relative overflow-hidden`}>
      {/* Default teal glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-brand-teal/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-brand-navy/[0.03] blur-3xl pointer-events-none" />

      {/* Variant decorations */}
      {variant === "solutions" && <SolutionsBackground reduced={prefersReduced} />}
      {variant === "why"       && <WhyBackground       reduced={prefersReduced} />}
      {variant === "about"     && <AboutBackground     reduced={prefersReduced} />}
      {variant === "contact"   && <ContactBackground   reduced={prefersReduced} />}

      <div className="container max-w-[1200px] relative z-10">
        <div className={isSplit ? "grid lg:grid-cols-2 gap-12 lg:gap-16 items-center" : ""}>

          {/* Text column (or full-width for non-split) */}
          <div className={`flex flex-col gap-5 ${effectiveAlign === "center" ? "items-center text-center" : "items-start"}`}>

            {badge && (
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: baseDelay, ease }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-teal/10 text-brand-teal text-sm font-semibold"
              >
                {variant === "solutions" ? (
                  <Sparkles className="h-3.5 w-3.5" />
                ) : variant === "about" ? (
                  <Users className="h-3.5 w-3.5" />
                ) : variant === "contact" ? (
                  <Target className="h-3.5 w-3.5" />
                ) : (
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-teal" />
                )}
                {badge}
                {variant === "solutions" && (
                  <span className="relative flex h-1.5 w-1.5 shrink-0">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-brand-teal opacity-60 animate-ping" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-teal" />
                  </span>
                )}
              </motion.span>
            )}

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: headlineDelay, ease }}
              className={`font-display text-hero text-brand-black ${effectiveAlign === "center" ? "max-w-3xl" : "max-w-2xl"}`}
            >
              {variant === "solutions" && headline.includes(" run ") ? (
                <>
                  {headline.split(" run ")[0]}{" "}
                  <span className="text-gradient-teal">run {headline.split(" run ")[1]}</span>
                </>
              ) : (
                headline
              )}
            </motion.h1>

            {subtext && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: subtextDelay, ease }}
                className={`text-body-lg text-brand-black/55 ${effectiveAlign === "center" ? "max-w-2xl" : "max-w-xl"}`}
              >
                {subtext}
              </motion.p>
            )}

            {cta && (
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: ctaDelay, ease }}
                className={`flex flex-wrap gap-3 ${effectiveAlign === "center" ? "justify-center" : "justify-start"}`}
              >
                {/* Pulsing primary CTA */}
                <div className="relative inline-flex">
                  {!prefersReduced && (
                    <motion.div
                      animate={{ scale: [1, 1.22, 1], opacity: [0.28, 0, 0.28] }}
                      transition={{ duration: 2.8, repeat: Infinity, ease: "easeOut" }}
                      className="absolute inset-0 rounded-full bg-brand-teal/25 pointer-events-none"
                    />
                  )}
                  <Button variant="primary" size="lg" className="relative rounded-full" asChild>
                    <Link href={cta.href}>
                      {cta.label}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>

                {secondaryCta && (
                  <Button
                    variant="outline"
                    size="lg"
                    className="rounded-full border-brand-black/10 text-brand-black"
                    asChild
                  >
                    <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
                  </Button>
                )}
              </motion.div>
            )}

          </div>

          {/* Right visual column — only for split variants */}
          {variant === "about"   && <AboutHeroCard   reduced={prefersReduced} />}
          {variant === "contact" && <ContactHeroCard reduced={prefersReduced} />}

        </div>
      </div>
    </section>
  );
}
