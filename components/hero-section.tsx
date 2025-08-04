"use client"

import Image from "next/image"
import { Network, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/hooks/useLanguage"

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start space-x-3">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-muted-foreground">
                {t.hero.specialist}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
              {t.hero.title}
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed font-medium">
              {t.hero.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 sm:px-8 text-sm sm:text-base btn-focus"
              >
                <Network className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                {t.hero.consultation}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-border text-foreground hover:bg-accent font-semibold px-6 sm:px-8 bg-transparent text-sm sm:text-base btn-focus"
              >
                <FileText className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                {t.hero.portfolio}
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-6 sm:pt-8">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-1">80+</div>
                <div className="text-xs sm:text-sm font-medium text-muted-foreground uppercase tracking-wide">
                  {t.hero.stats.cases}
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-1">99.8%</div>
                <div className="text-xs sm:text-sm font-medium text-muted-foreground uppercase tracking-wide">
                  {t.hero.stats.success}
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-1">5+</div>
                <div className="text-xs sm:text-sm font-medium text-muted-foreground uppercase tracking-wide">
                  {t.hero.stats.experience}
                </div>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative z-10 bg-card rounded-2xl p-2 shadow-xl max-w-md w-full">
              <Image
                src="/images/felipe-profile.jpg"
                alt="Felipe Yorrison - Administrador de Redes"
                width={500}
                height={600}
                className="rounded-xl w-full h-auto object-cover"
                priority
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-border/50 to-muted/50 rounded-2xl blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
