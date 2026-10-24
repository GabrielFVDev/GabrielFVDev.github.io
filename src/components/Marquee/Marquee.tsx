import { Fragment, useEffect, useRef, type Ref } from 'react'
import { marquee } from '../../content/site'
import { useIsMobile, useMediaQuery } from '../../hooks/useMediaQuery'
import { useLanguage } from '../../i18n/LanguageContext'
import { cx } from '../../lib/cx'
import { runMarquee } from './runMarquee'
import styles from './Marquee.module.scss'

// Segundos por volta, desktop e celular (como no design)
const DURATION = {
  primary: { desktop: 38, mobile: 30 },
  secondary: { desktop: 46, mobile: 36 },
}

type TrackProps = { items: string[]; reverse?: boolean; ref: Ref<HTMLDivElement> }

function Track({ items, reverse = false, ref }: TrackProps) {
  const group = (copy: number) => (
    <div className={styles.group}>
      {items.map((item) => (
        <Fragment key={`${copy}-${item}`}>
          <span>{item}</span>
          <span className={styles.sep}>·</span>
        </Fragment>
      ))}
    </div>
  )

  // Loop sem emenda: o conteúdo vem duplicado e anda metade da largura
  return (
    <div ref={ref} className={cx(styles.track, reverse && styles.reverse)} aria-hidden="true">
      {group(0)}
      {group(1)}
    </div>
  )
}

// Faixas de stack. São decorativas (aria-hidden): o leitor de tela lê a lista escondida.
export function Marquee() {
  const { t } = useLanguage()
  const isMobile = useIsMobile()
  const reduceMotion = useMediaQuery('(prefers-reduced-motion: reduce)')
  const sectionRef = useRef<HTMLElement>(null)
  const primaryRef = useRef<HTMLDivElement>(null)
  const secondaryRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const primary = primaryRef.current
    const secondary = secondaryRef.current
    if (!section || !primary || !secondary) return

    const size = isMobile ? 'mobile' : 'desktop'
    return runMarquee(
      section,
      [
        { el: primary, duration: DURATION.primary[size], reverse: false },
        { el: secondary, duration: DURATION.secondary[size], reverse: true },
      ],
      reduceMotion,
    )
  }, [isMobile, reduceMotion])

  return (
    <section ref={sectionRef} className={styles.marquee}>
      <h2 className={styles.srOnly}>{t.stack.label}</h2>
      <ul className={styles.srOnly}>
        {[...marquee.primary, ...marquee.secondary].map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <Track ref={primaryRef} items={marquee.primary} />
      <Track ref={secondaryRef} items={marquee.secondary} reverse />
    </section>
  )
}
