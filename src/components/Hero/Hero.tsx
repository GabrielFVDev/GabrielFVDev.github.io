import { links } from '../../content/site'
import { useIsMobile } from '../../hooks/useMediaQuery'
import { useLanguage } from '../../i18n/LanguageContext'
import { cx } from '../../lib/cx'
import { handleAnchorClick } from '../../lib/smoothScroll'
import { ArrowDownIcon, ArrowUpRightIcon } from '../icons'
import styles from './Hero.module.scss'

export function Hero() {
  const { t } = useLanguage()
  const isMobile = useIsMobile()
  const size = isMobile ? 'short' : 'full'

  return (
    <div className={styles.wrap}>
      <section id="topo" className={styles.hero}>
        <div className={styles.top}>
          <span className={cx(styles.badge, 'fu d1')}>
            <span className={cx(styles.dot, 'dot')} aria-hidden="true" />
            {t.hero.badge[size]}
          </span>
          <div className={styles.nameOut}>
            <h1 className={styles.name}>
              <span className="mask">
                <span>Gabriel</span>
              </span>
              <span className="mask l2">
                <span>Vasconcelos</span>
              </span>
            </h1>
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.intro}>
            <p className={cx(styles.lead, 'fu d2')}>
              {t.hero.a}
              <strong>Flutter</strong>
              {t.hero.b}
              <strong>Kotlin</strong>
              {t.hero.c}
              <strong>Spring Boot</strong>
              {t.hero.d[size]}
            </p>
            <div className={cx(styles.ctas, 'fu d3')}>
              <a className={cx(styles.cta, styles.ctaPrimary, 'btn tap')} href="#projetos" onClick={handleAnchorClick}>
                {t.hero.ctaWork}
                <ArrowDownIcon className="arr-bob" />
              </a>
              <a className={cx(styles.cta, styles.ctaSecondary, 'btn tap')} href={links.cv} target="_blank" rel="noopener">
                {t.hero.ctaCv}
                <ArrowUpRightIcon className="arr-diag" />
              </a>
            </div>
          </div>

          <div className={styles.facts}>
            <div className={cx(styles.fact, 'fu d4 lift')}>
              <span className={styles.factLabel}>{t.hero.now}</span>
              <span className={styles.factValue}>
                <span className={styles.factTitle}>Setter</span>
                <span className={styles.factSub}>{t.hero.nowSub}</span>
              </span>
            </div>
            <div className={cx(styles.fact, 'fu d5 lift')}>
              <span className={styles.factLabel}>{t.hero.focus}</span>
              <span className={styles.factValue}>
                <span className={styles.factTitle}>
                  Mobile + <span className={styles.nowrap}>Back-end</span>
                </span>
                <span className={styles.factSub}>Flutter · Kotlin · Spring</span>
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
