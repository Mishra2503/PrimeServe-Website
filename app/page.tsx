import type { Metadata } from "next";
import { HeroPrimeServe } from "@/components/blocks/hero-primeserve";
import { TrustedByCarousel } from "@/components/blocks/trusted-by-carousel";
import { LeakageProblemSection } from "@/components/blocks/leakage-problem-section";
import { SolutionsGrid } from "@/components/blocks/solutions-grid";
import { LeadMagnetBand } from "@/components/blocks/lead-magnet-band";
import { ProductTourBento } from "@/components/blocks/product-tour-bento";
import { TestimonialsStaggered } from "@/components/blocks/testimonials-staggered";
import { FinalCTASection } from "@/components/blocks/final-cta-section";

export const metadata: Metadata = {
  title: "PrimeServe — Order Facility Supplies. Control Every Rupee.",
  description:
    "PrimeServe sources, delivers, and invoices your housekeeping & facility supplies under one name — AI best-price quotes, 24-hour delivery across India, credit or instant payment, and total spend control. Built for offices, F&B, hospitality, and healthcare.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <HeroPrimeServe />
      <TrustedByCarousel />
      <LeakageProblemSection />
      <SolutionsGrid />
      <LeadMagnetBand />
      <ProductTourBento />
      <TestimonialsStaggered />
      <FinalCTASection />
    </>
  );
}
