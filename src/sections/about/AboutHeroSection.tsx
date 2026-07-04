import Image from "next/image";
import { ProgramsNavbar } from "@/components/layout/ProgramsNavbar";
import { Reveal } from "@/components/motion/Reveal";

export function AboutHeroSection() {
  return (
    <section className="relative bg-[#EDEDED] pb-0 pt-0">
      <ProgramsNavbar className="bg-[#EDEDED]" />

      <Reveal className="mx-auto flex max-w-[812px] flex-col items-center px-5 pt-10 text-center md:pt-[56px]">
        <h1 className="font-[family-name:var(--font-manrope)] text-[40px] font-bold leading-tight tracking-[-0.02em] pb-0 text-[#282828] md:text-[48px] md:leading-[90px]">
          A Movement Born From <span className="text-[#F87C22]">Purpose</span>
        </h1>
        <p className="font-[family-name:var(--font-manrope)] text-xl font-medium leading-[38px] text-[#535862] pb-16 md:text-2xl">
          Empowering children in underserved communities through chess, education, and technology —
          one move at a time.
        </p>
      </Reveal>

      <Reveal delay={0.15} className="relative mx-auto w-full max-w-[1288px] px-5">
        <div className="relative aspect-[1288/646] w-full overflow-hidden rounded-t-[20px]">
          <Image
            src="/images/about/about-bg.jpg"
            alt="Chess in Slums Africa group photo"
            fill
            className="object-cover"
            sizes="(max-width: 1288px) 100vw, 1288px"
            priority
          />
        </div>
      </Reveal>
    </section>
  );
}
