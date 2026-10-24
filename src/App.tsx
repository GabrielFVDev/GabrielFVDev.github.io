import styles from './App.module.scss'
import { About } from './components/About/About'
import { Contact } from './components/Contact/Contact'
import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { Marquee } from './components/Marquee/Marquee'
import { Projects } from './components/Projects/Projects'
import { Statement } from './components/Statement/Statement'
import { useActiveSection } from './hooks/useActiveSection'
import { useMobileMenu } from './hooks/useMobileMenu'
import { useRevealFallback } from './hooks/useRevealFallback'
import { useLanguage } from './i18n/LanguageContext'
import { handleAnchorClick } from './lib/smoothScroll'

const SECTIONS = ['topo', 'projetos', 'sobre', 'contato'] as const

export default function App() {
  const { t } = useLanguage()
  const menu = useMobileMenu()
  const activeSection = useActiveSection(SECTIONS)
  useRevealFallback()

  return (
    <>
      <a className={styles.skip} href="#projetos" onClick={handleAnchorClick}>
        {t.skip}
      </a>
      <Header menu={menu} activeSection={activeSection} />
      {/* Com o painel do celular aberto, o resto da página sai do Tab e do leitor de tela */}
      <main inert={menu.open}>
        <Hero />
        <Statement />
        <Projects />
        <Marquee />
        <div className={styles.closing}>
          <About />
          <Contact />
        </div>
      </main>
    </>
  )
}
