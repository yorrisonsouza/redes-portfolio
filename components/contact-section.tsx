"use client"

import { Mail, Phone, MapPin, Shield, CheckCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/hooks/useLanguage"

export function ContactSection() {
  const { t } = useLanguage()

  return (
    <section id="contato" className="py-16 sm:py-20 px-4 bg-muted">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-foreground">{t.contact.title}</h2>
          <p className="text-lg sm:text-xl text-muted-foreground font-medium">{t.contact.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center space-x-3 sm:space-x-4 p-4 sm:p-6 bg-card rounded-xl border-2 border-border">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-primary-foreground" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold text-foreground text-sm sm:text-base">{t.contact.email}</h3>
                  <p className="text-muted-foreground font-medium text-xs sm:text-sm break-all">
                    felipe.yorrison@networks.expert
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3 sm:space-x-4 p-4 sm:p-6 bg-card rounded-xl border-2 border-border">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-sm sm:text-base">{t.contact.phone}</h3>
                  <p className="text-muted-foreground font-medium text-xs sm:text-sm">+55 (11) 99999-9999</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 sm:space-x-4 p-4 sm:p-6 bg-card rounded-xl border-2 border-border">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-sm sm:text-base">{t.contact.location}</h3>
                  <p className="text-muted-foreground font-medium text-xs sm:text-sm">São Paulo, Brasil</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 sm:p-8 border-2 border-border">
              <h3 className="font-bold mb-3 sm:mb-4 text-foreground flex items-center text-sm sm:text-base">
                <Shield className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-primary" />
                {t.contact.specialized}
              </h3>
              <p className="text-muted-foreground font-medium mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                {t.contact.specializedDesc}
              </p>
              <div className="flex items-center text-muted-foreground font-semibold text-xs sm:text-sm">
                <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 mr-2 text-green-600 flex-shrink-0" />
                {t.contact.confidentiality}
              </div>
            </div>
          </div>

          <Card className="bg-card border-2 border-border shadow-sm">
            <CardHeader className="pb-4 sm:pb-6">
              <CardTitle className="text-xl sm:text-2xl font-bold text-foreground">
                {t.contact.requestConsult}
              </CardTitle>
              <CardDescription className="text-muted-foreground font-medium text-sm sm:text-base">
                {t.contact.consultDesc}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 sm:space-y-6">
              <div className="space-y-2">
                <label htmlFor="fullName" className="text-xs sm:text-sm font-bold text-foreground">
                  {t.contact.fullName}
                </label>
                <input
                  type="text"
                  id="fullName"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-input border-2 border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent font-medium text-foreground text-sm sm:text-base"
                  placeholder="Seu nome completo"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-xs sm:text-sm font-bold text-foreground">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-input border-2 border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent font-medium text-foreground text-sm sm:text-base"
                  placeholder="seu@email.com"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="caseType" className="text-xs sm:text-sm font-bold text-foreground">
                  {t.contact.caseType}
                </label>
                <select
                  id="caseType"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-input border-2 border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent font-medium text-foreground text-sm sm:text-base"
                >
                  <option>Implementação de rede</option>
                  <option>Segurança de redes</option>
                  <option>Suporte técnico</option>
                  <option>Consultoria especializada</option>
                  <option>Outro</option>
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-xs sm:text-sm font-bold text-foreground">
                  {t.contact.message}
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-input border-2 border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent font-medium text-foreground text-sm sm:text-base resize-none"
                  placeholder={t.contact.messagePlaceholder}
                ></textarea>
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 sm:py-4 text-sm sm:text-lg btn-focus">
                <Shield className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                {t.contact.sendRequest}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
