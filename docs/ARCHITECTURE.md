# Architecture Notes

## Runtime composition

The application entry point is `src/App.tsx`. It composes the application-wide providers:

- `HelmetProvider` for document metadata support
- `QueryClientProvider` for TanStack Query
- `TooltipProvider` and toast providers for UI feedback
- `BrowserRouter` and the shared `Layout` for page routing and layout

## Routes

| Route | Page |
|---|---|
| `/` | Home / news index |
| `/news/:slug` | Article detail |
| `/category/:category` | Category listing |
| `/about` | About |
| `/privacy` | Privacy policy |
| `/terms` | Terms |
| `/contact` | Contact |
| `/sitemap.xml` | Sitemap |
| `*` | Not found |

## Data access

The Supabase client is defined in `src/integrations/supabase/client.ts`. It reads the browser-safe Vite variables `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY`.

The hooks in `src/hooks/useNewsData.ts` use TanStack Query to read:

- Articles joined to their category name and slug
- A single article by slug
- The latest featured article
- Up to five trending articles
- Articles filtered by category slug
- Categories
- The latest ten live updates

The migration in `supabase/migrations/` defines `categories`, `articles`, and `live_updates`, enables RLS, and defines public SELECT policies.

## Data flow

1. A route renders a page component.
2. The page requests data through a hook in `useNewsData.ts`.
3. TanStack Query manages request state and caching.
4. The hook queries Supabase using the shared client.
5. The page renders the returned records and related category metadata.

## Extension guidance

- Keep database access in dedicated hooks or a data-access layer rather than duplicating Supabase queries across page components.
- Keep query keys stable and specific to the requested resource.
- Add loading, empty, and error states for each data-driven page.
- Add tests for data mapping and query behaviour when introducing new hooks.
- Keep database migrations reviewed and versioned.
