"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { staggerContainer, fadeUp } from "@/lib/motion-variants";

const faqs = [
  {
    q: "What is PrimeServe?",
    a: "PrimeServe is India's procurement and supply platform for housekeeping and facility products. You order in one place; we source it, deliver it within 24 hours, and invoice everything under the PrimeServe name - with total spend control in one portal.",
  },
  {
    q: "How does PrimeServe delivery work?",
    a: "Place an order or approve a quote, and PrimeServe sources and delivers it to your doorstep within 24 hours - anywhere in India, to a single outlet or many at once.",
  },
  {
    q: "What is 'Request a Quotation'?",
    a: "Upload your PO or requirements list and our AI instantly fetches the best available price for every item. Approve it and buy on credit or pay instantly - no calls, no haggling, no waiting.",
  },
  {
    q: "Can I buy on credit?",
    a: "Yes. You can buy on flexible credit terms or pay instantly - whichever suits your business. Credit is subject to approval.",
  },
  {
    q: "What products can I order from PrimeServe?",
    a: "Housekeeping and cleaning supplies, pantry items, office stationery, facility tools and equipment, printing, and more - all from one PrimeServe catalogue.",
  },
  {
    q: "How do billing and GST work?",
    a: "Every order comes with one clean purchase order, a GST-compliant invoice, and a matching delivery challan - all from PrimeServe, in one consistent format your accounting team can reconcile in minutes.",
  },
  {
    q: "Does PrimeServe work with my accounting software?",
    a: "Yes. Your PrimeServe invoices, POs, and reports flow into tools like Tally, Zoho Books, QuickBooks, SAP, and the GST portal - no rip-and-replace required.",
  },
  {
    q: "Which industries does PrimeServe serve?",
    a: "We serve offices and coworking spaces, F&B and restaurants, hotels and hospitality, and hospitals and healthcare - across India.",
  },
  {
    q: "How much does PrimeServe cost?",
    a: "There's no platform fee to get started - you pay for the supplies you order, at the best price our AI finds. Request a quotation to see pricing for your exact list.",
  },
  {
    q: "How do I get started with PrimeServe?",
    a: "Request a quotation with your supply list, or talk to our team. We'll send your best price and can deliver your first order within 24 hours.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

interface FAQSectionProps {
  headline?: string;
}

export function FAQSection({ headline = "Frequently asked questions" }: FAQSectionProps) {
  return (
    <section className="section-padding bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="container max-w-[1200px]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center space-y-4 mb-12"
        >
          <motion.h2 variants={fadeUp} className="font-display text-section text-brand-black">
            {headline}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-body-lg text-brand-black/55 max-w-xl mx-auto"
          >
            Everything teams ask before they switch to PrimeServe.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.4 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-0">
            {faqs.map(({ q, a }, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger>{q}</AccordionTrigger>
                <AccordionContent>{a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
