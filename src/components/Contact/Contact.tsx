import { useEffect, useRef, useState } from 'react'
import { links } from '../../content/site'
import { useLanguage } from '../../i18n/LanguageContext'
import { cx } from '../../lib/cx'
import { ArrowUpRightIcon, CheckIcon, CopyIcon, GitHubIcon, LinkedInIcon } from '../icons'
import styles from './Contact.module.scss'

// Tempo que o "E-mail copiado" fica no botão
const COPIED_MS = 2400

export function Contact() {
  const { t } = useLanguage()
  const [copied, setCopied] = useState(false)
  const timer = useRef(0)

  useEffect(() => () => window.clearTimeout(timer.current), [])

  // Copia o endereço. Se a área de transferência não estiver disponível (navegador antigo,
  // permissão negada), abre o app de e-mail: quem clicou chega ao contato do mesmo jeito.
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(links.email)
    } catch {
      window.location.href = `mailto:${links.email}`
      return
    }
    setCopied(true)
    window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => setCopied(false), COPIED_MS)
  }

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
          {/* Os dois rótulos ocupam a mesma célula do grid: a largura não muda ao trocar */}
          <button
            type="button"
            className={cx(styles.button, styles.email, copied && styles.copied, 'btn tap')}
            aria-label={t.contact.copy}
            onClick={copyEmail}
          >
            <span className={cx(styles.label, styles.idle)}>
              {links.email}
              <CopyIcon className={styles.copyIcon} />
            </span>
            <span className={cx(styles.label, styles.done)}>
              <CheckIcon className={styles.check} />
              {t.contact.copied}
            </span>
          </button>
          <div className={styles.socials}>
            <a className={cx(styles.button, styles.social, 'btn tap')} href={links.github}>
              <GitHubIcon />
              GitHub
              <ArrowUpRightIcon className={cx(styles.out, 'arr-diag')} />
            </a>
            <a className={cx(styles.button, styles.social, 'btn tap')} href={links.linkedin}>
              <LinkedInIcon />
              LinkedIn
              <ArrowUpRightIcon className={cx(styles.out, 'arr-diag')} />
            </a>
          </div>
        </div>
        <p className={styles.status} aria-live="polite">
          {copied ? t.contact.copied : ''}
        </p>
      </div>
      <p className={styles.footer}>© 2026 Gabriel Vasconcelos · São Paulo</p>
    </section>
  )
}
