import type { MouseEvent } from 'react'
import { MOBILE_QUERY } from '../hooks/useMediaQuery'
import { prefersReducedMotion } from './viewTransition'

const easeInOutQuart = (t: number) => (t < 0.5 ? 8 * t ** 4 : 1 - (-2 * t + 2) ** 4 / 2)

let stopCurrent: (() => void) | null = null

// Ao chegar, o foco vai para a seção (leitor de tela e teclado continuam dali)
function focusSection(target: HTMLElement) {
  if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1')
  target.focus({ preventScroll: true })
}

// Rolagem suave até a seção, parando 72px abaixo do topo (68px no celular)
// para o menu fixo não esconder o título. Cancela se a pessoa rolar ou tocar.
export function scrollToSection(id: string) {
  const target = document.getElementById(id)
  if (!target) return false

  const scroller = document.scrollingElement ?? document.documentElement
  const offset = window.matchMedia(MOBILE_QUERY).matches ? 68 : 72
  const start = scroller.scrollTop
  const end = id === 'topo' ? 0 : Math.max(0, target.getBoundingClientRect().top + start - offset)
  const distance = end - start

  stopCurrent?.()

  if (prefersReducedMotion() || Math.abs(distance) < 2) {
    scroller.scrollTop = end
    focusSection(target)
    return true
  }

  const duration = Math.min(1300, Math.max(550, 420 + Math.abs(distance) * 0.22))
  let startTime: number | null = null
  let frame = 0
  let stopped = false

  const stop = () => {
    stopped = true
    cancelAnimationFrame(frame)
    window.removeEventListener('wheel', stop)
    window.removeEventListener('touchstart', stop)
    if (stopCurrent === stop) stopCurrent = null
  }

  const step = (now: number) => {
    if (stopped) return
    startTime ??= now
    const progress = Math.min(1, (now - startTime) / duration)
    scroller.scrollTop = start + distance * easeInOutQuart(progress)
    if (progress < 1) {
      frame = requestAnimationFrame(step)
    } else {
      stop()
      focusSection(target)
    }
  }

  window.addEventListener('wheel', stop, { passive: true })
  window.addEventListener('touchstart', stop, { passive: true })
  stopCurrent = stop
  frame = requestAnimationFrame(step)
  return true
}

// onClick dos links "#secao": troca o salto do navegador pela rolagem suave
export function handleAnchorClick(event: MouseEvent<HTMLAnchorElement>) {
  if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
  const href = event.currentTarget.getAttribute('href')
  if (!href?.startsWith('#')) return
  if (scrollToSection(href.slice(1))) event.preventDefault()
}
