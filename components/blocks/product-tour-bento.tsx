"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  Sparkles, Truck, FileCheck, Gauge, RefreshCw,
  ArrowRight, ShieldCheck, Clock, CheckCircle2,
  FileText, TrendingUp, Eye, Zap, Lock, BarChart2, BarChart3,
  Receipt, CreditCard,
} from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion-variants";
import { cn } from "@/lib/utils";

const AUTO_ADVANCE_MS = 4500;

interface FeatureBlock {
  icon: React.ElementType;
  heading: string;
  body: string;
}

interface TourTab {
  id: string;
  label: string;
  tabIcon: React.ElementType;
  headline: string;
  subtext: string;
  metric: { value: string; label: string };
  badge: string;
  badgeColor: string;
  blocks: [FeatureBlock, FeatureBlock, FeatureBlock, FeatureBlock];
}

const tourTabs: TourTab[] = [
  {
    id: "quote",
    label: "Request a Quotation",
    tabIcon: Sparkles,
    headline: "From requirements to best price — in seconds.",
    subtext:
      "Upload your PO or requirements list and our AI instantly fetches the best price for every item. Approve it and buy on credit or pay instantly — no calls, no haggling, no waiting.",
    metric: { value: "Seconds", label: "to a best-price quote" },
    badge: "AI Quotation",
    badgeColor: "bg-brand-teal/10 text-brand-teal",
    blocks: [
      { icon: Sparkles, heading: "AI best-price match", body: "Every item priced at the best available rate, automatically." },
      { icon: FileText, heading: "Upload a PO or list", body: "Drop in a PO, spreadsheet, or simple list — we handle the rest." },
      { icon: CreditCard, heading: "Credit or instant pay", body: "Buy your way — flexible credit terms or instant checkout." },
      { icon: CheckCircle2, heading: "Approve and order", body: "Confirm the quote and your order moves straight to fulfilment." },
    ],
  },
  {
    id: "deliver",
    label: "Sourcing & 24h Delivery",
    tabIcon: Truck,
    headline: "Sourced, packed, and delivered in 24 hours.",
    subtext:
      "Once you order, PrimeServe sources everything and delivers to your door within 24 hours, across India. You never deal with a supplier — you deal with PrimeServe.",
    metric: { value: "24h", label: "order to doorstep, pan-India" },
    badge: "Fulfilment",
    badgeColor: "bg-blue-50 text-blue-700",
    blocks: [
      { icon: Truck, heading: "24-hour delivery", body: "Fast, reliable fulfilment to every outlet and branch." },
      { icon: ShieldCheck, heading: "We source it all", body: "One order covers housekeeping, pantry, cleaning, stationery and more." },
      { icon: BarChart2, heading: "Multi-outlet ready", body: "Ship to one location or many — all from a single order." },
      { icon: CheckCircle2, heading: "Delivery confirmation", body: "Track every order from confirmed to delivered in your portal." },
    ],
  },
  {
    id: "billing",
    label: "One-Name Billing",
    tabIcon: FileCheck,
    headline: "Every PO, invoice & DC — under one name.",
    subtext:
      "No scattered bills from different sources. Your purchase order, GST invoice, and delivery challan all come from PrimeServe — clean, consistent, and ready for your books every time.",
    metric: { value: "1", label: "PO · invoice · DC, one name" },
    badge: "Billing",
    badgeColor: "bg-green-50 text-green-700",
    blocks: [
      { icon: FileText, heading: "One clean PO", body: "A single, standardised purchase order for every requirement." },
      { icon: Receipt, heading: "GST invoice, ready", body: "Compliant GST invoices that drop straight into your books." },
      { icon: FileCheck, heading: "Matched delivery challan", body: "Every delivery arrives with a DC tied to your order." },
      { icon: Lock, heading: "Consistent paperwork", body: "Same format, every time — no reconciliation guesswork." },
    ],
  },
  {
    id: "control",
    label: "Spend Control",
    tabIcon: Gauge,
    headline: "Total spend control, live in your portal.",
    subtext:
      "See what's delivered, what's pending, and your monthly spend in real time. Every order is traceable by outlet, category, and date — so nothing slips by unnoticed.",
    metric: { value: "Live", label: "spend visibility, real-time" },
    badge: "Control",
    badgeColor: "bg-amber-50 text-amber-700",
    blocks: [
      { icon: TrendingUp, heading: "Real-time spend", body: "Live dashboards across outlets, categories, and dates." },
      { icon: Eye, heading: "Delivered vs pending", body: "Know exactly what's arrived and what's on the way." },
      { icon: BarChart3, heading: "Outlet & category view", body: "Drill into spend by branch and product type instantly." },
      { icon: Zap, heading: "Everything searchable", body: "Every order, quote, and delivery in one place." },
    ],
  },
  {
    id: "reports",
    label: "Audit-Ready Reports",
    tabIcon: RefreshCw,
    headline: "A month-end your accounting team will love.",
    subtext:
      "Detailed, accounting-ready reports every month — every PO, invoice, and DC, fully traceable. Your finance team reconciles in minutes, not weeks.",
    metric: { value: "Minutes", label: "to reconcile, not weeks" },
    badge: "Accounting",
    badgeColor: "bg-purple-50 text-purple-700",
    blocks: [
      { icon: FileText, heading: "Detailed monthly report", body: "A complete, itemised statement of every order and payment." },
      { icon: ShieldCheck, heading: "GST-compliant records", body: "Invoices and tax details kept ready for filing." },
      { icon: FileCheck, heading: "Unbroken audit trail", body: "From quote to delivery to payment, fully logged." },
      { icon: Clock, heading: "Export in a click", body: "Download Excel or PDF for your books anytime." },
    ],
  },
];

export function ProductTourBento() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const prefersReduced = useReducedMotion();
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (prefersReduced || paused) return;
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % tourTabs.length);
    }, AUTO_ADVANCE_MS);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [paused, prefersReduced]);

  const tab = tourTabs[active];

  return (
    <section className="section-padding bg-white">
      <div className="container max-w-[1200px]">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center space-y-4 mb-12"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-navy/8 text-brand-navy text-sm font-semibold"
          >
            How PrimeServe works
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-display text-section text-brand-black">
            One platform, from quote to month-end
          </motion.h2>
          <motion.p variants={fadeUp} className="text-body-lg text-brand-black/55 max-w-xl mx-auto">
            Every step is built for offices, F&amp;B, hospitality, and healthcare teams across India — not generic software.
          </motion.p>
        </motion.div>

        {/* Tab pills */}
        <div
          className="flex flex-wrap gap-2 justify-center mb-10"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {tourTabs.map((t, i) => {
            const TIcon = t.tabIcon;
            const isActive = i === active;
            return (
              <button
                key={t.id}
                onClick={() => setActive(i)}
                className={cn(
                  "relative flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal overflow-hidden",
                  isActive
                    ? "bg-gradient-to-r from-brand-navy to-brand-teal text-white shadow-md"
                    : "bg-brand-nearWhite border border-black/8 text-brand-black/60 hover:text-brand-black hover:border-brand-teal/20"
                )}
              >
                <TIcon className="h-3.5 w-3.5 shrink-0" />
                {t.label}
                {isActive && !prefersReduced && !paused && (
                  <motion.span
                    key={`${active}-progress`}
                    className="absolute bottom-0 left-0 h-0.5 bg-brand-tealLight/60"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: AUTO_ADVANCE_MS / 1000, ease: "linear" }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Outer container card */}
        <div
          className="relative rounded-3xl border border-black/8 bg-brand-nearWhite/60 overflow-hidden mx-0 lg:mx-4"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            className="absolute bottom-0 right-0 w-72 h-72 pointer-events-none opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(#0f766e 1px, transparent 1px), linear-gradient(90deg, #0f766e 1px, transparent 1px)",
              backgroundSize: "28px 28px",
              borderRadius: "0 0 1.5rem 0",
            }}
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={prefersReduced ? { opacity: 1 } : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={prefersReduced ? { opacity: 0 } : { opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="grid lg:grid-cols-[2fr_1.5fr_1.5fr] gap-0"
            >
              {/* Left column: intro */}
              <div className="p-8 lg:p-10 flex flex-col gap-5 border-b lg:border-b-0 lg:border-r border-black/6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-navy to-brand-teal flex items-center justify-center shrink-0">
                    {React.createElement(tab.tabIcon, { className: "h-5 w-5 text-white" })}
                  </div>
                  <span className={cn("text-xs font-bold px-2.5 py-1 rounded-full", tab.badgeColor)}>
                    {tab.badge}
                  </span>
                </div>

                <h3 className="font-display font-bold text-2xl text-brand-black leading-snug">
                  {tab.headline}
                </h3>

                <p className="text-brand-black/60 leading-relaxed text-sm flex-1">
                  {tab.subtext}
                </p>

                {/* Metric */}
                <div className="p-4 rounded-2xl bg-white border border-brand-teal/10 shadow-sm">
                  <p className="font-display font-bold text-2xl text-brand-teal">{tab.metric.value}</p>
                  <p className="text-xs text-brand-black/50 mt-0.5">{tab.metric.label}</p>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-teal hover:text-brand-navy transition-colors group"
                >
                  Request a quotation
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>

              {/* Middle column: feature blocks 0 & 1 */}
              <div className="flex flex-col divide-y divide-black/6 border-b lg:border-b-0 lg:border-r border-black/6">
                {tab.blocks.slice(0, 2).map((block) => (
                  <FeatureBlockItem key={block.heading} block={block} />
                ))}
              </div>

              {/* Right column: feature blocks 2 & 3 */}
              <div className="flex flex-col divide-y divide-black/6">
                {tab.blocks.slice(2, 4).map((block) => (
                  <FeatureBlockItem key={block.heading} block={block} />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {tourTabs.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={cn(
                "rounded-full transition-all duration-300",
                i === active
                  ? "w-6 h-2 bg-brand-teal"
                  : "w-2 h-2 bg-brand-black/15 hover:bg-brand-teal/40"
              )}
              aria-label={`Go to tab ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureBlockItem({ block }: { block: FeatureBlock }) {
  const Icon = block.icon;
  return (
    <div className="p-6 flex flex-col gap-3 flex-1 group hover:bg-white/60 transition-colors duration-200">
      <div className="w-9 h-9 rounded-xl bg-brand-teal/10 flex items-center justify-center shrink-0 group-hover:bg-brand-teal/20 transition-colors">
        <Icon className="text-brand-teal" style={{ width: 18, height: 18 }} />
      </div>
      <h4 className="font-display font-semibold text-sm text-brand-black leading-snug">
        {block.heading}
      </h4>
      <p className="text-xs text-brand-black/55 leading-relaxed">
        {block.body}
      </p>
    </div>
  );
}
