"use client";

import { m } from "motion/react";
import type { ElementType, ReactNode } from "react";
import { DURATION, EASE_OUT } from "@/lib/motion";

type HoverCardProps = {
  children: ReactNode;
  /** Element to render, defaults to "article" to match card markup. */
  as?: ElementType;
  /** Upward lift distance in px on hover. */
  lift?: number;
  className?: string;
};

/**
 * Lifts its children on hover and dips slightly on tap. Drop-in replacement
 * for the CSS `transition-transform` cards used across the site.
 */
export function HoverCard({
  children,
  as = "article",
  lift = 4,
  className,
}: HoverCardProps) {
  const Component = m[as as keyof typeof m] as typeof m.article;

  return (
    <Component
      className={className}
      whileHover={{ y: -lift }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: DURATION.fast, ease: EASE_OUT }}
    >
      {children}
    </Component>
  );
}
