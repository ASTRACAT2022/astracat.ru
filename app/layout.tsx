import type React from "react"
import "@/app/globals.css"
import type { Metadata } from "next"

import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: "ASTRACAT - Инновационные решения для интернета",
  description:
    "ASTRACAT предлагает быстрый DNS, надежный прокси и бесплатный VPN для безопасного и быстрого интернета.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
