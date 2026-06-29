import Link from "next/link";
import { ScrollJourneySection } from "@/components/about";
import { SCROLL_IMAGES_SET_2, STORY_HIGHLIGHTS } from "@/lib/about";

export function StoryHighlightsSection() {
  return (
    <ScrollJourneySection
      images={SCROLL_IMAGES_SET_2}
      reverse
      showHeader={false}
      className="bg-white md:px-28"
      content={
        <div className="flex w-full max-w-[521px] flex-col gap-[23px]">
          {STORY_HIGHLIGHTS.map((story, index) => (
            <div key={story.title} className="flex flex-col gap-[18px]">
              <div className="flex flex-col gap-[13px]">
                <h3 className="font-[family-name:var(--font-bricolage)] text-4xl font-semibold leading-[44px] tracking-[-0.02em] text-[#282828]">
                  {story.title}
                </h3>
                <p className="font-[family-name:var(--font-jost)] text-[15px] leading-[30px] text-[#282828]">
                  ● {story.description}
                </p>
              </div>
              {index === STORY_HIGHLIGHTS.length - 1 && (
                <Link
                  href="/impact"
                  className="inline-flex w-fit items-center justify-center rounded-lg bg-teal-500 px-[18px] py-3 text-base font-semibold text-white shadow-sm"
                >
                  Learn More
                </Link>
              )}
            </div>
          ))}
        </div>
      }
    />
  );
}
