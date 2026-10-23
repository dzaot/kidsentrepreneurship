# Venturoo

Duolingo-style web app where kids aged 8 to 14 learn entrepreneurship in 5 minutes a day and make their first online sale of a digital product in about 30 days, with parents learning alongside them, a kid-safe AI coach (Roo), and the kid's identity always kept private.

## Docs (Spanish)

- [01: Blue ocean and competitors](docs/01-analisis-blue-ocean.md)
- [02: Digital business models for kids](docs/02-modelos-de-negocio-para-ninos.md)
- [03: Partners, payments and legal](docs/03-partners-y-legal.md)
- [04: Product, architecture and decisions](docs/04-producto-y-arquitectura.md)
- [05: Pilot validation plan](docs/05-plan-de-validacion.md)
- [Brand options](docs/brand/opciones-de-marca.md) ([visual page](docs/brand/index.html))

## App

The app lives in [`web/`](web) (Next.js 15, Tailwind 4, Netlify Blobs, Anthropic SDK).

```bash
cd web
npm install
npm run dev        # http://localhost:3000, data is stored in web/.data
npm run typecheck
npm run build
```

Environment variables (set in Netlify):

| Name | Purpose |
|---|---|
| `SESSION_SECRET` | Signs parent login cookies. Required in production. |
| `PILOT_CODE` | Optional invite code required to sign up. |
| `ANTHROPIC_API_KEY` | Enables Roo, the AI coach (Claude). Without it the app works and Roo shows as unavailable. |
| `ANTHROPIC_MODEL` | Optional. Defaults to `claude-opus-5-5`. |

Deploys run on Netlify with `netlify.toml` at the repo root (base directory `web`).
