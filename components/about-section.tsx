"use client"

import { Building, Globe, Fingerprint, Database, Search, Lock, CheckCircle, Star } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/hooks/useLanguage"
import { Carousel } from "@/components/carousel"

export function AboutSection() {
  const { t, language } = useLanguage()

  return (
    <section id="sobre" className="py-16 sm:py-20 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-foreground">{t.about.title}</h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto font-medium leading-relaxed">
            {t.about.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="space-y-8">
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground flex items-center">
                <Building className="h-5 w-5 sm:h-6 sm:w-6 mr-3 text-primary" />
                {t.about.technical}
              </h3>
              <p className="text-muted-foreground leading-relaxed font-medium text-base sm:text-lg">
                {t.about.technicalDesc}
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground flex items-center">
                <Globe className="h-5 w-5 sm:h-6 sm:w-6 mr-3 text-primary" />
                {t.about.commitment}
              </h3>
              <p className="text-muted-foreground leading-relaxed font-medium text-base sm:text-lg">
                {t.about.commitmentDesc}
              </p>
            </div>

            <div className="bg-card rounded-xl p-4 sm:p-6 shadow-sm border border-border">
              <h3 className="font-semibold text-foreground mb-3 sm:mb-4 text-sm sm:text-base">
                {t.about.credentials.title}
              </h3>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-muted-foreground">
                    {t.about.credentials.chfi}
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-muted-foreground">
                    {t.about.credentials.iacis}
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-muted-foreground">
                    {t.about.credentials.interpol}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Star className="h-3 w-3 sm:h-5 sm:w-5 text-primary-foreground" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground">{t.about.story.title}</h3>
              </div>
              <div className="space-y-3 sm:space-y-5 text-muted-foreground leading-relaxed">
                <p className="text-sm sm:text-base font-medium">
                  {language === "pt" ? t.about.story.p1 : t.about.story.p1}
                </p>
                <p className="text-sm sm:text-base font-medium">
                  {language === "pt" ? t.about.story.p2 : t.about.story.p2}
                </p>
                <p className="text-sm sm:text-base font-medium">
                  {language === "pt" ? t.about.story.p3 : t.about.story.p3}
                </p>
                <p className="text-sm sm:text-base font-medium">
                  {language === "pt" ? t.about.story.p4 : t.about.story.p4}
                </p>
              </div>
            </div>

            <Carousel itemWidthClass="w-full sm:w-1/2" gapClass="gap-4 sm:gap-6">
              <Card className="bg-card border-2 border-border hover:border-primary transition-colors shadow-sm">
                <CardHeader className="pb-3 sm:pb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-muted rounded-lg flex items-center justify-center mb-2 sm:mb-3">
                    <Fingerprint className="h-5 w-5 sm:h-6 sm:w-6 text-muted-foreground" />
                  </div>
                  <CardTitle className="text-base sm:text-lg font-bold text-foreground">
                    Configuração de Redes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs sm:text-sm text-muted-foreground font-medium leading-relaxed">
                    Configuração e otimização de switches, roteadores e equipamentos de rede corporativa
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-2 border-border hover:border-primary transition-colors shadow-sm">
                <CardHeader className="pb-3 sm:pb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-muted rounded-lg flex items-center justify-center mb-2 sm:mb-3">
                    <Database className="h-5 w-5 sm:h-6 sm:w-6 text-muted-foreground" />
                  </div>
                  <CardTitle className="text-base sm:text-lg font-bold text-foreground">
                    Cabeamento Estruturado
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs sm:text-sm text-muted-foreground font-medium leading-relaxed">
                    Implementação de cabeamento estruturado e certificação de pontos de rede
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-2 border-border hover:border-primary transition-colors shadow-sm">
                <CardHeader className="pb-3 sm:pb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-muted rounded-lg flex items-center justify-center mb-2 sm:mb-3">
                    <Search className="h-5 w-5 sm:h-6 sm:w-6 text-muted-foreground" />
                  </div>
                  <CardTitle className="text-base sm:text-lg font-bold text-foreground">Monitoramento</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs sm:text-sm text-muted-foreground font-medium leading-relaxed">
                    Implementação de sistemas de monitoramento e análise de performance de rede
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-2 border-border hover:border-primary transition-colors shadow-sm">
                <CardHeader className="pb-3 sm:pb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-muted rounded-lg flex items-center justify-center mb-2 sm:mb-3">
                    <Lock className="h-5 w-5 sm:h-6 sm:w-6 text-muted-foreground" />
                  </div>
                  <CardTitle className="text-base sm:text-lg font-bold text-foreground">Segurança</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs sm:text-sm text-muted-foreground font-medium leading-relaxed">
                    Configuração de firewalls, VPNs e implementação de políticas de segurança
                  </p>
                </CardContent>
              </Card>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  )
}
