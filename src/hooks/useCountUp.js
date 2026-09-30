import { useEffect, useRef, useState } from 'react'
import { useReveal } from './useReveal'

function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function useCountUp(target, { duration = 1400, suffix = '', prefix = '', decimals = 0 } = {}) {
  const reduce = prefersReducedMotion()
  const { ref, visible } = useReveal({ threshold: 0.35 })
  const [value, setValue] = useState(reduce ? target : 0)
  const started = useRef(false)

  useEffect(() => {
    if (!visible || started.current || reduce) return
    started.current = true

    const start = performance.now()
    let frame = 0

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const next = target * eased
      setValue(decimals > 0 ? Number(next.toFixed(decimals)) : Math.round(next))
      if (progress < 1) frame = requestAnimationFrame(tick)
      else setValue(target)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [visible, target, duration, decimals, reduce])

  const display =
    decimals > 0
      ? `${prefix}${Number(value).toFixed(decimals)}${suffix}`
      : `${prefix}${value}${suffix}`

  return { ref, display, visible }
}
