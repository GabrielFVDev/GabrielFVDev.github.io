# gabriel.dev

Portfólio de Gabriel Vasconcelos, desenvolvedor mobile (Flutter, Kotlin) e back-end com Spring Boot.
Publicado em **https://gabrielfvdev.github.io**.

## Stack

- React 19 + TypeScript + Vite
- SCSS Modules por componente; cores em CSS vars (`src/styles/global.scss`) para o tema trocar em tempo de execução
- Animações de scroll em CSS puro (`animation-timeline`), troca de tema e idioma com View Transitions
- Sem bibliotecas de UI ou de animação

## Comandos

```bash
npm install
npm run dev      # servidor local em http://localhost:5173
npm run lint
npm run build    # gera dist/
npm run preview  # serve o dist/ localmente
```

## Design

A fonte do design é o canvas **"Novo Portfólio — Direções"** no Claude (telas **D4 · Final** e **D4 · Celular**).
A pasta `design/` guarda uma cópia das telas usadas na implementação:

- `Final.dc.html` e `Final-mobile.dc.html`: a página no desktop e no celular
- `Specs.dc.html`: o guia de interações (durações, curvas, comportamento)
- `OG.dc.html` e `Favicon.dc.html`: imagem de compartilhamento e ícone

## Onde mexer

| O quê | Arquivo |
|---|---|
| Textos (pt e en) | `src/i18n/dictionary.ts` |
| Links, projetos, stack e faixas | `src/content/site.ts` |
| Cores, curvas e breakpoint | `src/styles/global.scss`, `src/styles/_tokens.scss` |
| Animações compartilhadas | `src/styles/_motion.scss` |
| Currículo em PDF | `public/curriculo.pdf` |
| Imagem de compartilhamento e ícones | `public/og.png`, `public/favicon-*.png`, `public/apple-touch-icon.png` |

Para regerar a imagem de compartilhamento, abra `scripts/og/og.html` em 1200×630 e salve a captura em `public/og.png`.
Para os ícones, abra `scripts/og/favicon.html` e baixe os três arquivos para `public/`.

Os prints de FinanceFit, Matchbook e Hydrate ainda são placeholders: ao ter as imagens, adicione em
`src/assets/projects/` e troque o placeholder em `src/components/Projects/ProjectCard.tsx`.

## Deploy

Cada push na `main` roda `.github/workflows/deploy.yml`: lint, build e publicação no GitHub Pages
(em *Settings › Pages*, a fonte precisa estar como **GitHub Actions**).
