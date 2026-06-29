import type { Metadata } from "next";
import { SolutionsHero } from "@/components/blocks/solutions-hero";
import { SolutionsByFunction } from "@/components/blocks/solutions-by-function";
import { WorkflowStepper } from "@/components/blocks/workflow-stepper";
import { CreditTermsSection } from "@/components/blocks/credit-terms-section";
import { FAQSection } from "@/components/blocks/faq-section";
import { FinalCTASection } from "@/components/blocks/final-cta-section";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "PrimeServe sources, delivers in 24 hours, and invoices your housekeeping & facility supplies under one name - AI best-price quotes, credit or instant payment, and total spend control for offices, F&B, hospitality, and healthcare across India.",
};

export default function SolutionsPage() {
  return (
    <>
      <SolutionsHero />
      <SolutionsByFunction />
      <WorkflowStepper />
      <CreditTermsSection />
      <FAQSection />
      <FinalCTASection
        headline="See it working for your operations"
        subtext="Send us your supply list and we'll show you the best price, the delivery timeline, and how total spend control looks for your business."
        ctaLabel="Request a Quotation"
      />
    </>
  );
}
