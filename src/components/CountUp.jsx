import { useCountUp } from '../hooks/useCountUp'

/**
 * Parses values like "9+", "50+", "98%", "10+" into count-up props.
 */
function parseStatValue(raw) {
  const match = String(raw).match(/^([^\d]*)(\d+(?:\.\d+)?)(.*)$/)
  if (!match) return { target: 0, prefix: '', suffix: String(raw), decimals: 0 }
  const num = match[2]
  return {
    target: Number(num),
    prefix: match[1] || '',
    suffix: match[3] || '',
    decimals: num.includes('.') ? num.split('.')[1].length : 0,
  }
}

export default function CountUp({ value, className = '', duration = 1400 }) {
  const parsed = parseStatValue(value)
  const { ref, display } = useCountUp(parsed.target, {
    duration,
    prefix: parsed.prefix,
    suffix: parsed.suffix,
    decimals: parsed.decimals,
  })

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  )
}
