import { ImpactStatCard } from "@/components/cards";
import { ChessboardReveal, ChessboardStatsRow } from "@/components/landing/ChessboardReveal";

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
    <section className="overflow-x-clip bg-background py-12 md:py-16">
      <div className="mx-auto max-w-[1301px] px-5">
        <ChessboardReveal>
          {[STATS.slice(0, 3), STATS.slice(3, 4), STATS.slice(4)].map((row, rowIndex) => (
            <ChessboardStatsRow
              key={rowIndex}
              index={rowIndex}
              className="grid w-full grid-cols-1 gap-0 sm:grid-cols-3"
            >
              {row.map((stat) => (
                <ImpactStatCard
                  key={stat.value}
                  value={stat.value}
                  label={stat.label}
                  variant={stat.wide ? "wide" : stat.variant}
                  className={stat.wide ? "sm:col-span-3" : ""}
                />
              ))}
            </ChessboardStatsRow>
          ))}
        </ChessboardReveal>
      </div>
    </section>
  );
}
