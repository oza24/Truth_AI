import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function DetectFeatureGallery() {
  return (
    <section className="mt-8">
      <h2 className="text-lg font-semibold">What it detects</h2>
      <p className="mt-1 text-sm text-foreground/70">
        Multi-modal analysis across text, images, and videos using layered forensic features.
      </p>
      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
        <Card className="rounded-lg border border-border/60 bg-card/60 transition-all hover:-translate-y-1 hover:shadow-lg">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Text Detection</CardTitle>
          </CardHeader>
          <CardContent>
            <img
              src="/images/features/text-detection.jpg"
              alt="Text being scanned for credibility and NLP cues"
              className="h-36 w-full rounded-md object-cover"
            />
            <p className="mt-2 text-xs text-foreground/70">
              Detect clickbait patterns, hedging, and claim verifiability signals.
            </p>
          </CardContent>
        </Card>
        <Card className="rounded-lg border border-border/60 bg-card/60 transition-all hover:-translate-y-1 hover:shadow-lg">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Image Detection</CardTitle>
          </CardHeader>
          <CardContent>
            <img
              src="/images/features/image-detection.jpg"
              alt="Face comparison and artifact detection for image forensics"
              className="h-36 w-full rounded-md object-cover"
            />
            <p className="mt-2 text-xs text-foreground/70">
              Spot manipulations via ELA, noise analysis, and EXIF/metadata checks.
            </p>
          </CardContent>
        </Card>
        <Card className="rounded-lg border border-border/60 bg-card/60 transition-all hover:-translate-y-1 hover:shadow-lg">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Video Detection</CardTitle>
          </CardHeader>
          <CardContent>
            <img
              src="/images/features/video-detection.jpg"
              alt="Deepfake frame analysis with facial landmarks and timeline markers"
              className="h-36 w-full rounded-md object-cover"
            />
            <p className="mt-2 text-xs text-foreground/70">
              Track facial landmarks, blink rates, and temporal artifacts in videos.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
