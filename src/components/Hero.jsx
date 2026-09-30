import TrustedBy from './TrustedBy'
import TypeHeadline from './TypeHeadline'

export default function Hero() {
  return (
    <section id="home" data-nav-theme="dark" className="hero-v1 relative flex min-h-dvh flex-col overflow-hidden bg-black">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="hero-v1-stars absolute inset-0" />
        <div className="hero-v1-planet-wrap">
          <div className="hero-v1-planet">
            <div className="hero-v1-planet-spin">
              <img
                src="/hero-planet.jpg"
                alt=""
                className="hero-v1-planet-img"
                draggable={false}
              />
            </div>
            <div className="hero-v1-planet-rim" />
            <div className="hero-v1-planet-glow" />
            <div className="hero-v1-planet-fade" />
          </div>
        </div>
      </div>

      <div className="hero-v1-main-wrap relative z-10 mx-auto flex w-full max-w-4xl flex-1 flex-col items-center px-5 pb-16 text-center sm:px-6 md:pb-20">
        <div className="hero-v1-content flex w-full flex-col items-center">
          <div className="hero-v1-text-veil" aria-hidden />
          <div className="hero-stagger hero-badge-wrap">
            <div className="hero-badge">
              <span className="hero-badge-dot" aria-hidden />
              <span className="hero-badge-text">Introducing AI product engineering</span>
            </div>
          </div>

          <TypeHeadline
            as="h1"
            startOnMount
            startDelay={700}
            charMs={70}
            className="hero-stagger mt-7 max-w-4xl text-center text-[clamp(2.6rem,7vw,4.75rem)] font-semibold leading-[1.02] tracking-[-0.045em] text-white"
            cursorClassName="bg-teal-brand"
            segments={[{ text: 'Turn your big idea into a stunning product' }]}
          />

          <p className="hero-stagger mx-auto mt-6 max-w-2xl text-base leading-relaxed text-neutral-400 sm:text-lg">
            Techzify designs and ships intelligent products — from custom AI agents and automation to LLM-powered platforms that help teams move faster.
          </p>

          <div className="hero-stagger mt-9 flex flex-wrap items-center justify-center gap-3">
            <a href="#contact" className="hero-btn hero-btn--primary">
              <span className="hero-btn-arrow" aria-hidden>
                <span className="hero-btn-arrow-track">
                  <ArrowIcon />
                  <ArrowIcon />
                </span>
              </span>
              <span className="hero-btn-label">
                <span className="hero-btn-label-track">
                  <span>Get Started Now</span>
                  <span>Get Started Now</span>
                </span>
              </span>
            </a>

            <a href="#work" className="hero-btn hero-btn--secondary">
              <span className="hero-btn-label">
                <span className="hero-btn-label-track">
                  <span>See our work</span>
                  <span>See our work</span>
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-auto w-full">
        <p className="mb-4 text-center text-xs tracking-[0.18em] text-neutral-500 uppercase">
          Partnering with modern product teams
        </p>
        <TrustedBy />
      </div>
    </section>
  )
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" aria-hidden>
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
