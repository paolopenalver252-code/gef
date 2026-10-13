import { ArrowRight, Phone, Star } from 'lucide-react'
import { business } from '../content/business'
import { images } from '../content/images'
import { Photo } from './ui/Photo'

export function Hero() {
  const { rating, hours, address } = business
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="relative -mt-16 flex min-h-[100svh] flex-col overflow-hidden lg:-mt-[4.5rem]"
    >
      {/* Imagen principal: carga prioritaria, sin lazy (LCP). */}
      <Photo
        image={images.hero}
        sizes="100vw"
        priority
        fill
        imgClassName="scale-[1.02]"
        tagPosition="br"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/75 to-ink/10" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-ink/40" aria-hidden="true" />

      {/* Coordenadas reales del local: detalle gráfico */}
      <p
        className="eyebrow absolute right-4 top-1/2 hidden origin-right -translate-y-1/2 rotate-90 text-[0.625rem] text-bone/50 xl:block"
        aria-hidden="true"
      >
        39.5891° N · 0.3068° W — El Puig de Santa Maria
      </p>

      <div className="container-x relative flex flex-1 flex-col justify-end pb-8 pt-32 sm:pb-12 lg:pt-40">
        <div className="max-w-6xl">
          <h1 id="hero-title">
            <span className="eyebrow mb-5 flex items-center gap-3 text-bone/85 sm:mb-7">
              <span className="hidden h-px w-10 bg-signal sm:block" aria-hidden="true" />
              Gimnasio en El Puig de Santa Maria
            </span>{' '}
            <span className="display block text-[clamp(4.25rem,10.2vw,10.5rem)] text-bone">
              Fuerza
              {' '}
              <br />
              sin franquicia<span className="text-signal">.</span>
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-[1.0625rem] leading-relaxed text-bone/85 sm:mt-8 sm:text-lg">
            Máquinas, peso libre y sacos de boxeo en un gimnasio de El Puig con nombre propio. Material para
            entrenar en serio y un trato cercano, de los que ya no quedan en las cadenas.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={business.phone.href} className="btn btn-primary">
              <Phone size={18} aria-hidden="true" />
              Pide información
            </a>
            <a href="#instalaciones" className="btn btn-ghost">
              Ver instalaciones
              <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Señales de confianza verificables */}
        <dl className="mt-12 grid grid-cols-1 border-t border-white/15 sm:mt-16 sm:grid-cols-3">
          <div className="flex items-center justify-between gap-4 border-b border-white/10 py-4 sm:block sm:border-b-0 sm:border-r sm:py-5 sm:pr-6">
            <dt className="eyebrow text-[0.625rem] text-mist">Google Maps</dt>
            <dd className="sm:mt-2">
              <a
                href={business.links.googleMaps}
                target="_blank"
                rel="noopener"
                className="group inline-flex items-center gap-2 text-bone"
              >
                <Star size={16} className="fill-signal text-signal" aria-hidden="true" />
                <span className="font-semibold">{rating.value.toLocaleString('es-ES')} / 5</span>
                <span className="link-line text-sm text-bone/70 group-hover:text-bone">{rating.count} reseñas</span>
              </a>
            </dd>
          </div>
          <div className="flex items-center justify-between gap-4 border-b border-white/10 py-4 sm:block sm:border-b-0 sm:border-r sm:px-6 sm:py-5">
            <dt className="eyebrow text-[0.625rem] text-mist">Horario</dt>
            <dd className="text-right font-semibold text-bone sm:mt-2 sm:text-left">
              {hours.rows[0].short} {hours.rows[0].time.replace(':00', '').replace(':00', '')}
              <span className="text-bone/40"> · </span>
              {hours.rows[1].short} {hours.rows[1].time.replace(':00', '').replace(':00', '')}
            </dd>
          </div>
          <div className="flex items-center justify-between gap-4 py-4 sm:block sm:py-5 sm:pl-6">
            <dt className="eyebrow text-[0.625rem] text-mist">Dónde</dt>
            <dd className="text-right font-semibold text-bone sm:mt-2 sm:text-left">
              <a href="#contacto" className="link-line">
                {address.street}
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
