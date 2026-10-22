import type { Project } from '../../content/site'
import { useLanguage } from '../../i18n/LanguageContext'
import { cx } from '../../lib/cx'
import { ArrowUpRightIcon, LockIcon } from '../icons'
import styles from './Projects.module.scss'

type Props = {
  project: Project
  // Desktop: cada card entra na sua vez (cascata). Celular: o trilho entra inteiro.
  cascade: boolean
}

export function ProjectCard({ project, cascade }: Props) {
  const { t } = useLanguage()
  const [from, to] = project.range

  return (
    <article
      className={cx(styles.card, 'lift', cascade && 'up', 'tap')}
      style={cascade ? { animationRange: `entry ${from}% entry ${to}%` } : undefined}
    >
      <div className={cx(styles.cardMedia, 'media')}>
        <div className={styles.placeholder} aria-hidden="true">
          [{t.work.shot} — {project.name}]
        </div>
      </div>
      <div className={styles.cardBody}>
        <span className={styles.tag}>{project.tag}</span>
        <h3 className={styles.cardName}>{project.name}</h3>
        <p className={styles.cardDesc}>{t.work.projects[project.id]}</p>
        <div className={styles.cardFooter}>
          {project.href ? (
            <a className={cx(styles.codeLink, 'lk')} href={project.href}>
              {t.work.codeLink}
              <ArrowUpRightIcon className="arr-diag" />
            </a>
          ) : (
            <span className={styles.private}>
              <LockIcon />
              {t.work.privateCode}
            </span>
          )}
        </div>
      </div>
    </article>
  )
}
