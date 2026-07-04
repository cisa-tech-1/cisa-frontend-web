"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";

type CountUpProps = {
  /** Raw stat string, e.g. "36,000+" or "1 Innovation Hub". */
  value: string;
  /** Count-up duration in ms. */
  duration?: number;
};

// Only pure numeric stats (optionally comma-grouped, optional trailing "+")
// animate. Anything with words ("1 Innovation Hub") renders static.
const NUMERIC = /^([\d,]+)(\+?)$/;

/**
 * Counts a numeric stat string up from zero the first time it scrolls into
 * view, preserving comma grouping and a trailing "+". Non-numeric values pass
 * through unchanged. Honors `prefers-reduced-motion` (shows the final value).
 */
export function CountUp({ value, duration = 1800 }: CountUpProps) {
  const match = value.match(NUMERIC);
  const target = match ? Number(match[1].replace(/,/g, "")) : 0;
  const suffix = match ? match[2] : "";

  const ref = useRef<HTMLSpanElement>(null);
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!match || reduce) return;
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [match, reduce]);

  useEffect(() => {
    if (!started) return;

    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(target * eased);
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [started, target, duration]);

  // Non-numeric, or reduced motion: render the value as-is.
  if (!match || reduce) return <>{value}</>;

  return (
    <span ref={ref}>
      {Math.round(display).toLocaleString()}
      {suffix}
    </span>
  );
}
