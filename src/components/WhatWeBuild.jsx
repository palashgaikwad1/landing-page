import { stats, usps } from '../data/content'
import Reveal from './Reveal'
import CountUp from './CountUp'
import TypeHeadline from './TypeHeadline'

export default function WhatWeBuild() {
  return (
    <section id="about" data-nav-theme="light" className="bg-surface-light py-20 text-black md:py-28 lg:py-32">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
          <Reveal>
            <p className="font-mono text-[0.7rem] font-medium uppercase tracking-[0.22em] text-techzify-600">( What we do )</p>
          </Reveal>
          <div>
            <TypeHeadline
              as="h2"
              cursorClassName="bg-techzify-600"
              className="max-w-4xl text-[clamp(2.5rem,5vw,4.75rem)] font-semibold leading-[0.98] tracking-[-0.05em] text-black"
              segments={[{ text: 'We turn complex ideas into digital products people want to use.' }]}
            />
            <Reveal delay={80}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-600">
                Strategy, design, and engineering work as one team—so you move faster without sacrificing the details that make a product valuable.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="mt-12 border-t border-black/10 pt-10 md:mt-16 md:pt-12 lg:mt-20">
          <div className="grid gap-px overflow-hidden rounded-[1.5rem] border border-black/10 bg-black/10 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 80}>
                <div className="h-full bg-white p-6 md:p-8">
                  <p className="text-4xl font-semibold tracking-tight text-black md:text-5xl">
                    <CountUp value={s.value} />
                  </p>
                  <p className="mt-3 text-sm text-neutral-500">{s.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-8 border-t border-black/10 pt-10 md:grid-cols-3">
          {usps.map((item, index) => (
            <Reveal key={item.title} delay={index * 80}>
              <div className="pr-5">
                <span className="font-mono text-xs text-techzify-600">0{index + 1}</span>
                <h3 className="mt-5 text-xl font-semibold tracking-tight text-black">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
