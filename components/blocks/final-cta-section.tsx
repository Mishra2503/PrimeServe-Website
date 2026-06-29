"use client";

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ExternalLink, Truck, CreditCard, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FinalCTASectionProps {
  headline?: string;
  subtext?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

const METRICS = [
  {
    icon: Truck,
    value: "24 Hour",
    label: "Delivery",
    sub: "order to doorstep, pan-India",
  },
  {
    icon: CreditCard,
    value: "Credit",
    label: "or instant pay",
    sub: "buy the way you want",
  },
  {
    icon: FileCheck,
    value: "1 Roof",
    label: "PO · invoice · DC",
    sub: "clean books, every time",
  },
];

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

export function FinalCTASection({
  headline = "Ready to take control of your supplies?",
  subtext = "Send us your supply list and get a best-price quotation back fast with 24-hour delivery, credit or instant payment, and every PO, invoice & DC under one name.",
  ctaLabel = "Request a Quotation",
  ctaHref = "/contact",
}: FinalCTASectionProps) {
  const reduced = useReducedMotion();

  return (
    <section className="section-padding bg-brand-navy relative overflow-hidden">

      {/* Dot grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: "radial-gradient(circle, #14b8a6 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Ambient teal glow - top-right */}
      <motion.div
        animate={reduced ? {} : { opacity: [0.12, 0.24, 0.12] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 right-[-80px] w-[500px] h-[500px] rounded-full bg-brand-teal/25 blur-[120px] pointer-events-none"
      />
      <div className="absolute bottom-0 -left-20 w-72 h-72 rounded-full bg-teal-950/40 blur-[80px] pointer-events-none" />

      <div className="container max-w-[1200px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 lg:gap-16 items-center">

          {/* ── Left: copy + CTAs ──────────────────────── */}
          <div className="space-y-7">

            {/* Trust badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.45, ease: EASE }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-teal/30 bg-brand-teal/10"
            >
              <motion.span
                animate={reduced ? {} : { opacity: [1, 0.2, 1] }}
                transition={{ duration: 1.8, repeat: Infinity }}
                className="w-1.5 h-1.5 rounded-full bg-brand-tealLight shrink-0 inline-block"
              />
              <span className="text-xs font-semibold text-brand-tealLight">
                Sourced, delivered &amp; invoiced across India
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.55, delay: 0.1, ease: EASE }}
              className="font-display font-bold text-4xl sm:text-5xl text-white leading-[1.05] tracking-tight"
            >
              {headline}
            </motion.h2>

            {/* Body */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: 0.2, ease: EASE }}
              className="text-white/55 text-base sm:text-lg leading-relaxed max-w-lg"
            >
              {subtext}
            </motion.p>

            {/* CTA row */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: 0.3, ease: EASE }}
              className="flex flex-wrap gap-3 items-center"
            >
              {/* Pulsing primary CTA */}
              <div className="relative inline-flex">
                {!reduced && (
                  <motion.div
                    animate={{ scale: [1, 1.22, 1], opacity: [0.35, 0, 0.35] }}
                    transition={{ duration: 2.8, repeat: Infinity, ease: "easeOut" }}
                    className="absolute inset-0 rounded-full bg-brand-teal/40 pointer-events-none"
                  />
                )}
                <Button variant="primary" size="xl" className="relative rounded-full" asChild>
                  <Link href={ctaHref}>
                    {ctaLabel}
                    <ArrowRight className="h-4 w-4 ml-1.5" />
                  </Link>
                </Button>
              </div>

              <Button
                variant="outline"
                size="xl"
                className="rounded-full bg-transparent border-white/30 text-white hover:bg-white/[0.10] hover:border-brand-teal/50"
                asChild
              >
                <Link href="https://app.primeservefs.com/" target="_blank" rel="noopener noreferrer">
                  Go to App
                  <ExternalLink className="h-4 w-4 ml-1.5" />
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* ── Right: stacked metric cards ─────────────── */}
          <div className="flex flex-col gap-3">
            {METRICS.map(({ icon: Icon, value, label, sub }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: 28 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.12, ease: EASE }}
                whileHover={reduced ? {} : { x: -4, transition: { type: "spring", stiffness: 340, damping: 22 } }}
                className="group flex items-center gap-4 px-5 py-4 rounded-2xl border border-white/[0.08] bg-white/[0.04] hover:bg-white/[0.08] hover:border-brand-teal/35 transition-colors duration-200 cursor-default"
              >
                <div className="h-10 w-10 rounded-xl bg-brand-teal/15 group-hover:bg-brand-teal/25 flex items-center justify-center shrink-0 transition-colors duration-200">
                  <Icon className="h-[18px] w-[18px] text-brand-tealLight" strokeWidth={1.75} />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <span className="font-display font-bold text-xl text-white leading-none">
                      {value}
                    </span>
                    <span className="text-xs font-semibold text-brand-tealLight leading-none">
                      {label}
                    </span>
                  </div>
                  <p className="text-[11px] text-white/35 mt-1 leading-snug">{sub}</p>
                </div>

                <div className="w-0.5 h-8 rounded-full bg-brand-teal/0 group-hover:bg-brand-teal/50 transition-colors duration-200 shrink-0" />
              </motion.div>
            ))}

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.55, ease: EASE }}
              className="text-[11px] text-white/25 text-center mt-1 px-2"
            >
              Every PO, invoice &amp; delivery challan issued under the PrimeServe name.
            </motion.p>
          </div>

        </div>
      </div>
    </section>
  );
}
