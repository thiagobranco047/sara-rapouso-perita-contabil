# Sara Rapouso — Perita Contábil

Landing page profissional para **Sara Rapouso**, Perita Contábil Judicial e Extrajudicial (CRC SC 38.308/O-0).

## Stack

- [Next.js 15](https://nextjs.org/) (App Router)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [GSAP](https://gsap.com/) — animações da navegação
- SEO / GEO — metadata, Open Graph, JSON-LD, `sitemap.xml`, `robots.txt`

## Desenvolvimento

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Produção

```bash
npm run build
npm start
```

Defina `NEXT_PUBLIC_SITE_URL` com o domínio final (veja `.env.example`).

## Estrutura

- `src/lib/site.ts` — dados de contato e navegação
- `src/lib/content.ts` — textos e listas de serviços
- `src/lib/seo.ts` — metadata e schema.org
- `src/app/globals.css` — scaling system fluido (`clamp`)
- `public/images/` — fotos, logo e fundo geométrico

## Scaling system

Tipografia e espaçamentos usam variáveis CSS com `clamp()` para escalar entre mobile (~375px) e desktop (~1440px+), mantendo proporção visual consistente.
