import { useState } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Footer from '../components/Footer'
import LightRays from '../components/LightRays'

function Home() {
  const [lang, setLang] = useState('de')

  return (
    <div style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #111113 50%, #0d0d0f 100%)', minHeight: '100vh', position: 'relative' }}>
      {/* Seitenweiter Lichtstrahl-Hintergrund (fix, hinter allem) */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
        <LightRays
          raysOrigin="top-center"
          raysColor="#93d3dd"
          raysSpeed={0.6}
          lightSpread={0.5}
          rayLength={3}
          fadeDistance={1}
          saturation={1}
          followMouse
          mouseInfluence={0.4}
          noiseAmount={0}
          distortion={0}
        />
      </div>

      <div className="relative" style={{ zIndex: 1 }}>
        <Navbar lang={lang} setLang={setLang} />
        <Hero lang={lang} />
        <Projects lang={lang} />
        <Footer lang={lang} />
      </div>
    </div>
  )
}

export default Home