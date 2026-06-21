"use client";

import React from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeUp, slideInLeft, slideInRight } from "@/lib/motion-variants";

export function StoryMission() {
  return (
    <section className="section-padding bg-white">
      <div className="container max-w-[1200px]">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Story */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-6"
          >
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-teal/10 text-brand-teal text-sm font-semibold"
            >
              Our Story
            </motion.span>
            <motion.h2 variants={fadeUp} className="font-display text-section text-brand-black">
              Born on the operations floor, not in a boardroom
            </motion.h2>
            <motion.div
              variants={staggerContainer}
              className="space-y-4 text-body-lg text-brand-black/60"
            >
              <motion.p variants={fadeUp}>
                PrimeServe started when our founders were running operations across multi-outlet businesses in Bengaluru. Every order meant chasing quotes from a dozen sources, reconciling mismatched bills, and deliveries that slipped — with no single view of what was actually being spent.
              </motion.p>
              <motion.p variants={fadeUp}>
                So they flipped the model. Instead of managing a long list of suppliers, they made one name responsible for everything: sourcing the products, delivering them fast, and invoicing them cleanly.
              </motion.p>
              <motion.p variants={fadeUp}>
                Today, PrimeServe is that single prime for offices, F&amp;B, hospitality, and healthcare teams across India — order in one place, get it in 24 hours, and control every rupee.
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Right: Mission card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="p-8 rounded-2xl bg-brand-navy text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-56 h-56 rounded-full bg-brand-teal/10 blur-3xl pointer-events-none" />
              <div className="relative space-y-5">
                <p className="text-xs font-semibold text-brand-tealLight uppercase tracking-widest">
                  Our Mission
                </p>
                <h3 className="font-display font-bold text-2xl">
                  Make facility supply effortless for every business in India.
                </h3>
                <p className="text-white/60 leading-relaxed">
                  We believe ordering housekeeping and facility supplies should be as simple as one list, one delivery, one invoice — with total spend control built in. Not a privilege reserved for large enterprises; a standard for every serious Indian business.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-2">
                  {[
                    { value: "24h", label: "Delivery" },
                    { value: "Pan-India", label: "Coverage" },
                    { value: "1 name", label: "Billing" },
                    { value: "Bengaluru", label: "Headquartered" },
                  ].map(({ value, label }) => (
                    <div key={label} className="space-y-0.5">
                      <p className="font-display font-bold text-xl text-brand-tealLight">{value}</p>
                      <p className="text-xs text-white/50">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
