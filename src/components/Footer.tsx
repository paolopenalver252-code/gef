import { business, fullAddress } from '../content/business'
import { allImages } from '../content/images'
import { navItems } from '../content/nav'
import { Logo } from './Logo'
import { InstagramIcon } from './ui/icons'

export function Footer() {
  const credits = allImages.filter((i) => !i.official && i.credit)
  return (
    <footer className="border-t border-white/10 bg-graphite pb-28 pt-16 sm:pb-12">
      <div className="container-x">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-mist">
              {business.name}. Gimnasio de fuerza y musculación en El Puig de Santa Maria, Valencia.
            </p>
          </div>

          <div className="md:col-span-3">
            <h2 className="eyebrow text-mist">Visítanos</h2>
            <address className="mt-4 text-sm not-italic leading-relaxed text-bone">
              {fullAddress}
              <br />
              <a href={business.phone.href} className="link-line mt-2 inline-block font-semibold">
                {business.phone.display}
              </a>
            </address>
            <a
              href={business.links.instagram}
              target="_blank"
              rel="noopener"
              className="link-line mt-4 inline-flex items-center gap-2 text-sm text-bone"
            >
              <InstagramIcon width={16} height={16} />
              Instagram
            </a>
          </div>

          <nav aria-label="Pie de página" className="md:col-span-4">
            <h2 className="eyebrow text-mist">Secciones</h2>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="link-line text-bone">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-16 space-y-3 border-t border-white/10 pt-6 text-xs leading-relaxed text-mist">
          <p>
            <strong className="font-semibold text-bone-dim">Propuesta conceptual de diseño web</strong> para{' '}
            {business.name}. No es la web oficial del gimnasio ni ha sido aprobada por él. Aviso legal y política de
            privacidad pendientes de los datos del titular.
          </p>
          <p>
            Fotografías provisionales (licencia Unsplash), a sustituir por fotos oficiales:{' '}
            {credits.map((img, i) => (
              <span key={img.id}>
                <a href={img.credit!.url} target="_blank" rel="noopener" className="link-line">
                  {img.credit!.author}
                </a>
                {i < credits.length - 1 ? ', ' : '.'}
              </span>
            ))}
          </p>
        </div>
      </div>
    </footer>
  )
}
