import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { IMPACT_HERO } from "@/lib/impact";

export function ImpactHeroSection() {
  return (
    <section className="bg-[#FAFAFA] pb-0 pt-0">
      <Navbar />

      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-16 px-5 py-16 md:flex-row md:items-center md:justify-center md:gap-[120px] md:px-20 md:py-24">
        <div className="flex max-w-[570px] flex-col gap-[30px]">
          <span className="inline-flex w-fit items-center gap-1.5 rounded-2xl border border-[#E9EAEB] bg-[#FAFAFA] px-3 py-1 text-sm font-medium text-[#414651]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#717680]" />
            {IMPACT_HERO.badge}
          </span>

          <div className="flex flex-col gap-4">
            <h1 className="text-[40px] font-semibold leading-[1.15] tracking-[-0.02em] text-[#181D27] md:text-5xl md:leading-[66px]">
              {IMPACT_HERO.title}
            </h1>
            <p className="text-xl leading-[30px] text-[#535862]">
              {IMPACT_HERO.description}
            </p>
          </div>
        </div>

        <div className="relative w-full max-w-[491px] shrink-0">
          <div className="absolute bottom-0 right-0 h-[433px] w-[calc(100%-21px)] rounded-lg bg-[#FB6514]" />
          <div className="relative ml-0 mt-5 overflow-hidden rounded-md border-[3px] border-[#FB6514]">
            <Image
              src={IMPACT_HERO.image}
              alt="Young chess champion holding a trophy"
              width={475}
              height={438}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
