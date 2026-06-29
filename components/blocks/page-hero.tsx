"use client";

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Building2,
  CheckCircle2,
  ClipboardList,
  CreditCard,
  FileCheck,
  PackageCheck,
  ReceiptText,
  Sparkles,
  Target,
  Truck,
  Users,
  X as XIcon,
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

const ease = [0.21, 0.47, 0.32, 0.98] as const;

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
    icon: FileCheck,
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
      <motion.div
        animate={reduced ? {} : { scale: [1, 1.06, 1], opacity: [0.07, 0.11, 0.07] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-40 right-[-8%] h-[800px] w-[800px] rounded-full bg-brand-teal blur-[160px] pointer-events-none"
      />
      <div className="absolute bottom-[-8%] left-[-6%] h-[600px] w-[600px] rounded-full bg-brand-navy/[0.04] blur-[120px] pointer-events-none" />
      <svg className="absolute inset-0 h-full w-full pointer-events-none" aria-hidden="true">
        {nodes.slice(0, -1).map((n, i) => (
          <motion.line
            key={i}
            x1={n.cx}
            y1={n.cy}
            x2={nodes[i + 1].cx}
            y2={nodes[i + 1].cy}
            stroke="#0F766E"
            strokeWidth="1.5"
            strokeDasharray="7 5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.2 }}
            transition={{ duration: 1.5, delay: i * 0.22 + 0.35, ease: "easeOut" }}
          />
        ))}
        {nodes.map((n, i) => (
          <g key={i}>
            <motion.circle
              cx={n.cx}
              cy={n.cy}
              r="5"
              fill="#0F766E"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.45 }}
              transition={{ duration: 0.5, delay: i * 0.13 }}
            />
            {!reduced && (
              <motion.circle
                cx={n.cx}
                cy={n.cy}
                r="5"
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

      {FLOAT_CHIPS.map((chip, i) => {
        const Icon = chip.icon;
        return (
          <motion.div
            key={chip.label}
            initial={{ opacity: 0, scale: 0.86, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: chip.delay, ease }}
            className={`hidden xl:block absolute ${chip.pos} z-20`}
          >
            <motion.div
              animate={reduced ? {} : { y: [0, -chip.range, 0] }}
              transition={{ duration: 4.2 + i * 0.8, repeat: Infinity, ease: "easeInOut" }}
              className="flex items-center gap-2.5 rounded-2xl bg-white/92 px-3.5 py-2.5 shadow-[0_8px_40px_-8px_rgba(11,31,51,0.18)] ring-1 ring-black/[0.06] backdrop-blur-md"
            >
              <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${chip.iconBg}`}>
                <Icon className={`h-[18px] w-[18px] ${chip.iconColor}`} />
              </div>
              <div>
                <p className="text-[11px] font-bold leading-none text-brand-navy">{chip.label}</p>
                <p className="mt-0.5 text-[10px] leading-none text-brand-black/45">{chip.sub}</p>
              </div>
            </motion.div>
          </motion.div>
        );
      })}
    </>
  );
}

function QuietBackground() {
  return (
    <>
      <div className="absolute right-0 top-0 h-[520px] w-[520px] rounded-full bg-brand-teal/[0.045] blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[-12%] left-[-8%] h-[360px] w-[520px] rounded-full bg-brand-navy/[0.035] blur-[110px] pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.018] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #0B1F33 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
    </>
  );
}

function WhyHeroVisual() {
  const chaos = ["Supplier follow-ups", "Mismatched invoices", "No spend view"];
  const controlled = [
    { icon: Sparkles, label: "Source", detail: "Best-price quote" },
    { icon: Truck, label: "Deliver", detail: "24h pan-India" },
    { icon: ReceiptText, label: "Invoice", detail: "One clean trail" },
    { icon: BarChart3, label: "Control", detail: "Live spend view" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 32 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.35, ease }}
      className="relative"
    >
      <div className="rounded-[1.75rem] bg-brand-navy p-6 shadow-[0_32px_90px_-30px_rgba(0,133,107,0.35)] ring-1 ring-white/10 relative overflow-hidden">
        {/* Ambient glow accents */}
        <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-brand-teal/20 blur-3xl pointer-events-none" />
        <div className="absolute -left-8 bottom-8 h-32 w-32 rounded-full bg-brand-teal/10 blur-2xl pointer-events-none" />

        {/* Before - faded pain chips */}
        <div className="relative mb-4">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 mb-3">Before PrimeServe</p>
          <div className="flex flex-wrap gap-2">
            {chaos.map((item) => (
              <div key={item} className="flex items-center gap-1.5 rounded-lg bg-white/5 border border-white/8 px-3 py-1.5">
                <XIcon className="h-3 w-3 text-white/25 shrink-0" />
                <span className="text-xs text-white/30 line-through decoration-white/20">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Teal gradient divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-brand-teal/40 to-transparent mb-5" />

        {/* After PrimeServe */}
        <div className="relative">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-tealLight mb-3">After PrimeServe</p>
          <h3 className="font-display text-2xl font-bold text-white leading-tight mb-5">
            One responsible name<br />from quote to report.
          </h3>

          <div className="grid grid-cols-2 gap-3">
            {controlled.map(({ icon: Icon, label, detail }) => (
              <div key={label} className="rounded-xl border border-white/10 bg-white/[0.06] p-4 hover:bg-white/[0.1] transition-colors">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-teal/20">
                    <Icon className="h-3.5 w-3.5 text-brand-tealLight" />
                  </span>
                  <span className="font-semibold text-white text-sm">{label}</span>
                </div>
                <p className="text-xs text-white/45">{detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Live status bar */}
        <div className="relative mt-5 flex items-center gap-2.5 rounded-full border border-brand-teal/25 bg-brand-teal/10 px-4 py-2.5">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-tealLight opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-teal" />
          </span>
          <span className="text-sm font-semibold text-brand-tealLight">PrimeServe stays accountable.</span>
        </div>
      </div>
    </motion.div>
  );
}

function AboutHeroCard() {
  const items = [
    { icon: Building2, label: "Built from operations", sub: "Not a boardroom assumption" },
    { icon: PackageCheck, label: "One supply owner", sub: "Sourcing, delivery, billing" },
    { icon: BarChart3, label: "Spend clarity", sub: "Every order visible" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 32 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.35, ease }}
      className="rounded-[1.75rem] border border-brand-navy/10 bg-white p-6 shadow-[0_24px_70px_-38px_rgba(11,31,51,0.55)]"
    >
      <div className="rounded-2xl bg-brand-nearWhite p-5">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-teal">Our operating promise</p>
        <h3 className="mt-3 font-display text-2xl font-bold leading-tight text-brand-navy">
          Fewer vendors to manage. More control for the founder.
        </h3>
      </div>
      <div className="mt-4 space-y-3">
        {items.map(({ icon: Icon, label, sub }) => (
          <div key={label} className="flex items-center gap-3 rounded-2xl border border-brand-navy/8 bg-white px-4 py-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-teal/10 text-brand-teal">
              <Icon className="h-5 w-5" />
            </span>
            <span>
              <span className="block font-semibold text-brand-black">{label}</span>
              <span className="text-sm text-brand-black/50">{sub}</span>
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function ContactHeroCard() {
  const steps = [
    { label: "Send", detail: "Your supply list or requirement" },
    { label: "Receive", detail: "Best-price quotation with terms" },
    { label: "Operate", detail: "Delivery, invoice, and updates" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 32 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.35, ease }}
      className="rounded-[1.75rem] border border-brand-navy/10 bg-white p-6 shadow-[0_24px_70px_-38px_rgba(11,31,51,0.55)]"
    >
      <div className="flex items-center justify-between gap-4 border-b border-brand-navy/10 pb-5">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-teal">Quote desk</p>
          <h3 className="mt-2 font-display text-2xl font-bold text-brand-navy">What happens next</h3>
        </div>
        <span className="rounded-full bg-brand-teal/10 px-3 py-1.5 text-sm font-bold text-brand-teal">24h reply</span>
      </div>

      <div className="mt-5 space-y-4">
        {steps.map((step, index) => (
          <div key={step.label} className="grid grid-cols-[2.5rem_1fr] gap-3">
            <div className="relative flex justify-center">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-navy text-sm font-bold text-white">
                {index + 1}
              </span>
              {index < steps.length - 1 && <span className="absolute top-10 h-8 w-px bg-brand-navy/15" />}
            </div>
            <div className="rounded-2xl bg-brand-nearWhite px-4 py-3">
              <p className="font-semibold text-brand-black">{step.label}</p>
              <p className="text-sm text-brand-black/55">{step.detail}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <div className="rounded-2xl bg-brand-teal/10 p-4">
          <CreditCard className="h-5 w-5 text-brand-teal" />
          <p className="mt-2 text-sm font-semibold text-brand-black">Credit or instant pay</p>
        </div>
        <div className="rounded-2xl bg-brand-teal/10 p-4">
          <FileCheck className="h-5 w-5 text-brand-teal" />
          <p className="mt-2 text-sm font-semibold text-brand-black">One invoice trail</p>
        </div>
      </div>
    </motion.div>
  );
}

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
  const isSplit = variant === "why" || variant === "about" || variant === "contact";
  const effectiveAlign = isSplit ? "left" : align;
  const sectionTone = variant === "solutions" ? "bg-brand-nearWhite pt-36 pb-28" : "bg-white pt-32 pb-20";

  return (
    <section className={`${sectionTone} relative overflow-hidden`}>
      {variant === "solutions" ? <SolutionsBackground reduced={prefersReduced} /> : <QuietBackground />}

      <div className="container relative z-10 max-w-[1200px]">
        <div className={isSplit ? "grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16" : ""}>
          <div className={`flex flex-col gap-5 ${effectiveAlign === "center" ? "items-center text-center" : "items-start"}`}>
            {badge && (
              <motion.span
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05, ease }}
                className="inline-flex items-center gap-2 rounded-full border border-brand-teal/15 bg-brand-teal/10 px-3.5 py-1.5 text-sm font-semibold text-brand-teal"
              >
                {variant === "solutions" ? (
                  <Sparkles className="h-3.5 w-3.5" />
                ) : variant === "about" ? (
                  <Users className="h-3.5 w-3.5" />
                ) : variant === "contact" ? (
                  <Target className="h-3.5 w-3.5" />
                ) : (
                  <ClipboardList className="h-3.5 w-3.5" />
                )}
                {badge}
              </motion.span>
            )}

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.15, ease }}
              className={`font-display text-hero font-extrabold text-brand-black ${effectiveAlign === "center" ? "max-w-3xl" : "max-w-2xl"}`}
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
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25, ease }}
                className={`text-body-lg leading-relaxed text-brand-black/60 ${effectiveAlign === "center" ? "max-w-2xl" : "max-w-xl"}`}
              >
                {subtext}
              </motion.p>
            )}

            {cta && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.36, ease }}
                className={`flex flex-wrap gap-3 ${effectiveAlign === "center" ? "justify-center" : "justify-start"}`}
              >
                <Button variant="primary" size="lg" className="rounded-full" asChild>
                  <Link href={cta.href}>
                    {cta.label}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                {secondaryCta && (
                  <Button variant="outline" size="lg" className="rounded-full border-brand-navy/15 text-brand-navy" asChild>
                    <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
                  </Button>
                )}
              </motion.div>
            )}
          </div>

          {variant === "why" && <WhyHeroVisual />}
          {variant === "about" && <AboutHeroCard />}
          {variant === "contact" && <ContactHeroCard />}
        </div>
      </div>
    </section>
  );
}
