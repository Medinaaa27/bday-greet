import React, { useEffect, useState } from 'react'

export default function Flower() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 60)
    return () => clearTimeout(t)
  }, [])

  const tulips = [0, 1, 2]

  return (
    <div className={loaded ? 'flower-scene tulip-scene' : 'flower-scene tulip-scene not-loaded'}>
      <div className="night" />
      <div className="flowers">
        {tulips.map((idx) => (
          <svg
            key={idx}
            className="tulip"
            viewBox="0 0 120 200"
            width="160"
            height="260"
            style={{ ['--i']: idx }}
            aria-hidden
          >
            <defs>
              <linearGradient id={`tg-${idx}`} x1="0" x2="1">
                <stop offset="0%" stopColor="#e9d5ff" />
                <stop offset="45%" stopColor="#c4b5fd" />
                <stop offset="100%" stopColor="#7c3aed" />
              </linearGradient>
              <linearGradient id={`lg-${idx}`} x1="0" x2="1">
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#5b21b6" />
              </linearGradient>
              <linearGradient id={`leaf-${idx}`} x1="0" x2="1">
                <stop offset="0%" stopColor="#7c3aed" />
                <stop offset="100%" stopColor="#4c1d95" />
              </linearGradient>
            </defs>

            <g className="tulip-group" style={{ transformOrigin: '50% 35%' }}>
              {/* left petal */}
              <ellipse className="tulip-petal" cx="40" cy="56" rx="22" ry="34" fill={`url(#tg-${idx})`} transform="rotate(-18 40 56)" style={{ animationDelay: `${idx * 0.18}s` }} />
              {/* center petal */}
              <ellipse className="tulip-petal" cx="60" cy="40" rx="24" ry="38" fill={`url(#tg-${idx})`} style={{ animationDelay: `${0.12 + idx * 0.18}s` }} />
              {/* right petal */}
              <ellipse className="tulip-petal" cx="80" cy="56" rx="22" ry="34" fill={`url(#tg-${idx})`} transform="rotate(18 80 56)" style={{ animationDelay: `${0.24 + idx * 0.18}s` }} />

              {/* stem */}
              <rect className="tulip-stem" x="58" y="78" width="6" height="92" rx="3" fill={`url(#leaf-${idx})`} />

              {/* leaf */}
              <path className="tulip-leaf" d="M44 130 C30 110, 30 100, 62 104 C88 107, 72 138, 44 130 Z" fill={`url(#leaf-${idx})`} opacity="0.98" />
            </g>
          </svg>
        ))}
      </div>
    </div>
  )
}
