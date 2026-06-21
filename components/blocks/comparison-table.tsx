"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Check, X, Minus } from "lucide-react";
import { staggerContainer, fadeUp } from "@/lib/motion-variants";
import { cn } from "@/lib/utils";

type CellValue = "yes" | "no" | "partial" | string;

interface CompRow {
  feature: string;
  tooltip?: string;
  primeserve: CellValue;
  diy: CellValue;
  marketplace: CellValue;
  distributor: CellValue;
  highlight?: boolean;
}

const rows: CompRow[] = [
  {
    feature: "AI best-price quotation",
    tooltip: "Upload a list, get the best price for every item in seconds",
    primeserve: "yes", diy: "no", marketplace: "partial", distributor: "no", highlight: true,
  },
  {
    feature: "24-hour delivery, pan-India",
    tooltip: "Order to doorstep within 24 hours, to one outlet or many",
    primeserve: "yes", diy: "partial", marketplace: "partial", distributor: "partial",
  },
  {
    feature: "One name on PO, invoice & DC",
    tooltip: "Every document from PrimeServe, in one consistent format",
    primeserve: "yes", diy: "no", marketplace: "no", distributor: "no", highlight: true,
  },
  {
    feature: "Credit or instant payment",
    tooltip: "Flexible credit terms or pay instantly — your choice",
    primeserve: "yes", diy: "partial", marketplace: "partial", distributor: "partial",
  },
  {
    feature: "Total spend-control dashboard",
    tooltip: "Live view of delivered, pending, and monthly spend",
    primeserve: "yes", diy: "no", marketplace: "partial", distributor: "no", highlight: true,
  },
  {
    feature: "Audit-ready monthly reports",
    tooltip: "Detailed, accounting-ready statements every month",
    primeserve: "yes", diy: "no", marketplace: "no", distributor: "no",
  },
  {
    feature: "One catalogue for all facility supplies",
    tooltip: "Housekeeping, pantry, cleaning, stationery and more",
    primeserve: "yes", diy: "no", marketplace: "yes", distributor: "partial",
  },
  {
    feature: "You never manage a supplier",
    tooltip: "PrimeServe sources everything behind the scenes",
    primeserve: "yes", diy: "no", marketplace: "no", distributor: "partial",
  },
  {
    feature: "Accounting / ERP-ready paperwork",
    tooltip: "Flows into Tally, Zoho, SAP and the GST portal",
    primeserve: "yes", diy: "no", marketplace: "partial", distributor: "no",
  },
  {
    feature: "Dedicated support",
    primeserve: "yes", diy: "no", marketplace: "partial", distributor: "partial",
  },
];

function Cell({ value, isPrime }: { value: CellValue; isPrime?: boolean }) {
  if (value === "yes")
    return (
      <div className="flex justify-center">
        <div className={cn("rounded-full flex items-center justify-center", isPrime ? "w-8 h-8 bg-brand-teal/25 shadow-[0_0_12px_2px_rgba(15,118,110,0.3)]" : "w-6 h-6 bg-green-50")}>
          <Check className={cn(isPrime ? "h-4 w-4 text-brand-teal" : "h-3.5 w-3.5 text-green-600")} />
        </div>
      </div>
    );
  if (value === "no")
    return (
      <div className="flex justify-center">
        <div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center">
          <X className="h-3.5 w-3.5 text-red-400" />
        </div>
      </div>
    );
  if (value === "partial")
    return (
      <div className="flex justify-center">
        <div className="w-6 h-6 rounded-full bg-amber-50 flex items-center justify-center">
          <Minus className="h-3.5 w-3.5 text-amber-500" />
        </div>
      </div>
    );
  return <span className="text-sm text-brand-black/60 text-center block font-medium">{value}</span>;
}

const competitors = [
  { key: "diy", name: "Doing it yourself", tagline: "Multiple suppliers" },
  { key: "marketplace", name: "B2B marketplace", tagline: "Order-only" },
  { key: "distributor", name: "Local distributor", tagline: "Single category" },
];

export function ComparisonTable() {
  useReducedMotion();

  return (
    <section id="comparison" className="section-padding bg-brand-nearWhite">
      <div className="container max-w-[1200px]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center space-y-4 mb-12"
        >
          <motion.h2 variants={fadeUp} className="font-display text-section text-brand-black">
            PrimeServe vs. the old way
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-body-lg text-brand-black/55 max-w-xl mx-auto"
          >
            Marketplaces help you order. Doing it yourself burns hours. PrimeServe is the single prime that sources, delivers, bills, and gives you control.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          className="overflow-x-auto"
        >
          <table className="w-full min-w-[680px] border-separate border-spacing-0">
            <thead>
              <tr>
                <th className="text-left p-5 w-[40%] bg-white rounded-tl-2xl border-t border-l border-black/6">
                  <span className="text-sm font-semibold text-brand-black/40 uppercase tracking-wider">Feature</span>
                </th>
                <th className="p-5 bg-gradient-to-b from-[#0a1f2e] to-brand-navy border-t-2 border-brand-teal relative shadow-[0_0_40px_-6px_rgba(15,118,110,0.5)] ring-1 ring-brand-teal/30">
                  <div className="flex flex-col items-center gap-1">
                    <span className="px-2 py-0.5 rounded-full bg-brand-teal text-white text-[9px] font-bold uppercase tracking-wider mb-0.5">
                      Best choice
                    </span>
                    <div className="w-7 h-7 rounded bg-brand-teal flex items-center justify-center shadow-[0_0_16px_4px_rgba(15,118,110,0.4)]">
                      <span className="text-white text-[10px] font-bold">P</span>
                    </div>
                    <span className="font-display font-bold text-white text-sm">PrimeServe</span>
                    <span className="text-[10px] text-brand-tealLight/80 font-medium">The prime</span>
                    <span className="mt-1 px-2 py-0.5 rounded-full bg-brand-teal/25 text-brand-tealLight text-[10px] font-bold border border-brand-teal/30">
                      One name, end to end
                    </span>
                  </div>
                </th>
                {competitors.map((c, i) => (
                  <th
                    key={c.key}
                    className={cn(
                      "p-5 bg-white border-t border-black/6",
                      i === competitors.length - 1 && "rounded-tr-2xl border-r"
                    )}
                  >
                    <div className="flex flex-col items-center gap-0.5">
                      <span className="font-display font-semibold text-brand-black/60 text-sm">{c.name}</span>
                      <span className="text-xs text-brand-black/35">{c.tagline}</span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map(({ feature, tooltip, primeserve, diy, marketplace, distributor, highlight }, i) => {
                const isLast = i === rows.length - 1;
                return (
                  <tr key={feature} className="group">
                    <td
                      className={cn(
                        "p-5 bg-white border-l border-black/6",
                        highlight && "bg-brand-teal/[0.02]",
                        isLast && "rounded-bl-2xl border-b"
                      )}
                    >
                      <span className={cn("text-sm font-medium text-brand-black", highlight && "font-semibold")}>
                        {feature}
                      </span>
                      {tooltip && (
                        <p className="text-xs text-brand-black/35 mt-0.5 leading-snug">{tooltip}</p>
                      )}
                    </td>
                    <td
                      className={cn(
                        "p-5 bg-gradient-to-b from-[#0a1f2e] to-brand-navy border-x border-brand-teal/20",
                        isLast && "border-b border-brand-teal/20"
                      )}
                    >
                      <Cell value={primeserve} isPrime />
                    </td>
                    {[diy, marketplace, distributor].map((val, ci) => (
                      <td
                        key={ci}
                        className={cn(
                          "p-5 bg-white border-black/6",
                          highlight && "bg-brand-teal/[0.01]",
                          ci === 2 && "border-r",
                          isLast && "border-b",
                          isLast && ci === 2 && "rounded-br-2xl"
                        )}
                      >
                        <Cell value={val} />
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-center gap-6 mt-6 text-xs text-brand-black/40"
        >
          <span className="flex items-center gap-1.5"><Check className="h-3 w-3 text-brand-teal" /> Full support</span>
          <span className="flex items-center gap-1.5"><Minus className="h-3 w-3 text-amber-500" /> Partial</span>
          <span className="flex items-center gap-1.5"><X className="h-3 w-3 text-red-400" /> Not supported</span>
        </motion.div>
      </div>
    </section>
  );
}
