import Image from "next/image";
import { PageContainer } from "@/components/layout/PageContainer";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { LANDING_BRAND_LOGOS, LANDING_MEDIA_LOGOS } from "@/lib/landing";

export function PartnersSection() {
  return (
    <section className="bg-background py-12 md:py-16">
      <PageContainer>
        <SectionHeader
          heading="Brands We Have Made an Impact With"
          description="Here is how you can get involved and make a change"
          className="mb-8"
          headingClassName="font-[family-name:var(--font-manrope)] text-[32px] font-extrabold leading-[60px] tracking-[-0.02em] text-[#282828] md:text-[45px]"
        />

        <div className="grid grid-cols-2 border border-[#E6E6E6] sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {LANDING_BRAND_LOGOS.map((partner, i) => (
            <div
              key={partner.alt}
              className={`flex h-[146px] items-center justify-center border-b border-r border-[#E6E6E6] p-6 ${
                i % 2 === 0 ? "bg-[#FCFCFC]" : "bg-[#FFFCF5]"
              }`}
            >
              <Image
                src={partner.src}
                alt={partner.alt}
                width={120}
                height={48}
                className="max-h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>

        <div className="relative mx-auto mt-10 max-w-[1200px]">
          <Badge variant="teal" className="absolute -top-5 left-1/2 z-10 -translate-x-1/2">
            IN THE NEWS
          </Badge>
          <div className="flex flex-wrap items-center justify-center gap-10 rounded-[20px] border border-[#15B79E] bg-[#F0FDF9] px-8 py-10">
            {LANDING_MEDIA_LOGOS.map((media) => (
              <Image
                key={media.alt}
                src={media.src}
                alt={media.alt}
                width={100}
                height={40}
                className="h-8 w-auto object-contain opacity-80"
              />
            ))}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
