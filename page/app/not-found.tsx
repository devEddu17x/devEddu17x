"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowLeft, Terminal, AlertTriangle, FolderGit2 } from "lucide-react"
import { LanguageProvider, useLanguage } from "@/hooks/useLanguageContext"
import { portfolioContent } from "@/lib/portfolio-content"
import BackgroundGrid from "@/components/BackgroundGrid"
import Footer from "@/components/Footer"

function NotFoundContent() {
  const { language, toggleLanguage } = useLanguage()
  const content = portfolioContent[language]
  const pathname = usePathname() || "/"

  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-[#070b17] text-slate-100 selection:bg-cyan-500/20 selection:text-cyan-200">
      {/* Background ambient glowing orbs & interactive grid */}
      <div className="hero-orb hero-orb-one" />
      <div className="hero-orb hero-orb-two" />
      <BackgroundGrid />

      {/* Header Bar */}
      <header className="relative z-10 border-b border-white/5 bg-[#070b17]/70 backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 lg:px-8">
          <Link href="/" className="group flex items-center gap-3" aria-label="Eddu home">
            <img
              src="/logo.webp"
              alt="Eddu logo"
              className="h-9 w-9 rounded-xl border border-cyan-300/30 object-cover transition group-hover:border-cyan-300/70"
            />
            <span className="text-lg font-semibold tracking-tight">
              eddu<span className="text-cyan-300">.</span>
            </span>
          </Link>

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
            <Link
              href="/"
              className="hidden rounded-full bg-cyan-300 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200 sm:block"
            >
              {content.notFound.backHome}
            </Link>
          </div>
        </div>
      </header>

      {/* Main 404 Hero Section */}
      <main className="relative z-10 mx-auto flex w-full max-w-4xl flex-1 flex-col items-center justify-center px-5 py-12 text-center">
        {/* Big visual 404 Badge */}
        <div className="relative mb-6">
          <div className="absolute -inset-6 rounded-full bg-gradient-to-r from-cyan-500/20 via-violet-500/20 to-cyan-500/20 blur-3xl opacity-60" />
          <h1 className="relative font-mono text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-violet-400 sm:text-9xl drop-shadow-[0_0_40px_rgba(6,182,212,0.35)] select-none">
            404
          </h1>
        </div>

        {/* Title & Description */}
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {content.notFound.title}
        </h2>
        <p className="mt-4 max-w-lg text-base text-slate-300 sm:text-lg leading-relaxed">
          {content.notFound.description}
        </p>

        {/* Interactive Terminal Card */}
        <div className="mt-8 w-full max-w-xl text-left">
          <div className="hero-console rounded-xl border border-cyan-500/20 bg-[#070b17]/90 p-4 shadow-2xl backdrop-blur-md">
            <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="h-3 w-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="h-3 w-3 rounded-full bg-emerald-500/80 inline-block" />
                <span className="ml-2 font-mono text-xs text-slate-400">console // eddux-cluster-az1</span>
              </div>
              <AlertTriangle size={14} className="text-amber-400 shrink-0" />
            </div>

            <div className="space-y-1.5 font-mono text-xs sm:text-sm">
              <p className="text-slate-400">
                <span className="text-cyan-400">&gt;</span> GET <span className="text-slate-200">{pathname}</span> HTTP/1.1
              </p>
              <p className="text-slate-400">
                <span className="text-violet-400">&lt;</span> <span className="text-rose-400 font-semibold">HTTP/1.1 404 Not Found</span>
              </p>
              <p className="text-rose-300/90 pt-1 text-[0.8rem] leading-snug">
                <span className="text-amber-300 font-semibold">[WARNING]</span> {content.notFound.terminalError}
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link href="/" className="button-primary group">
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
            <span>{content.notFound.backHome}</span>
          </Link>
          <Link href="/#projects" className="button-secondary group">
            <FolderGit2 size={16} className="text-cyan-300" />
            <span>{content.notFound.viewProjects}</span>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  )
}

export default function NotFound() {
  return (
    <LanguageProvider>
      <NotFoundContent />
    </LanguageProvider>
  )
}
