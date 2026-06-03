function greedyCombination(pool, budget, count) {
  const sorted = [...pool].sort((a, b) => b.hours - a.hours)
  const result = []
  let remaining = budget
  for (const skill of sorted) {
    if (result.length >= count) break
    if (skill.hours <= remaining && !result.includes(skill)) {
      result.push(skill)
      remaining -= skill.hours
    }
  }
  return result
}

function deduplicateCombos(combos) {
  const result = []
  for (const combo of combos) {
    const ids = new Set(combo.map(s => s.id))
    const isSubset = result.some(existing => {
      const eIds = new Set(existing.map(s => s.id))
      return [...ids].every(id => eIds.has(id))
    })
    if (!isSubset) result.push(combo)
  }
  return result
}

export function matchSkills(hours, skills) {
  if (!hours || hours <= 0) {
    return { completable: [], combinations: [], almostThere: [], totalHours: 0 }
  }

  const completable = skills
    .filter(s => s.hours <= hours)
    .sort((a, b) => b.hours - a.hours)

  const threshold = hours * 1.2
  const almostThere = skills
    .filter(s => s.hours > hours && s.hours <= threshold)
    .sort((a, b) => a.hours - b.hours)
    .slice(0, 3)

  const rawCombos = []
  const two = greedyCombination(completable, hours, 2)
  if (two.length >= 2) rawCombos.push(two)
  const three = greedyCombination(completable, hours, 3)
  if (three.length >= 2) rawCombos.push(three)

  return {
    completable,
    combinations: deduplicateCombos(rawCombos),
    almostThere,
    totalHours: hours,
  }
}
