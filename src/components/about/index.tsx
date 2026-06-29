import Image from "next/image";
import Link from "next/link";
import { type ReactNode } from "react";

export { SectionBadge, SectionIntro } from "./shared";
export { ScrollJourneySection } from "./ScrollJourneySection";
export { CountUpStat } from "./CountUpStat";

type ChallengeCardProps = {
  title: string;
  description: string;
};

export function ChallengeCard({ title, description }: ChallengeCardProps) {
  return (
    <article className="flex min-h-[332px] flex-1 flex-col justify-between rounded-[20px] bg-[#F0FDF9] p-8">
      <div className="flex size-[53px] items-center justify-center rounded-full border border-[#99F6E0] bg-[#F0FDF9]">
        <Image src="/images/svg/pawn.svg" alt="" width={17} height={33} aria-hidden />
      </div>
      <div className="mt-auto flex flex-col gap-2 pt-6">
        <h3 className="font-[family-name:var(--font-bricolage)] text-xl font-semibold text-black">
          {title}
        </h3>
        <p className="text-base font-medium leading-6 text-[#7C7C7C]">{description}</p>
      </div>
    </article>
  );
}

type TeamMemberCardProps = {
  name: string;
  role: string;
  image: string;
};

export function TeamMemberCard({ name, role, image }: TeamMemberCardProps) {
  return (
    <article className="relative mx-auto h-[335px] w-full max-w-[246px] overflow-hidden bg-white">
      <div className="absolute inset-x-0 top-[119px] flex flex-col" aria-hidden>
        {Array.from({ length: 8 }).map((_, row) => (
          <div key={row} className="flex">
            {Array.from({ length: 8 }).map((_, col) => (
              <div
                key={col}
                className="size-[30.7px] bg-[#ED9248]"
                style={{ opacity: Math.max(0.2, 1 - (row + col) * 0.08) }}
              />
            ))}
          </div>
        ))}
      </div>
      <div className="absolute inset-x-0 top-0 h-[246px] overflow-hidden bg-white">
        <Image src={image} alt={name} fill className="object-cover object-top" sizes="246px" />
      </div>
      <div className="absolute inset-x-0 bottom-0 px-4 pb-5 pt-16">
        <h3 className="font-[family-name:var(--font-manrope)] text-[32px] font-bold uppercase leading-none text-black">
          {name}
        </h3>
        <p className="mt-2 text-[11px] font-medium leading-[125%] text-black">{role}</p>
      </div>
    </article>
  );
}

type InvolvementCardProps = {
  title: string;
  description: string;
  href: string;
  color: string;
};

export function ShapeFutureCard({ title, description, href, color }: InvolvementCardProps) {
  return (
    <article
      className="relative flex min-h-[272px] w-full max-w-[402px] flex-1 flex-col justify-between overflow-hidden rounded-[30px] p-8"
      style={{ backgroundColor: color }}
    >
      <div className="flex flex-col gap-1">
        <h3 className="font-[family-name:var(--font-bricolage)] text-[25px] font-bold leading-[38px] text-white">
          {title}
        </h3>
        <p className="max-w-[318px] text-lg font-medium leading-7 text-white">{description}</p>
      </div>
      <Link
        href={href}
        className="mt-8 flex size-11 items-center justify-center rounded-full border-2 border-white/25 bg-white/50 shadow-lg backdrop-blur-md"
        aria-label={`Learn more about ${title}`}
      >
        <Image
          src="/images/svg/arrow-right.svg"
          alt=""
          width={20}
          height={20}
          className="brightness-0 invert"
          aria-hidden
        />
      </Link>
    </article>
  );
}

export function TeamTabBar({
  tabs,
  activeId,
  onChange,
}: {
  tabs: readonly { id: string; label: string }[];
  activeId: string;
  onChange: (id: string) => void;
}) {
  return (
    <div className="flex flex-wrap justify-center gap-[18px]">
      {tabs.map((tab) => {
        const isActive = tab.id === activeId;
        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => onChange(tab.id)}
            className={`rounded-[22px] border px-12 py-1.5 text-base transition-colors ${
              isActive
                ? "border-[#FEE8A8] bg-[#6B350D] font-extrabold text-white"
                : "border-[#E2E1DC] bg-[#F8F3EF] font-semibold text-[#5A5A5A] hover:bg-[#efe4dc]"
            }`}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
