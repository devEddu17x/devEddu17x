"use client"

import { useState, FormEvent } from "react"
import { Mail, Github, Linkedin, Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react"
import { useLanguage } from "@/hooks/useLanguageContext"
import { portfolioContent } from "@/lib/portfolio-content"

const CONTACT_EMAIL = "contact@eddux.dev"

type FormStatus = "idle" | "submitting" | "success" | "error"

export default function ContactSection() {
  const { language } = useLanguage()
  const content = portfolioContent[language]
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" })
  const [status, setStatus] = useState<FormStatus>("idle")
  const [errorMessage, setErrorMessage] = useState("")

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
    <section id="contact" className="section-shell">
      <div className="contact-panel">
        <div>
          <p className="eyebrow"><span />{content.contact.eyebrow}</p>
          <h2 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">{content.contact.title}</h2>
          <p className="mt-5 max-w-md leading-7 text-slate-300">{content.contact.intro}</p>
          <div className="mt-10 space-y-4">
            <a href={`mailto:${CONTACT_EMAIL}`} className="contact-direct">
              <Mail size={18} />
              <span>
                <small>{content.contact.emailLabel}</small>
                {CONTACT_EMAIL}
              </span>
            </a>
            <a href="https://github.com/devEddu17x" target="_blank" rel="noopener noreferrer" className="contact-direct">
              <Github size={18} />
              <span>
                <small>GitHub</small>
                github.com/devEddu17x
              </span>
            </a>
            <a href="https://linkedin.com/in/eduardodevts" target="_blank" rel="noopener noreferrer" className="contact-direct">
              <Linkedin size={18} />
              <span>
                <small>LinkedIn</small>
                linkedin.com/in/eduardodevts
              </span>
            </a>
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
