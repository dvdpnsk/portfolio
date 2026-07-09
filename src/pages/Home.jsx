import { useState } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Footer from '../components/Footer'

function Home() {
  const [lang, setLang] = useState('de')

  return (
    <div style={{ minHeight: '100vh' }}>
      <Navbar lang={lang} setLang={setLang} />
      <Hero lang={lang} />
      <Projects lang={lang} />
      <Footer lang={lang} />
    </div>
  )
}

export default Home