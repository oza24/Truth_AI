"use client"

import type React from "react"
import Link from "next/link"
import { useState } from "react"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function SignUpForm() {
  const [loading, setLoading] = useState(false)

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    try {
      const form = e.target as HTMLFormElement
      const data = new FormData(form)
      const name = String(data.get("name") || "")
      const email = String(data.get("email") || "")
      const password = String(data.get("password") || "")
      if (!name || !email || !password) return
      await new Promise((r) => setTimeout(r, 800)) // mock
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="mx-auto w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-balance">Create your account</CardTitle>
        <CardDescription>Start detecting deepfakes and fake news in minutes.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={onSubmit} className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" type="text" required placeholder="Jane Doe" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" required placeholder="you@example.com" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" name="password" type="password" required placeholder="••••••••" />
          </div>
          <Button type="submit" disabled={loading}>
            {loading ? "Creating..." : "Create account"}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="text-sm">
        <span className="text-muted-foreground">Already have an account?</span>
        <Link href="/login" className="ml-2 underline underline-offset-4">
          Log in
        </Link>
      </CardFooter>
    </Card>
  )
}

export default SignUpForm
