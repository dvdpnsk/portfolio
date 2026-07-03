import { useState } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Footer from '../components/Footer'

function Home() {
  const [lang, setLang] = useState('de')

  return (
    <div style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #111113 50%, #0d0d0f 100%)', minHeight: '100vh' }}>
      <Navbar lang={lang} setLang={setLang} />
      <Hero lang={lang} />
      <Projects lang={lang} />
      <Footer lang={lang} />
    </div>
  )
}

export default Home