import { useState } from 'react'
import { Phone } from 'lucide-react'
import { business } from '../content/business'
import { images, srcSet, type SiteImage } from '../content/images'
import { useNotes } from '../lib/notes-context'
import { SectionLabel } from './SectionHeading'
import { ConfirmNote } from './ui/Notes'
import { Reveal } from './ui/Reveal'

type Discipline = {
  name: string
  text: string
  image: SiteImage
  /** Fuente pública que lo respalda; `confirm` = vigencia por confirmar. */
  confirm: boolean
}

const disciplines: Discipline[] = [
  {
    name: 'Musculación y fuerza',
    text: 'Máquinas guiadas y peso libre para trabajar todo el cuerpo, al ritmo de cada uno.',
    image: images.pesoMuerto,
    confirm: false,
  },
  {
    name: 'Boxeo',
    text: 'Trabajo de saco para técnica, golpeo y acondicionamiento.',
    image: images.sacos,
    confirm: true,
  },
  {
    name: 'Entrenamiento funcional',
    text: 'Kettlebells, cuerdas, bandas y anillas para moverte mejor y con más fuerza.',
    image: images.kettlebells,
    confirm: true,
  },
  {
    name: 'Calistenia',
    text: 'Zona de barras para dominadas y trabajo con tu propio peso.',
    image: images.magnesio,
    confirm: true,
  },
  {
    name: 'Seguimiento personalizado',
    text: 'Planificación y seguimiento según tu objetivo, con alguien que conoce tu entrenamiento.',
    image: images.filaMancuernas,
    confirm: true,
  },
]

export function Training() {
  const [active, setActive] = useState(0)
  const { show } = useNotes()

  return (
    <section id="entrenamiento" aria-labelledby="entrenamiento-title" className="relative py-24 sm:py-32 lg:py-40">
      <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <Reveal>
            <SectionLabel index="03">Entrenamiento</SectionLabel>
            <h2 id="entrenamiento-title" className="display mt-6 text-[clamp(3rem,7.5vw,6.5rem)]">
              Elige cómo
              {' '}
              <br />
              quieres entrenar.
            </h2>
          </Reveal>

          <ol className="mt-12 border-t border-white/15" onMouseLeave={() => setActive(0)}>
            {disciplines.map((d, i) => (
              <li
                key={d.name}
                onMouseEnter={() => setActive(i)}
                className="group relative grid grid-cols-[2.5rem_1fr_auto] items-start gap-x-4 border-b border-white/15 py-6 sm:grid-cols-[3.5rem_1fr] sm:py-7"
              >
                <span
                  className={`eyebrow pt-2 text-[0.6875rem] transition-colors ${
                    active === i ? 'text-signal-text' : 'text-mist'
                  }`}
                >
                  0{i + 1}
                </span>
                <div>
                  <h3
                    className={`display text-[clamp(2.25rem,5vw,3.75rem)] transition-[color,transform] duration-500 ease-[cubic-bezier(.16,1,.3,1)] lg:group-hover:translate-x-2 ${
                      active === i ? 'lg:text-bone' : 'lg:text-bone/55'
                    }`}
                  >
                    {d.name}
                  </h3>
                  <p className="mt-2 max-w-md text-[0.9375rem] leading-relaxed text-mist">{d.text}</p>
                  {show && d.confirm && (
                    <span className="eyebrow mt-3 inline-flex items-center gap-1.5 text-[0.625rem] text-signal-text">
                      <span className="h-1.5 w-1.5 rounded-full bg-signal" aria-hidden="true" />
                      Confirmar si sigue disponible
                    </span>
                  )}
                </div>
                {/* Miniatura solo en móvil */}
                <img
                  src={`${d.image.base}-800.webp`}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  width={80}
                  height={80}
                  className="grade mt-2 h-16 w-16 object-cover sm:hidden"
                  style={{ objectPosition: d.image.focus }}
                />
              </li>
            ))}
          </ol>

          <ConfirmNote className="mt-6">
            Musculación y fuerza: respaldado por reseñas recientes. Boxeo, funcional y calistenia aparecen en reseñas
            de hace 2–3 años; el seguimiento personalizado, en la biografía de Instagram (2022). Spinning solo aparece
            en un directorio y no se incluye.
          </ConfirmNote>
        </div>

        {/* Imagen asociada (escritorio) */}
        <div className="hidden lg:col-span-5 lg:block">
          <div className="sticky top-28">
            <div className="relative aspect-[4/5] overflow-hidden bg-steel-900">
              {disciplines.map((d, i) => (
                <img
                  key={d.name}
                  src={`${d.image.base}-800.webp`}
                  srcSet={srcSet(d.image)}
                  sizes="40vw"
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className={`grade absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-700 ease-[cubic-bezier(.16,1,.3,1)] ${
                    active === i ? 'scale-100 opacity-100' : 'scale-105 opacity-0'
                  }`}
                  style={{ objectPosition: d.image.focus }}
                />
              ))}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 to-transparent p-6 pt-20">
                <p className="display text-3xl">{disciplines[active].name}</p>
              </div>
              {show && (
                <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 bg-ink/80 px-2 py-1 text-[0.625rem] font-semibold uppercase tracking-[0.14em] text-bone">
                  <span className="h-1.5 w-1.5 rounded-full bg-signal" aria-hidden="true" />
                  Foto provisional
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Llamada a la acción sin inventar tarifas ni horarios de clases */}
      <div className="container-x mt-20 sm:mt-28">
        <Reveal className="relative overflow-hidden bg-signal-strong">
          <div className="hazard absolute inset-y-0 right-0 hidden w-40 opacity-25 md:block" aria-hidden="true" />
          <div className="relative flex flex-col gap-6 p-7 sm:p-10 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="display text-[clamp(2rem,4.5vw,3.25rem)] text-white">¿Tarifas, horarios o cómo empezar?</p>
              <p className="mt-2 text-white/90">Te lo cuentan directamente en el gimnasio o por teléfono.</p>
            </div>
            <a
              href={business.phone.href}
              className="btn shrink-0 bg-ink text-bone hover:bg-graphite md:mr-24"
            >
              <Phone size={18} aria-hidden="true" />
              {business.phone.display}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
