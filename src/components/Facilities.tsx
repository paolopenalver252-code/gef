import { images, type SiteImage } from '../content/images'
import { SectionLabel } from './SectionHeading'
import { ConfirmNote } from './ui/Notes'
import { Photo } from './ui/Photo'
import { Reveal } from './ui/Reveal'

type Zone = {
  n: string
  title: string
  text: string
  image: SiteImage
  frame: string
  layout: string
}

const zones: Zone[] = [
  {
    n: '01',
    title: 'Peso libre',
    text: 'Barras, discos y racks para los básicos: sentadilla, press y peso muerto.',
    image: images.barra,
    frame: 'aspect-[4/3]',
    layout: 'lg:col-span-7',
  },
  {
    n: '02',
    title: 'Mancuernas',
    text: 'Varios juegos del mismo peso, para no tener que esperar turno.',
    image: images.mancuernas,
    frame: 'aspect-[4/5]',
    layout: 'lg:col-span-4 lg:col-start-9 lg:mt-40',
  },
  {
    n: '03',
    title: 'Boxeo',
    text: 'Sacos colgados para trabajar golpeo, técnica y acondicionamiento.',
    image: images.sacos,
    frame: 'aspect-[4/5]',
    layout: 'lg:col-span-4 lg:col-start-2 lg:-mt-10',
  },
  {
    n: '04',
    title: 'Funcional y calistenia',
    text: 'Zona de barras, anillas, cuerdas, bandas y cadenas para trabajar con tu propio peso.',
    image: images.cuerdas,
    frame: 'aspect-[16/11]',
    layout: 'lg:col-span-6 lg:col-start-7 lg:mt-28',
  },
]

const material = [
  'Mancuernas',
  'Barras',
  'Discos',
  'Racks',
  'Máquinas guiadas',
  'Sacos de boxeo',
  'Bandas',
  'Cuerdas',
  'Anillas',
  'Cadenas',
  'Zona de calistenia',
]

export function Facilities() {
  return (
    <section
      id="instalaciones"
      aria-labelledby="instalaciones-title"
      className="relative border-t border-white/10 bg-graphite py-24 sm:py-32 lg:py-40"
    >
      <div className="container-x">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <SectionLabel index="02">Instalaciones</SectionLabel>
            <h2 id="instalaciones-title" className="display mt-6 text-[clamp(3rem,7.5vw,6.5rem)]">
              Hierro de sobra.
              {' '}
              <br />
              Sitio para usarlo.
            </h2>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-4 lg:col-start-9">
            <p className="text-lg leading-relaxed text-bone/80">
              Una sala organizada por zonas para que cada uno entrene lo suyo: fuerza, mancuerna, saco o peso
              corporal.
            </p>
            <ConfirmNote className="mt-5">
              Fotos de referencia. En las imágenes públicas del local se ven pared de ladrillo visto, paredes en verde
              lima y suelo gris: se sustituirán por fotografías reales de cada zona.
            </ConfirmNote>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-14 sm:mt-24 lg:grid-cols-12 lg:gap-x-8 lg:gap-y-0">
          {zones.map((z, i) => (
            <Reveal as="figure" key={z.n} delay={(i % 2) * 120} className={z.layout}>
              <Photo
                image={z.image}
                sizes={z.layout.includes('col-span-7') ? '(min-width: 1024px) 55vw, 100vw' : '(min-width: 1024px) 38vw, 100vw'}
                className={`${z.frame} w-full`}
                imgClassName="transition-transform duration-[1.2s] ease-[cubic-bezier(.16,1,.3,1)] hover:scale-[1.04]"
              />
              <figcaption className="mt-5 grid grid-cols-[auto_1fr] gap-x-5 border-t border-white/15 pt-4">
                <span className="eyebrow pt-1.5 text-[0.6875rem] text-signal-text">Zona {z.n}</span>
                <div>
                  <h3 className="display text-3xl sm:text-4xl">{z.title}</h3>
                  <p className="mt-2 max-w-md text-[0.9375rem] leading-relaxed text-mist">{z.text}</p>
                </div>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Cinta de material */}
      <div className="mt-24 border-y border-white/10 py-6 sm:mt-32" aria-label="Material disponible">
        <div className="overflow-hidden">
          <ul className="marquee-track flex w-max items-center" aria-label="Material">
            {[...material, ...material].map((m, i) => (
              <li
                key={i}
                aria-hidden={i >= material.length}
                className="display flex items-center whitespace-nowrap text-4xl text-bone/90 sm:text-5xl"
              >
                <span className="px-6 sm:px-8">{m}</span>
                <span className="h-2.5 w-2.5 rotate-45 bg-signal" aria-hidden="true" />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container-x">
        <ConfirmNote className="mt-6 max-w-2xl">
          Material citado en reseñas públicas de Google. Confirmar inventario actual con el gimnasio.
        </ConfirmNote>
      </div>
    </section>
  )
}
