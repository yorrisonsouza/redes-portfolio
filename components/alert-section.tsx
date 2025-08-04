"use client"

import { AlertTriangle, Phone, Globe, Shield, MessageSquare, Landmark } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/hooks/useLanguage"

export function AlertSection() {
  const { t } = useLanguage()

  return (
    <section className="py-16 sm:py-20 px-4 bg-destructive/5 border-t-4 border-destructive/20">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex flex-col sm:flex-row items-center justify-center mb-4 sm:mb-6">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-destructive rounded-xl flex items-center justify-center mb-3 sm:mb-0 sm:mr-4">
              <AlertTriangle className="h-6 w-6 sm:h-8 sm:w-8 text-destructive-foreground" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-destructive">{t.alert.title}</h2>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-foreground">{t.alert.subtitle}</h3>
          <p className="text-muted-foreground font-medium text-base sm:text-lg">
            Entre em contato para soluções personalizadas em infraestrutura de redes. Todos os projetos são tratados com
            total profissionalismo e confidencialidade.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
          <Card className="bg-card border-2 border-destructive/20 shadow-sm">
            <CardHeader>
              <CardTitle className="text-destructive font-bold flex items-center text-lg sm:text-xl">
                <AlertTriangle className="h-5 w-5 sm:h-6 sm:w-6 mr-3" />
                {t.alert.dangers}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 sm:space-y-4">
                {t.alert.dangerList.map((danger, index) => (
                  <li key={index} className="flex items-start text-muted-foreground font-medium text-sm sm:text-base">
                    <span className="text-destructive mr-3 font-bold flex-shrink-0">•</span>
                    {danger}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card border-2 border-green-200 dark:border-green-800 shadow-sm">
            <CardHeader>
              <CardTitle className="text-green-700 dark:text-green-400 font-bold flex items-center text-lg sm:text-xl">
                <Shield className="h-5 w-5 sm:h-6 sm:w-6 mr-3" />
                {t.alert.protection}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 sm:space-y-4">
                {t.alert.protectionList.map((protection, index) => (
                  <li key={index} className="flex items-start text-muted-foreground font-medium text-sm sm:text-base">
                    <span className="text-green-600 dark:text-green-400 mr-3 font-bold flex-shrink-0">•</span>
                    {protection}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="bg-card rounded-2xl p-6 sm:p-12 border-2 border-border shadow-sm">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6">{t.alert.report}</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 border-2 border-blue-200 dark:border-blue-800">
                <Phone className="h-8 w-8 sm:h-10 sm:w-10 text-blue-600 dark:text-blue-400" />
              </div>
              <h4 className="font-semibold mb-2 text-foreground text-sm sm:text-base">Suporte Técnico 24/7</h4>
              <Button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 w-full text-sm sm:text-base btn-focus">
                (11) 9999-8888
              </Button>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 dark:bg-green-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 border-2 border-green-200 dark:border-green-800">
                <Globe className="h-8 w-8 sm:h-10 sm:w-10 text-green-600 dark:text-green-400" />
              </div>
              <h4 className="font-semibold mb-2 text-foreground text-sm sm:text-base">Orçamento Online</h4>
              <Button className="bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-800 w-full text-sm sm:text-base btn-focus">
                Solicitar Orçamento
              </Button>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-orange-100 dark:bg-orange-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 border-2 border-orange-200 dark:border-orange-800">
                <MessageSquare className="h-8 w-8 sm:h-10 sm:w-10 text-orange-600 dark:text-orange-400" />
              </div>
              <h4 className="font-semibold mb-2 text-foreground text-sm sm:text-base">Chat de Suporte</h4>
              <Button className="bg-orange-600 hover:bg-orange-700 dark:bg-orange-700 dark:hover:bg-orange-800 w-full text-sm sm:text-base btn-focus">
                Iniciar Chat
              </Button>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-purple-100 dark:bg-purple-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 border-2 border-purple-200 dark:border-purple-800">
                <Landmark className="h-8 w-8 sm:h-10 sm:w-10 text-purple-600 dark:text-purple-400" />
              </div>
              <h4 className="font-semibold mb-2 text-foreground text-sm sm:text-base">Consultoria Especializada</h4>
              <Button className="bg-purple-600 hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-800 w-full text-sm sm:text-base btn-focus">
                Agendar Reunião
              </Button>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-cyan-100 dark:bg-cyan-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 border-2 border-cyan-200 dark:border-cyan-800">
                <Shield className="h-8 w-8 sm:h-10 sm:w-10 text-cyan-600 dark:text-cyan-400" />
              </div>
              <h4 className="font-semibold mb-2 text-foreground text-sm sm:text-base">Auditoria de Segurança</h4>
              <Button className="bg-cyan-600 hover:bg-cyan-700 dark:bg-cyan-700 dark:hover:bg-cyan-800 w-full text-sm sm:text-base btn-focus">
                Solicitar Auditoria
              </Button>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-red-100 dark:bg-red-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 border-2 border-red-200 dark:border-red-800">
                <AlertTriangle className="h-8 w-8 sm:h-10 sm:w-10 text-red-600 dark:text-red-400" />
              </div>
              <h4 className="font-semibold mb-2 text-foreground text-sm sm:text-base">Suporte de Emergência</h4>
              <Button className="bg-red-600 hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-800 w-full text-sm sm:text-base btn-focus">
                (11) 9999-0000
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
