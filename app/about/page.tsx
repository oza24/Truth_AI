import { NavBar } from "@/components/nav-bar"

export default function AboutPage() {
  return (
    <main>
      <NavBar />
      <section className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="text-2xl font-semibold">About & Research</h1>
        <p className="mt-2 max-w-3xl text-sm text-foreground/70">
          Misinformation erodes trust and harms democratic processes. Our mission is to make AI explainability
          accessible so anyone can verify claims with clarity and confidence.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="rounded-lg border border-border/60 bg-card/60 p-4">
            <h3 className="font-medium">Technologies</h3>
            <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-foreground/80">
              <li>Transformers (BERT, RoBERTa)</li>
              <li>CNN-based detectors (EfficientNet)</li>
              <li>Temporal models (XceptionNet)</li>
              <li>Trusted APIs for fact-checking</li>
              <li>Next.js + Tailwind UI</li>
            </ul>
          </div>
          <div className="rounded-lg border border-border/60 bg-card/60 p-4">
            <h3 className="font-medium">Team & Contributors</h3>
            <p className="mt-2 text-sm text-foreground/70">
              An open collaboration of researchers and engineers. Interested in contributing? Reach out on GitHub or
              email.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
