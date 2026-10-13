import { createContext, useContext } from 'react'

export type NotesCtx = { show: boolean; toggle: () => void }

export const NotesContext = createContext<NotesCtx>({ show: true, toggle: () => {} })

export const useNotes = () => useContext(NotesContext)
