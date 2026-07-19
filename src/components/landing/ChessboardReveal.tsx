"use client";

import { createContext, useContext, useRef, type ReactNode } from "react";
import Image from "next/image";
import {
  m,
  useMotionValue,
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "motion/react";

const BOARD_FRAME = "/images/landing/ches-1.png";
const BOX_WALL_LEFT = "/images/landing/chess-2.png";
const BOX_WALL_RIGHT = "/images/landing/chess-3.png";

const ScrollProgressContext = createContext<MotionValue<number> | null>(null);

export function ChessboardStatsRow({
  index,
  children,
  className = "",
}: {
  index: number;
  children: ReactNode;
  className?: string;
}) {
  const progress = useContext(ScrollProgressContext);
  const reduceMotion = useReducedMotion();
  const fallback = useMotionValue(1);
  const source = progress ?? fallback;
  const start = 0.18 + index * 0.14;
  const opacity = useTransform(source, [start, start + 0.18], [0, 1]);
  const y = useTransform(source, [start, start + 0.18], [28, 0]);

  return (
    <m.div
      style={reduceMotion || !progress ? undefined : { opacity, y }}
      className={className}
    >
      {children}
    </m.div>
  );
}

export function ChessboardReveal({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "center 0.4"],
  });

  const wallLeftX = useTransform(scrollYProgress, [0.15, 0.7], [118, 0]);
  const wallRightX = useTransform(scrollYProgress, [0.15, 0.7], [-118, 0]);

  return (
    <div ref={ref} className="relative mx-auto max-w-[893px]">
      <m.div
        style={reduceMotion ? { y: "-50%" } : { x: wallLeftX, y: "-50%" }}
        className="pointer-events-none absolute -left-[110px] top-1/2 hidden w-[120px] opacity-90 lg:block xl:-left-[180px] xl:w-[161px]"
        aria-hidden
      >
        <Image src={BOX_WALL_LEFT} alt="" width={161} height={584} className="h-auto w-full" />
      </m.div>
      <m.div
        style={reduceMotion ? { y: "-50%" } : { x: wallRightX, y: "-50%" }}
        className="pointer-events-none absolute -right-[110px] top-1/2 hidden w-[120px] opacity-90 lg:block xl:-right-[180px] xl:w-[171px]"
        aria-hidden
      >
        <Image src={BOX_WALL_RIGHT} alt="" width={171} height={578} className="h-auto w-full" />
      </m.div>

      <div
        className="pointer-events-none absolute -inset-x-[62px] -top-[62px] bottom-0 hidden sm:block"
        aria-hidden
      >
        <Image src={BOARD_FRAME} alt="" fill sizes="1017px" className="object-fill" />
      </div>

      <ScrollProgressContext.Provider value={scrollYProgress}>
        <div className="relative w-full">{children}</div>
      </ScrollProgressContext.Provider>
    </div>
  );
}
