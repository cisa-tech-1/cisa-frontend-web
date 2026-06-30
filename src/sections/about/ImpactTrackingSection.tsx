import { CountUpStat, SectionIntro } from "@/components/about";
import { IMPACT_STATS } from "@/lib/about";

export function ImpactTrackingSection() {
  return (
    <section className="bg-[#FAFAFA] px-5 py-16 md:px-20 md:pb-[100px] md:pt-[62px]">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-10">
        <SectionIntro
          badge="Impact stories"
          heading="Our impact by the numbers — across communities, countries, and lives transformed."
          centered
          headingFont="manrope"
          headingClassName="max-w-[854px] text-[36px] font-bold leading-[50px] text-[#0A0D12]"
        />

        <div className="flex flex-col gap-[25px]">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {IMPACT_STATS.slice(0, 4).map((stat) => (
              <ImpactStatCard key={stat.label} stat={stat} />
            ))}
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {IMPACT_STATS.slice(4).map((stat) => (
              <ImpactStatCard key={stat.label} stat={stat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ImpactStatCard({ stat }: { stat: (typeof IMPACT_STATS)[number] }) {
  return (
    <article className="flex min-h-[305px] flex-col justify-between rounded-[20px] bg-[#FDFDFD] p-8">
      <div className="flex flex-col gap-1">
        <CountUpStat
          value={stat.value}
          prefix={"prefix" in stat ? stat.prefix : undefined}
          suffix={stat.suffix}
        />
        <p className="text-lg font-medium leading-7 text-[#7C7C7C]">{stat.label}</p>
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-xl font-medium leading-[30px] text-black">{stat.detail}</p>
        <p className="text-lg font-medium leading-7 text-[#FB6514]">{stat.target}</p>
      </div>
    </article>
  );
}
