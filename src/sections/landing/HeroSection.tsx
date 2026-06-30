import { ProgramsNavbar } from "@/components/layout/ProgramsNavbar";
import { ProgramsStickyCTAs } from "@/components/layout/ProgramsStickyCTAs";
import { AnnouncementBadge } from "@/components/ui/Badge";
import {
  HeroVideoBackground,
  HeroVideoProvider,
} from "@/components/landing/HeroVideo";
import { LANDING_HERO_BADGE } from "@/lib/landing";

export function HeroSection() {
  return (
    <HeroVideoProvider>
      <section className="relative flex min-h-[723px] items-center justify-center overflow-hidden">
        <HeroVideoBackground />
        <div className="absolute inset-0 bg-[rgba(25,20,2,0.45)]" />

        <ProgramsStickyCTAs showVolumeToggle />
        <ProgramsNavbar variant="hero" />

        <div className="relative z-10 mx-auto flex max-w-[877px] flex-col items-center gap-[13px] px-5 pt-[117px] text-center">
          <div className="flex flex-col items-center gap-5">
            <p className="w-full font-[family-name:var(--font-raleway)] text-[40px] font-normal leading-tight tracking-[0.03em] text-white sm:text-[60px] sm:leading-[75px]">
              Unveiling the
            </p>
            <h1 className="w-full font-[family-name:var(--font-kumbh)] text-[64px] font-extrabold leading-none tracking-[0.03em] text-[#F6C946] sm:text-[110px] sm:leading-[100px]">
              King and Queen
            </h1>
            <p className="w-full font-[family-name:var(--font-raleway)] text-[40px] font-normal leading-tight tracking-[0.03em] text-white sm:text-[60px] sm:leading-[75px]">
              in Every Pawn
            </p>
          </div>

          <AnnouncementBadge
            tag={LANDING_HERO_BADGE.tag}
            message={LANDING_HERO_BADGE.message}
            href={LANDING_HERO_BADGE.href}
          />
        </div>
      </section>
    </HeroVideoProvider>
  );
}
