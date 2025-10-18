"use client"

import type React from "react"

import { FileText, ImageIcon, Video } from "lucide-react"
import Reveal from "./reveal"
import { cn } from "@/lib/utils"

type Feature = {
  title: string
  description: string
  icon: React.ElementType
}

const features: Feature[] = [
  {
    title: "Real-time Detection",
    description: "Upload content and get instant risk scoring powered by our latest detection pipeline.",
    icon: FileText,
  },
  {
    title: "Explainable Results",
    description: "Understand why a piece is flagged with model rationale and interpretable signals.",
    icon: ImageIcon,
  },
  {
    title: "Multi‑Modal Evidence",
    description: "Analyze text, images, and video for a holistic authenticity view.",
    icon: Video,
  },
]

export default function HomeFeaturesVertical({
  className,
}: {
  className?: string
}) {
  return (
    <section aria-labelledby="features-title" className={cn("w-full", className)}>
      <h2 id="features-title" className="text-pretty text-2xl md:text-3xl font-semibold tracking-tight mb-6">
        Powerful features, thoughtfully designed
      </h2>

      <div className="flex flex-col gap-8 md:gap-10">
        {features.map((f, i) => {
          const Icon = f.icon
          return (
            <Reveal
              key={f.title}
              direction="up"
              delayMs={60 + i * 80}
              className="group rounded-2xl border border-border bg-card text-card-foreground 
                         p-6 md:p-8 transition-all duration-500 
                         hover:-translate-y-0.5 hover:shadow-xl/10"
            >
              <div className="flex items-start gap-4">
                <span
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg 
                             bg-primary/15 text-primary ring-1 ring-primary/25"
                >
                  <Icon className="h-5 w-5" />
                </span>
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-medium">{f.title}</h3>
                  <p className="mt-2 text-sm md:text-base text-muted-foreground">{f.description}</p>
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
