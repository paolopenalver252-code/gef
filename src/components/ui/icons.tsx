import type { SVGProps } from 'react'

/** Lucide ya no incluye logotipos de marcas: icono de Instagram propio, mismo trazo. */
export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  )
}

/** Silueta de kettlebell: guiño al logotipo real de GEF (no es el logotipo). */
export function KettlebellGlyph(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="1em" height="1em" aria-hidden="true" {...props}>
      <path d="M10.5 14.5V9.5a5.5 5.5 0 0 1 11 0v5" fill="none" stroke="currentColor" strokeWidth="3.2" />
      <circle cx="16" cy="20.5" r="9" fill="currentColor" />
    </svg>
  )
}
