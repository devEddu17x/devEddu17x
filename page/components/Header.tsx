"use client"

import { Menu, X } from "lucide-react"
import { useLanguage } from "@/hooks/useLanguageContext"
import { portfolioContent } from "@/lib/portfolio-content"

interface HeaderProps {
  navigate: (id: string) => void
  menuOpen: boolean
  setMenuOpen: (open: boolean) => void
}

export default function Header({ navigate, menuOpen, setMenuOpen }: HeaderProps) {
  const { language, toggleLanguage } = useLanguage()
  const content = portfolioContent[language]

  const navItems = [
    ["projects", content.nav.projects],
    ["skills", content.nav.skills],
    ["about", content.nav.about],
    ["contact", content.nav.contact],
  ] as const

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#070b17]/70 backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 lg:px-8">
        <a
          href="#home"
          className="group flex items-center gap-3"
          aria-label="Eddu home"
          onClick={(e) => {
            e.preventDefault()
            navigate("home")
          }}
        >
          <img
            src="/logo.webp"
            alt="Eddu logo"
            className="h-9 w-9 rounded-xl border border-cyan-300/30 object-cover transition group-hover:border-cyan-300/70"
          />
          <span className="text-lg font-semibold tracking-tight">
            eddu<span className="text-cyan-300">.</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {navItems.map(([id, label]) => (
            <button key={id} onClick={() => navigate(id)} className="nav-link">
              {label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleLanguage}
            className="language-toggle"
            aria-label={language === "en" ? "Cambiar a español" : "Switch to English"}
          >
            <span className={language === "es" ? "text-white" : "text-slate-500"}>ES</span>
            <span className="text-slate-700">/</span>
            <span className={language === "en" ? "text-white" : "text-slate-500"}>EN</span>
          </button>
          <button
            onClick={() => navigate("contact")}
            className="hidden rounded-full bg-cyan-300 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200 sm:block"
          >
            {content.hero.contact}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 text-slate-200 lg:hidden"
            aria-label="Open menu"
          >
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav className="border-t border-white/5 bg-[#0b1122] px-5 py-4 lg:hidden" aria-label="Mobile navigation">
          <div className="mx-auto grid max-w-7xl gap-1">
            {navItems.map(([id, label]) => (
              <button
                key={id}
                onClick={() => navigate(id)}
                className="rounded-lg px-3 py-3 text-left text-sm text-slate-200 hover:bg-white/5"
              >
                {label}
              </button>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
