import { useCallback, useState } from 'react'
import { prefersReducedMotion } from '../lib/viewTransition'
import { useIsMobile } from './useMediaQuery'

// O painel tem três fases: fechado, aberto e fechando (a animação de saída roda
// com o painel ainda montado; quando termina, ele sai da tela de vez).
type Phase = 'closed' | 'open' | 'closing'

export type MobileMenu = {
  open: boolean
  mounted: boolean
  closing: boolean
  toggle: () => void
  close: () => void
  finishClose: () => void
}

export function useMobileMenu(): MobileMenu {
  const isMobile = useIsMobile()
  const [phase, setPhase] = useState<Phase>('closed')
  const [wasMobile, setWasMobile] = useState(isMobile)

  // Passou para o desktop com o painel aberto: fecha, para não reabrir sozinho na volta
  if (wasMobile !== isMobile) {
    setWasMobile(isMobile)
    if (!isMobile) setPhase('closed')
  }

  // Com "reduzir movimento" não há animação de saída: fecha direto
  const close = useCallback(() => {
    setPhase((current) => (current === 'open' ? (prefersReducedMotion() ? 'closed' : 'closing') : current))
  }, [])

  const toggle = useCallback(() => {
    setPhase((current) => {
      if (current !== 'open') return 'open'
      return prefersReducedMotion() ? 'closed' : 'closing'
    })
  }, [])

  const finishClose = useCallback(() => {
    setPhase((current) => (current === 'closing' ? 'closed' : current))
  }, [])

  return {
    open: phase === 'open' && isMobile,
    mounted: phase !== 'closed' && isMobile,
    closing: phase === 'closing',
    toggle,
    close,
    finishClose,
  }
}
