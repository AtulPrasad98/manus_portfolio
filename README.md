# Atul Raj Prasad: Analytics & Automation

A responsive, single-page portfolio built with React, Vite, TypeScript, and a small Express/tRPC backend scaffold. The portfolio content lives in `client/src/pages/Home.tsx`; the database schema and migrations are kept under `drizzle/`. Portfolio artwork and the social share image are checked in under `client/public/images/portfolio/` so the visuals travel with a source download.

## Requirements

Use Node.js 22 and the repository-pinned pnpm version, 10.18.0. Install dependencies from the committed lockfile:

```sh
corepack enable
corepack prepare pnpm@10.18.0 --activate
pnpm install --frozen-lockfile
```

## Run the portfolio without platform credentials

The static Vite preview contains the portfolio UI and does not require a `.env` file or backend credentials:

```sh
pnpm dev:static
```

Create the static production site with:

```sh
pnpm build:static
```

The output is `dist/public/`; serve that directory from the site origin. It includes the local artwork, favicon, route manifest, and page files. The portfolio's content and contact links are client-side. A static deployment does not provide the optional Express/tRPC APIs.

## Optional full-stack server

The repository also contains the Express/tRPC server, OAuth integration, database schema, and migration history. These server-backed integrations are designed around the Manus platform. Copy `.env.example` to `.env` only when running the optional server locally, then configure the required values from a trusted secret manager or the private environment settings of the target host. `.env*`, credential files, local logs, databases, and private-key files are excluded by `.gitignore`; never replace the blank template values with real credentials in a commit.

`MANUS_JWT_SECRET`, `MANUS_API_KEY`, `DATABASE_URL`, and provider credentials are private. `server/_core/publicConfig.ts` intentionally exposes a small allowlist to browser code; `MANUS_API_BROWSER_KEY` is explicitly a browser-facing key and must be restricted by its provider. Do not add private keys to that public allowlist. Uploading the repository alone does not transfer Manus OAuth, API access, managed storage, configured secrets, or database records. Configure equivalent services separately before relying on server-backed features outside Manus.

The checked-in Drizzle SQL files are schema migrations, not a database dump or user-data backup. No local `.env` file, credential file, database dump, or key/certificate file is required for the static portfolio build.

## Checks

```sh
pnpm check
pnpm test
pnpm build:static
```

`pnpm build` creates the full server bundle as well as the static assets. `pnpm dev` runs the full-stack Express/Vite development server and needs whatever private integration values its selected features use.


## Public contact details

The portfolio source intentionally contains the contact details displayed on the live site. They are public portfolio content, not authentication credentials. If this repository will be public and you do not want those details repeated in source, replace or remove them from `client/src/pages/Home.tsx` before upload.
