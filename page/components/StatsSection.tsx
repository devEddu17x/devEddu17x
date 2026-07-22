"use client"

import { ArrowDown } from "lucide-react"
import { useLanguage } from "@/hooks/useLanguageContext"
import { portfolioContent } from "@/lib/portfolio-content"

interface StatsSectionProps {
  navigate: (id: string) => void
}

export default function StatsSection({ navigate }: StatsSectionProps) {
  const { language } = useLanguage()
  const content = portfolioContent[language]

  return (
    <section id="stats" className="relative isolate flex flex-col min-h-screen justify-center overflow-hidden border-y border-white/5 bg-[#0a1020]/75 py-24">
      <div className="hero-grid" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-7xl px-5 lg:px-8 mb-10 text-left">
        <div className="flex items-center gap-3">
          <span className="block h-[1px] w-10 bg-cyan-300/80" />
          <h2 className="font-mono text-sm sm:text-base font-black tracking-[.25em] text-cyan-200 uppercase">
            {language === "es" ? "METRICAS & DATOS" : "METRICS & DATA"}
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
              <div className="mt-5 border-t border-white/10 pt-4 text-xs text-slate-500 flex justify-between items-center">
                <div>
                  {language === "es" ? "sistemas en producción" : "systems in production"}{" "}
                  <span className="ml-2 text-emerald-300 font-semibold">● operational</span>
                </div>
                <span className="text-slate-600">// sys.active</span>
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
  )
}
