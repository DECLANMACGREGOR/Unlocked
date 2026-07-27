import { useState, useCallback } from 'react'
import { BUILT_IN_SKILLS } from '../data/skillLibrary'
import { getStored, setStored } from '../lib/storage'

const STORAGE_KEY = 'sts_custom_skills'
const HISTORY_KEY = 'sts_history'

function loadJSON(key) {
  try {
    return JSON.parse(getStored(key) || '[]')
  } catch { return [] }
}

export function useSkills() {
  const [customSkills, setCustomSkills] = useState(() => loadJSON(STORAGE_KEY))
  const [history, setHistory] = useState(() => loadJSON(HISTORY_KEY))

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
      setStored(STORAGE_KEY, JSON.stringify(next))
      return next
    })
  }, [])

  const deleteCustomSkill = useCallback((id) => {
    setCustomSkills(prev => {
      const next = prev.filter(s => s.id !== id)
      setStored(STORAGE_KEY, JSON.stringify(next))
      return next
    })
  }, [])

  const editCustomSkill = useCallback((id, name, hours, category) => {
    setCustomSkills(prev => {
      const next = prev.map(s =>
        s.id === id ? { ...s, name, hours: Number(hours), category } : s
      )
      setStored(STORAGE_KEY, JSON.stringify(next))
      return next
    })
  }, [])

  const addHistoryEntry = useCallback((hours, period) => {
    const entry = { id: Date.now(), hours, period, recordedAt: new Date().toISOString() }
    setHistory(prev => {
      const next = [entry, ...prev]
      setStored(HISTORY_KEY, JSON.stringify(next))
      return next
    })
  }, [])

  const deleteHistoryEntry = useCallback((id) => {
    setHistory(prev => {
      const next = prev.filter(e => e.id !== id)
      setStored(HISTORY_KEY, JSON.stringify(next))
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
