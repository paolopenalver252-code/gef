import type { ReactNode } from 'react'

/** Cabecera de sección: índice numerado + etiqueta, al estilo de la señalética de sala. */
export function SectionLabel({ index, children }: { index: string; children: ReactNode }) {
  return (
    <p className="eyebrow flex items-center gap-3 text-mist">
      <span className="text-signal-text">{index}</span>
      <span className="h-px w-8 bg-white/25" aria-hidden="true" />
      {children}
    </p>
  )
}
