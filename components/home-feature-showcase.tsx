"use client"

import Image from "next/image"

export default function HomeFeatureShowcase() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="grid items-center gap-8 md:grid-cols-2">
        {/* Video block */}
        <div className="relative overflow-hidden rounded-xl border bg-card shadow-sm">
          <video
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20video%20-%20Made%20with%20Clipchamp%20%281%29-k4ElF7CmiHrk4P5eMkfTc4dMY0WtII.mp4"
            className="h-full w-full"
            autoPlay
            muted
            loop
            playsInline
            controls
            aria-label="Deepfake detection product walkthrough"
          />
        </div>

        {/* Image + copy */}
        <div className="flex flex-col gap-4">
          <div className="relative overflow-hidden rounded-xl border bg-card shadow-sm">
            <Image
              src="/images/deepfake_image.jpeg"
              alt="Deepfake detection example visuals"
              width={1024}
              height={640}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
          <div className="max-w-none">
            <h3 className="text-xl font-semibold">Deepfake & Fake News Detection</h3>
            <p className="text-muted-foreground">
              Analyze text, images, and videos with multi-signal models. Get an overall risk score, readable
              explanations, and visual evidence to understand why content may be manipulated.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
