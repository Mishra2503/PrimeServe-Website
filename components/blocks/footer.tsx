import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, ShieldCheck, Truck, CreditCard } from "lucide-react";
import { LogoFull } from "@/components/ui/primeserve-logo";
import { NewsletterForm } from "@/components/blocks/newsletter-form";

const quickLinks = [
  { label: "Home Page", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/solutions" },
  { label: "Contact", href: "/contact" },
  { label: "Careers", href: "/contact" },
];

const categories = [
  { label: "Housekeeping", href: "#" },
  { label: "Cleaning Chemicals", href: "#" },
  { label: "Office Stationery", href: "#" },
  { label: "Pantry Items", href: "#" },
  { label: "Facility & Tools", href: "#" },
  { label: "Printing Solutions", href: "#" },
];

const trustBadges = [
  { icon: ShieldCheck, label: "Secure Payments" },
  { icon: Truck, label: "Free Shipping 5K+" },
  { icon: CreditCard, label: "45-Day Credit" },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter / X" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com/company/primeserve", label: "LinkedIn" },
];

const policyLinks = [
  { label: "Terms and Conditions", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Credit Policy", href: "/privacy" },
  { label: "Shipping & Delivery Policy", href: "/privacy" },
  { label: "Refund Policy", href: "/privacy" },
];

export function Footer() {
  return (
    <footer className="bg-[#0d1a2d] text-white">
      <div className="container max-w-[1200px] py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Col 1: Brand */}
          <div className="space-y-4">
            <Link href="/">
              <LogoFull iconSize={28} textSize="text-base" variant="dark" />
            </Link>
            <p className="text-sm text-white/55 leading-relaxed max-w-xs">
              India&apos;s procurement &amp; supply platform for housekeeping and facilities. Order in one place, get 24-hour delivery, and control every rupee - all under one name.
            </p>
            <div className="flex items-center gap-3 pt-1">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center hover:border-brand-tealLight hover:text-brand-tealLight transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="font-display font-semibold text-white text-sm">Quick Links</h3>
            <div className="h-px bg-white/10" />
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/55 hover:text-brand-tealLight transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal rounded"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Categories */}
          <div className="space-y-4">
            <h3 className="font-display font-semibold text-white text-sm">Categories</h3>
            <div className="h-px bg-white/10" />
            <ul className="space-y-2.5">
              {categories.map((cat) => (
                <li key={cat.label}>
                  <Link
                    href={cat.href}
                    className="text-sm text-white/55 hover:text-brand-tealLight transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal rounded"
                  >
                    {cat.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Stay Updated */}
          <div className="space-y-4">
            <h3 className="font-display font-semibold text-white text-sm">Stay Updated</h3>
            <p className="text-sm text-white/55 leading-relaxed">
              Subscribe to our newsletter for exclusive deals, bulk discounts, and the latest product updates.
            </p>
            {/* Newsletter form */}
            <NewsletterForm />
            {/* Trust badges */}
            <div className="space-y-2 pt-1">
              {trustBadges.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2.5">
                  <Icon className="h-4 w-4 text-brand-teal shrink-0" />
                  <span className="text-xs text-white/55">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container max-w-[1200px] py-4 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/35">
            © {new Date().getFullYear()} PrimeServe. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-1 justify-center md:justify-end">
            {policyLinks.map((p) => (
              <Link
                key={p.label}
                href={p.href}
                className="text-xs text-white/35 hover:text-white/60 transition-colors"
              >
                {p.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
