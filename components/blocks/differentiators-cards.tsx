"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ShieldCheck, Sparkles, Truck, Gauge } from "lucide-react";
import { staggerContainer, fadeUp } from "@/lib/motion-variants";

const differentiators = [
  {
    icon: ShieldCheck,
    title: "The prime, not a middleman",
    description:
      "You order from one name. PrimeServe sources every product itself and delivers under its own brand — no supplier juggling, no chasing, ever.",
    backStat: "1 name",
    backStatLabel: "PO · invoice · DC",
    backDetail: "Every document comes from PrimeServe in one consistent format — clean, reconcilable books, every time.",
    iconColor: "text-brand-tealLight",
    iconBg: "bg-brand-teal/10",
    accentGrad: "from-brand-teal/20 to-transparent",
  },
  {
    icon: Sparkles,
    title: "AI best-price on every order",
    description:
      "Upload a list and our AI fetches the best available price for each item in seconds. Approve it and buy on credit or pay instantly.",
    backStat: "Seconds",
    backStatLabel: "to a best-price quote",
    backDetail: "Sourcing intelligence that means you never overpay — and never chase a quote again.",
    iconColor: "text-amber-400",
    iconBg: "bg-amber-400/10",
    accentGrad: "from-amber-500/20 to-transparent",
  },
  {
    icon: Truck,
    title: "24-hour delivery, pan-India",
    description:
      "Order today, receive tomorrow — to a single outlet or many, anywhere in India. Reliable fulfilment so you never stock out.",
    backStat: "24h",
    backStatLabel: "order to doorstep",
    backDetail: "Fast, dependable delivery across the country keeps your operations running without a gap.",
    iconColor: "text-blue-400",
    iconBg: "bg-blue-400/10",
    accentGrad: "from-blue-500/20 to-transparent",
  },
  {
    icon: Gauge,
    title: "Total spend control + reports",
    description:
      "A live portal shows what's delivered, what's pending, and your monthly spend — plus audit-ready reports your finance team will love.",
    backStat: "Live",
    backStatLabel: "spend visibility",
    backDetail: "See every order and every rupee in one place, with detailed month-end reports in a single click.",
    iconColor: "text-purple-400",
    iconBg: "bg-purple-400/10",
    accentGrad: "from-purple-500/20 to-transparent",
  },
];

const proofStats = [
  { value: "24h", label: "delivery, pan-India", detail: "Order to doorstep within 24 hours, to one outlet or many." },
  { value: "1 name", label: "on every document", detail: "PO, invoice & DC all from PrimeServe, in one consistent format." },
  { value: "AI", label: "best-price quotes", detail: "Upload a list and get the best available price for every item in seconds." },
  { value: "Credit", label: "or instant payment", detail: "Buy on flexible credit terms or pay instantly — your choice." },
];

function FlipCard({
  card,
  reduced,
}: {
  card: (typeof differentiators)[0];
  reduced: boolean | null;
}) {
  const [flipped, setFlipped] = useState(false);
  const Icon = card.icon;

  return (
    <div
      className="relative h-72 cursor-pointer"
      style={{ perspective: "1200px" }}
      onMouseEnter={() => !reduced && setFlipped(true)}
      onMouseLeave={() => !reduced && setFlipped(false)}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative w-full h-full"
      >
        {/* Front */}
        <div
          className="absolute inset-0 rounded-2xl bg-white border border-black/5 shadow-sm p-7 flex flex-col"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className={`w-11 h-11 rounded-xl ${card.iconBg} flex items-center justify-center mb-4`}>
            <Icon className={`h-5 w-5 ${card.iconColor}`} />
          </div>
          <h3 className="font-display font-semibold text-xl text-brand-black mb-2 leading-snug">{card.title}</h3>
          <p className="text-brand-black/55 leading-relaxed text-sm flex-1">{card.description}</p>
          <p className="text-xs text-brand-black/30 mt-3 font-medium">Hover to see proof →</p>
        </div>

        {/* Back */}
        <div
          className={`absolute inset-0 rounded-2xl overflow-hidden bg-gradient-to-br from-brand-navy via-[#0d1829] to-brand-navy border border-white/10 shadow-xl p-7 flex flex-col justify-between`}
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          {/* Accent glow */}
          <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br ${card.accentGrad} opacity-60 pointer-events-none`} />

          <div className="relative z-10">
            <div className={`w-9 h-9 rounded-xl ${card.iconBg} flex items-center justify-center mb-4`}>
              <Icon className={`h-4 w-4 ${card.iconColor}`} />
            </div>
            <p className="font-display font-bold text-3xl text-white mb-1">{card.backStat}</p>
            <p className={`text-sm font-semibold ${card.iconColor} mb-3`}>{card.backStatLabel}</p>
            <p className="text-sm text-white/60 leading-relaxed">{card.backDetail}</p>
          </div>

          <div className="relative z-10 pt-3 border-t border-white/10">
            <div className="h-0.5 bg-gradient-to-r from-transparent via-brand-teal/40 to-transparent rounded-full" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function StatCard({ stat, reduced }: { stat: (typeof proofStats)[0]; reduced: boolean | null }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => !reduced && setHovered(true)}
      onMouseLeave={() => !reduced && setHovered(false)}
      whileHover={reduced ? {} : { y: -3 }}
      className="relative p-6 rounded-2xl bg-white border border-black/5 shadow-sm overflow-hidden cursor-default group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/0 to-brand-teal/0 group-hover:from-brand-teal/5 group-hover:to-brand-navy/10 transition-all duration-300" />
      <div className="relative z-10">
        <p className="font-display font-bold text-4xl text-gradient-teal mb-1">{stat.value}</p>
        <p className="text-sm font-semibold text-brand-black/70 mb-2">{stat.label}</p>
        <motion.p
          animate={{ opacity: hovered ? 1 : 0, height: hovered ? "auto" : 0 }}
          transition={{ duration: 0.25 }}
          className="text-xs text-brand-black/45 leading-snug overflow-hidden"
        >
          {stat.detail}
        </motion.p>
      </div>
    </motion.div>
  );
}

export function DifferentiatorsCards() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="section-padding bg-brand-nearWhite">
      <div className="container max-w-[1200px]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center space-y-4 mb-12"
        >
          <motion.h2 variants={fadeUp} className="font-display text-section text-brand-black">
            Why PrimeServe is different
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-body-lg text-brand-black/55 max-w-xl mx-auto"
          >
            Four things that set PrimeServe apart from juggling suppliers and order-only marketplaces. Hover each card to see more.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid sm:grid-cols-2 gap-5 mb-16"
        >
          {differentiators.map((card) => (
            <motion.div key={card.title} variants={fadeUp}>
              <FlipCard card={card} reduced={prefersReduced} />
            </motion.div>
          ))}
        </motion.div>

        {/* Proof stats */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.h3
            variants={fadeUp}
            className="text-center font-display font-bold text-2xl text-brand-black mb-8"
          >
            What you get with PrimeServe
          </motion.h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {proofStats.map((s) => (
              <motion.div key={s.value} variants={fadeUp}>
                <StatCard stat={s} reduced={prefersReduced} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
