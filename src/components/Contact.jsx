import { useState } from 'react'
import { brand } from '../data/content'
import Reveal from './Reveal'
import TypeHeadline from './TypeHeadline'

const budgets = [
  { value: '5-15', label: '$5k – $15k' },
  { value: '15-40', label: '$15k – $40k' },
  { value: '40-100', label: '$40k – $100k' },
  { value: '100+', label: '$100k+' },
]

const nextSteps = [
  'Share a short brief',
  'We reply within 1 day',
  'Align on scope & kickoff',
]

const fieldClass =
  'w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm text-white outline-none transition duration-200 placeholder:text-white/30 hover:border-white/20 focus:border-teal-brand/60 focus:bg-white/[0.06] focus:ring-2 focus:ring-teal-brand/15'

export default function Contact() {
  const [budget, setBudget] = useState('')

  return (
    <section
      id="contact"
      data-nav-theme="dark"
      className="relative overflow-hidden bg-black py-20 text-white md:py-28 lg:py-32"
    >
      {/* Atmosphere — black-first, subtle teal only */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_15%_0%,rgba(0,212,210,0.08),transparent_50%),radial-gradient(ellipse_60%_45%_at_90%_90%,rgba(5,78,238,0.07),transparent_45%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:64px_64px] opacity-25 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
        <div className="contact-glow absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-teal-brand/10 blur-[110px]" />
        <div className="contact-ring absolute -right-40 -top-40 h-[28rem] w-[28rem] rounded-full border-[56px] border-white/[0.04]" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-6">
        <div className="grid items-start gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 xl:gap-24">
          {/* Left copy + channels */}
          <div>
            <Reveal>
              <p className="font-mono text-[0.7rem] font-medium uppercase tracking-[0.22em] text-teal-brand">
                ( Start a project )
              </p>
            </Reveal>
            <TypeHeadline
              as="h2"
              className="mt-5 max-w-xl text-[clamp(2.6rem,5.2vw,4.6rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-white"
              segments={[
                { text: "Let's make your next " },
                {
                  text: 'move count.',
                  className:
                    'bg-gradient-to-br from-teal-brand to-[#7adfff] bg-clip-text text-transparent',
                },
              ]}
            />
            <Reveal delay={100}>
              <p className="mt-6 max-w-md text-base leading-relaxed text-white/60">
                Tell us what you want to build. You&apos;ll hear back from the people who design and ship the work—not a sales queue.
              </p>

              <ol className="mt-10 space-y-4">
                {nextSteps.map((step, i) => (
                  <li key={step} className="flex items-center gap-4 text-sm text-white/75">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-teal-brand/30 bg-teal-brand/10 font-mono text-[11px] text-teal-brand">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>

              <div className="mt-12 space-y-1 border-t border-white/10 pt-8">
                <a
                  href={`mailto:${brand.email}`}
                  className="group flex items-center gap-4 rounded-2xl px-3 py-3.5 transition duration-250 hover:bg-white/[0.04]"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-teal-brand transition duration-250 group-hover:border-teal-brand/40">
                    <MailIcon />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[11px] uppercase tracking-[0.16em] text-white/40">Email</span>
                    <span className="mt-0.5 block truncate text-sm text-white transition duration-250 group-hover:text-teal-brand">
                      {brand.email}
                    </span>
                  </span>
                </a>

                <a
                  href={`tel:${brand.phone.replace(/\s/g, '')}`}
                  className="group flex items-center gap-4 rounded-2xl px-3 py-3.5 transition duration-250 hover:bg-white/[0.04]"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-teal-brand transition duration-250 group-hover:border-teal-brand/40">
                    <PhoneIcon />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[11px] uppercase tracking-[0.16em] text-white/40">Phone</span>
                    <span className="mt-0.5 block text-sm text-white transition duration-250 group-hover:text-teal-brand">
                      {brand.phone}
                    </span>
                  </span>
                </a>

                <div className="flex items-center gap-4 rounded-2xl px-3 py-3.5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-teal-brand">
                    <PinIcon />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[11px] uppercase tracking-[0.16em] text-white/40">Based in</span>
                    <span className="mt-0.5 block text-sm text-white">
                      {brand.location} · working globally
                    </span>
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={120} variant="scaleIn">
            <form
              className="rounded-[1.75rem] border border-white/10 bg-[#0a0a0a] p-6 shadow-[0_40px_100px_rgba(0,0,0,0.55)] sm:p-8 lg:p-9"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="mb-8 flex items-start justify-between gap-4">
                <div>
                  <p className="text-lg font-semibold tracking-tight text-white">Project brief</p>
                  <p className="mt-1 text-sm text-white/45">Takes about 2 minutes.</p>
                </div>
                <span className="shrink-0 rounded-full border border-teal-brand/25 bg-teal-brand/10 px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-teal-brand">
                  Reply in 24h
                </span>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name">
                  <input type="text" name="name" autoComplete="name" placeholder="Alex Rivera" className={fieldClass} />
                </Field>
                <Field label="Work email">
                  <input type="email" name="email" autoComplete="email" placeholder="alex@company.com" className={fieldClass} />
                </Field>
                <Field label="Phone">
                  <input type="tel" name="phone" autoComplete="tel" placeholder="+1 555 000 0000" className={fieldClass} />
                </Field>
                <Field label="Company">
                  <input type="text" name="company" autoComplete="organization" placeholder="Acme Inc." className={fieldClass} />
                </Field>
              </div>

              <fieldset className="mt-5">
                <legend className="mb-3 text-xs font-medium uppercase tracking-[0.14em] text-white/50">
                  Project budget
                </legend>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {budgets.map((b) => {
                    const selected = budget === b.value
                    return (
                      <button
                        key={b.value}
                        type="button"
                        onClick={() => setBudget(b.value)}
                        className={`rounded-xl border px-3 py-3 text-xs font-medium transition duration-200 sm:text-[13px] ${
                          selected
                            ? 'border-teal-brand/60 bg-teal-brand/15 text-teal-brand'
                            : 'border-white/10 bg-white/[0.03] text-white/65 hover:border-white/25 hover:text-white active:scale-[0.98]'
                        }`}
                      >
                        {b.label}
                      </button>
                    )
                  })}
                </div>
                <input type="hidden" name="budget" value={budget} />
              </fieldset>

              <Field label="What are you looking to build?" className="mt-5">
                <textarea
                  name="details"
                  rows={4}
                  placeholder="Product type, timeline, goals, anything useful…"
                  className={`${fieldClass} resize-none`}
                />
              </Field>

              <button
                type="submit"
                className="btn-premium mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-teal-brand to-[#5eefed] px-6 py-4 text-sm font-semibold text-black shadow-[0_14px_40px_rgba(0,212,210,0.22)] hover:shadow-[0_18px_48px_rgba(0,212,210,0.32)]"
              >
                Send project brief
                <span className="btn-arrow" aria-hidden>
                  ↗
                </span>
              </button>

              <p className="mt-4 text-center text-xs leading-relaxed text-white/35">
                No spam. We only use this to respond about your project.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Field({ label, children, className = '' }) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-white/50">
        {label}
      </span>
      {children}
    </label>
  )
}

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M4 6h16v12H4V6z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M8.5 4.5h-3A1.5 1.5 0 004 6v1.2c0 8 6.3 14.3 14.3 14.3H19.5A1.5 1.5 0 0021 20v-3a1.5 1.5 0 00-1.5-1.5h-2.2a1.5 1.5 0 00-1.4 1l-.6 1.5a12.5 12.5 0 01-5.8-5.8l1.5-.6a1.5 1.5 0 001-1.4V6A1.5 1.5 0 0011 4.5H8.5z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function PinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 21s7-5.4 7-11a7 7 0 10-14 0c0 5.6 7 11 7 11z" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="10" r="2.2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}
