"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LogoFull } from "@/components/ui/primeserve-logo";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "/solutions" },
  { label: "Why PrimeServe", href: "/why-primeserve" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function NavHeader() {
  const pathname = usePathname();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 flex items-center transition-all duration-300 px-6 lg:px-10",
          scrolled
            ? "py-3 bg-white/90 backdrop-blur-md border-b border-black/5 shadow-sm"
            : "py-5"
        )}
      >
        <div className="w-full relative flex items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <LogoFull iconSize={28} textSize="text-base" />
          </Link>

          {/* Desktop nav pill - absolutely centred in the full header width */}
          <nav
            className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-1 border border-brand-black/15 rounded-full px-2 py-1.5 bg-white"
            onMouseLeave={() => setHoveredItem(null)}
          >
            {navItems.map((item) => {
              const isActive = item.href === pathname;
              const isHovered = item.href === hoveredItem;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onMouseEnter={() => setHoveredItem(item.href)}
                  className={cn(
                    "relative px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal",
                    (isActive && hoveredItem === null) || isHovered ? "text-white" : "text-brand-black"
                  )}
                >
                  {/* Active indicator - only visible when no tab is being hovered */}
                  {isActive && hoveredItem === null && (
                    <span
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-[#0B2C42] via-[#065E67] to-[#00856B]"
                      style={{ borderRadius: 9999 }}
                    />
                  )}

                  {/* Hover indicator - animates across tabs via layoutId */}
                  {isHovered && (
                    <motion.span
                      layoutId="nav-hover"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-[#0B2C42] via-[#065E67] to-[#00856B]"
                      style={{ borderRadius: 9999 }}
                      transition={
                        prefersReduced
                          ? { duration: 0 }
                          : { type: "spring", stiffness: 400, damping: 30 }
                      }
                    />
                  )}

                  <span className="relative z-10">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3 ml-auto">
            <Button variant="outline" size="sm" className="bg-brand-navy/[0.07] border-brand-navy/25 text-brand-navy font-semibold hover:bg-brand-navy/[0.14] hover:border-brand-navy/40" asChild>
              <Link href="https://app.primeservefs.com/" target="_blank" rel="noopener noreferrer">
                Go to store
              </Link>
            </Button>
            <Button variant="primary" size="sm" asChild>
              <Link href="/contact">Request a Quotation</Link>
            </Button>
          </div>

          {/* Mobile hamburger - h-11 w-11 = 44px minimum touch target */}
          <button
            className="md:hidden ml-auto h-11 w-11 flex items-center justify-center rounded-lg hover:bg-black/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={prefersReduced ? { opacity: 1 } : { opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReduced ? { opacity: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-0 z-40 bg-white flex flex-col pt-20 px-6 pb-8"
          >
            <nav className="flex flex-col gap-1">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={prefersReduced ? {} : { opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.25 }}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "block py-4 px-4 rounded-xl text-lg font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal",
                      pathname === item.href
                        ? "bg-gradient-to-r from-[#0B2C42] via-[#065E67] to-[#00856B] text-white"
                        : "text-brand-black hover:bg-black/5"
                    )}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="mt-auto flex flex-col gap-3">
              <Button variant="outline" size="lg" className="w-full" asChild>
                <Link href="https://app.primeservefs.com/" target="_blank" rel="noopener noreferrer">
                  Go to store
                </Link>
              </Button>
              <Button variant="primary" size="lg" className="w-full" asChild>
                <Link href="/contact">Request a Quotation</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
