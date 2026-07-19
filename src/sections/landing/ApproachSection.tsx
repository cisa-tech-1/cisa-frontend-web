import Image from "next/image";
import { PageContainer } from "@/components/layout/PageContainer";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { Parallax } from "@/components/motion/Parallax";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { LANDING_APPROACH_BLOCKS } from "@/lib/landing";

function ListItem({ children }: { children: string }) {
  return (
    <StaggerItem
      as="li"
      className="flex items-center gap-2 font-[family-name:var(--font-manrope)] text-lg font-medium leading-[35px] tracking-[-0.02em] text-[#5A5A5A]"
    >
      <Image
        src="/images/svg/pointer.svg"
        alt=""
        width={20}
        height={20}
        aria-hidden
        className="shrink-0"
      />
      {children}
    </StaggerItem>
  );
}

type ApproachBlockProps = (typeof LANDING_APPROACH_BLOCKS)[keyof typeof LANDING_APPROACH_BLOCKS];

function ApproachBlockImage({ image, imageAlt }: { image: string; imageAlt: string }) {
  return (
    <div className="relative w-full max-w-[498px] aspect-[498/372]">
      <Parallax
        offset={-25}
        className="pointer-events-none absolute left-0 top-[41.4%] z-0 w-[40.2%] max-w-[200px]"
      >
        <Image
          src="/images/rook.png"
          alt=""
          width={200}
          height={200}
          aria-hidden
          className="w-full"
        />
      </Parallax>

      <div className="absolute bottom-0 left-[17.9%] top-0 z-10 w-[82.1%] overflow-hidden rounded-[12px]">
        <Image src={image} alt={imageAlt} fill className="object-cover" sizes="(max-width: 1024px) 80vw, 408px" />
      </div>
    </div>
  );
}

function ApproachBlock({ accent, title, image, imageAlt, features }: ApproachBlockProps) {
  return (
    <article className="flex w-full max-w-[498px] flex-col gap-[11px]">
      <ApproachBlockImage image={image} imageAlt={imageAlt} />

      <div className="flex flex-col gap-[11px] pl-[17.9%] lg:max-w-[387px]">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-[family-name:var(--font-jost)] text-[28px] font-bold leading-[35px] tracking-[-0.02em] text-[#1BA38E]">
            {accent}
          </span>
          <h3 className="font-[family-name:var(--font-bricolage)] text-2xl font-semibold leading-[27px] text-[#414651]">
            {title}
          </h3>
        </div>
        <Stagger as="ul" className="flex flex-col">
          {features.map((feature) => (
            <ListItem key={feature}>{feature}</ListItem>
          ))}
        </Stagger>
      </div>
    </article>
  );
}

export function ApproachSection() {
  const { ca, st, le } = LANDING_APPROACH_BLOCKS;

  return (
    <section className="relative overflow-hidden bg-white py-12 md:py-16">
      <PageContainer className="relative">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
          <div className="flex flex-col gap-10 lg:gap-14">
            <Reveal className="max-w-[448px]">
              <h2 className="font-[family-name:var(--font-manrope)] text-[36px] font-extrabold leading-[44px] text-[#181D27] md:text-[45px] md:leading-[55px]">
                Our Approach To Sustainable Impact
              </h2>
              <p className="mt-[18px] max-w-[420px] text-[20px] font-medium leading-[32px] tracking-[-0.02em] text-[#535862] md:text-[22px] md:leading-[35px]">
                We are building minds, skills, and futures using the{" "}
                <span className="font-semibold text-[#1BA38E]">C.A.S.T.L.E</span> Frameworks as our
                blueprint.
              </p>
              <Button
                href="/our-work"
                variant="primary"
                size="lg"
                font="jost"
                className="mt-[26px] h-[60px] w-full max-w-[332px] text-xl font-semibold"
              >
                Learn More
              </Button>
            </Reveal>

            <ApproachBlock {...st} />
          </div>

          <div className="flex flex-col gap-10 lg:gap-14">
            <ApproachBlock {...ca} />
            <ApproachBlock {...le} />
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
