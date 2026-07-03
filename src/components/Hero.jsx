import { motion } from 'framer-motion'

function Hero({ lang }) {
  const t = {
    de: {
      line1: 'Ich baue Websites,',
      line2: 'sichere Systeme &',
      line3: 'KI-Lösungen.',
      sub: 'Freelancer aus Deutschland.',
      sub2: 'Verfügbar für neue Projekte.',
    },
    en: {
      line1: 'I build websites,',
      line2: 'secure systems &',
      line3: 'AI solutions.',
      sub: 'Freelancer from Germany.',
      sub2: 'Available for new projects.',
    },
  }

  return (
    <section className="min-h-screen flex flex-col justify-center px-8 pt-24 pb-12 max-w-6xl mx-auto">
      <motion.div
        className="rounded-3xl p-16 relative overflow-hidden"
        style={{ background: 'linear-gradient(145deg, #161618 0%, #111113 100%)', border: '1px solid #222224' }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Glow */}
        <div className="absolute top-[-150px] right-[-150px] w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)' }} />

        {/* Text */}
        <div className="relative z-10">
          <motion.h1
            className="text-7xl font-bold text-white leading-tight tracking-tight mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {t[lang].line1}<br />
            {t[lang].line2}<br />
            <span style={{ color: '#555558' }}>{t[lang].line3}</span>
          </motion.h1>

          <motion.div
            className="flex justify-between items-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div>
              <p style={{ color: '#555558' }} className="text-sm">{t[lang].sub}</p>
              <p style={{ color: '#555558' }} className="text-sm">{t[lang].sub2}</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span style={{ color: '#555558' }} className="text-xs">Available</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero