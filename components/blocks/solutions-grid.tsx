"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Sparkles,
  FileSearch,
  Truck,
  Gauge,
  FileCheck2,
  ArrowRight,
  CheckCircle2,
  CreditCard,
  Zap,
} from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion-variants";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

/* Quote mock line items for the featured card */
const QUOTE_ITEMS = [
  { name: "Floor cleaner · 50 L", price: "₹4,200" },
  { name: "Garbage bags · 500 pcs", price: "₹1,850" },
  { name: "Hand wash · 24 units", price: "₹2,640" },
];

const SPEND_BARS = [40, 55, 48, 70, 62, 88];

export function SolutionsGrid() {
  const reduced = useReducedMotion();

  return (
    <section className="section-padding bg-brand-nearWhite overflow-hidden">
      <div className="container max-w-[1200px]">

        {/* Heading */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center space-y-4 mb-14"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-teal/10 text-brand-teal text-sm font-semibold"
          >
            <Sparkles className="h-3.5 w-3.5" />
            One platform, end to end
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-display text-section text-brand-black max-w-2xl mx-auto"
          >
            Order it. We source, deliver, and account for it.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-body-lg text-brand-black/55 max-w-xl mx-auto"
          >
            From an AI-powered quote to 24-hour delivery — every PO, invoice, and DC
            under the PrimeServe name, with total spend control and audit-ready
            reports in one portal.
          </motion.p>
        </motion.div>

        {/* Bento grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-5 items-stretch"
        >

          {/* ── A · FEATURED — AI Quotation ───────────────── */}
          <motion.div variants={fadeUp} className="sm:col-span-2 lg:col-span-2">
            <div className="group relative h-full rounded-3xl bg-white ring-1 ring-gray-200/70 p-6 sm:p-8 shadow-[0_2px_20px_rgba(11,31,51,0.04)] hover:ring-brand-teal/30 hover:shadow-[0_24px_60px_-24px_rgba(11,31,51,0.18)] transition-all duration-300 overflow-hidden">
              <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-brand-teal/[0.07] blur-3xl pointer-events-none" />

              <div className="relative grid md:grid-cols-2 gap-7 items-center h-full">
                {/* Copy */}
                <div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-navy text-white text-[11px] font-bold px-2.5 py-1">
                    <Sparkles className="h-3 w-3 text-brand-tealLight" /> AI-POWERED
                  </span>
                  <h3 className="mt-4 font-display text-2xl font-bold text-brand-black">
                    Request a Quotation
                  </h3>
                  <p className="mt-3 text-brand-black/60 text-sm leading-relaxed">
                    Upload your PO or requirements list. Our AI instantly fetches
                    the best price for every item — then buy on credit or pay
                    instantly. No calls, no haggling, no waiting.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    <Chip icon={CheckCircle2}>Best price, found in seconds</Chip>
                    <Chip icon={CreditCard}>Credit or instant payment</Chip>
                  </div>
                </div>

                {/* Quote mock visual */}
                <div className="rounded-2xl bg-gradient-to-br from-gray-50 to-white ring-1 ring-gray-200/80 p-4 shadow-sm">
                  <div className="flex items-center gap-2 pb-3 mb-3 border-b border-gray-100">
                    <div className="h-7 w-7 rounded-lg bg-brand-teal/10 ring-1 ring-brand-teal/20 flex items-center justify-center">
                      <FileSearch className="h-3.5 w-3.5 text-brand-teal" />
                    </div>
                    <span className="text-xs font-bold text-brand-navy">Quotation #Q-2048</span>
                    <span className="ml-auto inline-flex items-center gap-1 text-[10px] font-bold text-brand-teal">
                      <Sparkles className="h-3 w-3" /> AI matched
                    </span>
                  </div>
                  <div className="space-y-2">
                    {QUOTE_ITEMS.map((it, i) => (
                      <motion.div
                        key={it.name}
                        initial={reduced ? {} : { opacity: 0, x: 12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.15 + i * 0.12, duration: 0.4, ease: EASE }}
                        className="flex items-center justify-between gap-2 rounded-lg bg-white ring-1 ring-gray-100 px-3 py-2"
                      >
                        <span className="text-[11px] text-brand-black/70 truncate">{it.name}</span>
                        <span className="flex items-center gap-1.5 shrink-0">
                          <span className="text-[11px] font-bold text-brand-navy">{it.price}</span>
                          <span className="text-[8px] font-bold text-brand-teal bg-brand-teal/10 rounded px-1 py-0.5">BEST</span>
                        </span>
                      </motion.div>
                    ))}
                  </div>
                  <div className="mt-3 grid grid-cols-2 gap-2">
                    <span className="text-center text-[10px] font-bold text-white bg-brand-teal rounded-lg py-1.5">Pay on credit</span>
                    <span className="text-center text-[10px] font-bold text-brand-navy bg-gray-100 rounded-lg py-1.5">Pay instantly</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── B · TALL DARK — Control dashboard ─────────── */}
          <motion.div
            variants={fadeUp}
            className="lg:col-start-3 lg:row-start-1 lg:row-span-2"
          >
            <div className="group relative h-full rounded-3xl bg-gradient-to-br from-[#0E2438] to-[#081523] ring-1 ring-white/10 p-6 sm:p-7 shadow-[0_30px_80px_-30px_rgba(11,31,51,0.7)] text-white overflow-hidden">
              <div
                className="absolute inset-0 pointer-events-none opacity-70"
                style={{ background: "radial-gradient(500px 240px at 90% -10%, rgba(25,184,154,0.18), transparent 60%)" }}
              />
              <div className="relative flex flex-col h-full">
                <div className="h-11 w-11 rounded-xl bg-brand-teal/15 ring-1 ring-brand-teal/30 flex items-center justify-center">
                  <Gauge className="h-5 w-5 text-brand-tealLight" />
                </div>
                <h3 className="mt-5 font-display text-2xl font-bold">Total spend control</h3>
                <p className="mt-2 text-white/55 text-sm leading-relaxed">
                  A live portal showing what&apos;s delivered, what&apos;s pending, and
                  your monthly spend — every order, fully traceable.
                </p>

                {/* Mini dashboard */}
                <div className="mt-6 grid grid-cols-2 gap-2.5">
                  <div className="rounded-xl bg-white/[0.04] ring-1 ring-white/10 p-3">
                    <p className="font-display text-2xl font-bold text-brand-tealLight leading-none">128</p>
                    <p className="text-[10px] text-white/45 mt-1">Delivered</p>
                  </div>
                  <div className="rounded-xl bg-white/[0.04] ring-1 ring-white/10 p-3">
                    <p className="font-display text-2xl font-bold text-white leading-none">6</p>
                    <p className="text-[10px] text-white/45 mt-1">In transit</p>
                  </div>
                </div>

                <div className="mt-3 rounded-xl bg-white/[0.04] ring-1 ring-white/10 p-3.5">
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-[10px] text-white/45 uppercase tracking-wider font-semibold">Monthly spend</span>
                    <span className="text-xs font-bold text-white">₹3.4L</span>
                  </div>
                  <div className="flex items-end gap-1.5 h-14">
                    {SPEND_BARS.map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: "6%" }}
                        whileInView={{ height: `${h}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + i * 0.08, duration: 0.6, ease: EASE }}
                        className={`flex-1 rounded ${
                          i === SPEND_BARS.length - 1
                            ? "bg-gradient-to-t from-brand-teal to-brand-tealLight"
                            : "bg-white/15"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <div className="mt-auto pt-5 flex items-center gap-1.5 text-brand-tealLight text-sm font-semibold">
                  Open dashboard <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── C · 24-hour delivery ──────────────────────── */}
          <motion.div variants={fadeUp} className="lg:col-start-1 lg:row-start-2">
            <Card>
              <CardIcon icon={Truck} />
              <div className="mt-5 flex items-baseline gap-1.5">
                <span className="font-display text-3xl font-extrabold text-brand-black">24</span>
                <span className="font-display text-lg font-bold text-brand-teal">hours</span>
                <Zap className="h-4 w-4 text-brand-teal ml-0.5" />
              </div>
              <h3 className="mt-3 font-display text-lg font-bold text-brand-black">From order to doorstep</h3>
              <p className="mt-2 text-brand-black/55 text-sm leading-relaxed">
                Order once — we source everything and deliver within 24 hours.
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {["PO", "Invoice", "DC"].map((t) => (
                  <span key={t} className="text-[10px] font-bold text-brand-navy bg-brand-teal/[0.08] ring-1 ring-brand-teal/15 rounded-md px-2 py-1">
                    {t}
                  </span>
                ))}
                <span className="text-[10px] font-semibold text-brand-black/45 self-center">all under PrimeServe</span>
              </div>
            </Card>
          </motion.div>

          {/* ── D · Audit-ready reports ───────────────────── */}
          <motion.div variants={fadeUp} className="lg:col-start-2 lg:row-start-2">
            <Card>
              <CardIcon icon={FileCheck2} />
              <h3 className="mt-5 font-display text-lg font-bold text-brand-black">Audit-ready reports</h3>
              <p className="mt-2 text-brand-black/55 text-sm leading-relaxed">
                Detailed, accounting-ready reports every month — your finance team
                reconciles in minutes, not weeks.
              </p>
              <div className="mt-4 rounded-xl bg-gray-50 ring-1 ring-gray-100 p-3 space-y-1.5">
                {[88, 64, 76].map((w, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="h-3 w-3 text-brand-teal shrink-0" />
                    <span className="h-1.5 rounded-full bg-gray-200" style={{ width: `${w}%` }} />
                  </div>
                ))}
                <div className="flex gap-1.5 pt-1">
                  <span className="text-[9px] font-bold text-brand-teal bg-brand-teal/10 rounded px-1.5 py-0.5">Excel</span>
                  <span className="text-[9px] font-bold text-brand-navy bg-gray-100 rounded px-1.5 py-0.5">PDF</span>
                </div>
              </div>
            </Card>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}

/* ── Helpers ─────────────────────────────────────────────── */
function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="group relative h-full rounded-3xl bg-white ring-1 ring-gray-200/70 p-6 sm:p-7 shadow-[0_2px_20px_rgba(11,31,51,0.04)] hover:ring-brand-teal/30 hover:shadow-[0_24px_60px_-24px_rgba(11,31,51,0.18)] transition-all duration-300 overflow-hidden">
      {children}
    </div>
  );
}

function CardIcon({ icon: Icon }: { icon: React.ElementType }) {
  return (
    <div className="h-11 w-11 rounded-xl bg-brand-teal/10 ring-1 ring-brand-teal/15 flex items-center justify-center">
      <Icon className="h-5 w-5 text-brand-teal" />
    </div>
  );
}

function Chip({ icon: Icon, children }: { icon: React.ElementType; children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-gray-50 ring-1 ring-gray-200/80 px-3 py-1.5 text-[11px] font-semibold text-brand-black/70">
      <Icon className="h-3.5 w-3.5 text-brand-teal" />
      {children}
    </span>
  );
}
