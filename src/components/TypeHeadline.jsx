import { useEffect, useMemo, useRef, useState } from 'react'
import { useReveal } from '../hooks/useReveal'

function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * Scroll-triggered typewriter for section headlines.
 * segments: [{ text, className?, breakAfter? }]
 */
export default function TypeHeadline({
  as: Tag = 'h2',
  segments = [],
  className = '',
  cursorClassName = 'bg-teal-brand',
  charMs = 95,
  startDelay = 600,
  startOnMount = false,
  threshold = 0.35,
  id,
}) {
  const reduce = prefersReducedMotion()
  const { ref, visible } = useReveal({ threshold, once: true })
  const [mounted, setMounted] = useState(false)
  const [count, setCount] = useState(0)
  const [done, setDone] = useState(false)
  const started = useRef(false)
  const charsRef = useRef([])

  const chars = useMemo(() => {
    const list = []
    segments.forEach((seg, segIndex) => {
      const text = seg.text ?? ''
      for (let i = 0; i < text.length; i += 1) {
        list.push({
          ch: text[i],
          className: seg.className || '',
          key: `${segIndex}-${i}`,
        })
      }
      if (seg.breakAfter) {
        list.push({ ch: '\n', className: '', key: `${segIndex}-br` })
      }
    })
    return list
  }, [segments])

  const fullPlain = useMemo(
    () =>
      segments
        .map((s) => s.text + (s.breakAfter ? '\n' : ''))
        .join('')
        .replace(/\n/g, ' '),
    [segments],
  )

  const shouldStart = startOnMount ? mounted : visible

  useEffect(() => {
    charsRef.current = chars
  }, [chars])

  useEffect(() => {
    const id = window.requestAnimationFrame(() => setMounted(true))
    return () => window.cancelAnimationFrame(id)
  }, [])

  useEffect(() => {
    if (!shouldStart || started.current) return
    started.current = true

    const list = charsRef.current

    if (reduce) {
      setCount(list.length)
      setDone(true)
      return
    }

    let i = 0
    let timer = 0

    const pauseFor = (ch, index) => {
      const ramp = index < 10 ? 1.55 - index * 0.045 : 1
      let delay = charMs * ramp

      if (ch === ' ') delay *= 1.05
      else if (ch === '\n') delay *= 2.8
      else if (/[.,!?;:]/.test(ch)) delay *= 2.6

      return delay
    }

    const tick = () => {
      i += 1
      setCount(i)
      if (i >= list.length) {
        setDone(true)
        return
      }
      const next = list[i]
      timer = window.setTimeout(tick, pauseFor(next?.ch, i))
    }

    timer = window.setTimeout(tick, startDelay)
    return () => window.clearTimeout(timer)
  }, [shouldStart, charMs, startDelay, reduce])

  const renderChars = (limit) => {
    const slice = chars.slice(0, limit)
    const groups = []

    slice.forEach((item, index) => {
      const isLatest = index === limit - 1 && !done
      if (item.ch === '\n') {
        groups.push({ type: 'br', key: item.key })
        return
      }

      const prev = groups[groups.length - 1]
      if (prev && prev.type === 'text' && prev.className === (item.className || '')) {
        prev.chars.push({ ...item, isLatest })
        return
      }

      groups.push({
        type: 'text',
        key: `g-${item.key}`,
        className: item.className || '',
        chars: [{ ...item, isLatest }],
      })
    })

    return groups.map((group) => {
      if (group.type === 'br') return <br key={group.key} />
      return (
        <span key={group.key} className={group.className || undefined}>
          {group.chars.map((item) => (
            <span key={item.key} className={item.isLatest ? 'type-char-in' : undefined}>
              {item.ch}
            </span>
          ))}
        </span>
      )
    })
  }

  const renderGhost = () => {
    const groups = []
    chars.forEach((item) => {
      if (item.ch === '\n') {
        groups.push({ type: 'br', key: `g-${item.key}` })
        return
      }
      const prev = groups[groups.length - 1]
      if (prev && prev.type === 'text' && prev.className === (item.className || '')) {
        prev.chars.push(item)
        return
      }
      groups.push({
        type: 'text',
        key: `gg-${item.key}`,
        className: item.className || '',
        chars: [item],
      })
    })

    return groups.map((group) => {
      if (group.type === 'br') return <br key={group.key} />
      return (
        <span key={group.key} className={group.className || undefined}>
          {group.chars.map((item) => (
            <span key={item.key}>{item.ch}</span>
          ))}
        </span>
      )
    })
  }

  return (
    <Tag ref={ref} id={id} className={`type-headline relative ${className}`} aria-label={fullPlain}>
      <span className="invisible block select-none" aria-hidden>
        {renderGhost()}
      </span>
      <span className="absolute inset-x-0 top-0" aria-hidden>
        {renderChars(count)}
        {!done && !reduce && (
          <span
            className={`type-cursor ml-[0.06em] inline-block h-[0.85em] w-[0.08em] translate-y-[0.08em] align-baseline ${cursorClassName}`}
          />
        )}
      </span>
    </Tag>
  )
}
