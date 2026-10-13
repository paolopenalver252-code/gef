import { useEffect, useRef, useState } from 'react'
import { Menu, Phone, X, MapPin } from 'lucide-react'
import { business } from '../content/business'
import { InstagramIcon } from './ui/icons'
import { navItems } from '../content/nav'
import { Logo } from './Logo'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [menuTop, setMenuTop] = useState(64)
  const headerRef = useRef<HTMLElement>(null)
  // Destino pendiente: se navega al cerrar el menú, cuando el scroll ya está desbloqueado.
  const pendingHash = useRef<string | null>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Menú móvil: bloqueo de scroll, Escape, foco atrapado y retorno del foco.
  useEffect(() => {
    if (!open) return
    const menu = menuRef.current
    const button = buttonRef.current
    document.body.style.overflow = 'hidden'
    setMenuTop(headerRef.current?.getBoundingClientRect().bottom ?? 64)
    const focusables = () =>
      [button, ...Array.from(menu?.querySelectorAll<HTMLElement>('a[href], button') ?? [])].filter(
        (el): el is HTMLElement => !!el,
      )
    focusables()[1]?.focus()

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
      if (e.key === 'Tab') {
        const items = focusables()
        const first = items[0]
        const last = items[items.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }
    const onResize = () => window.innerWidth >= 1024 && setOpen(false)
    document.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      document.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
      document.body.style.overflow = ''
      const hash = pendingHash.current
      pendingHash.current = null
      if (hash) {
        // Enlace del menú: ir a la sección y llevar el foco a ella (teclado / lector de pantalla)
        const target = document.querySelector<HTMLElement>(hash)
        target?.scrollIntoView({ behavior: 'smooth' })
        target?.setAttribute('tabindex', '-1')
        target?.focus({ preventScroll: true })
        try {
          history.replaceState(null, '', hash)
        } catch {
          /* entorno sin historial (vista embebida) */
        }
      } else {
        button?.focus({ preventScroll: true })
      }
    }
  }, [open])

  return (
    <>
      <header
        ref={headerRef}
        className={`sticky top-[env(safe-area-inset-top,0px)] z-40 transition-[background-color,border-color,backdrop-filter] duration-500 ${
          scrolled || open
            ? 'border-b border-white/10 bg-ink/90 backdrop-blur-md'
            : 'border-b border-transparent bg-gradient-to-b from-ink/70 to-transparent'
        }`}
      >
        <div className="container-x flex h-16 items-center justify-between gap-6 lg:h-[4.5rem]">
          <a href="#inicio" className="shrink-0" aria-label={`${business.name}: volver al inicio`}>
            <Logo />
          </a>

          <nav aria-label="Principal" className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="link-line wide py-1 text-[0.8125rem] font-medium uppercase tracking-[0.1em] text-bone/85 transition-colors hover:text-bone"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <a href={business.phone.href} className="btn btn-primary hidden min-h-10 px-4 py-2 sm:inline-flex">
              <Phone size={16} aria-hidden="true" />
              <span>Llamar</span>
            </a>
            <button
              ref={buttonRef}
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center text-bone lg:hidden"
              aria-expanded={open}
              aria-controls="menu-movil"
              aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
              onClick={() => setOpen((o) => !o)}
            >
              {open ? <X size={26} aria-hidden="true" /> : <Menu size={26} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </header>

      {/* Menú móvil: fuera del header (su backdrop-filter rompería el position: fixed) */}
      <div
        id="menu-movil"
        ref={menuRef}
        hidden={!open}
        style={{ top: menuTop }}
        className="fixed inset-x-0 bottom-0 z-40 overflow-y-auto bg-ink lg:hidden"
      >
        <div className="grid-lines flex min-h-full flex-col justify-between px-4 pb-8 pt-6 sm:px-8">
          <nav aria-label="Menú móvil">
            <ol className="border-t border-white/10">
              {navItems.map((item, i) => (
                <li
                  key={item.href}
                  className="border-b border-white/10"
                  style={{ animation: `lb-in .5s ${i * 50}ms both cubic-bezier(.16,1,.3,1)` }}
                >
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault()
                      pendingHash.current = item.href
                      setOpen(false)
                    }}
                    className="flex items-baseline gap-4 py-4 text-bone"
                  >
                    <span className="eyebrow text-signal-text">0{i + 1}</span>
                    <span className="display text-5xl">{item.label}</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="mt-10 space-y-3">
            <a href={business.phone.href} className="btn btn-primary w-full">
              <Phone size={18} aria-hidden="true" />
              Llamar · {business.phone.display}
            </a>
            <div className="grid grid-cols-2 gap-3">
              <a href={business.links.directions} target="_blank" rel="noopener" className="btn btn-ghost px-3">
                <MapPin size={16} aria-hidden="true" />
                Cómo llegar
              </a>
              <a href={business.links.instagram} target="_blank" rel="noopener" className="btn btn-ghost px-3">
                <InstagramIcon width={16} height={16} />
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
