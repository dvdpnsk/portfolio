import { motion } from 'framer-motion'

function Services({ lang }) {
  const t = {
    de: {
      title: 'Leistungen',
      services: [
        {
          icon: '🌐',
          title: 'Webentwicklung',
          desc: 'Moderne, schnelle Websites und Web-Apps — mobiloptimiert und professionell gestaltet.',
        },
        {
          icon: '🔒',
          title: 'IT-Sicherheit',
          desc: 'Sicherheitsanalysen, DSGVO-Beratung und Schwachstellenchecks für kleine und mittlere Unternehmen.',
        },
        {
          icon: '🤖',
          title: 'KI-Agenten',
          desc: 'Automatisierung von Arbeitsabläufen durch maßgeschneiderte KI-Lösungnten und mehr.',
        },
      ],
    },
    en: {
      title: 'Services',
      services: [
        {
          icon: '🌐',
          title: 'Web Development',
          desc: 'Modern, fast websites and web apps — mobile-optimized and professionally designed.',
        },
        {
          icon: '🔒',
          title: 'IT Security',
          desc: 'Security analysis, GDPR consulting and vulnerability checks for small and medium businesses.',
        },
        {
          icon: '🤖',
          title: 'AI Agents',
          desc: 'Workflow automation through custom AI solutions — chatbots, email assistants and more.',
        },
      ],
    },
  }

  return (
    <section id="services" className="py-24 px-6 bg-white border-t border-amber-100">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-gray-800 mb-10"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
        >
          {t[lang].title}
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-6">
          {t[lang].services.map((service, i) => (
            <motion.div
              key={service.title}
              className="p-6 bg-amber-50 rounded-2xl border border-amber-100 hover:bo transition-all"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <span className="text-4xl mb-4 block">{service.icon}</span>
              <h3 className="text-gray-800 font-semibold text-lg mb-2">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services