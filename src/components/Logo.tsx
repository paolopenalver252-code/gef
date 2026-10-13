import { KettlebellGlyph } from './ui/icons'

/**
 * Logotipo TIPOGRÁFICO PROVISIONAL.
 * GEF tiene un logotipo oficial (kettlebell con "GEF" en banda roja, visible en Instagram);
 * sustituir este componente por el archivo vectorial oficial cuando lo facilite el gimnasio.
 */
export function Logo({ className = '' }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2.5 text-bone ${className}`}>
      <KettlebellGlyph className="h-7 w-7 text-signal" />
      <span className="display text-[2rem] leading-none tracking-tight">GEF</span>
      <span className="h-7 w-px bg-white/25" aria-hidden="true" />
      <span className="eyebrow text-[0.5625rem] leading-[1.15] tracking-[0.2em] text-bone/80">
        Alto
        {' '}
        <br />
        Rendimiento
      </span>
    </span>
  )
}
