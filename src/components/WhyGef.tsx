import { SectionLabel } from './SectionHeading'
import { Reveal } from './ui/Reveal'

/** Beneficios extraídos de patrones recurrentes en reseñas públicas (sin citas literales). */
const reasons = [
  {
    claim: 'Te llaman por tu nombre.',
    support: 'Ambiente familiar y gente cercana, del pueblo. Es lo primero que destacan quienes entrenan aquí.',
  },
  {
    claim: 'Hay material de verdad.',
    support: 'Maquinaria completa y bien cuidada, peso libre y mancuernas repetidas para no esperar.',
  },
  {
    claim: 'Te atiende quien lo lleva.',
    support: 'Los responsables están pendientes de cada persona y de cómo progresa su entrenamiento.',
  },
  {
    claim: 'Sin el ruido de una cadena.',
    support: 'Un gimnasio de tamaño humano, donde se entrena en serio y se saluda al entrar.',
  },
]

export function WhyGef() {
  return (
    <section
      id="por-que"
      aria-labelledby="porque-title"
      className="grid-lines relative overflow-hidden border-y border-white/10 bg-graphite py-24 sm:py-32 lg:py-40"
    >
      <div className="container-x">
        <Reveal>
          <SectionLabel index="04">Por qué GEF</SectionLabel>
          <h2 id="porque-title" className="display mt-6 max-w-5xl text-[clamp(3.25rem,9vw,8.5rem)]">
            Aquí no eres <span className="text-bone/40">un número de socio</span>
            <span className="text-signal">.</span>
          </h2>
        </Reveal>

        <ol className="mt-16 sm:mt-24">
          {reasons.map((r, i) => (
            <Reveal
              as="li"
              key={r.claim}
              delay={60}
              className={`grid gap-4 border-t border-white/15 py-8 sm:py-10 md:grid-cols-12 md:items-baseline md:gap-8`}
            >
              <p
                className={`display text-[clamp(2.5rem,5.5vw,4.75rem)] ${
                  i % 2 ? 'md:col-span-6 md:col-start-3' : 'md:col-span-7'
                }`}
              >
                <span className="mr-4 align-top text-[0.4em] text-signal">0{i + 1}</span>
                {r.claim}
              </p>
              <p className="max-w-sm text-[0.9375rem] leading-relaxed text-mist md:col-span-4 md:col-start-9">
                {r.support}
              </p>
            </Reveal>
          ))}
        </ol>
        <p className="mt-2 border-t border-white/15 pt-5 text-xs text-mist">
          Resumen propio de los temas que más se repiten en las reseñas públicas de Google Maps.
        </p>
      </div>
    </section>
  )
}
