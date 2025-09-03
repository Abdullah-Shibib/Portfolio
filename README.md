# Portfolio

A fast, modern personal portfolio website. Built for easy customization and quick deployment.

---

## Features

- Responsive, accessible UI
- Sections for About, Projects, Experience, Skills, and Contact
- SEO meta tags and Open Graph
- Smooth page transitions and scroll animations
- Dark mode support
- Easy content editing via simple config files / JSON
- Deployed on Vercel or GitHub Pages

---

## Tech Stack

- **Framework:** Next.js (React)  
- **Styling:** Tailwind CSS  
- **Animations:** Framer Motion  
- **UI Components:** shadcn/ui (Radix primitives)  
- **Icons:** Lucide  
- **Linting/Format:** ESLint, Prettier

> If your stack differs, update this section to match your repo.

---

## Getting Started

### 1) Prerequisites
- Node.js 18+ and npm (or yarn/pnpm)

### 2) Install
```bash
# with npm
npm install

# or with yarn
# yarn

# or with pnpm
# pnpm install

3) Run Dev Server
npm run dev
# open http://localhost:3000

4) Build and Preview
npm run build
npm run start

Project Structure
.
├─ app/ or src/              # Next.js routes and pages
│  ├─ layout.tsx             # Root layout
│  ├─ page.tsx               # Home page
│  └─ (routes)...            # Additional routes/segments
├─ components/               # Reusable UI components
├─ content/                  # JSON/TS content (projects, experience, etc.)
├─ lib/                      # Helpers, hooks, utils
├─ public/                   # Static assets (images, favicons)
├─ styles/                   # Tailwind globals / CSS
├─ tailwind.config.ts
├─ tsconfig.json
└─ package.json


Adjust if your repo structure is different. The idea is to keep components reusable and content separate.

Configure Your Content

Most text and lists (projects, skills, links) can live in one place so you don’t edit React files every time.

Suggested pattern:

content/site.ts (or content/site.json)

name, title, description, socials, links

content/projects.ts

array of { title, description, tech, repo, demo, image }

content/experience.ts

array of { company, role, start, end, bullets[] }

Then import and render these in your pages/components.

Environment Variables (Optional)

If you use forms, analytics, or email:

Create .env.local:

NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_ANALYTICS_ID=...
# EMAIL_API_KEY=...
# RESEND_API_KEY=...


Do not commit your .env.local.

Styling and Theming

Tailwind is set up in tailwind.config.ts and globals.css.

To change colors or radius, edit Tailwind theme tokens.

For component primitives (Dialog, Sheet, Dropdown), use shadcn/ui.

Animations live near the components using Framer Motion.

SEO

Edit default metadata in app/layout.tsx (Next.js metadata object).

Replace public/favicon* and social preview image in public/og.png.

Deployment
Vercel (recommended)

Push to GitHub

Import repo on Vercel

Set env vars (if any)

Deploy

GitHub Pages

If this is a static export:

npm run build
npm run export
# output in out/


Then publish the out/ folder via GitHub Pages (Settings → Pages).

Commands
npm run dev       # start dev server
npm run build     # production build
npm run start     # run production server
npm run lint      # lint
npm run format    # format with Prettier (if configured)

Adding Projects Fast

Add an entry to content/projects.ts:

export const projects = [
  {
    title: "Project Name",
    description: "What it does and why it’s cool.",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    repo: "https://github.com/username/project",
    demo: "https://project-demo.vercel.app",
    image: "/projects/project-name.png"
  }
];


Images go in public/projects/.

Accessibility

Keyboard-navigable menus and focus rings

Semantic HTML

Color-contrast mindful tokens

Test with Lighthouse or axe
