function Icon({ size = 20, color = 'currentColor', strokeWidth = 1.5, className, style, children }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={style}
    >
      {children}
    </svg>
  )
}

// ── Tab bar ──────────────────────────────────────────────────────────────────

export function IconHome(p) {
  return <Icon {...p}><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15 15"/></Icon>
}

export function IconLibrary(p) {
  return (
    <Icon {...p}>
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
    </Icon>
  )
}

export function IconHistory(p) {
  return (
    <Icon {...p}>
      <line x1="18" y1="20" x2="18" y2="10"/>
      <line x1="12" y1="20" x2="12" y2="4"/>
      <line x1="6"  y1="20" x2="6"  y2="14"/>
      <line x1="3"  y1="20" x2="21" y2="20"/>
    </Icon>
  )
}

// ── Category icons ────────────────────────────────────────────────────────────

export function IconLanguages(p) {
  return <Icon {...p}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></Icon>
}

export function IconInstruments(p) {
  return (
    <Icon {...p}>
      <path d="M9 18V5l12-2v13"/>
      <circle cx="6" cy="18" r="3"/>
      <circle cx="18" cy="16" r="3"/>
    </Icon>
  )
}

export function IconCoding(p) {
  return (
    <Icon {...p}>
      <polyline points="16 18 22 12 16 6"/>
      <polyline points="8 6 2 12 8 18"/>
    </Icon>
  )
}

export function IconFitness(p) {
  return <Icon {...p}><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></Icon>
}

export function IconCreative(p) {
  return <Icon {...p}><path d="M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/></Icon>
}

export function IconBusiness(p) {
  return (
    <Icon {...p}>
      <rect x="2" y="7" width="20" height="14" rx="2"/>
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
    </Icon>
  )
}

export function IconCulinary(p) {
  return (
    <Icon {...p}>
      <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/>
      <line x1="7" y1="2" x2="7" y2="11"/>
      <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7"/>
    </Icon>
  )
}

export function IconMind(p) {
  return (
    <Icon {...p}>
      <rect x="4" y="4" width="16" height="16" rx="2"/>
      <rect x="9" y="9" width="6" height="6"/>
      <path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2"/>
    </Icon>
  )
}

export function IconDIY(p) {
  return <Icon {...p}><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></Icon>
}

export function IconWellness(p) {
  return <Icon {...p}><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></Icon>
}

// ── UI icons ─────────────────────────────────────────────────────────────────

export function IconSearch(p) {
  return <Icon {...p}><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></Icon>
}

export function IconPlus(p) {
  return <Icon {...p}><path d="M12 5v14M5 12h14"/></Icon>
}

export function IconTrash(p) {
  return (
    <Icon {...p}>
      <polyline points="3 6 5 6 21 6"/>
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>
    </Icon>
  )
}

export function IconEdit(p) {
  return (
    <Icon {...p}>
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
      <path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
    </Icon>
  )
}

export function IconShare(p) {
  return (
    <Icon {...p}>
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
      <polyline points="16 6 12 2 8 6"/>
      <line x1="12" y1="2" x2="12" y2="15"/>
    </Icon>
  )
}

export function IconPhone(p) {
  return (
    <Icon {...p}>
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
      <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="2.5"/>
    </Icon>
  )
}

export function IconLock(p) {
  return (
    <Icon {...p}>
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
    </Icon>
  )
}

export function IconFlame(p) {
  return <Icon {...p}><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></Icon>
}

export function IconStar(p) {
  return <Icon {...p}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></Icon>
}

export function IconLightbulb(p) {
  return (
    <Icon {...p}>
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/>
      <path d="M9 18h6"/>
      <path d="M10 22h4"/>
    </Icon>
  )
}

export function IconX(p) {
  return (
    <Icon {...p}>
      <line x1="18" y1="6" x2="6" y2="18"/>
      <line x1="6" y1="6" x2="18" y2="18"/>
    </Icon>
  )
}

export function IconArrowRight(p) {
  return <Icon {...p}><path d="M5 12h14M12 5l7 7-7 7"/></Icon>
}

export function IconCheck(p) {
  return <Icon {...p}><polyline points="20 6 9 17 4 12"/></Icon>
}

// ── Category icon map ─────────────────────────────────────────────────────────

export const CATEGORY_ICONS = {
  languages:   IconLanguages,
  instruments: IconInstruments,
  coding:      IconCoding,
  fitness:     IconFitness,
  creative:    IconCreative,
  business:    IconBusiness,
  culinary:    IconCulinary,
  mind:        IconMind,
  diy:         IconDIY,
  wellness:    IconWellness,
}
