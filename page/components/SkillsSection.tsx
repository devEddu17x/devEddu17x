"use client"

import { Server, Cloud, Database, Workflow } from "lucide-react"
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
  "Terraform": SiTerraform,
  "Aurora (AWS)": SiAmazon,
  "S3": SiAmazon,
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

const techColorMap: Record<string, string> = {
  "TypeScript": "text-[#3178c6]",
  "Node.js": "text-[#5FA04E]",
  "NestJS": "text-[#E0234E]",
  "REST": "text-cyan-400",
  "OpenAPI": "text-[#85EA2D]",
  "WebSockets": "text-[#387BCC]",
  "WebRTC": "text-[#FF6E14]",
  "AWS": "text-[#FF9900]",
  "Terraform / HCL": "text-[#844FBA]",
  "Terraform": "text-[#844FBA]",
  "Aurora (AWS)": "text-[#FF9900]",
  "S3": "text-[#FF9900]",
  "ECS": "text-[#FF9900]",
  "Lambda": "text-[#FF9900]",
  "API Gateway": "text-[#FF9900]",
  "Cloudflare": "text-[#F38020]",
  "PostgreSQL": "text-[#4169E1]",
  "MySQL": "text-[#00758F]",
  "DynamoDB": "text-[#2C8EBB]",
  "Kafka": "text-white",
  "Apache Spark": "text-[#E25A1C]",
  "Cloudflare R2": "text-[#F38020]",
  "Docker": "text-[#2496ED]",
  "Linux": "text-[#FCC624]",
  "GitHub Actions": "text-[#2088FF]",
  "OIDC": "text-amber-400",
  "CloudWatch": "text-[#FF4F8B]",
  "Grafana": "text-[#F9A03F]"
}

export default function SkillsSection() {
  const { language } = useLanguage()
  const content = portfolioContent[language]

  return (
    <section id="skills" className="section-shell border-y border-white/5 bg-[#0a1020]/75">
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
                  {/*                   <div className="rounded-xl border border-white/10 bg-slate-900/50 p-3 transition-transform duration-500 group-hover:scale-110 group-hover:border-white/20">
                    <Icon className={`h-6 w-6 ${currentTheme.iconColor} transition-transform duration-500 group-hover:rotate-6`} />
                  </div> */}
                  <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-cyan-200 transition-colors">
                    {skill.title}
                  </h3>
                </div>

                <div className="mt-8 flex flex-wrap gap-2.5">
                  {skill.technologies.map((technology) => {
                    const TechIcon = techIconMap[technology]
                    const iconColor = techColorMap[technology] || "text-slate-400"
                    return (
                      <span
                        key={technology}
                        className="inline-flex items-center gap-2.5 rounded-lg border border-white/10 bg-slate-950/60 px-3.5 py-2 font-mono text-[12.5px] font-semibold text-slate-200 shadow-md backdrop-blur-sm transition-all duration-300 hover:border-cyan-500/30 hover:bg-slate-900/90 hover:text-white"
                      >
                        {TechIcon && <TechIcon className={`h-[30px] w-[30px] ${iconColor} shrink-0`} />}
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
  )
}
