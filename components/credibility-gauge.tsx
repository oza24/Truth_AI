"use client"

import { RadialBarChart, RadialBar, PolarAngleAxis, ResponsiveContainer } from "recharts"

export function CredibilityGauge({ value }: { value: number }) {
  const v = Math.max(0, Math.min(100, value))
  const data = [{ name: "score", value: v }]
  const status = v < 33 ? "Low" : v < 66 ? "Medium" : "High"

  return (
    <div className="relative h-48 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart data={data} innerRadius="70%" outerRadius="100%" startAngle={225} endAngle={-45}>
          <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
          <RadialBar
            background
            dataKey="value"
            cornerRadius={10}
            fill="var(--color-chart-1)"
            className="[&_.recharts-radial-bar-background-sector]:fill-[color:var(--secondary)]"
          />
        </RadialBarChart>
      </ResponsiveContainer>

      <div className="pointer-events-none absolute inset-0 grid place-items-center">
        <div className="text-center">
          <div className="font-mono text-2xl font-semibold tabular-nums">{v.toFixed(0)}%</div>
          <div className="mt-1 text-xs text-foreground/70">{status}</div>
        </div>
      </div>
    </div>
  )
}
