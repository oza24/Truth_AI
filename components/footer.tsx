"use client"

import Link from "next/link"

export function Footer() {
  return (
    <footer className="mt-16 border-t border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <img src="/images/truthai-logo.png" alt="TruthAI" className="h-8 w-8 object-contain" />
              <span className="text-sm font-semibold">TruthAI</span>
            </div>
            <p className="mt-3 text-xs text-foreground/60">
              Multi‑agent authenticity platform for text, images, and videos. Retrieval‑backed and explainable.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Product</h4>
            <nav className="mt-3 grid gap-2 text-sm">
              <Link href="/detect" className="text-foreground/80 hover:text-foreground">
                Try the Demo
              </Link>
              <Link href="/how-it-works" className="text-foreground/80 hover:text-foreground">
                How it works
              </Link>
            </nav>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Company</h4>
            <nav className="mt-3 grid gap-2 text-sm">
              <Link href="/about" className="text-foreground/80 hover:text-foreground">
                About
              </Link>
              <Link href="/contact" className="text-foreground/80 hover:text-foreground">
                Contact
              </Link>
            </nav>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Stay in the loop</h4>
            <p className="mt-3 text-xs text-foreground/60">Get product updates and research notes.</p>
            <form
              className="mt-3 flex items-center gap-2"
              onSubmit={(e) => {
                e.preventDefault()
                alert("Thanks! We'll keep you posted.")
              }}
            >
              <input
                type="email"
                required
                placeholder="you@example.com"
                className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
                suppressHydrationWarning
              />
              <button
                type="submit"
                className="rounded-md bg-primary px-3 py-2 text-xs text-primary-foreground hover:opacity-90"
                suppressHydrationWarning
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-6 text-xs text-foreground/60 sm:flex-row">
          <p>© {new Date().getFullYear()} TruthAI. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <span>Privacy</span>
            <span>Terms</span>
          </div>
        </div>
      </div>
    </footer>
  )
}


