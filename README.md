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

Environment variables (set in Vercel):

| Name | Purpose |
|---|---|
| `DATABASE_URL` | Postgres connection string. Added automatically by the Neon integration on Vercel (`POSTGRES_URL` also works). Tables are created on first use. |
| `SESSION_SECRET` | Signs parent login cookies. Required in production. |
| `PILOT_CODE` | Optional invite code required to sign up. |
| `ANTHROPIC_API_KEY` | Enables Guroo, the AI coach (Claude). Without it the app works and Guroo shows as unavailable. |
| `ANTHROPIC_MODEL` | Optional. Defaults to `claude-opus-5-5`. |

## Deploy on Vercel

1. In Vercel, **Add New > Project**, import `dzaot/kidsentrepreneurship`, and set **Root Directory** to `web` (framework: Next.js, detected automatically).
2. In the project, open **Storage > Create Database > Neon (Postgres)** and connect it to the project. This adds `DATABASE_URL`.
3. Add `SESSION_SECRET` (a long random string), `PILOT_CODE`, and `ANTHROPIC_API_KEY` under **Settings > Environment Variables**.
4. Deploy. Pushes to the production branch redeploy automatically.
