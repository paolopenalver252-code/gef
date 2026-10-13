import { images } from '../content/images'
import { SectionLabel } from './SectionHeading'
import { Photo } from './ui/Photo'
import { Reveal } from './ui/Reveal'

const pillars = [
  {
    title: 'Material para fuerza',
    text: 'Máquinas, mancuernas, barras y discos para trabajar todo el cuerpo, en máquina o con peso libre.',
  },
  {
    title: 'Trato cercano',
    text: 'Es lo que más repiten las reseñas: ambiente familiar y responsables que se implican con cada persona.',
  },
  {
    title: 'Entrenamiento práctico',
    text: 'Sin postureo ni artificios. Un espacio pensado para venir, entrenar bien y volver a casa.',
  },
]

export function About() {
  return (
    <section id="gimnasio" aria-labelledby="gimnasio-title" className="relative py-24 sm:py-32 lg:py-40">
      <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <Reveal>
            <SectionLabel index="01">El gimnasio</SectionLabel>
            <h2 id="gimnasio-title" className="display mt-6 text-[clamp(3rem,6.6vw,6.25rem)]">
              De barrio
              {' '}
              <br />
              en el trato.
              {' '}
              <br />
              <span className="text-bone/45">
                De alto rendimiento
                {' '}
                <br />
                en el material.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={120}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-bone/80">
              GEF es un gimnasio de fuerza y musculación en El Puig de Santa Maria. Aquí se viene a entrenar: hay
              hierro para progresar, sitio para moverse y un trato de tú a tú.
            </p>
          </Reveal>

          <ol className="mt-14 grid gap-8 sm:grid-cols-3 sm:gap-6">
            {pillars.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 90} className="border-t border-white/15 pt-6">
                <span className="display block text-5xl text-signal">0{i + 1}</span>
                <h3 className="wide mt-4 text-[0.9375rem] font-semibold uppercase tracking-[0.06em] text-bone">
                  {p.title}
                </h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-mist">{p.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>

        <Reveal delay={150} className="relative lg:col-span-5 lg:pt-28">
          <Photo
            image={images.kettlebells}
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="aspect-[4/5] w-full"
            tagPosition="tr"
          />
          <div className="absolute -bottom-5 left-5 right-5 flex items-center justify-between bg-signal-strong px-5 py-4 sm:left-auto sm:right-[-1rem] sm:w-72 lg:right-[-1.5rem]">
            <p className="eyebrow text-[0.6875rem] leading-snug text-white">
              Gimnasio local
              {' '}
              <br />
              <span className="text-white/80">El Puig · Horta Nord</span>
            </p>
            <span className="display text-4xl text-white">GEF</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
