import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../data/portfolio'

const SERIF = { fontFamily: "'Instrument Serif', serif" }

/**
 * Renders the tagline, italicising the word wrapped in *asterisks*.
 * e.g. "Interfaces that *perform*." → "Interfaces that <i>perform</i>."
 */
function Tagline() {
  const parts = profile.tagline.split('*')
  return (
    <>
      {parts.map((part, i) =>
        // Odd indices are the bits that were between asterisks → italic serif.
        i % 2 === 1 ? (
          <span key={i} style={{ fontStyle: 'italic' }}>
            {part}
          </span>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  )
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 pt-32 pb-36 text-center"
    >
      <div className="flex w-full max-w-3xl flex-col items-center">
        {/* Availability + identity eyebrow (also nods to the job search) */}
        <div className="liquid-glass mb-7 flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-white/80">
          {profile.available && (
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
          )}
          {profile.role} · {profile.location} · Open to work
        </div>

        {/* Headline */}
        <h1
          style={SERIF}
          className="mb-6 text-5xl tracking-tight text-white sm:text-6xl lg:text-7xl lg:whitespace-nowrap"
        >
          <Tagline />
        </h1>

        {/* One short supporting line — the full pitch lives in About. */}
        <p className="mb-9 max-w-md text-base leading-relaxed text-white/70">
          Frontend engineer crafting fast, accessible interfaces in React, Next.js &amp; TypeScript.
        </p>

        {/* Portfolio CTAs: primary = see the work, secondary = reach out.
            These are the visitor's next steps to give (a recruiter's job), not
            an email-capture form. */}
        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#work"
            className="group flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-black transition-transform hover:scale-[1.03]"
          >
            View my work
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </a>
          <a
            href="#contact"
            className="liquid-glass rounded-full px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-white/5"
          >
            Get in touch
          </a>
        </div>
      </div>

      {/* Social footer pinned to the bottom of the hero */}
      <div className="absolute inset-x-0 bottom-10 z-10 flex justify-center gap-4">
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="liquid-glass rounded-full p-4 text-white/80 transition-all hover:bg-white/5 hover:text-white"
        >
          <Github size={20} />
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="liquid-glass rounded-full p-4 text-white/80 transition-all hover:bg-white/5 hover:text-white"
        >
          <Linkedin size={20} />
        </a>
        <a
          href={`mailto:${profile.email}`}
          aria-label="Email"
          className="liquid-glass rounded-full p-4 text-white/80 transition-all hover:bg-white/5 hover:text-white"
        >
          <Mail size={20} />
        </a>
      </div>
    </section>
  )
}
