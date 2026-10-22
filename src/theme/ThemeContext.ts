import { createContext, useContext, type MouseEvent } from 'react'

export type Theme = 'light' | 'dark'

export type ThemeContextValue = {
  theme: Theme
  toggleTheme: (event?: MouseEvent<HTMLElement>) => void
}

export const ThemeContext = createContext<ThemeContextValue | null>(null)

export function useTheme() {
  const value = useContext(ThemeContext)
  if (!value) throw new Error('useTheme precisa estar dentro de <ThemeProvider>')
  return value
}
