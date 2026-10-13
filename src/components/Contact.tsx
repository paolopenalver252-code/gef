import { useState } from 'react'
import { ArrowUpRight, MapPin, Navigation, Phone } from 'lucide-react'
import { business, fullAddress } from '../content/business'
import { SectionLabel } from './SectionHeading'
import { InstagramIcon } from './ui/icons'
import { ConfirmNote } from './ui/Notes'
import { Reveal } from './ui/Reveal'

/** La versión publicada como enlace (modo `artifact`) no admite iframes: allí el mapa se abre en Google Maps. */
const CAN_EMBED = import.meta.env.MODE !== 'artifact'

/** Mapa de Google bajo demanda: no carga cookies ni scripts de terceros hasta que se pide. */
function MapEmbed() {
  const [load, setLoad] = useState(false)
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden border border-white/10 bg-steel-900 sm:aspect-[16/10] lg:aspect-auto lg:h-full lg:min-h-[28rem]">
      {load ? (
        <iframe
          title={`Mapa: ${business.name}, ${fullAddress}`}
          src={business.links.mapEmbed}
          className="absolute inset-0 h-full w-full grayscale-[0.6]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : (
        <div className="grid-lines absolute inset-0 flex flex-col items-center justify-center gap-5 p-6 text-center">
          {/* Plano esquemático decorativo */}
          <svg className="absolute inset-0 h-full w-full opacity-40" aria-hidden="true" preserveAspectRatio="none" viewBox="0 0 400 300">
            <path d="M-10 210 L410 170" stroke="#35373c" strokeWidth="14" fill="none" />
            <path d="M120 -10 L160 310" stroke="#35373c" strokeWidth="10" fill="none" />
            <path d="M280 -10 L250 310" stroke="#26272b" strokeWidth="8" fill="none" />
            <path d="M-10 90 L410 120" stroke="#26272b" strokeWidth="6" fill="none" />
          </svg>
          <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-signal-strong text-white shadow-[0_0_0_10px_rgb(227_48_43/0.18)]">
            <MapPin size={26} aria-hidden="true" />
          </span>
          <p className="relative max-w-xs text-sm text-bone-dim">{fullAddress}</p>
          {CAN_EMBED ? (
            <>
              <button type="button" onClick={() => setLoad(true)} className="btn btn-ghost relative bg-ink/60">
                Cargar mapa de Google
              </button>
              <p className="relative text-xs text-mist">Al cargarlo, Google puede usar cookies.</p>
            </>
          ) : (
            <a
              href={business.links.googleMaps}
              target="_blank"
              rel="noopener"
              className="btn btn-ghost relative bg-ink/60"
            >
              Abrir en Google Maps
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          )}
        </div>
      )}
    </div>
  )
}

export function Contact() {
  const { address, hours, phone, links } = business
  return (
    <section id="contacto" aria-labelledby="contacto-title" className="relative py-24 sm:py-32 lg:py-40">
      <div className="container-x">
        <Reveal>
          <SectionLabel index="07">Contacto</SectionLabel>
          <h2 id="contacto-title" className="display mt-6 text-[clamp(3.25rem,9vw,8.5rem)]">
            Pásate por GEF<span className="text-signal">.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-5">
            {/* Teléfono protagonista: en móvil, llamada directa */}
            <p className="eyebrow text-mist">Teléfono</p>
            <a
              href={phone.href}
              className="display mt-3 block text-[clamp(3rem,8vw,5.25rem)] text-bone transition-colors hover:text-signal-text"
            >
              {phone.display}
            </a>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a href={phone.href} className="btn btn-primary">
                <Phone size={18} aria-hidden="true" />
                Pide información
              </a>
              <a href={links.directions} target="_blank" rel="noopener" className="btn btn-ghost">
                <Navigation size={18} aria-hidden="true" />
                Cómo llegar
              </a>
            </div>

            <dl className="mt-12 grid gap-8 border-t border-white/15 pt-8 sm:grid-cols-2">
              <div>
                <dt className="eyebrow text-mist">Dirección</dt>
                <dd className="mt-3 not-italic">
                  <address className="not-italic leading-relaxed text-bone">
                    {address.street}
                    <br />
                    {address.postalCode} {address.locality}
                    <br />
                    {address.region}
                  </address>
                  <a
                    href={links.googleMaps}
                    target="_blank"
                    rel="noopener"
                    className="link-line mt-3 inline-flex items-center gap-1 text-sm text-signal-text"
                  >
                    Ver en Google Maps <ArrowUpRight size={14} aria-hidden="true" />
                  </a>
                </dd>
              </div>

              <div>
                <dt className="eyebrow text-mist">Horario</dt>
                <dd className="mt-3">
                  <table className="w-full text-left">
                    <caption className="sr-only">Horario de apertura</caption>
                    <tbody>
                      {hours.rows.map((r) => (
                        <tr key={r.days} className="border-b border-white/10 last:border-0">
                          <th scope="row" className="py-1.5 pr-4 font-normal text-bone-dim">
                            {r.days}
                          </th>
                          <td className={`py-1.5 text-right font-semibold ${r.opens ? 'text-bone' : 'text-mist'}`}>
                            {r.time}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <p className="mt-3 text-xs text-mist">Según {hours.source}.</p>
                </dd>
              </div>

              <div className="sm:col-span-2">
                <dt className="eyebrow text-mist">Redes</dt>
                <dd className="mt-3">
                  <a
                    href={links.instagram}
                    target="_blank"
                    rel="noopener"
                    className="link-line inline-flex items-center gap-2 text-bone"
                  >
                    <InstagramIcon width={18} height={18} />
                    {links.instagramHandle}
                  </a>
                </dd>
              </div>
            </dl>

            <ConfirmNote className="mt-8">
              Horario tomado de Google Maps (coincide con dos directorios): confirmar. El perfil de Instagram es el
              oficial, pero no publica desde 2022. No se ha encontrado correo electrónico ni WhatsApp, así que no se
              incluyen; tampoco formulario, para no prometer respuestas que nadie atienda.
            </ConfirmNote>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-7">
            <MapEmbed />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
