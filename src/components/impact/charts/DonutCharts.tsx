"use client";

import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import { SECTOR_BREAKDOWN_DATA } from "@/lib/impact";

type DonutChartProps = {
  data: readonly { name: string; value: number; color: string }[];
};

function DonutChart({ data }: DonutChartProps) {
  return (
    <div className="flex flex-col items-center gap-6 sm:flex-row">
      <div className="h-[200px] w-[200px] shrink-0">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={[...data]}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              dataKey="value"
              stroke="none"
            >
              {data.map((entry) => (
                <Cell key={entry.name} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="flex flex-col gap-1">
        {data.map((item) => (
          <div key={item.name} className="flex items-center gap-2">
            <span
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: item.color }}
            />
            <span className="font-[family-name:var(--font-bricolage)] text-sm font-semibold text-[#535862]">
              {item.name} ({item.value}%)
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function SectorBreakdownChart() {
  return <DonutChart data={SECTOR_BREAKDOWN_DATA} />;
}
