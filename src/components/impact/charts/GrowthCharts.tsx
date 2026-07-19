"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { IMPACT_GROWTH_DATA, REVENUE_GROWTH_DATA } from "@/lib/impact";
import { ChartReveal } from "@/components/motion/ChartReveal";

export function RevenueGrowthChart() {
  return (
    <ChartReveal className="h-[250px] w-full">
      <div className="mb-4 flex flex-wrap items-center justify-end gap-4 text-xs text-[#4E5969]">
        <span className="flex items-center gap-1">
          <span className="h-0.5 w-2 bg-orange-500" />
          Revenue ($K)
        </span>
        <span className="flex items-center gap-1">
          <span className="h-0.5 w-2 bg-teal-500" />
          Beneficiaries
        </span>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={[...REVENUE_GROWTH_DATA]} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="4 4" stroke="#E5E6EB" vertical={false} />
          <XAxis
            dataKey="year"
            tick={{ fill: "#86909C", fontSize: 12 }}
            axisLine={{ stroke: "#C9CDD4" }}
            tickLine={false}
          />
          <YAxis hide />
          <Tooltip />
          <Line type="monotone" dataKey="revenue" stroke="#FB6514" strokeWidth={2} dot={false} />
          <Line
            type="monotone"
            dataKey="beneficiaries"
            stroke="#15B79E"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartReveal>
  );
}

export function ImpactGrowthChart() {
  const data = IMPACT_GROWTH_DATA.map((item) => ({
    year: item.year,
    value: item.value,
  }));

  return (
    <ChartReveal className="h-[252px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="4 4" stroke="#E5E6EB" vertical={false} />
          <XAxis
            dataKey="year"
            tick={{ fill: "#86909C", fontSize: 12 }}
            axisLine={{ stroke: "#C9CDD4" }}
            tickLine={false}
          />
          <YAxis
            tick={{ fill: "#86909C", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip />
          <Bar dataKey="value" fill="#FB6514" radius={[4, 4, 0, 0]} barSize={22} />
        </BarChart>
      </ResponsiveContainer>
    </ChartReveal>
  );
}
