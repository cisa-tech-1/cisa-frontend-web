import { type ReactNode } from "react";

export function SectionBadge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex w-fit items-center gap-1.5 rounded-2xl border border-[#E9EAEB] bg-[#FAFAFA] px-3 py-1 text-sm font-medium text-[#414651]">
      <span className="size-1.5 rounded-full bg-[#717680]" />
      {children}
    </span>
  );
}

type SectionIntroProps = {
  badge: string;
  heading: string;
  description?: string;
  dark?: boolean;
  centered?: boolean;
  headingFont?: "bricolage" | "manrope";
  headingClassName?: string;
};

export function SectionIntro({
  badge,
  heading,
  description,
  dark = false,
  centered = false,
  headingFont = "bricolage",
  headingClassName = "",
}: SectionIntroProps) {
  const headingStyles =
    headingFont === "manrope"
      ? "font-[family-name:var(--font-manrope)] text-[36px] font-bold leading-[44px] tracking-[-0.02em]"
      : "font-[family-name:var(--font-bricolage)] text-4xl font-semibold leading-[44px] tracking-[-0.02em]";

  const headingColor = dark ? "text-white" : "text-[#0A0D12]";

  if (centered) {
    return (
      <div className="mx-auto flex w-full max-w-[854px] flex-col items-center gap-3 text-center">
        <SectionBadge>{badge}</SectionBadge>
        <h2 className={`${headingStyles} ${headingColor} ${headingClassName}`}>{heading}</h2>
        {description && (
          <p
            className={`max-w-[768px] text-xl font-medium leading-[30px] ${
              dark ? "text-[#F5F5F5]" : "text-[#717680]"
            }`}
          >
            {description}
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
      <div className="flex max-w-[612px] flex-col gap-3">
        <SectionBadge>{badge}</SectionBadge>
        <h2 className={`${headingStyles} ${headingColor} ${headingClassName}`}>{heading}</h2>
      </div>
      {description && (
        <p
          className={`max-w-[548px] text-xl font-medium leading-[30px] ${
            dark ? "text-[#F5F5F5]" : "text-[#717680]"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
