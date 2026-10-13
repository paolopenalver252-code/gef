import { useEffect, useState } from 'react'
import { Navigation, Phone } from 'lucide-react'
import { business } from '../content/business'

/** Barra de acción fija en móvil: llamar y cómo llegar, siempre a mano tras el hero. */
export function MobileActions() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const pastHero = window.scrollY > window.innerHeight * 0.8
      const contact = document.getElementById('contacto')
      const atContact = contact ? contact.getBoundingClientRect().top < window.innerHeight * 0.6 : false
      setVisible(pastHero && !atContact)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-30 border-t border-white/10 bg-ink/95 p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom,0px))] backdrop-blur-md transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] sm:hidden ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
      aria-hidden={!visible}
      inert={!visible}
    >
      <div className="grid grid-cols-[1.4fr_1fr] gap-2">
        <a href={business.phone.href} className="btn btn-primary">
          <Phone size={18} aria-hidden="true" />
          Llamar
        </a>
        <a href={business.links.directions} target="_blank" rel="noopener" className="btn btn-ghost">
          <Navigation size={18} aria-hidden="true" />
          Llegar
        </a>
      </div>
    </div>
  )
}
