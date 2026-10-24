import { useEffect, type MouseEvent } from 'react'
import { links } from '../../content/site'
import { useLanguage } from '../../i18n/LanguageContext'
import { cx } from '../../lib/cx'
import { handleAnchorClick } from '../../lib/smoothScroll'
import { ArrowUpRightIcon, GitHubIcon, LinkedInIcon } from '../icons'
import { LangSwitch } from './LangSwitch'
import styles from './MobileMenu.module.scss'

// Mesma duração do sheetOut em MobileMenu.module.scss
const EXIT_MS = 300

type Props = {
  id: string
  closing: boolean
  onClose: (returnFocus: boolean) => void
  onClosed: () => void
}

export function MobileMenu({ id, closing, onClose, onClosed }: Props) {
  const { t } = useLanguage()

  // Enquanto o painel está aberto: o fundo não rola e Esc fecha
  useEffect(() => {
    if (closing) return

    const root = document.documentElement
    const previousOverflow = root.style.overflow
    root.style.overflow = 'hidden'

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose(true)
    }
    document.addEventListener('keydown', onKeyDown)

    return () => {
      root.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [closing, onClose])

  // Fechando: espera a animação de saída e só então tira o painel da tela
  useEffect(() => {
    if (!closing) return
    const timer = window.setTimeout(onClosed, EXIT_MS)
    return () => window.clearTimeout(timer)
  }, [closing, onClosed])

  // Fecha e rola até a seção ao mesmo tempo: a página anda por baixo do painel que some
  const goTo = (event: MouseEvent<HTMLAnchorElement>) => {
    handleAnchorClick(event)
    onClose(false)
  }

  // Toque numa área vazia do painel fecha
  const onSheetClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) onClose(true)
  }

  return (
    <div id={id} className={cx(styles.sheet, closing && styles.closing)} onClick={onSheetClick}>
      <nav aria-label={t.nav.menu} className={styles.links}>
        <a className={cx(styles.link, 'fu d1')} href="#projetos" onClick={goTo}>
          {t.nav.work}
        </a>
        <a className={cx(styles.link, 'fu')} style={{ animationDelay: '0.1s' }} href="#sobre" onClick={goTo}>
          {t.nav.about}
        </a>
        <a className={cx(styles.link, 'fu')} style={{ animationDelay: '0.15s' }} href="#contato" onClick={goTo}>
          {t.nav.contact}
        </a>
        <a
          className={cx(styles.link, styles.cv, 'fu')}
          style={{ animationDelay: '0.2s' }}
          href={links.cv}
          target="_blank"
          rel="noopener"
          onClick={() => onClose(false)}
        >
          {t.nav.cv}
          <ArrowUpRightIcon size={30} strokeWidth={2.4} />
        </a>
      </nav>
      <div className={cx(styles.bottom, 'fu')} style={{ animationDelay: '0.25s' }}>
        <div className={styles.langRow}>
          <span className={styles.langLabel}>{t.lang.label}</span>
          <LangSwitch large />
        </div>
        <div className={styles.socials}>
          <a className={cx(styles.social, 'tap')} href={links.github}>
            <GitHubIcon />
            GitHub
            <ArrowUpRightIcon className={styles.out} />
          </a>
          <a className={cx(styles.social, 'tap')} href={links.linkedin}>
            <LinkedInIcon />
            LinkedIn
            <ArrowUpRightIcon className={styles.out} />
          </a>
        </div>
      </div>
    </div>
  )
}
