import { ChartCard } from "@/components/impact/ChartCard";
import { PageContainer } from "@/components/layout/PageContainer";
import { SectorBreakdownChart } from "@/components/impact/charts/DonutCharts";
import { SdgImpactGrid } from "@/components/impact/charts/SdgImpactGrid";
import { Reveal } from "@/components/motion/Reveal";

export function ImpactSdgSection() {
  return (
    <section className="bg-[#FDFDFD] py-12 md:py-[50px]">
      <PageContainer>
        <Reveal className="flex flex-col gap-6 rounded-sm bg-white p-5 md:p-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.6fr_1fr]">
            <ChartCard
              title="SDG IMPACT"
              subtitle="Our work aligns with the following Sustainable Development Goals"
            >
              <SdgImpactGrid />
            </ChartCard>
            <ChartCard title="Sector Impact">
              <SectorBreakdownChart />
            </ChartCard>
          </div>
        </Reveal>
      </PageContainer>
    </section>
  );
}
