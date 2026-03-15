# khalid.science

![Build Status](https://github.com/kaitbellahs/khalid.science/actions/workflows/ci.yml/badge.svg)

Blog científico pessoal — biogerontologia, IA aplicada à farmacologia e longevidade.

## Stack

- **Framework:** [Astro](https://astro.build) (SSG, TypeScript strict)
- **Styling:** Vanilla CSS (design system com dark mode)
- **Deploy:** Cloudflare Pages
- **Search:** Pagefind
- **Comments:** Giscus
- **License:** CC BY 4.0

## Desenvolvimento

```bash
npm install
npm run dev       # servidor local em localhost:4321
npm run build     # build de produção → dist/
npm run preview   # preview do build
```

## Estrutura

```
src/
├── components/     # BaseHead, Header, Footer, ThemeToggle, CiteThis, etc.
├── content/        # Blog posts, notes, publications (Markdown)
├── layouts/        # BaseLayout, BlogPost, Note
├── pages/          # Rotas (index, blog, notes, about, cv, etc.)
├── styles/         # Design system (global.css)
└── utils/          # SEO helpers (Schema.org JSON-LD)
```

## Licença

Conteúdo licenciado sob [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).