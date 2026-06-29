"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { FINANCIAL_STATUS_DATA } from "@/lib/impact";

export function FinancialStatusChart() {
  const data = FINANCIAL_STATUS_DATA.map((item) => ({
    name: item.category,
    value: item.amount,
  }));

  return (
    <div className="h-[280px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 8, right: 24, left: 8, bottom: 8 }}
        >
          <CartesianGrid strokeDasharray="4 4" stroke="#E5E6EB" horizontal={false} />
          <XAxis type="number" hide domain={[0, 800]} />
          <YAxis
            type="category"
            dataKey="name"
            width={120}
            tick={{ fill: "#252B37", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            cursor={{ fill: "rgba(78, 89, 105, 0.05)" }}
            contentStyle={{
              borderRadius: 4,
              border: "none",
              boxShadow: "0px 4px 9px rgba(0, 0, 0, 0.1)",
            }}
          />
          <Bar dataKey="value" fill="#FB6514" radius={[0, 4, 4, 0]} barSize={37} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
