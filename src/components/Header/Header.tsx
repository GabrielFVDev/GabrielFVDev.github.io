import { useCallback, useRef } from 'react'
import type { MobileMenu as MobileMenuState } from '../../hooks/useMobileMenu'
import { useLanguage } from '../../i18n/LanguageContext'
import { cx } from '../../lib/cx'
import { handleAnchorClick } from '../../lib/smoothScroll'
import styles from './Header.module.scss'
import { LangSwitch } from './LangSwitch'
import { MobileMenu } from './MobileMenu'
import { ThemeToggle } from './ThemeToggle'

const MENU_ID = 'menu-celular'

type Props = {
  menu: MobileMenuState
  activeSection: string | null
}

export function Header({ menu, activeSection }: Props) {
  const { t } = useLanguage()
  const burgerRef = useRef<HTMLButtonElement>(null)
  const { close } = menu

  // Esc, toque fora ou o próprio ☰ fecham e devolvem o foco ao ☰.
  // Um link fecha sem devolver: o foco vai para a seção de destino.
  const closeMenu = useCallback(
    (returnFocus: boolean) => {
      close()
      if (returnFocus) burgerRef.current?.focus()
    },
    [close],
  )

  const navLink = (id: string, label: string) => (
    <a
      className={cx(styles.link, activeSection === id && styles.on)}
      href={`#${id}`}
      aria-current={activeSection === id ? 'location' : undefined}
      onClick={handleAnchorClick}
    >
      {label}
    </a>
  )

  return (
    <>
      <header className={styles.nav}>
        <div className={cx(styles.bar, 'fu d1')}>
          <a className={styles.logo} href="#topo" onClick={handleAnchorClick}>
            gabriel<span className={styles.logoDot}>.</span>dev
          </a>
          <div className={styles.actions}>
            <nav aria-label={t.nav.label} className={styles.links}>
              {navLink('projetos', t.nav.work)}
              {navLink('sobre', t.nav.about)}
            </nav>
            <div className={styles.lang}>
              <LangSwitch />
            </div>
            <div className={styles.theme}>
              <ThemeToggle />
            </div>
            <a className={cx(styles.talk, 'btn')} href="#contato" onClick={handleAnchorClick}>
              {t.nav.talk}
            </a>
            <button
              ref={burgerRef}
              type="button"
              className={cx(styles.burger, menu.open && styles.open, 'tap')}
              aria-label={menu.open ? t.nav.closeMenu : t.nav.openMenu}
              aria-expanded={menu.open}
              aria-controls={MENU_ID}
              onClick={menu.open ? () => closeMenu(true) : menu.toggle}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>
      {menu.mounted && (
        <MobileMenu id={MENU_ID} closing={menu.closing} onClose={closeMenu} onClosed={menu.finishClose} />
      )}
    </>
  )
}
