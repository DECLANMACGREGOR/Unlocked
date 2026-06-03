import { useState, useCallback } from 'react'
import { BUILT_IN_SKILLS } from '../data/skillLibrary'

const STORAGE_KEY = 'sts_custom_skills'
const HISTORY_KEY = 'sts_history'

function loadCustomSkills() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
  } catch { return [] }
}

function loadHistory() {
  try {
    return JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]')
  } catch { return [] }
}

export function useSkills() {
  const [customSkills, setCustomSkills] = useState(loadCustomSkills)
  const [history, setHistory] = useState(loadHistory)

  const allSkills = [...BUILT_IN_SKILLS, ...customSkills]

  const addCustomSkill = useCallback((name, hours, category) => {
    const skill = {
      id: `custom_${Date.now()}`,
      name,
      hours: Number(hours),
      category,
      isCustom: true,
    }
    setCustomSkills(prev => {
      const next = [...prev, skill]
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
      return next
    })
  }, [])

  const deleteCustomSkill = useCallback((id) => {
    setCustomSkills(prev => {
      const next = prev.filter(s => s.id !== id)
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
      return next
    })
  }, [])

  const editCustomSkill = useCallback((id, name, hours, category) => {
    setCustomSkills(prev => {
      const next = prev.map(s =>
        s.id === id ? { ...s, name, hours: Number(hours), category } : s
      )
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
      return next
    })
  }, [])

  const addHistoryEntry = useCallback((hours, period) => {
    const entry = { id: Date.now(), hours, period, recordedAt: new Date().toISOString() }
    setHistory(prev => {
      const next = [entry, ...prev]
      localStorage.setItem(HISTORY_KEY, JSON.stringify(next))
      return next
    })
  }, [])

  const deleteHistoryEntry = useCallback((id) => {
    setHistory(prev => {
      const next = prev.filter(e => e.id !== id)
      localStorage.setItem(HISTORY_KEY, JSON.stringify(next))
      return next
    })
  }, [])

  return {
    allSkills,
    customSkills,
    history,
    addCustomSkill,
    deleteCustomSkill,
    editCustomSkill,
    addHistoryEntry,
    deleteHistoryEntry,
  }
}
