import { NavBar } from "@/components/nav-bar"

export default function HowItWorksPage() {
  return (
    <main>
      <NavBar />
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="text-center">
          <h1 className="text-balance text-3xl font-semibold md:text-4xl">How it works</h1>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-foreground/70">
            A multi‑agent pipeline analyzes your input and cross‑references facts to produce an evidence‑backed verdict.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          {[
            {
              title: "1. Ingest",
              desc:
                "You provide text, a URL, an image, or a video. We preprocess and extract entities, frames, and metadata.",
            },
            {
              title: "2. Analyze",
              desc:
                "Specialized agents run in parallel: NLP for style/claims, image/video forensics for tampering, and a retrieval agent for fact‑checking.",
            },
            {
              title: "3. Explain",
              desc:
                "Signals are fused into a credibility score with reasons, supporting sources, and simple visuals like evidence bars.",
            },
          ].map((s, i) => (
            <div key={i} className="rounded-lg border border-border/60 bg-card/60 p-5">
              <h2 className="text-base font-semibold">{s.title}</h2>
              <p className="mt-2 text-sm text-foreground/70">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-border/60 bg-card/60 p-5">
          <h2 className="text-lg font-semibold">Pipeline Overview</h2>
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-5">
            {["Input", "NLP Agent", "Vision Agent", "Retrieval Agent", "Verdict"].map((stage, i) => (
              <div key={i} className="rounded-md border border-border/60 bg-background p-4 text-center text-sm">
                {stage}
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-foreground/60">
            Note: This demo simulates outputs for illustration. Integrations with production‑grade models and APIs can be
            added as needed.
          </p>
        </div>
      </section>
    </main>
  )
}



