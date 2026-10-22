// Textos do site em pt e en, portados do dict() do design (D4 · Final e D4 · Celular).
// Onde o celular usa um texto mais curto, a chave guarda os dois: { full, short }.

export type Variant = { full: string; short: string }

export const pt = {
  meta: {
    htmlLang: 'pt-BR',
  },
  skip: 'Pular para o conteúdo',
  nav: {
    label: 'Principal',
    menu: 'Menu',
    work: 'Projetos',
    about: 'Sobre',
    contact: 'Contato',
    talk: 'Fale comigo',
    openMenu: 'Abrir menu',
    closeMenu: 'Fechar menu',
  },
  lang: {
    label: 'Idioma',
  },
  theme: {
    toDark: 'Ativar modo escuro',
    toLight: 'Ativar modo claro',
  },
  hero: {
    badge: { full: 'Desenvolvedor Mobile · São Paulo', short: 'Mobile · São Paulo' },
    a: 'Construo apps com ',
    b: ' e ',
    c: ', e APIs com ',
    d: {
      full: '. Staff voluntário na comunidade Flutterando.',
      short: '. Staff voluntário na Flutterando.',
    },
    ctaWork: 'Ver projetos',
    ctaCv: 'Currículo',
    now: 'Agora',
    nowSub: 'app Android em desenvolvimento',
    focus: 'Foco',
  },
  statement: {
    label: 'Sobre meu jeito de trabalhar',
    text: 'Gosto de apps que parecem *simples. Por trás deles, componentes bem pensados, código limpo e cuidado com cada *detalhe.',
  },
  work: {
    eyebrow: 'Trabalho selecionado',
    title: 'Projetos',
    more: 'Mais projetos',
    swipe: 'Deslize',
    featured: {
      badge: 'Em desenvolvimento',
      desc: {
        full: 'App Android de treino: você cola o treino do WhatsApp ou do bloco de notas e ele vira um treino executável, com a demonstração de cada exercício. Tudo por regra fixa, sem IA.',
        short:
          'App Android de treino: você cola o treino em texto e ele vira um treino executável, com a demonstração de cada exercício. Regra fixa, sem IA.',
      },
      status: 'Android · código privado',
      shotRun: 'Tela do Setter durante o treino, com séries, carga e descanso',
      shotProgress: 'Tela do Setter com a evolução de carga de um exercício',
    },
    codeLink: 'Ver código',
    privateCode: 'Código privado',
    shot: 'Print',
    projects: {
      financefit:
        'API de finanças pessoais com autenticação JWT, testes com JUnit e Mockito e Docker, mais o front em React.',
      matchbook:
        'Recomendação de livros que muda de estratégia conforme você aceita ou recusa as sugestões.',
      hydrate: 'App Android de hidratação com lembretes e reset diário em segundo plano.',
    },
  },
  about: {
    eyebrow: 'Trajetória',
    title: 'Experiência e formação',
    jobs: [
      {
        role: 'Desenvolvedor de Aplicativos Júnior (Flutter)',
        company: 'Coflint OÜ · Freelance, remoto',
        date: 'mai — ago 2026',
        desc: {
          full: 'Telas e fluxos do app Yolki.pet, de microlearning gamificado sobre longevidade de pets. Estabilizei o app em 2 dias para a demonstração do produto num evento e identifiquei falhas na pipeline de CI.',
          short:
            'Telas e fluxos do app Yolki.pet, de microlearning gamificado sobre longevidade de pets. Estabilizei o app em 2 dias para a demonstração num evento.',
        },
      },
      {
        role: 'Desenvolvedor Flutter Júnior',
        company: 'nZest · Remoto',
        date: '2024',
        desc: {
          full: 'Dois apps da empresa: um de streaming (PlayFlix) e um do setor financeiro. Refatorei módulos core em código legado, migrei a camada visual para o Design System com componentes reutilizáveis e l10n, e criei componentes acessíveis para pessoas com deficiência visual.',
          short:
            'Dois apps da empresa, de streaming (PlayFlix) e financeiro. Refatorei módulos core legados, migrei a interface para o Design System com l10n e criei componentes acessíveis.',
        },
      },
    ],
    daily: 'Uso no dia a dia',
    also: 'Também trabalho com',
    edu: {
      label: 'Formação',
      course: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
    },
    community: {
      label: 'Comunidade',
      role: 'Staff voluntário',
      date: 'ago 2024 — atual',
      desc: 'Apoio membros da comunidade e apresentei na edição 2024 do Flutterando Connect, em Santos (SP).',
    },
    langs: {
      label: 'Idiomas',
      items: [
        { name: 'Português', level: 'Nativo' },
        { name: 'Inglês', level: 'Intermediário' },
      ],
    },
  },
  contact: {
    eyebrow: 'Contato',
    title: 'Vamos construir algo juntos',
  },
}

export type Dict = typeof pt

export const en: Dict = {
  meta: {
    htmlLang: 'en',
  },
  skip: 'Skip to content',
  nav: {
    label: 'Main',
    menu: 'Menu',
    work: 'Work',
    about: 'About',
    contact: 'Contact',
    talk: 'Let’s talk',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },
  lang: {
    label: 'Language',
  },
  theme: {
    toDark: 'Switch to dark mode',
    toLight: 'Switch to light mode',
  },
  hero: {
    badge: { full: 'Mobile Developer · São Paulo, Brazil', short: 'Mobile · São Paulo, BR' },
    a: 'I build apps with ',
    b: ' and ',
    c: ', and APIs with ',
    d: {
      full: '. Volunteer staff at the Flutterando community.',
      short: '. Volunteer staff at Flutterando.',
    },
    ctaWork: 'See my work',
    ctaCv: 'Resume',
    now: 'Now',
    nowSub: 'Android app in progress',
    focus: 'Focus',
  },
  statement: {
    label: 'How I work',
    text: 'I like apps that feel *simple. Behind them: thoughtful components, clean code and care for every *detail.',
  },
  work: {
    eyebrow: 'Selected work',
    title: 'Work',
    more: 'More work',
    swipe: 'Swipe',
    featured: {
      badge: 'In development',
      desc: {
        full: 'An Android workout app: paste your workout from WhatsApp or a notes app and it becomes a workout you can follow, with a demo of every exercise. Plain fixed rules, no AI.',
        short:
          'An Android workout app: paste your workout as text and it becomes one you can follow, with a demo of every exercise. Fixed rules, no AI.',
      },
      status: 'Android · private code',
      shotRun: 'Setter during a workout, with sets, load and rest timer',
      shotProgress: 'Setter showing the load progress for one exercise',
    },
    codeLink: 'View code',
    privateCode: 'Private repo',
    shot: 'Screenshot',
    projects: {
      financefit:
        'Personal finance API with JWT authentication, JUnit and Mockito tests and Docker, plus a React front end.',
      matchbook: 'Book recommendations that switch strategy as you accept or reject suggestions.',
      hydrate: 'Android hydration app with reminders and a daily reset that runs in the background.',
    },
  },
  about: {
    eyebrow: 'Journey',
    title: 'Experience & education',
    jobs: [
      {
        role: 'Junior App Developer (Flutter)',
        company: 'Coflint OÜ · Freelance, remote',
        date: 'May — Aug 2026',
        desc: {
          full: 'Screens and flows for Yolki.pet, a gamified microlearning app about pet longevity. Stabilized the app in 2 days for a product demo at an event and identified failures in the CI pipeline.',
          short:
            'Screens and flows for Yolki.pet, a gamified microlearning app about pet longevity. Stabilized the app in 2 days for a demo at an event.',
        },
      },
      {
        role: 'Junior Flutter Developer',
        company: 'nZest · Remote',
        date: '2024',
        desc: {
          full: 'Two company apps: a streaming app (PlayFlix) and a fintech app. Refactored core modules in legacy code, moved the UI onto the Design System with reusable components and l10n, and built accessible components for people with visual impairments.',
          short:
            'Two company apps, streaming (PlayFlix) and fintech. Refactored legacy core modules, moved the UI onto the Design System with l10n and built accessible components.',
        },
      },
    ],
    daily: 'Daily drivers',
    also: 'Also work with',
    edu: {
      label: 'Education',
      course: 'Technologist Degree in Systems Analysis and Development',
    },
    community: {
      label: 'Community',
      role: 'Volunteer staff',
      date: 'Aug 2024 — present',
      desc: 'I support community members and spoke at Flutterando Connect 2024 in Santos, Brazil.',
    },
    langs: {
      label: 'Languages',
      items: [
        { name: 'Portuguese', level: 'Native' },
        { name: 'English', level: 'Intermediate' },
      ],
    },
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Let’s build something together',
  },
}

export const dictionaries = { pt, en }
