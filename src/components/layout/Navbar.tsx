"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV_LINKS } from "@/lib/constants";
import { PrimaryButton } from "@/components/ui/PrimaryButton";

type NavbarVariant = "hero" | "default";

type NavbarProps = {
  variant?: NavbarVariant;
};

const DONATE_HEART_ICON = (
  <svg width="16" height="14" viewBox="0 0 16 14" fill="none" aria-hidden>
    <path
      d="M8 12.5S1 8.5 1 4.5a3.5 3.5 0 016 2 3.5 3.5 0 016-2 3.5 3.5 0 010 8S8 12.5 8 12.5z"
      fill="#FFFEFD"
    />
  </svg>
);

export function Navbar({ variant }: NavbarProps) {
  const pathname = usePathname();
  const resolvedVariant: NavbarVariant = variant ?? (pathname === "/" ? "hero" : "default");
  const isHero = resolvedVariant === "hero";

  const [mobileOpen, setMobileOpen] = useState(false);

  const textColor = isHero ? "text-white" : "text-[#282828]";
  const burgerColor = isHero ? "bg-white" : "bg-[#282828]";
  const logo = isHero ? "/images/logo-white.svg" : "/images/logo-black.svg";
  const positionClass = isHero ? "absolute" : "relative border-b border-[#E9EAEB] bg-background";

  return (
    <header className={`inset-x-0 top-0 z-50 ${positionClass}`}>
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 py-7 md:px-20">
        <Link href="/" className="relative z-10 shrink-0">
          <Image
            src={logo}
            alt="Chess in Slums Africa"
            width={96}
            height={43}
            priority
            className="h-11 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-5 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-semibold transition-opacity hover:opacity-80 ${textColor} ${
                pathname === link.href ? "opacity-100 underline decoration-2 underline-offset-4" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          {isHero ? (
            <>
              <PrimaryButton variant="orange" size="sm" href="/mentor">
                Become a Mentor
              </PrimaryButton>
              <PrimaryButton variant="teal" size="sm" href="/donate">
                Donate
              </PrimaryButton>
            </>
          ) : (
            <>
              <PrimaryButton variant="teal" size="sm" href="/about">
                Read our story
              </PrimaryButton>
              <PrimaryButton variant="orange" size="sm" href="/donate" icon={DONATE_HEART_ICON}>
                Donate
              </PrimaryButton>
            </>
          )}
        </div>

        <button
          type="button"
          className="relative z-10 flex flex-col gap-1.5 lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 transition ${burgerColor} ${mobileOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 transition ${burgerColor} ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 transition ${burgerColor} ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {mobileOpen && (
        <div
          className={`absolute inset-x-0 top-full px-5 py-6 backdrop-blur-md lg:hidden ${
            isHero ? "border-t border-white/10 bg-black/90" : "border-t border-[#E9EAEB] bg-white"
          }`}
        >
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-semibold ${textColor}`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-3">
              {isHero ? (
                <>
                  <PrimaryButton variant="orange" size="sm" href="/mentor">
                    Become a Mentor
                  </PrimaryButton>
                  <PrimaryButton variant="teal" size="sm" href="/donate">
                    Donate
                  </PrimaryButton>
                </>
              ) : (
                <>
                  <PrimaryButton variant="teal" size="sm" href="/about">
                    Read our story
                  </PrimaryButton>
                  <PrimaryButton variant="orange" size="sm" href="/donate">
                    Donate
                  </PrimaryButton>
                </>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
