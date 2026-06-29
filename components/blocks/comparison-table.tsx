"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, X, Minus } from "lucide-react";
import { staggerContainer, fadeUp } from "@/lib/motion-variants";
import { cn } from "@/lib/utils";

type CellValue = "yes" | "no" | "partial" | string;

interface CompRow {
  feature: string;
  tooltip?: string;
  primeserve: CellValue;
  jumboTail: CellValue;
  udaan: CellValue;
  localVendors: CellValue;
  highlight?: boolean;
}

const rows: CompRow[] = [
  {
    feature: "AI best-price quotation",
    tooltip: "Upload a list, get the best price for every item in seconds",
    primeserve: "yes", jumboTail: "partial", udaan: "partial", localVendors: "no", highlight: true,
  },
  {
    feature: "24-hour delivery, pan-India",
    tooltip: "Order to doorstep within 24 hours, to one outlet or many",
    primeserve: "yes", jumboTail: "partial", udaan: "partial", localVendors: "no",
  },
  {
    feature: "One name on PO, invoice & DC",
    tooltip: "Every document from PrimeServe, in one consistent format",
    primeserve: "yes", jumboTail: "no", udaan: "no", localVendors: "no", highlight: true,
  },
  {
    feature: "Credit or instant payment",
    tooltip: "Flexible credit terms or pay instantly - your choice",
    primeserve: "yes", jumboTail: "yes", udaan: "yes", localVendors: "partial",
  },
  {
    feature: "Total spend-control dashboard",
    tooltip: "Live view of delivered, pending, and monthly spend",
    primeserve: "yes", jumboTail: "no", udaan: "no", localVendors: "no", highlight: true,
  },
  {
    feature: "Audit-ready monthly reports",
    tooltip: "Detailed, accounting-ready statements every month",
    primeserve: "yes", jumboTail: "no", udaan: "no", localVendors: "no",
  },
  {
    feature: "One catalogue for all facility supplies",
    tooltip: "Housekeeping, pantry, cleaning, stationery and more",
    primeserve: "yes", jumboTail: "partial", udaan: "partial", localVendors: "no",
  },
  {
    feature: "You never manage a supplier",
    tooltip: "PrimeServe sources everything behind the scenes",
    primeserve: "yes", jumboTail: "no", udaan: "no", localVendors: "no",
  },
  {
    feature: "Accounting / ERP-ready paperwork",
    tooltip: "Flows into Tally, Zoho, SAP and the GST portal",
    primeserve: "yes", jumboTail: "partial", udaan: "partial", localVendors: "no",
  },
  {
    feature: "Dedicated account support",
    primeserve: "yes", jumboTail: "partial", udaan: "partial", localVendors: "partial",
  },
];

function Cell({ value, isPrime }: { value: CellValue; isPrime?: boolean }) {
  if (value === "yes")
    return (
      <div className="flex justify-center">
        <div className={cn(
          "rounded-full flex items-center justify-center shadow-sm",
          isPrime
            ? "w-9 h-9 bg-brand-teal text-white shadow-[0_0_16px_2px_rgba(0,133,107,0.25)]"
            : "w-8 h-8 bg-green-50 ring-1 ring-green-200"
        )}>
          <Check className={cn("stroke-[2.5]", isPrime ? "h-[18px] w-[18px] text-white" : "h-4 w-4 text-green-600")} />
        </div>
      </div>
    );
  if (value === "no")
    return (
      <div className="flex justify-center">
        <div className="w-8 h-8 rounded-full bg-red-50 ring-1 ring-red-100 flex items-center justify-center">
          <X className="h-4 w-4 text-red-400 stroke-[2.5]" />
        </div>
      </div>
    );
  if (value === "partial")
    return (
      <div className="flex justify-center">
        <div className="w-8 h-8 rounded-full bg-amber-50 ring-1 ring-amber-100 flex items-center justify-center">
          <Minus className="h-4 w-4 text-amber-500 stroke-[2.5]" />
        </div>
      </div>
    );
  return <span className="text-sm text-brand-black/60 text-center block font-medium">{value}</span>;
}

/* ── Brand logos ───────────────────────────────────────────── */

function JumboTailLogo() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-label="JumboTail">
      <circle cx="18" cy="18" r="18" fill="#1E4D28" />
      {/* Stylised leaf-drop mark */}
      <path
        d="M19 7C19 7 26 11.5 25 18.5C24.3 22.5 21.5 24.5 18 26C18 26 20.5 21 18.5 17.5C16.5 14 10.5 13.5 10.5 13.5C10.5 13.5 13.5 7 19 7Z"
        fill="white"
        opacity="0.92"
      />
      <path
        d="M17.5 26C16.2 23.5 14.5 21 12 19"
        stroke="white"
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.7"
      />
    </svg>
  );
}

function UdaanLogo() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-label="Udaan">
      <circle cx="18" cy="18" r="18" fill="#C01414" />
      {/* Stylised upward wings / rupee stroke */}
      <path
        d="M11 20 C11 20 14 14 18 13 C22 12 25 14 25 14"
        stroke="white"
        strokeWidth="2.2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M11 24 C11 24 14 18 18 17 C22 16 25 18 25 18"
        stroke="white"
        strokeWidth="2.2"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
      />
      <line x1="18" y1="12" x2="18" y2="26" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

function LocalVendorLogo() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-label="Local Vendors">
      {/* Person */}
      <circle cx="11" cy="10" r="4" stroke="#00856B" strokeWidth="1.8" />
      <path d="M3 28C3 22.5 6.5 18.5 11 18.5" stroke="#00856B" strokeWidth="1.8" strokeLinecap="round" />
      {/* Package box */}
      <rect x="17" y="19" width="15" height="12" rx="2" stroke="#00856B" strokeWidth="1.8" />
      <line x1="17" y1="23.5" x2="32" y2="23.5" stroke="#00856B" strokeWidth="1.5" />
      <line x1="24.5" y1="19" x2="24.5" y2="23.5" stroke="#00856B" strokeWidth="1.5" />
    </svg>
  );
}

const competitors = [
  { key: "jumboTail",    name: "JumboTail",     Logo: JumboTailLogo,    tagline: "Online marketplace" },
  { key: "udaan",        name: "Udaan",          Logo: UdaanLogo,        tagline: "B2B platform" },
  { key: "localVendors", name: "Local Vendors",  Logo: LocalVendorLogo,  tagline: "Multiple suppliers" },
];

export function ComparisonTable() {
  return (
    <section id="comparison" className="section-padding bg-white">
      <div className="container max-w-[1200px]">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center space-y-4 mb-12"
        >
          <motion.p
            variants={fadeUp}
            className="text-xs font-bold uppercase tracking-[0.2em] text-brand-teal"
          >
            How we compare
          </motion.p>
          <motion.h2 variants={fadeUp} className="font-display text-section text-brand-black">
            PrimeServe vs. the alternatives
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-body-lg text-brand-black/55 max-w-2xl mx-auto"
          >
            JumboTail and Udaan let you order. Local vendors leave you chasing.
            PrimeServe is the single prime that sources, delivers, bills, and gives you total control.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.55 }}
          className="overflow-x-auto"
        >
          {/* Outer card */}
          <div className="min-w-[720px] rounded-2xl border border-black/[0.08] overflow-hidden shadow-[0_4px_24px_-8px_rgba(11,31,51,0.08)]">
            <table className="w-full border-collapse">

              {/* ── HEADER ─────────────────────────────────────── */}
              <thead>
                <tr>
                  {/* Feature label */}
                  <th className="text-left p-5 w-[36%] bg-[#FAFBFC] border-b border-r border-black/[0.07]">
                    <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-black/35">
                      Feature
                    </span>
                  </th>

                  {/* PrimeServe - highlighted */}
                  <th className="p-5 bg-white border-b border-black/[0.07] relative" style={{ borderTop: "3px solid #00856B" }}>
                    <div className="flex flex-col items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-brand-teal text-white text-[9px] font-extrabold uppercase tracking-[0.15em]">
                        Best Choice
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-teal to-brand-tealLight flex items-center justify-center shadow-[0_4px_14px_rgba(0,133,107,0.35)]">
                        <span className="text-white text-sm font-extrabold leading-none">P</span>
                      </div>
                      <div className="text-center">
                        <p className="font-display font-bold text-brand-navy text-base leading-tight">PrimeServe</p>
                        <p className="text-xs font-semibold text-brand-teal mt-0.5">The prime</p>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-brand-teal/10 text-brand-teal text-[11px] font-bold border border-brand-teal/20">
                        One name, end to end
                      </span>
                    </div>
                    {/* Bottom teal glow line */}
                    <div className="absolute bottom-0 left-[20%] right-[20%] h-px bg-brand-teal/20" />
                  </th>

                  {/* Competitors */}
                  {competitors.map((c, i) => {
                    const Logo = c.Logo;
                    return (
                      <th
                        key={c.key}
                        className={cn(
                          "p-5 bg-[#FAFBFC] border-b border-black/[0.07]",
                          i > 0 && "border-l border-black/[0.05]"
                        )}
                      >
                        <div className="flex flex-col items-center gap-1.5">
                          <div className="w-9 h-9 rounded-xl overflow-hidden flex items-center justify-center">
                            <Logo />
                          </div>
                          <p className="font-display font-semibold text-brand-black/65 text-sm leading-tight">{c.name}</p>
                          <span className="text-[10px] text-brand-black/35 bg-brand-black/[0.05] px-2 py-0.5 rounded-full font-medium">{c.tagline}</span>
                        </div>
                      </th>
                    );
                  })}
                </tr>
              </thead>

              {/* ── BODY ───────────────────────────────────────── */}
              <tbody>
                {rows.map(({ feature, tooltip, primeserve, jumboTail, udaan, localVendors, highlight }, i) => {
                  const isLast = i === rows.length - 1;
                  const isEven = i % 2 === 0;
                  return (
                    <tr
                      key={feature}
                      className="group transition-colors hover:bg-brand-teal/[0.018]"
                    >
                      {/* Feature */}
                      <td className={cn(
                        "p-5 border-r border-black/[0.07] transition-colors",
                        highlight ? "bg-brand-teal/[0.025]" : isEven ? "bg-white" : "bg-[#FAFBFC]",
                        "group-hover:bg-brand-teal/[0.03]",
                        !isLast && "border-b border-black/[0.05]"
                      )}>
                        <p className={cn(
                          "text-sm text-brand-black leading-snug",
                          highlight ? "font-semibold" : "font-medium"
                        )}>
                          {feature}
                        </p>
                        {tooltip && (
                          <p className="text-xs text-brand-black/38 mt-0.5 leading-snug">{tooltip}</p>
                        )}
                      </td>

                      {/* PrimeServe cell */}
                      <td className={cn(
                        "p-5 transition-colors",
                        highlight ? "bg-brand-teal/[0.07]" : "bg-brand-teal/[0.04]",
                        "group-hover:bg-brand-teal/[0.09]",
                        !isLast && "border-b border-brand-teal/[0.12]"
                      )}>
                        <Cell value={primeserve} isPrime />
                      </td>

                      {/* Competitor cells */}
                      {[jumboTail, udaan, localVendors].map((val, ci) => (
                        <td
                          key={ci}
                          className={cn(
                            "p-5 border-l border-black/[0.05] transition-colors",
                            highlight ? "bg-brand-teal/[0.012]" : isEven ? "bg-white" : "bg-[#FAFBFC]",
                            "group-hover:bg-brand-teal/[0.018]",
                            !isLast && "border-b border-black/[0.05]"
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
          </div>
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-center gap-6 mt-6 text-xs text-brand-black/40"
        >
          <span className="flex items-center gap-1.5">
            <span className="w-4 h-4 rounded-full bg-brand-teal flex items-center justify-center">
              <Check className="h-2.5 w-2.5 text-white stroke-[3]" />
            </span>
            Full support
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-4 h-4 rounded-full bg-amber-100 flex items-center justify-center">
              <Minus className="h-2.5 w-2.5 text-amber-500 stroke-[3]" />
            </span>
            Partial
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-4 h-4 rounded-full bg-red-100 flex items-center justify-center">
              <X className="h-2.5 w-2.5 text-red-400 stroke-[3]" />
            </span>
            Not supported
          </span>
        </motion.div>
      </div>
    </section>
  );
}
