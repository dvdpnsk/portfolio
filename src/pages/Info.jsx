import { useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Info() {
  const [lang, setLang] = useState('de')

  const t = {
    de: {
      about: 'Über mich',
      p1: 'Ich bin Serkan David Pinske — Freelancer aus Deutschland mit Fokus auf moderne Webentwicklung, IT-Sicherheit und KI-Lösungen.',
      p2: 'Mit meinem IHK-Abschluss als IT-Sicherheitsmanager helfe ich kleinen und mittleren Unternehmen dabei, ihre digitale Präsenz zu modernisieren und sicher zu halten.',
      p3: 'Ich arbeite direkt mit meinen Kunden zusammen — kein Agentur-Overhead, keine langen Wartezeiten.',
      services: 'Leistungen',
      skills: 'Skills',
    },
    en: {
      about: 'About',
      p1: 'I am Serkan David Pinske — freelancer from Germany focused on modern web development, IT security and AI solutions.',
      p2: 'With my IHK certification as IT Security Manager, I help small and medium businesses modernize their digital presence and keep it secure.',
      p3: 'I work directly with my clients — no agency overhead, no long waiting times.',
      services: 'Services',
      skills: 'Skills',
    },
  }

  const skills = ['React', 'Tailwind CSS', 'Node.js', 'IT-Sicherheit', 'DSGVO', 'KI-Agenten', 'Pentesting', 'Web-Apps']
  const services = [
    { de: 'Webentwicklung', en: 'Web Development' },
    { de: 'IT-Sicherheit & DSGVO', en: 'IT Security & GDPR' },
    { de: 'KI-Agenten & Automatisierung', en: 'AI Agents & Automation' },
  ]

  return (
    <div style={{ minHeight: '100vh' }}>
      <Navbar lang={lang} setLang={setLang} />

      <div className="max-w-6xl mx-auto px-8 pt-40 pb-32">

        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
        >
          <p className="text-xs tracking-widest uppercase mb-8" style={{ color: '#555558' }}>{t[lang].about}</p>
          <p className="text-white text-3xl font-medium leading-relaxed max-w-3xl mb-6">{t[lang].p1}</p>
          <p className="text-lg leading-relaxed max-w-2xl mb-4" style={{ color: '#555558' }}>{t[lang].p2}</p>
          <p className="text-lg leading-relaxed max-w-2xl" style={{ color: '#555558' }}>{t[lang].p3}</p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-16"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div>
            <p className="text-xs tracking-widest uppercase mb-8" style={{ color: '#555558' }}>{t[lang].skills}</p>
            {skills.map((skill, i) => (
              <motion.div
                key={skill}
                className="flex justify-between items-center py-4 border-b"
                style={{ borderColor: '#1a1a1c' }}
                initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: 0.2 + i * 0.05 }}
              >
                <span className="text-white text-sm">{skill}</span>
              </motion.div>
            ))}
          </div>

          <div>
            <p className="text-xs tracking-widest uppercase mb-8" style={{ color: '#555558' }}>{t[lang].services}</p>
            {services.map((service, i) => (
              <motion.div
                key={service.de}
                className="flex justify-between items-center py-4 border-b"
                style={{ borderColor: '#1a1a1c' }}
                initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: 0.2 + i * 0.05 }}
              >
                <span className="text-white text-sm">{service[lang]}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
            <Footer lang={lang} />
    </div>
  )
}

export default Info