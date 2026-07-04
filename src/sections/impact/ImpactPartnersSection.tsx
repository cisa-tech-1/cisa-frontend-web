import Image from "next/image";
import Link from "next/link";
import { PageContainer } from "@/components/layout/PageContainer";
import { Reveal } from "@/components/motion/Reveal";
import { PARTNER_LOGOS } from "@/lib/impact";

const GRID_SLOTS = 10;

export function ImpactPartnersSection() {
  return (
    <section className="bg-white py-16">
      <PageContainer className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-[120px]">
        <Reveal className="w-full max-w-[329px] shrink-0">
          <h2 className="font-[family-name:var(--font-bricolage)] text-[30px] font-semibold leading-[38px] text-black">
            Brands We Have Made an Impact With
          </h2>
          <p className="mt-4 text-lg leading-7 text-[#535862]">
            Proudly supported by these organizations.
          </p>
          <Link
            href="/partner"
            className="mt-6 inline-flex h-[52px] items-center justify-center rounded-lg bg-teal-500 px-[18px] text-lg font-semibold text-white shadow-xs"
          >
            Join our partners
          </Link>
        </Reveal>

        <Reveal
          delay={0.12}
          className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-5 md:gap-y-12"
        >
          {Array.from({ length: GRID_SLOTS }).map((_, index) => {
            const logo = PARTNER_LOGOS[index % PARTNER_LOGOS.length];
            return (
              <div key={index} className="flex h-10 items-center justify-center px-2">
                <Image
                  src={logo}
                  alt="Partner logo"
                  width={120}
                  height={40}
                  className="h-8 w-auto max-w-[120px] object-contain grayscale"
                />
              </div>
            );
          })}
        </Reveal>
      </PageContainer>
    </section>
  );
}
