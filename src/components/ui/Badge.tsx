import { type ReactNode } from "react";

type BadgeVariant = "orange" | "yellow" | "peach" | "teal" | "pill";

const variantStyles: Record<BadgeVariant, string> = {
  orange: "bg-[#FFAD5F] text-black",
  yellow: "bg-[#FFDF5E] text-[#333356]",
  peach: "bg-[#FFBE80] text-[#333356]",
  teal: "bg-[#B2E9E0] text-[#333356]",
  pill: "bg-[#FAFAFA] border border-[#E9EAEB] text-[#414651]",
};

type BadgeProps = {
  children: ReactNode;
  variant?: BadgeVariant;
  icon?: ReactNode;
  className?: string;
};

export function Badge({
  children,
  variant = "yellow",
  icon,
  className = "",
}: BadgeProps) {
  const isPill = variant === "pill";

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-[10px] px-2.5 py-1 text-sm font-bold tracking-wide shadow-xs ${
        isPill ? "rounded-2xl font-medium" : ""
      } ${variantStyles[variant]} ${className}`}
    >
      {icon}
      {children}
    </span>
  );
}

type AnnouncementBadgeProps = {
  tag: string;
  message: string;
  href?: string;
};

export function AnnouncementBadge({ tag, message, href = "#" }: AnnouncementBadgeProps) {
  return (
    <div className="inline-flex items-center gap-3 rounded-[10px] border border-[#D5D7DA] bg-white px-2.5 py-1 shadow-xs">
      <span className="inline-flex items-center gap-1.5 rounded-md bg-[#FFAD5F] px-2 py-0.5 text-sm font-bold text-black shadow-xs">
        <span className="size-1.5 rounded-full border-2 border-[#F5F5F5] bg-[#FFAD5F]" />
        {tag}
      </span>
      <a href={href} className="flex items-center gap-1 text-sm font-medium text-[#414651]">
        {message}
        <ArrowRightIcon className="size-4 text-[#717680]" />
      </a>
    </div>
  );
}

export function ArrowRightIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
    >
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
