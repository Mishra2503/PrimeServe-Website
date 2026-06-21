import type { Metadata } from "next";
import { PageHero } from "@/components/blocks/page-hero";
import { ComparisonTable } from "@/components/blocks/comparison-table";
import { DifferentiatorsCards } from "@/components/blocks/differentiators-cards";
import { MetricsSection } from "@/components/blocks/metrics-section";
import { TestimonialsStaggered } from "@/components/blocks/testimonials-staggered";
import { FinalCTASection } from "@/components/blocks/final-cta-section";

export const metadata: Metadata = {
  title: "Why PrimeServe",
  description:
    "Why one prime beats juggling a dozen suppliers and spreadsheets — single-name sourcing, 24-hour delivery, credit or instant payment, and total spend control across India.",
};

export default function WhyPrimeServePage() {
  return (
    <>
      <PageHero
        badge="Why PrimeServe"
        headline="One prime beats a dozen suppliers"
        subtext="Scattered sources, opaque prices, messy paperwork, and zero control don't scale. Here's why offices, F&B, hospitality, and healthcare teams across India switch to PrimeServe."
        variant="why"
        cta={{ label: "Request a Quotation", href: "/contact" }}
        secondaryCta={{ label: "See the difference", href: "#metrics" }}
      />
      <ComparisonTable />
      <DifferentiatorsCards />
      <MetricsSection headline="Why teams choose PrimeServe" />
      <TestimonialsStaggered />
      <FinalCTASection
        headline="See the difference for your business"
        subtext="Send us your supply list and we'll show you the best price, the delivery timeline, and the control you'd gain."
        ctaLabel="Request a Quotation"
      />
    </>
  );
}
