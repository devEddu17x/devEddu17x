"use client"

import { ArrowUpRight } from "lucide-react"
import { useLanguage } from "@/hooks/useLanguageContext"
import { portfolioContent } from "@/lib/portfolio-content"

export default function EducationSection() {
  const { language } = useLanguage()
  const content = portfolioContent[language]

  return (
    <section id="education" className="section-shell border-y border-white/5 bg-[#0a1020]/75">
      <div>
        <p className="eyebrow"><span />{content.education.eyebrow}</p>
        <h2 className="sr-only">{content.education.eyebrow}</h2>

        <div className="mt-10 grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
          {/* Left column: Professional education & languages */}
          <div>
            <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              {content.education.academicTitle}
            </h3>

            <div className="mt-7 border-l-2 border-cyan-500/35 pl-6">
              <p className="text-xl font-semibold leading-snug text-white">
                {content.education.degree}
              </p>
              <a
                href={content.education.institutionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2.5 inline-flex items-center gap-1.5 text-sm font-medium text-cyan-300/90 transition-colors hover:text-cyan-200 underline decoration-cyan-500/30 underline-offset-4"
              >
                <span>{content.education.institution}</span>
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>

              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="font-mono text-xs uppercase tracking-[.15em] text-slate-400">
                  {content.education.languageLabel}
                </p>
                <p className="mt-2 text-base font-medium text-slate-200">
                  {content.education.language}
                </p>
              </div>
            </div>
          </div>

          {/* Right column: Certifications */}
          <div>
            <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              {content.education.certificationsTitle}
            </h3>

            <div className="mt-7 grid gap-4">
              {content.education.certifications.map((cert) => (
                <article
                  key={cert.verifyUrl}
                  className="group relative flex flex-col gap-5 rounded-2xl border border-white/10 bg-[#070b17]/65 p-5 transition-all duration-300 hover:border-cyan-400/35 hover:bg-[#070b17]/90 sm:flex-row sm:items-center"
                >
                  <img
                    src={cert.badgePath}
                    alt={cert.badgeAlt}
                    width={96}
                    height={96}
                    loading="lazy"
                    className="h-24 w-24 shrink-0 object-contain"
                  />

                  <div className="min-w-0 flex-1">
                    <h4 className="text-lg font-semibold leading-snug text-white">
                      {cert.title}
                    </h4>
                    <div className="mt-3 flex flex-wrap items-end justify-between gap-3">
                      <div className="min-w-0">
                        <p className="text-sm text-slate-400">{cert.issuer}</p>
                        <p className="mt-0.5 font-mono text-xs text-slate-500">{cert.period}</p>
                      </div>
                      <a
                        href={cert.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-cyan-400/25 bg-cyan-500/10 px-3.5 py-1.5 text-xs font-semibold text-cyan-200 transition-colors hover:border-cyan-300/50 hover:bg-cyan-500/20 hover:text-white"
                      >
                        <span>{content.education.verifyLabel}</span>
                        <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
