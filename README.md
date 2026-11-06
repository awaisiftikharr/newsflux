# NewsFlux

NewsFlux is a modern, multi-page news application built with React and TypeScript. It retrieves article, category, and live-update content from Supabase and uses TanStack Query to manage asynchronous data fetching.

## Features

- Home page for discovering news articles
- Article detail pages at `/news/:slug`
- Category pages at `/category/:category`
- Featured and trending article queries
- Live updates feed
- About, contact, privacy, terms, and sitemap routes
- Responsive UI built with reusable components

## Technology

| Area | Technology |
|---|---|
| UI | React 18, TypeScript |
| Build | Vite |
| Styling | Tailwind CSS |
| Routing | React Router |
| Data fetching | TanStack Query |
| Backend/data | Supabase |
| Testing | Vitest, Testing Library, jsdom |
| Quality | ESLint |

## Getting started

### Prerequisites

- Node.js 20+
- npm
- A Supabase project with the NewsFlux schema

### Install

```bash
npm install
```

Create your local environment file:

```bash
cp .env.example .env
```

Set the values in `.env`, then start the development server:

```bash
npm run dev
```

Vite prints the local development URL in the terminal.

## Environment variables

| Variable | Purpose |
|---|---|
| `VITE_SUPABASE_URL` | Supabase project URL |
| `VITE_SUPABASE_PUBLISHABLE_KEY` | Supabase publishable (legacy anon) client key |

Only publishable/anon credentials belong in browser code. **Never put a Supabase service-role key or secret key in a `VITE_` variable or commit it to Git.** Protect exposed tables with Row Level Security (RLS), least-privilege grants, and reviewed policies.

## Useful commands

```bash
npm run dev       # Start local development
npm run build     # Create production build
npm run build:dev # Build using development mode
npm run lint      # Run ESLint
npm run test      # Run Vitest once
npm run test:watch # Run Vitest in watch mode
npm run preview   # Preview the production build
```

## Application structure

```text
src/
  components/             # Shared UI and layout components
  hooks/
    useNewsData.ts        # Article, category and live-update queries
  integrations/
    supabase/             # Supabase client and generated types
  pages/
    About.tsx
    ArticlePage.tsx
    CategoryPage.tsx
    Contact.tsx
    Index.tsx
    NotFound.tsx
    Privacy.tsx
    Sitemap.tsx
    Terms.tsx
  App.tsx                 # Providers and route configuration
supabase/
  migrations/             # Database schema migrations
```

## Data model

The checked-in migration defines public-read tables for:

- `categories` — category names, slugs and descriptions
- `articles` — article content, metadata, publication date and category
- `live_updates` — short news updates and timestamps

The migration enables RLS and defines public SELECT policies for these tables. Review all policies and database grants in your own Supabase project before deployment; this README is not a substitute for a live security audit.

## Testing and release checklist

Before merging or deploying:

1. Run `npm run lint`.
2. Run `npm run test`.
3. Run `npm run build`.
4. Verify the Supabase environment variables are set in the deployment environment.
5. Verify RLS policies and grants in Supabase.
6. Test article, category, and live-update pages against populated data.

## Security

- Keep `.env` local and untracked.
- Use `.env.example` only for variable names and safe placeholders.
- Never commit service-role keys, secret keys, access tokens, or private data.
- Rotate any credential that is genuinely secret and was exposed.
- Removing a file from the latest commit does not remove it from earlier Git history. History rewriting is a separate operation and should only be done when warranted.

## Project status

This repository's source includes the routes and data hooks described above. Deployment health, live Supabase configuration, and test/build outcomes must be verified in the target environment; they are not asserted here.
