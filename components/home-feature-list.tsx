"use client"

import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const FEATURES = [
  { title: "Text Credibility", desc: "Detect misleading claims using linguistic and factual signals." },
  { title: "Image Forensics", desc: "Spot manipulation artifacts and low-level inconsistencies." },
  { title: "Video Deepfakes", desc: "Identify face swaps and temporal artifacts frame-by-frame." },
]

export default function HomeFeatureList() {
  return (
    <section className="container mx-auto px-4 pb-12">
      <div className="grid gap-6">
        {FEATURES.map((f, i) => (
          <Card
            key={f.title}
            className="group translate-y-2 opacity-0 animate-in fade-in slide-in-from-bottom-2 duration-500"
            style={{ animationDelay: `${i * 120}ms`, animationFillMode: "forwards" }}
          >
            <CardHeader>
              <CardTitle className="transition-colors group-hover:text-primary">{f.title}</CardTitle>
              <CardDescription>{f.desc}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  )
}
