import { useState, useRef, useEffect } from 'react'
import { matchSkills } from '../data/skillMatcher'
import { CATEGORIES } from '../data/skillLibrary'
import { getPrimaryResource, getSkillResources } from '../data/skillResourceDirectory'
import { getStored, setStored } from '../lib/storage'
import WeeklyReport from './WeeklyReport'
import {
  CATEGORY_ICONS,
  IconFlame, IconPhone, IconLightbulb, IconShare,
  IconLock, IconStar, IconCheck, IconArrowRight,
} from './Icons'
import './HomeTab.css'

const PERIODS = ['Today', 'This Week', 'This Month']

const GUIDE_STEPS = [
  { Icon: IconPhone,      text: 'Open the Settings app on your iPhone' },
  { Icon: IconArrowRight, text: 'Scroll down and tap Screen Time' },
  { Icon: IconCheck,      text: 'Tap "See All Activity" under your name' },
  { Icon: IconLightbulb,  text: 'Find "Total Screen Time" at the top — enter that number here' },
]

const CATEGORY_BLURBS = {
  languages:   'A new language rewires your brain, opens cultures, and builds lasting connections across borders.',
  instruments: 'Music trains focus, patience, and memory. Once learned, it stays with you for life.',
  coding:      'Code is leverage. Build tools, automate repetitive work, or make a career pivot.',
  fitness:     'Physical training elevates every other area — energy, sleep, confidence, and focus.',
  creative:    'Creative skills make you irreplaceable. They give you a channel no algorithm can replicate.',
  business:    'Understanding business multiplies the value of everything else you know.',
  culinary:    'Cooking daily is one of the highest-ROI skills — health, cost, and connection all improve.',
  mind:        'Cognitive training compounds over time. A sharper mind benefits every decision you make.',
  diy:         'Hands-on skills give you independence and save thousands in maintenance and repair costs.',
  wellness:    'Wellbeing is the foundation everything else is built on. Invest here first.',
}

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

function getLastHoursForPeriod(history, period) {
  const entry = history.find(e => e.period === period)
  return entry ? entry.hours : null
}

function periodLabel(period) {
  if (period === 'Today') return 'today'
  if (period === 'This Week') return 'this week'
  return 'this month'
}

function countFittable(completable, totalHours) {
  const sorted = [...completable].sort((a, b) => a.hours - b.hours)
  let remaining = totalHours
  let count = 0
  for (const sk of sorted) {
    if (remaining >= sk.hours) { remaining -= sk.hours; count++ }
    else break
  }
  return count
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
          {GUIDE_STEPS.map(({ Icon, text }, i) => (
            <div key={i} className="guide-step">
              <div className="guide-step-num">{i + 1}</div>
              <Icon size={20} color="var(--accent)" className="guide-step-icon" />
              <div className="guide-step-text">{text}</div>
            </div>
          ))}
        </div>
        <div className="guide-tip">
          <IconLightbulb size={15} color="var(--text2)" />
          The hours shown match the period you select — daily, weekly, etc.
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
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="var(--border)" strokeWidth={stroke} />
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={color} strokeWidth={stroke}
        strokeLinecap="round" strokeDasharray={circ} strokeDashoffset={offset}
        style={{ transition: 'stroke-dashoffset 0.5s ease' }} />
    </svg>
  )
}

function SkillCard({ skill, inputHours, onOpenDetail }) {
  const cat = CATEGORIES[skill.category]
  const CatIcon = CATEGORY_ICONS[skill.category]
  const surplus = inputHours - skill.hours
  const surplusLabel = surplus === 0
    ? 'Perfect fit'
    : `${surplus % 1 === 0 ? surplus : surplus.toFixed(1)}h left over`
  const primary = getPrimaryResource(skill.name)

  function handleStartLearning(e) {
    e.stopPropagation()
    if (primary) window.open(primary.url, '_blank', 'noopener noreferrer')
  }

  return (
    <div className="skill-card" onClick={() => onOpenDetail && onOpenDetail(skill)}>
      <span className="cat-badge" style={{ background: cat.color }}>
        {CatIcon && <CatIcon size={10} color="#fff" />}
        {cat.label}
      </span>
      <div className="skill-card-arc">
        <ProgressArc progress={1} size={64} stroke={5} />
      </div>
      <div className="skill-card-name">{skill.name}</div>
      <div className="skill-card-hours">{skill.hours}h to learn</div>
      <div className="skill-card-surplus">{surplusLabel}</div>
      <button className="start-learning-btn" onClick={handleStartLearning}>
        Start Learning
      </button>
    </div>
  )
}

const PLATFORM_COLORS = {
  youtube:   '#FF0000',
  app:       '#007AFF',
  website:   '#6B7280',
  course:    '#7C3AED',
  book:      '#92400E',
  tool:      '#0F766E',
  community: '#16A34A',
}

function ResourceRow({ resource }) {
  const color = PLATFORM_COLORS[resource.platform] || '#6B7280'
  return (
    <a
      href={resource.url}
      target="_blank"
      rel="noopener noreferrer"
      className="resource-row"
      onClick={e => e.stopPropagation()}
    >
      <div className="resource-info">
        <div className="resource-top-row">
          <span className="resource-name">{resource.name}</span>
          <span className="resource-badge" style={{ background: color }}>{resource.platform}</span>
        </div>
        <span className="resource-desc">{resource.description}</span>
      </div>
    </a>
  )
}

function SkillLanding({ skill, isPremium, onShowPremium, onClose }) {
  const allResources = getSkillResources(skill.name)
  const primary      = allResources[0]
  const additional   = allResources.slice(1)
  const cat   = CATEGORIES[skill.category]
  const CatIcon = CATEGORY_ICONS[skill.category]
  const blurb = CATEGORY_BLURBS[skill.category]

  return (
    <div className="landing-overlay" onClick={onClose}>
      <div className="landing-sheet" onClick={e => e.stopPropagation()}>
        <div className="landing-handle" />

        <div className="landing-cat" style={{ color: cat.color }}>
          {CatIcon && <CatIcon size={16} color={cat.color} />}
          <span>{cat.label}</span>
        </div>

        <h2 className="landing-title">{skill.name}</h2>
        <div className="landing-meta">~{skill.hours} hours to learn</div>

        <p className="landing-blurb">{blurb}</p>

        <div className="landing-stat-row">
          <div className="landing-stat">
            <div className="landing-stat-val">{skill.hours}h</div>
            <div className="landing-stat-label">Time needed</div>
          </div>
          <div className="landing-stat-divider" />
          <div className="landing-stat">
            <div className="landing-stat-val">{allResources.length}</div>
            <div className="landing-stat-label">Free resources</div>
          </div>
          <div className="landing-stat-divider" />
          <div className="landing-stat">
            <div className="landing-stat-val">∞</div>
            <div className="landing-stat-label">Payoff</div>
          </div>
        </div>

        {/* Primary resource — always free */}
        {primary && (
          <a
            href={primary.url}
            target="_blank"
            rel="noopener noreferrer"
            className="landing-cta"
            onClick={e => e.stopPropagation()}
          >
            Start with {primary.name} →
          </a>
        )}

        {/* Additional resources — premium gated */}
        {additional.length > 0 && (
          <div className="landing-resources">
            <div className="landing-resources-header">
              <span className="landing-resources-title">{additional.length} more free resources</span>
              {!isPremium && (
                <span className="premium-tag" onClick={e => { e.stopPropagation(); onShowPremium() }}>
                  <IconStar size={11} color="var(--accent)" /> Premium
                </span>
              )}
            </div>
            {isPremium ? (
              additional.map((res, i) => <ResourceRow key={i} resource={res} />)
            ) : (
              <div className="resources-locked" onClick={e => { e.stopPropagation(); onShowPremium() }}>
                {additional.slice(0, 2).map((res, i) => (
                  <div key={i} className="resource-row locked">
                    <div className="resource-info blurred">
                      <div className="resource-top-row">
                        <span className="resource-name">{res.name}</span>
                        <span className="resource-badge" style={{ background: PLATFORM_COLORS[res.platform] || '#6B7280' }}>{res.platform}</span>
                      </div>
                      <span className="resource-desc">{res.description}</span>
                    </div>
                  </div>
                ))}
                <div className="resources-unlock-cta">
                  <IconLock size={13} color="var(--accent)" />
                  Unlock {additional.length} more resources with Premium
                </div>
              </div>
            )}
          </div>
        )}

        <button className="landing-dismiss" onClick={onClose}>Close</button>
      </div>
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
        const CatIcon = CATEGORY_ICONS[sk.category]
        return (
          <div key={sk.id} className="combo-row">
            {CatIcon
              ? <CatIcon size={16} color={cat.color} className="combo-icon" />
              : <span className="combo-icon">{cat.icon}</span>}
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
  const needed = skill.hours - inputHours
  const neededDisplay = needed % 1 === 0 ? needed : needed.toFixed(1)
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

function ShareCard({ result }) {
  const [copied, setCopied] = useState(false)
  const topSkills = result.completable.slice(0, 3).map(s => s.name)
  if (!topSkills.length) return null

  const hoursDisplay = result.totalHours % 1 === 0 ? result.totalHours : result.totalHours.toFixed(1)
  const text = `In ${hoursDisplay}h of screen time I could have learned: ${topSkills.join(', ')}. What could you learn? → unlocked.app`

  function copy() {
    // clipboard API is unavailable in insecure contexts and can be denied
    navigator.clipboard?.writeText(text).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }).catch(() => {})
  }

  return (
    <div className="share-card">
      <div className="share-card-header">
        <IconShare size={16} color="var(--accent)" />
        <span className="share-card-title">Share your result</span>
      </div>
      <div className="share-preview">"{text}"</div>
      <button className="share-btn" onClick={copy}>
        {copied ? '✓ Copied to clipboard' : 'Copy & Share'}
      </button>
    </div>
  )
}

// --- Main component ---

export default function HomeTab({ allSkills, addHistoryEntry, history, isPremium, onShowPremium }) {
  const [inputText, setInputText] = useState(() => getStored('sts_last_hours') || '')
  const [period, setPeriod]       = useState(() => getStored('sts_last_period') || 'This Week')
  // Restore the last result so returning users land on their numbers, not a blank form
  const [result, setResult]       = useState(() => {
    const saved = parseFloat(getStored('sts_last_hours'))
    return saved > 0 ? matchSkills(saved, allSkills) : null
  })
  const [showGuide, setShowGuide] = useState(false)
  const [sliderIndex, setSliderIndex]     = useState(0)
  const [skillCatFilter, setSkillCatFilter] = useState(null)
  const [landingSkill, setLandingSkill]   = useState(null)

  const inputRef  = useRef(null)
  const trackRef  = useRef(null)  // scroll-snap track

  // Category filter drag (desktop)
  const catFilterRef = useRef(null)
  const catDrag      = useRef(null)
  const catDragMoved = useRef(false)

  // Skill slider drag (desktop)
  const sliderDrag      = useRef(null)
  const sliderDragMoved = useRef(false)
  const sliderSnapTimer = useRef(null)
  const sliderSnapping  = useRef(false)

  const streak         = getStreak(history)
  const lastPeriodHours = getLastHoursForPeriod(history, period)
  const hours = parseFloat(inputText) || 0

  const fittable = result ? countFittable(result.completable, hours) : 0

  const completableCategories = result
    ? [...new Set(result.completable.map(sk => sk.category))]
    : []
  const filteredCompletable = result
    ? (skillCatFilter ? result.completable.filter(sk => sk.category === skillCatFilter) : result.completable)
    : []

  // Called whenever the filter or result changes so the slider starts at card 1
  function resetSlider() {
    setSliderIndex(0)
    const t = trackRef.current
    if (t) t.scrollLeft = 0
  }

  function getSlideWidth() {
    const t = trackRef.current
    if (!t) return 0
    const slide = t.querySelector('.slider-slide')
    return slide ? slide.offsetWidth + 12 : t.offsetWidth
  }

  function snapToNearest() {
    const t = trackRef.current
    if (!t) return
    const slideW = getSlideWidth()
    const nearest = Math.round(t.scrollLeft / slideW)
    sliderSnapping.current = true
    t.scrollTo({ left: nearest * slideW, behavior: 'smooth' })
    setTimeout(() => { sliderSnapping.current = false }, 400)
  }

  // Track which slide is visible; snap on touch scroll-end
  function onTrackScroll() {
    const t = trackRef.current
    if (!t) return
    const slideW = getSlideWidth()
    const idx = Math.round(t.scrollLeft / slideW)
    if (idx !== sliderIndex) setSliderIndex(idx)
    // Touch / wheel: snap after scrolling stops
    if (!sliderDrag.current && !sliderSnapping.current) {
      if (sliderSnapTimer.current) clearTimeout(sliderSnapTimer.current)
      sliderSnapTimer.current = setTimeout(snapToNearest, 120)
    }
  }

  // Category chip drag (desktop)
  function onCatPointerDown(e) {
    if (e.pointerType === 'touch') return
    catDragMoved.current = false
    catDrag.current = { startX: e.clientX, startScroll: catFilterRef.current.scrollLeft, target: e.target }
    catFilterRef.current.setPointerCapture(e.pointerId)
  }
  function onCatPointerMove(e) {
    if (!catDrag.current) return
    const dx = catDrag.current.startX - e.clientX
    if (Math.abs(dx) > 8) catDragMoved.current = true
    catFilterRef.current.scrollLeft = catDrag.current.startScroll + dx
  }
  function onCatPointerUp() {
    if (catDrag.current) {
      // setPointerCapture blocks the native click — fire it manually if no drag occurred
      if (!catDragMoved.current) {
        const chip = catDrag.current.target?.closest('.skill-cat-chip')
        if (chip) chip.click()
      }
    }
    catDrag.current = null
    setTimeout(() => { catDragMoved.current = false }, 0)
  }

  // Skill slider drag (desktop)
  function onSliderPointerDown(e) {
    if (e.pointerType === 'touch') return
    sliderDragMoved.current = false
    sliderDrag.current = { startX: e.clientX, startScroll: trackRef.current.scrollLeft, target: e.target }
    trackRef.current.setPointerCapture(e.pointerId)
  }
  function onSliderPointerMove(e) {
    if (!sliderDrag.current) return
    const dx = sliderDrag.current.startX - e.clientX
    if (Math.abs(dx) > 8) sliderDragMoved.current = true
    trackRef.current.scrollLeft = sliderDrag.current.startScroll + dx
  }
  function onSliderPointerUp() {
    if (sliderDrag.current) {
      snapToNearest()
      // setPointerCapture blocks the native click — fire it manually if no drag occurred
      if (!sliderDragMoved.current) {
        const t = sliderDrag.current.target
        const btn = t?.closest('.start-learning-btn')
        if (btn) btn.click()
        else { const card = t?.closest('.skill-card'); if (card) card.click() }
      }
    }
    sliderDrag.current = null
    setTimeout(() => { sliderDragMoved.current = false }, 0)
  }

  useEffect(() => {
    const timer = setTimeout(() => inputRef.current?.focus(), 300)
    return () => clearTimeout(timer)
  }, [])

  function handleOpenSettings() {
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
    setSkillCatFilter(null)
    resetSlider()
    addHistoryEntry(hours, period)
    setStored('sts_last_hours', inputText)
    setStored('sts_last_period', period)
    if (navigator.vibrate) navigator.vibrate(10)
  }

  function handleAddHours(extra) {
    const current = parseFloat(inputText) || 0
    const next = current + extra
    const rounded = Math.round(next * 10) / 10
    setInputText(String(rounded))
    setResult(matchSkills(rounded, allSkills))
    resetSlider()
    setStored('sts_last_hours', String(rounded))
  }

  return (
    <div className="home-tab">
      <div className="input-section">

        {/* Header */}
        <div className="home-header">
          <h1 className="home-title">Unlocked</h1>
          {streak > 0 && (
            <div className="streak-badge">
              <IconFlame size={14} color="#FFA500" />
              {streak} day{streak !== 1 ? 's' : ''}
            </div>
          )}
        </div>

        {lastPeriodHours != null && (
          <div className="tracked-stat">
            You've spent <strong>{lastPeriodHours % 1 === 0 ? lastPeriodHours : lastPeriodHours.toFixed(1)} hours</strong> {periodLabel(period)}
          </div>
        )}

        {/* Screen Time shortcut */}
        <div className="settings-nudge-row">
          <button className="open-settings-btn" onClick={handleOpenSettings}>
            <IconPhone size={15} color="var(--text)" />
            Open Screen Time
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
          <span className="hours-label">Hours Spent</span>
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

          {result.completable.length > 0 && (
            <div className="motivation-banner">
              You could have learned{' '}
              <strong>{fittable} of these {result.completable.length} skills</strong>
            </div>
          )}

          {result.completable.length > 0 && (
            <section>
              <div className="section-header">
                <span className="section-title">You could have learned</span>
                <span className="section-sub">
                  {skillCatFilter
                    ? `${filteredCompletable.length} of ${result.completable.length}`
                    : `${result.completable.length} skill${result.completable.length !== 1 ? 's' : ''} to choose from`}
                </span>
              </div>

              {/* Category filter */}
              <div
                className="skill-cat-filter"
                ref={catFilterRef}
                onPointerDown={onCatPointerDown}
                onPointerMove={onCatPointerMove}
                onPointerUp={onCatPointerUp}
                onPointerCancel={onCatPointerUp}
              >
                <button
                  className={`skill-cat-chip ${!skillCatFilter ? 'active' : ''}`}
                  onClick={() => { if (catDragMoved.current) return; setSkillCatFilter(null); resetSlider() }}
                >All</button>
                {completableCategories.map(cat => {
                  const CatIcon = CATEGORY_ICONS[cat]
                  const isActive = skillCatFilter === cat
                  return (
                    <button
                      key={cat}
                      className={`skill-cat-chip ${isActive ? 'active' : ''}`}
                      style={isActive ? { background: CATEGORIES[cat].color, borderColor: CATEGORIES[cat].color } : {}}
                      onClick={() => { if (catDragMoved.current) return; setSkillCatFilter(isActive ? null : cat); resetSlider() }}
                    >
                      {CatIcon && <CatIcon size={12} color={isActive ? '#fff' : CATEGORIES[cat].color} />}
                      {CATEGORIES[cat].label}
                    </button>
                  )
                })}
              </div>

              {/* CSS scroll-snap slider */}
              {filteredCompletable.length > 0 ? (
                <div className="skill-slider">
                  <div
                    className="slider-track"
                    ref={trackRef}
                    onScroll={onTrackScroll}
                    onPointerDown={onSliderPointerDown}
                    onPointerMove={onSliderPointerMove}
                    onPointerUp={onSliderPointerUp}
                    onPointerCancel={onSliderPointerUp}
                  >
                    {filteredCompletable.map(sk => (
                      <div key={sk.id} className="slider-slide">
                        <SkillCard
                          skill={sk}
                          inputHours={hours}
                          onOpenDetail={s => { if (sliderDragMoved.current) return; setLandingSkill(s) }}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="slider-status">
                    <div className="slider-progress-track">
                      <div
                        className="slider-progress-fill"
                        style={{ width: `${((sliderIndex + 1) / filteredCompletable.length) * 100}%` }}
                      />
                    </div>
                    <span className="slider-count">{sliderIndex + 1} / {filteredCompletable.length}</span>
                  </div>
                </div>
              ) : (
                <div className="slider-empty">No skills in this category</div>
              )}
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
                <span className="section-title">So close</span>
                <span className="section-sub">Reduce screen time by this much and you have it</span>
              </div>
              {result.almostThere.map(sk => (
                <AlmostRow key={sk.id} skill={sk} inputHours={hours} onAddHours={handleAddHours} />
              ))}
            </section>
          )}

          <section>
            <div className="section-header">
              <span className="section-title">Weekly Trend</span>
              {!isPremium && <span className="premium-tag" onClick={onShowPremium}><IconStar size={11} color="var(--accent)" /> Premium</span>}
            </div>
            {isPremium
              ? <WeeklyReport history={history} />
              : <div className="premium-blur-card" onClick={onShowPremium}>
                  <div className="premium-blur-inner">
                    <IconStar size={32} color="var(--accent)" className="premium-blur-icon" />
                    <div className="premium-blur-text">See if your screen time is trending down</div>
                    <div className="premium-blur-cta">Unlock with Premium →</div>
                  </div>
                </div>
            }
          </section>

          {result.completable.length > 0 && (
            <section><ShareCard result={result} /></section>
          )}

          {!result.completable.length && !result.almostThere.length && (
            <div className="no-results">
              <IconLightbulb size={52} color="var(--text2)" className="no-results-icon" />
              <div className="no-results-title">Not enough hours yet</div>
              <div className="no-results-sub">Even small amounts add up. Keep tracking!</div>
            </div>
          )}
        </div>
      )}

      {!result && (
        <div className="empty-home">
          <div className="empty-examples">
            <div className="empty-example-item">40h of scrolling</div>
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

      {landingSkill && (
        <SkillLanding
          skill={landingSkill}
          isPremium={isPremium}
          onShowPremium={() => { setLandingSkill(null); onShowPremium() }}
          onClose={() => setLandingSkill(null)}
        />
      )}
    </div>
  )
}
