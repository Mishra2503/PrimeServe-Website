"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Package, Zap, FileText, BarChart3, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

const SOLUTIONS = [
  {
    icon: Package,
    category: "Procurement",
    headline: "One vendor. 24-hour delivery.",
    body: "Upload a requirements list - PrimeServe sources everything and delivers pan-India in 24 hours. No supplier juggling, no chasing quotes.",
    metric: "24h",
    metricSub: "order to doorstep",
  },
  {
    icon: Zap,
    category: "Best Price",
    headline: "AI quote in seconds.",
    body: "AI scans your list against live supplier pricing and returns the best available rate - before the next meeting even starts.",
    metric: "Seconds",
    metricSub: "to a best-price quote",
  },
  {
    icon: FileText,
    category: "Compliance",
    headline: "One GST invoice, always.",
    body: "One PO, one invoice, one DC - all from PrimeServe. Month-end reconciliation in minutes, not weeks. Audit-ready every time.",
    metric: "GST",
    metricSub: "compliant, every order",
  },
  {
    icon: BarChart3,
    category: "Visibility",
    headline: "Live spend. Zero surprises.",
    body: "Real-time dashboard of every order, every outlet, every rupee - so founders and CFOs are never caught off guard at month-end.",
    metric: "Live",
    metricSub: "across all outlets",
  },
];

const TRUST = [
  "No setup fees",
  "Cancel anytime",
  "GST invoices always",
  "30-day credit available",
];

export function SolutionsHero() {
  return (
    <section className="relative overflow-hidden bg-[#FAFBFC] pt-32 pb-20">
      {/* Subtle top teal rule */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: 700,
          height: 2,
          background:
            "linear-gradient(90deg, transparent, #00856B 30%, #19B89A 50%, #00856B 70%, transparent)",
        }}
      />
      {/* Soft teal ambient from top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: 700,
          height: 280,
          background:
            "radial-gradient(ellipse at top center, rgba(0,133,107,0.06), transparent 70%)",
        }}
      />

      <div className="container max-w-[1200px] relative z-10">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="flex justify-center mb-8"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-teal/20 bg-brand-teal/[0.07] px-4 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-teal" />
            <span className="text-[11px] font-bold tracking-[0.12em] uppercase text-brand-teal">
              Solutions
            </span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.07, ease: EASE }}
          className="text-center font-display font-extrabold tracking-[-0.022em] leading-[1.06] text-brand-black max-w-[720px] mx-auto mb-5"
          style={{ fontSize: "clamp(2.2rem, 4.8vw, 3.75rem)" }}
        >
          Every facility problem,{" "}
          <span className="text-brand-teal">solved in one platform.</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.14, ease: EASE }}
          className="text-center text-base sm:text-[1.05rem] leading-relaxed max-w-[500px] mx-auto mb-14 text-brand-black/55"
        >
          Procurement, best-price quoting, GST compliance, and real-time spend
          control - handled end-to-end.
        </motion.p>

        {/* Solution cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {SOLUTIONS.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.category}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.22 + i * 0.09, ease: EASE }}
                className="relative rounded-2xl flex flex-col gap-3 p-6 min-h-[240px] bg-white ring-1 ring-gray-200/80 shadow-sm hover:shadow-md hover:ring-brand-teal/20 transition-all duration-300"
              >
                {/* Top accent line */}
                <div
                  className="absolute inset-x-0 top-0 h-px rounded-t-2xl pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(0,133,107,0.3), transparent)",
                  }}
                />

                {/* Icon */}
                <div className="w-10 h-10 rounded-xl bg-brand-teal/10 border border-brand-teal/15 flex items-center justify-center shrink-0">
                  <Icon className="h-5 w-5 text-brand-teal" />
                </div>

                {/* Category */}
                <p className="text-[10px] font-bold tracking-[0.14em] uppercase text-brand-teal/70">
                  {s.category}
                </p>

                {/* Headline */}
                <h3 className="font-display font-bold text-[1rem] text-brand-navy leading-snug -mt-0.5">
                  {s.headline}
                </h3>

                {/* Body */}
                <p className="text-[13px] leading-relaxed flex-1 text-brand-black/50">
                  {s.body}
                </p>

                {/* Metric */}
                <div className="pt-4 mt-1 border-t border-gray-100">
                  <p className="font-display font-bold text-2xl leading-none text-brand-teal">
                    {s.metric}
                  </p>
                  <p className="text-[11px] mt-0.5 text-brand-black/35">
                    {s.metricSub}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6, ease: EASE }}
          className="flex flex-wrap items-center justify-center gap-3 mb-10"
        >
          <Button variant="primary" size="lg" className="rounded-full" asChild>
            <Link href="/contact">
              Request a Quotation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" className="rounded-full" asChild>
            <Link href="#solutions">See how it works</Link>
          </Button>
        </motion.div>

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.76, duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2"
        >
          {TRUST.map((item) => (
            <div key={item} className="flex items-center gap-1.5">
              <Check className="h-3 w-3 text-brand-teal shrink-0" />
              <span className="text-[11px] font-medium text-brand-black/45">
                {item}
              </span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
