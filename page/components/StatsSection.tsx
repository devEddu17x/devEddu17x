"use client"

import { useState, useEffect, useRef, MouseEvent } from "react"
import { ArrowDown } from "lucide-react"
import { useLanguage } from "@/hooks/useLanguageContext"
import { portfolioContent } from "@/lib/portfolio-content"

interface StatsSectionProps {
  navigate: (id: string) => void
}

export default function StatsSection({ navigate }: StatsSectionProps) {
  const { language } = useLanguage()
  const content = portfolioContent[language]

  // Sequential cycling highlight for the 4 core domains
  const [activeIndex, setActiveIndex] = useState(0)
  const isHoveringItemsRef = useRef(false)

  // 3D perspective tilt state for the card
  const [tilt, setTilt] = useState({ x: 0, y: 0, glareX: 50, glareY: 50, isHovered: false })

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHoveringItemsRef.current) {
        setActiveIndex((prev) => (prev + 1) % 4)
      }
    }, 2400)
    return () => clearInterval(interval)
  }, [])

  const handleCardMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height

    // Calculate subtle 3D rotation (-12deg to +12deg)
    const rotateX = (y - 0.5) * -14
    const rotateY = (x - 0.5) * 14

    setTilt({
      x: rotateX,
      y: rotateY,
      glareX: x * 100,
      glareY: y * 100,
      isHovered: true,
    })
  }

  const handleCardMouseLeave = () => {
    setTilt((prev) => ({ ...prev, x: 0, y: 0, isHovered: false }))
    isHoveringItemsRef.current = false
  }

  const profileItems = [
    {
      id: "architectures",
      tag: "architectures //",
      line1: "Serverless · Distributed,",
      line2: "Event-Driven",
      activeBg: "bg-cyan-500/10 border-cyan-500/30 shadow-[0_0_20px_rgba(6,182,212,0.15)]",
      activeTag: "text-cyan-300",
      activeGlow: "text-cyan-100 drop-shadow-[0_0_10px_rgba(103,232,249,0.8)]",
      cursorColor: "bg-cyan-300",
    },
    {
      id: "realtime",
      tag: "realtime_data //",
      line1: "WebSockets ·",
      line2: "WebRTC (P2P)",
      activeBg: "bg-purple-500/10 border-purple-500/30 shadow-[0_0_20px_rgba(168,85,247,0.15)]",
      activeTag: "text-purple-300",
      activeGlow: "text-purple-100 drop-shadow-[0_0_10px_rgba(196,181,253,0.8)]",
      cursorColor: "bg-purple-300",
    },
    {
      id: "deployment",
      tag: "deployment //",
      line1: "Automated CI/CD · OIDC,",
      line2: "Multi-AZ",
      activeBg: "bg-emerald-500/10 border-emerald-500/30 shadow-[0_0_20px_rgba(16,185,129,0.15)]",
      activeTag: "text-emerald-300",
      activeGlow: "text-emerald-100 drop-shadow-[0_0_10px_rgba(110,231,183,0.8)]",
      cursorColor: "bg-emerald-300",
    },
    {
      id: "provisioning",
      tag: "provisioning //",
      line1: "Infrastructure as Code",
      line2: "(IaC)",
      activeBg: "bg-amber-500/10 border-amber-500/30 shadow-[0_0_20px_rgba(245,158,11,0.15)]",
      activeTag: "text-amber-300",
      activeGlow: "text-amber-100 drop-shadow-[0_0_10px_rgba(252,211,77,0.8)]",
      cursorColor: "bg-amber-300",
    },
  ]

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
        {/* Left Column: Interactive 3D Tilt Console terminal Card */}
        <div className="w-full">
          <div
            onMouseMove={handleCardMouseMove}
            onMouseLeave={handleCardMouseLeave}
            style={{
              transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(${tilt.isHovered ? 1.02 : 1}, ${tilt.isHovered ? 1.02 : 1}, 1)`,
              transition: tilt.isHovered ? "transform 0.1s ease-out" : "transform 0.5s ease-out",
            }}
            className="hero-console relative w-full max-w-2xl overflow-hidden rounded-2xl border border-white/15 bg-slate-950/80 shadow-2xl transition-all duration-300 hover:border-cyan-500/40 hover:shadow-[0_20px_60px_rgba(6,182,212,0.15)]"
          >
            {/* Dynamic Specular Glare Layer (Reduced opacity) */}
            {tilt.isHovered && (
              <div
                className="pointer-events-none absolute inset-0 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(400px circle at ${tilt.glareX}% ${tilt.glareY}%, rgba(255, 255, 255, 0.035), transparent 80%)`,
                }}
              />
            )}

            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 bg-slate-900/60">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-400/90 shadow-[0_0_8px_rgba(251,113,133,0.5)]" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-300/90 shadow-[0_0_8px_rgba(252,211,77,0.5)]" />
                <span className="h-2.5 w-2.5 rounded-full bg-cyan-300/90 shadow-[0_0_8px_rgba(103,232,249,0.5)]" />
                <span className="ml-2 font-mono text-[10px] uppercase tracking-[.18em] text-slate-400 font-semibold">production.system</span>
              </div>
              <span className="font-mono text-[9px] text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/30 animate-pulse font-bold tracking-wider">CONNECTED</span>
            </div>

            <div className="space-y-5 p-6 font-mono text-sm leading-6 relative z-10">
              <p className="text-slate-300 font-semibold flex items-center gap-2">
                <span className="text-cyan-400">$</span> engineer.profile
              </p>

              <div className="grid gap-4 sm:grid-cols-2 border-t border-white/10 pt-4">
                {profileItems.map((item, idx) => {
                  const isActive = activeIndex === idx

                  return (
                    <div
                      key={item.id}
                      onMouseEnter={() => {
                        isHoveringItemsRef.current = true
                        setActiveIndex(idx)
                      }}
                      onMouseLeave={() => {
                        isHoveringItemsRef.current = false
                      }}
                      className={`relative cursor-pointer rounded-xl border p-3.5 transition-all duration-500 ${
                        isActive
                          ? item.activeBg
                          : "border-white/5 bg-slate-900/40 hover:border-white/20 hover:bg-slate-900/70"
                      }`}
                    >
                      <span
                        className={`block text-[11px] font-mono font-bold mb-1.5 transition-colors duration-300 ${
                          isActive ? item.activeTag : "text-cyan-300/70"
                        }`}
                      >
                        {item.tag}
                      </span>
                      <div
                        className={`font-mono text-xs sm:text-sm font-semibold leading-relaxed transition-all duration-300 ${
                          isActive ? item.activeGlow : "text-slate-200"
                        }`}
                      >
                        <p>{item.line1}</p>
                        <div className="flex items-center gap-1.5 mt-0.5">
                          <span>{item.line2}</span>
                          {isActive && (
                            <span
                              className={`inline-block h-3.5 w-1.5 ${item.cursorColor} animate-pulse shrink-0 rounded-sm`}
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  )
                })}
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
