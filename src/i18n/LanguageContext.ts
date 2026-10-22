import { createContext, useContext } from 'react'
import type { Dict } from './dictionary'

export type Lang = 'pt' | 'en'

export type LanguageContextValue = {
  lang: Lang
  t: Dict
  setLang: (lang: Lang) => void
}

export const LanguageContext = createContext<LanguageContextValue | null>(null)

export function useLanguage() {
  const value = useContext(LanguageContext)
  if (!value) throw new Error('useLanguage precisa estar dentro de <LanguageProvider>')
  return value
}
