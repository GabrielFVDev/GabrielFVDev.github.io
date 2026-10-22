import { projects } from '../../content/site'
import { useIsMobile } from '../../hooks/useMediaQuery'
import { useLanguage } from '../../i18n/LanguageContext'
import { cx } from '../../lib/cx'
import { ArrowRightIcon } from '../icons'
import { FeaturedProject } from './FeaturedProject'
import { ProjectCard } from './ProjectCard'
import styles from './Projects.module.scss'

export function Projects() {
  const { t } = useLanguage()
  const isMobile = useIsMobile()

  return (
    <div className={styles.wrap}>
      <section id="projetos" className={styles.section}>
        <div className={cx(styles.head, 'up')}>
          <span className={styles.eyebrow}>{t.work.eyebrow}</span>
          <h2 className={styles.title}>{t.work.title}</h2>
        </div>

        <FeaturedProject />

        <div className={styles.moreHead}>
          <span className={styles.moreTitle}>{t.work.more}</span>
          <span className={styles.swipe}>
            {t.work.swipe}
            <ArrowRightIcon />
          </span>
        </div>
        <div className={cx(styles.cards, isMobile && 'up')}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} cascade={!isMobile} />
          ))}
        </div>
      </section>
    </div>
  )
}
