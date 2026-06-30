import { ScrollJourneySection } from "@/components/about";
import { JOURNEY_STEPS, SCROLL_IMAGES_SET_1 } from "@/lib/about";

export function JourneyTimelineSection() {
  return (
    <ScrollJourneySection
      badge="Our Journey"
      heading="How It All Started"
      images={SCROLL_IMAGES_SET_1}
      steps={JOURNEY_STEPS}
    />
  );
}
