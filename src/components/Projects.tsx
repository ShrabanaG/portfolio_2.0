import { ArrowUpRight } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { projects } from '../data/portfolio'

/** Work: a responsive grid of project cards, each linking out. */
export default function Projects() {
  return (
    <section id="work" className="mx-auto max-w-5xl px-6 py-24 sm:py-28">
      <SectionHeading label="Work" title="Things I’ve built" />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="liquid-glass group flex flex-col rounded-3xl p-7 transition-colors hover:bg-white/5"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              <ArrowUpRight
                size={20}
                className="shrink-0 text-white/40 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
              />
            </div>

            <p className="mt-3 flex-1 text-sm leading-relaxed text-white/70">{project.blurb}</p>

            <div className="mt-5 flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-medium text-emerald-300">
                {project.metric}
              </span>
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60"
                >
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
