import CustomCursor from './components/CustomCursor'
import BackgroundVideo from './components/BackgroundVideo'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import ChatBot from './components/ChatBot'


export default function App() {
  return (
    <>
    <div className="relative min-h-screen overflow-x-hidden bg-black">
      <CustomCursor />
      <BackgroundVideo />

      <div className="relative z-10">
        <Navbar />
        <Hero />

        
        <main className="relative z-10 bg-black/30">
          <About />
          <Experience />
          <Projects />
          <Contact />
        </main>
      </div>
    </div>
    <ChatBot />
    </>
  )
}
