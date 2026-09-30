import { useEffect, useRef } from 'react'

function canUsePointerParallax() {
  if (typeof window === 'undefined') return false
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false
  return window.matchMedia('(hover: hover) and (pointer: fine)').matches
}

/**
 * Applies subtle CSS-variable parallax from pointer movement.
 * Uses --px / --py on the element; no React re-renders.
 */
export function usePointerParallax({ max = 6 } = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el || !canUsePointerParallax()) return

    let raf = 0
    let targetX = 0
    let targetY = 0
    let currentX = 0
    let currentY = 0

    const apply = () => {
      currentX += (targetX - currentX) * 0.08
      currentY += (targetY - currentY) * 0.08
      el.style.setProperty('--px', `${currentX.toFixed(2)}px`)
      el.style.setProperty('--py', `${currentY.toFixed(2)}px`)
      raf = requestAnimationFrame(apply)
    }

    const onMove = (event) => {
      const rect = el.getBoundingClientRect()
      const nx = (event.clientX - rect.left) / rect.width - 0.5
      const ny = (event.clientY - rect.top) / rect.height - 0.5
      targetX = nx * max
      targetY = ny * max
    }

    const onLeave = () => {
      targetX = 0
      targetY = 0
    }

    el.addEventListener('pointermove', onMove, { passive: true })
    el.addEventListener('pointerleave', onLeave)
    raf = requestAnimationFrame(apply)

    return () => {
      cancelAnimationFrame(raf)
      el.removeEventListener('pointermove', onMove)
      el.removeEventListener('pointerleave', onLeave)
      el.style.removeProperty('--px')
      el.style.removeProperty('--py')
    }
  }, [max])

  return ref
}
