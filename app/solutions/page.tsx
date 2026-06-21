import type { Metadata } from "next";
import { PageHero } from "@/components/blocks/page-hero";
import { SolutionsByFunction } from "@/components/blocks/solutions-by-function";
import { WorkflowStepper } from "@/components/blocks/workflow-stepper";
import { IntegrationsRow } from "@/components/blocks/integrations-row";
import { FAQSection } from "@/components/blocks/faq-section";
import { FinalCTASection } from "@/components/blocks/final-cta-section";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "PrimeServe sources, delivers in 24 hours, and invoices your housekeeping & facility supplies under one name — AI best-price quotes, credit or instant payment, and total spend control for offices, F&B, hospitality, and healthcare across India.",
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        badge="Solutions"
        headline="Everything you need to run facility supply"
        subtext="From an AI best-price quote to 24-hour delivery, one-name billing, and audit-ready reports — PrimeServe handles your entire supply lifecycle so your team just orders and receives."
        variant="solutions"
        cta={{ label: "Request a Quotation", href: "/contact" }}
        secondaryCta={{ label: "Explore Features", href: "#workflow" }}
      />
      <SolutionsByFunction />
      <WorkflowStepper />
      <IntegrationsRow />
      <FAQSection />
      <FinalCTASection
        headline="See it working for your operations"
        subtext="Send us your supply list and we'll show you the best price, the delivery timeline, and how total spend control looks for your business."
        ctaLabel="Request a Quotation"
      />
    </>
  );
}
