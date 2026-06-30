import Image from "next/image";
import Link from "next/link";
import {
  SIMPLE_FOOTER_LEGAL_LINKS,
  SIMPLE_FOOTER_LINKS,
  SIMPLE_SOCIAL_LINKS,
} from "@/lib/constants";

const MISSION_COPY =
  "Chess in Slums Africa (CISA) is a non-profit organization dedicated to uplifting children from underserved communities through the strategic use of chess, STEM education, and socio-emotional development.";

export function SimpleFooter() {
  return (
    <footer className="relative isolate min-h-[502px] overflow-hidden bg-[#151414] text-[#A4A7AE]">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <Image
          src="/images/footer.png"
          alt=""
          fill
          priority={false}
          className="origin-center scale-200 translate-y-[40%] object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#151414]/80" />
      </div>

      <div className="relative mx-auto flex min-h-[502px] w-full max-w-[1280px] flex-col justify-end px-[20px] pb-10 pt-48 md:pb-12 md:pt-52">
        <div className="flex flex-col gap-11">
          <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
            <div className="flex max-w-[639px] items-center gap-[15px]">
              <Image
                src="/images/logos/rounded-logo.png"
                alt="Chess in Slums Africa"
                width={89}
                height={51}
                className="shrink-0 rounded-full border border-[#F5F5F5] bg-white py-2 px-3"
              />
              <p className="text-base leading-6 text-[#A4A7AE]">{MISSION_COPY}</p>
            </div>

            <div className="flex flex-wrap items-center gap-8">
              <RatingBadge />
              <RatingBadge />
              <RatingBadge />
            </div>
          </div>

          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <nav className="flex flex-wrap items-center gap-8">
              {SIMPLE_FOOTER_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-[family-name:var(--font-bricolage)] text-base font-semibold leading-6 text-[#A4A7AE] transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-6">
              {SIMPLE_SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-opacity hover:opacity-80"
                  aria-label={social.label}
                >
                  <Image src={social.icon} alt="" width={24} height={24} />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-start justify-between gap-4 text-sm leading-6 md:flex-row md:items-center">
            <p>© {new Date().getFullYear()} Chess In The Slum Africa. All rights reserved.</p>
            <div className="flex items-center gap-[18px]">
              {SIMPLE_FOOTER_LEGAL_LINKS.map((link) => (
                <Link key={link.href} href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function RatingBadge() {
  return (
    <div className="flex items-center">
      <Image
        src="/images/wreath-left.png"
        alt=""
        width={29}
        height={64}
        className="mr-[-3px] shrink-0"
        aria-hidden
      />
      <div className="mx-[-3px] flex w-[114px] flex-col items-center gap-[3px]">
        <div className="flex gap-[1.6px]">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg key={i} width="13" height="13" viewBox="0 0 12 12" fill="#FDB022" aria-hidden>
              <path d="M6 0l1.5 4.5H12L8.25 7.5l1.5 4.5L6 9.75 2.25 12l1.5-4.5L0 4.5h4.5z" />
            </svg>
          ))}
        </div>
        <p className="text-center font-[family-name:var(--font-bricolage)] text-[11.2px] font-semibold leading-4 text-white">
          Best Chess Academy
        </p>
        <p className="text-center font-[family-name:var(--font-manrope)] text-[9.6px] font-medium leading-[14px] text-[#A4A7AE]">
          2,000+ reviews
        </p>
      </div>
      <Image
        src="/images/wreath-right.png"
        alt=""
        width={29}
        height={64}
        className="ml-[-3px] shrink-0"
        aria-hidden
      />
    </div>
  );
}
