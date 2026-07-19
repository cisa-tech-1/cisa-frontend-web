import Image from "next/image";
import { PageContainer } from "@/components/layout/PageContainer";
import { ProgramsNavbar } from "@/components/layout/ProgramsNavbar";
import { Reveal } from "@/components/motion/Reveal";
import { IMPACT_HERO } from "@/lib/impact";

export function ImpactHeroSection() {
  return (
    <section className="bg-white">
      <ProgramsNavbar className="bg-[#FAFAF7]" />

      <PageContainer className="flex flex-col items-center gap-12 py-16 md:flex-row md:items-center md:justify-between md:gap-[120px] md:py-24">
        <Reveal className="flex w-full max-w-[570px] flex-col gap-[30px]">
          <div className="flex flex-col gap-1">
            <span className="inline-flex w-fit items-center gap-1.5 rounded-2xl border border-[#E9EAEB] bg-[#FAFAFA] px-3 py-1 text-sm font-medium text-[#414651]">
              <span className="size-1.5 rounded-full bg-[#717680]" />
              {IMPACT_HERO.badge}
            </span>

            <div className="mt-1 flex flex-col gap-[15px]">
              <h1 className="font-[family-name:var(--font-manrope)] text-[40px] font-semibold leading-[1.15] tracking-[-0.02em] text-[#181D27] md:text-[48px] md:leading-[66px]">
                {IMPACT_HERO.title}
              </h1>
              <p className="font-[family-name:var(--font-manrope)] text-xl leading-[30px] text-[#535862]">
                {IMPACT_HERO.description}
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="relative mx-auto w-full max-w-[491px] shrink-0">
          <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-md bg-[#FB6514]" />
          <div className="relative overflow-hidden rounded-md border-[3px] border-[#FB6514]">
            <div className="relative aspect-[475/438] w-full">
              <Image
                src={IMPACT_HERO.image}
                alt="Young chess champion holding a trophy"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 491px"
                priority
              />
            </div>
          </div>
        </Reveal>
      </PageContainer>
    </section>
  );
}
