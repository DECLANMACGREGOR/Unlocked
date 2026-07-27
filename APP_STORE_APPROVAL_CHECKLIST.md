# iOS App Store First-Attempt Approval Checklist

> **Context**: Compiled June 2026 for the **Unlocked** app.
> 40-60% of first-time submissions get rejected. This checklist covers every known rejection trigger so you don't become a statistic.

---

## PHASE 1: BEFORE YOU WRITE CODE

### 1.1 Developer Account Setup
- [ ] **Apple Developer Program enrolled** ($99/year) — you need this before anything else
- [ ] **If registering as an organization**: obtain a D-U-N-S number first (takes 2-5 business days)
- [ ] **Paid Applications Agreement signed** in App Store Connect (required for any in-app purchases to work, even in sandbox)
- [ ] **Tax & banking info completed** in App Store Connect (required before IAP products go live)

### 1.2 Entitlements & Special Permissions
- [ ] **No special entitlements needed for v1** — manual hour input means no Screen Time API
- [ ] **v1.1 roadmap**: Automatic Screen Time import via `com.apple.developer.family-controls` entitlement (apply for this AFTER v1 ships — approval takes 1-14 days and requires Account Holder, not Admin)

> **UNLOCKED v1 DECISION**: Ship with manual input. "Automatic Screen Time Import" becomes a marquee v1.1 update feature — re-engages users and triggers fresh ratings.

---

## PHASE 2: BUILD REQUIREMENTS (Hard Stops)

### 2.1 SDK & Toolchain
- [ ] **Built with Xcode 26** or later (mandatory since April 28, 2026)
- [ ] **Uses iOS 26 SDK** (this is the build SDK, NOT the deployment target — you can still support older iOS versions)
- [ ] **App is a native binary** — NOT a PWA wrapped in a WebView (Guideline 4.2 will reject web wrappers)

> **UNLOCKED-SPECIFIC**: Your current PWA cannot be submitted as-is. You need a native Swift/SwiftUI app. The PWA is your prototype; the App Store version must be rebuilt natively (your Swift codebase is the starting point).

### 2.2 Minimum Functionality (Guideline 4.2)
- [ ] App provides **genuine native functionality** beyond what a website could do. Must include at least some of:
  - [ ] Push notifications
  - [ ] Native navigation (tab bar, navigation controller)
  - [ ] Face ID / Touch ID
  - [ ] Offline functionality
  - [ ] On-device processing
  - [ ] Widgets / Live Activities
  - [ ] ScreenTime API integration
- [ ] **No "Coming Soon" screens** — every button, tab, and feature must be functional
- [ ] **No placeholder content** — no Lorem Ipsum, no empty states that should have data
- [ ] **No dead-end flows** — every user path reaches a meaningful conclusion

### 2.3 Privacy Manifest (Automatic Rejection Without This)
- [ ] **`PrivacyInfo.xcprivacy` file included** in your app bundle
- [ ] **Every third-party SDK** bundled in your app has its own privacy manifest
- [ ] **All "Required Reason APIs"** documented with their usage reasons (UserDefaults, file timestamp access, disk space, etc.)
- [ ] **Privacy manifest matches your App Privacy label** in App Store Connect — any mismatch = rejection

---

## PHASE 3: PRIVACY & LEGAL (Apple's #1 Rejection Category)

### 3.1 Privacy Policy
- [ ] **Privacy policy URL provided** in App Store Connect
- [ ] **Privacy policy is hosted on a live, accessible URL** (not behind a login)
- [ ] **Policy accurately describes** all data collection, usage, storage, and sharing
- [ ] **Policy is written in plain language** — not just legalese

### 3.2 App Privacy Labels ("Nutrition Labels")
- [ ] **App Privacy section completed** in App Store Connect — this is displayed on your App Store listing
- [ ] **All data types accurately declared**: what you collect, whether it's linked to the user, whether it's used for tracking
- [ ] **Third-party SDK data collection included** — if a library sends analytics, you must disclose it
- [ ] **"Data Not Collected"** only if you truly collect zero data (including crash logs, analytics, etc.)

### 3.3 Permissions & Data Access
- [ ] **Only request permissions you actually need** — excessive permissions = rejection
- [ ] **Each permission has a clear, honest usage description** in Info.plist (NSCameraUsageDescription, etc.)
- [ ] **Permissions requested in context** — ask when the user takes an action that needs it, not on app launch
- [ ] **App works gracefully if permissions are denied** — don't crash or dead-end

### 3.4 AI Disclosure (New Since November 2025)
- [ ] **If your app sends ANY user data to an external AI service** (OpenAI, Anthropic, Google, etc.): display a consent screen NAMING the provider and explaining what data is shared
- [ ] **Consent must be obtained BEFORE data is sent** — not after the fact
- [ ] **If no AI services used**: you're clear, skip this

### 3.5 Tracking & ATT
- [ ] **If you track users across apps/websites**: implement App Tracking Transparency (ATT) prompt
- [ ] **ATT prompt shown BEFORE any tracking occurs**
- [ ] **If you don't track**: don't show ATT (showing it unnecessarily confuses reviewers)

---

## PHASE 4: IN-APP PURCHASES & SUBSCRIPTIONS

> **UNLOCKED-SPECIFIC**: Your app has a premium paywall. This section is critical.

### 4.1 StoreKit Implementation
- [ ] **All digital content/features use Apple's In-App Purchase** — no external payment links for digital goods
- [ ] **StoreKit 2 properly implemented** (StoreKit 1 still works but 2 is preferred)
- [ ] **Products created in App Store Connect** and in "Ready to Submit" or "Approved" status
- [ ] **Products properly attached** to your app in App Store Connect
- [ ] **Sandbox testing completed** — test the full purchase flow in sandbox before submitting

### 4.2 Paywall Design (Critical — Manipulative Patterns = Rejection)
- [ ] **"Restore Purchases" button visible** on the paywall screen without scrolling
- [ ] **Full pricing clearly displayed** before the user commits
- [ ] **Subscription terms visible**: renewal period, price, when billing starts
- [ ] **Free trial terms explicit**: exactly when the trial ends and what the charge will be
- [ ] **Cancellation info clear**: how to cancel, that it can be done in Settings
- [ ] **No pre-selected expensive tier** — don't default to the highest price option
- [ ] **Lower-priced options not hidden or visually suppressed**
- [ ] **Price shown matches App Store Connect exactly** — including currency formatting

### 4.3 Premium Content Rules
- [ ] **App is usable without purchase** — Apple rejects apps that are completely locked behind a paywall with no free value
- [ ] **Free tier provides meaningful functionality** — not just a login screen with a "buy" button

> **UNLOCKED-SPECIFIC**: Your app shows screen time conversion results for free and puts curated resources behind the paywall. This is a good model — the free tier has clear value.

---

## PHASE 5: APP COMPLETENESS & STABILITY

### 5.1 Crash-Free (The #1 Technical Rejection Reason)
- [ ] **Tested on real devices** — not just the simulator
- [ ] **Tested on multiple device sizes**: iPhone SE (small), iPhone 15/16 (standard), iPhone Pro Max (large)
- [ ] **Tested on the oldest iOS version you support**
- [ ] **App launches without crashing** every single time
- [ ] **No freezes, hangs, or unresponsive UI**
- [ ] **All buttons and interactions work** — tap every single one
- [ ] **Network error handling**: app behaves gracefully with no internet, slow internet, and timeouts
- [ ] **Memory management**: no leaks that cause crashes after extended use

### 5.2 Completeness
- [ ] **Every screen is fully functional** — no stubs, no "under construction"
- [ ] **All user flows complete end-to-end**: onboarding, core feature, paywall, purchase, settings
- [ ] **Empty states handled** — what does the user see before they've entered any data?
- [ ] **Edge cases handled**: what if the user enters 0 hours? 1000 hours? Special characters?
- [ ] **Back navigation works everywhere** — no screens you can't escape from
- [ ] **Orientation handled**: lock to portrait if you don't support landscape, but handle it explicitly

### 5.3 Review-Specific Testing
- [ ] **App works on a fresh install** — delete and reinstall, go through the full first-run experience
- [ ] **App works when relaunched** — kill and reopen, verify state is preserved
- [ ] **Background/foreground transitions work** — switch to another app and come back

---

## PHASE 6: DESIGN & UX (Guideline 4.0)

### 6.1 Human Interface Guidelines
- [ ] **Uses standard iOS patterns**: navigation bars, tab bars, alerts, action sheets
- [ ] **Supports Dynamic Type** (system text sizes) — or at minimum doesn't break at larger sizes
- [ ] **Supports Dark Mode** — or explicitly opts out (but supporting it is strongly recommended)
- [ ] **Safe areas respected** — no content hidden behind the notch, Dynamic Island, or home indicator
- [ ] **No custom alert/popup styles that mimic system alerts** — Apple rejects fake system dialogs

### 6.2 Accessibility
- [ ] **VoiceOver works** on all screens (this isn't explicitly required for approval, but broken VoiceOver can trigger rejection under "app completeness")
- [ ] **Touch targets are at least 44x44 points**
- [ ] **Sufficient color contrast** for text readability

---

## PHASE 7: METADATA & APP STORE CONNECT

### 7.1 App Information
- [ ] **App name**: unique, not infringing on trademarks, ≤ 30 characters
- [ ] **Subtitle**: ≤ 30 characters, no keyword stuffing
- [ ] **Category**: choose the most accurate primary category
- [ ] **Age rating**: fill out the questionnaire honestly — wrong age rating = rejection
- [ ] **Description**: accurate, matches what the app actually does, no competitor name-dropping ("Better than [Competitor]" = rejection)
- [ ] **Keywords**: relevant terms only, no competitor names, no trademarked terms
- [ ] **Support URL**: live, accessible page with contact info
- [ ] **Marketing URL** (optional but recommended): live landing page

### 7.2 Screenshots (Automatic Rejection If Wrong)
- [ ] **Screenshots show the ACTUAL app** — not mockups, not aspirational designs
- [ ] **Every feature shown in screenshots exists in the submitted build**
- [ ] **Required sizes provided**:
  - [ ] 6.9" iPhone set (required — Apple auto-scales for smaller phones)
  - [ ] 13" iPad set (if your app runs on iPad)
- [ ] **Format**: PNG or JPEG, RGB color space, no transparency/alpha channels
- [ ] **Localized per language** — English screenshots for English listing, etc.
- [ ] **No misleading overlays or captions** that suggest features that don't exist

### 7.3 App Review Information
- [ ] **Demo account credentials provided** (if app has login/authentication)
- [ ] **Notes to reviewer** explaining any non-obvious flows
- [ ] **If using passwordless auth**: provide a test account with a fixed OTP code and explain in the notes

> **UNLOCKED-SPECIFIC**: If Screen Time access is required, explain in the reviewer notes HOW to grant it and what the reviewer should expect to see. Screen Time data may not be available on the reviewer's device, so consider having a demo/fallback mode.

### 7.4 Contact Information
- [ ] **Contact phone number** provided
- [ ] **Contact email** provided (use a professional one, not a throwaway)

---

## PHASE 8: SPECIFIC TRAPS FOR UNLOCKED

These are issues specific to an app that deals with screen time data and sells curated resources behind a paywall:

### 8.1 Screen Time (v1: Manual Input Only)
- [ ] **ZERO Screen Time API code in the binary** — no FamilyControls, ManagedSettings, or DeviceActivity imports anywhere. Even unused imports trigger auto-rejection under Guideline 2.5.1
- [ ] **No Screen Time API in any third-party dependencies** — check transitive dependencies too
- [ ] **Manual hour input is the sole data entry method** — user types their screen time hours
- [ ] **Consider showing a tip**: "Find your screen time in Settings > Screen Time" to help users know what to enter

### 8.2 Content & Links
- [ ] **All resource URLs in skillResourceDirectory.js are live and working** — broken links visible to the reviewer = bad impression
- [ ] **External links open in Safari/SFSafariViewController** — don't trap users in a WebView they can't navigate back from
- [ ] **No affiliate links that redirect through sketchy intermediaries** — Apple flags suspicious redirect chains
- [ ] **Resource descriptions are accurate** — don't claim "free" if the resource has a mandatory paid tier

### 8.3 Paywall Specific
- [ ] **The "Start Learning" button behavior is clear**: does tapping it show resources (behind paywall), or open a URL directly?
- [ ] **Free users can see WHAT they're paying for** — showing a blurred/locked list with a "Premium" badge is fine, but they need to understand the value proposition
- [ ] **Premium unlock applies to ALL 120 skills** — if some resources are free and some are premium, make the distinction crystal clear

---

## PHASE 9: FINAL PRE-SUBMISSION

### 9.1 Technical Checks
- [ ] **Archive builds without errors or warnings** in Xcode
- [ ] **No private API usage** — Apple's automated scanner will catch this
- [ ] **No embedded frameworks with simulator slices** — strip simulator architectures before submission
- [ ] **App size is reasonable** — if over 200MB, make sure it's justified
- [ ] **Minimum deployment target set correctly** — don't accidentally require iOS 26 if you want to support earlier versions

### 9.2 Legal
- [ ] **You own or have rights to all content** — images, icons, fonts, sounds
- [ ] **No copyrighted material** without license
- [ ] **App icon is original** — doesn't resemble Apple's system icons or other apps' icons
- [ ] **Terms of Service / EULA** provided if you have subscriptions (Apple's default EULA works if you don't have custom terms)

### 9.3 Submission
- [ ] **Build uploaded via Xcode or Transporter**
- [ ] **Build processed successfully** in App Store Connect (check for processing errors)
- [ ] **All metadata filled out** — App Store Connect will warn you about missing fields
- [ ] **"Add for Review" clicked** and submission confirmed
- [ ] **Keep your backend running** — if the app depends on a server, don't let it go down during review

---

## QUICK REFERENCE: TOP 10 REJECTION REASONS (2026)

| # | Reason | Guideline | How Common |
|---|--------|-----------|------------|
| 1 | **Crashes or bugs** | 2.1 | Most common single reason |
| 2 | **Incomplete app / placeholder content** | 2.1 | ~40% of unresolved issues |
| 3 | **Privacy policy missing or inaccurate** | 5.1.1 | #1 privacy rejection |
| 4 | **Privacy manifest missing** | 5.1.1 | Auto-rejected before human review |
| 5 | **Misleading metadata/screenshots** | 2.3 | Very common for first-timers |
| 6 | **Minimum functionality (web wrapper)** | 4.2 | Fatal for PWA-to-native ports |
| 7 | **In-app purchase violations** | 3.1 | Missing restore, unclear pricing |
| 8 | **Missing demo account** | 2.1 | Reviewer can't test = rejection |
| 9 | **Excessive permissions** | 5.1.1 | Asking for data you don't need |
| 10 | **AI data sent without consent** | 5.1.1(vi) | New since Nov 2025 |

---

## TIMELINE ESTIMATE

| Step | Time |
|------|------|
| Developer account approval | 1-2 days |
| Screen Time API entitlement approval | 1-14 days (apply early!) |
| App development & testing | Your timeline |
| App Store review | ~90% reviewed within 24 hours |
| If rejected: fix & resubmit | 1-3 days per round |
| **Target**: First-attempt approval | Follow this checklist |

---

## SOURCES

- [Apple App Store Review Guidelines (Official)](https://developer.apple.com/app-store/review/guidelines/)
- [Apple Upcoming Requirements](https://developer.apple.com/news/upcoming-requirements/)
- [Apple Privacy Manifest Documentation](https://developer.apple.com/documentation/bundleresources/privacy-manifest-files)
- [Apple Screen Time API Documentation](https://developer.apple.com/documentation/screentimeapidocumentation)
- [OpenSpace: 15 Key Rejection Reasons 2026](https://www.openspaceservices.com/blog/general/apple-app-store-rejection-guide-2026-the-15-most-common-reasons-and-how-to-fix-each)
- [QAwerk: App Store Rejection Reasons 2026](https://qawerk.com/blog/app-store-rejection-reasons/)
- [Forge: Top 10 App Store Rejection Reasons 2026](https://forgeasc.com/blog/app-store-rejection-reasons)
- [Appbot: How to Get Approved First Time 2026](https://appbot.co/blog/app-store-app-review-approval-vibe-coded-delays-2026/)
- [Adapty: App Store Review Guidelines Checklist 2026](https://adapty.io/blog/how-to-pass-app-store-review/)
- [iOS 26 SDK Mandatory Requirements](https://dev.to/arshtechpro/ios-26-sdk-is-now-mandatory-here-is-what-actually-changes-for-your-app-39m4)
