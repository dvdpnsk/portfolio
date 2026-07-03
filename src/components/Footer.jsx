function Footer({ lang }) {
  const t = {
    de: { rights: 'Alle Rechte vorbehalten', contact: 'Kontakt aufnehmen' },
    en: { rights: 'All rights reserved', contact: 'Get in touch' },
  }

  return (
    <footer className="max-w-6xl mx-auto px-8 py-12 flex justify-between items-center" style={{ borderTop: '1px solid #1a1a1c' }}>
      <p className="text-xs" style={{ color: '#333336' }}>
        © 2025 Serkan David Pinske — {t[lang].rights}
      </p>
      <a
        href="mailto:kontakt@serkan-pinske.de"
        className="text-xs hover:text-white transition-colors"
        style={{ color: '#333336' }}
      >
        kontakt@serkan-pinske.de ↗
      </a>
    </footer>
  )
}

export default Footer