"use client"

import { useState } from "react"
import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import StatsSection from "@/components/StatsSection"
import ProjectsSection from "@/components/ProjectsSection"
import SkillsSection from "@/components/SkillsSection"
import AboutSection from "@/components/AboutSection"
import ContactSection from "@/components/ContactSection"
import Footer from "@/components/Footer"

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
}

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navigate = (id: string) => {
    setMenuOpen(false)
    scrollTo(id)
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#070b17] text-slate-100 selection:bg-cyan-300 selection:text-slate-950">
      <div className="site-noise" aria-hidden="true" />

      <Header navigate={navigate} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <main>
        <HeroSection navigate={navigate} />
        <StatsSection navigate={navigate} />
        <ProjectsSection />
        <SkillsSection />
        <AboutSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}
