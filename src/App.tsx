import CustomCursor from './components/CustomCursor'
import BackgroundVideo from './components/BackgroundVideo'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'

/**
 * Layering, bottom → top:
 *   z-0   BackgroundVideo  — fixed full-screen video (shows through the hero)
 *   z-10  Hero             — transparent, sits over the video
 *   z-10  content          — opaque black; scrolls up over the video
 *   z-40  Navbar           — fixed on top of everything
 *   10000 CustomCursor     — above all UI
 */
export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-black">
      <CustomCursor />
      <BackgroundVideo />

      <div className="relative z-10">
        <Navbar />
        <Hero />

        {/* The fixed background video stays visible through every section.
            A light bg-black/30 scrim tints the whole content area just enough
            to keep text legible over the moving video (video still ~70% visible). */}
        <main className="relative z-10 bg-black/30">
          <About />
          <Experience />
          <Projects />
          <Contact />
        </main>
      </div>
    </div>
  )
}
