"use client";

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  Truck,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

/* Monthly spend bars — illustrative portal data */
const BARS = [44, 58, 50, 66, 60, 78];

/* ── CountUp ─────────────────────────────────────────────── */
function CountUp({
  to,
  suffix = "",
  startDelay = 0,
}: {
  to: number;
  suffix?: string;
  startDelay?: number;
}) {
  const ref = React.useRef<HTMLSpanElement>(null);

  React.useEffect(() => {
    const node = ref.current;
    if (!node) return;
    let rafId: number;
    const startTime = performance.now() + startDelay * 1000;
    const duration = 1600;

    function tick(now: number) {
      const elapsed = Math.max(0, now - startTime);
      const t = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      node!.textContent = `${Math.round(eased * to)}${suffix}`;
      if (t < 1) rafId = requestAnimationFrame(tick);
    }

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <span ref={ref}>0{suffix}</span>;
}

/* ── Main component ──────────────────────────────────────── */
export function HeroPrimeServe() {
  const reduced = useReducedMotion();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#FAFBFC] pt-28 pb-24 lg:pt-24">

      {/* Grid lines — hidden on mobile where mask-image support is unreliable */}
      <div
        className="hidden sm:block absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#0f766e 1px, transparent 1px), linear-gradient(90deg, #0f766e 1px, transparent 1px)",
          backgroundSize: "62px 62px",
          WebkitMaskImage:
            "radial-gradient(ellipse 85% 65% at 55% 40%, black, transparent 75%)",
          maskImage:
            "radial-gradient(ellipse 85% 65% at 55% 40%, black, transparent 75%)",
        }}
      />

      {/* Mesh glow orbs — hidden on mobile to prevent teal bleed across narrow viewport */}
      <motion.div
        animate={reduced ? {} : { y: [0, -26, 0], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        className="hidden sm:block absolute -top-24 right-[-6%] w-[640px] h-[640px] rounded-full bg-brand-teal/[0.10] blur-[130px] pointer-events-none will-change-transform"
      />
      <div className="hidden sm:block absolute top-1/3 left-[-10%] w-[460px] h-[460px] rounded-full bg-[#19B89A]/[0.07] blur-[120px] pointer-events-none" />
      <div className="hidden sm:block absolute bottom-[-10%] left-1/3 w-[420px] h-[420px] rounded-full bg-brand-navy/[0.04] blur-[110px] pointer-events-none" />

      <div className="container max-w-[1200px] relative z-10">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-y-16 gap-x-10 lg:gap-x-16 items-center">

          {/* ── LEFT · MESSAGE ─────────────────────────────── */}
          <div className="max-w-xl">

            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="inline-flex items-center gap-2 rounded-full border border-brand-teal/20 bg-white/70 backdrop-blur pl-2 pr-3.5 py-1.5 shadow-sm"
            >
              <span className="relative flex h-2 w-2 shrink-0">
                {!reduced && (
                  <span className="absolute inline-flex h-full w-full rounded-full bg-brand-teal opacity-60 animate-ping" />
                )}
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-teal" />
              </span>
              <span className="text-xs font-semibold tracking-wide text-brand-teal">
                Now delivering facility supplies across India
              </span>
            </motion.div>

            {/* Headline — no delay so LCP is measured as early as possible */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: EASE }}
              className="mt-6 font-display text-[2.9rem] sm:text-6xl lg:text-[4.5rem] font-extrabold tracking-[-0.02em] leading-[1.02] text-brand-black"
            >
              Order facility supplies.{" "}
              <span className="text-gradient-teal">Control every rupee.</span>
            </motion.h1>

            {/* Subcopy */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
              className="mt-6 text-brand-black font-medium text-base sm:text-lg leading-relaxed max-w-lg"
            >
              PrimeServe sources, delivers, and invoices all your housekeeping &amp;
              facility supplies under one roof, AI best-price quotes, 24-hour
              delivery, and total spend control in one portal.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18, ease: EASE }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <PulsingCTA href="/contact" label="Request a Quotation" reduced={!!reduced} />
              <Button
                variant="outline"
                size="default"
                className="rounded-full border-brand-black/10 text-brand-black"
                asChild
              >
                <Link href="/solutions">
                  <ExternalLink className="h-3.5 w-3.5" />
                  See how it works
                </Link>
              </Button>
            </motion.div>

            {/* Stat strip — confirmed facts only */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.26, ease: EASE }}
              className="mt-10 flex items-center gap-5 sm:gap-7"
            >
              <Stat label="delivery, pan-India">
                <CountUp to={24} suffix=" Hour" startDelay={0.6} />
              </Stat>
              <span className="h-9 w-px bg-brand-black/10" />
              <Stat label="or instant payment">Credit</Stat>
              <span className="h-9 w-px bg-brand-black/10" />
              <Stat label=" for all PO, invoice & DC">1 Roof</Stat>
            </motion.div>
          </div>

          {/* ── RIGHT · PRODUCT SHOWPIECE ──────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 34, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.2, ease: EASE }}
            className="relative mx-auto w-full max-w-[440px] lg:max-w-none lg:ml-12"
          >
            {/* Glow behind card — reduced on mobile to prevent green background wash */}
            <div className="absolute inset-6 rounded-[2.5rem] bg-brand-teal/[0.06] sm:bg-brand-teal/25 blur-[20px] sm:blur-[70px] pointer-events-none" />

            {/* Dark dashboard card */}
            <div className="relative rounded-[1.75rem] bg-gradient-to-br from-[#0E2438] to-[#081523] ring-1 ring-white/10 shadow-[0_40px_100px_-30px_rgba(11,31,51,0.75)] p-6 overflow-hidden">

              <div
                className="absolute inset-x-0 top-0 h-px pointer-events-none"
                style={{ background: "linear-gradient(90deg, transparent, rgba(25,184,154,0.6), transparent)" }}
              />
              <div
                className="absolute inset-0 pointer-events-none opacity-60"
                style={{ background: "radial-gradient(600px 240px at 80% -10%, rgba(25,184,154,0.18), transparent 60%)" }}
              />

              {/* Header */}
              <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="h-9 w-9 rounded-xl bg-brand-teal/15 ring-1 ring-brand-teal/30 flex items-center justify-center">
                    <ShieldCheck className="h-[18px] w-[18px] text-brand-tealLight" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-bold font-display leading-none">Spend Control</p>
                    <p className="text-[11px] text-white/40 mt-1">Your Purchase portal</p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-2.5 py-1 ring-1 ring-emerald-400/30">
                  <motion.span
                    animate={reduced ? {} : { opacity: [1, 0.2, 1] }}
                    transition={{ duration: 1.6, repeat: Infinity }}
                    className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block shrink-0"
                  />
                  <span className="text-[10px] font-semibold text-emerald-300">Live</span>
                </div>
              </div>

              {/* Sample monthly spend */}
              <div className="relative mt-6">
                <div className="flex items-end gap-2">
                  <span className="font-display text-5xl font-extrabold text-white tracking-tight leading-none">
                    ₹3.4L
                  </span>
                  <span className="mb-1.5 inline-flex items-center gap-1 rounded-md bg-emerald-500/15 px-1.5 py-0.5 text-[11px] font-bold text-emerald-300 ring-1 ring-emerald-400/20">
                    on budget
                  </span>
                </div>
                <p className="text-white/45 text-xs mt-2">tracked this month · 134 orders</p>
              </div>

              {/* Animated bar chart */}
              <div className="relative mt-6">
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-white/35">Monthly spend</span>
                  <span className="text-[10px] font-semibold text-brand-tealLight">Fully traceable</span>
                </div>
                <div className="flex items-end gap-1.5 h-24">
                  {BARS.map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ scaleY: 0.04 }}
                      animate={{ scaleY: h / 100 }}
                      transition={{ delay: 0.7 + i * 0.09, duration: 0.7, ease: EASE }}
                      style={{ transformOrigin: "bottom", willChange: "transform" }}
                      className={`flex-1 h-full rounded-md ${
                        i === BARS.length - 1
                          ? "bg-gradient-to-t from-brand-teal to-brand-tealLight shadow-[0_0_14px_rgba(25,184,154,0.5)]"
                          : "bg-gradient-to-t from-white/[0.06] to-white/20"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Footer order-status (illustrative) */}
              <div className="relative mt-6 grid grid-cols-3 gap-3 pt-5 border-t border-white/10">
                {[
                  { v: "128", l: "Delivered" },
                  { v: "6", l: "In transit" },
                  { v: "12", l: "Quotes" },
                ].map((s) => (
                  <div key={s.l}>
                    <p className="font-display text-lg font-bold text-brand-tealLight leading-none">{s.v}</p>
                    <p className="text-[10px] text-white/40 mt-1 leading-tight">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating chip · top-left — AI quote */}
            <FloatChip
              className="hidden sm:flex absolute -top-12 -left-5 lg:-left-10"
              delay={0.7}
              reduced={!!reduced}
            >
              <div className="h-8 w-8 rounded-lg bg-brand-teal/10 ring-1 ring-brand-teal/20 flex items-center justify-center shrink-0">
                <Sparkles className="h-4 w-4 text-brand-teal" />
              </div>
              <div>
                <p className="text-[11px] font-bold text-brand-navy leading-none">Quote ready</p>
                <p className="text-[10px] text-brand-teal font-semibold mt-0.5">Best price · AI-matched</p>
              </div>
            </FloatChip>

            {/* Floating chip · bottom-right — 24h delivery, own-brand */}
            <FloatChip
              className="hidden sm:flex absolute -bottom-12 -right-4 lg:-right-9"
              delay={0.95}
              reduced={!!reduced}
              floatRange={9}
            >
              <div className="h-8 w-8 rounded-lg bg-emerald-50 ring-1 ring-emerald-100 flex items-center justify-center shrink-0">
                <Truck className="h-4 w-4 text-emerald-500" />
              </div>
              <div>
                <p className="text-[11px] font-bold text-brand-navy leading-none">Delivered in 24h</p>
                <p className="text-[10px] text-emerald-600 font-semibold mt-0.5">PO · Invoice · DC</p>
              </div>
            </FloatChip>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

/* ── Stat ────────────────────────────────────────────────── */
function Stat({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <div>
      <p className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-brand-black leading-none">
        {children}
      </p>
      <p className="mt-1.5 text-[11px] font-semibold bg-gradient-to-r from-brand-navy to-brand-teal bg-clip-text text-transparent leading-tight max-w-[110px]">{label}</p>
    </div>
  );
}

/* ── FloatChip ───────────────────────────────────────────── */
function FloatChip({
  children,
  className,
  delay,
  reduced,
  floatRange = 7,
}: {
  children: React.ReactNode;
  className?: string;
  delay: number;
  reduced: boolean;
  floatRange?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.55, delay, ease: EASE }}
      className={className}
    >
      <motion.div
        animate={reduced ? {} : { y: [0, -floatRange, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay }}
        className="flex items-center gap-2.5 rounded-2xl bg-white/90 backdrop-blur-md ring-1 ring-black/5 shadow-[0_16px_40px_-12px_rgba(11,31,51,0.3)] px-3.5 py-2.5"
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

/* ── PulsingCTA ─────────────────────────────────────────── */
function PulsingCTA({ href, label, reduced }: { href: string; label: string; reduced: boolean }) {
  return (
    <div className="relative inline-flex">
      {!reduced && (
        <motion.div
          animate={{ scale: [1, 1.24, 1], opacity: [0.3, 0, 0.3] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeOut" }}
          className="absolute inset-0 rounded-full bg-brand-teal/30 pointer-events-none"
        />
      )}
      <Button variant="primary" size="default" className="relative rounded-full shadow-lg shadow-brand-teal/20" asChild>
        <Link href={href}>
          {label}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </Button>
    </div>
  );
}
