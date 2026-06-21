"use client";

import React from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "@/lib/motion-variants";

const metrics = [
  {
    value: "24h",
    label: "delivery, pan-India",
    context: "order to doorstep, to one outlet or many",
  },
  {
    value: "1 name",
    label: "PO · invoice · DC",
    context: "clean, consistent books every time",
  },
  {
    value: "AI",
    label: "best-price quotes",
    context: "the best price on every item, in seconds",
  },
  {
    value: "Credit",
    label: "or instant payment",
    context: "buy the way your business prefers",
  },
];

interface MetricsSectionProps {
  headline?: string;
  bg?: "white" | "nearWhite";
}

export function MetricsSection({
  headline = "Why teams choose PrimeServe",
  bg = "white",
}: MetricsSectionProps) {
  return (
    <section className={`section-padding ${bg === "nearWhite" ? "bg-brand-nearWhite" : "bg-white"}`}>
      <div className="container max-w-[1200px]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center space-y-4 mb-12"
        >
          <motion.h2 variants={fadeUp} className="font-display text-section text-brand-black">
            {headline}
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {metrics.map(({ value, label, context }) => (
            <motion.div
              key={label}
              variants={fadeUp}
              className="p-7 rounded-2xl bg-brand-navy text-white text-center space-y-2"
            >
              <p className="font-display font-bold text-4xl text-brand-tealLight">{value}</p>
              <p className="font-semibold text-white text-lg leading-snug">{label}</p>
              <p className="text-sm text-white/50">{context}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
