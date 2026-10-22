import { useCallback, useMemo, useState, type MouseEvent, type ReactNode } from 'react'
import { remember } from '../lib/storage'
import { runViewTransition } from '../lib/viewTransition'
import { ThemeContext, type Theme } from './ThemeContext'

// O script do index.html já decidiu o tema antes da pintura (escolha salva ou sistema)
function readInitialTheme(): Theme {
  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light'
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(readInitialTheme)

  const toggleTheme = useCallback(
    (event?: MouseEvent<HTMLElement>) => {
      const next: Theme = theme === 'dark' ? 'light' : 'dark'
      const root = document.documentElement

      // O círculo do tema novo nasce no centro do botão
      if (event) {
        const rect = event.currentTarget.getBoundingClientRect()
        root.style.setProperty('--vx', `${rect.left + rect.width / 2}px`)
        root.style.setProperty('--vy', `${rect.top + rect.height / 2}px`)
      }

      remember('gv-theme', next)
      runViewTransition(() => {
        root.dataset.theme = next
        setTheme(next)
      }, 'vt-theme')
    },
    [theme],
  )

  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
