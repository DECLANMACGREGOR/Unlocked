import { useState } from 'react'
import { CATEGORIES, BUILT_IN_SKILLS } from '../data/skillLibrary'
import './LibraryTab.css'

function SkillForm({ initial, onSave, onCancel }) {
  const [name, setName] = useState(initial?.name || '')
  const [hours, setHours] = useState(initial?.hours || '')
  const [category, setCategory] = useState(initial?.category || 'creative')

  const valid = name.trim() && Number(hours) > 0

  return (
    <div className="modal-overlay" onClick={onCancel}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <span className="modal-title">{initial ? 'Edit Skill' : 'Add Skill'}</span>
          <button className="modal-cancel" onClick={onCancel}>Cancel</button>
        </div>

        <div className="form-group">
          <label>Skill name</label>
          <input
            type="text"
            placeholder="e.g. Bread Baking"
            value={name}
            onChange={e => setName(e.target.value)}
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label>Hours to learn</label>
          <input
            type="number"
            inputMode="decimal"
            placeholder="e.g. 40"
            value={hours}
            onChange={e => setHours(e.target.value)}
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label>Category</label>
          <div className="cat-options">
            {Object.entries(CATEGORIES).map(([key, cat]) => (
              <button
                key={key}
                className={`cat-option ${category === key ? 'active' : ''}`}
                style={category === key ? { background: cat.color, borderColor: cat.color } : {}}
                onClick={() => setCategory(key)}
              >
                {cat.icon} {cat.label}
              </button>
            ))}
          </div>
        </div>

        <button
          className="save-btn"
          disabled={!valid}
          onClick={() => valid && onSave(name.trim(), Number(hours), category)}
        >
          Save Skill
        </button>
      </div>
    </div>
  )
}

export default function LibraryTab({ allSkills, customSkills, addCustomSkill, deleteCustomSkill, editCustomSkill }) {
  const [search, setSearch] = useState('')
  const [filterCat, setFilterCat] = useState(null)
  const [showAdd, setShowAdd] = useState(false)
  const [editTarget, setEditTarget] = useState(null)

  const filtered = allSkills.filter(s => {
    const matchSearch = !search || s.name.toLowerCase().includes(search.toLowerCase())
    const matchCat = !filterCat || s.category === filterCat
    return matchSearch && matchCat
  })

  const grouped = Object.keys(CATEGORIES)
    .map(cat => ({ cat, skills: filtered.filter(s => s.category === cat) }))
    .filter(g => g.skills.length > 0)

  return (
    <div className="library-tab">
      <div className="library-header">
        <h1 className="library-title">Skill Library</h1>
        <button className="add-btn" onClick={() => setShowAdd(true)}>+ Add</button>
      </div>

      <div className="search-bar">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          placeholder="Search skills..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="search-input"
        />
        {search && <button className="search-clear" onClick={() => setSearch('')}>✕</button>}
      </div>

      <div className="cat-filter-row">
        <button
          className={`cat-filter-chip ${!filterCat ? 'active' : ''}`}
          onClick={() => setFilterCat(null)}
        >All</button>
        {Object.entries(CATEGORIES).map(([key, cat]) => (
          <button
            key={key}
            className={`cat-filter-chip ${filterCat === key ? 'active' : ''}`}
            style={filterCat === key ? { background: cat.color, borderColor: cat.color } : {}}
            onClick={() => setFilterCat(filterCat === key ? null : key)}
          >
            {cat.icon} {cat.label}
          </button>
        ))}
      </div>

      <div className="skill-list">
        {grouped.length === 0 && (
          <div className="library-empty">
            <div style={{ fontSize: 44 }}>🔍</div>
            <div>No skills found</div>
            <div style={{ fontSize: 13, color: 'var(--text2)', marginTop: 4 }}>Try adjusting your search or filter</div>
          </div>
        )}

        {grouped.map(({ cat, skills }) => {
          const catInfo = CATEGORIES[cat]
          return (
            <div key={cat} className="skill-group">
              <div className="group-header">
                <span>{catInfo.icon}</span>
                <span>{catInfo.label}</span>
              </div>
              {skills.map(skill => {
                const isCustom = skill.isCustom
                const customObj = isCustom ? customSkills.find(c => c.id === skill.id) : null
                return (
                  <div key={skill.id} className="skill-row">
                    <div className="skill-row-info">
                      <span className="skill-row-name">{skill.name}</span>
                      {isCustom && <span className="custom-badge">Custom</span>}
                      <span className="skill-row-hrs">{skill.hours}h</span>
                    </div>
                    {isCustom && (
                      <div className="skill-row-actions">
                        <button className="action-btn" onClick={() => setEditTarget(customObj)}>✏️</button>
                        <button className="action-btn danger" onClick={() => deleteCustomSkill(skill.id)}>🗑</button>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>

      {showAdd && (
        <SkillForm
          onSave={(name, hours, category) => {
            addCustomSkill(name, hours, category)
            setShowAdd(false)
          }}
          onCancel={() => setShowAdd(false)}
        />
      )}

      {editTarget && (
        <SkillForm
          initial={editTarget}
          onSave={(name, hours, category) => {
            editCustomSkill(editTarget.id, name, hours, category)
            setEditTarget(null)
          }}
          onCancel={() => setEditTarget(null)}
        />
      )}
    </div>
  )
}
