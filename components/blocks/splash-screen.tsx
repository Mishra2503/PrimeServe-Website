"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const curtainEase = [0.76, 0, 0.24, 1] as const;

export function SplashScreen() {
  const [show, setShow] = useState(true);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) {
      setShow(false);
      return;
    }
    const dismiss = () => {
      setShow(false);
      window.removeEventListener("scroll", dismiss);
    };
    window.addEventListener("scroll", dismiss, { passive: true });
    return () => window.removeEventListener("scroll", dismiss);
  }, [reduced]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="splash"
          className="fixed inset-0 z-[100] overflow-hidden"
        >
          {/* Top curtain panel */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-1/2 bg-brand-navy"
            exit={{ y: "-100%", transition: { duration: 0.9, ease: curtainEase } }}
          />

          {/* Bottom curtain panel */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-1/2 bg-brand-navy"
            exit={{ y: "100%", transition: { duration: 0.9, ease: curtainEase } }}
          />

          {/* Teal ambient glow - sits between panels */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full bg-brand-teal/[0.07] blur-[120px] pointer-events-none" />

          {/* Centered wordmark */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            exit={{ opacity: 0, transition: { duration: 0.25 } }}
          >
            <div className="relative px-14 py-10 rounded-3xl">
              {/* 10% gradient card */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-brand-teal/10 to-brand-navy/10 backdrop-blur-sm border border-white/[0.07]" />

              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] } }}
                className="relative flex flex-col items-center gap-3"
              >
                <span className="font-display text-5xl md:text-7xl font-bold text-white tracking-tight select-none">
                  PrimeServe
                </span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { delay: 0.45, duration: 0.5 } }}
                  className="text-[11px] text-white/40 tracking-[0.22em] uppercase font-semibold select-none"
                >
                  Procurement Intelligence
                </motion.span>
              </motion.div>
            </div>
          </motion.div>

          {/* Scroll hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.85, duration: 0.5 } }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none select-none"
          >
            <span className="text-[10px] text-white/30 tracking-[0.28em] uppercase font-semibold">
              scroll
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
              className="w-px h-8 bg-white/20"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
