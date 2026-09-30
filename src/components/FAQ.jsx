import { useState } from 'react'
import { faqs } from '../data/content'
import Reveal from './Reveal'
import TypeHeadline from './TypeHeadline'

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section data-nav-theme="light" className="bg-surface-light py-20 text-black md:py-28 lg:py-32">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
        <div>
          <Reveal>
            <p className="font-mono text-[0.7rem] font-medium uppercase tracking-[0.22em] text-techzify-600">( FAQ )</p>
          </Reveal>
          <TypeHeadline
            as="h2"
            cursorClassName="bg-techzify-600"
            className="mt-5 max-w-md text-[clamp(2.5rem,5vw,4.75rem)] font-semibold leading-[0.98] tracking-[-0.05em] text-black"
            segments={[{ text: 'Before we get started.' }]}
          />
          <Reveal delay={80}>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-neutral-600">
              Still have a question? Tell us what you are planning and we will reply within one working day.
            </p>
            <a
              href="#contact"
              className="mt-7 inline-flex w-fit items-center gap-2 text-sm font-semibold text-black underline decoration-transparent underline-offset-4 transition hover:decoration-current"
            >
              Ask us directly <span className="btn-arrow" aria-hidden>↗</span>
            </a>
          </Reveal>
        </div>

        <div className="border-t border-black/15">
          {faqs.map((faq, i) => {
            const isOpen = open === i
            return (
              <Reveal key={faq.q} delay={Math.min(i * 50, 250)}>
                <div className="border-b border-black/15">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-6 py-6 text-left md:py-7"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                  >
                    <span className="text-base font-medium text-black md:text-lg">{faq.q}</span>
                    <span
                      className={`faq-icon flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-black/20 text-lg text-black ${
                        isOpen ? 'rotate-45' : 'rotate-0'
                      }`}
                    >
                      +
                    </span>
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-[340ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
                      isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p
                        className={`faq-answer max-w-2xl pb-7 pr-12 text-sm leading-relaxed text-neutral-600 ${
                          isOpen ? 'is-open' : 'is-closed'
                        }`}
                      >
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
