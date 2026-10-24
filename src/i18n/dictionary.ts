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
    cv: 'Currículo',
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
    ctaCv: 'Ver currículo',
    now: 'Agora',
    nowSub: 'app Android em desenvolvimento',
    focus: 'Foco',
  },
  statement: {
    label: 'Sobre meu jeito de trabalhar',
    text: 'Crio apps mobile com foco em experiência *simples, código organizado e cuidado em cada *detalhe.',
  },
  work: {
    eyebrow: 'Em destaque',
    title: 'Projetos',
    more: 'Outros projetos',
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
    github: 'Ver no GitHub',
    privateCode: 'Código privado',
    soon: 'Em breve na Play Store',
    apiRoutes: 'Rotas da API',
    // Cada projeto tem dois repositórios; o aria-label diz de qual projeto é o link
    repo: {
      api: { label: 'API', aria: (name: string) => `API do ${name} no GitHub` },
      front: { label: 'Front', aria: (name: string) => `Front do ${name} no GitHub` },
    },
    shots: {
      matchbook: 'Tela inicial do Matchbook recomendando o livro Fundação, com os botões Amei e Próximo',
      hydrateHome: 'Tela inicial do Hydrate com o anel de consumo do dia, 0 de 2,80 L',
      hydrateReminders: 'Tela de lembretes do Hydrate, com horário de início e fim e intervalo de 30 minutos',
    },
    projects: {
      financefit: {
        full: 'API de finanças pessoais com autenticação JWT, testes com JUnit e Mockito e Docker, mais o front em React.',
        short: 'API de finanças pessoais com JWT, testes com JUnit e Mockito e Docker, mais o front em React.',
      },
      matchbook:
        'Recomendação de livros que muda de estratégia conforme você aceita ou recusa as sugestões.',
      hydrate: 'App Android de hidratação com lembretes e reset diário em segundo plano.',
    },
  },
  about: {
    eyebrow: 'Trajetória',
    title: 'Experiência e formação',
    exp: {
      label: 'Experiência',
      items: [
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
    },
    edu: {
      label: 'Formação',
      course: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
    },
    community: {
      label: 'Comunidade',
      items: [
        {
          name: 'Flutterando',
          role: 'Staff voluntário',
          date: 'ago 2024 — atual',
          desc: 'Participo das decisões da comunidade e ajudei a realizar o Flutterando Connect 2024, em Santos (SP), onde também apresentei. Contribuí com o site do evento e com a documentação do routefly.',
        },
        {
          name: 'He4rt Developers',
          role: 'Contribuidor open-source',
          date: 'mai 2026 — atual',
          desc: 'Contribuo com o heartdevs.com, a plataforma open-source da comunidade: estrutura do módulo de eventos, check-in pelo bot e reações na timeline.',
        },
      ],
    },
    langs: {
      label: 'Idiomas',
      items: [
        { name: 'Português', level: 'Nativo' },
        { name: 'Inglês', level: 'Intermediário' },
      ],
    },
  },
  stack: {
    label: 'Tecnologias com que trabalho',
  },
  contact: {
    eyebrow: 'Contato',
    title: 'Seu time precisa de um dev mobile',
    copy: 'Copiar o e-mail fvgabriel18@gmail.com',
    copied: 'E-mail copiado',
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
    cv: 'Resume',
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
    ctaCv: 'View resume',
    now: 'Now',
    nowSub: 'Android app in progress',
    focus: 'Focus',
  },
  statement: {
    label: 'How I work',
    text: 'I build mobile apps with a focus on *simple experiences, organized code and care for every *detail.',
  },
  work: {
    eyebrow: 'Featured',
    title: 'Work',
    more: 'Other work',
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
    github: 'View on GitHub',
    privateCode: 'Private repo',
    soon: 'Coming soon to Google Play',
    apiRoutes: 'API routes',
    repo: {
      api: { label: 'API', aria: (name: string) => `${name} API on GitHub` },
      front: { label: 'Front', aria: (name: string) => `${name} front end on GitHub` },
    },
    shots: {
      matchbook: 'Matchbook home screen recommending the book Foundation, with the Love and Next buttons',
      hydrateHome: 'Hydrate home screen with the daily intake ring, 0 of 2.80 L',
      hydrateReminders: 'Hydrate reminder settings, with start and end hours and a 30-minute interval',
    },
    projects: {
      financefit: {
        full: 'Personal finance API with JWT authentication, JUnit and Mockito tests and Docker, plus a React front end.',
        short: 'Personal finance API with JWT, JUnit and Mockito tests and Docker, plus a React front end.',
      },
      matchbook: 'Book recommendations that switch strategy as you accept or reject suggestions.',
      hydrate: 'Android hydration app with reminders and a daily reset that runs in the background.',
    },
  },
  about: {
    eyebrow: 'Journey',
    title: 'Experience & education',
    exp: {
      label: 'Experience',
      items: [
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
    },
    edu: {
      label: 'Education',
      course: 'Technologist Degree in Systems Analysis and Development',
    },
    community: {
      label: 'Community',
      items: [
        {
          name: 'Flutterando',
          role: 'Volunteer staff',
          date: 'Aug 2024 — present',
          desc: 'I take part in the community’s decisions and helped put on Flutterando Connect 2024 in Santos, Brazil, where I also gave a talk. I contributed to the event website and to the routefly docs.',
        },
        {
          name: 'He4rt Developers',
          role: 'Open-source contributor',
          date: 'May 2026 — present',
          desc: 'I contribute to heartdevs.com, the community’s open-source platform: the events module structure, check-in through the bot and reactions on the timeline.',
        },
      ],
    },
    langs: {
      label: 'Languages',
      items: [
        { name: 'Portuguese', level: 'Native' },
        { name: 'English', level: 'Intermediate' },
      ],
    },
  },
  stack: {
    label: 'Technologies I work with',
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Does your team need a mobile dev',
    copy: 'Copy the email fvgabriel18@gmail.com',
    copied: 'Email copied',
  },
}

export const dictionaries = { pt, en }
