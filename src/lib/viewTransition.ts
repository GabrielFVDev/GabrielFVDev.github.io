import { flushSync } from 'react-dom'

export function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

// Troca de tema e idioma com View Transition. O update precisa mudar o DOM
// de forma síncrona (flushSync), senão a transição captura a tela antiga duas vezes.
// Sem suporte ou com "reduzir movimento", a troca é direta.
export function runViewTransition(update: () => void, className?: string) {
  if (typeof document.startViewTransition !== 'function' || prefersReducedMotion()) {
    update()
    return
  }

  const root = document.documentElement
  if (className) root.classList.add(className)
  const done = () => {
    if (className) root.classList.remove(className)
  }

  const transition = document.startViewTransition(() => flushSync(update))
  transition.finished.then(done, done)
}
