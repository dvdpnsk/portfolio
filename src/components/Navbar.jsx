import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'

function Navbar({ lang, setLang }) {
  const location = useLocation()
  const isInfo = location.pathname === '/info'
  const isHome = location.pathname === '/'
  const isContact = location.pathname === '/contact'

  const t = {
    de: { work: 'Projekte', info: 'Info', contact: 'Kontakt' },
    en: { work: 'Work', info: 'Info', contact: 'Contact' },
  }

  return (
    <motion.nav
      className="fixed top-0 w-full z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-full px-4 md:px-8 py-4 md:py-5 grid items-center" style={{ gridTemplateColumns: '1fr auto 1fr' }}>

        <div>
          <p className="text-white text-xs md:text-sm font-medium">Serkan David Pinske</p>
          <p className="text-xs hidden sm:block" style={{ color: '#555558' }}>Web & Security Freelancer</p>
        </div>

        <div className="flex items-center rounded-full p-1" style={{ background: '#161618', border: '1px solid #222224' }}>
          <Link
            to="/"
            className="relative px-3 md:px-5 py-1.5 text-xs rounded-full transition-colors duration-200"
            style={{ color: isHome ? 'white' : '#555558' }}
          >
            {isHome && (
              <motion.div
                layoutId="pill"
                className="absolute inset-0 rounded-full"
                style={{ background: '#2a2a2e' }}
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">{t[lang].work}</span>
          </Link>
          <Link
            to="/info"
            className="relative px-3 md:px-5 py-1.5 text-xs rounded-full transition-colors duration-200"
            style={{ color: isInfo ? 'white' : '#555558' }}
          >
            {isInfo && (
              <motion.div
                layoutId="pill"
                className="absolute inset-0 rounded-full"
                style={{ background: '#2a2a2e' }}
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">{t[lang].info}</span>
          </Link>
        </div>

        <div className="flex items-center justify-end gap-3 md:gap-6">
          <Link
            to="/contact"
            className="text-xs transition-colors hover:text-white relative pb-1"
            style={{ color: isContact ? 'white' : '#555558' }}
          >
            {t[lang].contact}
            {isContact && (
              <motion.div
                layoutId="underline"
                className="absolute bottom-0 left-0 right-0 h-px bg-white"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
          </Link>
          <button
            onClick={() => setLang(lang === 'de' ? 'en' : 'de')}
            className="text-xs transition-colors hover:text-white"
            style={{ color: '#555558' }}
          >
            {lang === 'de' ? 'EN' : 'DE'}
          </button>
        </div>

      </div>
    </motion.nav>
  )
}

export default Navbar
