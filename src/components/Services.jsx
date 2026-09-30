import { services } from '../data/content'
import Reveal from './Reveal'
import TypeHeadline from './TypeHeadline'

export default function Services() {
  return (
    <section id="services" data-nav-theme="dark" className="relative bg-black py-20 md:py-28 lg:py-32">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Reveal>
              <p className="font-mono text-[0.7rem] font-medium uppercase tracking-[0.22em] text-teal-brand">( Services )</p>
            </Reveal>
            <TypeHeadline
              as="h2"
              className="mt-5 max-w-2xl text-[clamp(2.5rem,5vw,4.75rem)] font-semibold leading-[0.98] tracking-[-0.05em] text-white"
              segments={[{ text: 'One partner from first idea to lasting growth.' }]}
            />
          </div>
          <Reveal delay={120}>
            <a
              href="#contact"
              className="btn-premium inline-flex w-fit items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:border-white hover:bg-white hover:text-black"
            >
              Start a conversation
            </a>
          </Reveal>
        </div>

        <ul className="relative mt-12 border-t border-white/10 md:mt-16 lg:mt-20">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={Math.min(i * 80, 400)} as="li">
              <a
                href="#contact"
                className="service-row group grid grid-cols-[2.5rem_1fr] items-center gap-x-3 border-b border-white/10 px-2 py-6 transition-colors duration-250 hover:bg-neutral-900 sm:grid-cols-[3rem_minmax(0,1.1fr)_minmax(0,1fr)_2rem] sm:gap-x-6 sm:px-4 sm:py-8 md:py-9"
              >
                <span className="font-mono text-xs tabular-nums text-neutral-500 transition-colors duration-250 group-hover:text-neutral-400">
                  {String(i + 1).padStart(2, '0')}
                </span>

                <h3 className="text-xl font-bold tracking-tight text-white transition-colors duration-250 group-hover:text-white sm:text-2xl md:text-3xl">
                  {s.title}
                </h3>

                <p className="col-span-2 mt-2 text-sm leading-relaxed text-neutral-400 transition-colors duration-250 group-hover:text-neutral-300 sm:col-span-1 sm:mt-0 sm:max-w-md sm:justify-self-end">
                  {s.desc}
                </p>

                <span
                  className="service-arrow hidden justify-self-end text-lg text-white sm:block"
                  aria-hidden
                >
                  ↗
                </span>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
