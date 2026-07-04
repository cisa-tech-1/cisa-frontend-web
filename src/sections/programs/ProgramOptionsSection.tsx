"use client";

import Image from "next/image";
import { useState } from "react";
import { PageContainer } from "@/components/layout/PageContainer";
import { ProgramVideoPlayer } from "@/components/programs";
import { Reveal } from "@/components/motion/Reveal";
import { PROGRAM_OPTIONS, type ProgramOptionId } from "@/lib/programs";

function ProgramOptionTab({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-[22px] border px-4 py-1.5 font-[family-name:var(--font-manrope)] text-sm leading-6 transition-colors md:px-[50px] md:py-0.5 md:text-base ${
        active
          ? "border-[#FEE8A8] bg-[#6B350D] font-extrabold text-white"
          : "border-[#E2E1DC] bg-[#F8F3EF] font-semibold text-[#5A5A5A]"
      }`}
    >
      {label}
    </button>
  );
}

export function ProgramOptionsSection() {
  const [activeId, setActiveId] = useState<ProgramOptionId>(PROGRAM_OPTIONS[0].id);
  const content = PROGRAM_OPTIONS.find((option) => option.id === activeId) ?? PROGRAM_OPTIONS[0];

  return (
    <section id="program-options" className="bg-[#FCFCFC] py-16 md:py-24">
      <PageContainer className="flex flex-col items-center gap-10">
        <Reveal
          as="h2"
          className="text-center font-[family-name:var(--font-manrope)] text-[45px] font-extrabold leading-[60px] tracking-[-0.02em] text-[#282828]"
        >
          Explore Our Program Options
        </Reveal>

        <div className="flex max-w-[683px] flex-col items-center gap-[18px]">
          <div className="flex flex-wrap items-center justify-center gap-[18px]">
            {PROGRAM_OPTIONS.slice(0, 3).map((option) => (
              <ProgramOptionTab
                key={option.id}
                label={option.label}
                active={activeId === option.id}
                onClick={() => setActiveId(option.id)}
              />
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-[18px]">
            {PROGRAM_OPTIONS.slice(3).map((option) => (
              <ProgramOptionTab
                key={option.id}
                label={option.label}
                active={activeId === option.id}
                onClick={() => setActiveId(option.id)}
              />
            ))}
          </div>
        </div>

        <Reveal className="flex w-full flex-col items-start gap-10 lg:flex-row lg:gap-10">
          <ProgramVideoPlayer key={content.id} src={content.videoSrc} label={content.videoLabel} />

          <div className="flex w-full max-w-[664px] flex-col gap-[30px]">
            <div className="flex flex-col gap-2">
              <h3 className="font-[family-name:var(--font-bricolage)] text-[26px] font-bold leading-[170%] text-[#282828]">
                {content.title}
              </h3>
              <p className="font-[family-name:var(--font-manrope)] text-lg font-medium leading-[170%] text-[#5C5C5C]">
                {content.description}
              </p>
            </div>

            <div className="flex flex-col gap-[30px]">
              <span className="inline-flex w-fit items-center gap-1.5 rounded-2xl border border-[#E9EAEB] bg-white/70 px-3 py-1 text-base font-bold text-[#414651]">
                <span className="size-1.5 rounded-full bg-[#717680]" />
                {content.badge}
              </span>

              <ul className="flex flex-col gap-[18px]">
                {content.features.map((feature) => (
                  <li key={feature.title} className="relative pl-7">
                    <Image
                      src="/images/svg/pointer.svg"
                      alt=""
                      width={20}
                      height={20}
                      className="absolute left-0 top-1"
                      aria-hidden
                    />
                    <p className="font-[family-name:var(--font-manrope)] text-lg font-extrabold leading-[170%] text-[#5C5C5C]">
                      <span>{feature.title}</span>{" "}
                      <span className="font-medium">{feature.description}</span>
                    </p>
                    { "nested" in feature && feature.nested && (
                      <ul className="mt-2 list-disc pl-6 font-[family-name:var(--font-manrope)] text-lg font-medium leading-[170%] text-[#5C5C5C]">
                        {feature.nested.map((item: string) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </PageContainer>
    </section>
  );
}
