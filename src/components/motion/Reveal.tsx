"use client";

import { m } from "motion/react";
import type { ElementType, ReactNode } from "react";
import { DURATION, EASE_OUT, REVEAL_Y, VIEWPORT } from "@/lib/motion";

type RevealProps = {
  children: ReactNode;
  /** Element to render, e.g. "div" (default), "section", "li". */
  as?: ElementType;
  /** Seconds to wait before animating in. Use to cascade sibling reveals. */
  delay?: number;
  /** Upward travel distance in px. Set 0 for a pure fade. */
  y?: number;
  className?: string;
};

/**
 * Fades + slides its children in the first time they scroll into view.
 * Wraps server-rendered `children`, so only this boundary is client-side.
 * Honors `prefers-reduced-motion` via the app-level MotionConfig.
 */
export function Reveal({
  children,
  as = "div",
  delay = 0,
  y = REVEAL_Y,
  className,
}: RevealProps) {
  const Component = m[as as keyof typeof m] as typeof m.div;

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: DURATION.base, ease: EASE_OUT, delay }}
    >
      {children}
    </Component>
  );
}
