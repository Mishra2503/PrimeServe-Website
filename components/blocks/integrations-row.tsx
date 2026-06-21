"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { staggerContainer, fadeUp } from "@/lib/motion-variants";
import { cn } from "@/lib/utils";

type Category = "All" | "Accounting" | "ERP" | "Payments" | "Compliance" | "POS";

const integrations: {
  name: string;
  category: Exclude<Category, "All">;
  abbr: string;
  abbrevBg: string;
  syncs: string;
}[] = [
  { name: "Tally", category: "Accounting", abbr: "TL", abbrevBg: "bg-blue-700", syncs: "Invoices, payment entries, ledger sync" },
  { name: "Zoho Books", category: "Accounting", abbr: "ZB", abbrevBg: "bg-orange-600", syncs: "PO amounts, delivery receipts, invoice matching" },
  { name: "QuickBooks", category: "Accounting", abbr: "QB", abbrevBg: "bg-green-700", syncs: "Expense entries, AP ageing, payments" },
  { name: "SAP B1", category: "ERP", abbr: "SAP", abbrevBg: "bg-blue-900", syncs: "Purchase orders, cost centres, item master" },
  { name: "Oracle NetSuite", category: "ERP", abbr: "NS", abbrevBg: "bg-red-700", syncs: "PO workflows, inventory receipts, AP module" },
  { name: "MS Dynamics", category: "ERP", abbr: "MD", abbrevBg: "bg-blue-600", syncs: "Purchase requests, approval chains, ledger" },
  { name: "Razorpay", category: "Payments", abbr: "RP", abbrevBg: "bg-indigo-600", syncs: "Payments, settlements, TDS deductions" },
  { name: "GSTN Portal", category: "Compliance", abbr: "GST", abbrevBg: "bg-green-800", syncs: "GSTR-2A reconciliation, ITC claims, filing status" },
  { name: "Petpooja", category: "POS", abbr: "PP", abbrevBg: "bg-amber-600", syncs: "Item consumption, inventory deductions, recipe costing" },
  { name: "Zoho Inventory", category: "POS", abbr: "ZI", abbrevBg: "bg-orange-700", syncs: "Stock levels, reorder triggers, GRN confirmation" },
];

const categories: Category[] = ["All", "Accounting", "ERP", "Payments", "Compliance", "POS"];

export function IntegrationsRow() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const prefersReduced = useReducedMotion();

  const filtered =
    activeCategory === "All"
      ? integrations
      : integrations.filter((i) => i.category === activeCategory);

  return (
    <section className="section-padding bg-white">
      <div className="container max-w-[1200px]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center space-y-4 mb-10"
        >
          <motion.h2 variants={fadeUp} className="font-display text-section text-brand-black">
            Works with your existing stack
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-body-lg text-brand-black/55 max-w-xl mx-auto"
          >
            Your PrimeServe invoices, POs, and reports flow straight into your accounting, ERP, and compliance tools — no rip-and-replace required.
          </motion.p>
        </motion.div>

        {/* Category filter tabs */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap gap-2 justify-center mb-8"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal",
                activeCategory === cat
                  ? "bg-gradient-to-r from-brand-navy to-brand-teal text-white shadow-sm"
                  : "bg-brand-nearWhite border border-black/8 text-brand-black/60 hover:border-brand-teal/20 hover:text-brand-black"
              )}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Integration cards grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map(({ name, category, abbr, abbrevBg, syncs }) => {
              const isHovered = hoveredId === name;
              return (
                <motion.div
                  key={name}
                  layout
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.88 }}
                  transition={{ duration: 0.25 }}
                  onMouseEnter={() => setHoveredId(name)}
                  onMouseLeave={() => setHoveredId(null)}
                  className="relative flex flex-col items-center gap-3 p-5 rounded-2xl bg-brand-nearWhite border border-black/5 cursor-pointer overflow-hidden group"
                >
                  {/* Pulsing teal ring on hover */}
                  {isHovered && !prefersReduced && (
                    <motion.span
                      layoutId={`ring-${name}`}
                      className="absolute inset-0 rounded-2xl border-2 border-brand-teal/40"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}

                  <div className={`w-12 h-12 rounded-xl ${abbrevBg} flex items-center justify-center font-display font-bold text-white text-xs shadow-sm`}>
                    {abbr}
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-sm text-brand-black">{name}</p>
                    <p className="text-xs text-brand-black/40">{category}</p>
                  </div>

                  {/* Hover expand: what syncs */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="w-full overflow-hidden"
                      >
                        <div className="pt-2 border-t border-black/6 text-center">
                          <p className="text-[11px] text-brand-black/50 leading-snug">{syncs}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-sm text-brand-black/40 mt-8"
        >
          More integrations coming soon. Don&apos;t see yours?{" "}
          <a href="/contact" className="text-brand-teal hover:underline">
            Let us know.
          </a>
        </motion.p>
      </div>
    </section>
  );
}
