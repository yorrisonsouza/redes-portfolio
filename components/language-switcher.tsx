"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/hooks/useLanguage"

export function LanguageSwitcher() {
  const { language, changeLanguage } = useLanguage()

  return (
    <div className="flex items-center space-x-1 bg-muted rounded-lg p-1">
      <Button
        variant={language === "pt" ? "default" : "ghost"}
        size="sm"
        onClick={() => changeLanguage("pt")}
        className={
          language === "pt"
            ? "bg-primary text-primary-foreground hover:bg-primary/90"
            : "hover:bg-accent text-muted-foreground"
        }
      >
        PT
      </Button>
      <Button
        variant={language === "en" ? "default" : "ghost"}
        size="sm"
        onClick={() => changeLanguage("en")}
        className={
          language === "en"
            ? "bg-primary text-primary-foreground hover:bg-primary/90"
            : "hover:bg-accent text-muted-foreground"
        }
      >
        EN
      </Button>
    </div>
  )
}
