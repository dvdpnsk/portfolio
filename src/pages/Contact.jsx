import { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Contact() {
  const [lang, setLang] = useState('de')

  const t = {
    de: {
      title: 'Kontakt',
      sub: 'Sie haben eine Idee oder brauchen Unterstützung? Schreiben Sie mir — ich melde mich innerhalb von 24 Stunden.',
      name: 'Name',
      email: 'E-Mail',
      message: 'Ihre Nachricht',
      send: 'Nachricht senden',
      or: 'Oder direkt per E-Mail',
    },
    en: {
      title: 'Contact',
      sub: 'Have an idea or need support? Write to me — I will get back to you within 24 hours.',
      name: 'Name',
      email: 'Email',
      message: 'Your message',
      send: 'Send Message',
      or: 'Or directly via email',
    },
  }

  return (
    <div style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #111113 50%, #0d0d0f 100%)', minHeight: '100vh' }}>
      <Navbar lang={lang} setLang={setLang} />

      <div className="max-w-6xl mx-auto px-4 md:px-8 pt-40 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
        >
          <p className="text-xs tracking-widest uppercase mb-6" style={{ color: '#555558' }}>{t[lang].title}</p>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-6 max-w-2xl leading-tight">{t[lang].sub}</h1>
          <p className="text-xs tracking-widest uppercase mb-3" style={{ color: '#555558' }}>{t[lang].or}</p>
          <a href="mailto:kontakt@serkan-pinske.de" className="text-white text-sm hover:opacity-50 transition-opacity underline underline-offset-4">
            kontakt@serkan-pinske.de
          </a>
        </motion.div>

        <motion.form
          className="mt-16 flex flex-col gap-6 max-w-2xl"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder={t[lang].name}
              className="border-b py-3 text-white text-sm placeholder-zinc-700 focus:outline-none bg-transparent"
              style={{ borderColor: '#222224' }}
            />
            <input
              type="email"
              placeholder={t[lang].email}
              className="border-b py-3 text-white text-sm placeholder-zinc-700 focus:outline-none bg-transparent"
              style={{ borderColor: '#222224' }}
            />
          </div>
          <textarea
            placeholder={t[lang].message}
            rows={6}
            className="border-b py-3 text-white text-sm placeholder-zinc-700 focus:outline-none bg-transparent resize-none"
            style={{ borderColor: '#222224' }}
          />
          <button
            type="submit"
            className="mt-2 px-8 py-4 text-black text-sm font-medium rounded-xl self-start"
            style={{ background: '#ffffff' }}
          >
            {t[lang].send}
          </button>
        </motion.form>
      </div>
      <Footer lang={lang} />
    </div>
  )
}

export default Contact
