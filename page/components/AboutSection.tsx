"use client"

import { useLanguage } from "@/hooks/useLanguageContext"
import { portfolioContent } from "@/lib/portfolio-content"

export default function AboutSection() {
  const { language } = useLanguage()
  const content = portfolioContent[language]

  return (
    <section id="about" className="section-shell">
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
    </section>
  )
}
