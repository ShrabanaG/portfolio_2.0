import SectionHeading from './SectionHeading'
import { experience } from '../data/portfolio'

/** Experience: a vertical timeline of glass cards, newest first. */
export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-4xl px-6 py-24 sm:py-28">
      <SectionHeading label="Experience" title="Where I’ve worked" />

      <div className="space-y-4">
        {experience.map((job) => (
          <div key={job.company} className="liquid-glass rounded-3xl p-6 sm:p-8">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="flex items-center gap-2 text-lg font-semibold text-white">
                {job.company}
                {job.current && (
                  <span className="rounded-full bg-emerald-400/15 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-emerald-300">
                    Now
                  </span>
                )}
              </h3>
              <span className="text-xs text-white/50">{job.period}</span>
            </div>
            <p className="mt-1 text-sm text-white/70">{job.role}</p>

            <ul className="mt-4 space-y-2">
              {job.points.map((point) => (
                <li key={point} className="flex gap-3 text-sm leading-relaxed text-white/70">
                  <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-white/40" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
