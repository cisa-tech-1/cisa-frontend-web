import Image from "next/image";
import { ProgramsNavbar } from "@/components/layout/ProgramsNavbar";

export function AboutHeroSection() {
  return (
    <section className="relative bg-[#EDEDED] pb-0 pt-0">
      <ProgramsNavbar className="bg-[#EDEDED]" />

      <div className="mx-auto flex] flex-col items-center gap-4 px-5 pt-10 text-center md:pb-10 md:pt-[58px] pb-16">
        <h1 className="max-w-[744px] font-[family-name:var(--font-manrope)] text-[40px] font-bold leading-tight tracking-[-0.02em] text-[#282828] md:text-[48px] md:leading-[90px]">
          A Movement Born From <span className="text-[#F87C22]">Purpose</span>
        </h1>
        <p className="max-w-[744px] font-[family-name:var(--font-manrope)] text-xl font-medium leading-[38px] text-[#535862]">
          Empowering children in underserved communities through chess, education, and technology —
          one move at a time.
        </p>
      </div>

      <div className="relative mx-auto w-full max-w-[1288px] px-5">
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
      </div>
    </section>
  );
}
