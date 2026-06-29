"use client";

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ClipboardList,
  Clock,
  CreditCard,
  ArrowRight,
  Shield,
  Calendar,
  IndianRupee,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { staggerContainer, fadeUp } from "@/lib/motion-variants";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

const STEPS = [
  {
    num: "01",
    icon: ClipboardList,
    title: "Apply in 2 minutes",
    desc: "Just your GSTIN and basic business info - no bank statements, no credit history required.",
  },
  {
    num: "02",
    icon: Clock,
    title: "Get your limit in 24 hours",
    desc: "Receive a credit limit of ₹50,000 to ₹5,00,000 based on your business size and order volume.",
  },
  {
    num: "03",
    icon: CreditCard,
    title: "Order freely, pay in 30 days",
    desc: "Place orders on credit and receive a proper GST invoice. Settle within 30 days - zero hidden fees.",
  },
];

const RECENT_ORDERS = [
  { name: "Floor cleaning supplies", amount: "₹12,400", status: "Delivered", color: "text-emerald-400" },
  { name: "Pantry supplies pack", amount: "₹18,600", status: "Delivered", color: "text-emerald-400" },
  { name: "Housekeeping essentials", amount: "₹14,200", status: "In transit", color: "text-brand-tealLight" },
];

const METRICS = [
  { icon: Calendar, label: "30-day payment terms", sub: "Standard for all credit orders" },
  { icon: IndianRupee, label: "₹50K to ₹5L limit", sub: "Based on your business size" },
  { icon: Sparkles, label: "0% markup on credit", sub: "Same price as instant payment" },
];

export function CreditTermsSection() {
  const reduced = useReducedMotion();

  return (
    <section className="section-padding bg-brand-nearWhite overflow-hidden">
      <div className="container max-w-[1200px]">

        {/* Heading block */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center space-y-4 mb-14"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-teal/10 text-brand-teal text-sm font-semibold"
          >
            <CreditCard className="h-3.5 w-3.5" />
            Credit & Payments
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-display text-section text-brand-black max-w-2xl mx-auto"
          >
            Order today,{" "}
            <span className="text-gradient-teal">pay in 30 days.</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-body-lg text-brand-black/55 max-w-xl mx-auto"
          >
            Stop letting cash flow hold up your operations. Apply for a PrimeServe credit limit in 2 minutes - just your GSTIN and basic business info.
          </motion.p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left: Steps + CTA */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-8"
          >
            {STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div key={step.num} variants={fadeUp} className="flex gap-5">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-xl bg-brand-teal/10 ring-1 ring-brand-teal/20 flex items-center justify-center shrink-0">
                      <Icon className="h-5 w-5 text-brand-teal" />
                    </div>
                    {i < STEPS.length - 1 && (
                      <div className="mt-2 w-px flex-1 bg-gradient-to-b from-brand-teal/25 to-transparent min-h-[32px]" />
                    )}
                  </div>
                  <div className="pb-2">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[11px] font-bold text-brand-teal/55 tracking-widest">{step.num}</span>
                      <h3 className="font-display font-bold text-brand-black text-lg">{step.title}</h3>
                    </div>
                    <p className="text-brand-black/55 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              );
            })}

            {/* CTA */}
            <motion.div variants={fadeUp} className="pt-2">
              <div className="relative inline-flex">
                {!reduced && (
                  <motion.div
                    animate={{ scale: [1, 1.22, 1], opacity: [0.25, 0, 0.25] }}
                    transition={{ duration: 2.8, repeat: Infinity, ease: "easeOut" }}
                    className="absolute inset-0 rounded-full bg-brand-teal/25 pointer-events-none"
                  />
                )}
                <Button variant="primary" size="lg" className="relative rounded-full" asChild>
                  <Link href="/contact">
                    Apply for Credit
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <p className="mt-3 text-xs text-brand-black/40 flex items-center gap-1.5">
                <Shield className="h-3 w-3 text-brand-teal shrink-0" />
                No hard credit check · Decision in 24 hours
              </p>
            </motion.div>
          </motion.div>

          {/* Right: Credit account mockup */}
          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, ease: EASE }}
          >
            <div className="relative">
              {/* Glow behind card */}
              <div className="absolute inset-4 rounded-[2rem] bg-brand-teal/20 blur-[60px] pointer-events-none" />

              {/* Dark card */}
              <div className="relative rounded-[1.5rem] bg-gradient-to-br from-[#0E2438] to-[#081523] ring-1 ring-white/10 shadow-[0_40px_100px_-30px_rgba(11,31,51,0.6)] p-6 overflow-hidden">
                {/* Top accent line */}
                <div
                  className="absolute inset-x-0 top-0 h-px pointer-events-none"
                  style={{ background: "linear-gradient(90deg, transparent, rgba(25,184,154,0.6), transparent)" }}
                />
                {/* Ambient radial glow */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-50"
                  style={{ background: "radial-gradient(500px 200px at 80% -20%, rgba(25,184,154,0.15), transparent 70%)" }}
                />

                <div className="relative">
                  {/* Header row */}
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <p className="text-white text-sm font-bold font-display leading-none">PrimeServe Credit</p>
                      <p className="text-white/40 text-xs mt-0.5">Business Account</p>
                    </div>
                    <div className="flex items-center gap-1.5 rounded-full bg-emerald-500/15 px-2.5 py-1 ring-1 ring-emerald-400/30">
                      <motion.span
                        animate={reduced ? {} : { opacity: [1, 0.2, 1] }}
                        transition={{ duration: 1.6, repeat: Infinity }}
                        className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0"
                      />
                      <span className="text-[10px] font-semibold text-emerald-300">Active</span>
                    </div>
                  </div>

                  {/* Credit limit */}
                  <div className="mb-4">
                    <p className="text-white/40 text-[10px] uppercase tracking-widest font-semibold mb-1">Credit Limit</p>
                    <p className="font-display text-4xl font-extrabold text-white tracking-tight">₹2,00,000</p>
                  </div>

                  {/* Used / Available */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="rounded-xl bg-white/[0.04] ring-1 ring-white/10 p-3">
                      <p className="text-brand-tealLight font-display font-bold text-lg leading-none">₹45,200</p>
                      <p className="text-white/35 text-[10px] mt-1">Used</p>
                    </div>
                    <div className="rounded-xl bg-white/[0.04] ring-1 ring-white/10 p-3">
                      <p className="text-white font-display font-bold text-lg leading-none">₹1,54,800</p>
                      <p className="text-white/35 text-[10px] mt-1">Available</p>
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[10px] text-white/35 font-semibold">22.6% utilised</span>
                      <span className="text-[10px] text-brand-tealLight font-semibold">Payment due in 18 days</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                      <motion.div
                        initial={{ width: "0%" }}
                        whileInView={{ width: "22.6%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.3, ease: EASE }}
                        className="h-full rounded-full bg-gradient-to-r from-brand-teal to-brand-tealLight"
                      />
                    </div>
                  </div>

                  {/* Recent orders */}
                  <div className="pt-3 border-t border-white/[0.08] mb-4">
                    <p className="text-[10px] text-white/35 uppercase tracking-widest font-semibold mb-2.5">Recent on-credit orders</p>
                    <div className="space-y-2">
                      {RECENT_ORDERS.map((order, i) => (
                        <motion.div
                          key={order.name}
                          initial={reduced ? {} : { opacity: 0, x: -8 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + i * 0.1, duration: 0.4, ease: EASE }}
                          className="flex items-center justify-between gap-2"
                        >
                          <span className="text-[11px] text-white/55 truncate">{order.name}</span>
                          <div className="flex items-center gap-2 shrink-0">
                            <span className="text-[11px] font-bold text-white">{order.amount}</span>
                            <span className={`text-[9px] font-semibold ${order.color}`}>{order.status}</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Payment due strip */}
                  <div className="rounded-xl bg-brand-teal/15 ring-1 ring-brand-teal/25 p-3 flex items-center justify-between">
                    <div>
                      <p className="text-white/55 text-[10px]">Next payment due</p>
                      <p className="text-white text-sm font-bold">₹45,200 · in 18 days</p>
                    </div>
                    <span className="text-xs font-bold text-brand-tealLight bg-brand-teal/20 rounded-lg px-3 py-1.5 ring-1 ring-brand-tealLight/20">
                      Net 30
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom metric strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          {METRICS.map(({ icon: Icon, label, sub }) => (
            <div
              key={label}
              className="flex items-start gap-3 rounded-2xl bg-white ring-1 ring-gray-200/70 p-4 shadow-sm"
            >
              <div className="w-9 h-9 rounded-xl bg-brand-teal/10 ring-1 ring-brand-teal/15 flex items-center justify-center shrink-0">
                <Icon className="h-4 w-4 text-brand-teal" />
              </div>
              <div>
                <p className="font-semibold text-sm text-brand-black">{label}</p>
                <p className="text-xs text-brand-black/45 mt-0.5">{sub}</p>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
