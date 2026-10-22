import { useEffect, useMemo, useRef } from 'react'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import { useLanguage } from '../../i18n/LanguageContext'
import { cx } from '../../lib/cx'
import { splitStatement } from '../../lib/statement'
import styles from './Statement.module.scss'

// Firefox (e Safari antes do 26) não tem animation-timeline. Lá, a rolagem acende as
// palavras por JS, com a mesma faixa de cada palavra; onde há suporte, o CSS faz tudo sozinho.
const needsScrollFallback = typeof CSS !== 'undefined' && !CSS.supports('animation-timeline: view()')

const clamp = (n: number) => Math.min(1, Math.max(0, n))

export function Statement() {
  const { t } = useLanguage()
  const words = useMemo(() => splitStatement(t.statement.text), [t.statement.text])
  const reduceMotion = useMediaQuery('(prefers-reduced-motion: reduce)')
  const scrollFallback = needsScrollFallback && !reduceMotion

  const sectionRef = useRef<HTMLElement>(null)
  const textRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const text = textRef.current
    if (!scrollFallback || !section || !text) return

    const spans = Array.from(text.children) as HTMLElement[]
    let frame = 0

    // Mesmo cálculo do "contain" do CSS: 0% quando o topo da seção chega ao topo da tela,
    // 100% quando o fim da seção chega ao fim da tela
    const update = () => {
      frame = 0
      const rect = section.getBoundingClientRect()
      const range = rect.height - window.innerHeight
      const progress = range > 0 ? clamp(-rect.top / range) * 100 : 0
      spans.forEach((span, i) => {
        const { start, end } = words[i]
        span.style.setProperty('--lit', `${clamp((progress - start) / (end - start)) * 100}%`)
      })
    }
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
    }
  }, [scrollFallback, words])

  return (
    <section
      ref={sectionRef}
      className={cx(styles.statement, scrollFallback && styles.fallback)}
      aria-label={t.statement.label}
    >
      <div className={styles.sticky}>
        <p ref={textRef} className={styles.text}>
          {words.map((w, i) => (
            <span
              key={`${i}-${w.word}`}
              className={w.accent ? styles.accent : styles.word}
              style={{ animationRange: `contain ${w.start}% contain ${w.end}%` }}
            >
              {`${w.word} `}
            </span>
          ))}
        </p>
      </div>
    </section>
  )
}
