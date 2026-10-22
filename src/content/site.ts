// Dados que não mudam com o idioma: links, stack e projetos.
// WebP abre em todos os navegadores atuais. A AVIF que o macOS gera vem em "grade"
// de blocos, e o Firefox não monta esse formato (a imagem não aparecia lá).
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

export type Project = {
  id: ProjectId
  name: string
  tag: string
  href: string | null
  // Cascata no desktop: animation-range "entry a% entry b%"
  range: [number, number]
}

export const projects: Project[] = [
  {
    id: 'financefit',
    name: 'FinanceFit',
    tag: 'Spring Boot · JWT · React',
    href: 'https://github.com/GabrielFVDev/financeFit-api',
    range: [0, 65],
  },
  {
    id: 'matchbook',
    name: 'Matchbook',
    tag: 'Spring Boot · MySQL · React',
    href: 'https://github.com/GabrielFVDev/matchbook-api',
    range: [10, 80],
  },
  {
    id: 'hydrate',
    name: 'Hydrate',
    tag: 'Kotlin · Jetpack Compose',
    href: null,
    range: [20, 95],
  },
]

export const stack = {
  daily: ['Flutter', 'Dart', 'Kotlin', 'Java'],
  also: ['Spring Boot', 'Jetpack Compose', 'React', 'TypeScript', 'MySQL', 'Docker', 'Firebase', 'JUnit', 'Git'],
}

export const marquee = {
  primary: ['Flutter', 'Kotlin', 'Java', 'Dart'],
  secondary: ['Spring Boot', 'Jetpack Compose', 'React', 'TypeScript', 'MySQL', 'Docker', 'Firebase', 'Git'],
}
