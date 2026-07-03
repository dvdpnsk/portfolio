import { motion } from 'framer-motion'

function Contact({ lang }) {
  const t = {
    de: {
      title: 'Projekt starten',
      sub: 'Sie haben eine Idee? Schreiben Sie mir — ich melde mich innerhalb von 24 Stunden.',
      name: 'Name',
      message: 'Ihre Nachricht',
      send: 'Nachricht senden',
      or: 'Oder direkt per E-Mail',
    },
    en: {
      title: 'Start a Project',
      sub: 'Have an idea? Write to me — I will get back to you within 24 hours.',
      name: 'Name',
      message: 'Your message',
      send: 'Send Message',
      or: 'Or directly via email',
    },
  }

  return (
    <section id="contact" className="px-8 py-24 max-w-6xl mx-auto border-t" style={{ borderColor: '#1a1a1c' }}>
      <div className="grid md:grid-cols-2 gap-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
        >
          <p className="text-xs tracking-widest uppercase mb-6" style={{ color: '#555558' }}>{t[lang].title}</p>
          <p className="text-white text-2xl font-medium leading-relaxed mb-8">{t[lang].sub}</p>
          <p className="text-xs tracking-widest uppercase mb-3" style={{ color: '#555558' }}>{t[lang].or}</p>
          <a href="mailto:kontakt@serkan-pinske.de" className="text-white text-sm hover:opacity-50 transition-opacity underline underline-offset-4">
            kontakt@serkan-pinske.de
          </a>
        </motion.div>

        <motion.form
          className="flex flex-col gap-6"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
        >
          <input
            type="text"
            placeholder={t[lang].name}
            className="border-b py-3 text-white text-sm placeholder-zinc-700 focus:outline-none transition-colors bg-transparent"
            style={{ borderColor: '#222224' }}
          />
          <input
            type="email"
            placeholder="E-Mail"
            className="border-b py-3 text-white text-sm placeholder-zinc-700 focus:outline-none transition-colors bg-transparent"
            style={{ borderColor: '#222224' }}
          />
          <textarea
            placeholder={t[lang].message}
            rows={5}
            className="border-b py-3 text-white text-sm placeholder-zinc-700 focus:outline-none transition-colors bg-transparent resize-none"
            style={{ borderColor: '#222224' }}
          />
          <button
            type="submit"
            className="mt-2 px-8 py-4 text-black text-sm font-medium rounded-xl transition-opacity hover:opacity-80 self-start"
            style={{ background: '#ffffff' }}
          >
            {t[lang].send}
          </button>
        </motion.form>
      </div>
    </section>
  )
}

export default Contact