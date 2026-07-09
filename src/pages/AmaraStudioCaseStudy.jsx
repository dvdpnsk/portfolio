import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { BrowserFrame, PhoneFrame } from '../components/DeviceFrame'
import { LightboxProvider } from '../components/Lightbox'

const ACCENT = '#d96b84'
const MUTED = '#555558'
const BORDER = '#1a1a1c'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

function Reveal({ children, delay = 0, className, ...rest }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

function Eyebrow({ children }) {
  return (
    <p className="text-xs tracking-widest uppercase mb-4" style={{ color: ACCENT }}>
      {children}
    </p>
  )
}

function FeatureTitle({ children }) {
  return (
    <h3 className="text-3xl sm:text-4xl text-white mb-5" style={{ fontFamily: "'Fraunces', serif" }}>
      {children}
    </h3>
  )
}

function FeatureText({ children }) {
  return <p className="leading-relaxed" style={{ color: MUTED }}>{children}</p>
}

const STATS = [
  { value: '< 1 Min.', label: 'bis zum bestätigten Termin' },
  { value: '0', label: 'Doppelbuchungen möglich' },
  { value: '100%', label: 'mobil nutzbar — auch im Admin-Bereich' },
]

const CONTRAST = {
  before: [
    'Kontaktformular mit „Wir melden uns“',
    'Ein Anruf für jeden einzelnen Termin',
    'Excel-Tabelle zur Buchungsübersicht',
  ],
  after: [
    'Echte freie Termine in Echtzeit sichtbar',
    'Buchung in unter einer Minute, ganz ohne Anruf',
    'Automatisches Dashboard mit allen Terminen',
  ],
}

const BENEFITS = [
  {
    icon: <path d="M9 12.5l2 2 4-4.5M12 3l7 3.5v5c0 4.5-3 8.5-7 9.5-4-1-7-5-7-9.5v-5L12 3z" />,
    title: 'Keine Doppelbuchungen',
    text: 'Jede Anfrage wird beim Speichern in einer einzigen Datenbank-Transaktion gegen den Kalender geprüft — ein Konflikt wird technisch ausgeschlossen, nicht nur unwahrscheinlich gemacht.',
  },
  {
    icon: <path d="M4 6h16v12H4z M4 7l8 6 8-6" />,
    title: 'Erinnert sich von selbst',
    text: 'Bestätigung direkt nach der Buchung, Erinnerung automatisch am Vortag per E-Mail — ganz ohne, dass im Salon jemand daran denken muss.',
  },
  {
    icon: <path d="M4 4h7v7H4z M13 4h7v7h-7z M4 13h7v7H4z M13 13h7v7h-7z" />,
    title: 'Für jede Branche',
    text: 'Nur Name, Leistungen und Design ändern sich — Buchungslogik und Dashboard bleiben gleich. Genauso geeignet für Tattoo-Studios, Nagelstudios oder Barbershops.',
  },
]

const TECH = ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Vercel']

function AmaraStudioCaseStudy({ project }) {
  return (
    <LightboxProvider>
      <div style={{ minHeight: '100vh' }}>
        <nav className="fixed top-0 w-full z-50" style={{ borderBottom: `1px solid ${BORDER}`, background: 'rgba(10,10,10,0.8)', backdropFilter: 'blur(12px)' }}>
          <div className="max-w-6xl mx-auto px-8 py-5 flex justify-between items-center">
            <Link to="/" className="text-xs tracking-widest uppercase hover:text-white transition-colors" style={{ color: MUTED }}>
              ← Zurück
            </Link>
            <span className="text-xs tracking-widest uppercase" style={{ color: MUTED }}>SDP</span>
          </div>
        </nav>

        {/* Hero */}
        <div className="max-w-3xl mx-auto px-8 pt-40 pb-16 text-center">
          <Reveal className="flex items-center justify-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs tracking-widest uppercase" style={{ color: MUTED }}>Live im Einsatz</span>
          </Reveal>

          <Reveal delay={0.1}>
            <h1
              className="text-5xl sm:text-6xl md:text-7xl text-white leading-[1.05] mb-8"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              Termine, die sich von allein buchen.
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-lg max-w-xl mx-auto leading-relaxed mb-10" style={{ color: MUTED }}>
              Amara Studio ist keine Website-Vorlage mit Kontaktformular, sondern ein vollständiges
              Buchungssystem mit echter Datenbank, Admin-Dashboard und automatisierten E-Mails —
              sofort einsatzbereit für Friseursalons, Nagelstudios, Physiopraxen oder Barbershops.
            </p>
          </Reveal>

          <Reveal delay={0.3} className="flex items-center justify-center gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 text-black text-sm font-medium rounded-xl transition-opacity hover:opacity-80"
                style={{ background: '#ffffff' }}
              >
                Live ansehen ↗
              </a>
            )}
          </Reveal>
        </div>

        <div className="max-w-6xl mx-auto px-8 pb-16">
          <Reveal delay={0.1}>
            <BrowserFrame src="/projects/amara-studio/hero-crop.png" alt="Amara Studio — Startseite" />
          </Reveal>
        </div>

        {/* Stats */}
        <div className="max-w-4xl mx-auto px-8 py-16 grid grid-cols-1 sm:grid-cols-3 gap-10" style={{ borderTop: `1px solid ${BORDER}` }}>
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.1} className="text-center sm:text-left">
              <p className="text-4xl sm:text-5xl" style={{ fontFamily: "'Fraunces', serif", color: ACCENT }}>
                {stat.value}
              </p>
              <p className="mt-2 text-sm" style={{ color: MUTED }}>{stat.label}</p>
            </Reveal>
          ))}
        </div>

        {/* Contrast */}
        <div className="max-w-4xl mx-auto px-8 py-20" style={{ borderTop: `1px solid ${BORDER}` }}>
          <Reveal>
            <p className="text-xs tracking-widest uppercase mb-4" style={{ color: MUTED }}>Das Problem</p>
            <h2 className="text-3xl sm:text-4xl text-white max-w-2xl mb-6" style={{ fontFamily: "'Fraunces', serif" }}>
              Die meisten Dienstleister verlieren Kund:innen schon vor dem ersten Termin.
            </h2>
            <p className="max-w-xl leading-relaxed mb-14" style={{ color: MUTED }}>
              Wer online erst ein Formular ausfüllen und dann auf einen Rückruf warten muss, bucht
              oft einfach woanders. Amara Studio zeigt von der ersten Sekunde an echte freie Termine.
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-6">
            <Reveal delay={0.1} className="rounded-2xl p-8" style={{ border: `1px solid ${BORDER}` }}>
              <p className="text-xs tracking-widest uppercase mb-6" style={{ color: '#3a3a3d' }}>Sonst</p>
              <ul className="flex flex-col gap-4">
                {CONTRAST.before.map((line) => (
                  <li key={line} className="flex gap-3 text-sm" style={{ color: MUTED }}>
                    <span style={{ color: '#3a3a3d' }}>✕</span>
                    {line}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.2} className="rounded-2xl p-8" style={{ border: `1px solid ${ACCENT}44`, background: 'rgba(217,107,132,0.05)' }}>
              <p className="text-xs tracking-widest uppercase mb-6" style={{ color: ACCENT }}>Mit Amara Studio</p>
              <ul className="flex flex-col gap-4">
                {CONTRAST.after.map((line) => (
                  <li key={line} className="flex gap-3 text-sm text-white">
                    <span style={{ color: ACCENT }}>✓</span>
                    {line}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>

        {/* Feature 1 — Buchung (tall image left, text + shorter image right) */}
        <div className="py-20" style={{ borderTop: `1px solid ${BORDER}` }}>
          <div className="max-w-6xl mx-auto px-8">
            <div className="grid gap-8 md:grid-cols-2 items-start">
              <Reveal>
                <BrowserFrame src="/projects/amara-studio/buchungsflow-1-service.png" alt="Serviceauswahl" />
              </Reveal>
              <div className="flex flex-col gap-8">
                <Reveal delay={0.1}>
                  <Eyebrow>Buchung</Eyebrow>
                  <FeatureTitle>Buchen, nicht ausfüllen.</FeatureTitle>
                  <FeatureText>
                    Kund:innen wählen ihren Service aus allen Kategorien — Haare, Nägel, Augenbrauen
                    oder Pflege —, dann die gewünschte Person oder einfach „egal, Hauptsache schnell“.
                    Freie Termine werden live aus dem Kalender berechnet, inklusive Vorlaufzeit. Der
                    ganze Ablauf dauert selten länger als eine Minute. Ein Kundenkonto braucht
                    niemand: Jede Buchung bekommt einen eigenen, sicheren Link zur Verwaltung.
                  </FeatureText>
                </Reveal>
                <Reveal delay={0.2}>
                  <BrowserFrame src="/projects/amara-studio/buchungsflow-3-termin.png" alt="Terminauswahl" />
                </Reveal>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 2 — Services & Team */}
        <div className="py-20" style={{ borderTop: `1px solid ${BORDER}` }}>
          <div className="max-w-2xl mx-auto px-8 text-center mb-12">
            <Reveal>
              <Eyebrow>Verwaltung</Eyebrow>
              <FeatureTitle>Der Salon pflegt sich selbst.</FeatureTitle>
              <FeatureText>
                Jeder Service bekommt Name, Kategorie, Dauer und Preis — jederzeit änderbar, ohne eine
                Zeile Code anzufassen. Neue Teammitglieder werden mit Foto, Rolle und den passenden
                Leistungen angelegt; das entscheidet direkt mit, welche Termine im Buchungsflow
                überhaupt auftauchen. So bleibt die öffentliche Seite immer aktuell, ganz ohne
                Entwickler:in einzuschalten.
              </FeatureText>
            </Reveal>
          </div>
          <div className="max-w-6xl mx-auto px-8">
            <Reveal delay={0.15}>
              <div className="grid gap-6 sm:grid-cols-2">
                <BrowserFrame src="/projects/amara-studio/admin-services.png" alt="Services verwalten" url="…/admin/services" />
                <BrowserFrame src="/projects/amara-studio/admin-team.png" alt="Team verwalten" url="…/admin/team" />
              </div>
            </Reveal>
          </div>
        </div>

        {/* Feature 3 — Unterwegs (phone left, text + desktop right) */}
        <div className="py-20" style={{ borderTop: `1px solid ${BORDER}` }}>
          <div className="max-w-6xl mx-auto px-8">
            <div className="grid gap-8 md:grid-cols-2 items-start">
              <Reveal>
                <PhoneFrame src="/projects/amara-studio/admin-mobile-dropdown.jpeg" alt="Admin-Navigation mobil" />
              </Reveal>
              <div className="flex flex-col gap-8">
                <Reveal delay={0.1}>
                  <Eyebrow>Unterwegs</Eyebrow>
                  <FeatureTitle>Das Büro passt in die Hosentasche.</FeatureTitle>
                  <FeatureText>
                    Das komplette Dashboard — Buchungen, Services, Team, Arbeitszeiten und Finanzen —
                    ist genauso durchdacht für den schmalen Bildschirm gebaut wie für den großen. Die
                    Navigation klappt auf dem Handy zu einem kompakten Menü zusammen, damit auch mit
                    einer Hand alles erreichbar bleibt. Ob am Empfangstresen zwischen zwei Terminen
                    oder unterwegs: ein neuer Preis oder eine kurzfristige Änderung ist in Sekunden
                    erledigt.
                  </FeatureText>
                </Reveal>
                <Reveal delay={0.2}>
                  <BrowserFrame src="/projects/amara-studio/admin-uebersicht-desktop.png" alt="Admin-Übersicht Desktop" url="…/admin" />
                </Reveal>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 4 — Finanzen (text + desktop left, phone right — mirrored) */}
        <div className="py-20" style={{ borderTop: `1px solid ${BORDER}` }}>
          <div className="max-w-6xl mx-auto px-8">
            <div className="grid gap-8 md:grid-cols-2 items-start">
              <div className="flex flex-col gap-8">
                <Reveal>
                  <Eyebrow>Finanzen</Eyebrow>
                  <FeatureTitle>Zahlen auf einen Blick.</FeatureTitle>
                  <FeatureText>
                    Neben allen Terminen rechnet das Dashboard automatisch Einnahmen, Ausgaben und
                    Gewinn für einen frei wählbaren Zeitraum zusammen — heute, diese Woche, diesen
                    Monat oder ein individuelles Datum. Ausgaben lassen sich in eigene Kategorien wie
                    Miete, Lohn oder Marketing einsortieren und direkt erfassen. Für den täglichen
                    Überblick reicht das oft schon, ganz ohne separate Buchhaltungssoftware.
                  </FeatureText>
                </Reveal>
                <Reveal delay={0.1}>
                  <BrowserFrame src="/projects/amara-studio/admin-finanzen.png" alt="Finanzen Desktop" url="…/admin/finanzen" />
                </Reveal>
              </div>
              <Reveal delay={0.2}>
                <PhoneFrame src="/projects/amara-studio/admin-mobile-finanzen-crop.jpeg" alt="Finanzen mobil" />
              </Reveal>
            </div>
          </div>
        </div>

        {/* Compact benefits */}
        <div className="max-w-4xl mx-auto px-8 py-20" style={{ borderTop: `1px solid ${BORDER}` }}>
          <div className="grid sm:grid-cols-3 gap-6">
            {BENEFITS.map((benefit, i) => (
              <Reveal key={benefit.title} delay={i * 0.1} className="rounded-2xl p-8" style={{ border: `1px solid ${BORDER}` }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={ACCENT} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mb-5">
                  {benefit.icon}
                </svg>
                <h4 className="text-white font-medium mb-2">{benefit.title}</h4>
                <p className="text-sm leading-relaxed" style={{ color: MUTED }}>{benefit.text}</p>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Tech stack */}
        <div className="max-w-4xl mx-auto px-8 py-16 flex flex-wrap items-center gap-3" style={{ borderTop: `1px solid ${BORDER}` }}>
          <span className="text-xs tracking-widest uppercase mr-2" style={{ color: MUTED }}>Tech-Stack</span>
          {TECH.map((tech) => (
            <span
              key={tech}
              className="text-xs px-3 py-1.5 rounded-full"
              style={{ border: `1px solid ${BORDER}`, color: MUTED }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Closing CTA */}
        <div className="max-w-4xl mx-auto px-8 py-32 text-center" style={{ borderTop: `1px solid ${BORDER}` }}>
          <Reveal>
            <h2 className="text-4xl sm:text-5xl text-white mb-8 max-w-2xl mx-auto" style={{ fontFamily: "'Fraunces', serif" }}>
              Auch dein Geschäft könnte das haben.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="flex items-center justify-center gap-4 flex-wrap">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 text-black text-sm font-medium rounded-xl transition-opacity hover:opacity-80"
                style={{ background: '#ffffff' }}
              >
                Live ansehen ↗
              </a>
            )}
            <Link
              to="/contact"
              className="inline-block px-8 py-4 text-sm font-medium rounded-xl transition-colors"
              style={{ border: `1px solid ${BORDER}`, color: 'white' }}
            >
              Projekt anfragen →
            </Link>
          </Reveal>
        </div>
      </div>
    </LightboxProvider>
  )
}

export default AmaraStudioCaseStudy
