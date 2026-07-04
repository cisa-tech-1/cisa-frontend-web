"use client";

import {
  m,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef, type ReactNode } from "react";

type ParallaxProps = {
  children: ReactNode;
  /**
   * Total vertical travel in px across the element's scroll through the
   * viewport. Negative moves up as you scroll down. Keep small for accents.
   */
  offset?: number;
  className?: string;
};

/**
 * Translates decorative art vertically as it scrolls through the viewport.
 * Best on absolutely-positioned accent images. Disabled (renders static) when
 * the user prefers reduced motion.
 */
export function Parallax({ children, offset = -40, className }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, offset]);

  return (
    <m.div ref={ref} className={className} style={reduce ? undefined : { y }}>
      {children}
    </m.div>
  );
}
