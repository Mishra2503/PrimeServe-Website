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

// ── Layout constants ───────────────────────────────────────────
// Each card sticks `stickyTop` px from the viewport top.
// The gap between consecutive tops equals NOTCH_H, which is how
// much of the previous card's header stays visible above the next card.
const NAV_H   = 80;  // px — navbar height (top-20)
const NOTCH_H = 72;  // px — header "notch" visible above the overlapping card
const CARD_GAP = 28; // px — breathing room between stacked card edges

// ── Card data ──────────────────────────────────────────────────
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
      { metric: "Live",   label: "spend visibility across outlets" },
      { metric: "1 name", label: "on every PO, invoice & DC" },
      { metric: "Audit",  label: "ready reports every month" },
    ],
    features: [
      "Live spend dashboard across every outlet",
      "Delivered-vs-pending tracking in one view",
      "Audit-ready monthly reports for your books",
      "Credit or instant payment, your choice",
    ],
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
      { metric: "24h",     label: "order to doorstep, pan-India" },
      { metric: "Seconds", label: "to a best-price quote" },
      { metric: "AI",      label: "best price on every item" },
    ],
    features: [
      "AI Request a Quotation from a PO or list",
      "One catalog: housekeeping, pantry, cleaning & more",
      "24-hour delivery to one outlet or many",
      "Best available price on every item",
    ],
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
      { metric: "1",       label: "PO · invoice · DC, one name" },
      { metric: "Minutes", label: "to reconcile, not weeks" },
      { metric: "GST",     label: "compliant invoices, ready to file" },
    ],
    features: [
      "One clean PO, GST invoice & DC per order",
      "Consistent format for effortless reconciliation",
      "Detailed monthly statement (Excel / PDF)",
      "Full audit trail from quote to payment",
    ],
  },
];

// ── Individual sticky card ─────────────────────────────────────
function StickyCard({
  card,
  index,
  total,
}: {
  card: (typeof functionCards)[0];
  index: number;
  total: number;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  // scrollYProgress: 0 when this wrapper's top hits the viewport top,
  // 1 when its bottom exits the viewport top.
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end start"],
  });

  const reduced = useReducedMotion();
  const isLast  = index === total - 1;

  // Subtle scale-back as the next card slides over — gives depth.
  // Last card never scales (nothing covers it).
  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    reduced || isLast ? [1, 1] : [1, 0.96]
  );

  // Card 0 sticks at NAV_H (80 px). Each subsequent card adds NOTCH_H + CARD_GAP
  // so a small gap shows between the notch bottom and the next card's top edge.
  const stickyTop = NAV_H + index * (NOTCH_H + CARD_GAP);

  const Icon = card.icon;

  return (
    // 100 vh of scroll space per card.
    // The sticky child holds position while the wrapper scrolls beneath it,
    // and the *next* card naturally rises from below and stacks on top.
    <div ref={wrapperRef} style={{ height: "100vh" }}>
      <motion.div
        style={{
          top: stickyTop,
          zIndex: index + 1,       // later cards always sit above earlier ones
          scale,
          transformOrigin: "top center",
          position: "sticky",
        }}
      >
        <div className="container max-w-[1200px]">

          {/* ── Card shell — identical style for all 3 ─────────── */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#091826] via-[#0E2438] to-[#091826] border border-brand-tealLight/10 shadow-[0_24px_64px_-16px_rgba(9,24,38,0.8)]">

            {/* Teal top accent */}
            <div
              className="absolute inset-x-0 top-0 h-px pointer-events-none"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(25,184,154,0.6), transparent)",
              }}
            />
            {/* Ambient glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(700px 260px at 80% -10%, rgba(25,184,154,0.09), transparent 60%)",
              }}
            />

            {/* ── NOTCH ── always visible when card is covered ─── */}
            {/* This 72 px header peeks above the next card in the stack */}
            <div
              className="relative flex items-center gap-3 px-6 md:px-8"
              style={{ height: NOTCH_H }}
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/10">
                <Icon className="h-4 w-4 text-white" />
              </div>
              <span className="text-sm font-semibold text-brand-tealLight">
                {card.label}
              </span>
              <span className="ml-auto text-[10px] font-bold uppercase tracking-[0.14em] text-white/28">
                {card.tagline}
              </span>
            </div>

            {/* Separator between notch and main content */}
            <div
              className="h-px"
              style={{ background: "rgba(255,255,255,0.07)" }}
            />

            {/* ── Main content ────────────────────────────────── */}
            <div className="relative grid items-center gap-8 p-6 md:p-8 lg:grid-cols-2 lg:gap-12 lg:p-10">

              {/* Left column */}
              <div className="space-y-5">
                <div>
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-widest text-brand-tealLight">
                    {card.tagline}
                  </p>
                  <h3 className="font-display text-2xl font-bold leading-snug text-white lg:text-3xl">
                    {card.heading}
                  </h3>
                </div>

                <p className="text-sm leading-relaxed text-white/60 lg:text-base">
                  {card.description}
                </p>

                <ul className="space-y-2">
                  {card.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-white/70">
                      <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-white/10">
                        <Check className="h-2.5 w-2.5 text-white" />
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right column — metric tiles */}
              <div className="grid grid-cols-3 gap-3 md:gap-4">
                {card.outcomes.map(({ metric, label }) => (
                  <div
                    key={label}
                    className="space-y-1.5 rounded-2xl border border-white/10 bg-white/[0.06] p-3 text-center backdrop-blur-sm md:p-4"
                  >
                    <p className="font-display text-2xl font-bold leading-none text-brand-tealLight">
                      {metric}
                    </p>
                    <p className="text-[10px] leading-snug text-white/40 md:text-xs">
                      {label}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
}

// ── Section ────────────────────────────────────────────────────
export function SolutionsByFunction() {
  return (
    <section className="bg-white" id="solutions">

      {/* Heading */}
      <div className="pb-10 pt-16 md:pt-24">
        <div className="container max-w-[1200px]">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-4 text-center"
          >
            <motion.h2
              variants={fadeUp}
              className="font-display text-section text-brand-black"
            >
              Solutions by role
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-body-lg mx-auto max-w-xl text-brand-black/55"
            >
              PrimeServe gives every stakeholder — founders, operations, and
              finance — exactly the control they need.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Stacked sticky cards */}
      <div className="pb-32">
        {functionCards.map((card, i) => (
          <StickyCard
            key={card.value}
            card={card}
            index={i}
            total={functionCards.length}
          />
        ))}
      </div>

    </section>
  );
}
