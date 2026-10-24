import { useEffect } from 'react'
import { useMediaQuery } from './useMediaQuery'

// Firefox (e Safari antes do 26) não tem animation-timeline
const needsScrollFallback = typeof CSS !== 'undefined' && !CSS.supports('animation-timeline: view()')

const clamp = (n: number) => Math.min(1, Math.max(0, n))

// "entry 0% cover 38%": as duas pontas da faixa do --range
const RANGE_EDGE = /(entry|cover)\s+(-?[\d.]+)%/g

// Topo do elemento na página sem o translate/scale da própria animação, como o view() do CSS mede
function pageTop(el: HTMLElement) {
  let top = 0
  for (let node: HTMLElement | null = el; node; node = node.offsetParent as HTMLElement | null) {
    top += node.offsetTop
  }
  return top
}

// Onde o navegador não liga animação à rolagem, leva as entradas .up e .zoom
// (styles/_motion.scss) pela rolagem em JS, com a mesma faixa --range do CSS
export function useRevealFallback() {
  const reduceMotion = useMediaQuery('(prefers-reduced-motion: reduce)')
  const enabled = needsScrollFallback && !reduceMotion

  useEffect(() => {
    if (!enabled) return

    const root = document.documentElement
    let frame = 0

    // Mesmas contas do view(): a faixa "entry" mede menor(altura, tela) e a "cover",
    // altura + tela, as duas a partir do topo do elemento chegando ao pé da tela
    const update = () => {
      frame = 0
      const viewport = root.clientHeight
      const els = Array.from(document.querySelectorAll<HTMLElement>('.up, .zoom'))

      // Lê tudo antes de escrever, para o layout não ser recalculado a cada elemento
      const progress = els.map((el) => {
        const height = el.offsetHeight
        const entered = window.scrollY + viewport - pageTop(el)
        const range = getComputedStyle(el).getPropertyValue('--range')
        const [start, end] = Array.from(range.matchAll(RANGE_EDGE), ([, name, percent]) => {
          const length = name === 'entry' ? Math.min(height, viewport) : height + viewport
          return (Number(percent) / 100) * length
        })
        return end > start ? clamp((entered - start) / (end - start)) : 1
      })

      els.forEach((el, i) => el.style.setProperty('--reveal', String(progress[i])))
    }
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    root.classList.add('reveal-fallback')
    update()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      root.classList.remove('reveal-fallback')
    }
  }, [enabled])
}
