# Week 3 Weekly Report — Full-Stack Person App with Database Integration

**Participant:** Juan Miguel Lauricio
**Program:** AI Agent Developer Workshop
**Week:** 3 — Full-Stack Development with Person App & Database Integration
**Date Submitted:** April 2026

---

## Overview

Week 3 focused on extending the Week 2 Next.js CV website into a full-stack application by integrating Prisma ORM with a Neon PostgreSQL database. The primary deliverable is a fully functional Person App with complete CRUD (Create, Read, Update, Delete) operations using Next.js Server Actions, dynamic routing, and a production-ready cloud database.

---

## Objectives

- Connect a Neon PostgreSQL cloud database to the existing Next.js application
- Configure Prisma ORM v7 with the `@prisma/adapter-pg` driver adapter
- Build a complete Person resource with four CRUD routes
- Implement Next.js Server Actions for all database mutations
- Deploy the full-stack application to Vercel with environment variables

---

## Technical Stack

| Technology | Version | Purpose |
|---|---|---|
| Next.js | 16.2.4 | Full-stack React framework (App Router) |
| Prisma ORM | 7.7.0 | Type-safe database ORM |
| @prisma/adapter-pg | 7.7.0 | PostgreSQL driver adapter |
| Neon PostgreSQL | — | Serverless cloud database |
| pg | 8.x | PostgreSQL Node.js client |
| Vercel | — | Production deployment |

---

## Implementation Details

### Database Schema

The `Person` model was defined in `prisma/schema.prisma` with the following fields:

```prisma
model Person {
  id        String   @id @default(cuid())
  firstName String
  lastName  String
  email     String   @unique
  phone     String?
  address   String?
  city      String?
  country   String?
  bio       String?
  website   String?
  company   String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

The schema was pushed to Neon using `npx prisma db push`, which created the table without needing a migration file.

### Project Structure (New Files)

```
src/
├── lib/
│   └── prisma.ts              # Prisma singleton client with PrismaPg adapter
├── app/
│   ├── actions/
│   │   └── persons.ts         # Server Actions: create, update, delete
│   └── persons/
│       ├── page.tsx           # /persons — List all persons
│       ├── new/
│       │   └── page.tsx       # /persons/new — Create person form
│       └── [id]/
│           ├── page.tsx       # /persons/[id] — View person profile
│           └── edit/
│               └── page.tsx   # /persons/[id]/edit — Edit person form
```

### Prisma Client Setup (Prisma v7)

Prisma v7 uses a driver adapter pattern instead of the classic `DATABASE_URL` in `schema.prisma`. The connection is configured via `prisma.config.ts` and instantiated in `src/lib/prisma.ts`:

```typescript
import { PrismaClient } from "@/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

function createPrismaClient() {
  const adapter = new PrismaPg(process.env.DATABASE_URL!);
  return new PrismaClient({ adapter });
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
```

The global singleton pattern prevents multiple Prisma Client instances during Next.js hot reloads in development.

### Server Actions

All database mutations are handled through Next.js Server Actions in `src/app/actions/persons.ts`:

- **`createPerson(formData)`** — Creates a new Person record and redirects to `/persons`
- **`updatePerson(id, formData)`** — Updates an existing record and redirects to `/persons/[id]`
- **`deletePerson(id)`** — Deletes a record and redirects to `/persons`

Each action calls `revalidatePath()` to invalidate the cache and ensure the list reflects the latest data.

### CRUD Routes

| Route | Method | Description |
|---|---|---|
| `/persons` | GET | Lists all persons ordered by creation date |
| `/persons/new` | GET + POST | Form to create a new person |
| `/persons/[id]` | GET | Full profile view with edit/delete actions |
| `/persons/[id]/edit` | GET + POST | Pre-populated edit form |

---

## Challenges and Solutions

**Challenge 1: Prisma v7 breaking change — no `url` in schema.prisma**
Prisma v7 removed the `url` property from the datasource block in `schema.prisma`. The connection URL must now be passed via the driver adapter in code. The fix was using `PrismaPg(process.env.DATABASE_URL!)` in the client factory function.

**Challenge 2: Vercel build failing — missing generated Prisma client**
Vercel does not run `prisma generate` automatically. The build failed with `Module not found: Can't resolve '@/generated/prisma/client'`. The fix was updating the build script in `package.json`:
```json
"build": "prisma generate && next build"
```

**Challenge 3: async `params` in Next.js 16**
Next.js 16 requires route `params` to be awaited as a Promise. The page components were updated to use `{ params: Promise<{ id: string }> }` with `const { id } = await params`.

---

## Results

- **Build status:** ✓ Compiled successfully (Turbopack)
- **TypeScript check:** ✓ No errors
- **Database:** ✓ Neon PostgreSQL — Person table created via `prisma db push`
- **CRUD routes:** ✓ All 4 routes operational
- **Git commits:** 8 commits on `main` branch
- **Deployment:** ✓ Live on Vercel — https://week-2-nextjs-po40vgivw-juan-lauricio.vercel.app
- **GitHub Repository:** https://github.com/juanlauricio/week-2-nextjs-cv

---

## Skills Demonstrated

- Prisma ORM v7 with driver adapter pattern
- Neon PostgreSQL serverless database setup
- Next.js Server Actions for form handling and database mutations
- Dynamic routing with async `params` in Next.js 16
- Cache revalidation with `revalidatePath()`
- Full-stack CRUD application architecture
- Production deployment with environment variables on Vercel

---

## Reflection

Week 3 marked a significant step from static front-end development to full-stack application building. Integrating Prisma ORM with Neon PostgreSQL demonstrated how modern Next.js applications handle data persistence without needing a separate backend API. Server Actions streamlined the form-to-database flow considerably — instead of building API routes, mutations happen directly in server-side functions co-located with the UI.

The most valuable lesson was understanding how Prisma v7's driver adapter model works. The shift from the classic `DATABASE_URL` in the schema file to passing the adapter at client instantiation time is a cleaner architecture, but required careful reading of updated documentation to avoid build failures. The Vercel deployment challenge also reinforced the importance of understanding the CI/CD build pipeline — tools like Prisma that generate code require explicit build steps.

---

## Next Steps (Week 4)

- Build a custom MCP server using the Model Context Protocol SDK
- Expose CRUD tools for the Person resource over MCP
- Enable Claude Desktop or VS Code Copilot to perform database operations via natural language
- Deploy the MCP server and document tool definitions
