# Before you publish

Everything on the site that still needs a real detail, grouped by job. Anything
written in `[square brackets]` is a placeholder. Search the repository for `[`
inside `src/content/` to find any that this list misses.

## 1. Contact and organisation details — `src/content/site.ts`

One file controls the header, footer and contact section.

| Field | Replace with |
| --- | --- |
| `address.street` | `[Street address]` → the real street address |
| `phone` | `[+234 000 000 0000]` |
| `whatsappNumber` | Digits only, international format, e.g. `2348012345678` |
| `email` | Set to `info@spectrumcare.com.ng` — confirm the mailbox is live and monitored |
| `openingHours` | `[Monday – Friday, 8:00 am – 5:00 pm]` |
| `registration` | `[Registration details]` for the footer legal line |
| `socials[]` | The four `[https://…]` profile links; delete any channel you do not use |
| `url` | Already set to `https://spectrumcare.com.ng`. Override per environment with `NEXT_PUBLIC_SITE_URL` |
| `copyrightYear` | Bump each January (kept fixed so pages prerender deterministically) |

## 2. Numbers and impact claims

- `src/content/home.ts` → `stats`: families supported, partner schools,
  children screened free.
- `src/content/projects.ts` → `stats`: children reached, schools and teachers
  trained, parents trained, sponsored therapy places.

Publish only numbers you can evidence.

## 3. People — `src/content/team.ts`

- `trustees`: four `[Name]` and `[Two-line bio]` entries.
- `leadership`: eight `[Name]` entries (the roles and one-line descriptions are
  written already).
- Square portraits for each person, with a consistent crop and background.
- `src/content/about.ts` → `founder`: the Executive Director's name and their
  own words. The quote in place is a draft to personalise.

## 4. Quotes, stories and consent

- `src/content/home.ts` → `testimonial`.
- `src/content/join.ts` → `staffVoice`.
- `src/content/latest.ts` → `voices` (parent, teacher, partner).
- `src/content/projects.ts` → `spotlight`: the full story of one family.

Get **written consent** for every quote, name, story and photograph, especially
for children.

## 5. Photographs and video

Every coloured block on the site is a photo slot captioned with the shot to
take. To drop in a real photograph:

1. Put the file in `public/images/`.
2. Add `src: "/images/your-photo.jpg"` next to the `media:` note in the content
   file (`media` then doubles as the alt text, so keep it descriptive).

The video slot on the home page (`src/content/home.ts` → `video`) needs the
embed code adding in `src/components/sections/VideoFeature.tsx`, with captions.

## 6. Programmes, events and articles

- `src/content/projects.ts` → `programmes`: edit the list to match what you are
  actually running, and set each status label honestly
  (`Ongoing` / `Seeking sponsors` / `Coming soon`).
- `src/content/team.ts` → `events`: real dates `[DD MMM]` and venues; the
  gallery needs eight real event photographs with captions.
- `src/content/latest.ts` → `featured` and `articles`: remove every `[Sample]`
  item and replace it with a real post.
- `src/content/home.ts` → `latestArticles`: the same three samples appear on the
  home page.

## 7. Downloads and links

- `src/content/learn.ts` → `resources`: the PDF, video and webinar links.
- `src/content/learn.ts` → `trustedSources`: add the real link for each source,
  and name the `[Nigerian health body]` and `[Disability rights organisation]`.
- `src/content/research.ts` → `publications`: titles, years and files.
- `src/content/projects.ts` → `partnerSlots`: partner logos, with permission.
- `src/content/latest.ts` → `social`: the Instagram handle, Facebook page and
  WhatsApp community link.

A link still in brackets renders as a greyed, non-clickable control, so nothing
on the site leads to a dead page.

## 8. Donations — `src/app/donate/page.tsx`

Decide how gifts are received (bank transfer, a payment gateway such as
Paystack or Flutterwave, or both), then replace the account details and the
payment link. Confirm the wording with your Board.

## 9. Forms

The enquiry, application and newsletter forms need a destination before
launch. Which variable you set depends on the hosting:

- Hosting with Node → `FORM_WEBHOOK_URL` (stays private on the server).
- Static-only hosting → `NEXT_PUBLIC_FORM_ENDPOINT`, pointing at a hosted
  form service. It is public, so use a provider designed for that.

Until one is set, nothing is delivered: visitors are shown your phone number
instead of a false "thank you". Set it, then send a test through each of the
three forms.

The CV upload is **not** forwarded yet — only the file name and size. Wire up
file storage, or an email service that accepts attachments, when you choose a
provider (`src/app/api/forms/route.node.ts`).

## 10. Statements to confirm before publishing

- About → *Why a Foundation*: governance and reporting statements, with the
  Board.
- What We Do → *Health & Diagnostics*: the final test list, pharmacy scope, and
  whether the laboratory is open to the public.
- Research → *How we measure* and *Ethical by design*: confirm the reporting
  cadence and that the named policies exist.

## 11. Search and social

- The domain is `spectrumcare.com.ng`, already the default. Set
  `NEXT_PUBLIC_SITE_URL` **at build time** only to override it, for example
  on a staging site. Every canonical URL, the sitemap and the social preview
  link are built from it.
- Decide whether the site lives on the apex (`spectrumcare.com.ng`) or on
  `www`, and redirect the other to it. The value above must match the one
  you keep, or the canonical tags will point at a URL that redirects.
- Once the address, phone and email in `src/content/site.ts` are real, they
  publish themselves into the site's structured data; until then they are
  deliberately left out of it.
- Regenerate the social preview image after any branding change:
  `node scripts/generate-og-image.mjs`.
- Submit the sitemap to Google Search Console and Bing Webmaster Tools, and
  claim a Google Business Profile for the Lugbe center.
- Each real article needs its own page before it can rank; the Latest page
  currently holds samples without individual URLs.

## 12. Brand and legal

- Supply a **Foundation** version of the logo. The current artwork reads "Care
  Limited"; the site uses a text wordmark in `src/components/ui/Logo.tsx` as a
  stand-in.
- `src/app/privacy/page.tsx` and `src/app/terms/page.tsx` are shells listing
  what each page should cover. Have your lawyer draft the wording, and also
  review the footer legal line.
- Fee schedules are deliberately not published. They are offered on request in
  the FAQ; add a Fees page later if you decide to.
