"use client"

import { Bar, BarChart, CartesianGrid, ReferenceLine, Tooltip, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart"

type Item = { metric: string; value: number }

export function EvidenceBars({ items }: { items: Item[] }) {
  // normalize data for chart
  const data = items.map((d) => ({ name: d.metric, value: Math.round(d.value) }))

  return (
    <ChartContainer
      id="evidence-bars"
      className="h-56 w-full rounded-md border border-border bg-card px-2 py-1"
      config={{
        value: { label: "Score", color: "var(--color-chart-3)" },
      }}
    >
      <BarChart data={data} barSize={20}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" tickLine={false} axisLine={false} />
        <YAxis domain={[0, 100]} tickLine={false} axisLine={false} />
        <ReferenceLine y={25} stroke="var(--color-destructive)" strokeWidth={3} opacity={0.8} />
        <ReferenceLine y={50} stroke="var(--color-destructive)" strokeWidth={3} opacity={0.6} />
        <ReferenceLine y={75} stroke="var(--color-destructive)" strokeWidth={3} opacity={0.5} />
        <Tooltip content={<ChartTooltipContent />} />
        <Bar dataKey="value" fill="var(--color-chart-3)" radius={[6, 6, 0, 0]} />
      </BarChart>
    </ChartContainer>
  )
}
