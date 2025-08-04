"use client"

import { useState, useEffect } from "react"
import { translations, type Language } from "@/lib/translations"

export function useLanguage() {
  const [language, setLanguage] = useState<Language>("pt")

  useEffect(() => {
    const saved = localStorage.getItem("language") as Language
    if (saved && (saved === "pt" || saved === "en")) {
      setLanguage(saved)
    } else {
      setLanguage("pt")
      localStorage.setItem("language", "pt")
    }
  }, [])

  const changeLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  const t = translations[language]

  return { language, changeLanguage, t }
}
