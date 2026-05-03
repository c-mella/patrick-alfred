# Patrick Alfred — Portfolio

Designer portfolio for Patrick Alfred Edelbacher. Built with Next.js (App Router) and SCSS, deployable on Vercel.

## Project structure

```
src/
├── app/                  # Next.js App Router pages
│   ├── layout.tsx        # Root layout (fonts, global styles)
│   ├── page.tsx          # Home — portfolio grid
│   ├── [slug]/page.tsx   # Dynamic case-study pages
│   ├── resume/page.tsx
│   ├── contact/page.tsx
│   └── musik/page.tsx
│
├── components/           # Re-usable UI components
│   ├── Nav.tsx           # Desktop top nav bar
│   ├── SidebarNav.tsx    # Home sidebar / mobile collapsible nav
│   ├── ProjectInfo.tsx   # Title bar with prev/next or action icons
│   ├── Footer.tsx        # Site-wide project-links footer grid
│   └── MusikPlayer.tsx   # Client-side audio player (replaces jQuery)
│
├── templates/            # Page-level layout templates
│   ├── HomeTemplate.tsx  # Sidebar nav + masonry portfolio grid
│   ├── ProjectTemplate.tsx   # Nav + marquee + three-up + assets + footer
│   └── SimplePageTemplate.tsx # Nav + project-info bar + slot + footer
│
├── data/
│   └── projects.ts       # All portfolio content — single source of truth
│
└── styles/
    ├── globals.scss      # Global styles (BEM blocks from original site)
    └── _flexgrid.scss    # Flex grid utility (original _flexgrid.scss)

public/
└── images/               # SVG icons and all raster assets
```

## Adding a new project

1. Open `src/data/projects.ts`
2. Add a new entry to the `projects` array following the `Project` interface
3. Drop the hero and asset images into `public/images/`
4. Update `prev`/`next` slugs on neighbouring projects
5. Add the project to `footerProjects` if it should appear in the site footer

## Getting started

```bash
npm install
npm run dev       # http://localhost:3000
npm run build
npm start
```

## Deploying to Vercel

Push to GitHub and import the repo at [vercel.com/new](https://vercel.com/new). Vercel auto-detects Next.js — no extra configuration needed beyond the included `vercel.json`.

## Assets not in this repo

The following files are referenced but not committed (add them to `public/`):

- `images/*.jpg` / `images/*.png` — project photography
- `images/favicon.png`
- `Aften.ttf`, `Aften-Screen-Bold.ttf`, `Satyr10.otf` — custom fonts
- `portrait.jpg` — contact page photo
- `patrick-alfred-resume.pdf` — resume download
- `*.mp3` — Musik page audio tracks
