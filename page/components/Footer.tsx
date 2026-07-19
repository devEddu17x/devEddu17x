"use client"

import { Github, Linkedin } from "lucide-react"
import { useLanguage } from "@/hooks/useLanguageContext"
import { portfolioContent } from "@/lib/portfolio-content"

export default function Footer() {
  const { language } = useLanguage()
  const content = portfolioContent[language]

  return (
    <footer className="border-t border-white/5 px-5 py-8 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} eddu.</p>
        <p>{content.footer}</p>
        <div className="flex gap-4">
          <a
            href="https://github.com/devEddu17x"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-cyan-200"
          >
            <Github size={18} />
          </a>
          <a
            href="https://linkedin.com/in/eduardodevts"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-cyan-200"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
