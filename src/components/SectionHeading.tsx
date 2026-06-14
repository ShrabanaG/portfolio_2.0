const SERIF = { fontFamily: "'Instrument Serif', serif" }

/** Shared cinematic section heading: a small label + a big serif title. */
export default function SectionHeading({
  label,
  title,
}: {
  label: string
  title: string
}) {
  return (
    <div className="mb-12 text-center">
      <p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] text-white/50">{label}</p>
      <h2 style={SERIF} className="text-4xl tracking-tight text-white sm:text-5xl">
        {title}
      </h2>
    </div>
  )
}
