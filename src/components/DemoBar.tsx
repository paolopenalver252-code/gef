import { Eye, EyeOff } from 'lucide-react'
import { useNotes } from '../lib/notes-context'

/** Aviso permanente: es una propuesta conceptual, no la web oficial. */
export function DemoBar() {
  const { show, toggle } = useNotes()
  return (
    <div className="relative z-50 border-b border-white/10 bg-graphite text-[0.75rem] text-bone-dim">
      <div className="container-x flex min-h-9 items-center justify-between gap-3 py-1.5">
        <p className="leading-tight">
          <span className="font-semibold text-bone">Propuesta de diseño web</span>
          <span className="hidden sm:inline"> · Demo conceptual para Gimnasio GEF Alto Rendimiento. No es la web oficial.</span>
          <span className="sm:hidden"> · No es la web oficial</span>
        </p>
        <button
          type="button"
          onClick={toggle}
          aria-pressed={show}
          className="inline-flex shrink-0 items-center gap-1.5 rounded-sm border border-white/15 px-2.5 py-1 font-semibold uppercase tracking-[0.12em] text-[0.625rem] text-bone transition-colors hover:border-white/40"
        >
          {show ? <EyeOff size={13} aria-hidden="true" /> : <Eye size={13} aria-hidden="true" />}
          {show ? 'Ocultar notas' : 'Ver notas'}
        </button>
      </div>
    </div>
  )
}
