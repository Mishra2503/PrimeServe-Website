"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { AlertTriangle, FileX, BarChart2, Eye } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion-variants";

const leakageScenarios = [
  {
    num: "01",
    icon: AlertTriangle,
    title: "Chasing quotes across suppliers",
    description:
      "Hours lost every week on calls and WhatsApp just to compare prices - and you still never know if you got the best one.",
  },
  {
    num: "02",
    icon: BarChart2,
    title: "No price visibility across outlets",
    description:
      "The same product bought at different prices across branches, with no single view to catch the overspend.",
  },
  {
    num: "03",
    icon: FileX,
    title: "Messy invoices and paperwork",
    description:
      "A different bill from every source turns month-end into a nightmare for your accounts team.",
  },
  {
    num: "04",
    icon: Eye,
    title: "No real-time spend control",
    description:
      "Overspend only shows up at quarter-end - once it has already hit your P&L.",
  },
];

export function LeakageProblemSection() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="section-padding bg-brand-nearWhite">
      <div className="container max-w-[1200px]">
        {/* Outer card container */}
        <div className="rounded-3xl border border-black/8 bg-white shadow-sm p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Left: Narrative */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="space-y-6"
            >
              <motion.div variants={fadeUp}>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-600 text-sm font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                  The Problem
                </span>
              </motion.div>

              <motion.h2 variants={fadeUp} className="font-display text-section text-brand-black">
                Buying facility supplies the old way is chaos.
              </motion.h2>

              <motion.div variants={fadeUp} className="space-y-4 text-brand-black/60 text-body-lg">
                <p>
                  Every order means juggling multiple suppliers, chasing quotes over calls and WhatsApp, and never quite knowing if you paid the right price.
                </p>
                <p>
                  Then come the{" "}
                  <strong className="text-brand-black font-semibold">
                    mismatched bills, delayed deliveries, and a paper trail your accounting team dreads
                  </strong>{" "}
                  at month-end.
                </p>
                <p>
                  Across multiple outlets or branches, it compounds fast - hours lost every week to coordination, and overspend you simply can&apos;t see.
                </p>
              </motion.div>
            </motion.div>

            {/* Right: Scenario cards - uniform brand-teal accent */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="flex flex-col gap-4"
            >
              {leakageScenarios.map(({ num, icon: Icon, title, description }) => (
                <motion.div
                  key={title}
                  variants={fadeUp}
                  whileHover={
                    prefersReduced
                      ? {}
                      : { x: 4, boxShadow: "0 8px 28px rgba(15,118,110,0.12)" }
                  }
                  className="relative flex gap-4 p-5 rounded-2xl bg-brand-nearWhite border border-black/6 border-l-4 border-l-brand-teal shadow-sm transition-all duration-200 group cursor-default"
                >
                  {/* Number badge */}
                  <span className="absolute top-4 right-4 text-xs font-bold font-display text-brand-teal opacity-40 group-hover:opacity-70 transition-opacity">
                    {num}
                  </span>

                  <div className="w-10 h-10 rounded-xl bg-brand-teal/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon className="h-5 w-5 text-brand-teal" />
                  </div>
                  <div className="pr-6">
                    <h3 className="font-display font-semibold text-brand-black mb-1 leading-snug">
                      {title}
                    </h3>
                    <p className="text-sm text-brand-black/55 leading-relaxed">{description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
