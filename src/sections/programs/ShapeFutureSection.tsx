import { DonationOptionCard } from "@/components/donations/DonationOptionCard";
import { PageContainer } from "@/components/layout/PageContainer";
import { SHAPE_FUTURE_OPTIONS } from "@/lib/programs";

export function ShapeFutureSection() {
  return (
    <section className="mb-16 bg-[#FCFCFC] py-16 pb-48 md:mb-24 md:py-20 md:pb-48">
      <PageContainer className="flex flex-col items-center gap-[50px]">
        <div className="flex max-w-[824px] flex-col items-center gap-[19px] text-center">
          <h2 className="font-[family-name:var(--font-manrope)] text-[48px] font-bold leading-[60px] tracking-[-0.02em] text-[#282828]">
            Shape the future.{" "}
            <span className="text-[#F87C22]">One move at a time</span>
          </h2>
          <p className="font-[family-name:var(--font-manrope)] text-xl font-medium leading-8 text-[#5A5A5A]">
            Different Ways you can get involved and make a change
          </p>
        </div>

        <div className="flex w-full flex-wrap justify-center gap-6">
          {SHAPE_FUTURE_OPTIONS.map((option) => (
            <DonationOptionCard key={option.title} {...option} />
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
