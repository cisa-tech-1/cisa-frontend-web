import { PageContainer } from "@/components/layout/PageContainer";
import { ImpactGrowthChart, RevenueGrowthChart } from "@/components/impact/charts/GrowthCharts";

export function ImpactGrowthSection() {
  return (
    <section className="bg-[#FDFDFD] pb-12 md:pb-[50px]">
      <PageContainer className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-[38px]">
        <div className="rounded-md bg-white p-5">
          <div className="mb-5 flex flex-col gap-1">
            <h3 className="font-[family-name:var(--font-bricolage)] text-base font-semibold text-[#181D27]">
              Growth in Revenue (2019–2026)
            </h3>
            <p className="text-sm text-[#4E5969]">
              Year-on-year revenue and beneficiary growth trajectory
            </p>
          </div>
          <RevenueGrowthChart />
        </div>

        <div className="rounded-md bg-white p-5">
          <div className="mb-5 flex flex-col gap-1">
            <h3 className="font-[family-name:var(--font-bricolage)] text-base font-semibold text-[#1D2129]">
              Growth in Impact (2019–2026)
            </h3>
            <p className="text-sm text-[#4E5969]">
              Cumulative impact metrics across program years
            </p>
          </div>
          <ImpactGrowthChart />
        </div>
      </PageContainer>
    </section>
  );
}
