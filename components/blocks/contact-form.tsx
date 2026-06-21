"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, CheckCircle, Star, Mail, Calendar, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { fadeUp, staggerContainer } from "@/lib/motion-variants";

const contactChannels = [
  {
    icon: Mail,
    title: "Email us directly",
    description: "For press inquiries, partnership proposals, or general questions.",
    action: "contact@primeservefs.com",
    href: "mailto:contact@primeservefs.com",
    label: "Send Email",
  },
  {
    icon: Calendar,
    title: "Book a meeting",
    description: "Skip the form — schedule a 30-minute slot directly with our team.",
    action: "Schedule a Call",
    href: "/contact",
    label: "Pick a time",
  },
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const prefersReduced = useReducedMotion();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <section className="section-padding bg-white">
        <div className="container max-w-[1200px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-md mx-auto text-center py-16 space-y-5"
          >
            <div className="w-16 h-16 rounded-full bg-brand-teal/10 flex items-center justify-center mx-auto">
              <CheckCircle className="h-8 w-8 text-brand-teal" />
            </div>
            <h2 className="font-display font-bold text-2xl text-brand-black">We&apos;ll be in touch!</h2>
            <p className="text-brand-black/55">
              Our team will reach out within 24 hours with your best-price quotation.
            </p>
            <Button variant="outline" asChild>
              <Link href="/">Back to home</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Main contact section */}
      <section className="section-padding bg-white">
        <div className="container max-w-[1200px]">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">

            {/* Left: Trust panel */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="space-y-8"
            >
              <motion.div variants={fadeUp} className="space-y-3">
                <h2 className="font-display font-bold text-3xl text-brand-black leading-snug">
                  Get in touch with our team
                </h2>
                <p className="text-brand-black/55 text-body-lg leading-relaxed">
                  Our team is here to get you the best price on your facility supplies — fast. Drop us your list or a message and we&apos;ll be in touch the same day.
                </p>
              </motion.div>

              {/* 5-star rating + testimonial */}
              <motion.div
                variants={fadeUp}
                className="p-6 rounded-2xl bg-brand-nearWhite border border-black/5 space-y-4"
              >
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="h-5 w-5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-brand-black/70 leading-relaxed text-sm">
                  &ldquo;PrimeServe replaced five different suppliers with one name. We order, it arrives within 24 hours, and the paperwork is finally clean.&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-1">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-brand-teal to-brand-navy flex items-center justify-center">
                    <span className="text-white text-xs font-bold">OH</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-brand-black">Operations Head</p>
                    <p className="text-xs text-brand-black/40">Facilities team, Bengaluru</p>
                  </div>
                </div>
              </motion.div>

              {/* Contact details */}
              <motion.div variants={staggerContainer} className="space-y-3">
                {[
                  { icon: Mail, label: "contact@primeservefs.com", href: "mailto:contact@primeservefs.com" },
                  { icon: Phone, label: "+91 99000 00000", href: "tel:+919900000000" },
                  { icon: MapPin, label: "Koramangala, Bengaluru – 560 034", href: "#" },
                ].map(({ icon: Icon, label, href }) => (
                  <motion.a
                    key={label}
                    variants={fadeUp}
                    href={href}
                    className="flex items-center gap-3 text-sm text-brand-black/60 hover:text-brand-teal transition-colors"
                  >
                    <Icon className="h-4 w-4 text-brand-teal shrink-0" />
                    {label}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Right: Form card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <form
                onSubmit={handleSubmit}
                className="space-y-4 p-8 rounded-3xl bg-white border border-black/6 shadow-xl shadow-black/4"
                noValidate
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="cf-name" className="text-sm font-medium text-brand-black">
                      Full Name *
                    </label>
                    <Input id="cf-name" placeholder="Rajesh Kumar" required />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="cf-company" className="text-sm font-medium text-brand-black">
                      Company *
                    </label>
                    <Input id="cf-company" placeholder="Acme Foods Pvt. Ltd." required />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="cf-email" className="text-sm font-medium text-brand-black">
                    Work Email *
                  </label>
                  <Input id="cf-email" type="email" placeholder="you@company.com" required />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="cf-phone" className="text-sm font-medium text-brand-black">
                      Phone (with country code)
                    </label>
                    <Input id="cf-phone" type="tel" placeholder="+91 98765 43210" />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="cf-role" className="text-sm font-medium text-brand-black">
                      Your role *
                    </label>
                    <Select id="cf-role" required defaultValue="">
                      <option value="" disabled>Select your role</option>
                      <option value="founder">Founder / Owner</option>
                      <option value="cfo">CFO / Finance Head</option>
                      <option value="procurement">Head of Procurement</option>
                      <option value="operations">Operations Head</option>
                      <option value="other">Other</option>
                    </Select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="cf-query" className="text-sm font-medium text-brand-black">
                    Tell us about your operations
                  </label>
                  <Textarea
                    id="cf-query"
                    placeholder="e.g. We run 8 office locations and need monthly housekeeping, pantry & cleaning supplies — here's our typical list..."
                    rows={4}
                  />
                </div>

                <label className="flex items-start gap-2.5 text-xs text-brand-black/50 cursor-pointer">
                  <input type="checkbox" required className="mt-0.5 rounded accent-brand-teal" />
                  By reaching out, you agree to our{" "}
                  <a href="#" className="text-brand-teal hover:underline">Privacy Policy</a>.
                </label>

                <Button type="submit" variant="primary" size="lg" className="w-full">
                  Request a Quotation
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Button>

                <p className="text-xs text-brand-black/35 text-center">
                  We respond within 24 hours, Monday–Saturday.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Direct support channels */}
      <section className="pb-16 bg-white">
        <div className="container max-w-[1200px]">
          <p className="text-center text-sm font-semibold text-brand-black/40 uppercase tracking-wider mb-8">
            For other dedicated support
          </p>
          <div className="grid sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
            {contactChannels.map(({ icon: Icon, title, description, action, href, label }) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                whileHover={prefersReduced ? {} : { y: -3 }}
                className="p-6 rounded-2xl bg-brand-nearWhite border border-black/5 hover:border-brand-teal/20 hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-teal/10 flex items-center justify-center mb-4">
                  <Icon className="h-5 w-5 text-brand-teal" />
                </div>
                <h3 className="font-display font-semibold text-brand-black mb-1.5">{title}</h3>
                <p className="text-sm text-brand-black/55 mb-4">{description}</p>
                <a
                  href={href}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-brand-teal/30 text-brand-teal text-sm font-semibold hover:bg-brand-teal/5 transition-colors"
                >
                  {label}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA band */}
      <section className="py-16 bg-gradient-to-br from-brand-navy to-[#0d1f2e]">
        <div className="container max-w-[1200px] text-center space-y-6">
          <h2 className="font-display font-bold text-2xl lg:text-3xl text-white">
            Ready to get your best price?
          </h2>
          <p className="text-white/55 max-w-lg mx-auto">
            Send us your supply list and we&apos;ll get you a best-price quotation, fast — then deliver within 24 hours, anywhere in India.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button variant="primary" size="lg" asChild>
              <Link href="#cf-name">
                Request a Quotation
                <ArrowRight className="h-4 w-4 ml-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
