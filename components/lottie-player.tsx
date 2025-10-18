"use client"

import { useEffect, useRef } from "react"
import lottie, { type AnimationItem } from "lottie-web"

type LottiePlayerProps = {
  path: string
  className?: string
  loop?: boolean
  autoplay?: boolean
  ariaLabel?: string
}

export default function LottiePlayer({
  path,
  className,
  loop = true,
  autoplay = true,
  ariaLabel = "Animated illustration",
}: LottiePlayerProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const animRef = useRef<AnimationItem | null>(null)

  useEffect(() => {
    if (!containerRef.current) return
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches

    animRef.current = lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg",
      loop: prefersReduced ? false : loop,
      autoplay: prefersReduced ? false : autoplay,
      path,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid meet",
        progressiveLoad: true,
      },
    })

    return () => {
      try {
        animRef.current?.destroy()
      } catch {}
    }
  }, [path, loop, autoplay])

  return <div ref={containerRef} aria-label={ariaLabel} role="img" className={className} />
}
