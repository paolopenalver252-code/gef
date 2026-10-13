/**
 * Inventario de imágenes.
 *
 * Todas las imágenes actuales son PROVISIONALES (licencia Unsplash) y deben
 * sustituirse por fotografías oficiales de GEF antes de publicar.
 * Para cambiar una foto: deja los nuevos archivos en /public/images/ y
 * actualiza `src`, `alt`, `official` y `credit` en su entrada.
 */

export type SiteImage = {
  id: string
  /** Ruta base sin sufijo de ancho ni extensión. Se esperan `-800.webp` y `-1600.webp`. */
  base: string
  width: number
  height: number
  alt: string
  /** Qué zona o uso del gimnasio representa en la propuesta. */
  represents: string
  official: boolean
  credit?: { author: string; url: string }
  /** Encuadre para object-position. */
  focus?: string
  /** Versión extra grande opcional (2200w) para imágenes a pantalla completa. */
  large?: string
}

export function srcSet(image: SiteImage) {
  const set = `${image.base}-800.webp 800w, ${image.base}-1600.webp 1600w`
  return image.large ? `${set}, ${image.large} 2200w` : set
}

const P = `${import.meta.env.BASE_URL}images/provisional`

export const images = {
  hero: {
    id: 'hero',
    base: `${P}/hero-racks`,
    width: 1600,
    height: 1067,
    alt: 'Sala de fuerza en penumbra con racks, barra olímpica cargada en el suelo y discos (imagen provisional)',
    represents: 'Sala de musculación y peso libre',
    official: false,
    credit: { author: 'Mirko Meister', url: 'https://unsplash.com/photos/j4T5z94b8ns' },
    focus: '62% 60%',
    large: `${P}/hero-racks-2200.webp`,
  },
  kettlebells: {
    id: 'kettlebells',
    base: `${P}/kettlebells`,
    width: 1600,
    height: 1067,
    alt: 'Fila de kettlebells negras sobre suelo de caucho (imagen provisional)',
    represents: 'Material funcional',
    official: false,
    credit: { author: 'Heidi Erickson', url: 'https://unsplash.com/photos/CPSjcuuV8E8' },
    focus: '45% 60%',
  },
  barra: {
    id: 'barra',
    base: `${P}/barra-peso`,
    width: 1600,
    height: 1067,
    alt: 'Barras olímpicas cargadas con discos sobre el suelo de la sala (imagen provisional)',
    represents: 'Zona de peso libre',
    official: false,
    credit: { author: 'Benjamin Brunner', url: 'https://unsplash.com/photos/wcOGQeT1jIw' },
    focus: '40% 50%',
  },
  mancuernas: {
    id: 'mancuernas',
    base: `${P}/mancuernas`,
    width: 1600,
    height: 2400,
    alt: 'Mancuernas ordenadas en su soporte (imagen provisional)',
    represents: 'Zona de mancuernas',
    official: false,
    credit: { author: 'Stefan Vibes', url: 'https://unsplash.com/photos/zudOP2bkdXc' },
    focus: '50% 55%',
  },
  sacos: {
    id: 'sacos',
    base: `${P}/sacos-boxeo`,
    width: 1600,
    height: 2126,
    alt: 'Sacos de boxeo colgados de cadenas en una sala oscura (imagen provisional)',
    represents: 'Zona de boxeo',
    official: false,
    credit: { author: 'Sam Davis', url: 'https://unsplash.com/photos/fTe0U5LmJwQ' },
    focus: '55% 45%',
  },
  cuerdas: {
    id: 'cuerdas',
    base: `${P}/cuerdas`,
    width: 1600,
    height: 1067,
    alt: 'Hombre entrenando con cuerdas de batalla frente a una pared de ladrillo (imagen provisional)',
    represents: 'Entrenamiento funcional',
    official: false,
    credit: { author: 'Ken Mathiasen', url: 'https://unsplash.com/photos/UXOf3-uwCQg' },
    focus: '62% 40%',
  },
  pesoMuerto: {
    id: 'peso-muerto',
    base: `${P}/peso-muerto`,
    width: 1600,
    height: 1067,
    alt: 'Persona preparando un peso muerto con barra y discos (imagen provisional)',
    represents: 'Entrenamiento de fuerza',
    official: false,
    credit: { author: 'Victor Freitas', url: 'https://unsplash.com/photos/vqDAUejnwKw' },
    focus: '55% 45%',
  },
  magnesio: {
    id: 'magnesio',
    base: `${P}/magnesio`,
    width: 1600,
    height: 1067,
    alt: 'Mano sacudiendo magnesio sobre fondo negro (imagen provisional)',
    represents: 'Detalle de ambiente',
    official: false,
    credit: { author: 'Herbert Goetsch', url: 'https://unsplash.com/photos/jybQOCm2jXo' },
    focus: '40% 45%',
  },
  guantes: {
    id: 'guantes',
    base: `${P}/guantes`,
    width: 1600,
    height: 1067,
    alt: 'Pera de boxeo colgada en penumbra (imagen provisional)',
    represents: 'Detalle de boxeo',
    official: false,
    credit: { author: 'Mike Cox', url: 'https://unsplash.com/photos/LpWreRGMK74' },
    focus: '72% 50%',
  },
  filaMancuernas: {
    id: 'fila-mancuernas',
    base: `${P}/fila-mancuernas`,
    width: 1600,
    height: 1035,
    alt: 'Fila de mancuernas en primer plano (imagen provisional)',
    represents: 'Detalle de material',
    official: false,
    credit: { author: 'Jason Grant', url: 'https://unsplash.com/photos/m4Jqyv5VwqY' },
    focus: '50% 50%',
  },
} satisfies Record<string, SiteImage>

export const galleryOrder: SiteImage[] = [
  images.sacos,
  images.pesoMuerto,
  images.filaMancuernas,
  images.magnesio,
  images.barra,
  images.mancuernas,
  images.guantes,
  images.cuerdas,
  images.kettlebells,
]

export const allImages: SiteImage[] = Object.values(images)
