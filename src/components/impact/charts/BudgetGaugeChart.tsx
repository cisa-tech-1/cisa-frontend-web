"use client";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { BUDGET_CATEGORIES, TOTAL_FUNDING } from "@/lib/impact";

const gaugeData = [
  { name: "outer", value: 72, color: "#FB6514" },
  { name: "outer-bg", value: 28, color: "#F5F5F5" },
];

const innerData = [
  { name: "inner", value: 48, color: "#FEB273" },
  { name: "inner-bg", value: 52, color: "#F5F5F5" },
];

export function BudgetGaugeChart() {
  return (
    <div className="flex flex-col gap-6 md:flex-row md:items-center">
      <div className="relative mx-auto h-[240px] w-[240px] shrink-0">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={gaugeData}
              cx="50%"
              cy="50%"
              innerRadius={72}
              outerRadius={96}
              startAngle={90}
              endAngle={-270}
              dataKey="value"
              stroke="none"
            >
              {gaugeData.map((entry) => (
                <Cell key={entry.name} fill={entry.color} />
              ))}
            </Pie>
            <Pie
              data={innerData}
              cx="50%"
              cy="50%"
              innerRadius={56}
              outerRadius={72}
              startAngle={90}
              endAngle={-270}
              dataKey="value"
              stroke="none"
            >
              {innerData.map((entry) => (
                <Cell key={entry.name} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <p className="text-sm font-medium text-[#535862]">Total</p>
          <p className="font-[family-name:var(--font-bricolage)] text-[30px] font-semibold text-[#181D27]">
            {TOTAL_FUNDING}
          </p>
        </div>
      </div>

      <div className="grid flex-1 grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-3">
        {BUDGET_CATEGORIES.map((item) => (
          <div key={item.label} className="flex gap-2">
            <span
              className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full"
              style={{ backgroundColor: item.color }}
            />
            <div>
              <p className="text-sm font-medium text-[#535862]">{item.label}</p>
              <p className="font-[family-name:var(--font-bricolage)] text-2xl font-semibold text-[#181D27]">
                {item.value}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
