"use client"

import type React from "react"

import { Menu, X, ArrowUp, Network } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/hooks/useLanguage"
import { LanguageSwitcher } from "@/components/language-switcher"
import { ThemeToggle } from "@/components/theme-toggle"

// Import new section components
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { ExperienceSection } from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { ReportsSection } from "@/components/reports-section"
import { ContactSection } from "@/components/contact-section"
import { AlertSection } from "@/components/alert-section"
import { FooterSection } from "@/components/footer-section"

export default function NetworkPortfolio() {
  const { t, language } = useLanguage()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault()
    const targetId = href.substring(1)
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      const offset = 90
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = targetElement.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
    setMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen text-foreground transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50 shadow-sm">
        <div className="container mx-auto px-4 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-primary rounded-lg flex items-center justify-center">
                <Network className="h-5 w-5 sm:h-6 sm:w-6 text-primary-foreground animate-pulse-slow" />
              </div>
              <div>
                <span className="text-lg sm:text-xl font-bold text-foreground">Felipe Yorrison</span>
                <div className="text-xs sm:text-sm text-muted-foreground font-medium">
                  Administrador de Redes Júnior
                </div>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              <Link
                href="#sobre"
                className="text-muted-foreground hover:text-foreground font-medium transition-colors text-sm lg:text-base"
                onClick={(e) => handleNavLinkClick(e, "#sobre")}
              >
                {t.nav.about}
              </Link>
              <Link
                href="#servicos"
                className="text-muted-foreground hover:text-foreground font-medium transition-colors text-sm lg:text-base"
                onClick={(e) => handleNavLinkClick(e, "#servicos")}
              >
                {t.nav.services}
              </Link>
              <Link
                href="#experiencia"
                className="text-muted-foreground hover:text-foreground font-medium transition-colors text-sm lg:text-base"
                onClick={(e) => handleNavLinkClick(e, "#experiencia")}
              >
                {t.nav.experience}
              </Link>
              <Link
                href="#projetos"
                className="text-muted-foreground hover:text-foreground font-medium transition-colors text-sm lg:text-base"
                onClick={(e) => handleNavLinkClick(e, "#projetos")}
              >
                {t.nav.projects}
              </Link>
              <Link
                href="#relatorios"
                className="text-muted-foreground hover:text-foreground font-medium transition-colors text-sm lg:text-base"
                onClick={(e) => handleNavLinkClick(e, "#relatorios")}
              >
                {t.nav.reports}
              </Link>
              <Link
                href="#contato"
                className="text-muted-foreground hover:text-foreground font-medium transition-colors text-sm lg:text-base"
                onClick={(e) => handleNavLinkClick(e, "#contato")}
              >
                {t.nav.contact}
              </Link>
              <div className="flex items-center space-x-2">
                <LanguageSwitcher />
                <ThemeToggle />
              </div>
            </div>

            <div className="md:hidden flex items-center space-x-2">
              <LanguageSwitcher />
              <ThemeToggle />
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="hover:bg-accent w-9 h-9 p-0"
                aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
              >
                {mobileMenuOpen ? (
                  <X className="h-5 w-5 text-muted-foreground" />
                ) : (
                  <Menu className="h-5 w-5 text-muted-foreground" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-border animate-fade-in">
              <div className="flex flex-col space-y-3 pt-4">
                <Link
                  href="#sobre"
                  className="text-muted-foreground hover:text-foreground font-medium py-2 text-base"
                  onClick={(e) => handleNavLinkClick(e, "#sobre")}
                >
                  {t.nav.about}
                </Link>
                <Link
                  href="#servicos"
                  className="text-muted-foreground hover:text-foreground font-medium py-2 text-base"
                  onClick={(e) => handleNavLinkClick(e, "#servicos")}
                >
                  {t.nav.services}
                </Link>
                <Link
                  href="#experiencia"
                  className="text-muted-foreground hover:text-foreground font-medium py-2 text-base"
                  onClick={(e) => handleNavLinkClick(e, "#experiencia")}
                >
                  {t.nav.experience}
                </Link>
                <Link
                  href="#projetos"
                  className="text-muted-foreground hover:text-foreground font-medium py-2 text-base"
                  onClick={(e) => handleNavLinkClick(e, "#projetos")}
                >
                  {t.nav.projects}
                </Link>
                <Link
                  href="#relatorios"
                  className="text-muted-foreground hover:text-foreground font-medium py-2 text-base"
                  onClick={(e) => handleNavLinkClick(e, "#relatorios")}
                >
                  {t.nav.reports}
                </Link>
                <Link
                  href="#contato"
                  className="text-muted-foreground hover:text-foreground font-medium py-2 text-base"
                  onClick={(e) => handleNavLinkClick(e, "#contato")}
                >
                  {t.nav.contact}
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      <main key={language}>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ExperienceSection />
        <ProjectsSection />
        <ReportsSection />
        <ContactSection />
        <AlertSection />
      </main>
      <FooterSection />

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg z-50 btn-focus"
          size="sm"
          aria-label="Voltar ao topo"
        >
          <ArrowUp className="h-4 w-4 sm:h-5 sm:w-5" />
        </Button>
      )}
    </div>
  )
}
