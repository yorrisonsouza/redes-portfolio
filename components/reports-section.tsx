"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { FileText, Download, Eye, Lock, Globe, TrendingUp, Users, Shield } from "lucide-react"
import { useLanguage } from "@/hooks/useLanguage"
import { Carousel } from "@/components/carousel"

interface Report {
  id: string
  title: string
  titleEn: string
  date: string
  type: "confidential" | "public"
  category: string
  categoryEn: string
  summary: string
  summaryEn: string
  stats?: {
    cases: number
    arrests: number
    victims: number
  }
}

const reports: Report[] = [
  {
    id: "1",
    title: "Relatório Anual de Infraestrutura de Redes 2024",
    titleEn: "Annual Network Infrastructure Report 2024",
    date: "2024-01-15",
    type: "public",
    category: "Estatísticas Gerais",
    categoryEn: "General Statistics",
    summary: "Análise completa dos projetos implementados em 2024, incluindo métricas de performance e uptime.",
    summaryEn: "Complete analysis of projects implemented in 2024, including performance metrics and uptime.",
    stats: { cases: 85, arrests: 62, victims: 156 },
  },
  {
    id: "2",
    title: "Projeto ConnectCorp - Relatório Técnico",
    titleEn: "ConnectCorp Project - Technical Report",
    date: "2024-02-28",
    type: "confidential",
    category: "Implementação Corporativa",
    categoryEn: "Corporate Implementation",
    summary: "Documentação técnica da implementação de rede corporativa para empresa de 500 funcionários.",
    summaryEn: "Technical documentation of corporate network implementation for 500-employee company.",
    stats: { cases: 28, arrests: 18, victims: 89 },
  },
  {
    id: "3",
    title: "Análise de Performance de Redes Wireless",
    titleEn: "Wireless Network Performance Analysis",
    date: "2024-03-10",
    type: "public",
    category: "Pesquisa e Desenvolvimento",
    categoryEn: "Research and Development",
    summary: "Estudo sobre otimização de redes wireless corporativas e implementação de novas tecnologias.",
    summaryEn: "Study on corporate wireless network optimization and implementation of new technologies.",
    stats: { cases: 45, arrests: 23, victims: 67 },
  },
]

export function ReportsSection() {
  const { t, language } = useLanguage()
  const [selectedReport, setSelectedReport] = useState<Report | null>(null)

  return (
    <section id="relatorios" className="py-16 sm:py-20 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-foreground">{t.reports.title}</h2>
          <p className="text-lg sm:text-xl text-muted-foreground font-medium">{t.reports.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          <Card className="bg-card border-2 border-border shadow-sm">
            <CardHeader className="pb-3 sm:pb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-lg flex items-center justify-center mb-2 sm:mb-3">
                <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 text-primary-foreground" />
              </div>
              <CardTitle className="text-xl sm:text-2xl font-bold text-foreground">2024</CardTitle>
              <CardDescription className="font-semibold text-muted-foreground text-sm sm:text-base">
                {t.reports.casesInvestigated}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl sm:text-4xl font-bold text-foreground">80+</div>
            </CardContent>
          </Card>

          <Card className="bg-card border-2 border-border shadow-sm">
            <CardHeader className="pb-3 sm:pb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-lg flex items-center justify-center mb-2 sm:mb-3">
                <Users className="h-5 w-5 sm:h-6 sm:w-6 text-primary-foreground" />
              </div>
              <CardTitle className="text-xl sm:text-2xl font-bold text-foreground">65</CardTitle>
              <CardDescription className="font-semibold text-muted-foreground text-sm sm:text-base">
                {t.reports.criminalsArrested}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl sm:text-4xl font-bold text-foreground">99.8%</div>
              <div className="text-xs sm:text-sm font-semibold text-muted-foreground">{t.reports.convictionRate}</div>
            </CardContent>
          </Card>

          <Card className="bg-card border-2 border-border shadow-sm sm:col-span-2 lg:col-span-1">
            <CardHeader className="pb-3 sm:pb-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-muted rounded-lg flex items-center justify-center mb-2 sm:mb-3">
                <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-primary-foreground" />
              </div>
              <CardTitle className="text-xl sm:text-2xl font-bold text-foreground">2.5K+</CardTitle>
              <CardDescription className="font-semibold text-muted-foreground text-sm sm:text-base">
                {t.reports.victimsProtected}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl sm:text-4xl font-bold text-foreground">2h</div>
              <div className="text-xs sm:text-sm font-semibold text-muted-foreground">{t.reports.avgResponseTime}</div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6 sm:space-y-8">
          <h3 className="text-xl sm:text-2xl font-bold text-foreground">{t.reports.recent}</h3>

          <Carousel itemWidthClass="w-full sm:w-1/2 lg:w-1/3" gapClass="gap-6 sm:gap-8">
            {reports.map((report) => (
              <Card
                key={report.id}
                className="bg-card border-2 border-border hover:border-primary transition-all shadow-sm hover:shadow-md"
              >
                <CardHeader className="pb-3 sm:pb-4">
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-muted rounded-lg flex items-center justify-center">
                      <FileText className="h-5 w-5 sm:h-6 sm:w-6 text-muted-foreground" />
                    </div>
                    <Badge
                      variant={report.type === "public" ? "default" : "destructive"}
                      className={
                        report.type === "public"
                          ? "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 border-green-200 dark:border-green-700 font-semibold text-xs"
                          : "bg-destructive/10 text-destructive border-destructive/20 font-semibold text-xs"
                      }
                    >
                      {report.type === "public" ? (
                        <>
                          <Globe className="h-2 w-2 sm:h-3 sm:w-3 mr-1" /> {t.reports.public}
                        </>
                      ) : (
                        <>
                          <Lock className="h-2 w-2 sm:h-3 sm:w-3 mr-1" /> {t.reports.confidential}
                        </>
                      )}
                    </Badge>
                  </div>
                  <CardTitle className="text-base sm:text-lg font-bold text-foreground leading-tight">
                    {language === "pt" ? report.title : report.titleEn}
                  </CardTitle>
                  <CardDescription className="font-semibold text-muted-foreground text-xs sm:text-sm">
                    {language === "pt" ? report.category : report.categoryEn} • {report.date}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 sm:space-y-4">
                  <p className="text-xs sm:text-sm text-muted-foreground font-medium leading-relaxed">
                    {language === "pt" ? report.summary : report.summaryEn}
                  </p>

                  {report.stats && (
                    <div className="grid grid-cols-3 gap-2 text-xs bg-muted p-2 sm:p-3 rounded-lg">
                      <div className="text-center">
                        <div className="font-bold text-foreground">{report.stats.cases}</div>
                        <div className="text-muted-foreground font-semibold text-xs">Projetos</div>
                      </div>
                      <div className="text-center">
                        <div className="font-bold text-foreground">{report.stats.arrests}</div>
                        <div className="text-muted-foreground font-semibold text-xs">Redes</div>
                      </div>
                      <div className="text-center">
                        <div className="font-bold text-foreground">{report.stats.victims}</div>
                        <div className="text-muted-foreground font-semibold text-xs">Usuários</div>
                      </div>
                    </div>
                  )}

                  <div className="flex gap-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          size="sm"
                          className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-xs sm:text-sm btn-focus"
                          onClick={() => setSelectedReport(report)}
                        >
                          <Eye className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                          {t.reports.viewReport}
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="bg-card border-2 border-border max-w-2xl mx-4 max-h-[90vh] overflow-y-auto scrollbar-thin">
                        <DialogHeader>
                          <DialogTitle className="text-foreground font-bold text-base sm:text-lg">
                            {selectedReport && (language === "pt" ? selectedReport.title : selectedReport.titleEn)}
                          </DialogTitle>
                          <DialogDescription className="font-semibold text-muted-foreground text-sm">
                            {selectedReport &&
                              (language === "pt" ? selectedReport.category : selectedReport.categoryEn)}{" "}
                            • {selectedReport?.date}
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4">
                          <p className="text-muted-foreground font-medium leading-relaxed text-sm sm:text-base">
                            {selectedReport && (language === "pt" ? selectedReport.summary : selectedReport.summaryEn)}
                          </p>

                          {selectedReport?.stats && (
                            <div className="grid grid-cols-3 gap-3 sm:gap-4 p-3 sm:p-4 bg-muted rounded-lg border border-border">
                              <div className="text-center">
                                <div className="text-lg sm:text-2xl font-bold text-foreground">
                                  {selectedReport.stats.cases}
                                </div>
                                <div className="text-xs sm:text-sm font-semibold text-muted-foreground">
                                  Projetos Implementados
                                </div>
                              </div>
                              <div className="text-center">
                                <div className="text-lg sm:text-2xl font-bold text-foreground">
                                  {selectedReport.stats.arrests}
                                </div>
                                <div className="text-xs sm:text-sm font-semibold text-muted-foreground">
                                  Redes Configuradas
                                </div>
                              </div>
                              <div className="text-center">
                                <div className="text-lg sm:text-2xl font-bold text-foreground">
                                  {selectedReport.stats.victims}
                                </div>
                                <div className="text-xs sm:text-sm font-semibold text-muted-foreground">
                                  Usuários Conectados
                                </div>
                              </div>
                            </div>
                          )}

                          <div className="bg-muted p-3 sm:p-4 rounded-lg border border-border">
                            <h4 className="font-bold mb-2 text-foreground text-sm sm:text-base">
                              {t.reports.methodology}
                            </h4>
                            <ul className="text-xs sm:text-sm text-muted-foreground font-medium space-y-1">
                              {t.reports.methodologyList.map((item, index) => (
                                <li key={index}>• {item}</li>
                              ))}
                            </ul>
                          </div>

                          {selectedReport?.type === "confidential" && (
                            <div className="bg-destructive/10 border-2 border-destructive/20 p-3 rounded-lg">
                              <div className="flex items-center text-destructive text-xs sm:text-sm font-semibold">
                                <Lock className="h-3 w-3 sm:h-4 sm:w-4 mr-2 flex-shrink-0" />
                                {t.reports.confidentialWarning}
                              </div>
                            </div>
                          )}
                        </div>
                      </DialogContent>
                    </Dialog>

                    <Button
                      size="sm"
                      variant="outline"
                      className="border-2 border-border hover:bg-accent font-semibold bg-transparent p-2 btn-focus"
                    >
                      <Download className="h-3 w-3 sm:h-4 sm:w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  )
}
