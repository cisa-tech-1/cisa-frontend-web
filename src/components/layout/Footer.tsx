import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  FOOTER_LINKS,
  SOCIAL_LINKS,
} from "@/lib/constants";

/** Footer paired with the newsletter banner overlap (landing, about, programs). */
export function Footer() {
  return (
    <footer className="relative bg-footer-bg text-[#A4A7AE]">
      <div className="absolute inset-x-0 -top-24 h-48 overflow-hidden opacity-30">
        <div className="h-full w-full bg-gradient-to-b from-transparent to-footer-bg" />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-5 py-16 md:px-8">
        <div className="flex flex-col gap-11">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <nav className="flex flex-wrap items-center gap-8">
              {FOOTER_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-[family-name:var(--font-bricolage)] text-base font-semibold text-[#A4A7AE] transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-6">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#717680] transition-colors hover:text-white"
                  aria-label={social.label}
                >
                  <NewsletterSocialIcon name={social.label} />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-start justify-between gap-8 border-t border-white/10 pt-11 md:flex-row md:items-center">
            <div className="flex items-center gap-4">
              <Image
                src="/images/logo-white.svg"
                alt="Chess in Slums Africa"
                width={89}
                height={51}
                className="rounded-full border border-[#F5F5F5]"
              />
              <p className="max-w-md text-base leading-6 text-[#A4A7AE]">
                Chess in Slums Africa is a non-profit using chess and education to transform
                the lives of children in underserved communities.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-8">
              <NewsletterRatingBadge title="Top Rated" subtitle="Non-profit" />
              <NewsletterRatingBadge title="5-Star" subtitle="Charity Navigator" />
              <NewsletterRatingBadge title="Award" subtitle="Excellence 2024" />
            </div>
          </div>

          <div className="flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-sm md:flex-row md:items-center">
            <p>© {new Date().getFullYear()} Chess in Slums Africa. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="/terms" className="hover:text-white">
                Terms
              </Link>
              <Link href="/privacy" className="hover:text-white">
                Privacy
              </Link>
              <Link href="/cookies" className="hover:text-white">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function NewsletterRatingBadge({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="flex items-center">
      <NewsletterWreath side="left" />
      <div className="flex flex-col items-center px-1">
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg key={i} width="13" height="13" viewBox="0 0 12 12" fill="#FDB022" aria-hidden>
              <path d="M6 0l1.5 4.5H12L8.25 7.5l1.5 4.5L6 9.75 2.25 12l1.5-4.5L0 4.5h4.5z" />
            </svg>
          ))}
        </div>
        <p className="font-[family-name:var(--font-bricolage)] text-[11px] font-semibold text-white">
          {title}
        </p>
        <p className="text-[10px] font-medium text-[#A4A7AE]">{subtitle}</p>
      </div>
      <NewsletterWreath side="right" />
    </div>
  );
}

function NewsletterWreath({ side }: { side: "left" | "right" }) {
  return (
    <svg
      width="29"
      height="64"
      viewBox="0 0 29 64"
      fill="white"
      className={side === "right" ? "scale-x-[-1]" : ""}
      aria-hidden
    >
      <path d="M14.5 0C6.5 16 0 32 0 48c0 8 6.5 16 14.5 16S29 56 29 48C29 32 22.5 16 14.5 0z" />
    </svg>
  );
}

function NewsletterSocialIcon({ name }: { name: string }) {
  const icons: Record<string, ReactNode> = {
    Instagram: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" fill="none" strokeWidth="2" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" fill="none" strokeWidth="2" />
      </svg>
    ),
    Twitter: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    LinkedIn: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.127 0 2.063 2.063 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
      </svg>
    ),
    Facebook: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    YouTube: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  };

  return icons[name] ?? <span className="size-6 rounded-full bg-current" />;
}
