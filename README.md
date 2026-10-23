# gabriel.dev

Portfólio de Gabriel Vasconcelos, desenvolvedor mobile (Flutter, Kotlin) e back-end com Spring Boot.

**https://gabrielfvdev.github.io**

## Stack

React 19, TypeScript, Vite e SCSS Modules. Animações em CSS (ligadas à rolagem e View Transitions), sem bibliotecas de UI ou de animação.

## Rodando localmente

```bash
npm install
npm run dev     # http://localhost:5173
npm run build   # gera dist/
```

## Onde fica cada coisa

| O quê | Onde |
|---|---|
| Textos em português e inglês | `src/i18n/dictionary.ts` |
| Links, projetos e stack | `src/content/site.ts` |
| Cores, fontes e animações | `src/styles/` |
| Currículo, ícones e fontes | `public/` |
| Telas de referência (feitas no Claude Design) | `design/` |

## Deploy

Cada push na `main` publica o site no GitHub Pages pelo GitHub Actions (`.github/workflows/deploy.yml`).
