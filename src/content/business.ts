/**
 * Datos del negocio usados en toda la web.
 *
 * Cada dato lleva su estado de verificación. Antes de publicar la web real,
 * revisa todo lo marcado como `confirmar` con el gimnasio.
 *
 * Investigación realizada el 13/10/2026 (ver docs/INVESTIGACION.md).
 */

export type Status = 'verificado' | 'confirmar'

export const business = {
  name: 'Gimnasio GEF Alto Rendimiento',
  shortName: 'GEF',
  tagline: 'Alto Rendimiento',

  address: {
    street: 'C. Blasco Ibáñez, 2',
    postalCode: '46540',
    locality: 'El Puig de Santa Maria',
    region: 'Valencia',
    country: 'ES',
  },
  geo: { lat: 39.5890782, lng: -0.3067827 },

  phone: {
    display: '695 80 34 50',
    href: 'tel:+34695803450',
    e164: '+34695803450',
  },

  links: {
    // Ficha de Google Maps (enlace por CID, verificado).
    googleMaps: 'https://maps.google.com/?cid=1574901698411857197',
    directions:
      'https://www.google.com/maps/dir/?api=1&destination=Gimnasio+GEF+Alto+Rendimiento%2C+C.+Blasco+Ib%C3%A1%C3%B1ez+2%2C+46540+El+Puig+de+Santa+Maria',
    mapEmbed:
      'https://www.google.com/maps?q=Gimnasio+GEF+Alto+Rendimiento,+C.+Blasco+Ib%C3%A1%C3%B1ez+2,+46540+El+Puig+de+Santa+Maria&z=17&output=embed',
    // Perfil oficial verificado (logotipo y bio coinciden). Última publicación: sept. 2022.
    instagram: 'https://www.instagram.com/gefgimnasio/',
    instagramHandle: '@gefgimnasio',
  },

  rating: {
    value: 4.6,
    count: 79,
    source: 'Google Maps',
    checkedAt: 'octubre de 2026',
    status: 'verificado' as Status,
  },

  /** Horario publicado en Google Maps; coincide con dos directorios. */
  hours: {
    status: 'confirmar' as Status,
    source: 'Google Maps, consultado en octubre de 2026',
    rows: [
      { days: 'Lunes a viernes', short: 'L–V', time: '8:00 – 22:00', opens: '08:00', closes: '22:00', dayCodes: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'] },
      { days: 'Sábado', short: 'S', time: '9:00 – 14:00', opens: '09:00', closes: '14:00', dayCodes: ['Saturday'] },
      { days: 'Domingo', short: 'D', time: 'Cerrado', opens: null, closes: null, dayCodes: ['Sunday'] },
    ],
  },
} as const

export const fullAddress = `${business.address.street}, ${business.address.postalCode} ${business.address.locality}, ${business.address.region}`

/** Temas recurrentes en las reseñas públicas de Google (resumen propio, sin citas). */
export const reviewThemes = [
  'Ambiente cercano y familiar',
  'Maquinaria completa y bien cuidada',
  'Peso libre, barras y zona de calistenia',
  'Atención personal de los responsables',
  'Gente del pueblo, trato de tú a tú',
] as const
