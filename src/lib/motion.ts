import type { Variants } from "motion/react";

/**
 * Shared motion tokens. Tune easing/timing here so every animation across the
 * site stays consistent. Consumed by the primitives in `@/components/motion`.
 */

// Gentle ease-out curve used for entrances and hover lifts.
export const EASE_OUT = [0.22, 1, 0.36, 1] as const;

export const DURATION = {
  fast: 0.35,
  base: 0.6,
  slow: 0.8,
} as const;

// Default distance (px) content travels upward as it fades in.
export const REVEAL_Y = 24;

// Fade + rise, used as the workhorse entrance variant.
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: REVEAL_Y },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.base, ease: EASE_OUT },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: DURATION.base, ease: EASE_OUT },
  },
};

// Pop from small to full size. Used for accents like map pins.
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: DURATION.base, ease: EASE_OUT },
  },
};

// Parent container that cascades its children's entrances.
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

// Child variant that pairs with `staggerContainer`.
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: REVEAL_Y },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.base, ease: EASE_OUT },
  },
};

// Shared viewport config: animate once, when ~25% is on screen.
export const VIEWPORT = { once: true, amount: 0.25 } as const;
