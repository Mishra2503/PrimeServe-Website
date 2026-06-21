"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { MapPin } from "lucide-react";

const logos = [
  { name: "Byg Brewski"       },
  { name: "Chianti"           },
  { name: "WeWork"            },
  { name: "BHIVE Workspace"   },
  { name: "Manipal Hospitals" },
  { name: "Brigade Group"     },
];

function LogoItem({ name }: { name: string }) {
  return (
    <div className="flex items-center shrink-0 px-2.5 select-none">
      <div className="group flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200/80 bg-white hover:border-brand-teal/50 hover:bg-brand-teal/[0.04] hover:shadow-[0_2px_18px_rgba(15,118,110,0.12)] transition-all duration-200 shadow-sm cursor-default">
        <span className="w-1.5 h-1.5 rounded-full bg-brand-teal/40 group-hover:bg-brand-teal transition-colors duration-200 shrink-0" />
        <span className="font-display font-semibold text-sm text-brand-black/50 group-hover:text-brand-teal transition-colors duration-200 whitespace-nowrap">
          {name}
        </span>
      </div>
    </div>
  );
}

export function TrustedByCarousel() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="py-11 bg-white overflow-hidden border-y border-gray-100">

      {/* Heading with flanking gradient lines */}
      <div className="container max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="flex items-center justify-center gap-5 mb-8"
        >
          <div className="h-px flex-1 max-w-[200px] bg-gradient-to-r from-transparent to-brand-teal/25" />
          <div className="flex items-center gap-1.5">
            <MapPin className="h-3 w-3 text-brand-teal/60 shrink-0" />
            <span className="text-[11px] font-bold text-brand-black/40 uppercase tracking-[0.18em] whitespace-nowrap">
              Trusted by operations teams across India
            </span>
          </div>
          <div className="h-px flex-1 max-w-[200px] bg-gradient-to-l from-transparent to-brand-teal/25" />
        </motion.div>
      </div>

      {/* Marquee strip */}
      <div className="relative">
        {/* Fade-out edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {prefersReduced ? (
          <div className="flex justify-center flex-wrap gap-x-4 gap-y-3 px-8">
            {logos.map((l) => <LogoItem key={l.name} {...l} />)}
          </div>
        ) : (
          <div className="group overflow-hidden py-2">
            <div
              className="flex w-max animate-scroll group-hover:[animation-play-state:paused]"
              aria-label="Trusted companies"
            >
              {logos.map((l) => <LogoItem key={`a-${l.name}`} {...l} />)}
              <span aria-hidden="true" className="contents">
                {logos.map((l) => <LogoItem key={`b-${l.name}`} {...l} />)}
              </span>
              <span aria-hidden="true" className="contents">
                {logos.map((l) => <LogoItem key={`c-${l.name}`} {...l} />)}
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
