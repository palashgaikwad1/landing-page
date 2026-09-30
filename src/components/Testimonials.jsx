import { testimonials } from '../data/content'
import Reveal from './Reveal'
import TypeHeadline from './TypeHeadline'

function TestimonialCard({ t }) {
  return (
    <blockquote className="testimonial-card flex w-[min(22rem,78vw)] shrink-0 flex-col justify-between rounded-2xl border border-white/10 bg-[#111111] p-6 sm:w-[24rem] sm:p-7">
      <p className="text-[0.95rem] leading-relaxed text-neutral-300 sm:text-base">
        &ldquo;{t.quote}&rdquo;
      </p>
      <footer className="mt-8 flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <span
            className="testimonial-avatar flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-techzify-500 to-teal-brand text-sm font-semibold text-white"
            aria-hidden
          >
            {t.name.charAt(0)}
          </span>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-white">{t.name}</p>
            <p className="truncate text-xs text-neutral-500">{t.role}</p>
          </div>
        </div>
        <span className="shrink-0 text-neutral-500" aria-hidden>
          <XIcon />
        </span>
      </footer>
    </blockquote>
  )
}

function MarqueeRow({ items, direction = 'left', duration = 48 }) {
  const loop = [...items, ...items]

  return (
    <div className="testimonial-marquee-track" data-direction={direction}>
      <div
        className={`testimonial-marquee-rail flex w-max gap-4 sm:gap-5 ${
          direction === 'right' ? 'testimonial-marquee-rail--right' : 'testimonial-marquee-rail--left'
        }`}
        style={{ '--marquee-duration': `${duration}s` }}
      >
        {loop.map((t, i) => (
          <TestimonialCard key={`${t.name}-${i}`} t={t} />
        ))}
      </div>
    </div>
  )
}

export default function Testimonials() {
  const mid = Math.ceil(testimonials.length / 2)
  const rowA = testimonials.slice(0, mid)
  const rowB = testimonials.slice(mid)

  return (
    <section data-nav-theme="dark" className="overflow-hidden bg-black py-20 md:py-28 lg:py-32">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <p className="font-mono text-[0.7rem] font-medium uppercase tracking-[0.22em] text-teal-brand">
              ( Client proof )
            </p>
          </Reveal>
          <TypeHeadline
            as="h2"
            className="mt-5 text-[clamp(2.5rem,5vw,4.75rem)] font-semibold leading-[0.98] tracking-[-0.05em] text-white"
            segments={[{ text: 'Built together. Measured in outcomes.' }]}
          />
        </div>
      </div>

      <Reveal delay={120} className="mt-12 md:mt-16 lg:mt-20">
        <div className="testimonial-marquee-stage relative ml-[calc(50%_-_50vw)] w-screen max-w-[100vw]">
          <div className="flex flex-col gap-4 sm:gap-5" role="list" aria-label="Client testimonials">
            <MarqueeRow items={rowA} direction="left" duration={52} />
            <MarqueeRow items={rowB} direction="right" duration={58} />
          </div>
        </div>
      </Reveal>
    </section>
  )
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden>
      <path d="M18.244 2H21.5l-7.5 8.57L22.5 22h-6.59l-5.16-6.74L5.1 22H1.84l8.03-9.17L1.5 2h6.76l4.66 6.2L18.244 2zm-1.16 18h1.82L7.05 3.94H5.1L17.084 20z" />
    </svg>
  )
}
