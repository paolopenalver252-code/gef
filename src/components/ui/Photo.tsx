import { srcSet, type SiteImage } from '../../content/images'
import { ProvisionalTag } from './Notes'

type Props = {
  image: SiteImage
  /** Atributo sizes del srcset. */
  sizes: string
  className?: string
  imgClassName?: string
  priority?: boolean
  /** Muestra la etiqueta de imagen provisional (si aplica). */
  tag?: boolean
  tagPosition?: 'tl' | 'tr' | 'bl' | 'br'
  /** Ocupa todo el contenedor posicionado (absolute inset-0). */
  fill?: boolean
}

/** Imagen responsive con encuadre controlado y tratamiento B/N. */
export function Photo({
  image,
  sizes,
  className = '',
  imgClassName = '',
  priority = false,
  tag = true,
  tagPosition = 'tl',
  fill = false,
}: Props) {
  return (
    <div className={`${fill ? 'absolute inset-0' : 'relative'} overflow-hidden bg-steel-900 ${className}`}>
      <img
        src={`${image.base}-800.webp`}
        srcSet={srcSet(image)}
        sizes={sizes}
        width={image.width}
        height={image.height}
        alt={image.alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        fetchPriority={priority ? 'high' : 'auto'}
        className={`grade h-full w-full object-cover ${imgClassName}`}
        style={{ objectPosition: image.focus ?? '50% 50%' }}
      />
      {tag && !image.official && <ProvisionalTag position={tagPosition} />}
    </div>
  )
}
