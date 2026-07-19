"use client"

import { useState, FormEvent } from "react"
import { Mail, Github, Linkedin, Send } from "lucide-react"
import { useLanguage } from "@/hooks/useLanguageContext"
import { portfolioContent } from "@/lib/portfolio-content"

const CONTACT_EMAIL = "contact@eddux.dev"

export default function ContactSection() {
  const { language } = useLanguage()
  const content = portfolioContent[language]
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" })

  const submitContact = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const subject = form.subject || (language === "es" ? "Contacto desde eddux.dev" : "Contact from eddux.dev")
    const body = `${language === "es" ? "Nombre" : "Name"}: ${form.name}\n${language === "es" ? "Correo" : "Email"}: ${form.email}\n\n${form.message}`
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
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
          <div className="grid gap-4 sm:grid-cols-2">
            <label>
              {content.contact.name}
              <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} autoComplete="name" />
            </label>
            <label>
              {content.contact.email}
              <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} autoComplete="email" />
            </label>
          </div>
          <label>
            {content.contact.subject}
            <input required value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} />
          </label>
          <label>
            {content.contact.message}
            <textarea required rows={6} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
          </label>
          <button className="button-primary w-full justify-center" type="submit">
            {content.contact.send}
            <Send size={16} />
          </button>
          <p className="text-center text-xs text-slate-500">{content.contact.formNote}</p>
        </form>
      </div>
    </section>
  )
}
