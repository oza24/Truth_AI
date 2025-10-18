"use client"

import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from "recharts"

type Item = { metric: string; value: number }

export function CredibilityRadar({ items }: { items: Item[] }) {
  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={items}>
          <PolarGrid stroke="hsl(var(--color-border))" />
          <PolarAngleAxis dataKey="metric" tick={{ fill: "hsl(var(--color-muted-foreground))" }} />
          <PolarRadiusAxis tick={false} />
          <Tooltip
            contentStyle={{
              background: "hsl(var(--color-card))",
              border: "1px solid hsl(var(--color-border))",
              color: "hsl(var(--color-foreground))",
            }}
          />
          <Radar
            name="Credibility"
            dataKey="value"
            stroke="var(--color-chart-4)"
            fill="var(--color-chart-4)"
            fillOpacity={0.4}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}
