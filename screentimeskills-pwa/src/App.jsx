import { useState } from 'react'
import { useSkills } from './hooks/useSkills'
import { usePremium } from './hooks/usePremium'
import HomeTab from './components/HomeTab'
import LibraryTab from './components/LibraryTab'
import HistoryTab from './components/HistoryTab'
import Onboarding from './components/Onboarding'
import PremiumModal from './components/PremiumModal'
import './App.css'

const TABS = [
  { id: 'home',    label: 'Home',    icon: '⏱' },
  { id: 'library', label: 'Library', icon: '📚' },
  { id: 'history', label: 'History', icon: '🕐' },
]

export default function App() {
  const [activeTab, setActiveTab] = useState('home')
  const [showOnboarding, setShowOnboarding] = useState(
    () => !localStorage.getItem('sts_onboarded')
  )
  const [showPremium, setShowPremium] = useState(false)
  const skillStore = useSkills()
  const { isPremium, unlock } = usePremium()

  function handleOnboardingDone() {
    localStorage.setItem('sts_onboarded', '1')
    setShowOnboarding(false)
  }

  function handleUnlock() {
    // TODO: Replace with real payment flow (Stripe, etc.) before launch.
    // For now, unlocks immediately for prototype/testing.
    unlock()
    setShowPremium(false)
  }

  return (
    <div className="app">
      {showOnboarding && <Onboarding onDone={handleOnboardingDone} />}
      {showPremium && (
        <PremiumModal
          onUnlock={handleUnlock}
          onClose={() => setShowPremium(false)}
        />
      )}

      <div className="tab-content">
        {activeTab === 'home' && (
          <HomeTab {...skillStore} isPremium={isPremium} onShowPremium={() => setShowPremium(true)} />
        )}
        {activeTab === 'library' && <LibraryTab {...skillStore} />}
        {activeTab === 'history' && (
          <HistoryTab
            {...skillStore}
            isPremium={isPremium}
            onShowPremium={() => setShowPremium(true)}
            onGoHome={() => setActiveTab('home')}
          />
        )}
      </div>

      <nav className="tab-bar">
        {TABS.map(tab => (
          <button
            key={tab.id}
            className={`tab-item ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <span className="tab-icon">{tab.icon}</span>
            <span className="tab-label">{tab.label}</span>
          </button>
        ))}
      </nav>
    </div>
  )
}
