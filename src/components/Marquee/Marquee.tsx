import { Fragment } from 'react'
import { marquee } from '../../content/site'
import { cx } from '../../lib/cx'
import styles from './Marquee.module.scss'

function Track({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const group = (copy: number) => (
    <div className={styles.group}>
      {items.map((item) => (
        <Fragment key={`${copy}-${item}`}>
          <span>{item}</span>
          <span className={styles.sep}>·</span>
        </Fragment>
      ))}
    </div>
  )

  return (
    <div className={cx(styles.track, reverse && styles.reverse)}>
      {group(0)}
      {group(1)}
    </div>
  )
}

// Faixas de stack: decorativas, a stack de verdade está na seção Sobre
export function Marquee() {
  return (
    <section className={styles.marquee} aria-hidden="true">
      <Track items={marquee.primary} />
      <Track items={marquee.secondary} reverse />
    </section>
  )
}
