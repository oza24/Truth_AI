"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Shield, Gauge, Info, Mail } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

const links = [
  { href: "/", label: "Home", icon: Shield },
  { href: "/detect", label: "Detect", icon: Gauge },
]

export function NavBar() {
  const pathname = usePathname()
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <nav className="mx-auto max-w-6xl px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo + Brand */}
          <Link href="/" className="font-mono text-sm tracking-wider group">
            <span className="inline-flex items-center gap-2">
              <img
                src="/images/truthai-logo.png"
                alt="TruthAI - AI-powered fake news and deepfake detection"
                className="h-30 w-30 md:h-25 md:w-25 object-contain transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(0,200,255,0.6)]"
              />
              <span className="text-lg font-semibold">TruthAI</span>
            </span>
          </Link>

          {/* Navigation Links */}
          <ul className="flex items-center gap-2">
            {links.map(({ href, label, icon: Icon }) => {
              const active = pathname === href
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={cn(
                      "inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors",
                      active ? "bg-secondary text-foreground" : "text-foreground/80 hover:text-foreground",
                    )}
                    aria-current={active ? "page" : undefined}
                  >
                    <Icon className="size-4" aria-hidden="true" />
                    <span className="hidden sm:inline">{label}</span>
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* Login / Sign up / Theme Toggle */}
          <div className="flex items-center gap-2">
            <Link
              href="/login"
              className="hidden sm:inline-flex items-center rounded-md px-3 py-2 text-sm text-foreground/80 hover:text-foreground"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="inline-flex items-center rounded-md bg-primary px-3 py-2 text-sm text-primary-foreground hover:opacity-90"
            >
              Sign up
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  )
}
