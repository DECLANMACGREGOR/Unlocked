import { useState } from 'react'
import { useSkills } from './hooks/useSkills'
import { usePremium } from './hooks/usePremium'
import HomeTab from './components/HomeTab'
import LibraryTab from './components/LibraryTab'
import HistoryTab from './components/HistoryTab'
import Onboarding from './components/Onboarding'
import PremiumModal from './components/PremiumModal'
import { IconHome, IconLibrary, IconHistory } from './components/Icons'
import './App.css'

const TABS = [
  { id: 'home',    label: 'Home',    Icon: IconHome },
  { id: 'library', label: 'Library', Icon: IconLibrary },
  { id: 'history', label: 'History', Icon: IconHistory },
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
        {activeTab === 'library' && (
          <LibraryTab {...skillStore} isPremium={isPremium} onShowPremium={() => setShowPremium(true)} />
        )}
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
        {TABS.map(({ id, label, Icon }) => (
          <button
            key={id}
            className={`tab-item ${activeTab === id ? 'active' : ''}`}
            onClick={() => setActiveTab(id)}
          >
            <Icon size={22} className="tab-icon" />
            <span className="tab-label">{label}</span>
          </button>
        ))}
      </nav>
    </div>
  )
}
