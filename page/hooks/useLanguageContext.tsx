"use client"

import { useState, useEffect, createContext, useContext, ReactNode } from "react"
type Language = "es" | "en"

interface LanguageContextType {
    language: Language
    setLanguage: (lang: Language) => void
    toggleLanguage: () => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

interface LanguageProviderProps {
    children: ReactNode
}

export function LanguageProvider({ children }: LanguageProviderProps) {
    const [language, setLanguageState] = useState<Language>("en")

    useEffect(() => {
        const savedLanguage = localStorage.getItem("portfolio-language") as Language
        if (savedLanguage && (savedLanguage === "es" || savedLanguage === "en")) {
            setLanguageState(savedLanguage)
        } else {
            const browserLanguage = navigator.language?.toLowerCase() ?? "en"
            const detectedLanguage: Language = browserLanguage.startsWith("es") ? "es" : "en"
            setLanguageState(detectedLanguage)
            localStorage.setItem("portfolio-language", detectedLanguage)
        }
    }, [])

    useEffect(() => {
        document.documentElement.lang = language
    }, [language])

    const setLanguage = (lang: Language) => {
        setLanguageState(lang)
        localStorage.setItem("portfolio-language", lang)
    }

    const toggleLanguage = () => {
        const newLanguage = language === "es" ? "en" : "es"
        setLanguage(newLanguage)
    }

    return (
        <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    )
}

export function useLanguage() {
    const context = useContext(LanguageContext)
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider")
    }
    return context
}
