import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'

function Projects({ lang }) {
  const t = {
    de: { title: 'Ausgewählte Projekte', view: 'Projekt ansehen' },
    en: { title: 'Selected Work', view: 'View Project' },
  }

  return (
    <section id="projects" className="px-4 md:px-8 py-24 max-w-6xl mx-auto" style={{ borderTop: '1px solid #1a1a1c' }}>
      <motion.p
        className="text-xs tracking-widest uppercase mb-16"
        style={{ color: '#555558' }}
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
      >
        {t[lang].title}
      </motion.p>

      <div className="flex flex-col gap-4">
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Link to={`/project/${project.id}`} className="group block rounded-2xl overflow-hidden relative" style={{ border: '1px solid #1a1a1c' }}>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[220px] sm:h-[320px] md:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 flex justify-between items-end">
                <div>
                  <h3 className="text-base md:text-xl font-bold text-white">{project.title}</h3>
                  <p className="text-xs md:text-sm mt-1" style={{ color: '#888' }}>{project.category} — {project.year}</p>
                </div>
                <span className="text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 text-white transition-opacity hidden sm:block">
                  {t[lang].view} →
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects
