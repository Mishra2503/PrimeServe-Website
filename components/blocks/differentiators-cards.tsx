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
    bullets: [
      "500+ SKUs sourced under one brand",
      "Single PO, invoice & delivery challan",
      "Zero supplier follow-ups, ever",
    ],
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
    bullets: [
      "Best price across vendors, in seconds",
      "Approve and buy on credit or pay now",
      "Full price transparency, no hidden costs",
    ],
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
    bullets: [
      "Order by day, receive by next morning",
      "Single or multi-outlet delivery",
      "No stock-outs, no missed SLAs",
    ],
    iconColor: "text-brand-tealLight",
    iconBg: "bg-brand-teal/10",
    accentGrad: "from-brand-teal/20 to-transparent",
  },
  {
    icon: Gauge,
    title: "Total spend control + reports",
    description:
      "A live portal shows what's delivered, what's pending, and your monthly spend — plus audit-ready reports your finance team will love.",
    backStat: "Live",
    backStatLabel: "spend visibility",
    bullets: [
      "Live portal — every order, every rupee",
      "One-click audit-ready monthly reports",
      "Finance-team-approved GST paperwork",
    ],
    iconColor: "text-brand-tealLight",
    iconBg: "bg-brand-teal/10",
    accentGrad: "from-brand-teal/20 to-transparent",
  },
];

function FlipCard({
  card,
  reduced,
  delay = 0,
}: {
  card: (typeof differentiators)[0];
  reduced: boolean | null;
  delay?: number;
}) {
  const [flipped, setFlipped] = useState(false);
  const Icon = card.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="relative h-72 cursor-pointer"
      style={{ perspective: "1200px" }}
      onMouseEnter={() => !reduced && setFlipped(true)}
      onMouseLeave={() => !reduced && setFlipped(false)}
      onClick={() => setFlipped((f) => !f)}
    >
      {/* Rotating container — Framer Motion manages rotateY */}
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.65, ease: [0.4, 0, 0.2, 1] }}
        className="relative w-full h-full"
        style={{
          transformStyle: "preserve-3d",
          WebkitTransformStyle: "preserve-3d",
        }}
      >
        {/* ── Front ─────────────────────────────────── */}
        <div
          className="absolute inset-0 rounded-2xl bg-white border border-black/5 shadow-sm p-7 flex flex-col"
          style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
        >
          <div className={`w-11 h-11 rounded-xl ${card.iconBg} flex items-center justify-center mb-4`}>
            <Icon className={`h-5 w-5 ${card.iconColor}`} />
          </div>
          <h3 className="font-display font-semibold text-xl text-brand-black mb-2 leading-snug">
            {card.title}
          </h3>
          <p className="text-brand-black/55 leading-relaxed text-sm flex-1">{card.description}</p>
          <p className="mt-4 text-[11px] font-semibold text-brand-teal/70 uppercase tracking-wider">
            Hover to see more →
          </p>
        </div>

        {/* ── Back ──────────────────────────────────── */}
        <div
          className={`absolute inset-0 rounded-2xl overflow-hidden bg-gradient-to-br from-brand-navy via-[#0d1829] to-brand-navy border border-white/10 shadow-xl p-7 flex flex-col justify-between`}
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          {/* Accent glow */}
          <div
            className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br ${card.accentGrad} opacity-60 pointer-events-none`}
          />

          <div className="relative z-10">
            <div className={`w-9 h-9 rounded-xl ${card.iconBg} flex items-center justify-center mb-4`}>
              <Icon className={`h-4 w-4 ${card.iconColor}`} />
            </div>
            <p className="font-display font-bold text-3xl text-white mb-1">{card.backStat}</p>
            <p className={`text-sm font-semibold ${card.iconColor} mb-5`}>{card.backStatLabel}</p>
            <ul className="space-y-2.5">
              {card.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-sm text-white/70">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-teal/70" />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative z-10 pt-3 border-t border-white/10">
            <div className="h-0.5 bg-gradient-to-r from-transparent via-brand-teal/40 to-transparent rounded-full" />
          </div>
        </div>
      </motion.div>
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
            Four things that set PrimeServe apart from juggling suppliers and order-only marketplaces.
            Hover each card to see the detail.
          </motion.p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {differentiators.map((card, i) => (
            <FlipCard
              key={card.title}
              card={card}
              reduced={prefersReduced}
              delay={i * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
