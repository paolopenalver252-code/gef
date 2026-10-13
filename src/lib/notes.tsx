import { useCallback, useEffect, useState, type ReactNode } from 'react'
import { NotesContext } from './notes-context'

/**
 * "Notas de la propuesta": capa de anotaciones para enseñar la demo al gimnasio.
 * Marca imágenes provisionales y datos pendientes de confirmar.
 * Se puede ocultar para ver el diseño limpio.
 */
const KEY = 'gef-demo-notes'

export function NotesProvider({ children }: { children: ReactNode }) {
  const [show, setShow] = useState(() => {
    try {
      return localStorage.getItem(KEY) !== 'off'
    } catch {
      return true
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(KEY, show ? 'on' : 'off')
    } catch {
      /* almacenamiento no disponible: no pasa nada */
    }
  }, [show])

  const toggle = useCallback(() => setShow((s) => !s), [])
  return <NotesContext.Provider value={{ show, toggle }}>{children}</NotesContext.Provider>
}
