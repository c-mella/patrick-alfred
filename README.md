# Patrick Alfred — Portfolio

Designer portfolio for Patrick Alfred Edelbacher. Built with Next.js (App Router) and SCSS, deployable on Vercel.

## Project structure

```
src/
├── app/                       # Next.js App Router pages
│   ├── layout.tsx             # Root layout (fonts, global styles)
│   ├── page.tsx               # Home — portfolio grid
│   ├── [slug]/page.tsx        # Dynamic case-study pages
│   ├── resume/page.tsx
│   ├── contact/page.tsx
│   └── musik/page.tsx
│
├── components/                # Re-usable UI components
│   ├── Nav.tsx                # Desktop top nav bar
│   ├── SidebarNav.tsx         # Home sidebar / mobile collapsible nav
│   ├── ProjectInfo.tsx        # Title bar with prev/next or action icons
│   ├── Footer.tsx             # Site-wide project-links footer grid
│   └── MusikPlayer.tsx        # Client-side audio player
│
├── templates/                 # Page-level layout templates
│   ├── HomeTemplate.tsx       # Sidebar nav + masonry portfolio grid
│   ├── ProjectTemplate.tsx    # Nav + marquee + three-up + assets + footer
│   └── SimplePageTemplate.tsx # Nav + project-info bar + slot + footer
│
├── data/
│   └── projects.ts            # All portfolio content — single source of truth
│
└── styles/
    ├── globals.scss           # Global styles (BEM blocks)
    └── _flexgrid.scss         # Flex grid utility

public/
└── assets/
    ├── images/                # All raster images, SVG icons, favicon
    ├── fonts/                 # WOFF2 + WOFF (Aften, Aften-Bold) + OTF (Satyr)
    ├── audio/                 # MP3 tracks for Musik page
    └── docs/                  # PDF resume
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

The following files are referenced but may not be committed. Add them to the paths below:

| File(s) | Destination |
|---------|-------------|
| `*.jpg` / `*.png` project photography | `public/assets/images/` |
| `favicon.png` | `public/assets/images/` |
| `portrait.jpg` | `public/assets/images/` |
| `AftenScreen.woff`, `AftenScreen.woff2` | `public/assets/fonts/` |
| `AftenScreen-Bold.woff`, `AftenScreen-Bold.woff2` | `public/assets/fonts/` |
| `Satyr10.otf` | `public/assets/fonts/` |
| `home.mp3`, `drink.mp3`, `aclu.mp3`, `free.mp3`, `california.mp3` | `public/assets/audio/` |
| `patrick-alfred-resume.pdf` | `public/assets/docs/` |

> **Fonts:** Aften and Aften-Bold load via WOFF2 → WOFF (optimal compatibility). Satyr uses OTF as a fallback until a WOFF version is available.
