import type { ReactNode } from 'react'
import { useNotes } from '../../lib/notes-context'

const pos = {
  tl: 'left-3 top-3',
  tr: 'right-3 top-3',
  bl: 'left-3 bottom-3',
  br: 'right-3 bottom-3',
}

/** Etiqueta discreta sobre fotos que deben sustituirse por fotografías oficiales. */
export function ProvisionalTag({ position = 'tl' }: { position?: keyof typeof pos }) {
  const { show } = useNotes()
  if (!show) return null
  return (
    <span
      className={`pointer-events-none absolute ${pos[position]} z-10 inline-flex items-center gap-1.5 bg-ink/80 px-2 py-1 text-[0.625rem] font-semibold uppercase tracking-[0.14em] text-bone backdrop-blur-sm`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-signal" aria-hidden="true" />
      Foto provisional
    </span>
  )
}

/** Nota de la propuesta: dato a confirmar con el gimnasio. */
export function ConfirmNote({ children, className = '' }: { children: ReactNode; className?: string }) {
  const { show } = useNotes()
  if (!show) return null
  return (
    <p
      className={`flex items-start gap-2 border-l-2 border-signal bg-signal/[0.07] px-3 py-2 text-[0.8125rem] leading-snug text-bone-dim ${className}`}
    >
      <span className="eyebrow mt-px shrink-0 text-[0.625rem] text-signal-text">Nota</span>
      <span>{children}</span>
    </p>
  )
}
