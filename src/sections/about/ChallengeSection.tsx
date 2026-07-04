import Image from "next/image";
import { ChallengeCard, SectionIntro } from "@/components/about";
import { Reveal } from "@/components/motion/Reveal";
import { CHALLENGE_ITEMS } from "@/lib/about";

export function ChallengeSection() {
  return (
    <section className="bg-teal-500 px-5 py-16 md:px-20 md:pb-[100px] md:pt-[61px]">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-11 md:gap-[45px]">
        <Reveal>
          <SectionIntro
            badge="Challenge"
            heading="The Challenge We Address"
            dark
            centered
            headingFont="manrope"
            headingClassName="text-[36px] font-bold leading-[44px]"
          />
        </Reveal>

        <Reveal className="flex w-full flex-col gap-3 lg:flex-row">
          <div className="grid flex-1 grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="flex flex-col gap-3">
              <ChallengeCard {...CHALLENGE_ITEMS[0]} />
              <ChallengeCard {...CHALLENGE_ITEMS[2]} />
            </div>
            <div className="flex flex-col gap-3">
              <ChallengeCard {...CHALLENGE_ITEMS[1]} />
              <ChallengeCard {...CHALLENGE_ITEMS[3]} />
            </div>
          </div>

          <aside className="flex w-full max-w-[470px] flex-col overflow-hidden rounded-[20px] bg-[#FDFDFD] lg:shrink-0">
            <div className="flex flex-col gap-2 p-8">
              <h3 className="font-[family-name:var(--font-bricolage)] text-[30px] font-semibold text-black">
                Our Response
              </h3>
              <p className="text-lg font-medium leading-7 text-[#717680]">
                Chess in Slums Africa recognizes that these challenges are interconnected and require a
                holistic, trauma-informed approach. We believe that every child, regardless of their
                background, holds the potential to rise beyond adversity and build a brighter future.
                Through chess and strategic interventions, we unlock this potential.
              </p>
            </div>
            <div className="relative min-h-[342px] flex-1">
              <Image
                src="/images/about/challenge.jpg"
                alt="Children learning chess"
                fill
                className="object-cover"
                sizes="470px"
              />
            </div>
          </aside>
        </Reveal>
      </div>
    </section>
  );
}
