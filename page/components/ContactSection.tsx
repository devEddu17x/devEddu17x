"use client"

import { useState, FormEvent, MouseEvent } from "react"
import { Mail, Github, Linkedin, Send, Loader2, CheckCircle2, AlertCircle, Copy, Check } from "lucide-react"
import { useLanguage } from "@/hooks/useLanguageContext"
import { portfolioContent } from "@/lib/portfolio-content"

const CONTACT_EMAIL = "contact@eddux.dev"
const GITHUB_URL = "https://github.com/devEddu17x"
const LINKEDIN_URL = "https://linkedin.com/in/eduardodevts"

type FormStatus = "idle" | "submitting" | "success" | "error"

export default function ContactSection() {
  const { language } = useLanguage()
  const content = portfolioContent[language]
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" })
  const [status, setStatus] = useState<FormStatus>("idle")
  const [errorMessage, setErrorMessage] = useState("")
  const [copiedKey, setCopiedKey] = useState<string | null>(null)

  const handleCopy = (text: string, key: string, event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    event.stopPropagation()
    navigator.clipboard.writeText(text)
    setCopiedKey(key)
    setTimeout(() => setCopiedKey(null), 2000)
  }

  const submitContact = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus("submitting")
    setErrorMessage("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })

      const data = await response.json()

      if (response.ok && data.success) {
        setStatus("success")
        setForm({ name: "", email: "", subject: "", message: "" })
      } else {
        setStatus("error")
        setErrorMessage(data.error || content.contact.error)
      }
    } catch (error) {
      console.error("Failed to send contact form message:", error)
      setStatus("error")
      setErrorMessage(content.contact.error)
    }
  }

  return (
    <section id="contact" className="section-shell border-y border-white/5 bg-[#0a1020]/75">
      <div className="contact-panel">
        <div>
          <p className="eyebrow"><span />{content.contact.eyebrow}</p>
          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">{content.contact.title}</h2>
          <p className="mt-5 max-w-md leading-7 text-slate-300">{content.contact.intro}</p>
          <div className="mt-10 space-y-4">
            <div className="contact-direct">
              <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-3 min-w-0 flex-1">
                <Mail size={18} className="shrink-0 text-cyan-300" />
                <span className="min-w-0">
                  <small>{content.contact.emailLabel}</small>
                  <span className="contact-shiny-text truncate">{CONTACT_EMAIL}</span>
                </span>
              </a>
              <div className="flex items-center gap-2 shrink-0">
                {copiedKey === "email" && (
                  <span className="text-[0.7rem] font-medium text-emerald-300 bg-emerald-500/10 border border-emerald-500/25 px-2.5 py-1 rounded-md">
                    {language === "es" ? "Copiado a portapapeles" : "Copied to clipboard"}
                  </span>
                )}
                <button
                  type="button"
                  onClick={(e) => handleCopy(CONTACT_EMAIL, "email", e)}
                  title={language === "es" ? "Copiar correo" : "Copy email"}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-slate-800/60 text-slate-400 hover:border-cyan-500/40 hover:bg-cyan-500/10 hover:text-cyan-300 transition-all duration-200"
                >
                  {copiedKey === "email" ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                </button>
              </div>
            </div>

            <div className="contact-direct">
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 min-w-0 flex-1">
                <Github size={18} className="shrink-0 text-cyan-300" />
                <span className="min-w-0">
                  <small>GitHub</small>
                  <span className="contact-shiny-text truncate">github.com/devEddu17x</span>
                </span>
              </a>
              <div className="flex items-center gap-2 shrink-0">
                {copiedKey === "github" && (
                  <span className="text-[0.7rem] font-medium text-emerald-300 bg-emerald-500/10 border border-emerald-500/25 px-2.5 py-1 rounded-md">
                    {language === "es" ? "Copiado a portapapeles" : "Copied to clipboard"}
                  </span>
                )}
                <button
                  type="button"
                  onClick={(e) => handleCopy(GITHUB_URL, "github", e)}
                  title={language === "es" ? "Copiar enlace de GitHub" : "Copy GitHub URL"}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-slate-800/60 text-slate-400 hover:border-cyan-500/40 hover:bg-cyan-500/10 hover:text-cyan-300 transition-all duration-200"
                >
                  {copiedKey === "github" ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                </button>
              </div>
            </div>

            <div className="contact-direct">
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 min-w-0 flex-1">
                <Linkedin size={18} className="shrink-0 text-cyan-300" />
                <span className="min-w-0">
                  <small>LinkedIn</small>
                  <span className="contact-shiny-text truncate">linkedin.com/in/eduardodevts</span>
                </span>
              </a>
              <div className="flex items-center gap-2 shrink-0">
                {copiedKey === "linkedin" && (
                  <span className="text-[0.7rem] font-medium text-emerald-300 bg-emerald-500/10 border border-emerald-500/25 px-2.5 py-1 rounded-md">
                    {language === "es" ? "Copiado a portapapeles" : "Copied to clipboard"}
                  </span>
                )}
                <button
                  type="button"
                  onClick={(e) => handleCopy(LINKEDIN_URL, "linkedin", e)}
                  title={language === "es" ? "Copiar enlace de LinkedIn" : "Copy LinkedIn URL"}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-slate-800/60 text-slate-400 hover:border-cyan-500/40 hover:bg-cyan-500/10 hover:text-cyan-300 transition-all duration-200"
                >
                  {copiedKey === "linkedin" ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                </button>
              </div>
            </div>
          </div>
        </div>
        <form onSubmit={submitContact} className="contact-form">
          {status === "success" && (
            <div className="flex items-center gap-3 rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-3.5 text-sm font-medium text-emerald-300">
              <CheckCircle2 size={18} className="shrink-0 text-emerald-400" />
              <span>{content.contact.success}</span>
            </div>
          )}

          {status === "error" && (
            <div className="flex items-start gap-3 rounded-lg border border-rose-500/30 bg-rose-500/10 p-3.5 text-sm font-medium text-rose-300">
              <AlertCircle size={18} className="mt-0.5 shrink-0 text-rose-400" />
              <span>{errorMessage || content.contact.error}</span>
            </div>
          )}

          <div className="grid gap-4 sm:grid-cols-2">
            <label>
              {content.contact.name}
              <input
                required
                disabled={status === "submitting"}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                autoComplete="name"
              />
            </label>
            <label>
              {content.contact.email}
              <input
                required
                type="email"
                disabled={status === "submitting"}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                autoComplete="email"
              />
            </label>
          </div>
          <label>
            {content.contact.subject}
            <input
              required
              disabled={status === "submitting"}
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
            />
          </label>
          <label>
            {content.contact.message}
            <textarea
              required
              rows={6}
              disabled={status === "submitting"}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
          </label>
          <button
            className="button-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
            type="submit"
            disabled={status === "submitting"}
          >
            {status === "submitting" ? (
              <>
                <span>{content.contact.sending}</span>
                <Loader2 size={16} className="animate-spin" />
              </>
            ) : (
              <>
                <span>{content.contact.send}</span>
                <Send size={16} />
              </>
            )}
          </button>
          <p className="text-center text-xs text-slate-500">{content.contact.formNote}</p>
        </form>
      </div>
    </section>
  )
}
