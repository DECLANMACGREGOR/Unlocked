import { useState, useCallback } from 'react'

const KEY = 'sts_premium'

// For PWA: premium state lives in localStorage.
// When you add a real payment processor (Stripe, RevenueCat web, etc.)
// replace unlock() with a payment verification call that sets this key
// only after a confirmed purchase.

export function usePremium() {
  const [isPremium, setIsPremium] = useState(
    () => localStorage.getItem(KEY) === '1'
  )

  const unlock = useCallback(() => {
    localStorage.setItem(KEY, '1')
    setIsPremium(true)
  }, [])

  const revoke = useCallback(() => {
    localStorage.removeItem(KEY)
    setIsPremium(false)
  }, [])

  return { isPremium, unlock, revoke }
}
