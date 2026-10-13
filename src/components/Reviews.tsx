import { ArrowUpRight, Star } from 'lucide-react'
import { business, reviewThemes } from '../content/business'
import { SectionLabel } from './SectionHeading'
import { ConfirmNote } from './ui/Notes'
import { Reveal } from './ui/Reveal'

function Stars({ value }: { value: number }) {
  return (
    <div className="flex gap-1" aria-hidden="true">
      {Array.from({ length: 5 }, (_, i) => {
        const fill = Math.max(0, Math.min(1, value - i))
        return (
          <span key={i} className="relative inline-block h-6 w-6">
            <Star className="absolute inset-0 h-6 w-6 text-steel-700" fill="currentColor" strokeWidth={0} />
            <span className="absolute inset-0 overflow-hidden" style={{ width: `${fill * 100}%` }}>
              <Star className="h-6 w-6 text-signal" fill="currentColor" strokeWidth={0} />
            </span>
          </span>
        )
      })}
    </div>
  )
}

export function Reviews() {
  const { rating } = business
  const value = rating.value.toLocaleString('es-ES', { minimumFractionDigits: 1 })

  return (
    <section id="opiniones" aria-labelledby="opiniones-title" className="relative py-24 sm:py-32 lg:py-40">
      <div className="container-x grid gap-14 lg:grid-cols-12 lg:gap-10">
        <Reveal className="lg:col-span-5">
          <SectionLabel index="05">Opiniones</SectionLabel>
          <h2 id="opiniones-title" className="sr-only">
            Valoración en Google Maps
          </h2>
          <div className="mt-8 flex items-end gap-4">
            <p className="display text-[clamp(8rem,22vw,15rem)] leading-[0.8] text-bone">{value}</p>
            <p className="pb-3 text-mist">
              <span className="block text-2xl font-semibold text-bone">/ 5</span>
            </p>
          </div>
          <div className="mt-12 flex flex-wrap items-center gap-x-4 gap-y-2">
            <Stars value={rating.value} />
            <p className="text-bone">
              <span className="sr-only">Valoración media de {value} sobre 5, </span>
              <strong className="font-semibold">{rating.count} reseñas</strong> en {rating.source}
            </p>
          </div>
          <p className="mt-2 text-sm text-mist">Dato consultado en {rating.checkedAt}.</p>
          <a
            href={business.links.googleMaps}
            target="_blank"
            rel="noopener"
            className="btn btn-ghost mt-8"
          >
            Leer las reseñas en Google
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </Reveal>

        <Reveal delay={120} className="lg:col-span-6 lg:col-start-7">
          <h3 className="eyebrow text-mist">Lo que más se repite</h3>
          <ul className="mt-6 border-t border-white/15">
            {reviewThemes.map((t, i) => (
              <li
                key={t}
                className="group flex items-baseline gap-5 border-b border-white/15 py-5 transition-colors hover:bg-white/[0.02]"
              >
                <span className="eyebrow text-[0.6875rem] text-signal-text">0{i + 1}</span>
                <span className="display text-[clamp(1.75rem,3.4vw,2.6rem)] leading-none">{t}</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm leading-relaxed text-mist">
            Resumen propio de los temas recurrentes en las reseñas públicas. No se reproducen testimonios
            individuales.
          </p>
          <ConfirmNote className="mt-5">
            Si el gimnasio lo autoriza, se pueden destacar 2–3 reseñas reales con permiso de sus autores, o integrar
            el widget oficial de Google.
          </ConfirmNote>
        </Reveal>
      </div>
    </section>
  )
}
