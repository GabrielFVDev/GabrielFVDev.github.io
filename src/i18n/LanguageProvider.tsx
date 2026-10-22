import { useCallback, useMemo, useState, type ReactNode } from 'react'
import { remember } from '../lib/storage'
import { runViewTransition } from '../lib/viewTransition'
import { dictionaries } from './dictionary'
import { LanguageContext, type Lang } from './LanguageContext'

// O script do index.html já decidiu o idioma (escolha salva ou idioma do navegador)
function readInitialLang(): Lang {
  return document.documentElement.lang === 'en' ? 'en' : 'pt'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(readInitialLang)

  const setLang = useCallback(
    (next: Lang) => {
      if (next === lang) return
      remember('gv-lang', next)
      // Crossfade padrão do View Transition (250ms); o lang do <html> avisa os leitores de tela
      runViewTransition(() => {
        document.documentElement.lang = dictionaries[next].meta.htmlLang
        setLangState(next)
      })
    },
    [lang],
  )

  const value = useMemo(() => ({ lang, t: dictionaries[lang], setLang }), [lang, setLang])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
