"use client"
import { SessionProvider } from "next-auth/react"

export default function SessionWrapper({
  Component, pageProps: { children }
}) {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  )
}