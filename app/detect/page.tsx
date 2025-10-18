import { NavBar } from "@/components/nav-bar"
import { DetectionForm } from "@/components/detection-form"

export default function DetectPage() {
  return (
    <main>
      <NavBar />
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="text-center">
          <h1 className="text-balance text-3xl font-semibold md:text-4xl">Fake News & Deepfake Detection AI</h1>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-foreground/70">
            Upload text, images, or videos to instantly get a risk score, clear explanations, and visual evidence.
          </p>
        </div>

        <div className="mt-8">
          <DetectionForm />
        </div>
      </section>
    </main>
  )
}
