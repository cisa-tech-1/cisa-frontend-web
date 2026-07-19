"use client";

import Link from "next/link";
import { m } from "motion/react";
import type { CSSProperties, ReactNode } from "react";
import { DURATION, EASE_OUT } from "@/lib/motion";
import { BUTTON_SKEUOMORPHIC_SHADOW } from "./buttonStyles";

const MotionLink = m.create(Link);

// Grows slightly on hover, dips on press, springs back on release. Named
// variants let the active state ("hover"/"tap") propagate to the icon below.
// All suppressed for users who prefer reduced motion via the app MotionConfig.
const motionProps = {
  initial: "rest",
  whileHover: "hover",
  whileTap: "tap",
  variants: {
    rest: { scale: 1 },
    hover: { scale: 1.03 },
    tap: { scale: 0.96 },
  },
  transition: { duration: DURATION.fast, ease: EASE_OUT },
} as const;

type ButtonVariant = "primary" | "outline" | "secondary" | "custom";
type ButtonSize = "sm" | "md" | "lg";
type ButtonFont = "jost" | "bricolage" | "manrope";

const variantStyles: Record<Exclude<ButtonVariant, "custom">, string> = {
  primary: `bg-[#15B79E] text-white hover:bg-[#129e8a] border border-transparent ${BUTTON_SKEUOMORPHIC_SHADOW}`,
  outline: "border border-[#D5D7DA] bg-transparent text-[#414651] hover:bg-[#FAFAFA]",
  secondary: `bg-[#1163FC] text-white hover:bg-[#0f56d9] border border-transparent ${BUTTON_SKEUOMORPHIC_SHADOW}`,
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-10 px-3.5 text-base rounded-lg gap-1",
  md: "h-12 px-3.5 text-lg rounded-lg gap-1",
  lg: "h-[60px] px-[22px] text-base rounded-[10px] gap-2",
};

const fontStyles: Record<ButtonFont, string> = {
  jost: "font-[family-name:var(--font-jost)] font-semibold",
  bricolage: "font-[family-name:var(--font-bricolage)] font-semibold",
  manrope: "font-[family-name:var(--font-manrope)] font-semibold",
};

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  font?: ButtonFont;
  href?: string;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
  style?: CSSProperties;
  type?: "button" | "submit";
  onClick?: () => void;
  target?: string;
  rel?: string;
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  font = "jost",
  href,
  icon,
  iconPosition = "right",
  className = "",
  style,
  type = "button",
  onClick,
  target,
  rel,
}: ButtonProps) {
  const variantClass =
    variant === "custom" ? BUTTON_SKEUOMORPHIC_SHADOW : variantStyles[variant];
  const classes = `inline-flex items-center justify-center transition-colors ${fontStyles[font]} ${sizeStyles[size]} ${variantClass} ${className}`;

  // Slides the icon toward its edge while the button is hovered. The active
  // parent state ("hover") propagates to this child automatically.
  const iconVariants = {
    rest: { x: 0 },
    hover: {
      x: iconPosition === "right" ? 3 : -3,
      transition: { duration: DURATION.fast, ease: EASE_OUT },
    },
  };

  const iconEl = icon ? (
    <m.span variants={iconVariants} className="inline-flex">
      {icon}
    </m.span>
  ) : null;

  const content = (
    <>
      {iconPosition === "left" ? iconEl : null}
      {children}
      {iconPosition === "right" ? iconEl : null}
    </>
  );

  if (href) {
    return (
      <MotionLink
        {...motionProps}
        href={href}
        className={classes}
        style={style}
        target={target}
        rel={rel}
      >
        {content}
      </MotionLink>
    );
  }

  return (
    <m.button {...motionProps} type={type} onClick={onClick} className={classes} style={style}>
      {content}
    </m.button>
  );
}
