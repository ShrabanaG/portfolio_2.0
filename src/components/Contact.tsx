import { Github, Linkedin, Mail, FileText } from 'lucide-react'
import { profile } from '../data/portfolio'

const SERIF = { fontFamily: "'Instrument Serif', serif" }

/** Contact: a closing CTA with the key ways to reach Shrabana. */
export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-3xl px-6 py-24 text-center sm:py-32">
      <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-white/50">Contact</p>
      <h2 style={SERIF} className="text-4xl tracking-tight text-white sm:text-6xl">
        Let’s build something <span style={{ fontStyle: 'italic' }}>together</span>.
      </h2>
      <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-white/70 sm:text-base">
        I’m open to frontend roles and collaborations. The fastest way to reach me is email — I
        usually reply within a day.
      </p>

      <a
        href={`mailto:${profile.email}`}
        className="liquid-glass mt-8 inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-medium text-white transition-colors hover:bg-white/5"
      >
        <Mail size={18} />
        {profile.email}
      </a>

      <div className="mt-8 flex justify-center gap-4">
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
          href={profile.resumeUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Download résumé"
          className="liquid-glass rounded-full p-4 text-white/80 transition-all hover:bg-white/5 hover:text-white"
        >
          <FileText size={20} />
        </a>
      </div>

      <p className="mt-16 text-xs text-white/40">
        © {new Date().getFullYear()} {profile.name} · {profile.location}
      </p>
    </section>
  )
}
