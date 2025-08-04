"use client"

import { Calendar, Search, Shield, Award, CheckCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/hooks/useLanguage"
import { Carousel } from "@/components/carousel"

export function ExperienceSection() {
  const { t } = useLanguage()

  return (
    <section id="experiencia" className="py-16 sm:py-20 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-foreground">{t.experience.title}</h2>
          <p className="text-lg sm:text-xl text-muted-foreground font-medium">{t.experience.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="space-y-8">
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border"></div>
              <div className="space-y-8">
                <div className="relative pl-16">
                  <div className="absolute left-0 top-0 w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="space-y-2">
                    <span className="text-sm font-bold text-muted-foreground uppercase tracking-wide">
                      2022 - Presente
                    </span>
                    <h3 className="text-xl font-bold text-foreground">{t.experience.current.title}</h3>
                    <p className="text-muted-foreground font-semibold">{t.experience.current.company}</p>
                    <p className="text-muted-foreground font-medium leading-relaxed">
                      {t.experience.current.description}
                    </p>
                  </div>
                </div>

                <div className="relative pl-16">
                  <div className="absolute left-0 top-0 w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                    <Search className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <div className="space-y-2">
                    <span className="text-sm font-bold text-muted-foreground uppercase tracking-wide">2020 - 2022</span>
                    <h3 className="text-xl font-bold text-foreground">{t.experience.previous.title}</h3>
                    <p className="text-muted-foreground font-semibold">{t.experience.previous.company}</p>
                    <p className="text-muted-foreground font-medium leading-relaxed">
                      {t.experience.previous.description}
                    </p>
                  </div>
                </div>

                <div className="relative pl-16">
                  <div className="absolute left-0 top-0 w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                    <Shield className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div className="space-y-2">
                    <span className="text-sm font-bold text-muted-foreground uppercase tracking-wide">2019 - 2020</span>
                    <h3 className="text-xl font-bold text-foreground">{t.experience.internship.title}</h3>
                    <p className="text-muted-foreground font-semibold">{t.experience.internship.company}</p>
                    <p className="text-muted-foreground font-medium leading-relaxed">
                      {t.experience.internship.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-muted rounded-2xl p-8 border border-border">
              <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center">
                <Award className="h-6 w-6 mr-3 text-primary" />
                {t.experience.certifications.title}
              </h3>
              <Carousel itemWidthClass="w-full" gapClass="gap-4">
                <div className="flex items-center space-x-4 p-3 bg-card rounded-lg border border-border">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-foreground font-semibold">{t.experience.certifications.chfi}</span>
                </div>
                <div className="flex items-center space-x-4 p-3 bg-card rounded-lg border border-border">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-foreground font-semibold">{t.experience.certifications.ceh}</span>
                </div>
                <div className="flex items-center space-x-4 p-3 bg-card rounded-lg border border-border">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-foreground font-semibold">{t.experience.certifications.mobile}</span>
                </div>
                <div className="flex items-center space-x-4 p-3 bg-card rounded-lg border border-border">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-foreground font-semibold">{t.experience.certifications.evidence}</span>
                </div>
                <div className="flex items-center space-x-4 p-3 bg-card rounded-lg border border-border">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-foreground font-semibold">{t.experience.certifications.cybercrime}</span>
                </div>
              </Carousel>
            </div>

            <div className="bg-muted rounded-2xl p-8 border border-border">
              <h3 className="text-2xl font-bold mb-6 text-foreground">{t.experience.tools.title}</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-bold mb-4 text-foreground">{t.experience.tools.forensicTools}</h4>
                  <Carousel itemWidthClass="w-1/2" gapClass="gap-3">
                    <Badge
                      variant="outline"
                      className="justify-center py-3 border-2 border-border text-muted-foreground font-semibold bg-card"
                    >
                      Cisco Catalyst
                    </Badge>
                    <Badge
                      variant="outline"
                      className="justify-center py-3 border-2 border-border text-muted-foreground font-semibold bg-card"
                    >
                      Ubiquiti UniFi
                    </Badge>
                    <Badge
                      variant="outline"
                      className="justify-center py-3 border-2 border-border text-muted-foreground font-semibold bg-card"
                    >
                      pfSense
                    </Badge>
                    <Badge
                      variant="outline"
                      className="justify-center py-3 border-2 border-border text-muted-foreground font-semibold bg-card"
                    >
                      MikroTik
                    </Badge>
                    <Badge
                      variant="outline"
                      className="justify-center py-3 border-2 border-border text-muted-foreground font-semibold bg-card"
                    >
                      PRTG Monitor
                    </Badge>
                    <Badge
                      variant="outline"
                      className="justify-center py-3 border-2 border-border text-muted-foreground font-semibold bg-card"
                    >
                      Wireshark
                    </Badge>
                    <Badge
                      variant="outline"
                      className="justify-center py-3 border-2 border-border text-muted-foreground font-semibold bg-card"
                    >
                      SolarWinds
                    </Badge>
                    <Badge
                      variant="outline"
                      className="justify-center py-3 border-2 border-border text-muted-foreground font-semibold bg-card"
                    >
                      Nagios
                    </Badge>
                  </Carousel>
                </div>

                <div>
                  <h4 className="text-lg font-bold mb-4 text-foreground">{t.experience.tools.languages}</h4>
                  <Carousel itemWidthClass="w-1/3" gapClass="gap-3">
                    <Badge
                      variant="outline"
                      className="justify-center py-3 border-2 border-primary text-primary font-bold bg-muted"
                    >
                      Python
                    </Badge>
                    <Badge
                      variant="outline"
                      className="justify-center py-3 border-2 border-primary text-primary font-bold bg-muted"
                    >
                      Bash
                    </Badge>
                    <Badge
                      variant="outline"
                      className="justify-center py-3 border-2 border-primary text-primary font-bold bg-muted"
                    >
                      PowerShell
                    </Badge>
                    <Badge
                      variant="outline"
                      className="justify-center py-3 border-2 border-primary text-primary font-bold bg-muted"
                    >
                      SQL
                    </Badge>
                    <Badge
                      variant="outline"
                      className="justify-center py-3 border-2 border-primary text-primary font-bold bg-muted"
                    >
                      JavaScript
                    </Badge>
                    <Badge
                      variant="outline"
                      className="justify-center py-3 border-2 border-primary text-primary font-bold bg-muted"
                    >
                      PHP
                    </Badge>
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
