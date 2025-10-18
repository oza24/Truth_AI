import type { Metadata } from "next"
import { SignUpForm } from "@/components/auth/signup-form"

export const metadata: Metadata = {
  title: "Sign up",
  description: "Create an account to start detecting fake news and deepfakes.",
}

export default function Page() {
  return (
    <main className="container mx-auto max-w-4xl px-4 py-10">
      <h1 className="mb-6 text-3xl font-semibold text-balance">Create your account</h1>
      <SignUpForm />
    </main>
  )
}
