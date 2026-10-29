# Laxmi Manohar Meda — Java Full Stack Developer with AI Portfolio

A single-page technical portfolio built for a Java full stack developer with AI experience. The design uses the visual language of engineering documentation, logic traces, and lab notes without turning the site into a terminal theme.

Professional claims, dates, education, and technologies are separated into typed data files and are based on the supplied résumé.

## Stack

- Next.js 16 with the App Router
- React 19 and TypeScript
- Tailwind CSS 4 plus project-specific CSS
- React Server Components by default
- MDX support for future engineering notes
- Self-hosted Geist Sans and Geist Mono font files

## Install and run

Requirements: Node.js 20.9 or newer and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production checks

```bash
npm run lint
npm run build
npm run start
```

The production build uses Next.js with Webpack for deterministic CI and sandbox compatibility. The application is otherwise a standard Next.js deployment.

## Deploy to Vercel

1. Push this directory to a Git repository.
2. In Vercel, choose **Add New → Project** and import the repository.
3. Keep the detected Next.js framework settings and default build command.
4. Deploy.
5. Optional but recommended: set `NEXT_PUBLIC_SITE_URL` to the final production or custom-domain URL, then redeploy. Vercel production URL variables are used automatically when this value is omitted.

No database, server secret, or external API is required.

## Update portfolio content

Content is kept out of the presentation components:

- `data/profile.ts` — identity, contact links, hero copy, and engineering metadata
- `data/experience.ts` — roles, dates, résumé-backed highlights, technical details, and per-role environments
- `data/projects.ts` — case-study records; only entries with `featured: true` render
- `data/skills.ts` — toolkit groups and secondary engineering work
- `data/engineering.ts` — debugging steps and hardware/software layers
- `data/education.ts` — school, degree, dates, and GPA
- `data/notes.ts` — published-note registry

Do not set a project to `featured: true` until its claims and links have been verified.

### Add an engineering note

MDX is configured through `next.config.ts` and `mdx-components.tsx`. Add a real note under a route such as `app/notes/my-note/page.mdx`, then add its verified metadata to `data/notes.ts`. The home page intentionally displays “Notes are being written” while the registry is empty.

### Replace the résumé

Replace this file while preserving the filename:

```text
public/resume/laxmi-manohar-meda-resume.pdf
```

Both **View résumé** and **Download résumé** use that path.

### Update SEO and social preview

- Main metadata: `app/layout.tsx`
- Structured Person data: `app/page.tsx`
- Social preview image: `public/og.png`
- Crawler files: `app/robots.ts` and `app/sitemap.ts`
- App manifest: `app/manifest.ts`

## Project structure

```text
app/          routes, metadata, local fonts, and global styles
components/   section and interaction components
data/         typed portfolio content
lib/          deployment URL helpers
public/       résumé and social preview assets
types/        shared content types
```
