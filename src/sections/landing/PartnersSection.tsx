import Image from "next/image";
import { PageContainer } from "@/components/layout/PageContainer";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { Marquee } from "@/components/motion/Marquee";
import { LANDING_BRAND_LOGOS, LANDING_MEDIA_LOGOS } from "@/lib/landing";

export function PartnersSection() {
  return (
    <section className="bg-background py-12 md:py-16">
      <PageContainer>
        <Reveal>
          <SectionHeader
            heading="Brands We Have Made an Impact With"
            description="Here is how you can get involved and make a change"
            className="mb-8"
            headingClassName="font-[family-name:var(--font-manrope)] text-[32px] font-extrabold leading-[60px] tracking-[-0.02em] text-[#282828] md:text-[45px]"
          />
        </Reveal>

        <Stagger className="grid grid-cols-2 border border-[#E6E6E6] sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {LANDING_BRAND_LOGOS.map((partner, i) => (
            <StaggerItem
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
                className="max-h-12 w-auto object-contain opacity-80 transition duration-300 hover:scale-105 hover:opacity-100"
              />
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal className="relative mx-auto mt-10 max-w-[1200px]">
          <Badge variant="teal" className="absolute -top-5 left-1/2 z-10 -translate-x-1/2">
            IN THE NEWS
          </Badge>
          <div className="overflow-hidden rounded-[20px] border border-[#15B79E] bg-[#F0FDF9] px-8 py-10">
            <Marquee gap={40}>
              {LANDING_MEDIA_LOGOS.map((media) => (
                <Image
                  key={media.alt}
                  src={media.src}
                  alt={media.alt}
                  width={100}
                  height={40}
                  className="h-8 w-auto shrink-0 object-contain opacity-80"
                />
              ))}
            </Marquee>
          </div>
        </Reveal>
      </PageContainer>
    </section>
  );
}
