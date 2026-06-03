import { useState } from 'react'
import './Onboarding.css'

const SLIDES = [
  {
    emoji: '📱',
    title: 'Your screen time is\ntrying to tell you something.',
    sub: 'The average person spends over 1,000 hours on their phone every year.',
    cta: null,
  },
  {
    emoji: '🎸',
    title: '1,000 hours is enough to\nlearn almost anything.',
    sub: 'Basic guitar takes 50 hours. Python takes 40. A new language takes 150.',
    cta: null,
  },
  {
    emoji: '✨',
    title: 'See exactly what you\ncould have learned.',
    sub: 'Just enter your screen time — we do the rest.',
    cta: "Let's go",
  },
]

export default function Onboarding({ onDone }) {
  const [slide, setSlide] = useState(0)
  const current = SLIDES[slide]
  const isLast = slide === SLIDES.length - 1

  function next() {
    if (isLast) {
      onDone()
    } else {
      setSlide(s => s + 1)
    }
  }

  return (
    <div className="onboarding">
      <button className="ob-skip" onClick={onDone}>Skip</button>

      <div className="ob-slides">
        <div className="ob-slide" key={slide}>
          <div className="ob-emoji">{current.emoji}</div>
          <h1 className="ob-title">{current.title}</h1>
          <p className="ob-sub">{current.sub}</p>
        </div>
      </div>

      <div className="ob-footer">
        <div className="ob-dots">
          {SLIDES.map((_, i) => (
            <div key={i} className={`ob-dot ${i === slide ? 'active' : ''}`} />
          ))}
        </div>
        <button className="ob-cta" onClick={next}>
          {isLast ? "Let's go" : 'Next'}
        </button>
      </div>
    </div>
  )
}
