import Image from "next/image";
import { PageContainer } from "@/components/layout/PageContainer";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PaginationDots } from "@/components/ui/PaginationDots";
import { LANDING_TESTIMONIAL } from "@/lib/landing";

export function TestimonialsSection() {
  return (
    <section className="bg-background py-20 md:py-28">
      <PageContainer className="max-w-[885px]">
        <SectionHeader
          heading={
            <span className="flex items-center justify-center gap-[15px] font-[family-name:var(--font-manrope)] text-[32px] font-extrabold leading-[60px] tracking-[-0.02em] text-[#282828] md:text-[45px]">
              Our Wall of Love
              <span aria-hidden>❤️</span>
            </span>
          }
          description="Sponsors and supporters share their love of helping children"
          className="mb-12"
        />

        <div className="relative flex flex-col items-center justify-center gap-8 md:flex-row md:items-center md:gap-[175px]">
          <div
            className="hidden h-[336px] w-[323px] rotate-[-5.84deg] overflow-hidden rounded-xl border-[5px] border-[#FEBCA6] md:block md:shrink-0"
            aria-hidden
          >
            <div className="relative h-full w-full">
              <Image
                src="/images/home/children/fawaz.jpg"
                alt=""
                fill
                className="object-cover"
                sizes="323px"
              />
            </div>
          </div>

          <article className="relative z-10 flex w-full max-w-[402px] flex-col items-center gap-[26px] rounded-lg bg-[#28292C] px-7 py-14 text-center">
            <div className="relative size-[95px] overflow-hidden rounded-full">
              <Image
                src={LANDING_TESTIMONIAL.avatar}
                alt={LANDING_TESTIMONIAL.name}
                fill
                className="object-cover"
                sizes="95px"
              />
            </div>
            <div className="flex flex-col gap-[18px]">
              <div className="flex items-center justify-center gap-1.5">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#1DA1F2" aria-hidden>
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <h3 className="font-[family-name:var(--font-bricolage)] text-2xl font-bold text-[#EFEFEF]">
                  {LANDING_TESTIMONIAL.name}
                </h3>
              </div>
              <p className="font-[family-name:var(--font-jost)] text-xl leading-[27px] text-white">
                {LANDING_TESTIMONIAL.quote}
              </p>
            </div>
          </article>

          <div
            className="hidden h-[336px] w-[323px] rotate-[5.84deg] overflow-hidden rounded-xl border-[5px] border-[#FEBCA6] md:block md:shrink-0"
            aria-hidden
          >
            <div className="relative h-full w-full">
              <Image
                src="/images/home/children/sunday.jpg"
                alt=""
                fill
                className="object-cover"
                sizes="323px"
              />
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <PaginationDots total={6} active={0} className="bg-transparent" />
        </div>
      </PageContainer>
    </section>
  );
}
