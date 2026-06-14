import SectionHeading from './SectionHeading'
import { profile, stats, skillGroups } from '../data/portfolio'

/** About: a short narrative, headline stats, and the grouped skill stack. */
export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-24 sm:py-28">
      <SectionHeading label="About" title="Who I am" />

      <p className="mx-auto max-w-2xl text-center text-base leading-relaxed text-white/75 sm:text-lg">
        {profile.pitch} I care about the details users feel — fast loads, smooth interactions and
        interfaces everyone can use — and I mentor by example through clean, reviewable code.
      </p>

      {/* Stat strip */}
      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="liquid-glass rounded-2xl px-4 py-6 text-center"
          >
            <div className="text-3xl font-semibold text-white sm:text-4xl">{s.value}</div>
            <div className="mt-2 text-xs leading-snug text-white/60">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Skill groups */}
      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group) => (
          <div key={group.title} className="liquid-glass rounded-2xl p-5">
            <h3 className="mb-3 text-sm font-semibold text-white">{group.title}</h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
