// localStorage can throw on any access: quota exceeded on write (Safari
// private mode has a 0-byte quota), SecurityError on read when cookies/site
// data are blocked. Persistence is a nice-to-have here — never worth crashing
// the UI — so reads fall back and writes fail silently.

export function getStored(key) {
  try {
    return localStorage.getItem(key)
  } catch {
    return null
  }
}

export function setStored(key, value) {
  try {
    localStorage.setItem(key, value)
  } catch {
    // ignore — state lives in React; only persistence across reloads is lost
  }
}

export function removeStored(key) {
  try {
    localStorage.removeItem(key)
  } catch {
    // ignore
  }
}
