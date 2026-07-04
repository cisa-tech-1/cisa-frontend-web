import Image from "next/image";
import { ImpactStatCard } from "@/components/cards";
import { Parallax } from "@/components/motion/Parallax";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

const STATS = [
  { value: "36,000+", label: "Hours of chess training delivered", variant: "brown" as const },
  {
    value: "10,000+",
    label: "Beneficiaries impacted through Chess, Scholarship, Digital Skills, & Empowerment programs",
    variant: "cream" as const,
  },
  { value: "300+", label: "Children covered with health insurance", variant: "brown" as const },
  {
    value: "1 Innovation Hub",
    label: "Serving as a free learning center for Chess training, STEAM, Digital and Vocational skills",
    variant: "orange" as const,
    wide: true,
  },
  {
    value: "200+",
    label: "chess tournaments, with 70% top performance by our ambassadors",
    variant: "cream" as const,
  },
  {
    value: "25+",
    label: "African countries engaged through partnerships advancing chess-based education and youth development",
    variant: "brown" as const,
  },
  { value: "100+", label: "Dedicated volunteers home and abroad", variant: "cream" as const },
];

export function ImpactSection() {
  return (
    <section className="bg-background py-12 md:py-16">
      <div className="mx-auto max-w-[1301px] px-5">
        <div className="relative mx-auto flex max-w-[893px] items-center justify-center">
          <div className="pointer-events-none absolute -left-8 top-1/2 hidden -translate-y-1/2 lg:block xl:-left-24">
            <Parallax offset={-30}>
              <Image
                src="/images/bishop.png"
                alt=""
                width={161}
                height={584}
                aria-hidden
                className="h-auto w-[120px] opacity-90 xl:w-[161px]"
              />
            </Parallax>
          </div>
          <div className="pointer-events-none absolute -right-8 top-1/2 hidden -translate-y-1/2 lg:block xl:-right-24">
            <Parallax offset={30}>
              <Image
                src="/images/rook.png"
                alt=""
                width={171}
                height={578}
                aria-hidden
                className="h-auto w-[120px] opacity-90 xl:w-[171px]"
              />
            </Parallax>
          </div>

          <Stagger className="grid w-full grid-cols-1 gap-0 sm:grid-cols-3">
            {STATS.map((stat) => (
              <StaggerItem
                key={stat.value}
                className={stat.wide ? "sm:col-span-3" : ""}
              >
                <ImpactStatCard
                  value={stat.value}
                  label={stat.label}
                  variant={stat.wide ? "wide" : stat.variant}
                  className="h-full"
                />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
