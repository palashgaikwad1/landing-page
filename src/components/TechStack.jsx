import { technologies } from '../data/content'
import Reveal from './Reveal'
import TypeHeadline from './TypeHeadline'

const icons = {
  HTML: HtmlIcon,
  CSS: CssIcon,
  WordPress: WpIcon,
  Shopify: BagIcon,
  Laravel: LaravelIcon,
  MySQL: DbIcon,
  Vue: VueIcon,
  PHP: PhpIcon,
  'React.js': ReactIcon,
  Azure: CloudIcon,
  Python: PyIcon,
  Angular: AngIcon,
  'Node.js': NodeIcon,
}

const tierMeta = {
  blue: {
    chip: 'from-[#3b82f6] to-[#2563eb]',
    Icon: CodeBracketsIcon,
  },
  violet: {
    chip: 'from-[#8b5cf6] to-[#7c3aed]',
    Icon: LayersIcon,
  },
  teal: {
    chip: 'from-[#14b8a6] to-[#00d4d2]',
    Icon: RocketIcon,
  },
}

export default function TechStack() {
  return (
    <section
      id="tech"
      data-nav-theme="light"
      className="tech-section relative flex min-h-dvh items-center overflow-hidden py-20 text-[#0b1220] md:py-28 lg:py-32"
    >
      <div className="tech-section-bg" aria-hidden>
        <span className="tech-glow tech-glow--blue" />
        <span className="tech-glow tech-glow--violet" />
        <span className="tech-arc tech-arc--tl" />
        <span className="tech-arc tech-arc--br" />
        <span className="tech-cube tech-cube--a" />
        <span className="tech-cube tech-cube--b" />
        <span className="tech-cube tech-cube--c" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.2fr)] lg:gap-14 xl:gap-16">
        <div className="flex max-w-xl flex-col gap-8 lg:gap-10">
          <div>
            <Reveal>
              <p className="inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-techzify-600">
                <span className="h-1.5 w-1.5 rounded-full bg-techzify-600" aria-hidden />
                Technology
              </p>
            </Reveal>
            <TypeHeadline
              as="h2"
              cursorClassName="bg-techzify-600"
              className="mt-5 text-[clamp(2.45rem,4.8vw,4.4rem)] font-semibold leading-[0.98] tracking-[-0.05em] text-[#0b1220]"
              segments={[
                { text: 'The right stack for ' },
                { text: 'the job.', className: 'tech-headline-gradient' },
              ]}
            />
          </div>

          <Reveal delay={80}>
            <p className="max-w-md text-[0.95rem] leading-relaxed text-neutral-500 sm:text-base">
              We choose proven, maintainable technology around your product, team, and growth plan—not trends.
            </p>
            <a
              href="#contact"
              className="btn-premium mt-7 inline-flex items-center justify-center gap-2.5 rounded-full bg-[#0b1b4d] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(11,27,77,0.28)] hover:bg-[#132968]"
            >
              Talk to an engineer
              <span className="btn-arrow text-base leading-none" aria-hidden>
                ↗
              </span>
            </a>
          </Reveal>
        </div>

        <Reveal delay={120} variant="scaleIn" className="min-w-0">
          <div className="tech-panel relative rounded-[1.75rem] border border-white/80 bg-white/90 p-4 shadow-[0_30px_80px_rgba(15,40,120,0.12)] backdrop-blur-sm sm:p-5 md:rounded-[2rem] md:p-6">
            <div className="grid gap-4 sm:grid-cols-3 sm:gap-3 md:gap-4">
              {technologies.map((col, colIndex) => {
                const meta = tierMeta[col.accent] || tierMeta.blue
                const TierIcon = meta.Icon
                return (
                  <div
                    key={col.tier}
                    className="flex flex-col rounded-2xl bg-[#f4f7fb] p-3.5 sm:p-4"
                    style={{ animationDelay: `${colIndex * 80}ms` }}
                  >
                    <div className="mb-4 flex items-start gap-3">
                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${meta.chip} text-white shadow-[0_10px_20px_rgba(37,99,235,0.22)]`}
                        aria-hidden
                      >
                        <TierIcon />
                      </span>
                      <div className="min-w-0 pt-0.5">
                        <h3 className="text-[0.8rem] font-bold uppercase tracking-[0.12em] text-[#0b1220]">
                          {col.tier}
                        </h3>
                        <p className="mt-0.5 text-[0.7rem] leading-snug text-neutral-500">{col.subtitle}</p>
                      </div>
                    </div>

                    <ul className="flex flex-1 flex-col gap-2.5">
                      {col.items.map((item) => {
                        const Icon = icons[item] || CodeIcon
                        return (
                          <li key={item}>
                            <div className="tech-item-card flex items-center gap-3 rounded-xl border border-black/[0.04] bg-white px-3 py-2.5 shadow-[0_4px_14px_rgba(15,40,120,0.05)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(15,40,120,0.1)]">
                              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#f1f5f9] text-[#334155]">
                                <Icon />
                              </span>
                              <span className="text-sm font-medium text-[#1e293b]">{item}</span>
                            </div>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function IconWrap({ children }) {
  return (
    <span className="flex h-4 w-4 items-center justify-center" aria-hidden>
      {children}
    </span>
  )
}

function CodeBracketsIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M9 7L5 12l4 5M15 7l4 5-4 5" />
    </svg>
  )
}

function LayersIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 3l9 5-9 5-9-5 9-5z" />
      <path d="M3 12l9 5 9-5" />
      <path d="M3 16l9 5 9-5" />
    </svg>
  )
}

function RocketIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 19c-3.5-1-6-4.5-6-8.5C6 5.5 9 3 12 3s6 2.5 6 7.5c0 4-2.5 7.5-6 8.5z" />
      <path d="M10 21l1-3M14 21l-1-3" />
      <circle cx="12" cy="10" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  )
}

function HtmlIcon() {
  return (
    <IconWrap>
      <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
        <path d="M4 2l1.5 17L12 21l6.5-2L20 2H4zm12.2 5.5l-.2 2.2H9.2l.2 2.3h6.6l-.4 4.2L12 17.5l-3.6-1-.2-2.2h2.2l.1 1.1 1.5.4 1.5-.4.2-2H8.4L7.8 7.5h8.4z" />
      </svg>
    </IconWrap>
  )
}

function CssIcon() {
  return (
    <IconWrap>
      <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
        <path d="M4 2l1.5 17L12 21l6.5-2L20 2H4zm11.8 5.2H9.1l.2 2.2h6.5l-.5 5.5L12 16.5l-3.3-.9-.2-2.3h2.1l.1 1.1 1.3.3 1.3-.3.2-2.2H8.2L7.6 7.2h8.2z" />
      </svg>
    </IconWrap>
  )
}

function WpIcon() {
  return (
    <IconWrap>
      <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
        <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7.5 15.5L10 8h1.5l-2.5 7.5H7.5zm4 0L14 8h1.2l2.3 7.5h-1.6l-.5-1.8h-2.8l-.5 1.8H11.5zm1.2-3.2h2l-1-3.2-1 3.2z" />
      </svg>
    </IconWrap>
  )
}

function BagIcon() {
  return (
    <IconWrap>
      <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M7 8h10l-1 11H8L7 8z" />
        <path d="M9 8V6a3 3 0 016 0v2" />
      </svg>
    </IconWrap>
  )
}

function CodeIcon() {
  return (
    <IconWrap>
      <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M8 7L3 12l5 5M16 7l5 5-5 5M13 5l-2 14" />
      </svg>
    </IconWrap>
  )
}

function LaravelIcon() {
  return (
    <IconWrap>
      <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
        <path d="M3 7.2L7.2 4.8l4.2 2.4v4.8L7.2 14.4 3 12V7.2zm8.4 0l4.2-2.4L20 7.2v4.8l-4.4 2.4-4.2-2.4V7.2zM7.2 15.2l4.2 2.4v2.2L7.2 22 3 19.8v-2.2l4.2-2.4z" />
      </svg>
    </IconWrap>
  )
}

function DbIcon() {
  return (
    <IconWrap>
      <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.5">
        <ellipse cx="12" cy="6" rx="7" ry="3" />
        <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6" />
        <path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
      </svg>
    </IconWrap>
  )
}

function VueIcon() {
  return (
    <IconWrap>
      <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
        <path d="M2 4h4l6 10.5L18 4h4L12 21 2 4zm6.5 0L12 10l3.5-6h-2.3L12 7.2 10.8 4H8.5z" />
      </svg>
    </IconWrap>
  )
}

function PhpIcon() {
  return (
    <IconWrap>
      <span className="text-[8px] font-bold tracking-tight">PHP</span>
    </IconWrap>
  )
}

function ReactIcon() {
  return (
    <IconWrap>
      <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.2">
        <circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" />
        <ellipse cx="12" cy="12" rx="9" ry="3.5" />
        <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(120 12 12)" />
      </svg>
    </IconWrap>
  )
}

function CloudIcon() {
  return (
    <IconWrap>
      <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M7 18h10a4 4 0 001-.1 5 5 0 10-9.7-1.5A3.5 3.5 0 007 18z" />
      </svg>
    </IconWrap>
  )
}

function PyIcon() {
  return (
    <IconWrap>
      <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
        <path d="M12 3c-3.5 0-3.3.7-3.3 3.2v1.3h6.6V6.2C15.3 3.7 15.5 3 12 3zm-1.5 1.5a.7.7 0 110 1.4.7.7 0 010-1.4zM8.7 8.5v7.3c0 2.5.3 3.2 3.3 3.2s3.3-.7 3.3-3.2v-1.3H8.7V8.5h6.6zm4.8 9.5a.7.7 0 110 1.4.7.7 0 010-1.4z" />
      </svg>
    </IconWrap>
  )
}

function AngIcon() {
  return (
    <IconWrap>
      <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
        <path d="M12 2L3 6l1.5 13L12 22l7.5-3L21 6 12 2zm0 3.2l5.5 2.2-1 8.5L12 18.5 7.5 15.9l-1-8.5L12 5.2zm0 3.3L9.2 15h1.7l.5-1.3h1.2l.5 1.3H15L12 8.5zm0 2.2l.5 1.5h-1l.5-1.5z" />
      </svg>
    </IconWrap>
  )
}

function NodeIcon() {
  return (
    <IconWrap>
      <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
        <path d="M12 2L4 6.5v11L12 22l8-4.5v-11L12 2zm0 2.2l6 3.4v8.8l-6 3.4-6-3.4V7.6l6-3.4z" />
      </svg>
    </IconWrap>
  )
}
