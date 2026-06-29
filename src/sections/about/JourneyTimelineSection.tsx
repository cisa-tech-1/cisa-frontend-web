import { ScrollJourneySection } from "@/components/about";
import { JOURNEY_NARRATIVE, SCROLL_IMAGES_SET_1 } from "@/lib/about";

export function JourneyTimelineSection() {
  return (
    <ScrollJourneySection
      badge="Our journey"
      heading="How It All Started"
      images={SCROLL_IMAGES_SET_1}
      content={
        <div className="rounded-2xl bg-[#FAFAFA] p-8 md:p-8">
          <p className="font-[family-name:var(--font-manrope)] text-xl font-medium leading-[30px] text-[#535862]">
            {JOURNEY_NARRATIVE}
          </p>
        </div>
      }
    />
  );
}
