import { useLightbox } from './lightbox-context'

export function BrowserFrame({ src, alt, url = 'demo-salon-henna.vercel.app' }) {
  const openLightbox = useLightbox()

  return (
    <div
      className="overflow-hidden rounded-2xl"
      style={{
        border: '1px solid #222224',
        background: '#111113',
        boxShadow: '0 50px 100px -30px rgba(0,0,0,0.7)',
      }}
    >
      <div
        className="flex items-center gap-3 px-4 py-3"
        style={{ background: '#161618', borderBottom: '1px solid #222224' }}
      >
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full" style={{ background: '#3a3a3d' }} />
          <span className="h-2.5 w-2.5 rounded-full" style={{ background: '#3a3a3d' }} />
          <span className="h-2.5 w-2.5 rounded-full" style={{ background: '#3a3a3d' }} />
        </div>
        <div
          className="flex-1 truncate rounded-full px-3 py-1 text-center text-xs"
          style={{ background: '#0a0a0a', color: '#555558' }}
        >
          {url}
        </div>
      </div>
      <button
        type="button"
        onClick={() => openLightbox(src, alt)}
        className="block w-full cursor-zoom-in transition-opacity hover:opacity-90"
        aria-label={`${alt} vergrößern`}
      >
        <img src={src} alt={alt} className="block w-full" />
      </button>
    </div>
  )
}

export function PhoneFrame({ src, alt }) {
  const openLightbox = useLightbox()

  return (
    <div
      className="mx-auto w-full max-w-[320px] rounded-[2.25rem] p-2"
      style={{
        background: '#161618',
        border: '1px solid #222224',
        boxShadow: '0 50px 100px -30px rgba(0,0,0,0.7)',
      }}
    >
      <div className="relative overflow-hidden rounded-[1.65rem]" style={{ background: '#0a0a0a' }}>
        <div
          className="absolute left-1/2 top-0 z-10 h-5 w-24 -translate-x-1/2 rounded-b-2xl"
          style={{ background: '#161618' }}
        />
        <button
          type="button"
          onClick={() => openLightbox(src, alt)}
          className="block w-full cursor-zoom-in transition-opacity hover:opacity-90"
          aria-label={`${alt} vergrößern`}
        >
          <img src={src} alt={alt} className="block w-full" />
        </button>
      </div>
    </div>
  )
}
