"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  type ScrollImage,
  type TimelinePiece,
  TIMELINE_PIECES,
} from "@/lib/about";
import { SectionIntro } from "./shared";

const PIECE_SRC: Record<TimelinePiece, string> = {
  bishop: "/images/svg/bishop.svg",
  knight: "/images/svg/knight.svg",
  king: "/images/svg/king.svg",
};

type ScrollJourneySectionProps = {
  badge?: string;
  heading?: string;
  images: readonly ScrollImage[];
  content: ReactNode;
  reverse?: boolean;
  className?: string;
  showHeader?: boolean;
};

function PhotoCollage({
  images,
  activeIndex,
}: {
  images: readonly ScrollImage[];
  activeIndex: number;
}) {
  return (
    <div className="relative mx-auto h-[542px] w-full max-w-[471px] shrink-0">
      {images.map((img, index) => (
        <div
          key={img.src}
          className={`absolute ${img.position} h-[200px] w-[160px] overflow-hidden rounded-[20px] border-[12px] transition-all duration-700 md:h-[240px] md:w-[180px] ${img.border} ${img.rotate} ${img.shadow} ${
            index === activeIndex ? "z-10 scale-105 opacity-100" : "z-0 scale-100 opacity-90"
          }`}
        >
          <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="180px" />
        </div>
      ))}
    </div>
  );
}

function TimelineRail({ activeIndex }: { activeIndex: number }) {
  return (
    <div className="flex shrink-0 flex-col items-center">
      {TIMELINE_PIECES.map((piece, index) => (
        <div key={piece} className="flex flex-col items-center">
          {index > 0 && (
            <div
              className={`h-20 w-px transition-colors duration-500 ${
                index <= activeIndex ? "bg-teal-500" : "bg-[#AFAFAF]"
              }`}
            />
          )}
          <div
            className={`flex size-[100px] items-center justify-center rounded-full border transition-all duration-500 ${
              index === activeIndex
                ? "border-teal-500 bg-white shadow-md"
                : index < activeIndex
                  ? "border-teal-500 bg-teal-50"
                  : "border-[#AFAFAF] bg-white"
            }`}
          >
            <Image
              src={PIECE_SRC[piece]}
              alt=""
              width={24}
              height={24}
              className={index <= activeIndex ? "opacity-100" : "opacity-40 grayscale"}
              aria-hidden
            />
          </div>
        </div>
      ))}
      <div
        className={`h-20 w-px transition-colors duration-500 ${
          activeIndex >= TIMELINE_PIECES.length - 1 ? "bg-teal-500" : "bg-[#AFAFAF]"
        }`}
      />
    </div>
  );
}

export function ScrollJourneySection({
  badge = "",
  heading = "",
  images,
  content,
  reverse = false,
  className = "bg-white",
  showHeader = true,
}: ScrollJourneySectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const updateActiveIndex = () => {
      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const sectionTop = rect.top;
      const sectionHeight = rect.height;

      const scrollable = sectionHeight - viewportHeight * 0.4;
      if (scrollable <= 0) {
        setActiveIndex(sectionTop < viewportHeight * 0.5 ? TIMELINE_PIECES.length - 1 : 0);
        return;
      }

      const progress = Math.min(1, Math.max(0, (viewportHeight * 0.35 - sectionTop) / scrollable));
      const step = Math.min(TIMELINE_PIECES.length - 1, Math.floor(progress * TIMELINE_PIECES.length));
      setActiveIndex(step);
    };

    updateActiveIndex();
    window.addEventListener("scroll", updateActiveIndex, { passive: true });
    window.addEventListener("resize", updateActiveIndex);
    return () => {
      window.removeEventListener("scroll", updateActiveIndex);
      window.removeEventListener("resize", updateActiveIndex);
    };
  }, []);

  const collage = <PhotoCollage images={images} activeIndex={activeIndex} />;
  const timeline = <TimelineRail activeIndex={activeIndex} />;
  const textBlock = (
    <div className="w-full max-w-[539px] flex-1 transition-opacity duration-500">{content}</div>
  );

  return (
    <section ref={sectionRef} className={`px-5 py-16 md:px-20 md:py-20 ${className}`}>
      <div className="mx-auto flex max-w-[1216px] flex-col items-center gap-12 md:gap-[50px]">
        {showHeader && badge && heading ? (
          <SectionIntro badge={badge} heading={heading} centered headingFont="manrope" />
        ) : null}

        <div className="flex w-full flex-col items-center justify-center gap-8 lg:flex-row lg:items-center lg:gap-[53px]">
          {reverse ? (
            <>
              {textBlock}
              {timeline}
              {collage}
            </>
          ) : (
            <>
              {collage}
              {timeline}
              {textBlock}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
