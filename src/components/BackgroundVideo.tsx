import { useEffect, useRef } from 'react'

const VIDEO_SRC =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_115001_bcdaa3b4-03de-47e7-ad63-ae3e392c32d4.mp4'

/**
 * Full-screen looping background video — always visible.
 *
 * We rely on the browser's NATIVE `loop` (seamless, no flicker) and keep the
 * video at full opacity the whole time. `muted` + `playsInline` are what let
 * `autoPlay` work without a user gesture; we also call play() on mount and on
 * visibility change so it resumes if the tab was backgrounded.
 *
 * Per request: no vertical crop shift — object-cover fills the viewport and the
 * video is anchored normally (no translate-y).
 */
export default function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const tryPlay = () => {
      void video.play().catch(() => {}) // autoplay can reject; ignore safely
    }
    tryPlay()
    document.addEventListener('visibilitychange', tryPlay)
    return () => document.removeEventListener('visibilitychange', tryPlay)
  }, [])

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-black pointer-events-none">
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        src={VIDEO_SRC}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />
      {/* Gentle wash so hero text stays legible without hiding the footage. */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />
    </div>
  )
}
