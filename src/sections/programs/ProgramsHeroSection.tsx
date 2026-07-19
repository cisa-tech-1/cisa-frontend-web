import { ProgramsNavbar } from "@/components/layout/ProgramsNavbar";
import { PageContainer } from "@/components/layout/PageContainer";
import { ImageCollage } from "@/components/programs";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { HERO_COLLAGE_IMAGES } from "@/lib/programs";

const HERO_BODY =
  "Through our C.A.S.T.L.E. framework — Chess, Afterschool, STEAM, Technology, Life Skills, and Entrepreneurship — we prepare the next generation of leaders from underserved communities with immersive, impact-driven programs.";

export function ProgramsHeroSection() {
  return (
    <section className="bg-[#FCFCFC]">
      <ProgramsNavbar />

      <PageContainer className="flex flex-col items-center gap-16 py-12 lg:flex-row lg:items-center lg:gap-[120px] lg:py-16">
        <Reveal className="flex w-full max-w-[570px] flex-col gap-[30px]">
          <div className="flex flex-col gap-1">
            <span className="inline-flex w-fit items-center gap-1.5 rounded-2xl border border-[#E9EAEB] bg-[#FAFAFA] px-3 py-1 text-sm font-medium text-[#414651]">
              <span className="size-1.5 rounded-full bg-[#717680]" />
              Our Programs
            </span>

            <div className="mt-1 flex flex-col gap-[15px]">
              <h1 className="font-[family-name:var(--font-manrope)] text-[48px] font-bold leading-[60px] tracking-[-0.02em] text-[#181D27]">
                Empowering the Future Through Chess, STEAM &amp; Life Skills
              </h1>
              <p className="font-[family-name:var(--font-manrope)] text-xl font-medium leading-8 text-[#535862]">
                {HERO_BODY}
              </p>
            </div>
          </div>

          <Button href="#program-options" variant="primary" size="md" font="jost" className="w-fit font-semibold px-12">
            Explore
          </Button>
        </Reveal>

        <Reveal delay={0.15}>
          <ImageCollage images={HERO_COLLAGE_IMAGES} />
        </Reveal>
      </PageContainer>
    </section>
  );
}
