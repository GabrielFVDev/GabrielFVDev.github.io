import { stack } from '../../content/site'
import { useIsMobile } from '../../hooks/useMediaQuery'
import { useLanguage } from '../../i18n/LanguageContext'
import { cx } from '../../lib/cx'
import styles from './About.module.scss'

export function About() {
  const { t } = useLanguage()
  const isMobile = useIsMobile()
  const { about } = t

  return (
    <section id="sobre" className={styles.section}>
      <div className={cx(styles.head, 'up')}>
        <span className={styles.eyebrow}>{about.eyebrow}</span>
        <h2 className={styles.title}>{about.title}</h2>
      </div>

      <div className={styles.row}>
        <div className={styles.jobs}>
          {about.jobs.map((job) => (
            <div key={job.company} className={cx(styles.card, 'lift up')}>
              <div className={styles.cardHead}>
                <span className={styles.heading}>
                  <span className={styles.role}>{job.role}</span>
                  <span className={styles.company}>{job.company}</span>
                </span>
                <span className={styles.pill}>{job.date}</span>
              </div>
              <p className={styles.desc}>{job.desc[isMobile ? 'short' : 'full']}</p>
            </div>
          ))}
        </div>

        <div className={cx(styles.card, styles.stack, 'up')}>
          <span className={styles.cardLabel}>{about.daily}</span>
          <div className={styles.chips}>
            {stack.daily.map((item) => (
              <span key={item} className={cx(styles.chipInk, 'chip')}>
                {item}
              </span>
            ))}
          </div>
          <span className={styles.cardLabel}>{about.also}</span>
          <div className={cx(styles.chips, styles.chipsLight)}>
            {stack.also.map((item) => (
              <span key={item} className={cx(styles.chipSoft, 'chip')}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.row}>
        <div className={cx(styles.card, styles.wide, 'lift up')}>
          <span className={styles.cardLabel}>{about.edu.label}</span>
          <div className={cx(styles.cardHead, styles.cardHeadTop)}>
            <span className={cx(styles.heading, styles.headingTight, styles.edu)}>
              <span className={cx(styles.role, styles.course)}>{about.edu.course}</span>
              <span className={styles.company}>UMC</span>
            </span>
            <span className={styles.pill}>2024 — 2025</span>
          </div>
        </div>

        <div className={cx(styles.card, styles.wide, 'lift up')}>
          <span className={styles.cardLabel}>{about.community.label}</span>
          <div className={cx(styles.cardHead, styles.cardHeadTop)}>
            <span className={cx(styles.heading, styles.headingTight)}>
              <span className={styles.role}>Flutterando</span>
              <span className={styles.company}>{about.community.role}</span>
            </span>
            <span className={styles.pill}>
              <span className={cx(styles.dot, 'dot')} aria-hidden="true" />
              {about.community.date}
            </span>
          </div>
          <p className={styles.desc}>{about.community.desc}</p>
        </div>

        <div className={cx(styles.card, styles.langs, 'up')}>
          <span className={styles.cardLabel}>{about.langs.label}</span>
          <div className={styles.langList}>
            {about.langs.items.map((item) => (
              <span key={item.name} className={styles.lang}>
                <span className={styles.langName}>{item.name}</span>
                <span className={styles.langLevel}>{item.level}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
