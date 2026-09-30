import { brand, navLinks } from '../data/content'
import Reveal from './Reveal'

const pageLinks = [{ label: 'Home', href: '#home' }, ...navLinks]

const connectLinks = [
  { label: 'Email', href: `mailto:${brand.email}`, external: true },
  { label: 'Phone', href: `tel:${brand.phone.replace(/\s/g, '')}`, external: true },
  { label: 'LinkedIn', href: '#', external: true },
  { label: 'Instagram', href: '#', external: true },
  { label: 'X / Twitter', href: '#', external: true },
]

const WORDMARK = `${brand.name.toUpperCase()}.`
const tickerItems = Array.from({ length: 12 }, (_, i) => i)

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative z-10 overflow-hidden bg-white text-neutral-900">
      <div
        className="pointer-events-none absolute -bottom-32 -right-24 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(5,78,238,0.14),rgba(0,212,210,0.08),transparent_70%)] blur-2xl"
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-7xl px-5 pt-16 sm:px-6 md:pt-20 lg:pt-24">
        <Reveal className="grid gap-12 sm:grid-cols-2 sm:gap-16 lg:gap-24">
          <nav aria-label="Footer pages">
            <ul className="space-y-1">
              {pageLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-3 py-1.5 text-[clamp(1.65rem,3.2vw,2.75rem)] font-semibold leading-none tracking-[-0.04em] text-neutral-900 transition duration-250 hover:text-techzify-600"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Connect" className="sm:justify-self-end">
            <ul className="space-y-1 sm:text-right">
              {connectLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-3 py-1.5 text-[clamp(1.65rem,3.2vw,2.75rem)] font-semibold leading-none tracking-[-0.04em] text-neutral-900 transition duration-250 hover:text-techzify-600 sm:flex-row-reverse"
                    {...(link.external && link.href.startsWith('http')
                      ? { target: '_blank', rel: 'noreferrer' }
                      : {})}
                  >
                    <span>{link.label}</span>
                    <span
                      className="btn-arrow text-[0.55em] text-neutral-400 transition duration-250 group-hover:text-techzify-600"
                      aria-hidden
                    >
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </Reveal>

        <Reveal
          delay={120}
          className="mt-16 flex flex-col gap-4 border-t border-black/10 pt-6 text-[11px] uppercase tracking-[0.16em] text-neutral-500 sm:mt-20 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:text-xs md:mt-24"
        >
          <p>
            @ {year} {brand.name}. All rights reserved
          </p>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
            <a href="#" className="transition duration-250 hover:text-techzify-600">
              Privacy policy
            </a>
            <a href="#" className="transition duration-250 hover:text-techzify-600">
              Terms of service
            </a>
            <a href={`mailto:${brand.email}`} className="transition duration-250 hover:text-techzify-600">
              {brand.email}
            </a>
          </div>
        </Reveal>
      </div>

      <div
        className="relative mt-10 overflow-hidden select-none sm:mt-12 md:mt-14"
        aria-label={brand.name}
      >
        <div className="footer-ticker flex w-max items-center whitespace-nowrap py-2">
          {tickerItems.map((i) => (
            <span
              key={i}
              className="inline-flex shrink-0 items-center gap-[0.18em] pr-[0.28em]"
              aria-hidden={i > 0}
            >
              <span className="footer-mega-wordmark text-[clamp(4.5rem,18vw,15rem)] font-black uppercase tracking-[-0.02em] text-neutral-900">
                {WORDMARK}
              </span>
              <span
                className="mb-[0.12em] inline-block h-[0.14em] w-[0.14em] shrink-0 rounded-full bg-[#ff2d6a]"
                aria-hidden
              />
            </span>
          ))}
        </div>
      </div>
    </footer>
  )
}
