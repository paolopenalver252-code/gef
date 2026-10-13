import type { CSSProperties, ElementType, ReactNode } from 'react'
import { useReveal } from '../../lib/useReveal'

type Props = {
  as?: ElementType
  delay?: number
  className?: string
  children: ReactNode
}

export function Reveal({ as: Tag = 'div', delay = 0, className = '', children }: Props) {
  const ref = useReveal<HTMLElement>()
  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      style={{ '--reveal-delay': `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  )
}
