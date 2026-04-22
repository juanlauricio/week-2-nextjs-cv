# Week 2 Weekly Report — Next.js CV Website

**Participant:** Juan Miguel Lauricio
**Program:** AI Agent Developer Workshop
**Week:** 2 — Modern Web Development with Next.js
**Date Submitted:** June 2025

---

## Overview

Week 2 focused on building a professional portfolio/CV website using Next.js 16 with the App Router, TypeScript, and Tailwind CSS. The project demonstrates component-based architecture, modern React patterns, and production deployment using Vercel.

---

## Objectives

- Scaffold a production-ready Next.js application using the App Router
- Design and implement a multi-section CV website with 8 reusable components
- Apply professional UI design principles using Tailwind CSS v4
- Commit source code using Git with conventional commits
- Deploy the application to Vercel for public access

---

## Technical Stack

| Technology | Version | Purpose |
|---|---|---|
| Next.js | 16.2.4 | Full-stack React framework (App Router) |
| React | 19 | UI component library |
| TypeScript | 5.x | Type-safe development |
| Tailwind CSS | v4 | Utility-first styling |
| Node.js | 22.18.0 | JavaScript runtime |
| Git | 2.x | Version control |
| Vercel | — | Deployment platform |

---

## Implementation Details

### Project Structure

```
week-2-nextjs-cv/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout with metadata
│   │   ├── page.tsx         # Main page composing all sections
│   │   └── globals.css      # Global styles
│   └── components/
│       ├── Header.tsx       # Sticky nav with mobile hamburger
│       ├── Hero.tsx         # Gradient hero with avatar initials
│       ├── About.tsx        # Bio and personal details card
│       ├── Skills.tsx       # Skill categories with badge tags
│       ├── Experience.tsx   # Timeline-style experience entries
│       ├── Education.tsx    # Education cards with courses
│       ├── Contact.tsx      # Contact info + opportunities panel
│       └── Footer.tsx       # Footer with nav links
├── public/                  # Static assets
├── package.json
├── tsconfig.json
└── next.config.ts
```

### Design System

The site uses a professional **blue/navy corporate design** with:
- **Primary background:** `bg-blue-900` for header and footer
- **Hero gradient:** `from-blue-900 via-blue-800 to-blue-700`
- **Section alternation:** white (`bg-white`) and light gray (`bg-slate-50`)
- **Accent color:** `text-blue-600`, `bg-blue-100`, `border-blue-600`
- **Typography:** Geist Sans (Google Font), smooth antialiasing

### Key Components

**Header** — Sticky navbar with responsive hamburger menu for mobile, using client-side state (`"use client"`) for toggle behavior.

**Hero** — Full-width gradient banner with avatar initials placeholder, name, title, description, and two CTA buttons (Contact + GitHub).

**About** — Two-column layout: narrative bio on the left, personal details card on the right with email, GitHub, university info.

**Skills** — Four skill category cards using flex-wrap badge pills: Programming Languages, Web Technologies, AI & Agents, Tools & Infrastructure.

**Experience** — Left-border accent timeline with role, organization, period badge, description, and bullet highlights.

**Education** — Rounded white cards for each degree with course tags, period badges, and location info.

**Contact** — Contact items with icon boxes + an "opportunities" panel listing desired positions.

**Footer** — Full-width navy footer with name, program info, nav links, and copyright.

---

## Challenges and Solutions

**Challenge 1: `page.tsx` boilerplate override**
The Next.js scaffold generated default boilerplate content. The file was fully replaced by rewriting the Home component to import and compose the 8 CV section components.

**Challenge 2: Tailwind CSS v4 configuration**
Tailwind CSS v4 uses `@tailwindcss/postcss` instead of the classic `tailwind.config.js` approach. The scaffold handled this automatically via the `app-tw` template.

**Challenge 3: Client vs Server components**
The `Header` component requires `useState` for the mobile menu toggle, making it a Client Component (`"use client"`). All other components remain Server Components for optimal performance.

---

## Results

- **Build status:** ✓ Compiled successfully (Turbopack)
- **TypeScript check:** ✓ No errors
- **Static generation:** ✓ Page pre-rendered as static content
- **Git commits:** 4 commits on `main` branch
- **Deployment:** ✓ Live on Vercel — https://week-2-nextjs-641o4odqr-juan-lauricio.vercel.app
- **GitHub Repository:** https://github.com/juanlauricio/week-2-nextjs-cv

---

## Skills Demonstrated

- Next.js 16 App Router architecture
- TypeScript component design patterns
- Tailwind CSS utility-first responsive design
- React Client Components vs Server Components
- Git workflow with conventional commits
- Production build verification and Vercel deployment

---

## Reflection

Building the CV website reinforced my understanding of modern React development with the App Router paradigm. The component decomposition approach made the codebase maintainable and each section independently editable. Using Tailwind CSS v4's utility classes enabled rapid prototyping of a professional blue/navy design without custom CSS. The project also highlighted the importance of the `"use client"` directive — only components that need browser interactivity (like the hamburger menu) require it, keeping the rest of the site fully server-rendered for better performance.

---

## Next Steps (Week 3)

- Add Prisma ORM integration with Neon PostgreSQL
- Implement full CRUD operations for a `Person` resource
- Build Next.js Server Actions for form handling
- Create dynamic routes: `/persons`, `/persons/new`, `/persons/[id]`, `/persons/[id]/edit`
