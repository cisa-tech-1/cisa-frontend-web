import Image from "next/image";
import { PageContainer } from "@/components/layout/PageContainer";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/motion/Reveal";
import { LocationPins } from "@/components/landing/LocationPins";

export function GlobalReachSection() {
  return (
    <section className="bg-background py-12 md:py-16">
      <PageContainer>
        <Reveal>
          <SectionHeader
            badge="OUR REACH"
            badgeVariant="peach"
            heading="Social intervention across the world"
            className="mb-8 gap-5"
            headingClassName="font-[family-name:var(--font-manrope)] text-[28px] font-extrabold leading-[55px] text-black"
          />
        </Reveal>

        <Reveal className="relative h-[341px] overflow-hidden rounded-xl bg-[#E8E4DC]">
          <Image
            src="/images/impact/world-map.svg"
            alt="Map showing Chess in Slums Africa program locations"
            fill
            className="object-cover"
            sizes="1212px"
          />
          <div className="absolute inset-0 bg-black/25" />
          <LocationPins />
        </Reveal>
      </PageContainer>
    </section>
  );
}
