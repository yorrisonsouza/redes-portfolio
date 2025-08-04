"use client"

import { Shield, Users, Database, Search, Lock, Award } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/hooks/useLanguage"
import { Carousel } from "@/components/carousel"

export function ServicesSection() {
  const { t } = useLanguage()

  return (
    <section id="servicos" className="py-16 sm:py-20 px-4 bg-muted">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-foreground">{t.services.title}</h2>
          <p className="text-lg sm:text-xl text-muted-foreground font-medium">{t.services.subtitle}</p>
        </div>

        <Carousel itemWidthClass="w-full sm:w-1/2 lg:w-1/3" gapClass="gap-6 sm:gap-8">
          <Card className="bg-card border-2 border-border hover:border-primary transition-all shadow-sm hover:shadow-md">
            <CardHeader className="pb-3 sm:pb-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-primary-foreground" />
              </div>
              <CardTitle className="text-lg sm:text-xl font-bold text-foreground">
                {t.services.childCrimes.title}
              </CardTitle>
              <CardDescription className="text-muted-foreground font-medium text-sm sm:text-base">
                {t.services.childCrimes.desc}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 sm:space-y-3">
              {t.services.childCrimes.items.map((item, index) => (
                <div key={index} className="flex items-start text-xs sm:text-sm text-muted-foreground font-medium">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-muted-foreground rounded-full mr-2 sm:mr-3 mt-2 flex-shrink-0"></div>
                  {item}
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-card border-2 border-border hover:border-primary transition-all shadow-sm hover:shadow-md">
            <CardHeader className="pb-3 sm:pb-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                <Users className="h-6 w-6 sm:h-8 sm:w-8 text-primary-foreground" />
              </div>
              <CardTitle className="text-lg sm:text-xl font-bold text-foreground">
                {t.services.trafficking.title}
              </CardTitle>
              <CardDescription className="text-muted-foreground font-medium text-sm sm:text-base">
                {t.services.trafficking.desc}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 sm:space-y-3">
              {t.services.trafficking.items.map((item, index) => (
                <div key={index} className="flex items-start text-xs sm:text-sm text-muted-foreground font-medium">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-muted-foreground rounded-full mr-2 sm:mr-3 mt-2 flex-shrink-0"></div>
                  {item}
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-card border-2 border-border hover:border-primary transition-all shadow-sm hover:shadow-md">
            <CardHeader className="pb-3 sm:pb-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                <Database className="h-6 w-6 sm:h-8 sm:w-8 text-primary-foreground" />
              </div>
              <CardTitle className="text-lg sm:text-xl font-bold text-foreground">
                {t.services.judicial.title}
              </CardTitle>
              <CardDescription className="text-muted-foreground font-medium text-sm sm:text-base">
                {t.services.judicial.desc}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 sm:space-y-3">
              {t.services.judicial.items.map((item, index) => (
                <div key={index} className="flex items-start text-xs sm:text-sm text-muted-foreground font-medium">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-muted-foreground rounded-full mr-2 sm:mr-3 mt-2 flex-shrink-0"></div>
                  {item}
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-card border-2 border-border hover:border-primary transition-all shadow-sm hover:shadow-md">
            <CardHeader className="pb-3 sm:pb-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                <Search className="h-6 w-6 sm:h-8 sm:w-8 text-primary-foreground" />
              </div>
              <CardTitle className="text-lg sm:text-xl font-bold text-foreground">
                {t.services.investigation.title}
              </CardTitle>
              <CardDescription className="text-muted-foreground font-medium text-sm sm:text-base">
                {t.services.investigation.desc}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 sm:space-y-3">
              {t.services.investigation.items.map((item, index) => (
                <div key={index} className="flex items-start text-xs sm:text-sm text-muted-foreground font-medium">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-muted-foreground rounded-full mr-2 sm:mr-3 mt-2 flex-shrink-0"></div>
                  {item}
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-card border-2 border-border hover:border-primary transition-all shadow-sm hover:shadow-md">
            <CardHeader className="pb-3 sm:pb-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                <Lock className="h-6 w-6 sm:h-8 sm:w-8 text-primary-foreground" />
              </div>
              <CardTitle className="text-lg sm:text-xl font-bold text-foreground">
                {t.services.security.title}
              </CardTitle>
              <CardDescription className="text-muted-foreground font-medium text-sm sm:text-base">
                {t.services.security.desc}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 sm:space-y-3">
              {t.services.security.items.map((item, index) => (
                <div key={index} className="flex items-start text-xs sm:text-sm text-muted-foreground font-medium">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-muted-foreground rounded-full mr-2 sm:mr-3 mt-2 flex-shrink-0"></div>
                  {item}
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-card border-2 border-border hover:border-primary transition-all shadow-sm hover:shadow-md">
            <CardHeader className="pb-3 sm:pb-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                <Award className="h-6 w-6 sm:h-8 sm:w-8 text-primary-foreground" />
              </div>
              <CardTitle className="text-lg sm:text-xl font-bold text-foreground">
                {t.services.consulting.title}
              </CardTitle>
              <CardDescription className="text-muted-foreground font-medium text-sm sm:text-base">
                {t.services.consulting.desc}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 sm:space-y-3">
              {t.services.consulting.items.map((item, index) => (
                <div key={index} className="flex items-start text-xs sm:text-sm text-muted-foreground font-medium">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-muted-foreground rounded-full mr-2 sm:mr-3 mt-2 flex-shrink-0"></div>
                  {item}
                </div>
              ))}
            </CardContent>
          </Card>
        </Carousel>
      </div>
    </section>
  )
}
