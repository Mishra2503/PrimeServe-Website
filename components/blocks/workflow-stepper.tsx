"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  FileSearch,
  ThumbsUp,
  Boxes,
  Truck,
  FileText,
  BarChart3,
  FileBarChart,
  Check,
  Sparkles,
  MapPin,
  Receipt,
  Package,
} from "lucide-react";
import { staggerContainer, fadeUp } from "@/lib/motion-variants";
import { cn } from "@/lib/utils";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

const steps = [
  {
    label: "Quote",
    icon: FileSearch,
    time: "< 2 min",
    title: "Request a Quotation",
    description:
      "Upload your PO or requirements list. Our AI returns the best available price for every item — in seconds, no calls required.",
    bullets: [
      "Upload a PO, Excel list, or type items manually",
      "AI matches best price across our supplier network",
      "Receive a detailed quote with line-item pricing",
      "Choose 30-day credit or pay instantly",
    ],
    control: "AI best-price match on every item",
  },
  {
    label: "Approve",
    icon: ThumbsUp,
    time: "Instant",
    title: "Approve & Order",
    description:
      "Review the quote and confirm. Buy on flexible credit terms or pay instantly — whatever suits your business.",
    bullets: [
      "Review line-item quote before confirming",
      "Apply 30-day credit or pay immediately",
      "Automated purchase order generated on approval",
      "Email confirmation with order summary sent instantly",
    ],
    control: "Credit or instant payment",
  },
  {
    label: "Source",
    icon: Boxes,
    time: "Same day",
    title: "We Source It",
    description:
      "PrimeServe sources every product directly. You never deal with a supplier — you deal with one name: us.",
    bullets: [
      "Best-price supplier verified for every SKU",
      "Stock confirmed across our warehouse network",
      "Quality check before dispatch",
      "You get one order, one name — no supplier chaos",
    ],
    control: "Sourced for you, behind the scenes",
  },
  {
    label: "Deliver",
    icon: Truck,
    time: "24 hours",
    title: "24-Hour Delivery",
    description:
      "Your order is packed and delivered to your door within 24 hours — to a single outlet or many, anywhere in India.",
    bullets: [
      "Dispatched from our nearest warehouse",
      "Real-time tracking via your portal",
      "Delivery to single or multiple outlets simultaneously",
      "Proof of delivery captured and shared instantly",
    ],
    control: "24-hour delivery, pan-India",
  },
  {
    label: "Bill",
    icon: FileText,
    time: "On delivery",
    title: "One-Name Billing",
    description:
      "Your purchase order, GST invoice, and delivery challan all arrive from PrimeServe — clean, consistent, ready for your books.",
    bullets: [
      "Single GST-compliant invoice from PrimeServe",
      "Matching PO and delivery challan included",
      "All documents under one vendor name",
      "Email and portal delivery simultaneously",
    ],
    control: "PO · Invoice · DC under one name",
  },
  {
    label: "Control",
    icon: BarChart3,
    time: "Real-time",
    title: "Track & Control",
    description:
      "See what's delivered, what's pending, and your spend in real time — by outlet, category, and date — right in your portal.",
    bullets: [
      "Live dashboard: delivered vs pending vs in transit",
      "Filter by outlet, category, or date range",
      "Spend vs budget tracking per outlet",
      "Alert when an order is delayed or issue arises",
    ],
    control: "Live spend visibility",
  },
  {
    label: "Report",
    icon: FileBarChart,
    time: "Monthly",
    title: "Report & Reconcile",
    description:
      "Get a detailed, audit-ready monthly report covering every order and payment. Your finance team reconciles in minutes.",
    bullets: [
      "Complete monthly PO and invoice summary",
      "GST-ready records for tax filing",
      "Excel and PDF export in one click",
      "Full audit trail from quote to final payment",
    ],
    control: "Audit-ready monthly reports",
  },
];

/* ─── Step-specific right-panel visuals ───────────────────── */

const BARS = [40, 55, 48, 70, 62, 88];

function QuoteVisual() {
  const items = [
    { name: "Floor cleaner · 50L", price: "₹4,200" },
    { name: "Garbage bags · 500pc", price: "₹1,850" },
    { name: "Hand wash · 24 units", price: "₹2,640" },
  ];
  return (
    <div className="rounded-2xl bg-gray-50 ring-1 ring-gray-200 p-4 space-y-2.5">
      <div className="flex items-center gap-2 pb-2.5 border-b border-gray-100">
        <FileSearch className="h-3.5 w-3.5 text-brand-teal shrink-0" />
        <span className="text-xs font-bold text-brand-navy">Quote #Q-2048</span>
        <span className="ml-auto text-[10px] font-bold text-brand-teal flex items-center gap-1 shrink-0">
          <Sparkles className="h-3 w-3" /> AI matched
        </span>
      </div>
      {items.map((item) => (
        <div key={item.name} className="flex items-center justify-between gap-2">
          <span className="text-[11px] text-brand-black/65 truncate">{item.name}</span>
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="text-[11px] font-bold text-brand-navy">{item.price}</span>
            <span className="text-[8px] font-bold text-brand-teal bg-brand-teal/10 rounded px-1 py-0.5">BEST</span>
          </div>
        </div>
      ))}
      <div className="grid grid-cols-2 gap-2 pt-1.5">
        <div className="text-center text-[10px] font-bold text-white bg-brand-teal rounded-lg py-1.5">Pay on credit</div>
        <div className="text-center text-[10px] font-bold text-brand-navy bg-gray-200 rounded-lg py-1.5">Pay now</div>
      </div>
    </div>
  );
}

function ApproveVisual() {
  return (
    <div className="rounded-2xl bg-gray-50 ring-1 ring-gray-200 p-4 space-y-3">
      <p className="text-xs font-bold text-brand-navy">Choose payment method</p>
      <div className="flex items-center gap-3 p-3 rounded-xl bg-brand-teal/5 ring-2 ring-brand-teal/25">
        <div className="w-5 h-5 rounded-full bg-brand-teal flex items-center justify-center shrink-0">
          <Check className="h-3 w-3 text-white" />
        </div>
        <div>
          <p className="text-xs font-bold text-brand-navy">30-day credit</p>
          <p className="text-[10px] text-brand-black/50">₹8,690 due in 30 days · 0% fee</p>
        </div>
      </div>
      <div className="flex items-center gap-3 p-3 rounded-xl bg-white ring-1 ring-gray-200">
        <div className="w-5 h-5 rounded-full border border-gray-300 shrink-0" />
        <div>
          <p className="text-xs font-semibold text-brand-black/55">Pay now</p>
          <p className="text-[10px] text-brand-black/35">Instant confirmation · UPI / NEFT</p>
        </div>
      </div>
      <p className="text-[10px] text-brand-black/40 text-center pt-1">Purchase order generated automatically</p>
    </div>
  );
}

function SourceVisual() {
  const tasks = [
    { label: "Pricing verified across suppliers", done: true },
    { label: "Stock confirmed at warehouse", done: true },
    { label: "Quality check complete", done: true },
    { label: "Dispatch scheduled · Today", done: false, active: true },
  ];
  return (
    <div className="rounded-2xl bg-gray-50 ring-1 ring-gray-200 p-4 space-y-2.5">
      <p className="text-xs font-bold text-brand-navy pb-2 border-b border-gray-100">PrimeServe is handling it</p>
      {tasks.map((t, i) => (
        <div key={i} className="flex items-center gap-2.5">
          <div className={cn(
            "w-5 h-5 rounded-full flex items-center justify-center shrink-0",
            t.done ? "bg-brand-teal" : t.active ? "bg-brand-teal/15 ring-1 ring-brand-teal" : "bg-gray-200"
          )}>
            {t.done && <Check className="h-3 w-3 text-white" />}
            {t.active && (
              <motion.div
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ repeat: Infinity, duration: 1.2 }}
                className="w-2 h-2 rounded-full bg-brand-teal"
              />
            )}
          </div>
          <span className={cn(
            "text-[11px]",
            t.done ? "text-brand-black/70 font-medium" : t.active ? "text-brand-teal font-semibold" : "text-brand-black/30"
          )}>{t.label}</span>
        </div>
      ))}
    </div>
  );
}

function DeliverVisual() {
  return (
    <div className="rounded-2xl bg-gray-50 ring-1 ring-gray-200 p-4 space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Truck className="h-4 w-4 text-brand-teal" />
          <span className="text-xs font-bold text-brand-navy">On the way</span>
        </div>
        <span className="text-[10px] font-semibold text-brand-teal bg-brand-teal/10 rounded-full px-2 py-0.5">ETA 10:00 AM</span>
      </div>
      <div className="space-y-1">
        <div className="flex justify-between text-[10px] text-brand-black/45">
          <span>Dispatched · 08:32 AM</span><span>65%</span>
        </div>
        <div className="h-2 rounded-full bg-gray-200 overflow-hidden">
          <motion.div
            initial={{ width: "0%" }}
            whileInView={{ width: "65%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
            className="h-full rounded-full bg-gradient-to-r from-brand-teal to-brand-tealLight"
          />
        </div>
      </div>
      <div className="flex items-center gap-2.5 rounded-xl bg-white ring-1 ring-gray-200 p-3">
        <div className="w-8 h-8 rounded-lg bg-brand-teal/10 flex items-center justify-center shrink-0">
          <MapPin className="h-4 w-4 text-brand-teal" />
        </div>
        <div>
          <p className="text-[11px] font-bold text-brand-navy">Your premises</p>
          <p className="text-[10px] text-brand-black/45">3 items · PrimeServe van · Proof on delivery</p>
        </div>
      </div>
    </div>
  );
}

function BillVisual() {
  const docs = [
    { icon: FileText,  label: "Purchase Order",   num: "PO-2048",  color: "text-brand-teal" },
    { icon: Receipt,   label: "GST Invoice",       num: "INV-2048", color: "text-emerald-600" },
    { icon: Package,   label: "Delivery Challan",  num: "DC-2048",  color: "text-blue-600" },
  ];
  return (
    <div className="rounded-2xl bg-gray-50 ring-1 ring-gray-200 p-4 space-y-2">
      <p className="text-xs font-bold text-brand-navy pb-2 border-b border-gray-100">Documents from PrimeServe</p>
      {docs.map((d, i) => {
        const DIcon = d.icon;
        return (
          <div key={i} className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white ring-1 ring-gray-100">
            <DIcon className={`h-4 w-4 ${d.color} shrink-0`} />
            <div className="min-w-0">
              <p className="text-[11px] font-bold text-brand-navy">{d.label}</p>
              <p className="text-[10px] text-brand-black/45 truncate">{d.num} · PrimeServe Pvt Ltd</p>
            </div>
            <Check className="h-3.5 w-3.5 text-brand-teal ml-auto shrink-0" />
          </div>
        );
      })}
    </div>
  );
}

function ControlVisual() {
  return (
    <div className="rounded-2xl bg-gray-50 ring-1 ring-gray-200 p-4 space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold text-brand-navy">Monthly spend</span>
        <span className="text-sm font-bold text-brand-teal">₹3.4L</span>
      </div>
      <div className="flex items-end gap-1.5 h-14">
        {BARS.map((h, i) => (
          <motion.div
            key={i}
            initial={{ height: "6%" }}
            whileInView={{ height: `${h}%` }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.5, ease: EASE }}
            className={cn(
              "flex-1 rounded",
              i === BARS.length - 1 ? "bg-gradient-to-t from-brand-teal to-brand-tealLight" : "bg-gray-200"
            )}
          />
        ))}
      </div>
      <div className="grid grid-cols-2 gap-2">
        {[{ v: "128", l: "Delivered" }, { v: "6", l: "In transit" }].map((s) => (
          <div key={s.l} className="rounded-xl bg-white ring-1 ring-gray-100 p-2.5">
            <p className="font-display text-base font-bold text-brand-teal leading-none">{s.v}</p>
            <p className="text-[10px] text-brand-black/45 mt-1">{s.l}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ReportVisual() {
  return (
    <div className="rounded-2xl bg-gray-50 ring-1 ring-gray-200 p-4 space-y-2.5">
      <div className="flex items-center justify-between pb-2 border-b border-gray-100">
        <span className="text-xs font-bold text-brand-navy">May 2025 · Monthly Report</span>
        <span className="text-[10px] font-bold text-brand-teal">Audit-ready</span>
      </div>
      {[
        { label: "Total spend", value: "₹3,42,800" },
        { label: "Total orders", value: "134" },
        { label: "GST invoices", value: "134" },
        { label: "Outstanding", value: "₹45,200" },
      ].map((row) => (
        <div key={row.label} className="flex items-center justify-between">
          <span className="text-[11px] text-brand-black/55">{row.label}</span>
          <span className="text-[11px] font-bold text-brand-navy">{row.value}</span>
        </div>
      ))}
      <div className="flex gap-2 pt-1">
        <div className="flex-1 text-center text-[10px] font-bold text-brand-teal bg-brand-teal/10 ring-1 ring-brand-teal/20 rounded-lg py-1.5">📥 Download PDF</div>
        <div className="flex-1 text-center text-[10px] font-bold text-brand-navy bg-gray-100 ring-1 ring-gray-200 rounded-lg py-1.5">📊 Excel</div>
      </div>
    </div>
  );
}

const STEP_VISUALS = [
  QuoteVisual,
  ApproveVisual,
  SourceVisual,
  DeliverVisual,
  BillVisual,
  ControlVisual,
  ReportVisual,
];

/* ─── Main component ──────────────────────────────────────── */
export function WorkflowStepper() {
  const [active, setActive] = useState(0);
  const prefersReduced = useReducedMotion();
  const StepVisual = STEP_VISUALS[active];
  const step = steps[active];
  const StepIcon = step.icon;

  return (
    <section id="workflow" className="section-padding bg-white">
      <div className="container max-w-[1200px]">

        {/* Heading */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center space-y-4 mb-12"
        >
          <motion.h2 variants={fadeUp} className="font-display text-section text-brand-black">
            From quote to delivery to month-end
          </motion.h2>
          <motion.p variants={fadeUp} className="text-body-lg text-brand-black/55 max-w-xl mx-auto">
            PrimeServe handles every step — you just order and receive.
          </motion.p>
        </motion.div>

        {/* Step pills — teal active (matches navbar accent) */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {steps.map((s, i) => {
            const SIcon = s.icon;
            return (
              <button
                key={s.label}
                onClick={() => setActive(i)}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal",
                  active === i
                    ? "bg-brand-teal text-white shadow-md shadow-brand-teal/20"
                    : i < active
                    ? "bg-brand-teal/10 text-brand-teal"
                    : "bg-white border border-gray-200 text-brand-black/50 hover:border-gray-300 hover:text-brand-black"
                )}
              >
                {i < active ? (
                  <Check className="h-3.5 w-3.5 shrink-0" />
                ) : (
                  <SIcon className={cn("h-3.5 w-3.5 shrink-0", active === i ? "text-white" : "")} />
                )}
                {s.label}
              </button>
            );
          })}
        </div>

        {/* Step detail panel */}
        <motion.div
          key={active}
          initial={prefersReduced ? {} : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.32, ease: EASE }}
          className="grid lg:grid-cols-[1fr_380px] gap-6 lg:gap-10 p-6 sm:p-8 rounded-3xl bg-white ring-1 ring-gray-200/80 shadow-sm"
        >
          {/* Left: content */}
          <div className="space-y-5">
            {/* Step header */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-teal flex items-center justify-center shrink-0">
                <StepIcon className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold text-brand-teal/60 tracking-widest uppercase">Step {active + 1} of {steps.length}</span>
                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-brand-black/40 bg-gray-100 rounded-full px-2 py-0.5">
                    <Clock className="h-3 w-3" />
                    {step.time}
                  </span>
                </div>
                <h3 className="font-display font-bold text-xl text-brand-black mt-0.5">{step.title}</h3>
              </div>
            </div>

            {/* Description */}
            <p className="text-brand-black/60 leading-relaxed">{step.description}</p>

            {/* Bullet points */}
            <ul className="space-y-2.5">
              {step.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-brand-teal/10 ring-1 ring-brand-teal/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="h-3 w-3 text-brand-teal" />
                  </div>
                  <span className="text-sm text-brand-black/65">{b}</span>
                </li>
              ))}
            </ul>

            {/* What PrimeServe handles */}
            <div className="flex items-start gap-3 p-4 rounded-2xl bg-brand-teal/5 ring-1 ring-brand-teal/10">
              <Sparkles className="h-4 w-4 text-brand-teal shrink-0 mt-0.5" />
              <div>
                <p className="text-[10px] font-bold text-brand-teal uppercase tracking-wider mb-1">What PrimeServe handles</p>
                <p className="font-display font-semibold text-brand-black text-sm">{step.control}</p>
              </div>
            </div>

            {/* Step navigation */}
            <div className="flex items-center gap-3 pt-1">
              {active > 0 && (
                <button
                  onClick={() => setActive(active - 1)}
                  className="text-sm font-semibold text-brand-black/45 hover:text-brand-black transition-colors"
                >
                  ← {steps[active - 1].label}
                </button>
              )}
              {active < steps.length - 1 && (
                <button
                  onClick={() => setActive(active + 1)}
                  className="ml-auto text-sm font-semibold text-brand-teal hover:text-brand-navy transition-colors"
                >
                  {steps[active + 1].label} →
                </button>
              )}
            </div>
          </div>

          {/* Right: step-specific visual */}
          <div className="flex flex-col justify-center">
            <motion.div
              key={`visual-${active}`}
              initial={prefersReduced ? {} : { opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, ease: EASE }}
            >
              <StepVisual />
            </motion.div>

            {/* Step dots */}
            <div className="flex items-center justify-center gap-1.5 mt-5">
              {steps.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={cn(
                    "rounded-full transition-all duration-200 focus-visible:outline-none",
                    i === active ? "w-5 h-1.5 bg-brand-teal" : "w-1.5 h-1.5 bg-gray-300 hover:bg-gray-400"
                  )}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Re-export for icon use in step pills
function Clock({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
