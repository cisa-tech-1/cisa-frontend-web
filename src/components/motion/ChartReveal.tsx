"use client";

import { useRef, type ReactNode } from "react";
import { m, useInView, useReducedMotion } from "motion/react";
import { DURATION, EASE_OUT } from "@/lib/motion";

type ChartRevealProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Holds back its chart until it scrolls into view, then mounts it so the
 * chart's built-in draw animation (Recharts) plays on screen instead of at
 * page load. Pass the chart's sizing classes via `className` so the box is
 * reserved before the chart mounts (no layout shift). Reduced-motion users
 * get the chart immediately.
 */
export function ChartReveal({ children, className }: ChartRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.35 });
  const reduceMotion = useReducedMotion();
  const show = inView || reduceMotion;

  return (
    <m.div
      ref={ref}
      className={className}
      initial={reduceMotion ? false : { opacity: 0 }}
      animate={show ? { opacity: 1 } : undefined}
      transition={{ duration: DURATION.fast, ease: EASE_OUT }}
    >
      {show ? children : null}
    </m.div>
  );
}
