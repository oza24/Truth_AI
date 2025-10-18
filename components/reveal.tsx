"use client"

import type React from "react"
import type { JSX } from "react"
import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

type Props = {
  as?: keyof JSX.IntrinsicElements
  className?: string
  children: React.ReactNode
  delayMs?: number
  direction?: "up" | "down" | "left" | "right"
  once?: boolean
}

export default function Reveal({
  as = "div",
  className,
  children,
  delayMs = 60,
  direction = "up",
  once = true,
}: Props) {
  const Comp = as as any
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Respect reduced motion
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (prefersReduced) {
      setVisible(true)
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const timer = setTimeout(() => setVisible(true), delayMs)
            if (once) io.unobserve(entry.target)
            // Cleanup timer when leaving viewport if not once
            if (!once) {
              return () => clearTimeout(timer)
            }
          } else if (!once) {
            setVisible(false)
          }
        })
      },
      { threshold: 0.12 },
    )

    io.observe(el)
    return () => io.disconnect()
  }, [delayMs, once])

  const initialByDirection =
    direction === "up"
      ? "opacity-0 translate-y-4"
      : direction === "down"
        ? "opacity-0 -translate-y-4"
        : direction === "left"
          ? "opacity-0 translate-x-4"
          : "opacity-0 -translate-x-4"

  return (
    <Comp
      ref={ref}
      data-visible={visible ? "true" : "false"}
      data-direction={direction}
      className={cn(
        // Base animation styles
        "transform-gpu transition-all duration-700 ease-out will-change-transform",
        visible ? "opacity-100 translate-x-0 translate-y-0" : initialByDirection,
        className,
      )}
    >
      {children}
    </Comp>
  )
}
