import type { CSSProperties } from 'react'
import type { Project, ProjectMedia } from '../../content/site'
import { useIsMobile } from '../../hooks/useMediaQuery'
import { useLanguage } from '../../i18n/LanguageContext'
import { cx } from '../../lib/cx'
import { ArrowUpRightIcon, GitHubIcon, LockIcon } from '../icons'
import styles from './Projects.module.scss'

type Props = {
  project: Project
  // Desktop: cada card entra na sua vez (cascata). Celular: o trilho entra inteiro.
  cascade: boolean
}

// Largura das rotas: o caminho começa sempre na mesma coluna, como no design
const METHOD_WIDTH = 6

function Media({ media }: { media: ProjectMedia }) {
  const { t } = useLanguage()

  switch (media.kind) {
    case 'shot':
      return (
        <div className={styles.fill}>
          <img
            className={styles.cover}
            src={media.shot.src}
            alt={t.work.shots[media.shot.id]}
            width={media.shot.width}
            height={media.shot.height}
            loading="lazy"
            decoding="async"
          />
        </div>
      )
    case 'phones':
      return (
        <div className={cx(styles.fill, styles.phones)}>
          {media.phones.map((phone) => (
            <img
              key={phone.id}
              className={styles.phone}
              style={{ translate: `0 ${phone.drop}px` }}
              src={phone.src}
              alt={t.work.shots[phone.id]}
              width={phone.width}
              height={phone.height}
              loading="lazy"
              decoding="async"
            />
          ))}
        </div>
      )
    case 'routes':
      return (
        <div className={cx(styles.fill, styles.routes)}>
          <span className={styles.routesLabel}>{t.work.apiRoutes}</span>
          <code className={styles.routeList}>
            {media.routes.map((route) => (
              <span key={`${route.method} ${route.path}`}>
                <span className={styles.method}>{route.method.padEnd(METHOD_WIDTH)}</span>
                {route.path}
              </span>
            ))}
          </code>
        </div>
      )
  }
}

export function ProjectCard({ project, cascade }: Props) {
  const { t } = useLanguage()
  const isMobile = useIsMobile()
  const [from, to] = project.range
  // Alguns textos têm versão curta para o celular
  const desc = t.work.projects[project.id]

  return (
    <article
      className={cx(styles.card, 'lift', cascade && 'up', 'tap')}
      style={cascade ? ({ '--range': `entry ${from}% entry ${to}%` } as CSSProperties) : undefined}
    >
      <div className={cx(styles.cardMedia, 'media')}>
        <Media media={project.media} />
      </div>
      <div className={styles.cardBody}>
        <span className={styles.tag}>{project.tag}</span>
        <h3 className={styles.cardName}>{project.name}</h3>
        {/* Etiqueta no canto superior direito do card; no código vem depois do nome, para o leitor de tela */}
        {project.private && (
          <span className={cx(styles.seal, styles.cardSeal)}>
            <LockIcon size={12} strokeWidth={2.2} />
            {t.work.privateCode}
          </span>
        )}
        <p className={styles.cardDesc}>{typeof desc === 'string' ? desc : desc[isMobile ? 'short' : 'full']}</p>
        <div className={styles.cardFooter}>
          {project.repos.length > 0 && (
            <div className={styles.repos}>
              <span className={styles.repoLabel}>
                <GitHubIcon size={15} />
                {t.work.github}
              </span>
              {project.repos.map((repo) => {
                const copy = t.work.repo[repo.kind]
                return (
                  <a
                    key={repo.kind}
                    className={cx(styles.codeLink, 'lk')}
                    href={repo.href}
                    aria-label={copy.aria(project.name)}
                  >
                    {copy.label}
                    <ArrowUpRightIcon className="arr-diag" />
                  </a>
                )
              })}
            </div>
          )}
          {project.soon && (
            <span className={styles.soon}>
              <span className={cx(styles.dot, 'dot')} aria-hidden="true" />
              {t.work.soon}
            </span>
          )}
        </div>
      </div>
    </article>
  )
}
