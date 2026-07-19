"use client"

import { useLanguage } from "@/hooks/useLanguageContext"
import { portfolioContent } from "@/lib/portfolio-content"

export default function AboutSection() {
  const { language } = useLanguage()
  const content = portfolioContent[language]

  return (
    <section id="about" className="section-shell border-y border-white/5 bg-[#0a1020]/75">
      <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <p className="eyebrow"><span />{content.about.eyebrow}</p>
          <h2 className="mt-6 max-w-xl text-4xl font-semibold leading-none tracking-[-.05em] text-white sm:text-5xl">{content.about.title}</h2>
        </div>

        <div>
          <p className="text-2xl font-medium leading-9 text-cyan-50">{content.about.lead}</p>
          <div className="mt-8 space-y-5 text-base leading-8 text-slate-300">
            {content.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </div>
      </div>

      {/* Cards container: aligned horizontally in a matching grid */}
      <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] mt-10">
        {/* Left column card */}
        <div>
          <div className="detail-card p-6 border border-white/5 bg-[#070b17]/50 rounded-xl relative overflow-hidden group hover:border-cyan-500/20 transition-all duration-300 h-full">
            <div className="absolute top-0 left-0 w-1 h-full bg-cyan-500/30 group-hover:bg-cyan-500 transition-colors" />
            <div className="pl-4">
              <p className="font-mono text-xs text-cyan-300/80 uppercase tracking-widest mb-1.5">
                {content.about.educationLabel}
              </p>
              <h4 className="text-lg font-bold text-white mb-2 leading-tight">
                {content.about.education}
              </h4>
              <p className="text-sm leading-relaxed">
                <a
                  href="https://upao.edu.pe/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-300/90 hover:text-cyan-200 transition-colors underline decoration-cyan-500/30 underline-offset-4"
                >
                  Universidad Privada Antenor Orrego
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Right column card */}
        <div>
          <div className="detail-card p-5 border border-white/5 bg-[#070b17]/30 rounded-xl relative overflow-hidden group hover:border-cyan-500/20 transition-all duration-300 h-full">
            <div className="absolute top-0 left-0 w-1 h-full bg-slate-700/50 group-hover:bg-slate-700 transition-colors" />
            <div className="pl-4">
              <p className="font-mono text-xs text-slate-500 uppercase tracking-widest mb-1">
                {content.about.languageLabel}
              </p>
              <strong className="text-base text-slate-200">
                {content.about.language}
              </strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
