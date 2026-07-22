"use client"

import { useState } from "react"
import { ArrowUpRight, ExternalLink, Code2 } from "lucide-react"
import { useLanguage } from "@/hooks/useLanguageContext"
import { portfolioContent } from "@/lib/portfolio-content"

function ProjectVisual({ project, hint }: { project: { name: string; imagePath: string; imageAlt: string; status: string; demo: string }; hint: string }) {
  const [hasImage, setHasImage] = useState(true)

  return (
    <a
      href={project.demo}
      target="_blank"
      rel="noopener noreferrer"
      className="group/img relative block project-visual overflow-hidden cursor-pointer"
      aria-label={`Open ${project.name} live demo`}
    >
      {hasImage && (
        <img
          src={project.imagePath}
          alt={project.imageAlt}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover/img:scale-105"
          onError={() => setHasImage(false)}
        />
      )}
      {!hasImage && (
        <div className="project-placeholder">
          <div className="project-placeholder-grid" />
          <Code2 className="relative mb-4 h-8 w-8 text-cyan-300" />
          <p className="relative text-sm font-semibold text-white">{project.name}</p>
          <p className="relative mt-1 max-w-xs text-center text-xs text-slate-400">{hint} <code>public{project.imagePath}</code></p>
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-[#070b17] via-transparent to-transparent opacity-80 group-hover/img:opacity-60 transition-opacity duration-300" />

      <div className="absolute bottom-4 left-4 flex items-center gap-2">
        <span className="status-dot" />
        <span className="text-xs font-semibold text-white">{project.status}</span>
      </div>

      <div className="absolute top-4 right-4 flex items-center gap-1.5 rounded-full border border-white/20 bg-slate-950/80 px-3.5 py-1.5 text-xs font-semibold text-cyan-300 opacity-0 backdrop-blur-md transition-all duration-300 group-hover/img:opacity-100 group-hover/img:translate-y-0 -translate-y-1 shadow-lg">
        <span>{project.name} ↗</span>
      </div>
    </a>
  )
}

export default function ProjectsSection() {
  const { language } = useLanguage()
  const content = portfolioContent[language]

  return (
    <section id="projects" className="section-shell">
      <div className="section-heading">
        <p className="eyebrow"><span />{content.projects.eyebrow}</p>
        <h2>{content.projects.title}</h2>
        <p>{content.projects.intro}</p>
      </div>

      <div className="mt-14 grid gap-7 xl:grid-cols-2">
        {content.projects.items.map((project) => (
          <article key={project.name} className="project-card">
            <ProjectVisual project={project} hint={content.projects.mediaHint} />
            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="text-3xl font-semibold tracking-tight text-white">{project.name}</h3>
                  <p className="mt-1 text-sm font-semibold text-cyan-200">{project.duration}</p>
                </div>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-link"
                  aria-label={`${content.projects.live}: ${project.name}`}
                >
                  <ExternalLink size={18} />
                </a>
              </div>
              <p className="mt-5 leading-7 text-slate-300">{project.description}</p>
              <ul className="mt-6 space-y-3 border-l-2 border-cyan-400/40 pl-4 text-sm leading-6 text-slate-300 font-medium">
                {project.impact.map((line) => <li key={line}>{line}</li>)}
              </ul>

              {/* Prominent Stack Section */}
              <div className="mt-8 space-y-3">
                {[
                  {
                    label: content.projects.stack.frontend,
                    techs: project.frontend,
                    containerClass: "border border-blue-500/20 bg-blue-950/20 hover:border-blue-500/40",
                    labelClass: "text-blue-300 font-bold",
                    pillClass: "border border-blue-400/25 bg-blue-500/10 text-blue-200 hover:border-blue-400/50 hover:bg-blue-500/20 hover:text-white",
                  },
                  {
                    label: content.projects.stack.backend,
                    techs: project.backend,
                    containerClass: "border border-cyan-500/20 bg-cyan-950/20 hover:border-cyan-500/40",
                    labelClass: "text-cyan-300 font-bold",
                    pillClass: "border border-cyan-400/25 bg-cyan-500/10 text-cyan-200 hover:border-cyan-400/50 hover:bg-cyan-500/20 hover:text-white",
                  },
                  {
                    label: content.projects.stack.cloud,
                    techs: project.cloud,
                    containerClass: "border border-purple-500/20 bg-purple-950/20 hover:border-purple-500/40",
                    labelClass: "text-purple-300 font-bold",
                    pillClass: "border border-purple-400/25 bg-purple-500/10 text-purple-200 hover:border-purple-400/50 hover:bg-purple-500/20 hover:text-white",
                  },
                ].map(({ label, techs, containerClass, labelClass, pillClass }) => (
                  <div key={label} className={`grid grid-cols-1 sm:grid-cols-[10rem_1fr] items-start gap-2.5 sm:gap-4 p-3.5 rounded-xl transition-colors duration-300 ${containerClass}`}>
                    <p className={`text-xs sm:text-[13px] tracking-wide pt-1 ${labelClass}`}>{label}</p>
                    <div className="flex flex-wrap gap-2">
                      {techs.map((tech) => (
                        <span
                          key={tech}
                          className={`rounded-lg px-3 py-1 font-mono text-[12px] font-semibold transition-all duration-200 ${pillClass}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-bold text-cyan-300 hover:text-white transition-colors"
                >
                  {content.projects.demo}
                  <ArrowUpRight size={16} />
                </a>
                {project.repos.map((repo) => (
                  <a
                    key={repo.href}
                    href={repo.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white transition-colors font-medium"
                  >
                    {repo.label}
                  </a>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
