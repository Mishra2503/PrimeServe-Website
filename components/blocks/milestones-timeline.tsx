"use client";

import React, { useRef, useState } from "react";
import { motion, useInView, useReducedMotion, AnimatePresence } from "framer-motion";
import { staggerContainer, fadeUp } from "@/lib/motion-variants";

const milestones = [
  {
    year: "2021",
    title: "The frustration",
    description:
      "Running multi-outlet operations in Bengaluru, our founders were drowning in suppliers, quotes, and mismatched bills — with no single view of spend.",
    icon: "🔍",
    detail: "Dozens of sources, scattered paperwork, and a month-end that never matched. There had to be a better way.",
    side: "right",
  },
  {
    year: "2022",
    title: "PrimeServe is born",
    description:
      "We flipped the model: one name to source, deliver, and invoice every facility supply. The first teams came on board.",
    icon: "🚀",
    detail: "Restaurants, a coworking operator, and a hospitality team — all tired of juggling suppliers — became the first to switch.",
    side: "left",
  },
  {
    year: "2023",
    title: "One portal, total control",
    description:
      "Launched the client portal — live spend visibility, delivered-vs-pending tracking, and audit-ready monthly reports.",
    icon: "📈",
    detail: "Now teams could see every order, every delivery, and every rupee in one place.",
    side: "right",
  },
  {
    year: "2024",
    title: "AI best-price quotation",
    description:
      "Introduced Request a Quotation — upload a list, get the best price in seconds, and pay on credit or instantly.",
    icon: "⚡",
    detail: "Sourcing intelligence that finds the best available price for every item, automatically.",
    side: "left",
  },
  {
    year: "2025",
    title: "Delivering across India",
    description:
      "Expanded 24-hour delivery nationwide for offices, F&B, hospitality, and healthcare teams.",
    icon: "🏆",
    detail: "One prime, pan-India — sourced, delivered, and invoiced under a single name.",
    side: "right",
  },
];

function MilestoneItem({
  milestone,
  index,
  reduced,
}: {
  milestone: (typeof milestones)[0];
  index: number;
  reduced: boolean | null;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [expanded, setExpanded] = useState(false);
  const isRight = milestone.side === "right";

  return (
    <div
      ref={ref}
      className={`relative flex items-start gap-6 ${isRight ? "flex-row" : "flex-row-reverse"} group`}
    >
      {/* Content card */}
      <motion.div
        initial={reduced ? { opacity: 1, x: 0 } : { opacity: 0, x: isRight ? -30 : 30 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
        className="flex-1"
      >
        <div
          className={`p-6 rounded-2xl bg-white border border-black/5 shadow-sm cursor-pointer hover:shadow-md hover:border-brand-teal/15 transition-all duration-200 ${isRight ? "mr-8 lg:mr-0 lg:pr-8" : "ml-8 lg:ml-0 lg:pl-8"}`}
          onClick={() => setExpanded(!expanded)}
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <span className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-brand-teal/8 text-brand-teal text-xs font-bold mb-2">
                {milestone.icon} {milestone.year}
              </span>
              <h3 className="font-display font-semibold text-brand-black text-lg leading-snug">
                {milestone.title}
              </h3>
              <p className="text-sm text-brand-black/55 leading-relaxed mt-1.5">
                {milestone.description}
              </p>
            </div>
          </div>

          {/* Expandable detail */}
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden"
              >
                <div className="mt-3 pt-3 border-t border-black/5">
                  <p className="text-sm text-brand-teal font-semibold leading-snug">
                    {milestone.detail}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <button className="text-xs text-brand-black/30 hover:text-brand-teal transition-colors mt-2">
            {expanded ? "↑ less" : "↓ more"}
          </button>
        </div>
      </motion.div>

      {/* Centre dot */}
      <div className="relative flex-shrink-0 flex items-center justify-center z-10">
        <motion.div
          initial={reduced ? { scale: 1 } : { scale: 0 }}
          animate={inView ? { scale: [0, 1.25, 1] } : {}}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
          className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-teal to-brand-navy flex items-center justify-center shadow-lg ring-4 ring-white"
        >
          <div className="w-3 h-3 rounded-full bg-white" />
        </motion.div>
      </div>

      {/* Spacer for alternating layout on desktop */}
      <div className="flex-1 hidden lg:block" />
    </div>
  );
}

export function MilestonesTimeline() {
  const prefersReduced = useReducedMotion();
  const lineRef = useRef<HTMLDivElement>(null);
  const inView = useInView(lineRef, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-brand-nearWhite">
      <div className="container max-w-[1200px]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center space-y-4 mb-14"
        >
          <motion.h2 variants={fadeUp} className="font-display text-section text-brand-black">
            Our milestones
          </motion.h2>
          <motion.p variants={fadeUp} className="text-body-lg text-brand-black/55 max-w-xl mx-auto">
            From supplier chaos in one operations team to a single prime delivering across India.
          </motion.p>
        </motion.div>

        <div className="relative max-w-2xl lg:max-w-4xl mx-auto" ref={lineRef}>
          {/* Animated vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 overflow-hidden hidden lg:block">
            <motion.div
              className="w-full bg-gradient-to-b from-brand-teal to-brand-navy"
              initial={{ height: "0%" }}
              animate={inView ? { height: "100%" } : {}}
              transition={{ duration: 1.4, ease: "easeOut" }}
              style={{ originY: 0 }}
            />
          </div>

          {/* Mobile line */}
          <div className="absolute left-5 top-0 bottom-0 w-px overflow-hidden lg:hidden">
            <motion.div
              className="w-full bg-gradient-to-b from-brand-teal to-brand-navy"
              initial={{ height: "0%" }}
              animate={inView ? { height: "100%" } : {}}
              transition={{ duration: 1.4, ease: "easeOut" }}
            />
          </div>

          <div className="space-y-8 lg:space-y-10">
            {milestones.map((m, i) => (
              <MilestoneItem key={m.year} milestone={m} index={i} reduced={prefersReduced} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
