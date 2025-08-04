"use client"

import { Network } from "lucide-react"
import { useLanguage } from "@/hooks/useLanguage"

export function FooterSection() {
  const { t } = useLanguage()

  return (
    <footer className="py-10 sm:py-12 px-4 bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-primary-foreground rounded-lg flex items-center justify-center">
              <Network className="h-5 w-5 sm:h-6 sm:w-6 text-primary animate-pulse-slow" />
            </div>
            <div>
              <span className="font-bold text-lg sm:text-xl">Felipe Yorrison</span>
              <div className="text-muted-foreground font-medium text-xs sm:text-sm">Administrador de Redes Júnior</div>
            </div>
          </div>
          <div className="text-muted-foreground font-medium text-xs sm:text-sm">© 2024 - {t.footer.rights}</div>
        </div>
      </div>
    </footer>
  )
}
