import { useState } from "react"
import Flower from './Flower'
import Fireworks from './Fireworks'

export default function App() {
  const [showSurprise, setShowSurprise] = useState(false)

  return (
    <div className={`min-h-screen flex items-center justify-center px-4 app-bg ${showSurprise ? 'show-fireworks' : ''}`}>
      <Fireworks />
      <div className="bg-white/5 backdrop-blur-sm rounded-3xl shadow-2xl p-6 sm:p-10 w-full max-w-4xl text-center text-white animate-fadeIn flex flex-col items-center gap-6 relative z-20">

        <h1 className="text-3xl sm:text-4xl font-extrabold mb-2 tracking-tight w-full flex justify-center items-center gap-3">
          Happy Birthday, My Love ❤️
        </h1>
        <p className="text-lg leading-relaxed mb-6 max-w-2xl text-purple-100/90 max-h-36 overflow-hidden box-border">
          You make me feel loved, happy, and better in every way.
          I’m so thankful for you and all the memories we’ve made. I'll be happy to support
          you and be with you. Make you laugh and make you happy, and more pictures and photobooths with you.
          Praying that one day we can be together until the end.🎂✨
        </p>

        {!showSurprise ? (
          <button
            onClick={() => setShowSurprise(true)}
            className="bg-purple-500/95 hover:bg-purple-400/95 transition px-6 py-3 rounded-full font-semibold shadow-lg text-white"
          >
            Click for a Surprise 🎉
          </button>
        ) : (
          <div className="mt-6 flex flex-col items-center gap-6 w-full">
            <div className="w-full flex justify-center">
              <Flower />
            </div>
            <div className="surprise-block w-full flex flex-col items-center">
              <div className="surprise-main text-2xl sm:text-3xl font-semibold animate-bloom text-center text-purple-50">
                I love you so much
                <span className="ml-2 inline-block floating-heart">💖</span>
                <span className="ml-1 inline-block floating-heart delay">🥰</span>
              </div>

              <div className="decor-bar mt-3" />

              <div className="surprise-sub text-sm text-purple-200/80 mt-2">
                Thank you for being an amazing person in my life.
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}
