"use client";

import React from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "@/lib/motion-variants";
import {
  AlertTriangle,
  ArrowRight,
  BarChart3,
  FileCheck,
  Lightbulb,
  Package,
  Truck,
  Zap,
} from "lucide-react";

// ── Pain points ────────────────────────────────────────────────
const painPoints = [
  { stat: "8+",   label: "Vendor names", detail: "per restock cycle, per outlet" },
  { stat: "48h",  label: "Quote wait",   detail: "before you even had a price to approve" },
  { stat: "3 days", label: "Month-end", detail: "untangling invoices from names you didn't budget for" },
  { stat: "0",    label: "Visibility",   detail: "of what was being spent across outlets in real time" },
];

// ── What PrimeServe does ───────────────────────────────────────
const solutions = [
  { icon: Zap,       label: "AI Sourcing",     detail: "Best price fetched in seconds from live supplier data" },
  { icon: Truck,     label: "24h Delivery",    detail: "Order to doorstep, one outlet or many, pan-India" },
  { icon: FileCheck, label: "One Invoice",     detail: "PO, DC and GST invoice — all from one name" },
  { icon: BarChart3, label: "Live Portal",     detail: "Every order, every rupee, every outlet. In real time" },
];

// ── Today metrics ──────────────────────────────────────────────
const metrics = [
  { value: "24h",       label: "Delivery",     color: "text-brand-teal" },
  { value: "Pan-India", label: "Coverage",     color: "text-brand-teal" },
  { value: "1 name",    label: "Billing",      color: "text-brand-teal" },
  { value: "AI",        label: "Best-price",   color: "text-brand-teal" },
];

export function StoryMission() {
  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container max-w-[1200px]">

        {/* ── Section Header ───────────────────────────────── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center space-y-4 mb-16"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-teal/10 text-brand-teal text-sm font-semibold"
          >
            Founded in Bengaluru · Our Story
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-display text-section text-brand-black max-w-2xl mx-auto leading-[1.08]">
            Built from the problem we couldn&apos;t unsee.
          </motion.h2>
          <motion.p variants={fadeUp} className="text-body-lg text-brand-black/55 max-w-xl mx-auto leading-relaxed">
            PrimeServe wasn&apos;t designed in a boardroom. It was born from years of running
            multi-outlet operations and living a chaos that no existing solution could fix.
          </motion.p>
        </motion.div>

        <div className="space-y-5">

          {/* ── ACT 01 — THE PROBLEM ──────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.65 }}
            className="rounded-3xl bg-brand-navy overflow-hidden relative"
          >
            {/* Background glow */}
            <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-red-500/10 blur-3xl pointer-events-none" />
            <div className="absolute left-0 bottom-0 h-48 w-72 rounded-full bg-brand-teal/8 blur-2xl pointer-events-none" />

            <div className="relative p-8 lg:p-12">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.28em] text-red-400/80 mb-6 flex items-center gap-2">
                <AlertTriangle className="h-3 w-3" />
                Act 01 — The Problem
              </p>

              <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-start">
                {/* Left: story */}
                <div>
                  <h3 className="font-display text-3xl lg:text-4xl font-bold text-white leading-tight mb-5">
                    We had eight vendor names<br className="hidden lg:block" /> and zero visibility.
                  </h3>
                  <p className="text-white/60 leading-relaxed mb-4">
                    Our founders ran multi-outlet businesses in Bengaluru — F&amp;B, hospitality, office
                    management. Every restock cycle meant the same ordeal: calling eight different vendors,
                    waiting 48 hours for quotes, receiving deliveries from strangers under names you&apos;d
                    never budgeted for.
                  </p>
                  <p className="text-white/60 leading-relaxed">
                    Month-end was three days of spreadsheet hell, untangling invoices that didn&apos;t match
                    any PO. There was no single number to call. No single line on a statement. No way to see,
                    across all your outlets, what was actually being spent.
                  </p>
                </div>

                {/* Right: stat cards */}
                <div className="grid grid-cols-2 gap-3">
                  {painPoints.map(({ stat, label, detail }) => (
                    <div
                      key={label}
                      className="rounded-2xl bg-white/[0.04] border border-white/[0.08] p-4 flex flex-col gap-1"
                    >
                      <p className="font-display font-extrabold text-2xl text-red-400/90 leading-none">{stat}</p>
                      <p className="text-xs font-bold text-white/80">{label}</p>
                      <p className="text-[10px] text-white/35 leading-snug">{detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── ACT 02 — THE INSIGHT ──────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="rounded-3xl bg-brand-nearWhite border border-black/[0.06] p-8 lg:p-12"
          >
            <p className="text-[10px] font-extrabold uppercase tracking-[0.28em] text-brand-teal mb-6 flex items-center gap-2">
              <Lightbulb className="h-3 w-3" />
              Act 02 — The Turning Point
            </p>

            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
              <div>
                {/* Pull quote */}
                <div className="mb-6 pl-5 border-l-4 border-brand-teal">
                  <p className="font-display text-2xl lg:text-3xl font-bold text-brand-black leading-snug">
                    &ldquo;Why does no one own this end-to-end?&rdquo;
                  </p>
                </div>
                <p className="text-brand-black/60 leading-relaxed mb-4">
                  We looked at the marketplaces. JumboTail let you order. Udaan let you discover.
                  Local vendors were relationships. But none of them were accountable for the outcome.
                  They handed you a product and walked away. You still managed the rest.
                </p>
                <p className="text-brand-black/60 leading-relaxed">
                  The question that broke everything open: what if one entity — one name — owned the
                  whole thing? Sourcing. Delivery. Invoicing. Accountability. All of it.
                </p>
              </div>

              {/* Before → After visual */}
              <div className="space-y-3">
                <div className="rounded-2xl bg-white border border-black/[0.07] p-5 shadow-sm">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-black/30 mb-3">Before</p>
                  <div className="space-y-1.5">
                    {["8 vendors to manage", "48h quote turnaround", "Mismatched invoices", "Zero spend view"].map((item) => (
                      <div key={item} className="flex items-center gap-2.5 text-sm text-brand-black/40 line-through decoration-brand-black/20">
                        <span className="h-1.5 w-1.5 rounded-full bg-red-400/60 shrink-0 no-underline" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-center gap-2 text-brand-teal">
                  <div className="h-px flex-1 bg-brand-teal/20" />
                  <ArrowRight className="h-4 w-4" />
                  <div className="h-px flex-1 bg-brand-teal/20" />
                </div>
                <div className="rounded-2xl bg-brand-teal/[0.07] border border-brand-teal/20 p-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-teal mb-3">After PrimeServe</p>
                  <div className="space-y-1.5">
                    {["1 name, everything sourced", "Best price in seconds", "Single clean invoice", "Live spend dashboard"].map((item) => (
                      <div key={item} className="flex items-center gap-2.5 text-sm text-brand-black font-medium">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-teal shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── ACT 03 — WHAT WE BUILT ────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.65, delay: 0.14 }}
            className="rounded-3xl bg-gradient-to-br from-[#0a1f2e] via-[#0E2438] to-[#091826] overflow-hidden relative"
          >
            {/* Teal top accent */}
            <div
              className="absolute inset-x-0 top-0 h-px pointer-events-none"
              style={{ background: "linear-gradient(90deg, transparent, rgba(25,184,154,0.6), transparent)" }}
            />
            <div className="absolute -right-20 top-0 h-64 w-64 rounded-full bg-brand-teal/15 blur-3xl pointer-events-none" />

            <div className="relative p-8 lg:p-12">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.28em] text-brand-tealLight mb-6 flex items-center gap-2">
                <Package className="h-3 w-3" />
                Act 03 — What We Built
              </p>

              <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
                <div>
                  <h3 className="font-display text-3xl lg:text-4xl font-bold text-white leading-tight mb-5">
                    One name. Every step.<br className="hidden lg:block" /> Zero compromise.
                  </h3>
                  <p className="text-white/60 leading-relaxed mb-3">
                    We built PrimeServe to be the single accountable entity between a business and its
                    facility supply chain. You send a list. We source the best price with AI. We deliver
                    within 24 hours. We invoice under our name.
                  </p>
                  <p className="text-white/60 leading-relaxed">
                    You get a live portal that shows every order, every rupee, across every outlet —
                    in real time. No supplier juggling. No invoice nightmares. Just one name you trust
                    to get it right, every time.
                  </p>
                </div>

                {/* Feature grid */}
                <div className="grid grid-cols-2 gap-3">
                  {solutions.map(({ icon: Icon, label, detail }) => (
                    <div
                      key={label}
                      className="rounded-2xl bg-white/[0.05] border border-white/[0.09] p-4 hover:bg-white/[0.09] transition-colors"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-teal/20 shrink-0">
                          <Icon className="h-3.5 w-3.5 text-brand-tealLight" />
                        </span>
                        <p className="font-semibold text-white text-sm">{label}</p>
                      </div>
                      <p className="text-[11px] text-white/40 leading-snug">{detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── TODAY ─────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="rounded-3xl bg-white border border-black/[0.07] p-8 lg:p-12 shadow-[0_8px_48px_-16px_rgba(11,31,51,0.09)]"
          >
            <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-start">
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-[0.28em] text-brand-teal mb-4">Today</p>
                <h3 className="font-display text-3xl font-bold text-brand-black leading-tight mb-4">
                  The prime for every serious<br className="hidden lg:block" /> Indian business.
                </h3>
                <p className="text-brand-black/60 leading-relaxed max-w-lg">
                  Offices, F&amp;B chains, hospitality groups, healthcare facilities across India — if your
                  team depends on facility supplies to operate, PrimeServe is the single name that keeps it
                  running. Order in one place. Receive in 24 hours. Control every rupee.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3 lg:min-w-[260px] lg:w-[260px]">
                {metrics.map(({ value, label, color }) => (
                  <div key={label} className="p-5 rounded-2xl bg-brand-nearWhite border border-black/[0.05] text-center">
                    <p className={`font-display font-bold text-2xl ${color} leading-none`}>{value}</p>
                    <p className="text-xs text-brand-black/45 mt-1 font-medium">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>

        {/* ── Mission Strip ──────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, delay: 0.18 }}
          className="mt-5 rounded-3xl bg-brand-navy px-8 lg:px-16 py-12 relative overflow-hidden text-center"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-48 w-[500px] rounded-full bg-brand-teal/15 blur-3xl" />
          </div>
          <div className="relative">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.28em] text-brand-tealLight mb-5">
              Our Mission
            </p>
            <h3 className="font-display text-2xl lg:text-3xl font-bold text-white max-w-2xl mx-auto leading-tight">
              Make facility supply effortless<br className="hidden lg:block" /> for every business in India.
            </h3>
            <p className="mt-5 text-white/50 max-w-xl mx-auto leading-relaxed">
              Not a privilege reserved for large enterprises. A standard for any business that takes
              operations seriously. One list. One delivery. One invoice — with total spend control built in.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
