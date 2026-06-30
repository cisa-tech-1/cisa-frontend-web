"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { PageContainer } from "@/components/layout/PageContainer";
import { Button } from "@/components/ui/Button";
import { PROGRAMS_NAV_LINKS } from "@/lib/programs";

const DONATE_HEART_ICON = (
  <Image src="/images/svg/heart.svg" alt="" width={16} height={14} aria-hidden />
);

type ProgramsNavbarProps = {
  className?: string;
  variant?: "default" | "hero";
};

export function ProgramsNavbar({
  className,
  variant = "default",
}: ProgramsNavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isHero = variant === "hero";

  const headerClass = isHero
    ? `absolute inset-x-0 top-0 z-50 border-b border-transparent ${className ?? ""}`
    : `relative border-b border-transparent ${className ?? "bg-[#FCFCFC]"}`;

  const linkClass = isHero
    ? "font-[family-name:var(--font-manrope)] text-base font-semibold leading-6 text-white transition-opacity hover:opacity-80"
    : "font-[family-name:var(--font-manrope)] text-base font-semibold leading-6 text-[#282828] transition-opacity hover:opacity-80";

  const burgerClass = isHero ? "bg-white" : "bg-[#282828]";

  return (
    <header className={headerClass}>
      <PageContainer className="flex items-center justify-between py-7 lg:pr-[360px]">
        <Link href="/" className="shrink-0">
          <Image
            src={isHero ? "/images/logos/white-logo.png" : "/images/logos/main-logo.png"}
            alt="Chess in Slums Africa"
            width={96}
            height={42}
            priority
          />
        </Link>

        <nav className="hidden items-center gap-5 lg:flex">
          {PROGRAMS_NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className={linkClass}>
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="flex flex-col gap-1.5 lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 ${burgerClass} transition ${mobileOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 ${burgerClass} transition ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 ${burgerClass} transition ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </PageContainer>

      {mobileOpen && (
        <div
          className={`px-[20px] py-6 lg:hidden ${
            isHero
              ? "border-t border-white/10 bg-black/90 backdrop-blur-md"
              : "border-t border-[#E9EAEB] bg-white"
          }`}
        >
          <nav className="flex flex-col gap-4">
            {PROGRAMS_NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={linkClass}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-3">
              <Button
                href="/partner"
                variant="custom"
                size="sm"
                font="jost"
                className="font-bold text-white"
                style={{ backgroundColor: "#F87C22", color: "#FFFFFF" }}
              >
                Become a Partner
              </Button>
              <Button
                href="/donate"
                variant="primary"
                size="sm"
                font="jost"
                className="font-bold text-white"
                icon={DONATE_HEART_ICON}
              >
                Donate
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
