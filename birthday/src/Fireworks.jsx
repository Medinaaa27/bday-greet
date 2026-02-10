import React, { useEffect, useState } from 'react'

export default function Fireworks({ enabled = true }) {
  const [bursts, setBursts] = useState([])

  useEffect(() => {
    if (!enabled) return

    // spawn bursts regularly; sometimes spawn multiple at once
    const interval = setInterval(() => {
      const spawnCount = 1 + Math.floor(Math.random() * 3) // 1-3 bursts
      for (let i = 0; i < spawnCount; i++) {
        const id = Date.now() + Math.random()
        // jitter positions for simultaneous bursts
        const x = Math.min(98, Math.max(2, Math.random() * 100))
        const y = Math.min(75, Math.max(6, Math.random() * 60 + 8))
        setBursts((b) => [...b, { id, x, y }])
        // remove after animation completes (slightly longer)
        setTimeout(() => setBursts((b) => b.filter((p) => p.id !== id)), 1800)
      }
    }, 600)

    return () => clearInterval(interval)
  }, [enabled])

  return (
    <div className="fireworks" aria-hidden>
      {bursts.map((burst) => (
        <div
          key={burst.id}
          className="firework-burst"
          style={{ left: `${burst.x}%`, top: `${burst.y}%` }}
        >
          {Array.from({ length: 16 }).map((_, i) => {
            const angle = (360 / 12) * i
            const radius = 28 + Math.round(Math.random() * 36)
            const tx = Math.cos((angle * Math.PI) / 180) * radius
            const ty = Math.sin((angle * Math.PI) / 180) * radius
            const delay = Math.round(Math.random() * 120)
            return (
              <span
                key={i}
                className="fw-spark"
                style={{
                  '--tx': `${tx}px`,
                  '--ty': `${ty}px`,
                  animationDelay: `${delay}ms`,
                  background: 'radial-gradient(circle at 30% 30%, rgba(233,213,255,1), rgba(124,58,237,1))',
                }}
              />
            )
          })}
        </div>
      ))}
    </div>
  )
}
