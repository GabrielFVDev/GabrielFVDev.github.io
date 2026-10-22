import { links } from '../../content/site'
import { useLanguage } from '../../i18n/LanguageContext'
import { cx } from '../../lib/cx'
import { ArrowUpRightIcon } from '../icons'
import styles from './Contact.module.scss'

export function Contact() {
  const { t } = useLanguage()

  return (
    <section id="contato" className={styles.section}>
      <div className={cx(styles.cta, 'zoom')}>
        <div className={styles.copy}>
          <span className={styles.eyebrow}>{t.contact.eyebrow}</span>
          <h2 className={styles.title}>
            {t.contact.title}
            <span className="wave">?</span>
          </h2>
        </div>
        <div className={styles.buttons}>
          <a className={cx(styles.button, styles.email, 'btn tap')} href={`mailto:${links.email}`}>
            {links.email}
          </a>
          <div className={styles.socials}>
            <a className={cx(styles.button, styles.social, 'btn tap')} href={links.linkedin}>
              LinkedIn
              <ArrowUpRightIcon className="arr-diag" />
            </a>
            <a className={cx(styles.button, styles.social, 'btn tap')} href={links.github}>
              GitHub
              <ArrowUpRightIcon className="arr-diag" />
            </a>
          </div>
        </div>
      </div>
      <p className={styles.footer}>© 2026 Gabriel Vasconcelos · São Paulo</p>
    </section>
  )
}
