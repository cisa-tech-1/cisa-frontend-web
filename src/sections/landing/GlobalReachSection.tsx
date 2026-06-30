import Image from "next/image";
import { PageContainer } from "@/components/layout/PageContainer";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { LANDING_GLOBAL_LOCATIONS } from "@/lib/landing";

export function GlobalReachSection() {
  return (
    <section className="bg-background py-12 md:py-16">
      <PageContainer>
        <SectionHeader
          badge="OUR REACH"
          badgeVariant="peach"
          heading="Social intervention across the world"
          className="mb-8 gap-5"
          headingClassName="font-[family-name:var(--font-manrope)] text-[28px] font-extrabold leading-[55px] text-black"
        />

        <div className="relative h-[341px] overflow-hidden rounded-xl bg-[#E8E4DC]">
          <Image
            src="/images/impact/world-map.svg"
            alt="Map showing Chess in Slums Africa program locations"
            fill
            className="object-cover"
            sizes="1212px"
          />
          <div className="absolute inset-0 bg-black/25" />
          {LANDING_GLOBAL_LOCATIONS.map((loc) => (
            <div
              key={loc.name}
              className="absolute flex flex-col items-center gap-[3px]"
              style={{ top: loc.top, left: loc.left, transform: "translate(-50%, -50%)" }}
            >
              <span className="size-[11px] rounded-full bg-[#9CCC65]/80" aria-hidden />
              <span className="max-w-[94px] text-center font-[family-name:var(--font-bricolage)] text-[13px] font-bold leading-4 text-white">
                {loc.name}
              </span>
            </div>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
