import { tools } from '../data/content'

export default function TrustedBy() {
  const items = [...tools, ...tools, ...tools]

  return (
    <section aria-label="Technology partners" className="relative ml-[calc(50%_-_50vw)] w-screen max-w-[100vw] border-t border-white/10 bg-transparent">
      <div className="overflow-hidden py-5">
        <div className="technology-marquee flex w-max items-center whitespace-nowrap">
          {items.map((name, i) => (
            <span key={`${name}-${i}`} className="inline-flex shrink-0 items-center">
              <span className="px-6 font-mono text-xs font-medium uppercase tracking-[0.22em] text-neutral-400 sm:text-sm">
                {name}
              </span>
              <span className="select-none text-sm text-teal-brand" aria-hidden>
                ✦
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
