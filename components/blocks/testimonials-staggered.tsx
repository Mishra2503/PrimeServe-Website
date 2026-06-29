"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { fadeUp, staggerContainer } from "@/lib/motion-variants";

const testimonials = [
  {
    quote:
      "Our pantry and housekeeping supplies used to come from five different sources. Now it's one order, one invoice, delivered the next day.",
    author: "Operations Manager",
    role: "Coworking & Offices",
    company: "Bengaluru",
    initial: "OM",
    companyInitial: "CO",
    logoSrc: null,
  },
  {
    quote:
      "We upload our requirement list and the best price comes back instantly. We just approve, and it arrives - no calls, no chasing.",
    author: "Procurement Lead",
    role: "Restaurant Group (F&B)",
    company: "Pan-India",
    initial: "PL",
    companyInitial: "FB",
    logoSrc: null,
  },
  {
    quote:
      "Every PO, invoice and DC now comes from one name. Month-end reconciliation went from days to a single afternoon.",
    author: "Finance Head",
    role: "Hotel Group (Hospitality)",
    company: "Pan-India",
    initial: "FH",
    companyInitial: "HT",
    logoSrc: null,
  },
  {
    quote:
      "Across our facilities we finally have one place to see what's been ordered, what's delivered, and exactly what we've spent.",
    author: "Operations Head",
    role: "Hospital Network (Healthcare)",
    company: "Pan-India",
    initial: "OH",
    companyInitial: "HC",
    logoSrc: null,
  },
  {
    quote:
      "Credit terms plus 24-hour delivery mean we never stock out and never chase anyone. PrimeServe just handles it.",
    author: "Admin Head",
    role: "Enterprise Facilities",
    company: "Pan-India",
    initial: "AH",
    companyInitial: "EF",
    logoSrc: null,
  },
];

export function TestimonialsStaggered() {
  const [center, setCenter] = useState(2);
  const prefersReduced = useReducedMotion();
  const total = testimonials.length;

  const prev = () => setCenter((c) => (c - 1 + total) % total);
  const next = () => setCenter((c) => (c + 1) % total);

  function getPosition(i: number) {
    const diff = ((i - center + total) % total + total) % total;
    if (diff === 0) return "center";
    if (diff === 1 || diff === total - 1) return diff === 1 ? "right1" : "left1";
    return "hidden";
  }

  const positionStyles: Record<string, string> = {
    center: "z-20 scale-100 opacity-100 translate-x-0 rotate-0",
    left1: "z-10 scale-[0.88] opacity-60 -translate-x-[62%] -rotate-3",
    right1: "z-10 scale-[0.88] opacity-60 translate-x-[62%] rotate-3",
    hidden: "z-0 scale-75 opacity-0 pointer-events-none",
  };

  return (
    <section className="section-padding bg-brand-nearWhite overflow-hidden">
      <div className="container max-w-[1200px]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center space-y-4 mb-16"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-teal/10 text-brand-teal text-sm font-semibold"
          >
            Customer Stories
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-display text-section text-brand-black">
            Why teams switch to PrimeServe
          </motion.h2>
        </motion.div>

        {/* Card fan */}
        <div className="relative h-[320px] md:h-[280px] flex items-center justify-center mb-10">
          {testimonials.map((t, i) => {
            const pos = getPosition(i);
            return (
              <motion.div
                key={t.author}
                layout={!prefersReduced}
                animate={prefersReduced ? {} : undefined}
                className={`absolute w-full max-w-[520px] transition-all duration-500 ease-in-out ${positionStyles[pos]}`}
              >
                <div
                  className={`p-8 rounded-2xl border ${
                    pos === "center"
                      ? "bg-brand-navy text-white border-brand-navy shadow-2xl"
                      : "bg-white text-brand-black border-black/5 shadow-lg"
                  }`}
                >
                  <Avatar className="h-12 w-12 mb-4">
                    {t.logoSrc && <AvatarImage src={t.logoSrc} alt={t.company} />}
                    <AvatarFallback
                      className={
                        pos === "center"
                          ? "bg-brand-teal text-white font-display font-bold text-sm"
                          : "bg-brand-teal/10 text-brand-teal font-display font-bold text-sm"
                      }
                    >
                      {t.companyInitial}
                    </AvatarFallback>
                  </Avatar>
                  <p
                    className={`text-base leading-relaxed font-body mb-6 ${
                      pos === "center" ? "text-white/90" : "text-brand-black/70"
                    }`}
                  >
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-sm ${
                        pos === "center"
                          ? "bg-brand-teal text-white"
                          : "bg-brand-nearWhite text-brand-navy"
                      }`}
                    >
                      {t.initial}
                    </div>
                    <div>
                      <p
                        className={`font-semibold text-sm ${
                          pos === "center" ? "text-white" : "text-brand-black"
                        }`}
                      >
                        {t.author}
                      </p>
                      <p
                        className={`text-xs ${
                          pos === "center" ? "text-white/50" : "text-brand-black/40"
                        }`}
                      >
                        {t.role}, {t.company}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="w-10 h-10 rounded-full border border-black/10 bg-white flex items-center justify-center hover:bg-brand-teal hover:border-brand-teal hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCenter(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === center ? "bg-brand-teal w-4" : "bg-black/20"
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="w-10 h-10 rounded-full border border-black/10 bg-white flex items-center justify-center hover:bg-brand-teal hover:border-brand-teal hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
