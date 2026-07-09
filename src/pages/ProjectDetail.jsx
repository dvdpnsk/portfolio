import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { projects } from '../data/projects'
import AmaraStudioCaseStudy from './AmaraStudioCaseStudy'

function ProjectDetail() {
  const { id } = useParams()
  const project = projects.find(p => p.id === id)

  if (!project) return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: '#0a0a0a' }}>
      <p style={{ color: '#555558' }}>Projekt nicht gefunden.</p>
    </div>
  )

  if (project.id === 'friseursalon') {
    return <AmaraStudioCaseStudy project={project} />
  }

  return (
    <div style={{ minHeight: '100vh' }}>

      <nav className="fixed top-0 w-full z-50" style={{ borderBottom: '1px solid #1a1a1c', background: 'rgba(10,10,10,0.8)', backdropFilter: 'blur(12px)' }}>
        <div className="max-w-4xl mx-auto px-8 py-5 flex justify-between items-center">
          <Link to="/" className="text-xs tracking-widest uppercase hover:text-white transition-colors" style={{ color: '#555558' }}>
            ← Zurück
          </Link>
          <span className="text-xs tracking-widest uppercase" style={{ color: '#555558' }}>SDP</span>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-8 pt-40 pb-16" style={{ borderBottom: '1px solid #1a1a1c' }}>
        <motion.p
          className="text-xs tracking-widest uppercase mb-4"
          style={{ color: '#555558' }}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}
        >
          {project.category} — {project.year}
        </motion.p>
        <motion.h1
          className="text-5xl font-black text-white tracking-tight mb-6"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
        >
          {project.title}
        </motion.h1>
        <motion.p
          className="text-lg max-w-2xl leading-relaxed"
          style={{ color: '#555558' }}
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
        >
          {project.description}
        </motion.p>

        {project.liveUrl && (
          <motion.a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 px-8 py-4 text-black text-sm font-medium rounded-xl transition-opacity hover:opacity-80"
            style={{ background: '#ffffff' }}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
          >
            Live ansehen ↗
          </motion.a>
        )}
      </div>

      <motion.div
        className="max-w-4xl mx-auto px-8 py-12"
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full object-cover rounded-2xl"
          style={{ height: '500px', background: project.color }}
        />
      </motion.div>

      <div className="max-w-4xl mx-auto px-8 pb-32">
        {project.sections.map((section, i) => (
          <motion.div
            key={section.number}
            className="py-16 grid md:grid-cols-4 gap-8"
            style={{ borderTop: '1px solid #1a1a1c' }}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div>
              <span className="text-xs tracking-widest uppercase" style={{ color: '#333336' }}>{section.number}</span>
              <h2 className="text-lg font-bold text-white mt-1">{section.title}</h2>
            </div>
            <div className="md:col-span-3">
              <p className="leading-relaxed" style={{ color: '#555558' }}>{section.text}</p>
              {section.images && section.images.length > 0 && (
                <div className={`mt-8 grid gap-4 ${section.images.length > 1 ? 'sm:grid-cols-2' : ''}`}>
                  {section.images.map((shot) => (
                    <div key={shot.src}>
                      <img
                        src={shot.src}
                        alt={shot.caption}
                        className="w-full rounded-2xl"
                        style={{ border: '1px solid #1a1a1c' }}
                      />
                      <p className="text-xs mt-3" style={{ color: '#555558' }}>{shot.caption}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  )
}

export default ProjectDetail