"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { TrendingDown, Package, Calculator, Check } from "lucide-react";
import { staggerContainer, fadeUp } from "@/lib/motion-variants";

const functionCards = [
  {
    value: "founder",
    label: "Founder / CFO",
    icon: TrendingDown,
    tagline: "Full visibility. Zero surprises.",
    heading: "See every rupee of facility spend, in real time.",
    description:
      "Founders and CFOs get a live view of what's ordered, delivered, and spent across every outlet — so nothing slips by, and month-end is never a surprise.",
    outcomes: [
      { metric: "Live", label: "spend visibility across outlets" },
      { metric: "1 name", label: "on every PO, invoice & DC" },
      { metric: "Audit", label: "ready reports every month" },
    ],
    features: [
      "Live spend dashboard across every outlet",
      "Delivered-vs-pending tracking in one view",
      "Audit-ready monthly reports for your books",
      "Credit or instant payment, your choice",
    ],
    cardBg: "from-brand-navy via-[#0d1829] to-brand-navy",
    accentColor: "text-brand-tealLight",
    metricColor: "text-brand-tealLight",
  },
  {
    value: "operations",
    label: "Operations / Procurement Head",
    icon: Package,
    tagline: "One order. One name. Done.",
    heading: "Stop juggling suppliers and chasing quotes.",
    description:
      "Upload a requirements list and get the best price back in seconds. PrimeServe sources it all and delivers within 24 hours — you never manage a supplier again.",
    outcomes: [
      { metric: "24h", label: "order to doorstep, pan-India" },
      { metric: "Seconds", label: "to a best-price quote" },
      { metric: "AI", label: "best price on every item" },
    ],
    features: [
      "AI Request a Quotation from a PO or list",
      "One catalog: housekeeping, pantry, cleaning & more",
      "24-hour delivery to one outlet or many",
      "Best available price on every item",
    ],
    cardBg: "from-[#0c1f1e] via-brand-teal/20 to-[#0c1f1e]",
    accentColor: "text-teal-300",
    metricColor: "text-teal-300",
  },
  {
    value: "finance",
    label: "Finance / Accounts Team",
    icon: Calculator,
    tagline: "Clean books. Audit-ready always.",
    heading: "Make month-end a single, simple afternoon.",
    description:
      "Every PO, invoice, and DC comes from one name in one format — with a detailed monthly report your team can reconcile in minutes, not weeks.",
    outcomes: [
      { metric: "1", label: "PO · invoice · DC, one name" },
      { metric: "Minutes", label: "to reconcile, not weeks" },
      { metric: "GST", label: "compliant invoices, ready to file" },
    ],
    features: [
      "One clean PO, GST invoice & DC per order",
      "Consistent format for effortless reconciliation",
      "Detailed monthly statement (Excel / PDF)",
      "Full audit trail from quote to payment",
    ],
    cardBg: "from-[#0a1628] via-[#0B1220] to-[#0a1628]",
    accentColor: "text-blue-300",
    metricColor: "text-blue-300",
  },
];

function StackCard({
  card,
  scrollProgress,
  index,
  total,
}: {
  card: (typeof functionCards)[0];
  scrollProgress: ReturnType<typeof useScroll>["scrollYProgress"];
  index: number;
  total: number;
}) {
  const prefersReduced = useReducedMotion();
  const Icon = card.icon;

  // Each card stacks: earlier cards shrink/rise as scroll advances
  const segmentSize = 1 / total;
  const start = index * segmentSize;
  const end = Math.min((index + 1) * segmentSize, 1);

  const scale = useTransform(
    scrollProgress,
    [start, end],
    [1, index < total - 1 ? 0.94 + index * 0.02 : 1]
  );
  const y = useTransform(
    scrollProgress,
    [start, end],
    [index * 28, 0]
  );
  const opacity = useTransform(
    scrollProgress,
    [Math.max(0, start - 0.05), start, end, Math.min(1, end + 0.05)],
    [0, 1, 1, index < total - 1 ? 0.6 : 1]
  );

  return (
    <motion.div
      style={prefersReduced ? {} : { scale, y, opacity, zIndex: index + 1 }}
      className={`sticky top-28 rounded-3xl overflow-hidden bg-gradient-to-br ${card.cardBg} border border-white/10 shadow-2xl`}
    >
      <div className="p-8 lg:p-10 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left */}
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center">
              <Icon className="h-5 w-5 text-white" />
            </div>
            <span className={`text-sm font-semibold ${card.accentColor}`}>{card.label}</span>
          </div>

          <div>
            <p className={`text-xs font-bold uppercase tracking-widest ${card.accentColor} mb-2`}>
              {card.tagline}
            </p>
            <h3 className="font-display font-bold text-2xl lg:text-3xl text-white leading-snug">
              {card.heading}
            </h3>
          </div>

          <p className="text-white/60 leading-relaxed">{card.description}</p>

          <ul className="space-y-2">
            {card.features.map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-sm text-white/70">
                <div className="w-4 h-4 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="h-2.5 w-2.5 text-white" />
                </div>
                {f}
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Metrics */}
        <div className="grid grid-cols-3 gap-4">
          {card.outcomes.map(({ metric, label }) => (
            <div
              key={label}
              className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center space-y-1 backdrop-blur-sm"
            >
              <p className={`font-display font-bold text-2xl ${card.metricColor}`}>{metric}</p>
              <p className="text-xs text-white/40 leading-snug">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function SolutionsByFunction() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section className="section-padding bg-white">
      <div className="container max-w-[1200px]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center space-y-4 mb-12"
        >
          <motion.h2 variants={fadeUp} className="font-display text-section text-brand-black">
            Solutions by role
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-body-lg text-brand-black/55 max-w-xl mx-auto"
          >
            PrimeServe gives every stakeholder — founders, operations, and finance — exactly the control they need.
          </motion.p>
        </motion.div>

        {/* Scroll container — height gives the scroll room for stacking */}
        <div
          ref={containerRef}
          className="relative"
          style={{ height: `${functionCards.length * 120 + 500}px` }}
        >
          <div className="flex flex-col gap-6">
            {functionCards.map((card, i) => (
              <StackCard
                key={card.value}
                card={card}
                scrollProgress={scrollYProgress}
                index={i}
                total={functionCards.length}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
