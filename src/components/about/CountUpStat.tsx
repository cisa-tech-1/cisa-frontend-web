"use client";

import { useEffect, useRef, useState } from "react";

type CountUpStatProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
};

function formatValue(current: number, value: number, prefix = "", suffix = "") {
  const display = Math.round(current);
  if (prefix === "$" && suffix === "K") {
    return `$${display}K`;
  }
  return `${prefix}${display.toLocaleString()}${suffix}`;
}

export function CountUpStat({ value, prefix = "", suffix = "", duration = 1800 }: CountUpStatProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
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
  }, []);

  useEffect(() => {
    if (!started) return;

    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(value * eased);
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [started, value, duration]);

  return (
    <span ref={ref} className="font-[family-name:var(--font-bricolage)] text-[48px] font-semibold leading-[72px] tracking-[-0.02em] text-teal-500 md:text-[60px]">
      {formatValue(display, value, prefix, suffix)}
    </span>
  );
}
