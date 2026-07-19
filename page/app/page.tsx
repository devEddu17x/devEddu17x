"use client"

import Portfolio from "../portfolio"
import { LanguageProvider } from "@/hooks/useLanguageContext"

export default function SyntheticV0PageForDeployment() {
  return (
    <LanguageProvider>
      <Portfolio />
    </LanguageProvider>
  )
}