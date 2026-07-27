import { IconHistory } from './Icons'
import './WeeklyReport.css'

function getWeeklyAverages(history) {
  if (history.length < 2) return null

  // Group into calendar weeks (week-of-year counted from Jan 1).
  // Week number is zero-padded so the string sort below stays chronological
  // ("W09" < "W10"; without padding "W10" < "W9" and the trend inverts).
  const weeks = {}
  for (const e of history) {
    const d = new Date(e.recordedAt)
    const jan1 = new Date(d.getFullYear(), 0, 1)
    const week = Math.ceil(((d - jan1) / 86400000 + jan1.getDay() + 1) / 7)
    const key = `${d.getFullYear()}-W${String(week).padStart(2, '0')}`
    if (!weeks[key]) weeks[key] = []
    weeks[key].push(e.hours)
  }

  const sorted = Object.entries(weeks)
    .sort(([a], [b]) => (a < b ? -1 : 1))
    .map(([key, vals]) => ({
      week: key,
      avg: vals.reduce((s, v) => s + v, 0) / vals.length,
    }))

  if (sorted.length < 2) return null
  return sorted.slice(-6) // last 6 weeks
}

export default function WeeklyReport({ history }) {
  const weeks = getWeeklyAverages(history)

  if (!weeks) {
    return (
      <div className="weekly-report empty">
        <div className="wr-icon"><IconHistory size={32} color="var(--text2)" /></div>
        <div className="wr-empty-text">Track a few more days to see your progress trend.</div>
      </div>
    )
  }

  const max = Math.max(...weeks.map(w => w.avg))
  const latest = weeks[weeks.length - 1].avg
  const prev = weeks[weeks.length - 2].avg
  const delta = latest - prev
  const trending = delta < 0 ? 'down' : delta > 0 ? 'up' : 'flat'

  return (
    <div className="weekly-report">
      <div className="wr-header">
        <span className="wr-title">Weekly Trend</span>
        <span className={`wr-trend wr-trend-${trending}`}>
          {trending === 'down' ? `↓ ${Math.abs(delta).toFixed(1)}h less` :
           trending === 'up'   ? `↑ ${delta.toFixed(1)}h more` : '→ Same'}
        </span>
      </div>

      <div className="wr-bars">
        {weeks.map((w, i) => {
          const height = max > 0 ? (w.avg / max) * 100 : 0
          const isLatest = i === weeks.length - 1
          return (
            <div key={w.week} className="wr-bar-col">
              <div className="wr-bar-track">
                <div
                  className={`wr-bar-fill ${isLatest ? 'latest' : ''}`}
                  style={{ height: `${height}%` }}
                />
              </div>
              <span className="wr-bar-label">{isLatest ? 'Now' : `W${i + 1}`}</span>
            </div>
          )
        })}
      </div>

      <div className="wr-note">
        {trending === 'down'
          ? `Great work — you're trending down. Keep it up.`
          : trending === 'up'
          ? `Screen time went up this week. What could you cut?`
          : `Holding steady. Can you shave off an hour this week?`}
      </div>
    </div>
  )
}
