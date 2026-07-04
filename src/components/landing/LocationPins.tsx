"use client";

import { m } from "motion/react";
import { scaleIn, staggerContainer, VIEWPORT } from "@/lib/motion";
import { LANDING_GLOBAL_LOCATIONS } from "@/lib/landing";

/**
 * Renders the world-map location markers. Each pin pops in with a staggered
 * cascade the first time the map scrolls into view, and its dot emits a gentle
 * looping pulse ring. Reduced motion is handled globally by MotionProvider
 * (pins appear instantly; the pulse holds static).
 */
export function LocationPins() {
  return (
    <m.div
      className="absolute inset-0"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
    >
      {LANDING_GLOBAL_LOCATIONS.map((loc) => (
        <m.div
          key={loc.name}
          variants={scaleIn}
          className="absolute flex flex-col items-center gap-[3px]"
          style={{ top: loc.top, left: loc.left, transform: "translate(-50%, -50%)" }}
        >
          <span className="relative flex size-[11px] items-center justify-center">
            <m.span
              className="absolute inline-flex size-full rounded-full bg-[#9CCC65]"
              animate={{ scale: [1, 2.2], opacity: [0.6, 0] }}
              transition={{ duration: 2, ease: "easeOut", repeat: Infinity }}
              aria-hidden
            />
            <span className="relative size-[11px] rounded-full bg-[#9CCC65]/80" aria-hidden />
          </span>
          <span className="max-w-[94px] text-center font-[family-name:var(--font-bricolage)] text-[13px] font-bold leading-4 text-white">
            {loc.name}
          </span>
        </m.div>
      ))}
    </m.div>
  );
}
