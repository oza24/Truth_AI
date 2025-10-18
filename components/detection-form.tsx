"use client"

import type React from "react"
import { useRef, useState } from "react"
import useSWRMutation from "swr/mutation"
import { FileText, ImageIcon, VideoIcon, Flag, BadgeCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CredibilityGauge } from "./credibility-gauge"
import { EvidenceBars } from "./evidence-bars"
import { cn } from "@/lib/utils"

type AnalyzeResponse = {
  verdict: "authentic" | "fake"
  probability: number
  credibility: number
  radar: { metric: string; value: number }[]
  reasons: string[]
  sources: { title: string; url: string }[]
  agents?: { name: string; active: boolean; confidence: number; findings: string[] }[]
}

async function sendAnalysis(url: string, { arg }: { arg: FormData }) {
  const res = await fetch(url, { method: "POST", body: arg })
  if (!res.ok) throw new Error("Failed to analyze")
  return (await res.json()) as AnalyzeResponse
}

export function DetectionForm() {
  const [mode, setMode] = useState<"text" | "image" | "video">("text")
  const [text, setText] = useState("")
  const [articleUrl, setArticleUrl] = useState("")
  const [file, setFile] = useState<File | null>(null)
  const [reportSent, setReportSent] = useState(false)

  const imageInputRef = useRef<HTMLInputElement>(null)
  const videoInputRef = useRef<HTMLInputElement>(null)

  const { trigger, data, isMutating, error } = useSWRMutation("/api/analyze", sendAnalysis)

  function onSubmit(e?: React.FormEvent) {
    e?.preventDefault()
    const fd = new FormData()
    fd.append("mode", mode)
    if (mode === "text") {
      fd.append("text", text)
      fd.append("url", articleUrl)
    } else {
      if (file) fd.append("file", file)
    }
    void trigger(fd)
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-center text-lg">Choose what to analyze</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={onSubmit} className="grid place-items-center gap-5">
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => {
                  setMode("text")
                }}
                className={cn(
                  "flex min-w-40 flex-col items-center justify-center rounded-xl border border-border px-6 py-5 transition",
                  "bg-secondary/30 hover:bg-secondary",
                  mode === "text" && "ring-2 ring-[var(--color-primary)]",
                )}
                aria-pressed={mode === "text"}
              >
                <FileText className="mb-2 h-6 w-6" />
                <span className="text-sm font-medium">Upload Text</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setMode("image")
                  imageInputRef.current?.click()
                }}
                className={cn(
                  "flex min-w-40 flex-col items-center justify-center rounded-xl border border-border px-6 py-5 transition",
                  "bg-secondary/30 hover:bg-secondary",
                  mode === "image" && "ring-2 ring-[var(--color-primary)]",
                )}
                aria-pressed={mode === "image"}
              >
                <ImageIcon className="mb-2 h-6 w-6" />
                <span className="text-sm font-medium">Upload Image</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setMode("video")
                  videoInputRef.current?.click()
                }}
                className={cn(
                  "flex min-w-40 flex-col items-center justify-center rounded-xl border border-border px-6 py-5 transition",
                  "bg-secondary/30 hover:bg-secondary",
                  mode === "video" && "ring-2 ring-[var(--color-primary)]",
                )}
                aria-pressed={mode === "video"}
              >
                <VideoIcon className="mb-2 h-6 w-6" />
                <span className="text-sm font-medium">Upload Video</span>
              </button>
            </div>

            {/* hidden file inputs */}
            <input
              ref={imageInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                const f = e.target.files?.[0]
                if (f) {
                  setFile(f)
                  setMode("image")
                }
              }}
            />
            <input
              ref={videoInputRef}
              type="file"
              accept="video/*"
              className="hidden"
              onChange={(e) => {
                const f = e.target.files?.[0]
                if (f) {
                  setFile(f)
                  setMode("video")
                }
              }}
            />

            {/* drag & drop zone */}
            {mode !== "text" && (
              <div
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => {
                  e.preventDefault()
                  const dropped = e.dataTransfer.files?.[0]
                  if (!dropped) return
                  if (mode === "image" && dropped.type.startsWith("image/")) setFile(dropped)
                  if (mode === "video" && dropped.type.startsWith("video/")) setFile(dropped)
                }}
                className="w-full max-w-3xl cursor-pointer rounded-xl border border-dashed border-border/80 bg-secondary/20 p-6 text-center"
                onClick={() => (mode === "image" ? imageInputRef.current?.click() : videoInputRef.current?.click())}
              >
                <p className="text-sm text-foreground/70">Drag & drop your {mode} here, or click to browse.</p>
              </div>
            )}

            {/* inline inputs for text mode */}
            {mode === "text" && (
              <div className="w-full max-w-3xl space-y-3">
                <label className="block text-sm">
                  Article URL (optional)
                  <input
                    className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
                    placeholder="https://example.com/article"
                    value={articleUrl}
                    onChange={(e) => setArticleUrl(e.target.value)}
                  />
                </label>
                <label className="block text-sm">
                  Text
                  <textarea
                    className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
                    rows={5}
                    placeholder="Paste the claim or article text..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    required={!articleUrl}
                  />
                </label>
              </div>
            )}

            {/* file chip */}
            {mode !== "text" && file && (
              <div className="text-xs text-foreground/70">
                Selected {mode}: <span className="font-mono">{file.name}</span>
              </div>
            )}

            {/* preview */}
            {mode === "image" && file && (
              <div className="mt-2">
                <img
                  src={URL.createObjectURL(file)}
                  alt="Selected image preview"
                  className="max-h-64 rounded-md border border-border object-contain"
                />
              </div>
            )}
            {mode === "video" && file && (
              <div className="mt-2 w-full max-w-3xl">
                <video
                  src={URL.createObjectURL(file)}
                  className="aspect-video w-full rounded-md border border-border"
                  controls
                />
              </div>
            )}

            <div className="flex items-center gap-3">
              <Button type="submit" disabled={isMutating}>
                {isMutating ? "Analyzing..." : "Analyze"}
              </Button>
              {error && <span className="text-sm text-red-400">Something went wrong. Try again.</span>}
            </div>
          </form>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Risk Score</CardTitle>
          </CardHeader>
          <CardContent>
            {!data ? (
              <p className="text-sm text-foreground/60">Run an analysis to see the risk score.</p>
            ) : (
              <div>
                <CredibilityGauge value={data.credibility} />
                <div className="mt-2 flex items-center justify-center gap-2 text-xs">
                  <span className="inline-block size-2 rounded-full bg-emerald-500" />
                  <span>Low</span>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Explanation</CardTitle>
          </CardHeader>
          <CardContent>
            {!data ? (
              <p className="text-sm text-foreground/60">You’ll see a concise explanation of the decision here.</p>
            ) : (
              <div className="space-y-2 text-sm text-foreground/80">
                {data.reasons.slice(0, 4).map((r, i) => (
                  <p key={i}>&middot; {r}</p>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Evidence Visualization</CardTitle>
          </CardHeader>
          <CardContent>
            {!data ? (
              <p className="text-sm text-foreground/60">Evidence bars will appear after analysis.</p>
            ) : (
              <EvidenceBars items={data.radar} />
            )}
          </CardContent>
        </Card>
      </div>

      {/* Multi-agent & Sources & Report */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Agents</CardTitle>
          </CardHeader>
          <CardContent>
            {!data?.agents ? (
              <p className="text-sm text-foreground/60">Agents will display after analysis.</p>
            ) : (
              <div className="space-y-3">
                {data.agents.map((a, idx) => (
                  <div key={idx} className="flex items-start justify-between rounded-md border border-border p-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <BadgeCheck className="h-4 w-4 text-foreground/70" />
                        <span className="text-sm font-medium">{a.name}</span>
                        {!a.active && <span className="text-[10px] text-foreground/50">(inactive)</span>}
                      </div>
                      <ul className="mt-1 list-disc pl-5 text-xs text-foreground/70">
                        {a.findings.slice(0, 3).map((f, i) => (
                          <li key={i}>{f}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="text-xs text-foreground/70">Confidence: {a.confidence}%</div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Sources & Reputation</CardTitle>
          </CardHeader>
          <CardContent>
            {!data ? (
              <p className="text-sm text-foreground/60">Fact-check sources will appear after analysis.</p>
            ) : (
              <div className="flex flex-wrap gap-2">
                {data.sources.map((s, i) => (
                  <a
                    key={i}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border/70 px-3 py-1 text-xs hover:bg-secondary"
                  >
                    <span className="inline-block size-1.5 rounded-full bg-sky-400" />
                    {s.title}
                  </a>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base">Community Feedback</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => setReportSent(true)}
              className="inline-flex items-center gap-2 rounded-md border border-border px-3 py-2 text-sm hover:bg-secondary"
            >
              <Flag className="h-4 w-4" />
              {reportSent ? "Reported" : "Flag / Report this result"}
            </button>
            {reportSent && (
              <span className="text-xs text-foreground/60">Thanks for your feedback!</span>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
