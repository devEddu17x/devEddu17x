"use client"

import { ArrowDown, ArrowUpRight, Download } from "lucide-react"
import { useLanguage } from "@/hooks/useLanguageContext"
import { portfolioContent } from "@/lib/portfolio-content"

interface HeroSectionProps {
  navigate: (id: string) => void
}

export default function HeroSection({ navigate }: HeroSectionProps) {
  const { language } = useLanguage()
  const content = portfolioContent[language]

  const handleDownload = async (e: React.MouseEvent) => {
    e.preventDefault()
    const fileName = content.hero.cvUrl.split("/").pop() || "CV.pdf"
    try {
      const response = await fetch(content.hero.cvUrl)
      const blob = await response.blob()
      const blobUrl = window.URL.createObjectURL(blob)
      const link = document.createElement("a")
      link.href = blobUrl
      link.download = fileName
      document.body.appendChild(link)
      link.click()
      link.remove()
      window.URL.revokeObjectURL(blobUrl)
    } catch (error) {
      const link = document.createElement("a")
      link.href = content.hero.cvUrl
      link.download = fileName
      link.target = "_blank"
      link.click()
    }
  }

  return (
    <section id="home" className="relative isolate flex min-h-screen items-center overflow-hidden pt-20">
      <div className="hero-orb hero-orb-one" aria-hidden="true" />
      <div className="hero-orb hero-orb-two" aria-hidden="true" />
      <div className="hero-grid" aria-hidden="true" />
      <div className="relative mx-auto grid w-full max-w-7xl gap-14 px-5 lg:grid-cols-[1.3fr_.7fr] lg:px-8">
        <div className="max-w-4xl">
          <p className="eyebrow"><span />{content.hero.eyebrow}</p>
          <h1 className="mt-7 max-w-4xl text-5xl font-semibold leading-[.98] tracking-[-0.06em] text-white sm:text-7xl lg:text-8xl">
            {content.hero.greeting}<br />
            <span className="text-gradient">{content.hero.title}</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">{content.hero.description}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <button onClick={() => navigate("contact")} className="button-primary">
              {content.hero.contact}
              <ArrowUpRight className="h-4 w-4" />
            </button>
            <button onClick={handleDownload} className="button-secondary">
              <Download className="h-4 w-4" />
              {content.hero.cv}
            </button>
          </div>
          <div className="mt-10 flex items-center gap-4 text-sm text-slate-400">
            <span className="status-dot" />{content.hero.basedIn}
          </div>
        </div>

        <div className="relative flex items-start lg:justify-end w-full max-w-md lg:ml-auto">
          {/* Profile Image Card */}
          <div className="relative group w-full">
            {/* Glowing background gradient with animations on hover */}
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 opacity-70 blur-xl transition duration-700 group-hover:opacity-100 group-hover:blur-2xl group-hover:from-cyan-500/30 group-hover:to-purple-500/30" />
            
            {/* Corner accents - futuristic brackets */}
            <div className="absolute -top-1.5 -left-1.5 h-4 w-4 border-t-2 border-l-2 border-cyan-400/80 z-20 transition-all duration-300 group-hover:-top-3 group-hover:-left-3" />
            <div className="absolute -top-1.5 -right-1.5 h-4 w-4 border-t-2 border-r-2 border-cyan-400/80 z-20 transition-all duration-300 group-hover:-top-3 group-hover:-right-3" />
            <div className="absolute -bottom-1.5 -left-1.5 h-4 w-4 border-b-2 border-l-2 border-cyan-400/80 z-20 transition-all duration-300 group-hover:-bottom-3 group-hover:-left-3" />
            <div className="absolute -bottom-1.5 -right-1.5 h-4 w-4 border-b-2 border-r-2 border-cyan-400/80 z-20 transition-all duration-300 group-hover:-bottom-3 group-hover:-right-3" />

            {/* Outer container */}
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#070b17]/80 p-3 shadow-2xl backdrop-blur-sm transition-all duration-500 group-hover:border-cyan-500/30">
              
              {/* Inner image container */}
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-[#0b1224] border border-white/5">
                <img
                  src="/me.webp"
                  alt="Eduardo (Eddu)"
                  className="h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-[1.03]"
                />
                
                {/* Tech overlay grid */}
                <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(103,232,249,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(103,232,249,0.03)_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)]" />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#070b17]/90 via-transparent to-transparent opacity-80" />

                {/* Top bar tech indicators */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between font-mono text-[9px] text-cyan-300/80 bg-[#070b17]/50 backdrop-blur-sm px-2.5 py-1 rounded border border-white/5">
                  <span className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-ping" />
                    <span>CAPTURING_</span>
                  </span>
                  <span>0x4f8a // {language === "es" ? "INGENIERO" : "ENGINEER"}</span>
                </div>

                {/* Bottom banner details */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-lg border border-cyan-500/20 bg-[#070b17]/90 px-3.5 py-2.5 backdrop-blur-md shadow-lg">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="font-mono text-[10px] font-bold tracking-wider text-slate-200">ENG.STATUS: ACTIVE</span>
                  </div>
                  <span className="font-mono text-[10px] text-slate-400">PERU // UTC-5</span>
                </div>
              </div>

              {/* Metadata footer */}
              <div className="mt-3.5 px-1 pb-1.5 font-mono text-[10px] text-slate-500 flex justify-between items-center border-t border-white/5 pt-3">
                <span className="flex items-center gap-1">
                  <span className="text-cyan-400">&gt;</span>
                  <span>{language === "es" ? "cámara.activa" : "cam.active"}</span>
                </span>
                <span>v1.0.4</span>
              </div>

            </div>
          </div>
        </div>
      </div>
      <button
        onClick={() => navigate("stats")}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs uppercase tracking-[.16em] text-slate-500 transition hover:text-cyan-200 md:flex"
      >
        <ArrowDown size={14} />scroll
      </button>
    </section>
  )
}
