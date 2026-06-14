import { useEffect, useRef } from 'react'

/**
 * Custom cursor that matches the dark/glass theme:
 *   • a small solid dot that tracks the pointer exactly (1:1, no lag)
 *   • a larger glass ring that *trails* the dot via linear interpolation (lerp)
 *
 * The ring grows + brightens over interactive elements. Everything is driven by
 * direct `transform` writes inside a requestAnimationFrame loop (not React
 * state) so the cursor never re-renders the component — it stays buttery smooth.
 *
 * It only activates on devices with a fine pointer (a real mouse); on touch the
 * elements stay hidden via CSS and we never attach listeners.
 */
export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  // Latest pointer position, and the ring's eased position chasing it.
  const mouse = useRef({ x: -100, y: -100 })
  const ring = useRef({ x: -100, y: -100 })
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    // Bail out entirely on touch / coarse-pointer devices.
    if (!window.matchMedia('(pointer: fine)').matches) return

    document.body.classList.add('has-custom-cursor')

    const onMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
      // The dot follows instantly.
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
      }
    }

    // Toggle the "active" look when the pointer is over something clickable.
    const onOver = (e: MouseEvent) => {
      const interactive = (e.target as HTMLElement).closest(
        'a, button, input, [role="button"], [data-cursor]',
      )
      ringRef.current?.classList.toggle('cursor-ring--active', Boolean(interactive))
    }

    const loop = () => {
      // Ease the ring 18% of the way to the mouse each frame → trailing feel.
      ring.current.x += (mouse.current.x - ring.current.x) * 0.18
      ring.current.y += (mouse.current.y - ring.current.y) * 0.18
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px)`
      }
      rafRef.current = requestAnimationFrame(loop)
    }
    rafRef.current = requestAnimationFrame(loop)

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', onOver)

    return () => {
      document.body.classList.remove('has-custom-cursor')
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
    }
  }, [])

  return (
    <>
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
    </>
  )
}
