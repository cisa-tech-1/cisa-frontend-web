import { SectionBadge } from "@/components/about";
import { ProgramVideoPlayer } from "@/components/programs/ProgramVideoPlayer";
import { ABOUT_VIDEO_SRC, STORY_SECTION } from "@/lib/about";

export function AboutStorySection() {
  return (
    <section className="bg-[#FAFAFA] px-5 py-20 md:px-20 md:py-[116px] md:pb-[108px]">
      <div className="mx-auto flex max-w-[1280px] flex-wrap items-start justify-center gap-16 md:gap-20">
        <div className="flex w-full min-w-[280px] max-w-[595px] flex-1 flex-col gap-8">
          <div className="flex flex-col gap-3">
            <SectionBadge>{STORY_SECTION.badge}</SectionBadge>
            <h2 className="font-[family-name:var(--font-bricolage)] text-[30px] font-semibold leading-[38px] text-[#181D27]">
              The Story of <span className="text-[#F87C22]">Chess</span>
            </h2>
            <p className="font-[family-name:var(--font-manrope)] text-base font-medium leading-6 text-[#414651]">
              {STORY_SECTION.intro}
            </p>
          </div>

          <div className="whitespace-pre-line font-[family-name:var(--font-manrope)] text-lg font-medium leading-7 text-[#535862]">
            {STORY_SECTION.body}
          </div>
        </div>

        <div className="w-full min-w-[280px] max-w-[557px] flex-1">
          <ProgramVideoPlayer src={ABOUT_VIDEO_SRC} label="Our story in 60 seconds!" />
        </div>
      </div>
    </section>
  );
}
