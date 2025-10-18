import type { Metadata } from "next"
import { LoginForm } from "@/components/auth/login-form"

export const metadata: Metadata = {
  title: "Log in",
  description: "Log in to your account to access detection tools.",
}

export default function Page() {
  return (
    <main className="container mx-auto max-w-4xl px-4 py-10">
      <h1 className="mb-6 text-3xl font-semibold text-balance">Welcome back</h1>
      <LoginForm />
    </main>
  )
}
