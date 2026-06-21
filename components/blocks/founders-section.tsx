"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Linkedin } from "lucide-react";
import { staggerContainer, fadeUp } from "@/lib/motion-variants";

interface Founder {
  name: string;
  title: string;
  bio: string;
  imageUrl: string;
  linkedinUrl?: string;
}

const defaultFounders: Founder[] = [
  {
    name: "Founder Name",
    title: "Co-Founder & CEO",
    bio: "Years spent running operations across multi-outlet businesses in Bengaluru — and living the daily chaos of juggling suppliers, chasing quotes, and reconciling scattered bills. Built the first version of PrimeServe to replace all of it with one prime.",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    linkedinUrl: "#",
  },
  {
    name: "Co-Founder Name",
    title: "Co-Founder & CTO",
    bio: "Product and engineering background across B2B platforms, with deep expertise in supply workflows, fast fulfilment, and India-specific compliance (GST). Architected PrimeServe's quotation, ordering, and spend-control engine.",
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    linkedinUrl: "#",
  },
];

interface FoundersSectionProps {
  founders?: Founder[];
}

export function FoundersSection({ founders = defaultFounders }: FoundersSectionProps) {
  const prefersReduced = useReducedMotion();

  return (
    <section className="section-padding bg-brand-nearWhite">
      <div className="container max-w-[1200px]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center space-y-4 mb-12"
        >
          <motion.h2 variants={fadeUp} className="font-display text-section text-brand-black">
            The founding team
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-body-lg text-brand-black/55 max-w-xl mx-auto"
          >
            Operators who became builders — now helping other teams replace supplier chaos with one prime.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto"
        >
          {founders.map(({ name, title, bio, imageUrl, linkedinUrl }) => (
            <motion.div
              key={name}
              variants={fadeUp}
              whileHover={prefersReduced ? {} : { y: -4 }}
              className="p-7 rounded-2xl bg-white border border-black/5 shadow-sm space-y-4 transition-shadow hover:shadow-md"
            >
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 rounded-2xl overflow-hidden shrink-0">
                  <Image
                    src={imageUrl}
                    alt={`Portrait of ${name}, ${title} at PrimeServe`}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="font-display font-semibold text-brand-black truncate">{name}</h3>
                  <p className="text-sm text-brand-teal font-medium">{title}</p>
                </div>
              </div>
              <p className="text-sm text-brand-black/60 leading-relaxed">{bio}</p>
              {linkedinUrl && (
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-brand-black/40 hover:text-brand-teal transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal rounded"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
