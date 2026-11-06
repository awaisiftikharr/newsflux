# Security Checklist

## Browser configuration

The frontend uses Vite environment variables. Values prefixed with `VITE_` are exposed to the browser bundle. Only public configuration and Supabase publishable/legacy anon credentials should be used there.

Never place any of the following in frontend code, `.env.example`, or a public repository:

- Supabase service-role or secret keys
- Private API tokens
- Database passwords
- Signing secrets

## Supabase

- Enable Row Level Security on tables exposed through the API.
- Review policies and grants for every table and operation.
- Keep public read access limited to content intended for public display.
- Do not rely on hidden UI controls as an authorization boundary.
- Re-check policies whenever a new table or write endpoint is introduced.

## Local development

- Store actual local values in an untracked `.env`.
- Use `.env.example` only as a template with placeholders.
- Do not commit user data, production exports, or credentials.
- If a true secret is exposed, revoke or rotate it first. Removing the file from the latest commit does not remove old Git history.

## Release checks

- Run lint, tests, and production build.
- Confirm environment variables are configured in the deployment platform.
- Verify RLS and grants in the Supabase dashboard.
- Review dependency alerts and repository access permissions.
