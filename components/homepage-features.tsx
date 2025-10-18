import LottiePlayer from "./lottie-player"

export default function HomepageFeatures() {
  return (
    <section className="bg-background text-foreground">
      {/* Fake News + Lottie (Left: Animation, Right: Text) */}
      <div className="container mx-auto px-6 py-16 grid gap-20 md:grid-cols-2 md:gap-x-16 items-center">
        <div className="rounded-xl bg-card p-4 shadow-sm">
          <LottiePlayer
            path="/animations/clutter-free-news.json"
            className="w-full h-[260px] md:h-[340px]"
            ariaLabel="Animated visualization of clutter-free fake news analysis"
          />
        </div>
        <div className="space-y-3">
          <h2 className="text-2xl md:text-3xl font-semibold text-pretty">Fake News Detection</h2>
          <p className="text-muted-foreground leading-relaxed">
            Our models analyze writing patterns, source credibility, and cross‑references to identify misleading
            narratives. Enjoy a cleaner, clutter‑free reading experience with trustworthy context where it matters.
          </p>
          <ul className="list-disc pl-5 text-sm md:text-base text-muted-foreground">
            <li>Real‑time credibility scoring on headlines and articles</li>
            <li>Context cards with sources and fact‑checks</li>
            <li>Lightweight analysis that respects privacy</li>
          </ul>
        </div>
      </div>

      {/* Deepfake + image + optional video (Right: Image, Left: Text) */}
      <div className="container mx-auto px-6 pb-20 grid gap-10 md:grid-cols-2 md:gap-x-16 items-center">
        {/* Image on right */}
        <div className="rounded-xl overflow-hidden bg-card shadow-sm md:order-2">
          <img
            src="/images/deepfake_image.jpeg"
            alt="Deepfake Detection illustration with three faces highlighting manipulation"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Text on left */}
        <div className="space-y-3 md:order-1">
          <h2 className="text-2xl md:text-3xl font-semibold text-pretty">Deepfake Detection</h2>
          <p className="text-muted-foreground leading-relaxed">
            Detect visual manipulations in images and videos with forensic cues like frame inconsistencies, compression
            artifacts, and facial landmark drift. Get clear explanations and evidence overlays to understand the
            verdict.
          </p>
          <div className="rounded-xl overflow-hidden bg-card shadow-sm">
            {/* Optional video or additional content */}
          </div>
        </div>
      </div>
    </section>
  )
}
