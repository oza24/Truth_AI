"use client"

import type React from "react"
import Link from "next/link"
import { useState } from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function LoginForm() {
  const [loading, setLoading] = useState(false)

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    try {
      const form = e.target as HTMLFormElement
      const data = new FormData(form)
      const email = String(data.get("email") || "")
      const password = String(data.get("password") || "")
      if (!email || !password) return
      await new Promise((r) => setTimeout(r, 600)) // mock
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="mx-auto w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-balance">Log in</CardTitle>
        <CardDescription>Access your dashboard to analyze text, images, and videos.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={onSubmit} className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" required placeholder="you@example.com" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" name="password" type="password" required placeholder="••••••••" />
          </div>
          <Button type="submit" disabled={loading}>
            {loading ? "Signing in..." : "Sign in"}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="text-sm">
        <span className="text-muted-foreground">No account?</span>
        <Link href="/signup" className="ml-2 underline underline-offset-4">
          Create one
        </Link>
      </CardFooter>
    </Card>
  )
}

export default LoginForm
