"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";

const DONATE_HEART_ICON = (
  <Image src="/images/svg/heart.svg" alt="" width={16} height={14} aria-hidden />
);

export function ProgramsStickyCTAs() {
  return (
    <div className="fixed right-5 top-7 z-50 hidden items-center gap-3 lg:flex">
      <Button
        href="/get-involved"
        variant="custom"
        size="sm"
        font="jost"
        className="h-[42px] px-3.5 font-bold text-white"
        style={{ backgroundColor: "#F87C22", color: "#FFFFFF" }}
      >
        Be a Game Changer
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
  );
}
