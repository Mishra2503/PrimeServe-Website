import type { Metadata } from "next";
import { PageHero } from "@/components/blocks/page-hero";
import { StoryMission } from "@/components/blocks/story-mission";
import { FoundersSection } from "@/components/blocks/founders-section";
import { ValuesSection } from "@/components/blocks/values-section";
import { MilestonesTimeline } from "@/components/blocks/milestones-timeline";
import { FinalCTASection } from "@/components/blocks/final-cta-section";

export const metadata: Metadata = {
  title: "About",
  description:
    "PrimeServe is India's procurement & supply platform for housekeeping and facilities — we source, deliver in 24 hours, and invoice everything under one name. Our story, mission, and the team behind the platform.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        badge="About PrimeServe"
        headline="Your prime — never a middleman"
        subtext="PrimeServe began with a simple frustration: buying facility supplies meant juggling endless sources, scattered bills, and zero control. So we became the single name behind it all — sourcing it, delivering it in 24 hours, and invoicing it as one."
        variant="about"
        cta={{ label: "Request a Quotation", href: "/contact" }}
      />
      <StoryMission />
      <FoundersSection />
      <ValuesSection />
      <MilestonesTimeline />
      <FinalCTASection
        headline="Make PrimeServe your prime"
        subtext="Send us your supply list and see what one name for sourcing, delivery, and billing can do for your operations."
        ctaLabel="Request a Quotation"
      />
    </>
  );
}
