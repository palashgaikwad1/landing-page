import { projects } from '../data/content'
import Reveal from './Reveal'
import TypeHeadline from './TypeHeadline'

const folderThemes = [
  {
    bg: '#00d4d2',
    fg: '#032d88',
    muted: 'rgba(3, 45, 136, 0.7)',
    tagBg: '#032d88',
    tagFg: '#ffffff',
    tagBorder: 'transparent',
    frame: 'rgba(3, 45, 136, 0.35)',
    mark: '#032d88',
  },
  {
    bg: '#0a0a0a',
    fg: '#ffffff',
    muted: 'rgba(255, 255, 255, 0.68)',
    tagBg: '#ffffff',
    tagFg: '#0a0a0a',
    tagBorder: 'transparent',
    frame: 'rgba(255, 255, 255, 0.35)',
    mark: '#ffffff',
  },
  {
    bg: '#054eee',
    fg: '#ffffff',
    muted: 'rgba(255, 255, 255, 0.72)',
    tagBg: '#ffffff',
    tagFg: '#054eee',
    tagBorder: 'transparent',
    frame: 'rgba(255, 255, 255, 0.35)',
    mark: '#ffffff',
  },
]

function ProjectPreview({ project }) {
  if (project.preview === 'finflow') {
    return (
      <div className={`work-preview absolute inset-0 bg-gradient-to-br ${project.color}`} aria-hidden>
        <div className="work-preview-media absolute inset-0">
          <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_20%_20%,rgba(255,255,255,.35),transparent_42%),linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)] [background-size:auto,28px_28px,28px_28px]" />
          <div className="absolute -right-10 top-8 h-40 w-40 rounded-full bg-teal-brand/25 blur-3xl" />
          <div className="absolute bottom-6 left-8 h-28 w-28 rounded-full bg-white/10 blur-2xl" />

          <div className="work-preview-panel absolute left-[8%] top-[12%] w-[56%] max-w-[22rem] rounded-2xl border border-white/15 bg-black/45 p-3.5 shadow-[0_30px_80px_rgba(0,0,0,.45)] backdrop-blur-md sm:left-[9%] sm:p-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
              <div>
                <p className="text-[10px] uppercase tracking-[0.18em] text-white/45">Cash position</p>
                <p className="mt-1 text-base font-semibold text-white sm:text-lg">$4.82M</p>
              </div>
              <span className="rounded-full bg-teal-brand/20 px-2.5 py-1 text-[10px] font-medium text-teal-brand">Live</span>
            </div>
            <div className="mt-3 grid grid-cols-3 gap-2">
              {['Inflows', 'Outflows', 'Runway'].map((label) => (
                <div key={label} className="rounded-xl bg-white/8 p-2.5">
                  <p className="text-[9px] uppercase tracking-wider text-white/40">{label}</p>
                  <div className="mt-2.5 flex h-8 items-end gap-1">
                    {[40, 65, 48, 82, 70].map((h) => (
                      <span
                        key={`${label}-${h}`}
                        className="flex-1 rounded-t bg-gradient-to-t from-techzify-500/40 to-teal-brand"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="work-preview-float absolute bottom-[14%] right-[7%] w-[34%] max-w-[12rem] rounded-2xl border border-white/15 bg-white/10 p-3.5 shadow-2xl backdrop-blur-md">
            <p className="text-[10px] uppercase tracking-[0.16em] text-white/50">{project.metricLabel}</p>
            <p className="mt-1.5 text-2xl font-semibold tracking-tight text-white sm:text-3xl">{project.metric}</p>
            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-[78%] rounded-full bg-teal-brand" />
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (project.preview === 'edunest') {
    return (
      <div className={`work-preview absolute inset-0 bg-gradient-to-br ${project.color}`} aria-hidden>
        <div className="work-preview-media absolute inset-0">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(255,255,255,.22),transparent_40%)]" />
          <div className="work-preview-panel absolute left-[9%] top-[14%] right-[9%] rounded-[1.25rem] border border-white/15 bg-black/35 p-3.5 shadow-2xl backdrop-blur-md sm:p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[10px] uppercase tracking-[0.18em] text-white/50">Course path</p>
                <p className="mt-1 text-sm font-semibold text-white sm:text-base">Product Design Studio</p>
              </div>
              <span className="rounded-full border border-white/20 px-2.5 py-1 text-[10px] text-white/80">Week 6</span>
            </div>

            <div className="mt-4 space-y-2">
              {[
                { label: 'Foundations', progress: '100%' },
                { label: 'Systems thinking', progress: '72%' },
                { label: 'Prototype lab', progress: '38%' },
              ].map((row) => (
                <div key={row.label} className="rounded-xl bg-white/8 px-3 py-2">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-xs text-white/80">{row.label}</p>
                    <p className="text-[10px] text-teal-brand">{row.progress}</p>
                  </div>
                  <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full rounded-full bg-teal-brand" style={{ width: row.progress }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`work-preview absolute inset-0 bg-gradient-to-br ${project.color}`} aria-hidden>
      <div className="work-preview-media absolute inset-0">
        <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(115deg,transparent_0%,rgba(255,255,255,.08)_45%,transparent_70%)]" />
        <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/20" />

        <div className="work-preview-panel absolute left-[8%] top-[14%] w-[52%] rounded-2xl border border-white/15 bg-black/45 p-3.5 shadow-2xl backdrop-blur-md sm:p-4">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#a78bfa]" />
            <p className="text-[10px] uppercase tracking-[0.18em] text-white/50">Automation graph</p>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2.5">
            {['Intake', 'Route', 'Resolve', 'Report'].map((node, i) => (
              <div key={node} className="rounded-xl border border-white/10 bg-white/5 px-3 py-2.5">
                <p className="text-[10px] text-white/40">0{i + 1}</p>
                <p className="mt-1 text-sm font-medium text-white">{node}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="work-preview-float absolute bottom-[14%] right-[7%] w-[34%] max-w-[11rem] rounded-2xl border border-white/15 bg-[#1a1338]/90 p-3.5 shadow-2xl backdrop-blur-md">
          <p className="text-[10px] uppercase tracking-[0.16em] text-white/45">{project.metricLabel}</p>
          <p className="mt-1.5 text-2xl font-semibold text-white sm:text-3xl">{project.metric}</p>
        </div>
      </div>
    </div>
  )
}

function FolderMarks() {
  return (
    <>
      <span className="folder-mark folder-mark-tl" aria-hidden />
      <span className="folder-mark folder-mark-tr" aria-hidden />
      <span className="folder-mark folder-mark-bl" aria-hidden />
      <span className="folder-mark folder-mark-br" aria-hidden />
    </>
  )
}

function FolderTabIcon() {
  return (
    <span className="folder-tab-icon" aria-hidden>
      <svg viewBox="0 0 12 10" fill="currentColor">
        <rect x="0" y="6" width="2.5" height="4" rx="0.4" />
        <rect x="4.5" y="3" width="2.5" height="7" rx="0.4" />
        <rect x="9" y="0" width="2.5" height="10" rx="0.4" />
      </svg>
    </span>
  )
}

function FolderCard({ project, index }) {
  const theme = folderThemes[index % folderThemes.length]
  const number = String(index + 1).padStart(2, '0')
  const tags = project.tags.slice(0, 2)

  return (
    <article
      className="folder-card"
      style={{
        '--i': String(index),
        '--folder-bg': theme.bg,
        '--folder-fg': theme.fg,
        '--folder-muted': theme.muted,
        '--folder-tag-bg': theme.tagBg,
        '--folder-tag-fg': theme.tagFg,
        '--folder-tag-border': theme.tagBorder,
        '--folder-frame': theme.frame,
        '--folder-mark': theme.mark,
        zIndex: index + 1,
      }}
      aria-labelledby={`work-project-${number}`}
    >
      <div className="folder-shape">
        <p className="folder-tab-label">
          <FolderTabIcon />
          Project {number}
        </p>

        <div className="folder-inner">
          <div className="folder-copy">
            <p className="folder-meta">
              <span className="folder-meta-dot" aria-hidden />
              <span>{project.date}</span>
            </p>

            <h3 id={`work-project-${number}`} className="folder-title">
              {project.title}
            </h3>

            <p className="folder-blurb">{project.blurb || project.description}</p>

            <a href={project.href || '#contact'} className="folder-link">
              View project <span aria-hidden>↗</span>
            </a>

            <ul className="folder-tags">
              {tags.map((tag) => (
                <li key={tag} className="folder-tag">
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          <div className="folder-frame">
            <FolderMarks />
            <div className="folder-frame-clip">
              <div className="folder-preview-media">
                <ProjectPreview project={project} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default function FeaturedWork() {
  return (
    <section
      id="work"
      data-nav-theme="light"
      className="folder-stack"
      style={{ '--folder-count': String(projects.length) }}
      aria-labelledby="work-heading"
    >
      <div className="folder-stack-header">
        <Reveal>
          <p className="font-mono text-[0.7rem] font-medium uppercase tracking-[0.22em] text-techzify-600">
            ( Work )
          </p>
        </Reveal>
        <TypeHeadline
          id="work-heading"
          as="h2"
          cursorClassName="bg-techzify-600"
          className="mt-4 max-w-3xl text-[clamp(2rem,4.4vw,3.75rem)] font-semibold leading-[0.98] tracking-[-0.05em] text-black"
          segments={[{ text: 'Same workflow. Three surfaces.' }]}
        />
      </div>

      <div className="folder-stack-inner">
        {projects.map((project, index) => (
          <FolderCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}
