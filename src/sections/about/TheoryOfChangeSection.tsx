import Image from "next/image";
import { SectionBadge } from "@/components/about";
import { MISSION_VISION, THEORY_DESCRIPTION } from "@/lib/about";

export function TheoryOfChangeSection() {
  return (
    <section className="bg-[#FAFAFA] px-5 py-20 md:px-20 md:py-[100px]">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-12 md:gap-[47px]">
        <div className="flex flex-col gap-5">
          <SectionBadge>Our approach</SectionBadge>
          <h2 className="font-[family-name:var(--font-manrope)] text-4xl font-bold tracking-[-0.02em] text-black">
            Our Theory of Change
          </h2>
          <p className="max-w-[1201px] text-lg font-medium leading-7 text-[#7C7C7C]">
            {THEORY_DESCRIPTION}
          </p>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          <VisionMissionCard
            title="The Vision"
            description={MISSION_VISION.vision.text}
            color="#B6621D"
          />
          <VisionMissionCard
            title="The Mission"
            description={MISSION_VISION.mission.text}
            color="#3469DD"
          />
        </div>
      </div>
    </section>
  );
}

function VisionMissionCard({
  title,
  description,
  color,
}: {
  title: string;
  description: string;
  color: string;
}) {
  return (
    <article className="flex flex-col overflow-hidden rounded-[20px]" style={{ backgroundColor: color }}>
      <div className="flex flex-col gap-2 p-8">
        <h3 className="font-[family-name:var(--font-bricolage)] text-[30px] font-semibold text-white">
          {title}
        </h3>
        <p className="text-lg font-medium leading-6 text-[#FAFAFA]">{description}</p>
      </div>
      <div className="relative h-[218px] w-full">
        <Image
          src="/images/about/theory.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="632px"
        />
      </div>
    </article>
  );
}
