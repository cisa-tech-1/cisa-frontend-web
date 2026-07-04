"use client";

import { m, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type MarqueeProps = {
  children: ReactNode;
  /** Seconds for one full loop. Higher = slower. */
  speed?: number;
  /** Gap between items in px (also used as the seam gap for a seamless loop). */
  gap?: number;
  className?: string;
};

/**
 * Slowly scrolls its children horizontally in a seamless loop. The children
 * are duplicated into two identical copies; each copy carries the gap as
 * trailing padding so translating the track by exactly -50% aligns copy two
 * over copy one with no hitch. Renders a static, centered row when the user
 * prefers reduced motion.
 */
export function Marquee({ children, speed = 28, gap = 40, className }: MarqueeProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <div
        className={`flex flex-wrap items-center justify-center ${className ?? ""}`}
        style={{ gap }}
      >
        {children}
      </div>
    );
  }

  const copyStyle = {
    display: "flex",
    alignItems: "center",
    flexShrink: 0,
    gap,
    paddingRight: gap,
  } as const;

  return (
    <div className={`overflow-hidden ${className ?? ""}`}>
      <m.div
        className="flex w-max items-center"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: speed, ease: "linear", repeat: Infinity }}
      >
        <div style={copyStyle}>{children}</div>
        <div style={copyStyle} aria-hidden>
          {children}
        </div>
      </m.div>
    </div>
  );
}
