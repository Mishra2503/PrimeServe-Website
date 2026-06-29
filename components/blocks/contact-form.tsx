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
import { submitLead } from "@/lib/lead-webhook";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

const contactChannels = [
  {
    icon: Mail,
    title: "Email us directly",
    description: "For press inquiries, partnership proposals, or general questions.",
    href: "mailto:contact@primeservefs.com",
    label: "Send Email",
    type: "teal" as const,
  },
  {
    icon: Calendar,
    title: "Book a meeting",
    description: "Skip the form - schedule a 30-minute slot directly with our team.",
    href: "/contact",
    label: "Pick a time",
    type: "teal" as const,
  },
  {
    icon: WhatsAppIcon,
    title: "Chat on WhatsApp",
    description: "Prefer to text? Message us directly for a fast response on your queries.",
    href: "https://wa.me/910000000000",
    label: "Message us",
    type: "whatsapp" as const,
  },
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const prefersReduced = useReducedMotion();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    setSending(true);
    await submitLead("contact-page", {
      name: data.get("name")?.toString(),
      company: data.get("company")?.toString(),
      email: data.get("email")?.toString(),
      phone: data.get("phone")?.toString(),
      role: data.get("role")?.toString(),
      message: data.get("message")?.toString(),
    });
    setSending(false);
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
                  Our team is here to get you the best price on your facility supplies - fast. Drop us your list or a message and we&apos;ll be in touch the same day.
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
                    <Input id="cf-name" name="name" placeholder="Rajesh Kumar" required />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="cf-company" className="text-sm font-medium text-brand-black">
                      Company *
                    </label>
                    <Input id="cf-company" name="company" placeholder="Acme Foods Pvt. Ltd." required />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="cf-email" className="text-sm font-medium text-brand-black">
                    Work Email *
                  </label>
                  <Input id="cf-email" name="email" type="email" placeholder="you@company.com" required />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="cf-phone" className="text-sm font-medium text-brand-black">
                      Phone (with country code)
                    </label>
                    <Input id="cf-phone" name="phone" type="tel" placeholder="+91 98765 43210" />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="cf-role" className="text-sm font-medium text-brand-black">
                      Your role *
                    </label>
                    <Select id="cf-role" name="role" required defaultValue="">
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
                    name="message"
                    placeholder="e.g. We run 8 office locations and need monthly housekeeping, pantry & cleaning supplies - here's our typical list..."
                    rows={4}
                  />
                </div>

                <label className="flex items-start gap-2.5 text-xs text-brand-black/50 cursor-pointer">
                  <input type="checkbox" required className="mt-0.5 rounded accent-brand-teal" />
                  By reaching out, you agree to our{" "}
                  <a href="#" className="text-brand-teal hover:underline">Privacy Policy</a>.
                </label>

                <Button type="submit" variant="primary" size="lg" className="w-full" disabled={sending}>
                  {sending ? "Sending..." : "Request a Quotation"}
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {contactChannels.map(({ icon: Icon, title, description, href, label, type }, idx) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={prefersReduced ? {} : { y: -4 }}
                className={
                  type === "whatsapp"
                    ? "group p-6 rounded-2xl bg-white border border-t-2 border-black/8 border-t-green-500/60 shadow-sm hover:shadow-lg hover:border-green-300/50 transition-all"
                    : "group p-6 rounded-2xl bg-white border border-t-2 border-black/8 border-t-brand-teal/60 shadow-sm hover:shadow-lg hover:border-brand-teal/30 transition-all"
                }
              >
                <div className={
                  type === "whatsapp"
                    ? "w-11 h-11 rounded-xl bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center mb-4"
                    : "w-11 h-11 rounded-xl bg-gradient-to-br from-brand-teal/15 to-brand-teal/5 flex items-center justify-center mb-4"
                }>
                  <Icon className={type === "whatsapp" ? "h-5 w-5 text-green-600" : "h-5 w-5 text-brand-teal"} />
                </div>
                <h3 className="font-display font-semibold text-brand-black mb-1.5">{title}</h3>
                <p className="text-sm text-brand-black/55 mb-5">{description}</p>
                <a
                  href={href}
                  className={
                    type === "whatsapp"
                      ? "inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-green-300/60 text-green-700 text-sm font-semibold hover:bg-green-600 hover:text-white hover:border-green-600 transition-all"
                      : "inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-brand-teal/30 text-brand-teal text-sm font-semibold hover:bg-brand-teal hover:text-white hover:border-brand-teal transition-all"
                  }
                >
                  {label}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
