# Servidor Torre — Landing Page

Landing page estática para o servidor **Torre PvP Season** de Project Zomboid.

## Stack

- Next.js 16 (App Router)
- Tailwind CSS 4
- Export estático (`output: 'export'`)

## Desenvolvimento

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Build estático (GitHub Pages)

```bash
npm run build
```

Os arquivos gerados ficam em `out/`. Faça upload dessa pasta no GitHub Pages.

### GitHub Pages — repositório de projeto

Se o repositório for `usuario/zomboid-landingpage` (não user.github.io), adicione no `next.config.ts`:

```ts
basePath: "/zomboid-landingpage",
assetPrefix: "/zomboid-landingpage/",
```

Depois rode `npm run build` novamente.

### Deploy automático (opcional)

Crie `.github/workflows/deploy.yml` com GitHub Actions apontando para a pasta `out/`.

## Assets

- `public/images/logo.png` — logo Torre + zumbi
- `public/images/hero-bg.png` — background do hero

## Quando divulgar o servidor

Edite `src/data/server-config.ts` ou adicione botões de conexão/Discord no `Hero.tsx` e `Footer.tsx`.
