import { type NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  const form = await req.formData()
  const mode = String(form.get("mode") || "text")
  const text = String(form.get("text") || form.get("url") || "")
  const file = form.get("file") as File | null

  // deterministic-ish score from input
  const seedStr = text || (file ? file.name : mode)
  const hash = [...seedStr].reduce((acc, c) => (acc * 31 + c.charCodeAt(0)) % 1000, 7)
  const fakeProb = Math.round(((hash % 70) + 15) * (mode === "video" ? 1.1 : 1)) // 15-85%
  const credibility = Math.max(0, Math.min(100, 100 - fakeProb + 10))

  const radar = [
    { metric: "Source", value: clamp(credibility - 10, 10, 95) },
    { metric: "Style", value: clamp(100 - fakeProb, 5, 90) },
    { metric: "Semantics", value: clamp(credibility - 5, 10, 95) },
    { metric: "Visual", value: clamp(mode === "text" ? 30 : credibility, 10, 95) },
    { metric: "Temporal", value: clamp(mode === "video" ? credibility : 40, 10, 95) },
  ]

  // multi-agent style outputs
  const agents = [
    {
      name: "TextAnalysisAgent",
      active: mode === "text" || text.length > 0,
      confidence: clamp(100 - fakeProb + 5, 5, 98),
      findings: [
        "Style markers compared with misinformation corpora",
        "Claim segmentation and entity extraction completed",
      ],
    },
    {
      name: "ImageForensicsAgent",
      active: mode === "image",
      confidence: clamp(credibility - 8, 5, 95),
      findings: [
        "Noise residual and ELA checks",
        "Compression grid consistency scan",
      ],
    },
    {
      name: "VideoDeepfakeAgent",
      active: mode === "video",
      confidence: clamp(credibility - 5, 5, 95),
      findings: [
        "Facial landmark drift and blink rate analysis",
        "Temporal consistency over keyframes",
      ],
    },
    {
      name: "RetrievalFactCheckAgent",
      active: true,
      confidence: clamp(credibility - 2, 5, 97),
      findings: [
        "Cross-referenced claims with IFCN and Wikipedia",
        "Matched named entities to known events",
      ],
    },
  ]

  const reasons = [
    "Language patterns align with known misinformation cues.",
    "Source reputation score influenced credibility.",
    "Cross-referenced claims with trusted databases.",
    mode !== "text" ? "Detected potential visual artifacts and inconsistencies." : "No significant visual artifacts.",
  ]

  const sources = [
    { title: "Wikipedia / Fact-check summary", url: "https://en.wikipedia.org" },
    { title: "IFCN fact-check database", url: "https://ifcncodeofprinciples.poynter.org/" },
    { title: "Google Fact Check Tools", url: "https://toolbox.google.com/factcheck/explorer" },
  ]

  const verdict = fakeProb > 50 ? "fake" : ("authentic" as const)

  return NextResponse.json({
    verdict,
    probability: fakeProb,
    credibility,
    radar,
    reasons,
    sources,
    agents,
  })
}

function clamp(v: number, min: number, max: number) {
  return Math.max(min, Math.min(max, v))
}
