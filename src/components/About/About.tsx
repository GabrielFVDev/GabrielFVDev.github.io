import type { ReactNode } from 'react'
import { useIsMobile } from '../../hooks/useMediaQuery'
import { useLanguage } from '../../i18n/LanguageContext'
import { cx } from '../../lib/cx'
import styles from './About.module.scss'

// Um card por bloco: rótulo à esquerda no desktop, em cima no celular
function Block({ label, className, children }: { label: string; className?: string; children: ReactNode }) {
  return (
    <div className={cx(styles.card, 'up')}>
      <h3 className={styles.label}>{label}</h3>
      <div className={cx(styles.content, className)}>{children}</div>
    </div>
  )
}

type EntryProps = {
  title: string
  subtitle: string
  date: string
  // Ainda em andamento: o ponto pulsa ao lado da data
  current?: boolean
  desc?: string
}

function Entry({ title, subtitle, date, current = false, desc }: EntryProps) {
  return (
    <div className={styles.entry}>
      <div className={styles.entryHead}>
        <span className={styles.heading}>
          <span className={styles.title}>{title}</span>
          <span className={styles.subtitle}>{subtitle}</span>
        </span>
        <span className={styles.pill}>
          {current && <span className={cx(styles.dot, 'dot')} aria-hidden="true" />}
          {date}
        </span>
      </div>
      {desc && <p className={styles.desc}>{desc}</p>}
    </div>
  )
}

export function About() {
  const { t } = useLanguage()
  const isMobile = useIsMobile()
  const { about } = t

  return (
    <section id="sobre" className={styles.section}>
      <div className={cx(styles.head, 'up')}>
        <span className={styles.eyebrow}>{about.eyebrow}</span>
        <h2 className={styles.sectionTitle}>{about.title}</h2>
      </div>

      <div className={styles.cards}>
        <Block label={about.exp.label}>
          {about.exp.items.map((job) => (
            <Entry
              key={job.company}
              title={job.role}
              subtitle={job.company}
              date={job.date}
              desc={job.desc[isMobile ? 'short' : 'full']}
            />
          ))}
        </Block>

        <Block label={about.edu.label}>
          <Entry title={about.edu.course} subtitle="UMC" date="2024 — 2025" />
        </Block>

        <Block label={about.langs.label} className={styles.langs}>
          {about.langs.items.map((item) => (
            <span key={item.name} className={styles.lang}>
              <span className={styles.langName}>{item.name}</span>
              <span className={styles.langLevel}>{item.level}</span>
            </span>
          ))}
        </Block>

        <Block label={about.community.label}>
          {about.community.items.map((item) => (
            <Entry key={item.name} title={item.name} subtitle={item.role} date={item.date} current desc={item.desc} />
          ))}
        </Block>
      </div>
    </section>
  )
}
