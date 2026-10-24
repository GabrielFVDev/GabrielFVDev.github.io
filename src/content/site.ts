// Dados que não mudam com o idioma: links, stack e projetos.
// WebP abre em todos os navegadores atuais. A AVIF que o macOS gera vem em "grade"
// de blocos, e o Firefox não monta esse formato (a imagem não aparecia lá).
import hydrateHome from '../assets/projects/hydrate-inicio.webp'
import hydrateReminders from '../assets/projects/hydrate-lembretes.webp'
import matchbookHome from '../assets/projects/matchbook.webp'
import setterProgress from '../assets/projects/setter-evolucao.webp'
import setterRun from '../assets/projects/setter-execucao.webp'

export const links = {
  email: 'fvgabriel18@gmail.com',
  linkedin: 'https://www.linkedin.com/in/gabrielfvdev',
  github: 'https://github.com/GabrielFVDev',
  cv: `${import.meta.env.BASE_URL}curriculo.pdf`,
}

export const featured = {
  name: 'Setter',
  stack: ['Kotlin', 'Jetpack Compose', 'Room', 'Hilt'],
  shots: {
    run: setterRun,
    progress: setterProgress,
  },
  // Proporção das telas exportadas (720 × 1558)
  shotSize: { width: 720, height: 1558 },
}

export type ProjectId = 'financefit' | 'matchbook' | 'hydrate'

// O texto alternativo de cada imagem fica em t.work.shots, pela chave
export type ShotId = 'matchbook' | 'hydrateHome' | 'hydrateReminders'

export type Shot = { id: ShotId; src: string; width: number; height: number }

// O que aparece na área de imagem do card
export type ProjectMedia =
  // Um print que cobre a área toda
  | { kind: 'shot'; shot: Shot }
  // Telas do app lado a lado, sem moldura; drop desce cada uma em px
  | { kind: 'phones'; phones: (Shot & { drop: number })[] }
  // Sem print: rotas reais da API, com o método em destaque
  | { kind: 'routes'; routes: { method: string; path: string }[] }

export type Repo = { kind: 'api' | 'front'; href: string }

export type Project = {
  id: ProjectId
  name: string
  tag: string
  media: ProjectMedia
  // Vazio quando o código é privado
  repos: Repo[]
  private: boolean
  // Ainda não publicado: mostra "Em breve na Play Store" no rodapé
  soon: boolean
  // Cascata no desktop: animation-range "entry a% entry b%"
  range: [number, number]
}

export const projects: Project[] = [
  {
    id: 'financefit',
    name: 'FinanceFit',
    tag: 'Spring Boot · JWT · React',
    // Quando o print do front existir, vira { kind: 'shot', shot: { id: 'financefit', ... } }
    // com o texto alternativo em t.work.shots.financefit
    media: {
      kind: 'routes',
      routes: [
        { method: 'POST', path: '/api/auth/login' },
        { method: 'POST', path: '/receitas' },
        { method: 'GET', path: '/despesas' },
        { method: 'PATCH', path: '/usuarios/{id}/meta' },
        { method: 'GET', path: '/usuarios/{id}/resumo' },
      ],
    },
    repos: [
      { kind: 'api', href: 'https://github.com/GabrielFVDev/financeFit-api' },
      { kind: 'front', href: 'https://github.com/GabrielFVDev/financeFit' },
    ],
    private: false,
    soon: false,
    range: [0, 65],
  },
  {
    id: 'matchbook',
    name: 'Matchbook',
    tag: 'Spring Boot · MySQL · React',
    media: { kind: 'shot', shot: { id: 'matchbook', src: matchbookHome, width: 1280, height: 840 } },
    repos: [
      { kind: 'api', href: 'https://github.com/GabrielFVDev/matchbook-api' },
      { kind: 'front', href: 'https://github.com/GabrielFVDev/matchbook' },
    ],
    private: false,
    soon: false,
    range: [10, 80],
  },
  {
    id: 'hydrate',
    name: 'Hydrate',
    tag: 'Kotlin · Jetpack Compose',
    media: {
      kind: 'phones',
      phones: [
        { id: 'hydrateHome', src: hydrateHome, width: 404, height: 851, drop: 0 },
        { id: 'hydrateReminders', src: hydrateReminders, width: 399, height: 835, drop: 18 },
      ],
    },
    repos: [],
    private: true,
    soon: true,
    range: [20, 95],
  },
]

export const marquee = {
  primary: ['Flutter', 'Kotlin', 'Java', 'Dart'],
  secondary: ['Spring Boot', 'Jetpack Compose', 'React', 'TypeScript', 'MySQL', 'Docker', 'Firebase', 'Git'],
}
