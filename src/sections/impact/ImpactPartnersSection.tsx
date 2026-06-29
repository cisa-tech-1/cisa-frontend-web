import Link from "next/link";
import { IMPACT_PARTNERS } from "@/lib/impact";

export function ImpactPartnersSection() {
  return (
    <section className="bg-white py-16 md:px-20 md:py-16">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-12 px-5 lg:flex-row lg:items-start lg:gap-[120px]">
        <div className="w-full max-w-[329px] shrink-0">
          <h2 className="font-[family-name:var(--font-bricolage)] text-[30px] font-semibold leading-[38px] text-black">
            Brands We Have Made an Impact With
          </h2>
          <p className="mt-4 text-lg leading-7 text-[#535862]">
            Proudly supported by these organizations.
          </p>
          <Link
            href="/partners"
            className="mt-4 inline-flex h-[52px] items-center justify-center rounded-lg bg-teal-500 px-[18px] text-lg font-semibold text-white shadow-xs"
          >
            Join our partners
          </Link>
        </div>

        <div className="relative flex-1 overflow-hidden">
          <div className="grid grid-cols-2 gap-y-16 sm:grid-cols-3 md:grid-cols-5">
            {IMPACT_PARTNERS.map((partner) => (
              <div
                key={partner}
                className="flex h-8 items-center justify-center px-2"
              >
                <span className="text-center text-sm font-semibold text-[#7C7C7C]">
                  {partner}
                </span>
              </div>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent" />
        </div>
      </div>
    </section>
  );
}
