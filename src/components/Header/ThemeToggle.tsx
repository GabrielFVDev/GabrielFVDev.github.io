import { useLanguage } from '../../i18n/LanguageContext'
import { cx } from '../../lib/cx'
import { useTheme } from '../../theme/ThemeContext'
import { MoonIcon, SunIcon } from '../icons'
import styles from './Controls.module.scss'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const { t } = useLanguage()
  const dark = theme === 'dark'

  return (
    <button
      type="button"
      className={cx(styles.iconButton, 'tap')}
      aria-label={dark ? t.theme.toLight : t.theme.toDark}
      onClick={toggleTheme}
    >
      {dark ? <SunIcon /> : <MoonIcon />}
    </button>
  )
}
