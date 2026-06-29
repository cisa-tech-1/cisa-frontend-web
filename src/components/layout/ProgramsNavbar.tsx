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

export function ProgramsNavbar({ className = "bg-[#FCFCFC]" }: { className?: string }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className={`relative border-b border-transparent ${className}`}>
      <PageContainer className="flex items-center justify-between py-7 lg:pr-[360px]">
        <Link href="/" className="shrink-0">
          <Image
            src="/images/logos/main-logo.png"
            alt="Chess in Slums Africa"
            width={96}
            height={42}
            priority
          />
        </Link>

        <nav className="hidden items-center gap-5 lg:flex">
          {PROGRAMS_NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-[family-name:var(--font-manrope)] text-base font-semibold leading-6 text-[#282828] transition-opacity hover:opacity-80"
            >
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
            className={`block h-0.5 w-6 bg-[#282828] transition ${mobileOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-[#282828] transition ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-[#282828] transition ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </PageContainer>

      {mobileOpen && (
        <div className="border-t border-[#E9EAEB] bg-white px-[20px] py-6 lg:hidden">
          <nav className="flex flex-col gap-4">
            {PROGRAMS_NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-[family-name:var(--font-manrope)] text-base font-semibold text-[#282828]"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-3">
              <Button
                href="/get-involved"
                variant="custom"
                size="sm"
                font="jost"
                className="font-bold text-white"
                style={{ backgroundColor: "#F87C22", color: "#FFFFFF" }}
              >
                Be a Game Changer
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
