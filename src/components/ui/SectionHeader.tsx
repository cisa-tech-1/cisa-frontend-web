import { type ReactNode } from "react";
import { Badge } from "./Badge";

type SectionHeaderProps = {
  badge?: string;
  badgeVariant?: "orange" | "yellow" | "peach" | "teal";
  badgeIcon?: ReactNode;
  heading: ReactNode;
  description?: string;
  align?: "center" | "left";
  className?: string;
  headingClassName?: string;
};

export function SectionHeader({
  badge,
  badgeVariant = "peach",
  badgeIcon,
  heading,
  description,
  align = "center",
  className = "",
  headingClassName = "",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={`flex flex-col gap-5 ${alignClass} ${className}`}>
      {badge && (
        <Badge variant={badgeVariant} icon={badgeIcon}>
          {badge}
        </Badge>
      )}
      <div className={`flex flex-col gap-5 ${alignClass}`}>
        <h2
          className={`font-extrabold text-[#282828] ${headingClassName || "text-[28px] leading-tight md:text-[45px] md:leading-[55px]"}`}
        >
          {heading}
        </h2>
        {description && (
          <p className="max-w-3xl text-lg font-medium text-[#5A5A5A] md:text-xl md:leading-8">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
