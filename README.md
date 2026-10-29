# Venturoo

Duolingo-style web app where kids aged 8 to 14 learn entrepreneurship in 5 minutes a day and make their first online sale of a digital product in about 30 days, with parents learning alongside them, a kid-safe AI coach (Guroo), and the kid's identity always kept private.

## Docs (Spanish)

- [01: Blue ocean and competitors](docs/01-analisis-blue-ocean.md)
- [02: Digital business models for kids](docs/02-modelos-de-negocio-para-ninos.md)
- [03: Partners, payments and legal](docs/03-partners-y-legal.md)
- [04: Product, architecture and decisions](docs/04-producto-y-arquitectura.md)
- [05: Pilot validation plan](docs/05-plan-de-validacion.md)
- [Brand options](docs/brand/opciones-de-marca.md) ([visual page](docs/brand/index.html))

## App

The app lives in [`web/`](web) (Next.js 15, Tailwind 4, Postgres via Neon, Anthropic SDK).

```bash
cd web
npm install
npm run dev        # http://localhost:3000; without DATABASE_URL data is stored in web/.data
npm run typecheck
npm run build
```

Environment variables (set in Netlify):

| Name | Purpose |
|---|---|
| `DATABASE_URL` | Postgres connection string (for example a free Neon project). Tables are created on first use. Without it, data goes to `web/.data` (local dev only). |
| `SESSION_SECRET` | Signs parent login cookies. Required in production. Already set on the Netlify project. |
| `PILOT_CODE` | Optional invite code required to sign up. Already set on the Netlify project. |
| `ANTHROPIC_API_KEY` | Enables Guroo, the AI coach (Claude). Without it the app works and Guroo shows as unavailable. |
| `ANTHROPIC_MODEL` | Optional. Defaults to `claude-opus-5-5`. |
| `ADMIN_PASSWORD` | Turns on the founder dashboard at `/admin` (pilot funnel, families, waitlist CSV, reports and review queue, password reset links). Without it `/admin` returns 404. Use a long random value. |

## Deploy on Netlify

The Netlify project `venturoo-pilot` already exists and `netlify.toml` points the build at `web/`.

1. **Database:** create a free project at neon.tech (region close to your users, e.g. US East), copy the connection string, and add it in Netlify as `DATABASE_URL` (Site configuration > Environment variables).
2. **Connect the repo:** in Netlify, open `venturoo-pilot` > Site configuration > Build & deploy > Link repository, choose GitHub `dzaot/kidsentrepreneurship`, and set the production branch (currently `claude/nice-hypatia-62qpuc`).
3. **AI coach:** add `ANTHROPIC_API_KEY` (from console.anthropic.com).
4. Trigger a deploy. The site will be at `https://venturoo-pilot.netlify.app`.

The app is host-agnostic (plain Next.js + Postgres), so Vercel (Root Directory `web`) or Cloudflare (OpenNext adapter) also work if needed later.
