import { ImpactStatCard } from "@/components/cards";

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
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-[1300px] px-5">
        <div className="mb-12 text-center">
          <h2 className="text-[28px] font-extrabold text-[#282828] md:text-[45px] md:leading-[55px]">
            Building a World where Every Child{" "}
            <span className="inline-flex items-center gap-3">
              can
              <span className="rounded-full border border-[#D5D7DA] px-4 py-2 text-2xl font-bold text-[#5A5A5A] shadow-sm">
                🌍 Africa
              </span>
              thrive
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-xl font-medium text-[#282828]">
            Our impact spans communities, countries, and continents — one pawn at a time.
          </p>
        </div>

        <div className="relative mx-auto max-w-[893px]">
          <div className="grid grid-cols-1 gap-0 sm:grid-cols-3">
            {STATS.map((stat) => (
              <ImpactStatCard
                key={stat.value}
                value={stat.value}
                label={stat.label}
                variant={stat.wide ? "wide" : stat.variant}
                className={stat.wide ? "sm:col-span-3" : ""}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
