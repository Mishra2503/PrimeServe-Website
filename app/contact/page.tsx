import type { Metadata } from "next";
import { PageHero } from "@/components/blocks/page-hero";
import { ContactForm } from "@/components/blocks/contact-form";
import { FinalCTASection } from "@/components/blocks/final-cta-section";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a best-price quotation from PrimeServe or talk to our team. We source, deliver in 24 hours, and invoice your housekeeping & facility supplies under one name — across India.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        badge="Contact"
        headline="Let's get you a quote"
        subtext="Send us your supply list or requirements and we'll return a best-price quotation fast — with 24-hour delivery, credit or instant payment, and everything invoiced under one name. No sales pitch."
        align="left"
        variant="contact"
      />
      <ContactForm />
      <FinalCTASection
        headline="Ready to request a quotation?"
        subtext="Share your supply list and we'll get you the best price, fast — then deliver within 24 hours."
        ctaLabel="Request a Quotation"
      />
    </>
  );
}
