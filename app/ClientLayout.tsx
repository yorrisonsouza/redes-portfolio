"use client"

import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/lib/theme-context"
import { useLanguage } from "@/hooks/useLanguage"

const inter = Inter({ subsets: ["latin"] })

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { language } = useLanguage()

  return (
    <html lang={language} suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          {/* Background Video */}
          <div className="fixed inset-0 w-full h-full overflow-hidden -z-20">
            <video
              className="absolute top-1/2 left-1/2 w-full h-full object-cover transform -translate-x-1/2 -translate-y-1/2"
              src="/videos/fbi-action.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
            >
              Seu navegador não suporta a tag de vídeo.
            </video>
            {/* Overlay for readability */}
            <div className="absolute inset-0 bg-background/80 backdrop-blur-sm -z-10"></div>
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
