import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative mx-auto max-w-6xl px-4 py-16 sm:py-24">
      {/* Two-column layout */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 md:grid-cols-2">
        <div>
          <h1 className="text-balance text-4xl font-semibold sm:text-5xl">TruthAI: Multi‑Agent Authenticity Platform</h1>
          <p className="text-pretty mt-4 text-base text-foreground/70 sm:text-lg">
            Real‑time AI agents validate text, images, and videos, backed by retrieval‑augmented fact‑checking,
            credibility scoring, and clear explanations anyone can understand.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <Button asChild>
              <Link href="/detect">Try Demo</Link>
            </Button>
            <Button variant="secondary" asChild>
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
        <div>
          <div className="overflow-hidden rounded-xl border border-border/60 bg-card/60 shadow-lg">
            <video
              className="aspect-video w-full rounded-xl object-cover"
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20video%20-%20Made%20with%20Clipchamp%20%281%29-k4ElF7CmiHrk4P5eMkfTc4dMY0WtII.mp4"
              poster="/images/hero-poster.jpg"
              autoPlay
              muted
              loop
              playsInline
              aria-label="Demo video: Fake News Detection flow"
            />
          </div>
        </div>
      </div>

      {/* Flow visualization */}
      <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {[
          { title: "Text / URL", desc: "Articles & claims" },
          { title: "Image", desc: "Photos & face swaps" },
          { title: "Video", desc: "Clips & deepfakes" },
        ].map((item, i) => (
          <div key={i} className="rounded-lg border border-border/60 bg-card/60 p-4 backdrop-blur">
            <h3 className="text-sm font-medium">{item.title}</h3>
            <p className="mt-1 text-sm text-foreground/70">{item.desc}</p>
            <div className="mt-3 h-1 w-full rounded-full bg-secondary">
              <div
                className="h-1 rounded-full shadow-[0_0_12px_var(--color-primary)]"
                style={{
                  width: `${(i + 1) * 30}%`,
                  background: "var(--color-primary)",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
