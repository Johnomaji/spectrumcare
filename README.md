# Spectrum Care Foundation

The website for Spectrum Care Foundation, an inclusive center for people with
neurodevelopmental disorders in Lugbe, Abuja. Built from the *Website Content
and Design Blueprint*: every page, section and line of copy follows that
document.

Next.js 16 (App Router) · React 19 · Tailwind CSS v4 · TypeScript.

## Running it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build (Vercel, or any Node host)
npm start       # serve the production build
npm run lint

npm run build:standalone   # self-hosting bundle in .next/standalone
npm run build:static       # plain HTML in out/, for hosting without Node
```

Every page is statically prerendered; see [Deploying](#deploying).

## Pages

| Page | Route |
| --- | --- |
| Home | `/` |
| About Us | `/about` |
| What We Do | `/what-we-do` |
| Our Projects & Reach | `/projects-and-reach` |
| Research | `/research` |
| Learn More About NDDs | `/learn` |
| Our Team & Events | `/team-and-events` |
| Join Our Team | `/join-our-team` |
| Latest | `/latest` |
| Donate | `/donate` |
| Privacy Policy / Terms | `/privacy`, `/terms` |

`/donate`, `/privacy` and `/terms` are not in the blueprint. They exist because
the header, footer and call-to-action buttons point at them; all three are
clearly marked as needing real content.

## Editing the copy

**All text lives in `src/content/`** — one file per page, plus `site.ts` for
the details that repeat everywhere (address, phone, email, social links,
navigation). Edit those files and the whole site follows; you should not need
to touch a component to change wording.

```
src/
  app/            one folder per route, each composing sections
    api/forms/    receives form submissions (server builds only)
  components/
    layout/       header, footer, floating WhatsApp button
    sections/     the reusable page sections (hero, card grid, FAQ, …)
    forms/        enquiry, application and newsletter forms
    ui/           buttons, cards, photo slots, colour tokens
  content/        ← the words
  lib/            form validation, submission, sitemap and robots data
```

## Design system

The palette, type and component styles come from the blueprint's design
direction. Brand colours are defined once in `src/app/globals.css` and used
through utilities such as `bg-brand-blue` or `text-brand-teal`:

| Token | Hex | Used for |
| --- | --- | --- |
| `brand-blue` | `#0162B5` | Primary brand colour, links, headings |
| `brand-red` | `#E01220` | Accents, About and Join pages |
| `brand-yellow` | `#FFBE11` | Highlights and illustrations — never text |
| `brand-green` | `#24A74B` | Services, growth, success states |
| `brand-teal` | `#009680` | Research, calm backgrounds |
| `brand-orange` | `#FB530F` | Main buttons and calls to action |
| `brand-charcoal` | `#424446` | Body text, footer |

Headings and body text use Poppins (self-hosted via `next/font`), falling back
to Arial. Cards are white with a coloured top bar, buttons are rounded with
orange for the primary action, and each card in a grid takes the next colour
from the logo palette (`src/components/ui/accents.ts`).

The site is mobile-first: large tap targets, a hamburger menu below 1280px, a
floating WhatsApp button, and no image weight until real photographs arrive.
Accessibility is built in — a skip link, visible focus rings, labelled form
fields, described photo slots, semantic tables and a single `h1` per page.

## Photographs

No stock photos are used. Each image slot renders a coloured block captioned
with the photograph to take, exactly as the blueprint specifies. To add a real
photo, put the file in `public/images/` and set `src:` alongside the `media:`
note in the relevant content file — the `media` text becomes the alt text.

## Forms

The enquiry, application and newsletter forms share one client-side submit
helper (`src/lib/submitForm.ts`) and one set of validation rules
(`src/lib/forms.ts`), so they behave the same however the site is hosted.
Each form also carries a honeypot field that silently discards bot
submissions.

Where a submission goes depends on which of the two variables is set:

- **Node hosting** — the browser posts to this site's own `/api/forms` route
  (`src/app/api/forms/route.node.ts`). It re-runs the same validation on the
  server, then forwards the submission as JSON to `FORM_WEBHOOK_URL`, which
  never leaves the server.
- **Static hosting** — set `NEXT_PUBLIC_FORM_ENDPOINT` to a hosted form
  service and the browser posts straight there. That URL is public, so use a
  provider whose endpoints are meant to be.

**Until one of them is set, submissions are not delivered** — the visitor is
shown the Foundation's phone number rather than a thank-you that would be
untrue, and a warning is logged on the server. CV uploads currently forward
the file name and size only; attach real file storage when you pick a
provider.

## SEO

In place already:

- A unique `<title>` and meta description on every page, from the blueprint.
- Canonical URLs, `og:url`, Open Graph and Twitter card tags, all built from
  `NEXT_PUBLIC_SITE_URL`. The two build modes stay consistent: the static
  export uses trailing slashes and its sitemap matches.
- A social preview image at `public/og.png` (1200×630). Regenerate it with
  `node scripts/generate-og-image.mjs` if the wording or colours change.
- Structured data (`src/lib/seo.ts`): `NGO` and `WebSite` on the home page,
  `BreadcrumbList` on each section, and `FAQPage` on What We Do and Learn.
  Contact details are only published once they are real — a placeholder phone
  number is filtered out rather than indexed.
- `sitemap.xml`, `robots.txt`, semantic headings with one `h1` per page,
  descriptive link text, alt text on every image slot, and static HTML with a
  self-hosted font for fast loads.

Needs doing by the team:

1. **Set `NEXT_PUBLIC_SITE_URL` at build time**, not just at runtime. It is
   baked into the pages; without it every canonical and sitemap URL points at
   `spectrumcare.com.ng`.
2. Fill in the real address, phone and email in `src/content/site.ts` — they
   flow into the structured data automatically.
3. Submit `sitemap.xml` in Google Search Console and Bing Webmaster Tools,
   and create a Google Business Profile for the Lugbe center; local search is
   where most parents will find you.
4. Replace the `[Sample]` articles with real posts. Note that the Latest page
   currently lists articles without individual URLs — each post needs its own
   page (`/latest/[slug]`) before it can rank or be shared on its own.

## Deploying

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | The live origin, used for metadata, `sitemap.xml` and `robots.txt`. Falls back to `https://spectrumcare.com.ng`. |
| `FORM_WEBHOOK_URL` | Form destination for Node hosting (kept server-side). |
| `NEXT_PUBLIC_FORM_ENDPOINT` | Form destination for static hosting (public). |

Node 20.9 or newer is required to build. The site runs in two shapes from the
same source — see the comment at the top of `next.config.ts`.

### 1. Vercel

```bash
npm run build
```

Import the repository, set `NEXT_PUBLIC_SITE_URL` and `FORM_WEBHOOK_URL`,
deploy. No `vercel.json` and no output mode needed: every page is
prerendered, and `/api/forms` is the only server function.

### 2. A server you control (VPS, Docker, or shared hosting with Node)

Many cPanel hosts offer "Setup Node.js App", which is enough:

```bash
npm run build:standalone
```

That writes a self-contained server to `.next/standalone`. Upload it along
with two folders it does not include:

```
.next/standalone/     → the app root on the server
.next/static/         → copy to <app root>/.next/static
public/               → copy to <app root>/public
```

Start `server.js` through the host's Node app manager (or `node server.js`),
set `PORT`, and put the host's proxy, nginx or LiteSpeed in front rather than
exposing the Node process directly.

### 3. Static-only shared hosting (no Node)

```bash
npm run build:static
```

This writes plain HTML to `out/`; upload its contents to `public_html`. URLs
get a trailing slash (`/about/index.html`) so Apache and LiteSpeed serve them
without any rewrite rules, and image optimisation is switched off because
there is no server to do it.

Set `NEXT_PUBLIC_FORM_ENDPOINT` **before building** — it is baked into the
pages. The `/api/forms` route is excluded from this build automatically: its
filename ends in `.node.ts`, which only the server build's `pageExtensions`
picks up.

## Before going live

See **[PLACEHOLDERS.md](PLACEHOLDERS.md)** — every placeholder, consent
requirement and statement to confirm, grouped by job.
