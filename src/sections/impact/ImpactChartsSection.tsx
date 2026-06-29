import { ChartCard } from "@/components/impact/ChartCard";
import { BudgetGaugeChart } from "@/components/impact/charts/BudgetGaugeChart";
import { SectorPieChart } from "@/components/impact/charts/SectorPieChart";
import { FinancialStatusChart } from "@/components/impact/charts/FinancialStatusChart";
import { GlobalReachMap } from "@/components/impact/charts/GlobalReachMap";
import { SdgImpactGrid } from "@/components/impact/charts/SdgImpactGrid";
import {
  ImpactAreasChart,
  SectorBreakdownChart,
} from "@/components/impact/charts/DonutCharts";
import {
  BeneficiariesBarChart,
  ImpactGrowthChart,
  RevenueGrowthChart,
} from "@/components/impact/charts/GrowthCharts";

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
    <section className="bg-[#FAFAFA] px-5 pb-12 md:px-20 md:pb-[50px]">
      <div className="mx-auto max-w-[1280px] rounded-none bg-white p-8 md:rounded-sm">
        <div className="flex flex-col gap-10">
          {/* Row 1: Funding gauge + Sector pie */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.6fr_1fr]">
            <ChartCard title="Total Funding">
              <BudgetGaugeChart />
            </ChartCard>
            <ChartCard title="Impact by Sector">
              <SectorPieChart />
            </ChartCard>
          </div>

          {/* Row 2: Financial status bar chart */}
          <ChartCard
            title="Financial Status"
            subtitle="Program spend allocation across key impact areas (2022)"
          >
            <FinancialStatusChart />
          </ChartCard>

          {/* Row 3: Global map */}
          <ChartCard
            title="Global reach, making a difference"
            action={<ViewReportButton />}
          >
            <GlobalReachMap />
          </ChartCard>

          {/* Row 4: SDG + Sector breakdown */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.6fr_1fr]">
            <ChartCard
              title="SDG IMPACT"
              subtitle="Sustainable Development Goals aligned with CISA programs"
            >
              <SdgImpactGrid />
            </ChartCard>
            <ChartCard title="Sector Impact">
              <SectorBreakdownChart />
            </ChartCard>
          </div>

          {/* Row 5: Impact areas + Beneficiaries */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1.6fr]">
            <ChartCard title="Impact Areas">
              <ImpactAreasChart />
            </ChartCard>
            <ChartCard
              title="Total Beneficiaries"
              subtitle="Beneficiaries reached by program type"
            >
              <BeneficiariesBarChart />
            </ChartCard>
          </div>

          {/* Row 6: Growth charts */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <ChartCard
              title="Growth in Revenue (2019–2026)"
              subtitle="Revenue and beneficiary growth over time"
            >
              <RevenueGrowthChart />
            </ChartCard>
            <ChartCard
              title="Growth in Impact (2019–2026)"
              subtitle="Year-on-year impact expansion across programs"
            >
              <ImpactGrowthChart />
            </ChartCard>
          </div>
        </div>
      </div>
    </section>
  );
}
