import { ChartCard } from "@/components/impact/ChartCard";
import { PageContainer } from "@/components/layout/PageContainer";
import { BudgetGaugeChart } from "@/components/impact/charts/BudgetGaugeChart";
import { FinancialStatusChart } from "@/components/impact/charts/FinancialStatusChart";
import { GlobalReachMap } from "@/components/impact/charts/GlobalReachMap";
import { SectorPieChart } from "@/components/impact/charts/SectorPieChart";
import { Reveal } from "@/components/motion/Reveal";

function ViewReportButton() {
  return (
    <button
      type="button"
      className="rounded-lg border border-[#D5D7DA] bg-white px-3.5 py-2.5 text-sm font-semibold text-[#414651] shadow-xs"
    >
      View report
    </button>
  );
}

export function ImpactChartsSection() {
  return (
    <section className="bg-[#FAFAFA] pb-12 md:pb-[50px]">
      <PageContainer>
        <Reveal className="flex flex-col gap-6 rounded-sm bg-white p-5 md:p-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.6fr_1fr]">
            <ChartCard title="Total Funding">
              <BudgetGaugeChart />
            </ChartCard>
            <ChartCard title="Impact by Sector">
              <SectorPieChart />
            </ChartCard>
          </div>

          <ChartCard
            title="Financial Status"
            subtitle="Program spend allocation across key initiatives (USD thousands)"
          >
            <FinancialStatusChart />
          </ChartCard>

          <ChartCard
            title="Global reach, making a difference"
            action={<ViewReportButton />}
          >
            <GlobalReachMap />
          </ChartCard>
        </Reveal>
      </PageContainer>
    </section>
  );
}
