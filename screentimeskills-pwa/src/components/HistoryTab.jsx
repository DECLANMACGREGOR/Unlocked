import './HistoryTab.css'

function exportCSV(history) {
  const rows = [
    ['Date', 'Hours', 'Period'],
    ...history.map(e => [
      new Date(e.recordedAt).toLocaleDateString(),
      e.hours,
      e.period,
    ])
  ]
  const csv = rows.map(r => r.join(',')).join('\n')
  const blob = new Blob([csv], { type: 'text/csv' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'screentimeskills-history.csv'
  a.click()
  URL.revokeObjectURL(url)
}

function groupByMonth(entries) {
  const groups = {}
  for (const e of entries) {
    const key = new Date(e.recordedAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
    if (!groups[key]) groups[key] = []
    groups[key].push(e)
  }
  return Object.entries(groups)
}

function relativeDate(iso) {
  const diff = Date.now() - new Date(iso).getTime()
  const mins = Math.floor(diff / 60000)
  if (mins < 1) return 'just now'
  if (mins < 60) return `${mins}m ago`
  const hrs = Math.floor(mins / 60)
  if (hrs < 24) return `${hrs}h ago`
  const days = Math.floor(hrs / 24)
  if (days === 1) return 'yesterday'
  if (days < 7) return `${days} days ago`
  return new Date(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
}

export default function HistoryTab({ history, deleteHistoryEntry, onGoHome, isPremium, onShowPremium }) {
  if (history.length === 0) {
    return (
      <div className="history-tab">
        <h1 className="history-title">History</h1>
        <div className="history-empty">
          <div style={{ fontSize: 52 }}>🕐</div>
          <div className="empty-title">No history yet</div>
          <div className="empty-sub">Each time you check your screen time, it gets saved here so you can track your progress over time.</div>
          <button className="history-go-home" onClick={onGoHome}>Log your first entry →</button>
        </div>
      </div>
    )
  }

  const groups = groupByMonth(history)

  return (
    <div className="history-tab">
      <div className="history-header">
        <h1 className="history-title">History</h1>
        {isPremium
          ? <button className="export-btn" onClick={() => exportCSV(history)}>📤 Export</button>
          : <button className="export-btn locked" onClick={onShowPremium}>🔒 Export</button>
        }
      </div>
      <div className="history-list">
        {groups.map(([month, entries]) => (
          <div key={month} className="history-group">
            <div className="history-month">{month}</div>
            {entries.map(entry => (
              <div key={entry.id} className="history-row">
                <div className="history-row-info">
                  <span className="history-hours">
                    {Number.isInteger(entry.hours) ? entry.hours : entry.hours.toFixed(1)} hours
                  </span>
                  <span className="history-period">{entry.period}</span>
                </div>
                <div className="history-right">
                  <span className="history-date">{relativeDate(entry.recordedAt)}</span>
                  <button className="history-delete" onClick={() => deleteHistoryEntry(entry.id)}>🗑</button>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
