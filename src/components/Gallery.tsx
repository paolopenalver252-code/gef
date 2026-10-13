import { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react'
import { galleryOrder } from '../content/images'
import { useNotes } from '../lib/notes-context'
import { SectionLabel } from './SectionHeading'
import { ConfirmNote } from './ui/Notes'
import { Photo } from './ui/Photo'
import { Reveal } from './ui/Reveal'

/** Ritmo de la cuadrícula: tamaños variados, no tarjetas idénticas. */
const spans = [
  'col-span-2 aspect-[4/5] md:col-span-5 md:row-span-2',
  'col-span-2 aspect-[16/10] md:col-span-7',
  'col-span-1 aspect-square md:col-span-4',
  'col-span-1 aspect-square md:col-span-3',
  'col-span-2 aspect-[16/10] md:col-span-7',
  'col-span-1 aspect-[3/4] md:col-span-5 md:row-span-2',
  'col-span-1 aspect-[3/4] md:col-span-3',
  'col-span-2 aspect-[16/10] md:col-span-4',
  'col-span-2 aspect-[16/9] md:col-span-12 md:row-span-2',
].map((s) => `${s} md:aspect-auto`)

export function Gallery() {
  const [index, setIndex] = useState<number | null>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const touchX = useRef<number | null>(null)
  const { show } = useNotes()
  const total = galleryOrder.length

  const open = (i: number) => {
    setIndex(i)
    dialogRef.current?.showModal()
  }
  const close = () => dialogRef.current?.close()
  const go = useCallback(
    (dir: 1 | -1) => setIndex((i) => (i === null ? i : (i + dir + total) % total)),
    [total],
  )

  useEffect(() => {
    const d = dialogRef.current
    if (!d) return
    const onClose = () => setIndex(null)
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') go(1)
      if (e.key === 'ArrowLeft') go(-1)
    }
    d.addEventListener('close', onClose)
    d.addEventListener('keydown', onKey)
    return () => {
      d.removeEventListener('close', onClose)
      d.removeEventListener('keydown', onKey)
    }
  }, [go])

  const current = index === null ? null : galleryOrder[index]

  return (
    <section
      id="galeria"
      aria-labelledby="galeria-title"
      className="relative border-t border-white/10 bg-graphite py-24 sm:py-32 lg:py-40"
    >
      <div className="container-x">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <SectionLabel index="06">Galería</SectionLabel>
            <h2 id="galeria-title" className="display mt-6 text-[clamp(3rem,7.5vw,6.5rem)]">
              Hierro, sacos
              {' '}
              <br />
              y magnesio.
            </h2>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-4 lg:col-start-9">
            <p className="text-lg leading-relaxed text-bone/80">
              Un vistazo al ambiente de entrenamiento. Pulsa cualquier imagen para verla a pantalla completa.
            </p>
            <ConfirmNote className="mt-5">
              Galería preparada para las fotos oficiales del gimnasio (sala, material, exterior y equipo). Las
              actuales son provisionales.
            </ConfirmNote>
          </Reveal>
        </div>

        <ul className="mt-14 grid grid-cols-2 gap-2 sm:mt-20 sm:gap-3 md:grid-flow-dense md:auto-rows-[13rem] md:grid-cols-12 lg:auto-rows-[15rem]">
          {galleryOrder.map((img, i) => (
            <li key={img.id} className={spans[i % spans.length]}>
              <button
                type="button"
                onClick={() => open(i)}
                className="group relative block h-full w-full overflow-hidden"
                aria-label={`Ampliar imagen: ${img.represents}`}
              >
                <Photo
                  image={img}
                  sizes="(min-width: 768px) 45vw, 100vw"
                  className="h-full w-full"
                  imgClassName="transition-[transform,filter] duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.04] group-hover:brightness-110"
                  tag={false}
                />
                <span className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/20" />
                <span className="absolute bottom-0 left-0 right-0 flex items-center justify-between bg-gradient-to-t from-ink/85 to-transparent px-3 pb-3 pt-10 text-left opacity-100 transition-opacity duration-500 md:opacity-0 md:group-hover:opacity-100 md:group-focus-visible:opacity-100">
                  <span className="eyebrow text-[0.625rem] text-bone">{img.represents}</span>
                  <Maximize2 size={16} className="text-bone" aria-hidden="true" />
                </span>
                {show && !img.official && (
                  <span className="absolute left-2 top-2 h-2 w-2 rounded-full bg-signal ring-2 ring-ink/60" title="Foto provisional" />
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Visor accesible: <dialog> nativo (foco atrapado y Escape) */}
      <dialog
        ref={dialogRef}
        className="lightbox m-0 h-[100dvh] max-h-none w-screen max-w-none bg-transparent p-0 text-bone"
        aria-label="Visor de imágenes"
        onClick={(e) => e.target === e.currentTarget && close()}
        onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touchX.current === null) return
          const dx = e.changedTouches[0].clientX - touchX.current
          if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1)
          touchX.current = null
        }}
      >
        {current && index !== null && (
          <div className="flex h-full flex-col" onClick={(e) => e.target === e.currentTarget && close()}>
            <div className="flex items-center justify-between px-4 py-3 sm:px-6">
              <p className="eyebrow text-[0.6875rem] text-mist" aria-live="polite">
                {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
              </p>
              <button
                type="button"
                onClick={close}
                className="inline-flex h-11 w-11 items-center justify-center text-bone hover:text-signal-text"
                aria-label="Cerrar visor"
                autoFocus
              >
                <X size={26} aria-hidden="true" />
              </button>
            </div>

            <div className="relative flex min-h-0 flex-1 items-center justify-center px-2 sm:px-20">
              <img
                key={current.id}
                src={`${current.base}-1600.webp`}
                srcSet={`${current.base}-800.webp 800w, ${current.base}-1600.webp 1600w`}
                sizes="100vw"
                alt={current.alt}
                className="grade max-h-full max-w-full object-contain"
                style={{ animation: 'lb-in .4s both' }}
              />
              <button
                type="button"
                onClick={() => go(-1)}
                className="absolute left-2 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center bg-ink/70 text-bone hover:bg-signal-strong sm:left-4"
                aria-label="Imagen anterior"
              >
                <ChevronLeft size={24} aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                className="absolute right-2 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center bg-ink/70 text-bone hover:bg-signal-strong sm:right-4"
                aria-label="Imagen siguiente"
              >
                <ChevronRight size={24} aria-hidden="true" />
              </button>
            </div>

            <div className="flex flex-wrap items-baseline justify-between gap-2 px-4 py-4 text-sm sm:px-6">
              <p className="text-bone">{current.represents}</p>
              {!current.official && current.credit && (
                <p className="text-mist">
                  Foto provisional ·{' '}
                  <a href={current.credit.url} target="_blank" rel="noopener" className="link-line text-bone-dim">
                    {current.credit.author} / Unsplash
                  </a>
                </p>
              )}
            </div>
          </div>
        )}
      </dialog>
    </section>
  )
}
