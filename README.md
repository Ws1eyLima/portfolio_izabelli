# Portfolio Izabelli

Portfólio profissional de Izabelli Soriano, focado em BI, dados financeiros, dashboards, indicadores e análise para tomada de decisão.

O site apresenta hero, credenciais, projetos em destaque, competências e contato. O conteúdo é bilíngue e controlado por query string.

## Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Lucide React
- Radix UI Tabs
- Framer Motion

## Como rodar localmente

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run typecheck
```

## Idiomas

- Português: `/`
- Inglês: `/?lang=en`

O idioma do documento HTML acompanha a query `lang`, usando `pt-BR` por padrão e `en-US` para `/?lang=en`.

## Assets principais

- Favicon: `app/icon.png`
- Foto do contato: `public/assets/izabelli.jpeg`
- Foto do hero: `public/assets/izabelli-hero.jpeg`
- Currículo: `public/assets/izabelli-soriano-cv.pdf`
- Prints do projeto Painel de Faturamento e Metas:
  - `public/assets/projects/faturamento-capa.jpeg`
  - `public/assets/projects/faturamento-detalhes.jpeg`
- Print do projeto Painel de Custos com Pessoal: `public/assets/projects/painel-custos-pessoal.jpeg`
- Prints do projeto Validador de Dados Automatizado:
  - `public/assets/projects/validador-dados-com-erros.jpeg`
  - `public/assets/projects/validador-dados-sem-erros.jpeg`
- Prints do projeto Mapeamento de Prospecção B2B:
  - `public/assets/projects/prospeccao-b2b-capa.jpeg`
  - `public/assets/projects/prospeccao-b2b-overview.jpeg`
  - `public/assets/projects/prospeccao-b2b-prioridades.jpeg`
  - `public/assets/projects/prospeccao-b2b-pipeline.jpeg`
- Prints do projeto Mercado de Internet via Satélite:
  - `public/assets/projects/starlink-hughes-capa.jpeg`
  - `public/assets/projects/starlink-hughes-mercado.jpeg`
  - `public/assets/projects/starlink-hughes-regional.jpeg`
  - `public/assets/projects/starlink-hughes-velocidade.jpeg`
  - `public/assets/projects/starlink-hughes-tendencias.jpeg`

## Deploy na Vercel

Configuração esperada:

- Framework: `Next.js`
- Install command: `npm install`
- Build command: `npm run build`
- Output directory: padrão do Next.js

## Subir para o GitHub

Depois de criar um repositório vazio no GitHub:

```bash
git init
git add .
git commit -m "Initial portfolio version"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git
git push -u origin main
```

Depois, na Vercel, importe o repositório GitHub e faça o deploy com as configurações padrão de Next.js.
