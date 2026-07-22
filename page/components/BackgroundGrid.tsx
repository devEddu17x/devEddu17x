"use client"

import { useEffect, useState, useRef } from "react"

export default function BackgroundGrid() {
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 })
  const [isVisible, setIsVisible] = useState(false)
  const animFrameRef = useRef<number | null>(null)
  const lastPosRef = useRef({ x: -1000, y: -1000 })

  useEffect(() => {
    const updatePosition = (x: number, y: number) => {
      lastPosRef.current = { x, y }

      if (!animFrameRef.current) {
        animFrameRef.current = requestAnimationFrame(() => {
          setMousePosition(lastPosRef.current)
          animFrameRef.current = null
        })
      }

      setIsVisible(true)
    }

    const handleMouseMove = (e: MouseEvent) => {
      updatePosition(e.clientX, e.clientY)
    }

    const handleMouseEnter = (e: MouseEvent) => {
      updatePosition(e.clientX, e.clientY)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    const handleWindowFocus = () => {
      setIsVisible(true)
    }

    const handleWindowBlur = () => {
      setIsVisible(false)
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    window.addEventListener("mouseenter", handleMouseEnter, { passive: true })
    window.addEventListener("mouseleave", handleMouseLeave)
    window.addEventListener("focus", handleWindowFocus)
    window.addEventListener("blur", handleWindowBlur)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseenter", handleMouseEnter)
      window.removeEventListener("mouseleave", handleMouseLeave)
      window.removeEventListener("focus", handleWindowFocus)
      window.removeEventListener("blur", handleWindowBlur)
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current)
      }
    }
  }, [])

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* 1. Interactive Spotlight Glow (Layer behind the grid lines) */}
      <div
        className="absolute inset-0 transition-opacity duration-500 ease-out"
        style={{
          opacity: isVisible ? 1 : 0,
          background: `radial-gradient(320px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(6, 182, 212, 0.085), rgba(124, 58, 237, 0.02) 40%, transparent 70%)`,
        }}
      />

      {/* 2. Global Uniform Grid Pattern Overlay (Placed over the glow) */}
      <div className="global-grid absolute inset-0" />
    </div>
  )
}
