import { useState, useRef } from 'react'
import { CATEGORIES, BUILT_IN_SKILLS } from '../data/skillLibrary'
import {
  CATEGORY_ICONS,
  IconSearch, IconPlus, IconTrash, IconEdit, IconLock,
} from './Icons'
import './LibraryTab.css'

function SkillForm({ initial, onSave, onCancel }) {
  const [name, setName]         = useState(initial?.name || '')
  const [hours, setHours]       = useState(initial?.hours || '')
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
            {Object.entries(CATEGORIES).map(([key, cat]) => {
              const CatIcon = CATEGORY_ICONS[key]
              return (
                <button
                  key={key}
                  className={`cat-option ${category === key ? 'active' : ''}`}
                  style={category === key ? { background: cat.color, borderColor: cat.color } : {}}
                  onClick={() => setCategory(key)}
                >
                  {CatIcon && <CatIcon size={14} color={category === key ? '#fff' : cat.color} />}
                  {cat.label}
                </button>
              )
            })}
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

export default function LibraryTab({ allSkills, customSkills, addCustomSkill, deleteCustomSkill, editCustomSkill, isPremium, onShowPremium }) {
  const [search, setSearch]       = useState('')
  const [filterCat, setFilterCat] = useState(null)
  const [showAdd, setShowAdd]     = useState(false)
  const [editTarget, setEditTarget] = useState(null)

  // Category filter drag (desktop)
  const catRowRef    = useRef(null)
  const catDrag      = useRef(null)
  const catDragMoved = useRef(false)

  function onCatPointerDown(e) {
    if (e.pointerType === 'touch') return
    catDragMoved.current = false
    catDrag.current = { startX: e.clientX, startScroll: catRowRef.current.scrollLeft }
    catRowRef.current.setPointerCapture(e.pointerId)
  }
  function onCatPointerMove(e) {
    if (!catDrag.current) return
    const dx = catDrag.current.startX - e.clientX
    if (Math.abs(dx) > 8) catDragMoved.current = true
    catRowRef.current.scrollLeft = catDrag.current.startScroll + dx
  }
  function onCatPointerUp() {
    catDrag.current = null
    setTimeout(() => { catDragMoved.current = false }, 0)
  }

  const filtered = allSkills.filter(s => {
    const matchSearch = !search || s.name.toLowerCase().includes(search.toLowerCase())
    const matchCat = !filterCat || s.category === filterCat
    return matchSearch && matchCat
  })

  const grouped = Object.keys(CATEGORIES)
    .map(cat => ({ cat, skills: filtered.filter(s => s.category === cat) }))
    .filter(g => g.skills.length > 0)

  function handleAddClick() {
    if (!isPremium) { onShowPremium(); return }
    setShowAdd(true)
  }

  return (
    <div className="library-tab">
      <div className="library-header">
        <h1 className="library-title">Skill Library</h1>
        <button className="add-btn" onClick={handleAddClick}>
          {isPremium
            ? <><IconPlus size={14} color="#fff" /> Add</>
            : <><IconLock size={14} color="#fff" /> Custom</>}
        </button>
      </div>

      <div className="search-bar">
        <IconSearch size={16} color="var(--text2)" className="search-icon" />
        <input
          type="text"
          placeholder="Search skills..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="search-input"
        />
        {search && (
          <button className="search-clear" onClick={() => setSearch('')}>✕</button>
        )}
      </div>

      <div
        className="cat-filter-row"
        ref={catRowRef}
        onPointerDown={onCatPointerDown}
        onPointerMove={onCatPointerMove}
        onPointerUp={onCatPointerUp}
        onPointerCancel={onCatPointerUp}
      >
        <button
          className={`cat-filter-chip ${!filterCat ? 'active' : ''}`}
          onClick={() => { if (catDragMoved.current) return; setFilterCat(null) }}
        >All</button>
        {Object.entries(CATEGORIES).map(([key, cat]) => {
          const CatIcon = CATEGORY_ICONS[key]
          const isActive = filterCat === key
          return (
            <button
              key={key}
              className={`cat-filter-chip ${isActive ? 'active' : ''}`}
              style={isActive ? { background: cat.color, borderColor: cat.color } : {}}
              onClick={() => { if (catDragMoved.current) return; setFilterCat(isActive ? null : key) }}
            >
              {CatIcon && <CatIcon size={13} color={isActive ? '#fff' : cat.color} />}
              {cat.label}
            </button>
          )
        })}
      </div>

      <div className="skill-list">
        {grouped.length === 0 && (
          <div className="library-empty">
            <IconSearch size={44} color="var(--text2)" />
            <div>No skills found</div>
            <div style={{ fontSize: 13, color: 'var(--text2)', marginTop: 4 }}>
              Try adjusting your search or filter
            </div>
          </div>
        )}

        {grouped.map(({ cat, skills }) => {
          const catInfo = CATEGORIES[cat]
          const CatIcon = CATEGORY_ICONS[cat]
          return (
            <div key={cat} className="skill-group">
              <div className="group-header">
                {CatIcon && <CatIcon size={14} color={catInfo.color} />}
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
                        <button className="action-btn" onClick={() => setEditTarget(customObj)}>
                          <IconEdit size={16} color="var(--text2)" />
                        </button>
                        <button className="action-btn danger" onClick={() => deleteCustomSkill(skill.id)}>
                          <IconTrash size={16} color="var(--text2)" />
                        </button>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>

      {/* Premium teaser when not premium */}
      {!isPremium && (
        <div className="custom-skills-teaser" onClick={onShowPremium}>
          <IconLock size={18} color="var(--accent)" />
          <div className="teaser-text">
            <div className="teaser-title">Add Custom Skills</div>
            <div className="teaser-sub">Track any skill you want — unlock with Premium</div>
          </div>
          <span className="teaser-arrow">→</span>
        </div>
      )}

      {showAdd && (
        <SkillForm
          onSave={(name, hours, category) => { addCustomSkill(name, hours, category); setShowAdd(false) }}
          onCancel={() => setShowAdd(false)}
        />
      )}

      {editTarget && (
        <SkillForm
          initial={editTarget}
          onSave={(name, hours, category) => { editCustomSkill(editTarget.id, name, hours, category); setEditTarget(null) }}
          onCancel={() => setEditTarget(null)}
        />
      )}
    </div>
  )
}
