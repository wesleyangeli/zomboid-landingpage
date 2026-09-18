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

### Deploy automático (GitHub Actions)

1. Abra **Settings → Pages** do repositório
2. Em **Build and deployment → Source**, selecione **GitHub Actions**
3. Vá em **Actions** e rode o workflow **Deploy GitHub Pages** (ou faça push na `main`)

URL publicada: `https://wesleyangeli.github.io/zomboid-landingpage/`

> Se o deploy falhar com erro 404, o Pages ainda não foi ativado no passo 2.

## Assets

- `public/images/logo.png` — logo Torre + zumbi
- `public/images/hero-bg.png` — background do hero

## Preview no WhatsApp / Facebook Debugger

Se aparecer aviso `fb:app_id` ausente:

1. Acesse [Meta for Developers](https://developers.facebook.com/apps/)
2. **Create App** → tipo **Other** → **Business**
3. Copie o **App ID** (número)
4. Cole em `src/data/server-config.ts` → `facebookAppId: "SEU_APP_ID"`
5. Faça commit, push e **Scrape Again** no [Facebook Debugger](https://developers.facebook.com/tools/debug/)

> Esse aviso **não impede** a imagem no WhatsApp — é só recomendação do Facebook.

## Quando divulgar o servidor

Edite `src/data/server-config.ts` ou adicione botões de conexão/Discord no `Hero.tsx` e `Footer.tsx`.
