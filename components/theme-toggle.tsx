"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("theme") : null
    const preferDark = stored ? stored === "dark" : true
    const root = document.documentElement
    if (preferDark) root.classList.add("dark")
    else root.classList.remove("dark")
    setIsDark(preferDark)
    setMounted(true)
  }, [])

  function toggleTheme() {
    const next = !isDark
    const root = document.documentElement
    if (next) root.classList.add("dark")
    else root.classList.remove("dark")
    try {
      localStorage.setItem("theme", next ? "dark" : "light")
    } catch {}
    setIsDark(next)
  }

  if (!mounted) {
    // avoid hydration mismatch
    return (
      <button
        className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-card text-foreground/70"
        aria-label="Loading theme toggle"
        disabled
      >
        <span className="sr-only">Loading theme toggle</span>
      </button>
    )
  }

  return (
    <button
      onClick={toggleTheme}
      aria-pressed={isDark}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-card text-foreground hover:bg-secondary transition-colors"
    >
      <span className="sr-only">{isDark ? "Dark theme enabled" : "Light theme enabled"}</span>
      {isDark ? <Sun className="h-4 w-4" aria-hidden="true" /> : <Moon className="h-4 w-4" aria-hidden="true" />}
    </button>
  )
}
