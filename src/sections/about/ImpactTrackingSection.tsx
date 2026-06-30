import Image from "next/image";
import { CountUpStat, SectionIntro } from "@/components/about";
import { PageContainer } from "@/components/layout/PageContainer";
import {
  FORECAST_BANNER,
  IMPACT_REPORT_HEADER,
  ROUNDED_LOGO,
} from "@/lib/impact";
import { IMPACT_STATS } from "@/lib/about";

type ImpactTrackingSectionProps = {
  showForecastBanner?: boolean;
};

export function ImpactTrackingSection({ showForecastBanner = false }: ImpactTrackingSectionProps) {
  return (
    <section className="bg-[#FAFAFA] py-12 md:py-[50px]">
      <PageContainer className="flex flex-col gap-[30px]">
        {showForecastBanner ? (
          <>
            <div className="flex items-center gap-4">
              <Image
                src={ROUNDED_LOGO}
                alt="Chess in Slums Africa"
                width={89}
                height={51}
                className="shrink-0 rounded-full border border-[#F5F5F5]"
              />
              <div>
                <h2 className="font-[family-name:var(--font-bricolage)] text-xl font-semibold leading-[30px] text-[#181D27]">
                  {IMPACT_REPORT_HEADER.title}
                </h2>
                <p className="text-base leading-6 text-[#535862]">
                  {IMPACT_REPORT_HEADER.subtitle}
                </p>
              </div>
            </div>

            <div className="h-px w-full bg-[#E9EAEB]" />

            <div className="rounded-[20px] bg-[#FEF0C7] px-8 py-[22px] text-center">
              <p className="font-[family-name:var(--font-manrope)] text-xl font-medium leading-[30px] text-[#93370D]">
                {FORECAST_BANNER}
              </p>
            </div>
          </>
        ) : (
          <SectionIntro
            badge="Impact stories"
            heading="Our impact by the numbers — across communities, countries, and lives transformed."
            centered
            headingFont="manrope"
            headingClassName="max-w-[854px] text-[36px] font-bold leading-[50px] text-[#0A0D12]"
          />
        )}

        <div className="flex flex-col gap-3">
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
      </PageContainer>
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
