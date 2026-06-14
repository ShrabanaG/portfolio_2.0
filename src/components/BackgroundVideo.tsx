import { useEffect, useRef } from 'react'

const VIDEO_SRC =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_115001_bcdaa3b4-03de-47e7-ad63-ae3e392c32d4.mp4'

/**
 * Lightweight inline gradient used as the video poster. It gives an instant,
 * intentional first paint (good for LCP) and is the visible fallback whenever
 * we deliberately DON'T play the video (reduced-motion / data-saver users).
 * It's a ~0.3KB data URI — no network request.
 */
const POSTER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1280' height='720'%3E%3Cdefs%3E%3CradialGradient id='g' cx='50%25' cy='62%25' r='75%25'%3E%3Cstop offset='0%25' stop-color='%231b2433'/%3E%3Cstop offset='55%25' stop-color='%230a0d12'/%3E%3Cstop offset='100%25' stop-color='%23000000'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23g)'/%3E%3C/svg%3E"

/**
 * Full-screen looping background video — always visible, but kept as light as
 * possible so it doesn't undercut a performance-focused portfolio:
 *   • a gradient poster paints immediately (LCP) before any video data loads
 *   • preload="metadata" avoids eagerly downloading the whole clip
 *   • we only decode while the hero is on screen (IntersectionObserver),
 *     pausing once it scrolls away — saves CPU/battery/data
 *   • reduced-motion and data-saver users get the poster only, no video
 *
 * No vertical crop shift — object-cover fills the viewport, anchored normally.
 */
export default function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Respect data-saver and reduced-motion: keep the poster, skip playback.
    const saveData = (navigator as { connection?: { saveData?: boolean } }).connection?.saveData
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (saveData || reduceMotion) {
      video.removeAttribute('autoplay')
      video.pause()
      return
    }

    const tryPlay = () => void video.play().catch(() => {})

    // Only run the decoder while the hero (normal-flow element) is visible.
    const hero = document.getElementById('top')
    let observer: IntersectionObserver | undefined
    if (hero && 'IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) tryPlay()
          else video.pause()
        },
        { threshold: 0.05 },
      )
      observer.observe(hero)
    } else {
      tryPlay()
    }

    // Resume when the tab regains focus, but only if the hero is still in view.
    const onVisibility = () => {
      if (document.hidden || !hero) return
      const r = hero.getBoundingClientRect()
      if (r.bottom > 0 && r.top < window.innerHeight) tryPlay()
    }
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      observer?.disconnect()
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-black pointer-events-none">
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        src={VIDEO_SRC}
        poster={POSTER}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
      {/* Gentle wash so hero text stays legible without hiding the footage. */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />
    </div>
  )
}
