"use client"

import { FormEvent, useState } from "react"
import {
  ArrowDown,
  ArrowUpRight,
  Cloud,
  Code2,
  Database,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Menu,
  Send,
  Server,
  Workflow,
  X,
} from "lucide-react"
import { useLanguage } from "@/hooks/useLanguageContext"
import { portfolioContent } from "@/lib/portfolio-content"
import {
  SiTypescript,
  SiNodedotjs,
  SiNestjs,
  SiOpenai,
  SiWebrtc,
  SiAmazon,
  SiTerraform,
  SiCloudflare,
  SiPostgresql,
  SiMysql,
  SiAmazondynamodb,
  SiApachekafka,
  SiApachespark,
  SiDocker,
  SiLinux,
  SiGithubactions,
  SiGrafana,
  SiSocketdotio,
} from "react-icons/si"
import { TbApi, TbCertificate, TbActivity } from "react-icons/tb"

const CONTACT_EMAIL = "contact@eddux.dev"

const techIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "TypeScript": SiTypescript,
  "Node.js": SiNodedotjs,
  "NestJS": SiNestjs,
  "REST": TbApi,
  "OpenAPI": SiOpenai,
  "WebSockets": SiSocketdotio,
  "WebRTC": SiWebrtc,
  "AWS": SiAmazon,
  "Terraform / HCL": SiTerraform,
  "ECS": SiAmazon,
  "Lambda": SiAmazon,
  "API Gateway": SiAmazon,
  "Cloudflare": SiCloudflare,
  "PostgreSQL": SiPostgresql,
  "MySQL": SiMysql,
  "DynamoDB": SiAmazondynamodb,
  "Kafka": SiApachekafka,
  "Apache Spark": SiApachespark,
  "Cloudflare R2": SiCloudflare,
  "Docker": SiDocker,
  "Linux": SiLinux,
  "GitHub Actions": SiGithubactions,
  "OIDC": TbCertificate,
  "CloudWatch": TbActivity,
  "Grafana": SiGrafana,
}

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
}

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

export default function Portfolio() {
  const { language, toggleLanguage } = useLanguage()
  const content = portfolioContent[language]
  const [menuOpen, setMenuOpen] = useState(false)
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" })

  const navigate = (id: string) => {
    setMenuOpen(false)
    scrollTo(id)
  }

  const submitContact = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const subject = form.subject || (language === "es" ? "Contacto desde eddux.dev" : "Contact from eddux.dev")
    const body = `${language === "es" ? "Nombre" : "Name"}: ${form.name}\n${language === "es" ? "Correo" : "Email"}: ${form.email}\n\n${form.message}`
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  const navItems = [
    ["projects", content.nav.projects],
    ["skills", content.nav.skills],
    ["about", content.nav.about],
    ["contact", content.nav.contact],
  ] as const

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#070b17] text-slate-100 selection:bg-cyan-300 selection:text-slate-950">
      <div className="site-noise" aria-hidden="true" />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#070b17]/70 backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 lg:px-8">
          <a href="#home" className="group flex items-center gap-3" aria-label="Eddu home">
            <span className="grid h-9 w-9 place-items-center rounded-xl border border-cyan-300/30 bg-cyan-300/10 font-mono text-sm font-black text-cyan-200 transition group-hover:border-cyan-300/70">&lt;/&gt;</span>
            <span className="text-lg font-semibold tracking-tight">eddu<span className="text-cyan-300">.</span></span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
            {navItems.map(([id, label]) => (
              <button key={id} onClick={() => navigate(id)} className="nav-link">{label}</button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button onClick={toggleLanguage} className="language-toggle" aria-label={language === "en" ? "Cambiar a español" : "Switch to English"}>
              <span className={language === "es" ? "text-white" : "text-slate-500"}>ES</span>
              <span className="text-slate-700">/</span>
              <span className={language === "en" ? "text-white" : "text-slate-500"}>EN</span>
            </button>
            <button onClick={() => navigate("contact")} className="hidden rounded-full bg-cyan-300 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200 sm:block">{content.hero.contact}</button>
            <button onClick={() => setMenuOpen(!menuOpen)} className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 text-slate-200 lg:hidden" aria-label="Open menu">
              {menuOpen ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav className="border-t border-white/5 bg-[#0b1122] px-5 py-4 lg:hidden" aria-label="Mobile navigation">
            <div className="mx-auto grid max-w-7xl gap-1">
              {navItems.map(([id, label]) => <button key={id} onClick={() => navigate(id)} className="rounded-lg px-3 py-3 text-left text-sm text-slate-200 hover:bg-white/5">{label}</button>)}
            </div>
          </nav>
        )}
      </header>

      <main>
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
                <button onClick={() => navigate("contact")} className="button-primary">{content.hero.contact}<ArrowUpRight className="h-4 w-4" /></button>
                <a href={content.hero.cvUrl} target="_blank" rel="noopener noreferrer" download={content.hero.cvFilename} className="button-secondary"><Download className="h-4 w-4" />{content.hero.cv}</a>
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
          <button onClick={() => navigate("stats")} className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs uppercase tracking-[.16em] text-slate-500 transition hover:text-cyan-200 md:flex"><ArrowDown size={14} />scroll</button>
        </section>

        <section id="stats" className="relative isolate flex flex-col min-h-screen justify-center overflow-hidden border-b border-white/5 bg-[#0a1020]/20 py-24">
          <div className="hero-grid" aria-hidden="true" />

          <div className="relative mx-auto w-full max-w-7xl px-5 lg:px-8 mb-10 text-left">
            <div className="flex items-center gap-3">
              <span className="block h-[1px] w-10 bg-cyan-300/80" />
              <h2 className="font-mono text-sm sm:text-base font-black tracking-[.25em] text-cyan-200 uppercase">
                {language === "es" ? "RENDIMIENTO & TELEMETRÍA" : "METRICS & TELEMETRY"}
              </h2>
            </div>
          </div>

          <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-5 lg:grid-cols-[1.3fr_.7fr] lg:items-center lg:px-8">
            {/* Left Column: Console terminal Card */}
            <div className="w-full">
              <div className="hero-console w-full max-w-2xl transition-all duration-500 hover:border-cyan-500/30">
                <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-rose-400" />
                    <span className="h-2 w-2 rounded-full bg-amber-300" />
                    <span className="h-2 w-2 rounded-full bg-cyan-300" />
                    <span className="ml-2 font-mono text-[10px] uppercase tracking-[.18em] text-slate-500">production.system</span>
                  </div>
                  <span className="font-mono text-[9px] text-emerald-400/80 bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/20 animate-pulse">CONNECTED</span>
                </div>
                <div className="space-y-5 p-6 font-mono text-sm leading-6">
                  <p className="text-slate-300">$ engineer.profile</p>
                  <div className="grid gap-5 sm:grid-cols-2 border-t border-white/5 pt-4">
                    <div>
                      <span className="block text-[11px] text-cyan-300/90 mb-1 font-semibold">architectures //</span>
                      <p className="text-slate-200 font-semibold text-xs sm:text-sm font-mono">Serverless · Distributed, Event-Driven</p>
                    </div>
                    <div>
                      <span className="block text-[11px] text-cyan-300/90 mb-1 font-semibold">realtime_data //</span>
                      <p className="text-slate-200 font-semibold text-xs sm:text-sm font-mono">WebSockets · WebRTC (P2P)</p>
                    </div>
                    <div>
                      <span className="block text-[11px] text-cyan-300/90 mb-1 font-semibold">deployment //</span>
                      <p className="text-slate-200 font-semibold text-xs sm:text-sm font-mono">Automated CI/CD · OIDC, Multi-AZ</p>
                    </div>
                    <div>
                      <span className="block text-[11px] text-cyan-300/90 mb-1 font-semibold">provisioning //</span>
                      <p className="text-slate-200 font-semibold text-xs sm:text-sm font-mono">Infrastructure as Code (IaC)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Statistics stacked vertically */}
            <div className="w-full max-w-md lg:ml-auto">
              <div className="grid gap-3 w-full sm:grid-cols-3 lg:grid-cols-1">
                {content.proof.map((item, idx) => {
                  const textColors = [
                    "text-cyan-300",
                    "text-purple-300",
                    "text-emerald-300"
                  ]
                  const borderColors = [
                    "group-hover/stat:border-cyan-500/30",
                    "group-hover/stat:border-purple-500/30",
                    "group-hover/stat:border-emerald-500/30"
                  ]
                  const leftBorders = [
                    "group-hover/stat:bg-cyan-400",
                    "group-hover/stat:bg-purple-400",
                    "group-hover/stat:bg-emerald-400"
                  ]
                  const glows = [
                    "hover:shadow-[0_0_30px_rgba(34,211,238,0.08)]",
                    "hover:shadow-[0_0_30px_rgba(168,85,247,0.08)]",
                    "hover:shadow-[0_0_30px_rgba(16,185,129,0.08)]"
                  ]

                  return (
                    <div
                      key={item.label}
                      className={`relative group/stat overflow-hidden rounded-xl border border-white/5 bg-slate-950/40 p-5 shadow-2xl transition-all duration-300 ${borderColors[idx]} hover:bg-[#0a1020]/60 ${glows[idx]}`}
                    >
                      {/* Left border glow indicator */}
                      <div className={`absolute left-0 top-0 bottom-0 w-[3px] bg-slate-800 transition-all duration-300 ${leftBorders[idx]}`} />

                      <div className="pl-2">
                        <p className={`text-5xl font-black tracking-tight ${textColors[idx]} font-mono`}>
                          {item.value}
                        </p>

                        <p className="mt-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-white leading-relaxed">
                          {item.label}
                        </p>

                        {/* Technical detail: visual progress bar */}
                        <div className="mt-4 flex items-center gap-2">
                          <div className="h-1 flex-1 bg-slate-800/80 rounded-full overflow-hidden">
                            <div className={`h-full rounded-full bg-slate-700 transition-all duration-500 group-hover/stat:w-full w-2/3`} />
                          </div>
                          <span className="font-mono text-[8px] text-slate-600">L.0{idx + 1}</span>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
          <button onClick={() => navigate("projects")} className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs uppercase tracking-[.16em] text-slate-500 transition hover:text-cyan-200 md:flex"><ArrowDown size={14} />scroll</button>
        </section>

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
                    <div><h3 className="text-3xl font-semibold tracking-tight text-white">{project.name}</h3><p className="mt-1 text-sm text-cyan-200">{project.duration}</p></div>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="icon-link" aria-label={`${content.projects.live}: ${project.name}`}><ExternalLink size={18} /></a>
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
                    ].map(([label, technologies, className]) => <div key={label as string} className={className as string}><p>{label as string}</p><div>{(technologies as string[]).map((technology) => <span key={technology}>{technology}</span>)}</div></div>)}
                  </div>
                  <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-semibold text-cyan-200 hover:text-white">{content.projects.demo}<ArrowUpRight size={15} /></a>
                    {project.repos.map((repo) => <a key={repo.href} href={repo.href} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white">{repo.label}</a>)}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section-shell">
          <div className="section-heading">
            <p className="eyebrow"><span />{content.skills.eyebrow}</p>
            <h2>{content.skills.title}</h2>
            <p>{content.skills.intro}</p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {content.skills.items.map((skill, index) => {
              const icons = [Server, Cloud, Database, Workflow]
              const Icon = icons[index]

              // Theme settings for glows and highlights per domain
              const themes = [
                {
                  border: "group-hover:border-cyan-500/30",
                  glow: "group-hover:shadow-[0_0_35px_rgba(34,211,238,0.06)]",
                  line: "bg-cyan-500/50",
                  iconColor: "text-cyan-400",
                },
                {
                  border: "group-hover:border-amber-500/30",
                  glow: "group-hover:shadow-[0_0_35px_rgba(245,158,11,0.06)]",
                  line: "bg-amber-500/50",
                  iconColor: "text-amber-400",
                },
                {
                  border: "group-hover:border-purple-500/30",
                  glow: "group-hover:shadow-[0_0_35px_rgba(168,85,247,0.06)]",
                  line: "bg-purple-500/50",
                  iconColor: "text-purple-400",
                },
                {
                  border: "group-hover:border-emerald-500/30",
                  glow: "group-hover:shadow-[0_0_35px_rgba(16,185,129,0.06)]",
                  line: "bg-emerald-500/50",
                  iconColor: "text-emerald-400",
                }
              ]

              const currentTheme = themes[index]

              return (
                <article
                  key={skill.title}
                  className={`group relative overflow-hidden rounded-2xl border border-white/5 bg-[#070b17]/50 p-8 shadow-2xl backdrop-blur-md transition-all duration-500 ${currentTheme.border} ${currentTheme.glow} hover:bg-[#070b17]/80`}
                >
                  {/* Cyber grid overlay */}
                  <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:16px_16px] [mask-image:radial-gradient(ellipse_at_top_left,black_60%,transparent_100%)]" />

                  {/* Corner accents */}
                  <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-white/10 group-hover:border-cyan-500/30 transition-all duration-300" />
                  <div className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r border-white/10 group-hover:border-cyan-500/30 transition-all duration-300" />
                  <div className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b border-l border-white/10 group-hover:border-cyan-500/30 transition-all duration-300" />
                  <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-white/10 group-hover:border-cyan-500/30 transition-all duration-300" />

                  {/* Bottom neon indicator line */}
                  <div className={`absolute bottom-0 left-6 right-6 h-[2px] ${currentTheme.line} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />

                  <div className="relative z-10">
                    <div className="flex items-center gap-4">
                      <div className="rounded-xl border border-white/10 bg-slate-900/50 p-3 transition-transform duration-500 group-hover:scale-110 group-hover:border-white/20">
                        <Icon className={`h-6 w-6 ${currentTheme.iconColor} transition-transform duration-500 group-hover:rotate-6`} />
                      </div>
                      <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-cyan-200 transition-colors">
                        {skill.title}
                      </h3>
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-slate-300">
                      {skill.description}
                    </p>

                    <div className="mt-8 flex flex-wrap gap-2.5">
                      {skill.technologies.map((technology) => {
                        const TechIcon = techIconMap[technology]
                        return (
                          <span
                            key={technology}
                            className="inline-flex items-center gap-1.5 rounded-lg border border-white/5 bg-slate-900/40 px-3 py-1.5 font-mono text-[11px] font-semibold text-slate-300 shadow-md backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/20 hover:bg-slate-900/80 hover:text-white"
                          >
                            {TechIcon && <TechIcon className="h-3.5 w-3.5" />}
                            <span>{technology}</span>
                          </span>
                        )
                      })}
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </section>

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

        <section id="contact" className="section-shell">
          <div className="contact-panel">
            <div><p className="eyebrow"><span />{content.contact.eyebrow}</p><h2 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">{content.contact.title}</h2><p className="mt-5 max-w-md leading-7 text-slate-300">{content.contact.intro}</p><div className="mt-10 space-y-4"><a href={`mailto:${CONTACT_EMAIL}`} className="contact-direct"><Mail size={18} /><span><small>{content.contact.emailLabel}</small>{CONTACT_EMAIL}</span></a><a href="https://github.com/devEddu17x" target="_blank" rel="noopener noreferrer" className="contact-direct"><Github size={18} /><span><small>GitHub</small>github.com/devEddu17x</span></a><a href="https://linkedin.com/in/eduardodevts" target="_blank" rel="noopener noreferrer" className="contact-direct"><Linkedin size={18} /><span><small>LinkedIn</small>linkedin.com/in/eduardodevts</span></a></div></div>
            <form onSubmit={submitContact} className="contact-form">
              <div className="grid gap-4 sm:grid-cols-2"><label>{content.contact.name}<input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} autoComplete="name" /></label><label>{content.contact.email}<input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} autoComplete="email" /></label></div>
              <label>{content.contact.subject}<input required value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} /></label>
              <label>{content.contact.message}<textarea required rows={6} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} /></label>
              <button className="button-primary w-full justify-center" type="submit">{content.contact.send}<Send size={16} /></button>
              <p className="text-center text-xs text-slate-500">{content.contact.formNote}</p>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 px-5 py-8 lg:px-8"><div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between"><p>© {new Date().getFullYear()} eddu.</p><p>{content.footer}</p><div className="flex gap-4"><a href="https://github.com/devEddu17x" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-cyan-200"><Github size={18} /></a><a href="https://linkedin.com/in/eduardodevts" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-cyan-200"><Linkedin size={18} /></a></div></div></footer>
    </div>
  )
}
