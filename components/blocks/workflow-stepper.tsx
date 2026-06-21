"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import { staggerContainer, fadeUp } from "@/lib/motion-variants";
import { cn } from "@/lib/utils";

const steps = [
  {
    label: "Quote",
    shortLabel: "Quote",
    title: "Request a Quotation",
    description:
      "Upload your PO or requirements list. Our AI returns the best available price for every item — in seconds, no calls required.",
    control: "AI best-price match on every item",
  },
  {
    label: "Approve",
    shortLabel: "Approve",
    title: "Approve & Order",
    description:
      "Review the quote and confirm. Buy on flexible credit terms or pay instantly — whatever suits your business.",
    control: "Credit or instant payment",
  },
  {
    label: "Source",
    shortLabel: "Source",
    title: "We Source It",
    description:
      "PrimeServe sources every product directly. You never deal with a supplier — you deal with one name: us.",
    control: "Sourced for you, behind the scenes",
  },
  {
    label: "Deliver",
    shortLabel: "Deliver",
    title: "24-Hour Delivery",
    description:
      "Your order is packed and delivered to your door within 24 hours — to a single outlet or many, anywhere in India.",
    control: "24-hour delivery, pan-India",
  },
  {
    label: "Bill",
    shortLabel: "Bill",
    title: "One-Name Billing",
    description:
      "Your purchase order, GST invoice, and delivery challan all arrive from PrimeServe — clean, consistent, ready for your books.",
    control: "PO · invoice · DC under one name",
  },
  {
    label: "Control",
    shortLabel: "Control",
    title: "Track & Control",
    description:
      "See what's delivered, what's pending, and your spend in real time — by outlet, category, and date — right in your portal.",
    control: "Live spend visibility",
  },
  {
    label: "Report",
    shortLabel: "Report",
    title: "Report & Reconcile",
    description:
      "Get a detailed, audit-ready monthly report covering every order and payment. Your finance team reconciles in minutes.",
    control: "Audit-ready monthly reports",
  },
];

export function WorkflowStepper() {
  const [active, setActive] = useState(0);
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
            From quote to delivery to month-end
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-body-lg text-brand-black/55 max-w-xl mx-auto"
          >
            PrimeServe handles every step — you just order and receive.
          </motion.p>
        </motion.div>

        {/* Step pills */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {steps.map((step, i) => (
            <button
              key={step.label}
              onClick={() => setActive(i)}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal",
                active === i
                  ? "bg-brand-navy text-white shadow-md"
                  : i < active
                  ? "bg-brand-teal/10 text-brand-teal"
                  : "bg-white border border-black/8 text-brand-black/50 hover:text-brand-black"
              )}
            >
              {i < active ? (
                <Check className="h-3.5 w-3.5" />
              ) : (
                <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-xs">
                  {i + 1}
                </span>
              )}
              {step.shortLabel}
            </button>
          ))}
        </div>

        {/* Active step detail */}
        <motion.div
          key={active}
          initial={prefersReduced ? {} : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid lg:grid-cols-2 gap-8 p-8 rounded-2xl bg-white border border-black/5 shadow-sm"
        >
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-brand-navy text-white flex items-center justify-center font-display font-bold text-sm">
                {active + 1}
              </div>
              <h3 className="font-display font-bold text-xl text-brand-black">
                {steps[active].title}
              </h3>
            </div>
            <p className="text-body-lg text-brand-black/60">{steps[active].description}</p>
          </div>
          <div className="flex items-center">
            <div className="p-5 rounded-xl bg-brand-teal/5 border border-brand-teal/10 w-full">
              <p className="text-xs font-semibold text-brand-teal uppercase tracking-wider mb-2">
                What PrimeServe handles
              </p>
              <p className="font-display font-semibold text-brand-black">{steps[active].control}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
