import { useEffect, useState } from 'react'
import { brand, navLinks } from '../data/content'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [light, setLight] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('[data-nav-theme]'))
    let raf = 0

    const update = () => {
      raf = 0
      const probeY = 88
      let active = 'dark'

      for (const section of sections) {
        const rect = section.getBoundingClientRect()
        if (rect.top <= probeY && rect.bottom > probeY) {
          active = section.getAttribute('data-nav-theme') || 'dark'
          break
        }
      }

      setLight(active === 'light')
      setScrolled(window.scrollY > 24)
    }

    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      if (raf) cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  const navShell = light
    ? 'border-black/5 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.12)]'
    : 'border-white/10 bg-black/55 shadow-[0_8px_32px_rgba(0,0,0,0.45)] backdrop-blur-2xl'

  const compact = scrolled ? 'py-2 md:py-2.5' : 'py-2.5 md:py-3'
  const brandText = light ? 'text-neutral-900' : 'text-white'
  const linkClass = light
    ? 'nav-link rounded-full px-3.5 py-1.5 text-sm text-neutral-700 transition-colors duration-250 hover:bg-black/5 hover:text-black'
    : 'nav-link rounded-full px-3.5 py-1.5 text-sm text-neutral-300 transition-colors duration-250 hover:bg-white/5 hover:text-white'
  const menuBtn = light
    ? 'flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-neutral-900 transition duration-200 hover:bg-black/5 lg:hidden'
    : 'flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white transition duration-200 hover:bg-white/5 lg:hidden'
  const mobilePanel = light
    ? 'mt-2 overflow-hidden rounded-3xl border border-black/5 bg-white px-5 py-4 shadow-xl lg:hidden'
    : 'mt-2 overflow-hidden rounded-3xl border border-white/10 bg-black/55 px-5 py-4 shadow-xl backdrop-blur-2xl lg:hidden'
  const mobileLink = light
    ? 'block rounded-xl px-3 py-2.5 text-sm text-neutral-700 transition hover:bg-black/5 hover:text-black'
    : 'block rounded-xl px-3 py-2.5 text-sm text-neutral-300 transition hover:bg-white/5 hover:text-white'

  return (
    <header className="nav-enter fixed top-0 z-50 w-full pt-4 md:pt-5">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6">
        <nav
          className={`flex w-full items-center justify-between gap-4 rounded-full border px-3 transition-[padding,box-shadow,background-color,border-color] duration-300 md:px-5 ${compact} ${navShell}`}
        >
          <a href="#home" className="flex shrink-0 items-center gap-2.5 pl-1">
            <img src="/color_logo.svg" alt="" className="h-8 w-8 rounded-lg" />
            <span className={`text-base font-semibold tracking-tight transition-colors duration-300 ${brandText}`}>
              {brand.name}
            </span>
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className={linkClass}>
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="nav-cta hidden items-center justify-center gap-2 rounded-full bg-teal-brand px-4 py-2 text-sm font-semibold text-black sm:inline-flex"
            >
              Book a call
              <span className="btn-arrow" aria-hidden>
                ↗
              </span>
            </a>

            <button
              type="button"
              className={menuBtn}
              onClick={() => setOpen(!open)}
              aria-label="Menu"
              aria-expanded={open}
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </nav>

        {open && (
          <div className={mobilePanel}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={mobileLink}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="nav-cta mt-3 flex items-center justify-center gap-2 rounded-full bg-teal-brand px-5 py-3 text-sm font-semibold text-black"
              onClick={() => setOpen(false)}
            >
              Book a call
              <span className="btn-arrow" aria-hidden>
                ↗
              </span>
            </a>
          </div>
        )}
      </div>
    </header>
  )
}
