"use client"

import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs"
import { Button } from "@/components/ui/button"

export default function LoginPage() {
  return (
    <main className="h-dvh flex flex-col items-center gap-6 text-4xl p-4">
      <h1>Repair Shop Login</h1>
      <Button asChild>
        <LoginLink>Sign in</LoginLink>
      </Button>
      {/* <Button asChild>
        <RegisterLink>Sign up</RegisterLink>
      </Button> */}
    </main>
  )
}
