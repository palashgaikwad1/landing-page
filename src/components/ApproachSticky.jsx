import { process } from '../data/content'
import Reveal from './Reveal'
import TypeHeadline from './TypeHeadline'

export default function ApproachSticky() {
  return (
    <section id="process" data-nav-theme="dark" className="bg-black">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 py-20 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24 lg:py-0">
        <div className="lg:sticky lg:top-0 lg:flex lg:h-dvh lg:flex-col lg:justify-center">
          <Reveal>
            <p className="font-mono text-[0.7rem] font-medium uppercase tracking-[0.22em] text-teal-brand">( How we work )</p>
          </Reveal>
          <TypeHeadline
            as="h2"
            className="mt-5 max-w-lg text-[clamp(2.5rem,5vw,4.75rem)] font-semibold leading-[0.98] tracking-[-0.05em] text-white"
            segments={[
              { text: 'Clear process.', breakAfter: true },
              { text: 'No black box.' },
            ]}
          />
          <Reveal delay={100}>
            <p className="mt-6 max-w-md text-base leading-relaxed text-neutral-400">
              A senior, collaborative team from strategy through launch—with decisions, progress, and priorities always visible.
            </p>
            <a
              href="#contact"
              className="btn-premium mt-8 inline-flex items-center justify-center gap-2 rounded-full border border-teal-brand/40 px-6 py-3.5 text-sm font-semibold text-teal-brand hover:border-teal-brand hover:bg-teal-brand/10"
            >
              Plan your project <span className="btn-arrow" aria-hidden>↗</span>
            </a>
          </Reveal>
        </div>

        <div className="border-t border-white/10 lg:py-28">
          {process.map((item, index) => (
            <Reveal key={item.step} delay={index * 80}>
              <article className="process-step group grid gap-6 border-b border-white/10 py-10 sm:grid-cols-[4rem_1fr] lg:min-h-[35vh] lg:content-center lg:py-14">
                <span className="font-mono text-xs text-teal-brand">{item.step}</span>
                <div>
                  <h3 className="text-3xl font-semibold tracking-[-0.035em] text-white md:text-4xl">{item.title}</h3>
                  <p className="mt-5 max-w-lg text-base leading-relaxed text-neutral-400">{item.desc}</p>
                  <div
                    className="process-step-line mt-8 h-px w-12 bg-teal-brand group-hover:w-24"
                  />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
