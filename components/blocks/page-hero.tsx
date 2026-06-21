"use client";

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
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

function SolutionsBackground({ reduced }: { reduced: boolean | null }) {
  const nodes = [
    { cx: "15%", cy: "30%", delay: 0 },
    { cx: "38%", cy: "55%", delay: 0.2 },
    { cx: "62%", cy: "25%", delay: 0.4 },
    { cx: "82%", cy: "60%", delay: 0.6 },
  ];
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10" aria-hidden="true">
      {nodes.slice(0, -1).map((n, i) => (
        <motion.line
          key={i}
          x1={n.cx} y1={n.cy}
          x2={nodes[i + 1].cx} y2={nodes[i + 1].cy}
          stroke="#0F766E"
          strokeWidth="1.5"
          strokeDasharray="6 4"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: n.delay + 0.3, ease: "easeOut" }}
        />
      ))}
      {nodes.map((n, i) => (
        <motion.circle
          key={i}
          cx={n.cx} cy={n.cy} r="6"
          fill="#0F766E"
          initial={{ scale: 0, opacity: 0 }}
          animate={reduced ? { scale: 1, opacity: 1 } : { scale: [0, 1.3, 1], opacity: 1 }}
          transition={{ duration: 0.5, delay: n.delay }}
        />
      ))}
    </svg>
  );
}

function WhyBackground({ reduced }: { reduced: boolean | null }) {
  const bars = [0.4, 0.6, 0.8, 0.55, 0.9, 0.7, 0.5];
  return (
    <div className="absolute right-8 bottom-0 flex items-end gap-2 h-32 opacity-[0.08] pointer-events-none" aria-hidden="true">
      {bars.map((h, i) => (
        <motion.div
          key={i}
          className="w-5 rounded-t-sm bg-brand-teal"
          initial={{ scaleY: 0, originY: 1 }}
          animate={{ scaleY: h }}
          transition={{ duration: 0.7, delay: i * 0.08, ease: "easeOut" }}
          style={{ height: "100%", transformOrigin: "bottom" }}
        />
      ))}
    </div>
  );
}

function AboutBackground({ reduced }: { reduced: boolean | null }) {
  return (
    <div className="absolute right-[-80px] top-[-80px] pointer-events-none" aria-hidden="true">
      {[200, 300, 400].map((size, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-brand-teal/15"
          style={{ width: size, height: size, top: -size / 2, right: -size / 2 }}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={reduced ? { scale: 1, opacity: 1 } : { scale: [0.8, 1.02, 1], opacity: [0, 0.6, 0.4] }}
          transition={{ duration: 1.5, delay: i * 0.25, ease: "easeOut", repeat: Infinity, repeatType: "reverse", repeatDelay: 2 }}
        />
      ))}
    </div>
  );
}

function ContactBackground({ reduced }: { reduced: boolean | null }) {
  const bubbles = [
    { x: "10%", y: "70%", size: 32, delay: 0 },
    { x: "25%", y: "50%", size: 20, delay: 0.4 },
    { x: "70%", y: "80%", size: 24, delay: 0.8 },
    { x: "85%", y: "40%", size: 16, delay: 1.2 },
  ];
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {bubbles.map((b, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-brand-teal/10"
          style={{ left: b.x, top: b.y, width: b.size, height: b.size }}
          animate={reduced ? {} : { y: [0, -20, 0], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 3 + i * 0.5, delay: b.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
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

  return (
    <section className="pt-32 pb-16 bg-brand-nearWhite relative overflow-hidden">
      {/* Default teal glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-brand-teal/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-brand-navy/[0.03] blur-3xl pointer-events-none" />

      {/* Variant decorations */}
      {variant === "solutions" && <SolutionsBackground reduced={prefersReduced} />}
      {variant === "why"       && <WhyBackground       reduced={prefersReduced} />}
      {variant === "about"     && <AboutBackground     reduced={prefersReduced} />}
      {variant === "contact"   && <ContactBackground   reduced={prefersReduced} />}

      <div className="container max-w-[1200px] relative z-10">
        <div className={`flex flex-col gap-5 ${align === "center" ? "items-center text-center" : "items-start"}`}>

          {badge && (
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: baseDelay, ease }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-teal/10 text-brand-teal text-sm font-semibold"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand-teal" />
              {badge}
            </motion.span>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: headlineDelay, ease }}
            className={`font-display text-hero text-brand-black ${align === "center" ? "max-w-3xl" : "max-w-2xl"}`}
          >
            {headline}
          </motion.h1>

          {subtext && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: subtextDelay, ease }}
              className={`text-body-lg text-brand-black/55 ${align === "center" ? "max-w-2xl" : "max-w-xl"}`}
            >
              {subtext}
            </motion.p>
          )}

          {cta && (
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: ctaDelay, ease }}
              className={`flex flex-wrap gap-3 ${align === "center" ? "justify-center" : "justify-start"}`}
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
      </div>
    </section>
  );
}
