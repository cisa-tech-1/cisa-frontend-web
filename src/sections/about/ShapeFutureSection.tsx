import Image from "next/image";
import { ShapeFutureCard } from "@/components/about";
import { PageContainer } from "@/components/layout/PageContainer";
import { Reveal } from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { SHAPE_FUTURE_CARDS } from "@/lib/about";

export function ShapeFutureSection() {
  return (
    <section className="mt-16 bg-white px-5 pb-0 pt-0 md:mt-24">
      <PageContainer className="px-0">
        <div className="relative min-h-[608px] overflow-hidden rounded-[20px]">
          <Image
            src="/images/about/shape-bg.jpg"
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
          <div className="absolute inset-0 bg-black/83" />

          <div className="relative mx-auto flex max-w-[1256px] flex-col items-center gap-[60px] px-5 py-16 md:px-8 md:py-[59px]">
            <Reveal className="flex max-w-[911px] flex-col items-center gap-[19px] text-center">
              <h2 className="font-[family-name:var(--font-manrope)] text-[36px] font-bold leading-[60px] tracking-[-0.02em] text-white md:text-[48px]">
                Shape the future.{" "}
                <span className="text-teal-500">One move at a time</span>
              </h2>
              <p className="font-[family-name:var(--font-manrope)] text-xl font-medium leading-8 text-[#D5D7DA]">
                Different Ways you can get involved and make a change
              </p>
            </Reveal>

            <Stagger className="flex w-full flex-wrap justify-center gap-[25px]">
              {SHAPE_FUTURE_CARDS.map((card) => (
                <StaggerItem key={card.title}>
                  <ShapeFutureCard {...card} />
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
