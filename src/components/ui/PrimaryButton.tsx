import Link from "next/link";
import { type ReactNode } from "react";
import { ArrowRightIcon } from "./Badge";
import { Button } from "./Button";

type ButtonVariant = "teal" | "orange";
type ButtonSize = "sm" | "md" | "lg";

const variantMap: Record<ButtonVariant, "primary" | "custom"> = {
  teal: "primary",
  orange: "custom",
};

const orangeStyle = { backgroundColor: "#F87C22" };

type PrimaryButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  icon?: ReactNode;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
};

export function PrimaryButton({
  children,
  variant = "teal",
  size = "lg",
  href,
  icon,
  className = "",
  type = "button",
  onClick,
}: PrimaryButtonProps) {
  return (
    <Button
      variant={variantMap[variant]}
      size={size}
      font="jost"
      href={href}
      icon={icon}
      className={className}
      style={variant === "orange" ? orangeStyle : undefined}
      type={type}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}

export function TextLink({
  children,
  href = "#",
  className = "",
}: {
  children: ReactNode;
  href?: string;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-1.5 font-[family-name:var(--font-jost)] text-xl font-semibold text-[#414651] transition-colors hover:text-teal-500 ${className}`}
    >
      {children}
      <ArrowRightIcon />
    </Link>
  );
}
