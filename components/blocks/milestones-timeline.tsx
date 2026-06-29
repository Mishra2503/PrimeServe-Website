"use client";

import React, { useRef, useState } from "react";
import { motion, useInView, useReducedMotion, AnimatePresence } from "framer-motion";
import { staggerContainer, fadeUp } from "@/lib/motion-variants";

const visionItems = [
  {
    year: "2025",
    title: "PrimeServe is founded",
    description:
      "PrimeServe launches as India's first single-prime facility supply platform - one name to source, deliver, and invoice everything.",
    icon: "🚀",
    detail: "One name replaces dozens of suppliers for offices, F&B, hospitality, and healthcare teams across India.",
    side: "right",
  },
  {
    year: "2026",
    title: "Pan-India reach",
    description:
      "Deliver to every major city and tier-2 market across India within 24 hours - for every kind of business that needs facility supplies.",
    icon: "🗺️",
    detail: "Building the logistics and sourcing network to make 24-hour delivery a guarantee, not a goal.",
    side: "left",
  },
  {
    year: "2027",
    title: "Intelligence layer",
    description:
      "AI-powered procurement that predicts reorder points, negotiates best prices automatically, and keeps your costs optimal without manual effort.",
    icon: "⚡",
    detail: "Sourcing intelligence that works in the background - so your team never chases a quote or tracks a delivery again.",
    side: "right",
  },
  {
    year: "2028",
    title: "Enterprise prime",
    description:
      "Become the default procurement prime for enterprise multi-outlet operations across India - tens of thousands of locations, one name.",
    icon: "🏆",
    detail: "The single prime trusted by India's largest hospitality, healthcare, and office networks.",
    side: "left",
  },
];

function VisionItem({
  item,
  index,
  reduced,
}: {
  item: (typeof visionItems)[0];
  index: number;
  reduced: boolean | null;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [expanded, setExpanded] = useState(false);
  const isRight = item.side === "right";

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
                {item.icon} {item.year}
              </span>
              <h3 className="font-display font-semibold text-brand-black text-lg leading-snug">
                {item.title}
              </h3>
              <p className="text-sm text-brand-black/55 leading-relaxed mt-1.5">
                {item.description}
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
                    {item.detail}
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
            Our Vision
          </motion.h2>
          <motion.p variants={fadeUp} className="text-body-lg text-brand-black/55 max-w-xl mx-auto">
            Founded in 2025, here&apos;s where we&apos;re headed - and what we&apos;re building for every business in India.
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
            {visionItems.map((item, i) => (
              <VisionItem key={item.year} item={item} index={i} reduced={prefersReduced} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
