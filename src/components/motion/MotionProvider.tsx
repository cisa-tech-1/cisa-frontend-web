"use client";

import { LazyMotion, MotionConfig, domAnimation } from "motion/react";
import type { ReactNode } from "react";

/**
 * App-wide motion context.
 *
 * - `LazyMotion` + `domAnimation` keeps the bundle small: primitives use the
 *   lightweight `m.*` components (never `motion.*`) so only the DOM animation
 *   features are shipped. `strict` throws if a heavier `motion.*` sneaks in.
 * - `MotionConfig reducedMotion="user"` makes every animation honor the OS
 *   `prefers-reduced-motion` setting for free.
 *
 * This is the only client boundary at the root; wrapped pages/sections stay
 * server components — they just render inside this provider.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
