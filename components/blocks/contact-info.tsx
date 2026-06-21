"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { staggerContainer, fadeUp } from "@/lib/motion-variants";

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "contact@primeservefs.com",
    href: "mailto:contact@primeservefs.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 99000 00000",
    href: "tel:+919900000000",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat on WhatsApp",
    href: "https://wa.me/919900000000",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "Koramangala, Bengaluru – 560 034",
    href: "https://maps.google.com/?q=Koramangala+Bengaluru",
  },
];

export function ContactInfo() {
  return (
    <section className="section-padding bg-brand-nearWhite">
      <div className="container max-w-[1200px]">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Contact details */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-6"
          >
            <motion.h2 variants={fadeUp} className="font-display text-section text-brand-black">
              Other ways to reach us
            </motion.h2>
            <motion.div variants={staggerContainer} className="space-y-4">
              {contactDetails.map(({ icon: Icon, label, value, href }) => (
                <motion.a
                  key={label}
                  variants={fadeUp}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white border border-black/5 hover:border-brand-teal/20 transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-teal/10 flex items-center justify-center group-hover:bg-brand-teal/20 transition-colors shrink-0">
                    <Icon className="h-5 w-5 text-brand-teal" />
                  </div>
                  <div>
                    <p className="text-xs text-brand-black/40 font-medium">{label}</p>
                    <p className="text-sm font-semibold text-brand-black">{value}</p>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Bengaluru map image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="relative h-[360px] rounded-2xl overflow-hidden border border-black/5 shadow-sm"
          >
            <Image
              src="https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=800&q=80"
              alt="Aerial view of Bengaluru city with the PrimeServe office in Koramangala"
              fill
              className="object-cover"
              sizes="(max-width: 1200px) 50vw, 600px"
            />
            {/* Teal overlay */}
            <div className="absolute inset-0 bg-brand-teal/20" />
            {/* Location pin */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white rounded-2xl px-5 py-3 shadow-xl border border-black/5 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-brand-teal flex items-center justify-center">
                  <MapPin className="h-4 w-4 text-white" />
                </div>
                <div>
                  <p className="font-display font-bold text-brand-black text-sm">PrimeServe HQ</p>
                  <p className="text-xs text-brand-black/50">Koramangala, Bengaluru</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
