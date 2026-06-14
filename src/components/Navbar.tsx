import { useState } from 'react'
import { Globe, Menu, X } from 'lucide-react'
import { profile } from '../data/portfolio'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
]

/**
 * Fixed top navigation. On desktop the links sit inline; on mobile they
 * collapse into a glass dropdown toggled by a hamburger button.
 */
export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-40 px-4 py-4 sm:px-6 sm:py-6">
      <nav className="liquid-glass mx-auto flex max-w-5xl items-center justify-between rounded-full px-4 py-3 sm:px-6">
        {/* Left: logo + (desktop) section links */}
        <div className="flex items-center gap-6 sm:gap-8">
          <a href="#top" className="flex items-center gap-2 text-white">
            <Globe size={22} strokeWidth={1.75} />
            <span className="text-base font-semibold sm:text-lg">{profile.name.split(' ')[0]}</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/80 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Right: resume + contact (desktop) and hamburger (mobile) */}
        <div className="flex items-center gap-3 sm:gap-4">
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden text-sm font-medium text-white transition-opacity hover:opacity-80 sm:inline"
          >
            Résumé
          </a>
          <a
            href="#contact"
            className="liquid-glass rounded-full px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-white/5 sm:px-6"
          >
            Contact
          </a>
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="text-white md:hidden"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div className="liquid-glass mx-auto mt-2 max-w-5xl rounded-3xl p-4 md:hidden">
          <div className="flex flex-col">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-white/80 transition-colors hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-sm font-medium text-white/80 transition-colors hover:bg-white/5 hover:text-white"
            >
              Résumé
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
