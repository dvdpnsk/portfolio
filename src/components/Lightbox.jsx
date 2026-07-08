import { useState, useCallback, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { LightboxContext } from './lightbox-context'

export function LightboxProvider({ children }) {
  const [image, setImage] = useState(null)

  const open = useCallback((src, alt) => setImage({ src, alt }), [])
  const close = useCallback(() => setImage(null), [])

  useEffect(() => {
    if (!image) return
    const onKeyDown = (e) => {
      if (e.key === 'Escape') close()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [image, close])

  return (
    <LightboxContext.Provider value={open}>
      {children}
      <AnimatePresence>
        {image && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={close}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-10"
            style={{ background: 'rgba(5,5,6,0.92)', backdropFilter: 'blur(4px)' }}
          >
            <motion.img
              key={image.src}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              src={image.src}
              alt={image.alt}
              onClick={(e) => e.stopPropagation()}
              className="max-h-full max-w-full rounded-xl object-contain"
              style={{ boxShadow: '0 50px 100px -30px rgba(0,0,0,0.8)' }}
            />
            <button
              type="button"
              onClick={close}
              aria-label="Schließen"
              className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full text-white transition-opacity hover:opacity-70"
              style={{ background: 'rgba(255,255,255,0.1)' }}
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </LightboxContext.Provider>
  )
}
