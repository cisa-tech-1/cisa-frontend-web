"use client";

import { m } from "motion/react";
import type { ElementType, ReactNode } from "react";
import { staggerContainer, staggerItem, VIEWPORT } from "@/lib/motion";

type StaggerProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
};

/**
 * Container that cascades its `StaggerItem` children into view. Put the list/
 * grid layout classes on this element; each direct child should be wrapped in
 * a `StaggerItem`.
 */
export function Stagger({ children, as = "div", className }: StaggerProps) {
  const Component = m[as as keyof typeof m] as typeof m.div;

  return (
    <Component
      className={className}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
    >
      {children}
    </Component>
  );
}

/**
 * A single cascading child. Its entrance timing is driven by the parent
 * `Stagger`, so no viewport/initial props are needed here.
 */
export function StaggerItem({ children, as = "div", className }: StaggerProps) {
  const Component = m[as as keyof typeof m] as typeof m.div;

  return (
    <Component className={className} variants={staggerItem}>
      {children}
    </Component>
  );
}
