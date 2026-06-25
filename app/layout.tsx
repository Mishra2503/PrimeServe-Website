import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { NavHeader } from "@/components/blocks/nav-header";
import { Footer } from "@/components/blocks/footer";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://primeservefs.com"),
  title: {
    default: "PrimeServe — Procurement & Supply Platform for Facilities | India",
    template: "%s | PrimeServe",
  },
  description:
    "PrimeServe sources, delivers, and invoices your housekeeping & facility supplies under one name — AI best-price quotes, 24-hour delivery across India, credit or instant payment, and total spend control. Built for offices, F&B, hospitality, and healthcare.",
  keywords: [
    "procurement platform India",
    "facility supplies procurement",
    "housekeeping supplies India",
    "cleaning chemicals supplier",
    "office pantry supplies delivery",
    "B2B supplies on credit",
    "24 hour supply delivery",
    "facility management supplies",
    "request for quotation platform",
    "GST invoice supplies",
  ],
  authors: [{ name: "PrimeServe" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://primeservefs.com",
    siteName: "PrimeServe",
    title: "PrimeServe — Order it. We source, deliver & invoice it.",
    description:
      "India's procurement & supply platform for housekeeping and facilities. AI best-price quotes, 24-hour delivery, credit or instant payment, and total spend control — all under the PrimeServe name.",
  },
  twitter: {
    card: "summary_large_image",
    title: "PrimeServe — Procurement & Supply, done for you",
    description:
      "Order facility & housekeeping supplies in one place. 24-hour delivery across India, AI best-price quotes, credit or instant pay, total spend control.",
  },
};

/* AEO / GEO structured data */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://primeservefs.com/#organization",
      name: "PrimeServe",
      url: "https://primeservefs.com",
      description:
        "PrimeServe is India's procurement and supply platform for housekeeping and facility products. Clients order in one place; PrimeServe sources, delivers within 24 hours, and invoices everything under its own name, with total spend control and audit-ready reports.",
      areaServed: "IN",
      knowsAbout: [
        "facility supplies procurement",
        "housekeeping supplies",
        "cleaning chemicals",
        "office pantry supplies",
        "spend management",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://primeservefs.com/#website",
      url: "https://primeservefs.com",
      name: "PrimeServe",
      publisher: { "@id": "https://primeservefs.com/#organization" },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${plusJakartaSans.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body bg-white text-brand-black antialiased">
        <NavHeader />
        <main>{children}</main>
        <Footer />
        {/* Google Analytics — loads after page is interactive, does not block rendering */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-21NHENBKF4"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-21NHENBKF4');
          `}
        </Script>
      </body>
    </html>
  );
}
