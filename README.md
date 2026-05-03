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

### 1. Add images

Copy all images for the new project into `public/assets/images/`. At minimum you'll need:

| Image | Used for |
|-------|----------|
| `my-project-tile.jpg` | Home page grid thumbnail |
| `my-project-hero.jpg` | Full-width marquee banner at the top of the project page |
| `my-project-hero-s.jpg` | Same banner, cropped for mobile (optional — falls back to desktop) |
| Any asset images | Gallery images shown below the overview section |

> **Naming:** kebab-case is conventional, e.g. `my-project-hero.jpg`.

### 2. Add the project entry

Open `src/data/projects.ts` and append a new object to the `projects` array. The order in the array determines the prev/next navigation — no slug wiring needed.

```ts
{
  slug: 'my-project',          // URL: /my-project
  title: 'My Project',
  description: 'One-line description shown on the home grid.',
  year: '2025',
  tags: ['B2C', 'Web'],        // Displayed in the project-info bar
  homeImage: '/assets/images/my-project-tile.jpg',
  heroImage: '/assets/images/my-project-hero.jpg',
  heroImageMobile: '/assets/images/my-project-hero-s.jpg', // optional
  overview: 'What the project was about.',
  outcome:  'What was achieved.',
  team: [
    { name: 'Patrick Alfred', role: 'Design Lead', company: 'Acme' },
  ],
  assets: [
    // Regular image
    { src: '/assets/images/my-project-screen.jpg' },

    // Image that links to an external URL (e.g. a YouTube thumbnail)
    {
      src: '/assets/images/my-project-thumbnail.jpg',
      href: 'https://youtube.com/watch?v=...',
      isExternal: true,
      isThumbnail: true,       // adds a brightness hover effect
    },

    // Embedded Vimeo video (renders as a responsive 16:9 iframe)
    { vimeoId: '123456789', vimeoTitle: 'My Project Demo' },
  ],

  // Password-protect this page in production (optional)
  // isLocked: true,
},
```

**All fields except `slug`, `title`, `description`, and `homeImage` are optional.** Omitting `overview`/`outcome`/`team`/`assets` simply hides those sections.

### 3. Add it to the footer (optional)

Open the `footerProjects` array at the bottom of `src/data/projects.ts` and add an entry to whichever column makes sense:

```ts
{ slug: 'my-project', label: 'My Project', isLocked: false },
```

Set `isLocked: true` if the project is password-protected — this shows the padlock icon next to the footer link.

### 4. Password-protect a project (optional)

Set `isLocked: true` on the project entry. In **development** (`npm run dev`) the password gate is bypassed automatically. In **production** visitors must enter the password stored in `NEXT_PUBLIC_PROJECT_PASSWORD` (see `.env.local.example`).

### 5. Verify

```bash
npm run dev   # check the home grid and /my-project in the browser
npm run build # confirm a clean static build before deploying
```

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
