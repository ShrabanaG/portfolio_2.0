import { useState } from 'react'
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
  const [email, setEmail] = useState('')

  // The email bar is repurposed as a quick "get in touch" — submitting opens
  // the visitor's mail client pre-addressed to Shrabana.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent('Let’s work together')
    const body = encodeURIComponent(`Hi Shrabana,\n\n(Reply-to: ${email})\n`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

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

        {/* Primary CTA: email bar */}
        <form
          onSubmit={handleSubmit}
          className="liquid-glass flex w-full max-w-md items-center gap-3 rounded-full py-2 pl-6 pr-2"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            aria-label="Your email address"
            className="w-full bg-transparent text-base text-white placeholder:text-white/40 focus:outline-none"
          />
          <button
            type="submit"
            aria-label="Get in touch"
            className="flex shrink-0 items-center justify-center rounded-full bg-white p-3 text-black transition-transform hover:scale-105"
          >
            <ArrowRight size={20} />
          </button>
        </form>

        {/* Secondary CTA */}
        <a
          href="#work"
          className="mt-5 text-sm font-medium text-white/70 underline-offset-4 transition-colors hover:text-white hover:underline"
        >
          or view my work ↓
        </a>
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
