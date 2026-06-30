"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { HeroVolumeToggle } from "@/components/landing/HeroVideo";

const DONATE_HEART_ICON = (
  <Image src="/images/svg/heart.svg" alt="" width={16} height={14} aria-hidden />
);

type ProgramsStickyCTAsProps = {
  showVolumeToggle?: boolean;
};

export function ProgramsStickyCTAs({ showVolumeToggle = false }: ProgramsStickyCTAsProps) {
  return (
    <div className="fixed right-5 top-7 z-50 hidden items-center gap-[9px] lg:flex">
      <div className="flex items-center gap-3">
        <Button
          href="/partner"
          variant="custom"
          size="sm"
          font="jost"
          className="h-[42px] px-3.5 font-bold text-white"
          style={{ backgroundColor: "#F87C22", color: "#FFFFFF" }}
        >
          Become a Partner
        </Button>
        <Button
          href="/donate"
          variant="primary"
          size="sm"
          font="jost"
          className="h-[42px] px-3.5 font-bold tracking-wide text-white"
          icon={DONATE_HEART_ICON}
        >
          Donate
        </Button>
      </div>
      {showVolumeToggle && (
        <HeroVolumeToggle className="text-white opacity-90 transition-opacity hover:opacity-100" />
      )}
    </div>
  );
}
