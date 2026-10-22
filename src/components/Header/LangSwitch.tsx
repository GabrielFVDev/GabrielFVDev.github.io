import { useLanguage, type Lang } from '../../i18n/LanguageContext'
import { cx } from '../../lib/cx'
import styles from './Controls.module.scss'

const options: { lang: Lang; label: string }[] = [
  { lang: 'pt', label: 'PT' },
  { lang: 'en', label: 'EN' },
]

export function LangSwitch({ large = false, className }: { large?: boolean; className?: string }) {
  const { lang, t, setLang } = useLanguage()

  return (
    <div className={cx(styles.seg, large && styles.large, className)} role="group" aria-label={t.lang.label}>
      {options.map((option) => (
        <button
          key={option.lang}
          type="button"
          className={cx(styles.segButton, lang === option.lang && styles.segOn)}
          aria-pressed={lang === option.lang}
          onClick={() => setLang(option.lang)}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}
