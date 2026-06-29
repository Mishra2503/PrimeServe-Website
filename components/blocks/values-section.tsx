"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Eye, Target, Zap, Handshake } from "lucide-react";
import { staggerContainer, fadeUp } from "@/lib/motion-variants";

const values = [
  {
    icon: Eye,
    name: "Transparency",
    description:
      "Every price, every order, every delivery is visible to the right people at the right time. Hidden costs and opaque billing are exactly what we exist to remove.",
  },
  {
    icon: Target,
    name: "Accountability",
    description:
      "One name on every PO, invoice, and DC - the same format, every time. Clean, consistent paperwork your accounting team can actually trust.",
  },
  {
    icon: Zap,
    name: "Responsiveness",
    description:
      "Operations don't wait, so neither do we. Best-price quotes in seconds and delivery within 24 hours, anywhere in India.",
  },
  {
    icon: Handshake,
    name: "Partnership",
    description:
      "We succeed when your operations run smoother. That means hands-on onboarding, real support, and being the single name you can rely on.",
  },
];

export function ValuesSection() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="section-padding bg-white">
      <div className="container max-w-[1200px]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center space-y-4 mb-12"
        >
          <motion.h2 variants={fadeUp} className="font-display text-section text-brand-black">
            What we stand for
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-body-lg text-brand-black/55 max-w-xl mx-auto"
          >
            Four values that guide every product decision, every customer interaction, every line of code.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {values.map(({ icon: Icon, name, description }) => (
            <motion.div
              key={name}
              variants={fadeUp}
              whileHover={prefersReduced ? {} : { y: -4 }}
              className={[
                "group p-6 rounded-2xl border border-black/5 bg-brand-nearWhite",
                "space-y-3 transition-all duration-300 cursor-default",
                "hover:bg-gradient-to-br hover:from-brand-navy hover:to-brand-teal/80",
                "hover:border-brand-teal/30 hover:shadow-lg hover:shadow-brand-teal/10",
              ].join(" ")}
            >
              {/* Icon wrapper changes on hover */}
              <div className="w-10 h-10 rounded-xl bg-brand-teal/10 group-hover:bg-white/10 flex items-center justify-center transition-colors duration-300">
                <Icon className="h-5 w-5 text-brand-teal group-hover:text-white transition-colors duration-300" />
              </div>

              <h3 className="font-display font-semibold text-brand-black group-hover:text-white transition-colors duration-300">
                {name}
              </h3>
              <p className="text-sm text-brand-black/55 group-hover:text-white/70 leading-relaxed transition-colors duration-300">
                {description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
