"use client";

import Image from "next/image";
import { m } from "motion/react";
import { GLOBAL_REACH_COUNTRIES, MAP_MARKERS } from "@/lib/impact";
import { DURATION, EASE_OUT, VIEWPORT } from "@/lib/motion";

const FLAG_EMOJI: Record<string, string> = {
  NG: "🇳🇬",
  IN: "🇮🇳",
  GB: "🇬🇧",
  AU: "🇦🇺",
  CA: "🇨🇦",
};

export function GlobalReachMap() {
  return (
    <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
      <div className="relative min-h-[300px] flex-1 overflow-hidden rounded-xl bg-[#F4F3FF]">
        <Image
          src="/images/impact/world-map.svg"
          alt="World map showing CISA global reach"
          fill
          className="object-contain p-4 opacity-90"
          sizes="(max-width: 768px) 100vw, 600px"
        />
        {MAP_MARKERS.map((marker, index) => (
          <m.span
            key={marker.name}
            className="absolute flex size-3 items-center justify-center rounded-full bg-[#66C61C] shadow-[0_0_0_6px_rgba(102,198,28,0.2)]"
            style={{ left: marker.left, top: marker.top, x: "-50%", y: "-50%" }}
            initial={{ opacity: 0, scale: 0.4 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={VIEWPORT}
            transition={{ duration: DURATION.fast, ease: EASE_OUT, delay: 0.2 + index * 0.08 }}
            aria-hidden
          />
        ))}
      </div>

      <div className="w-full max-w-[349px] shrink-0">
        <p className="font-[family-name:var(--font-bricolage)] text-4xl font-semibold tracking-tight text-[#181D27]">
          10.5k
        </p>
        <div className="mt-5 flex flex-col gap-3">
          {GLOBAL_REACH_COUNTRIES.map((country, index) => (
            <div key={country.code} className="flex items-start gap-4">
              <span className="text-2xl leading-none" aria-hidden>
                {FLAG_EMOJI[country.code]}
              </span>
              <div className="flex-1">
                <p className="text-sm font-medium text-[#414651]">{country.name}</p>
                <div className="mt-0.5 flex items-center gap-3">
                  <div className="relative h-2 flex-1 overflow-hidden rounded-full bg-[#E9EAEB]">
                    <m.div
                      className="absolute inset-y-0 left-0 origin-left rounded-full bg-[#7F56D9]"
                      style={{ width: `${country.percentage}%` }}
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={VIEWPORT}
                      transition={{ duration: DURATION.base, ease: EASE_OUT, delay: index * 0.08 }}
                    />
                  </div>
                  <span className="text-sm font-medium text-[#414651]">
                    {country.percentage}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
