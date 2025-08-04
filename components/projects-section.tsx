"use client"

import { FolderKanban, Eye } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
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
import { useState } from "react"
import { useLanguage } from "@/hooks/useLanguage"
import { Carousel } from "@/components/carousel"

interface Project {
  id: string
  title: string
  titleEn: string
  category: string
  categoryEn: string
  description: string
  descriptionEn: string
  details: string[]
  detailsEn: string[]
}

const projects: Project[] = [
  {
    id: "proj1",
    title: "Projeto 'ConnectCorp'",
    titleEn: "Project 'ConnectCorp'",
    category: "Implementação de Rede Corporativa",
    categoryEn: "Corporate Network Implementation",
    description:
      "Liderança na implementação de uma rede corporativa completa para empresa de 500 funcionários, incluindo cabeamento estruturado, equipamentos e segurança.",
    descriptionEn:
      "Led the implementation of a complete corporate network for a 500-employee company, including structured cabling, equipment and security.",
    details: [
      "Instalação de mais de 800 pontos de rede certificados.",
      "Configuração de 25 switches gerenciáveis e 8 roteadores.",
      "Implementação de solução de backup e redundância.",
    ],
    detailsEn: [
      "Installation of over 800 certified network points.",
      "Configuration of 25 managed switches and 8 routers.",
      "Implementation of backup and redundancy solution.",
    ],
  },
  {
    id: "proj2",
    title: "Modernização de Infraestrutura Legacy",
    titleEn: "Legacy Infrastructure Modernization",
    category: "Upgrade e Otimização",
    categoryEn: "Upgrade and Optimization",
    description:
      "Modernização completa de infraestrutura de rede legacy, migrando sistemas antigos para tecnologias atuais com zero downtime.",
    descriptionEn:
      "Complete modernization of legacy network infrastructure, migrating old systems to current technologies with zero downtime.",
    details: [
      "Migração gradual sem interrupção dos serviços.",
      "Aumento de 300% na velocidade de transferência.",
      "Implementação de monitoramento proativo 24/7.",
    ],
    detailsEn: [
      "Gradual migration without service interruption.",
      "300% increase in transfer speed.",
      "Implementation of 24/7 proactive monitoring.",
    ],
  },
  {
    id: "proj3",
    title: "Rede Segura Multi-Filial",
    titleEn: "Secure Multi-Branch Network",
    category: "Conectividade Empresarial",
    categoryEn: "Enterprise Connectivity",
    description: "Implementação de rede segura conectando 8 filiais através de VPN e links dedicados.",
    descriptionEn: "Implementation of secure network connecting 8 branches through VPN and dedicated links.",
    details: [
      "Configuração de túneis VPN seguros entre filiais.",
      "Implementação de políticas de segurança centralizadas.",
      "Monitoramento unificado de toda a infraestrutura.",
    ],
    detailsEn: [
      "Configuration of secure VPN tunnels between branches.",
      "Implementation of centralized security policies.",
      "Unified monitoring of entire infrastructure.",
    ],
  },
]

export function ProjectsSection() {
  const { t, language } = useLanguage()
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section id="projetos" className="py-16 sm:py-20 px-4 bg-muted">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-foreground">{t.projects.title}</h2>
          <p className="text-lg sm:text-xl text-muted-foreground font-medium">{t.projects.subtitle}</p>
        </div>

        <Carousel itemWidthClass="w-full sm:w-1/2 lg:w-1/3" gapClass="gap-6 sm:gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="bg-card border-2 border-border hover:border-primary transition-all shadow-sm hover:shadow-md"
            >
              <CardHeader className="pb-3 sm:pb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-lg flex items-center justify-center mb-2 sm:mb-3">
                  <FolderKanban className="h-5 w-5 sm:h-6 sm:w-6 text-primary-foreground" />
                </div>
                <Badge
                  variant="secondary"
                  className="bg-secondary text-secondary-foreground font-semibold text-xs mb-2"
                >
                  {language === "pt" ? project.category : project.categoryEn}
                </Badge>
                <CardTitle className="text-base sm:text-lg font-bold text-foreground leading-tight">
                  {language === "pt" ? project.title : project.titleEn}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 sm:space-y-4">
                <p className="text-xs sm:text-sm text-muted-foreground font-medium leading-relaxed">
                  {language === "pt" ? project.description : project.descriptionEn}
                </p>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      size="sm"
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-xs sm:text-sm btn-focus"
                      onClick={() => setSelectedProject(project)}
                    >
                      <Eye className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                      {t.projects.viewDetails}
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bg-card border-2 border-border max-w-2xl mx-4 max-h-[90vh] overflow-y-auto scrollbar-thin">
                    <DialogHeader>
                      <DialogTitle className="text-foreground font-bold text-base sm:text-lg">
                        {selectedProject && (language === "pt" ? selectedProject.title : selectedProject.titleEn)}
                      </DialogTitle>
                      <DialogDescription className="font-semibold text-muted-foreground text-sm">
                        {selectedProject && (language === "pt" ? selectedProject.category : selectedProject.categoryEn)}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <p className="text-muted-foreground font-medium leading-relaxed text-sm sm:text-base">
                        {selectedProject &&
                          (language === "pt" ? selectedProject.description : selectedProject.descriptionEn)}
                      </p>
                      <div className="bg-muted p-3 sm:p-4 rounded-lg border border-border">
                        <h4 className="font-bold mb-2 text-foreground text-sm sm:text-base">Detalhes do Projeto:</h4>
                        <ul className="text-xs sm:text-sm text-muted-foreground font-medium space-y-1">
                          {selectedProject &&
                            (language === "pt" ? selectedProject.details : selectedProject.detailsEn).map(
                              (detail, index) => <li key={index}>• {detail}</li>,
                            )}
                        </ul>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ))}
        </Carousel>
      </div>
    </section>
  )
}
