import type { MouseEvent } from 'react'
import { featured } from '../../content/site'
import { useIsMobile } from '../../hooks/useMediaQuery'
import { useLanguage } from '../../i18n/LanguageContext'
import { cx } from '../../lib/cx'
import { LockIcon } from '../icons'
import styles from './Projects.module.scss'

// A luz acompanha o mouse escrevendo direto no estilo do card, sem re-render por pixel
function moveSpotlight(event: MouseEvent<HTMLElement>) {
  const el = event.currentTarget
  const rect = el.getBoundingClientRect()
  el.style.setProperty('--mx', `${event.clientX - rect.left}px`)
  el.style.setProperty('--my', `${event.clientY - rect.top}px`)
}

export function FeaturedProject() {
  const { t } = useLanguage()
  const isMobile = useIsMobile()
  const copy = t.work.featured
  const { shots, shotSize } = featured

  const shotList = [
    { src: shots.run, alt: copy.shotRun },
    { src: shots.progress, alt: copy.shotProgress },
  ]

  return (
    <div className={styles.featuredWrap}>
      <article className={cx(styles.featured, 'feat zoom')} onMouseMove={moveSpotlight}>
        <div className={styles.spot} aria-hidden="true" />
        <div className={styles.featuredText}>
          <div className={styles.featuredBody}>
            <span className={styles.badge}>{copy.badge}</span>
            <h3 className={styles.featuredName}>{featured.name}</h3>
            <p className={styles.featuredDesc}>{copy.desc[isMobile ? 'short' : 'full']}</p>
            <div className={styles.chips}>
              {featured.stack.map((item) => (
                <span key={item} className={cx(styles.featChip, 'chip')}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
        {/* Etiqueta no canto superior direito, sobre a área das telas */}
        <span className={cx(styles.seal, styles.featuredSeal)}>
          <LockIcon size={12} strokeWidth={2.2} />
          {copy.status}
        </span>
        <div className={cx(styles.featuredMedia, 'media')}>
          <div className={styles.shots}>
            {shotList.map((shot) => (
              <img
                key={shot.alt}
                className={styles.shot}
                src={shot.src}
                alt={shot.alt}
                width={shotSize.width}
                height={shotSize.height}
                loading="lazy"
                decoding="async"
              />
            ))}
          </div>
        </div>
      </article>
    </div>
  )
}
