import { useState, useRef, useEffect } from 'react'
import { matchSkills } from '../data/skillMatcher'
import { CATEGORIES } from '../data/skillLibrary'
import { SKILL_RESOURCES } from '../data/skillResources'
import WeeklyReport from './WeeklyReport'
import './HomeTab.css'

const PERIODS = ['Today', 'This Week', 'This Month', 'Custom']

const GUIDE_STEPS = [
  { icon: '⚙️', text: 'Open the Settings app on your iPhone' },
  { icon: '📱', text: 'Scroll down and tap Screen Time' },
  { icon: '📊', text: 'Tap "See All Activity" under your name' },
  { icon: '🔢', text: 'Find "Total Screen Time" at the top — enter that number here' },
]

// --- Streak helpers ---
function getStreak(history) {
  if (!history.length) return 0
  const days = [...new Set(
    history.map(e => new Date(e.recordedAt).toDateString())
  )].sort((a, b) => new Date(b) - new Date(a))

  let streak = 0
  let cursor = new Date()
  cursor.setHours(0, 0, 0, 0)

  for (const day of days) {
    const d = new Date(day)
    d.setHours(0, 0, 0, 0)
    const diff = Math.round((cursor - d) / 86400000)
    if (diff <= 1) { streak++; cursor = d }
    else break
  }
  return streak
}

function getTotalHours(history) {
  return history.reduce((s, e) => s + e.hours, 0)
}

// --- Sub-components ---

function HowToGuide({ onClose }) {
  return (
    <div className="guide-overlay" onClick={onClose}>
      <div className="guide-sheet" onClick={e => e.stopPropagation()}>
        <div className="guide-header">
          <span className="guide-title">How to find your Screen Time</span>
          <button className="guide-close" onClick={onClose}>Done</button>
        </div>
        <div className="guide-steps">
          {GUIDE_STEPS.map((step, i) => (
            <div key={i} className="guide-step">
              <div className="guide-step-num">{i + 1}</div>
              <div className="guide-step-icon">{step.icon}</div>
              <div className="guide-step-text">{step.text}</div>
            </div>
          ))}
        </div>
        <div className="guide-tip">
          💡 The hours shown match the period you select — daily, weekly, etc.
        </div>
      </div>
    </div>
  )
}

function ProgressArc({ progress, size = 44, stroke = 4 }) {
  const r = (size - stroke) / 2
  const circ = 2 * Math.PI * r
  const clamped = Math.min(Math.max(progress, 0), 1)
  const offset = circ * (1 - clamped)
  const color = progress >= 1 ? 'var(--green)' : 'var(--accent)'
  return (
    <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth={stroke} />
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={color} strokeWidth={stroke}
        strokeLinecap="round" strokeDasharray={circ} strokeDashoffset={offset}
        style={{ transition: 'stroke-dashoffset 0.5s ease' }} />
    </svg>
  )
}

function SkillCard({ skill, inputHours, isPremium, onShowPremium }) {
  const progress = inputHours / skill.hours
  const done = inputHours >= skill.hours
  const cat = CATEGORIES[skill.category]
  const remaining = skill.hours - inputHours
  const resource = SKILL_RESOURCES[skill.name]

  return (
    <div className="skill-card">
      <div className="skill-card-top">
        <ProgressArc progress={progress} />
        <span className="cat-badge" style={{ background: cat.color }}>{cat.label}</span>
      </div>
      <div className="skill-card-name">{skill.name}</div>
      <div className="skill-card-hours">{skill.hours}h total</div>
      <div className="skill-card-status" style={{ color: done ? 'var(--green)' : 'var(--text2)' }}>
        {done ? 'Completed ✓' : `${remaining % 1 === 0 ? remaining : remaining.toFixed(1)}h away`}
      </div>
      {resource && (
        isPremium
          ? <a className="skill-resource-link" href={resource.url} target="_blank" rel="noopener noreferrer">
              {resource.label} →
            </a>
          : <button className="skill-resource-lock" onClick={onShowPremium}>
              🔒 Start learning →
            </button>
      )}
    </div>
  )
}

function ComboCard({ skills, totalHours }) {
  const used = skills.reduce((s, sk) => s + sk.hours, 0)
  const pct = Math.round(Math.min(used / totalHours, 1) * 100)
  return (
    <div className="combo-card">
      {skills.map(sk => {
        const cat = CATEGORIES[sk.category]
        return (
          <div key={sk.id} className="combo-row">
            <span className="combo-icon">{cat.icon}</span>
            <span className="combo-name">{sk.name}</span>
            <span className="combo-hrs">{sk.hours}h</span>
          </div>
        )
      })}
      <div className="combo-footer">
        <div className="combo-bar-track">
          <div className="combo-bar-fill" style={{ width: `${pct}%`, background: pct >= 80 ? 'var(--green)' : 'var(--accent)' }} />
        </div>
        <span className="combo-pct" style={{ color: pct >= 80 ? 'var(--green)' : 'var(--text2)' }}>{pct}%</span>
      </div>
    </div>
  )
}

function AlmostRow({ skill, inputHours, onAddHours }) {
  const progress = inputHours / skill.hours
  const needed = (skill.hours - inputHours)
  const neededDisplay = needed % 1 === 0 ? needed : needed.toFixed(1)
  const cat = CATEGORIES[skill.category]
  return (
    <div className="almost-row">
      <ProgressArc progress={progress} size={40} />
      <div className="almost-info">
        <div className="almost-name">{skill.name}</div>
        <div className="almost-sub">{neededDisplay} more hours needed</div>
      </div>
      <button className="almost-add-btn" onClick={() => onAddHours(needed)}>
        +{neededDisplay}h
      </button>
    </div>
  )
}

function ShareCard({ result, period }) {
  const [copied, setCopied] = useState(false)
  const topSkills = result.completable.slice(0, 3).map(s => s.name)
  const text = topSkills.length
    ? `In ${result.totalInputHours}h of screen time I could have learned: ${topSkills.join(', ')}. What could you learn? → screentimeskills-pwa.vercel.app`
    : null
  if (!text) return null

  function copy() {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <div className="share-card">
      <div className="share-preview">{text}</div>
      <button className="share-btn" onClick={copy}>
        {copied ? '✓ Copied!' : '📤 Share your result'}
      </button>
    </div>
  )
}

// --- Main component ---

export default function HomeTab({ allSkills, addHistoryEntry, history, isPremium, onShowPremium }) {
  const [inputText, setInputText] = useState(() => localStorage.getItem('sts_last_hours') || '')
  const [period, setPeriod] = useState(() => localStorage.getItem('sts_last_period') || 'This Week')
  const [result, setResult] = useState(null)
  const [showGuide, setShowGuide] = useState(false)
  const inputRef = useRef(null)

  const streak = getStreak(history)
  const totalTracked = getTotalHours(history)

  useEffect(() => {
    const saved = localStorage.getItem('sts_last_hours')
    if (saved && parseFloat(saved) > 0) {
      setResult(matchSkills(parseFloat(saved), allSkills))
    }
    const timer = setTimeout(() => inputRef.current?.focus(), 300)
    return () => clearTimeout(timer)
  }, [])

  function handleOpenSettings() {
    // Attempt iOS deep link to Screen Time settings.
    // This works in native apps but Apple blocks it in Safari/PWA.
    // We try it anyway, then fall back to the guide after a short delay
    // if the page is still visible (meaning the deep link didn't work).
    window.location.href = 'App-Prefs:root=SCREEN_TIME'
    const timer = setTimeout(() => {
      if (!document.hidden) setShowGuide(true)
    }, 800)
    const onVisible = () => { clearTimeout(timer); document.removeEventListener('visibilitychange', onVisible) }
    document.addEventListener('visibilitychange', onVisible)
  }

  function handleCalculate() {
    const hours = parseFloat(inputText)
    if (!hours || hours <= 0) return
    setResult(matchSkills(hours, allSkills))
    addHistoryEntry(hours, period)
    localStorage.setItem('sts_last_hours', inputText)
    localStorage.setItem('sts_last_period', period)
    if (navigator.vibrate) navigator.vibrate(10)
  }

  function handleAddHours(extra) {
    const current = parseFloat(inputText) || 0
    const next = current + extra
    const rounded = Math.round(next * 10) / 10
    setInputText(String(rounded))
    const newResult = matchSkills(rounded, allSkills)
    setResult(newResult)
    localStorage.setItem('sts_last_hours', String(rounded))
  }

  const hours = parseFloat(inputText) || 0

  return (
    <div className="home-tab">
      <div className="input-section">

        {/* Header with streak */}
        <div className="home-header">
          <h1 className="home-title">ScreenTimeSkills</h1>
          {streak > 0 && (
            <div className="streak-badge">
              🔥 {streak} day{streak !== 1 ? 's' : ''}
            </div>
          )}
        </div>

        {/* Total tracked stat */}
        {totalTracked > 0 && (
          <div className="tracked-stat">
            You've tracked <strong>{totalTracked % 1 === 0 ? totalTracked : totalTracked.toFixed(1)} hours</strong> of screen time total
          </div>
        )}

        {/* Settings deep link + nudge */}
        <div className="settings-nudge-row">
          <button className="open-settings-btn" onClick={handleOpenSettings}>
            📱 Open Screen Time
          </button>
          <button className="nudge-guide-btn" onClick={() => setShowGuide(true)}>
            How? →
          </button>
        </div>

        {/* Hours input */}
        <div className="hours-input-row">
          <input
            ref={inputRef}
            type="number"
            inputMode="decimal"
            placeholder="0"
            value={inputText}
            onChange={e => setInputText(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleCalculate()}
            className="hours-input"
          />
          <span className="hours-label">hrs</span>
        </div>

        {/* Period pills */}
        <div className="period-pills">
          {PERIODS.map(p => (
            <button key={p} className={`period-pill ${period === p ? 'active' : ''}`} onClick={() => setPeriod(p)}>
              {p}
            </button>
          ))}
        </div>

        <button className="calc-btn" onClick={handleCalculate} disabled={hours <= 0}>
          What could I have learned?
        </button>
      </div>

      {/* Results */}
      {result && (
        <div className="results">

          {/* Motivational headline */}
          {result.completable.length > 0 && (
            <div className="motivation-banner">
              🎉 With {hours % 1 === 0 ? hours : hours.toFixed(1)} hours you could have learned{' '}
              <strong>{result.completable.length} skill{result.completable.length !== 1 ? 's' : ''}</strong>
            </div>
          )}

          {result.completable.length > 0 && (
            <section>
              <div className="section-header">
                <span className="section-title">You could have learned</span>
                <span className="section-sub">{result.completable.length} fully completable</span>
              </div>
              <div className="cards-scroll">
                {result.completable.map(sk => (
                  <SkillCard key={sk.id} skill={sk} inputHours={hours} isPremium={isPremium} onShowPremium={onShowPremium} />
                ))}
              </div>
            </section>
          )}

          {result.combinations.length > 0 && (
            <section>
              <div className="section-header">
                <span className="section-title">Great combinations</span>
                <span className="section-sub">Skills that fill your time well</span>
              </div>
              {result.combinations.map((combo, i) => (
                <ComboCard key={i} skills={combo} totalHours={hours} />
              ))}
            </section>
          )}

          {result.almostThere.length > 0 && (
            <section>
              <div className="section-header">
                <span className="section-title">So close!</span>
                <span className="section-sub">Reduce screen time by this much and you have it</span>
              </div>
              {result.almostThere.map(sk => (
                <AlmostRow key={sk.id} skill={sk} inputHours={hours} onAddHours={handleAddHours} />
              ))}
            </section>
          )}

          {/* Weekly report — premium only */}
          <section>
            <div className="section-header">
              <span className="section-title">Weekly Trend</span>
              {!isPremium && <span className="premium-tag" onClick={onShowPremium}>✨ Premium</span>}
            </div>
            {isPremium
              ? <WeeklyReport history={history} />
              : <div className="premium-blur-card" onClick={onShowPremium}>
                  <div className="premium-blur-inner">
                    <div className="premium-blur-icon">📈</div>
                    <div className="premium-blur-text">See if your screen time is trending down</div>
                    <div className="premium-blur-cta">Unlock with Premium →</div>
                  </div>
                </div>
            }
          </section>

          {result.completable.length > 0 && (
            <section>
              <ShareCard result={result} period={period} />
            </section>
          )}

          {!result.completable.length && !result.almostThere.length && (
            <div className="no-results">
              <div className="no-results-icon">💡</div>
              <div className="no-results-title">Not enough hours yet</div>
              <div className="no-results-sub">Even small amounts add up. Keep tracking!</div>
            </div>
          )}
        </div>
      )}

      {!result && (
        <div className="empty-home">
          <div className="empty-examples">
            <div className="empty-example-item">📱 40h of scrolling</div>
            <div className="empty-example-arrow">=</div>
            <div className="empty-example-skills">
              <span>Python Basics</span>
              <span>+ Yoga</span>
              <span>+ Meditation</span>
            </div>
          </div>
          <p className="empty-home-sub">Enter your screen time above to see what you could have learned instead.</p>
        </div>
      )}

      {showGuide && <HowToGuide onClose={() => setShowGuide(false)} />}
    </div>
  )
}
