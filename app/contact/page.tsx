"use client"

import type React from "react"

import { NavBar } from "@/components/nav-bar"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  const [sent, setSent] = useState(false)

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // For demo purposes only; wire this to a backend route or service later.
    setSent(true)
  }

  return (
    <main>
      <NavBar />
      <section className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="text-2xl font-semibold">Contact</h1>
        <p className="mt-2 text-sm text-foreground/70">Reach us via email or follow our work across platforms.</p>

        <div className="mt-6 space-y-2">
          <a className="block text-[var(--color-primary)] underline" href="mailto:hello@example.com">
            hello@example.com
          </a>
          <a
            className="block text-[var(--color-primary)] underline"
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="block text-[var(--color-primary)] underline"
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>

        <form onSubmit={onSubmit} className="mt-8 space-y-4 rounded-lg border border-border/60 bg-card/60 p-4">
          <div>
            <label className="block text-sm">
              Your message
              <textarea
                required
                rows={5}
                className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
                placeholder="Share feedback or flag misinformation..."
              />
            </label>
          </div>
          <Button type="submit">Send</Button>
          {sent && <p className="text-sm text-emerald-400">Thanks! We’ll get back to you.</p>}
        </form>
      </section>
    </main>
  )
}
