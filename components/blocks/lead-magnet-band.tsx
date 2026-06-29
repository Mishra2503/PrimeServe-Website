"use client";

import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight, CheckCircle,
  Briefcase, Calculator, Package, Settings2, User,
  UtensilsCrossed, Building2, HeartPulse, Monitor, Landmark, Building,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FormSelect } from "@/components/ui/radix-select";
import { fadeUp, staggerContainer } from "@/lib/motion-variants";
import { submitLead } from "@/lib/lead-webhook";

const roleOptions = [
  { value: "founder",     label: "Founder / Owner",       icon: Briefcase  },
  { value: "cfo",         label: "CFO / Finance Head",     icon: Calculator },
  { value: "procurement", label: "Head of Procurement",    icon: Package    },
  { value: "operations",  label: "Operations Head",        icon: Settings2  },
  { value: "other",       label: "Other",                  icon: User       },
];

const industryOptions = [
  { value: "fnb",         label: "Restaurant / F&B",               icon: UtensilsCrossed },
  { value: "hospitality", label: "Hospitality (Hotel / Resort)",    icon: Building2       },
  { value: "healthcare",  label: "Healthcare / Hospital",           icon: HeartPulse      },
  { value: "office",      label: "Office / Coworking / Facilities", icon: Monitor         },
  { value: "mnc",         label: "MNC / Enterprise",                icon: Landmark        },
  { value: "other",       label: "Other",                           icon: Building        },
];

export function LeadMagnetBand() {
  const prefersReduced = useReducedMotion();
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [role, setRole] = useState("");
  const [industry, setIndustry] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    setSending(true);
    await submitLead("lead-magnet-band", {
      name: data.get("name")?.toString(),
      company: data.get("company")?.toString(),
      email: data.get("email")?.toString(),
      role,
      industry,
    });
    setSending(false);
    setSubmitted(true);
  }

  return (
    <section className="section-padding bg-white">
      <div className="container max-w-[1200px]">
        <motion.div
          initial={prefersReduced ? {} : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl bg-brand-navy px-8 py-12 md:px-14 md:py-16"
        >
          <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-brand-teal/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-brand-tealLight/5 blur-3xl pointer-events-none" />

          <div className="relative grid lg:grid-cols-2 gap-10 items-start">
            {/* Left: Copy */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              <motion.span
                variants={fadeUp}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-teal/20 text-brand-tealLight text-sm font-semibold"
              >
                Free Price Check
              </motion.span>
              <motion.h2 variants={fadeUp} className="font-display text-section text-white">
                See what you&apos;d save on your facility supplies
              </motion.h2>
              <motion.p variants={fadeUp} className="text-white/60 text-body-lg">
                Send us your current supply list and we&apos;ll return a best-price quotation - no obligation, no sales pitch.
              </motion.p>
              <motion.ul variants={staggerContainer} className="space-y-2 pt-2">
                {[
                  "Best price across your full supply list",
                  "24-hour delivery, pan-India",
                  "Credit or instant payment",
                ].map((item) => (
                  <motion.li
                    key={item}
                    variants={fadeUp}
                    className="flex items-center gap-3 text-sm text-white/70"
                  >
                    <CheckCircle className="h-4 w-4 text-brand-tealLight shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            {/* Right: Form */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {submitted ? (
                <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
                  <div className="w-14 h-14 rounded-full bg-brand-teal/20 flex items-center justify-center">
                    <CheckCircle className="h-7 w-7 text-brand-tealLight" />
                  </div>
                  <h3 className="font-display font-semibold text-white text-xl">We&apos;re on it!</h3>
                  <p className="text-white/60 text-sm max-w-xs">
                    Our team will reach out within 24 hours with your best-price quotation.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="glass rounded-2xl p-6 space-y-4"
                  noValidate
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="lm-name" className="text-xs text-white/60 font-medium">Your name *</label>
                      <Input
                        id="lm-name"
                        name="name"
                        placeholder="Rajesh Kumar"
                        required
                        className="bg-white/10 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-brand-tealLight"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="lm-company" className="text-xs text-white/60 font-medium">Company *</label>
                      <Input
                        id="lm-company"
                        name="company"
                        placeholder="Acme Foods Pvt. Ltd."
                        required
                        className="bg-white/10 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-brand-tealLight"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="lm-role" className="text-xs text-white/60 font-medium">Your role *</label>
                    <FormSelect
                      id="lm-role"
                      value={role}
                      onValueChange={setRole}
                      placeholder="Select your role"
                      options={roleOptions}
                      className="bg-white/10 border-white/10 text-white data-[placeholder]:text-white/40"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="lm-industry" className="text-xs text-white/60 font-medium">Industry *</label>
                    <FormSelect
                      id="lm-industry"
                      value={industry}
                      onValueChange={setIndustry}
                      placeholder="Select your industry"
                      options={industryOptions}
                      className="bg-white/10 border-white/10 text-white data-[placeholder]:text-white/40"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="lm-email" className="text-xs text-white/60 font-medium">Work email *</label>
                    <Input
                      id="lm-email"
                      name="email"
                      type="email"
                      placeholder="you@company.com"
                      required
                      className="bg-white/10 border-white/10 text-white placeholder:text-white/30 focus-visible:ring-brand-tealLight"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="xl"
                    className="w-full rounded-full"
                    disabled={sending}
                  >
                    {sending ? "Sending..." : "Get My Free Quotation"}
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>

                  <p className="text-xs text-white/30 text-center">
                    No credit card required. No obligation. 100% confidential.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
