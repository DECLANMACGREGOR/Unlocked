# Unlocked — Project Handoff

## What This Is

**Unlocked** is a PWA that converts screen time hours into a visualisation of what the user could have learned instead. The user inputs hours (e.g. "55h this week"), and the app calculates which skills from a curated library they could have fully learned in that time, along with curated free resources for each skill.

There is also a native iOS SwiftUI app in this repo (`ScreenTimeSkills/`) but all active development is happening in the PWA.

---

## Running the App

```bash
cd screentimeskills-pwa
npm install
npm run dev         # → http://localhost:5173
```

Playwright is installed as a dev dependency for screenshots. No backend — fully client-side.

---

## File Structure

```
screentimeskills-pwa/src/
├── App.jsx                        # Root — tab routing, skill store, premium state
├── App.css                        # App shell, tab bar, nav styles
├── index.css                      # Design tokens (CSS vars), global resets
│
├── data/
│   ├── skillLibrary.js            # BUILT_IN_SKILLS array + CATEGORIES map (10 categories, ~120 skills)
│   ├── skillMatcher.js            # matchSkills(hours, skills) → { completable, almostThere, combinations, totalHours }
│   ├── skillResourceDirectory.js  # PRIMARY data file — 437 free resources mapped to every skill
│   │                              # Exports: getPrimaryResource(name), getSkillResources(name),
│   │                              #          getTotalResourceCount(), findSkillsWithoutResources(library)
│   └── skillResources.js          # LEGACY — do not import. Kept as reference only.
│
├── hooks/
│   ├── useSkills.js               # State for allSkills, customSkills, history — persists to localStorage
│   └── usePremium.js              # isPremium flag — localStorage 'sts_premium' = '1'
│                                  # Replace unlock() with real payment call when ready
│
└── components/
    ├── Icons.jsx                  # All SVG icons as React components (no emoji in UI)
    │                              # Exports individual icons + CATEGORY_ICONS map
    ├── HomeTab.jsx                # Main screen — input, results, skill slider, SkillLanding sheet
    ├── HomeTab.css
    ├── LibraryTab.jsx             # Browse all skills by category; add/edit/delete custom skills
    ├── LibraryTab.css
    ├── HistoryTab.jsx             # Log of past entries with delete + CSV export
    ├── HistoryTab.css
    ├── WeeklyReport.jsx           # Premium — bar chart of weekly screen time trend
    ├── WeeklyReport.css
    ├── PremiumModal.jsx           # Paywall sheet — calls usePremium.unlock() on confirm
    ├── PremiumModal.css
    ├── Onboarding.jsx             # First-launch 3-slide onboarding (localStorage 'sts_onboarded' = '1')
    └── Onboarding.css
```

---

## Design System

**Theme:** Blue-tinted cream/white in light mode, dark navy in dark mode. Clean, clinical, iOS-native feel.

**CSS variables (index.css):**

| Token | Light | Dark |
|---|---|---|
| `--accent` | `#1A73E8` | `#5B9BF0` |
| `--bg` | `#EDF1F8` | `#0C1829` |
| `--bg2` | `#FFFFFF` | `#142033` |
| `--bg3` | `#FFFFFF` | `#1C2E46` |
| `--text` | `#0F1923` | `#E2EBF8` |
| `--text2` | `#6B7B9A` | `#7A9ABE` |
| `--green` | `#0A9E74` | `#2DD4A0` |
| `--border` | `#CBD5E8` | `#27405D` |
| `--radius` | `14px` | same |
| `--radius-sm` | `10px` | same |

**Icons:** All custom SVG via `Icons.jsx`. Never use emoji in the UI. The `CATEGORY_ICONS` map keys match the `CATEGORIES` object keys in `skillLibrary.js`.

**Platform badge colours (resource list):**
- `youtube` → `#FF0000`
- `app` → `#007AFF`
- `website` → `#6B7280`
- `course` → `#7C3AED`
- `book` → `#92400E`
- `tool` → `#0F766E`
- `community` → `#16A34A`

---

## Key Data Flows

### Skill matching
```
useSkills() → allSkills
HomeTab input → matchSkills(hours, allSkills) → result
result = { completable[], almostThere[], combinations[], totalHours }
```
`completable` = all skills where `skill.hours <= inputHours`, sorted by hours descending.

### Fittable count (banner)
A greedy smallest-first packing: sort completable by hours ascending, consume until budget runs out. Shown as "You could have learned **X** of these **Y** skills".

### Resources
- `getPrimaryResource(skillName)` → first entry in the directory → "Start Learning" button on card opens this URL directly in new tab (no paywall).
- `getSkillResources(skillName)` → all entries → shown in SkillLanding sheet. First entry is free, remaining are blurred behind Premium paywall.

### Premium
`localStorage.sts_premium === '1'` → unlocks WeeklyReport and the full resource list in SkillLanding. Currently unlocked via a "Continue" tap in PremiumModal — no real payment yet. See `usePremium.js` for where to hook in Stripe/RevenueCat.

### localStorage keys
| Key | Purpose |
|---|---|
| `sts_onboarded` | `'1'` after onboarding complete |
| `sts_premium` | `'1'` if premium unlocked |
| `sts_last_hours` | last input value (pre-populated on next load) |
| `sts_last_period` | last selected period pill |
| `sts_custom_skills` | JSON array of user-added skills |
| `sts_history` | JSON array of `{ id, hours, period, recordedAt }` |

---

## HomeTab Architecture

The most complex component. Key internals:

**Slider (skill cards)**
- CSS: `overflow-x: auto`, NO `scroll-snap` (removed — causes hard jumps)
- Snap handled manually: `snapToNearest()` called on `onSliderPointerUp` (desktop mouse) and via debounced `onTrackScroll` (mobile touch)
- `setPointerCapture` blocks native click events — fixed by manually calling `.click()` on the original target in `onSliderPointerUp` when no drag occurred
- Slide width: `calc(100% - 28px)` with `gap: 12px` — peeks ~16px of next card on the right

**Category filter chips**
- `overflow-x: auto` free scroll
- Same pointer drag pattern as slider (separate `catDrag` ref)

**SkillLanding sheet**
- Slide-up bottom sheet, `position: fixed`, `z-index: 150`
- `max-height: 90vh`, `overflow-y: auto` — scrollable for skills with many resources
- Opened by tapping card body (not the "Start Learning" button)
- Closed by tapping overlay or "Close" button

---

## Skill Library Stats

- **10 categories:** Languages, Instruments, Coding, Fitness, Creative, Business, Culinary, Mind, DIY, Wellness
- **~120 built-in skills** across all categories
- **437 free resources** in `skillResourceDirectory.js` (3–5 per skill)
- Custom skills: user can add, edit, delete via LibraryTab

---

## What Is NOT Done Yet

- **Payment integration** — Premium is unlocked with a single tap, no real purchase flow. Need Stripe Checkout or RevenueCat web SDK wired into `usePremium.unlock()`.
- **PWA install prompt** — `vite.config.js` has the manifest/service worker config but the install UX hasn't been designed.
- **Push notifications** — Not implemented.
- **Onboarding polish** — The 3-slide onboarding exists but hasn't been reviewed for copy/design recently.
- **Analytics** — No tracking yet.
- **Share image generation** — The share card copies plain text. A canvas-rendered share image would be more compelling.
- **App Store / GitHub deployment** — Nothing deployed yet. All development is local on `localhost:5173`.

---

## Git State

Working on `master` branch. All changes are uncommitted — the full session's work is in the working tree. Push to `main` on GitHub when the project is ready. Declan's GitHub username is `DECLANMACGREGOR`.

Never push automatically — always wait for explicit instruction.

---

## The iOS App

`ScreenTimeSkills/` contains a SwiftUI/Swift iOS app. It appears to be an earlier iteration of the same concept. The PWA is the active product. The iOS app is not being actively developed in current sessions but is kept in the same repo.

---

## Top 3 Tasks

### 1. Clean Up Repo Before GitHub Push
- Replace hardcoded Windows path in `preview-server/README.md:8` with a relative path (`cd preview-server`)
- Add `.vscode/` to `.gitignore`
- Decide which untracked files (screenshot PNGs, `PROJECT.md`, `APP_STORE_APPROVAL_CHECKLIST.md`) should be committed or ignored

### 2. Wire Up Payment Integration
`usePremium.unlock()` in `hooks/usePremium.js` currently unlocks premium with a single tap — no real purchase. This is the only core feature that has never been validated. Until the paywall flow works end-to-end (purchase, restore, failure states), the PWA cannot serve as a reliable spec for the Swift/StoreKit implementation.

### 3. Audit the Swift App Against the PWA
The Swift codebase (`ScreenTimeSkills/`) is an earlier iteration of the same concept. Before the translation work begins in earnest, the gap between what exists natively and what the PWA currently does needs to be mapped. This determines whether the Swift work is a polish job or a rebuild.
