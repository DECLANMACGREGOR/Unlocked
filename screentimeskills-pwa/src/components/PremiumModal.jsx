import './PremiumModal.css'

const FEATURES = [
  { icon: '🔗', title: 'Start Learning — Now',     sub: 'Every skill links directly to the best free resource to get started today.' },
  { icon: '📈', title: 'Weekly Progress Report',   sub: 'See if your screen time is trending down week over week.' },
  { icon: '🛡️', title: 'Streak Protection',        sub: 'One grace day per month that won\'t break your streak.' },
  { icon: '📤', title: 'Export Your History',      sub: 'Download a summary of your screen time journey anytime.' },
]

export default function PremiumModal({ onUnlock, onClose }) {
  return (
    <div className="premium-overlay" onClick={onClose}>
      <div className="premium-sheet" onClick={e => e.stopPropagation()}>

        <button className="premium-close" onClick={onClose}>✕</button>

        <div className="premium-hero">
          <div className="premium-hero-icon">✨</div>
          <h2 className="premium-title">ScreenTimeSkills Premium</h2>
          <p className="premium-sub">One small payment. Yours forever.</p>
        </div>

        <div className="premium-features">
          {FEATURES.map((f, i) => (
            <div key={i} className="premium-feature">
              <span className="premium-feature-icon">{f.icon}</span>
              <div>
                <div className="premium-feature-title">{f.title}</div>
                <div className="premium-feature-sub">{f.sub}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="premium-pricing">
          <span className="premium-price">$2.99</span>
          <span className="premium-price-sub">one-time · no subscription · no ads</span>
        </div>

        <button className="premium-cta" onClick={onUnlock}>
          Unlock Premium
        </button>

        <p className="premium-footer">
          The core app is free forever. This just helps you act on the insight.
        </p>
      </div>
    </div>
  )
}
