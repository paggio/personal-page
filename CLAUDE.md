# Personal Page — Project Notes for Claude

## What this project is
A personal CV / portfolio web page for Mattia Pagetti (Senior Data Engineer).
Single-page React app. Look: retro-futurist — Pixel Poetry-style framed windows, pixel type and
step timeline, plus a 70s space-age palette (night-sky navy, warm orange, mustard, teal).
The space-age feel is purely visual: no hotel/"reception" copy or puns anywhere.

## Stack
- **React 18 + TypeScript + Vite 6**
- **Tailwind CSS 3** for styling
- **RetroUI** (NeoBrutalism component library) installed via `npx shadcn add @retroui/<name>`
- **shadcn/ui** registry system (config in `components.json`)

## Project structure
```
src/
  data/cv.ts                  — all CV content as typed TS objects (single source of truth)
  components/
    Hero.tsx                  — name, tagline, contact row, PDF download button
    ExperienceSection.tsx     — work history cards with skill badges
    SkillsSection.tsx         — grouped skill badges (Main Stack / AWS / Azure)
    EducationSection.tsx      — degree cards
    PublicationsSection.tsx   — arXiv paper link
    retroui/                  — RetroUI components (Button, Badge, Card, Text)
  lib/utils.ts                — cn() helper (clsx + tailwind-merge)
  App.tsx                     — assembles all sections
  index.css                   — Tailwind directives + shadcn CSS variables
public/
  CV_2026_private.pdf         — downloadable PDF CV (drop updated PDFs here)
Makefile                      — see targets below
components.json               — shadcn config (retroui registry registered here)
tailwind.config.js            — content paths + shadcn color tokens
```

## Makefile targets
| Target | What it does |
|---|---|
| `make setup` | First-time setup: `npm install` + adds all RetroUI components via shadcn |
| `make install` | `npm install` only |
| `make dev` | Dev server at http://localhost:5173 |
| `make build` | TypeScript check + Vite production build → `dist/` |
| `make preview` | Serve `dist/` locally |
| `make clean` | Remove `node_modules/` and `dist/` |

## CV content source
Two copies of the content, keep them in sync:
- `src/data/cv.ts` — the website.
- `cv/cv.tex` — the PDF (XeTeX via Tectonic). `cv/CV_2026.tex` (public: no phone/address/DOB)
  and `cv/CV_2026_private.tex` set `\ifprivate` and `\input` it. `make cv` rebuilds
  `public/CV_2026.pdf`; `make cv-private` writes to the git-ignored `cv/build/`.
**Do not put the phone number on the site** — it was intentionally removed.

## Design system
- Tokens in `src/index.css` (`--paper`, `--ink`, `--lunar`, `--orange`, `--mustard`, `--teal`…), exposed
  as Tailwind colours (`bg-paper`, `text-orange`…). The same hex values are in `cv/cv.tex`.
- Fonts: `font-display` = TeX Gyre Adventor (self-hosted in `public/fonts/`, same as the PDF),
  `font-pixel` = Pixelify Sans, `font-sans` = Space Grotesk (Google Fonts, in `index.html`).
- Building blocks in `src/components/Window.tsx`: `Window` (framed panel + title bar + dots),
  `SectionHeading`, `Chip`, `renderBold`. The stack ticker (`StackTicker` in `Hero.tsx`) sits under the top bar.
- RetroUI components in `src/components/retroui/` are no longer used by the page.

## Branch previews
`.github/workflows/deploy.yml` on a `feature/**` branch builds `main` at the site root and the
branch under `/personal-page/preview/`. Pushing to `main` redeploys main only (preview disappears).

## Adding more RetroUI components
```bash
npx shadcn@latest add "@retroui/<component-name>" --yes
```
Components land in `src/components/retroui/`. Browse available ones at https://www.retroui.dev/docs/components/button

## Node version caveat
The machine runs Node 18. Use `--legacy-peer-deps` if npm raises peer-dep conflicts.
Avoid `shadcn@latest init` interactively — `components.json` is already configured.
