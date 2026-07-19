"use client"

import { useState } from "react"
import { ArrowUpRight, ExternalLink, Code2 } from "lucide-react"
import { useLanguage } from "@/hooks/useLanguageContext"
import { portfolioContent } from "@/lib/portfolio-content"

function ProjectVisual({ project, hint }: { project: { name: string; imagePath: string; imageAlt: string; status: string }; hint: string }) {
  const [hasImage, setHasImage] = useState(true)

  return (
    <div className="project-visual">
      {hasImage && (
        <img
          src={project.imagePath}
          alt={project.imageAlt}
          className="h-full w-full object-cover"
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
      <div className="absolute inset-0 bg-gradient-to-t from-[#070b17] via-transparent to-transparent" />
      <div className="absolute bottom-4 left-4 flex items-center gap-2">
        <span className="status-dot" />
        <span className="text-xs font-medium text-white">{project.status}</span>
      </div>
    </div>
  )
}

export default function ProjectsSection() {
  const { language } = useLanguage()
  const content = portfolioContent[language]

  return (
    <section id="projects" className="section-shell border-y border-white/5 bg-[#0a1020]/75">
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
                  <p className="mt-1 text-sm text-cyan-200">{project.duration}</p>
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
              <ul className="mt-6 space-y-3 border-l border-cyan-300/30 pl-4 text-sm leading-6 text-slate-400">
                {project.impact.map((line) => <li key={line}>{line}</li>)}
              </ul>
              <div className="mt-8 grid gap-3">
                {[
                  [content.projects.stack.frontend, project.frontend, "stack-row stack-row-frontend"],
                  [content.projects.stack.backend, project.backend, "stack-row stack-row-backend"],
                  [content.projects.stack.cloud, project.cloud, "stack-row stack-row-cloud"],
                ].map(([label, technologies, className]) => (
                  <div key={label as string} className={className as string}>
                    <p>{label as string}</p>
                    <div>
                      {(technologies as string[]).map((technology) => (
                        <span key={technology}>{technology}</span>
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
                  className="inline-flex items-center gap-1 font-semibold text-cyan-200 hover:text-white"
                >
                  {content.projects.demo}
                  <ArrowUpRight size={15} />
                </a>
                {project.repos.map((repo) => (
                  <a
                    key={repo.href}
                    href={repo.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white"
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
