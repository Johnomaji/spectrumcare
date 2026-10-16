import type { Metadata } from "next";
import { mainNav, site } from "@/content/site";

/**
 * Open Graph fields that every page shares.
 *
 * Next replaces the whole `openGraph` object when a page defines one rather
 * than merging it, so any page that sets `url` has to repeat these or it
 * loses its preview image.
 */
export const openGraphDefaults: Metadata["openGraph"] = {
  type: "website",
  siteName: site.name,
  locale: "en_NG",
  images: [
    {
      url: "/og.png",
      width: 1200,
      height: 630,
      alt: "Spectrum Care Foundation — every mind is different, every child deserves to thrive.",
    },
  ],
};

/**
 * Per-page metadata. Adds the canonical URL and the Open Graph URL, which
 * Next does not infer on its own; the title, description, og: and twitter:
 * tags are filled from these and from the defaults in the root layout.
 */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  /** Route path, beginning with a slash. */
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { ...openGraphDefaults, url: path },
  };
}

/** Placeholders must never reach structured data, so they are dropped. */
function real(value: string | undefined): string | undefined {
  if (!value) return undefined;
  const trimmed = value.trim();
  return trimmed.startsWith("[") ? undefined : trimmed;
}

function compact<T extends Record<string, unknown>>(object: T): T {
  return Object.fromEntries(
    Object.entries(object).filter(([, value]) => value !== undefined),
  ) as T;
}

/**
 * Who the Foundation is, for search engines and assistants. Only details that
 * have been filled in are published — a placeholder phone number in structured
 * data is worse than none.
 */
export function organizationLd() {
  const address = compact({
    "@type": "PostalAddress",
    streetAddress: real(site.address.street),
    addressLocality: site.address.area,
    addressRegion: `${site.address.city}, ${site.address.state}`,
    addressCountry: "NG",
  });

  const sameAs = site.socials
    .map((social) => real(social.href))
    .filter((href): href is string => Boolean(href));

  return compact({
    "@context": "https://schema.org",
    "@type": "NGO",
    name: site.name,
    alternateName: site.shortName,
    url: site.url,
    logo: new URL("/icon.svg", site.url).toString(),
    image: new URL("/og.png", site.url).toString(),
    description: site.tagline,
    address,
    telephone: real(site.phone),
    email: real(site.email),
    areaServed: "Abuja, Federal Capital Territory, Nigeria",
    sameAs: sameAs.length > 0 ? sameAs : undefined,
    knowsAbout: [
      "Autism spectrum disorder",
      "ADHD",
      "Cerebral palsy",
      "Down syndrome",
      "Applied behaviour analysis",
      "Speech and language therapy",
      "Inclusive education",
    ],
  });
}

/** The site itself, which helps search engines show the right site name. */
export function webSiteLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: site.url,
    inLanguage: "en-NG",
  };
}

/** Breadcrumbs for a second-level page. */
export function breadcrumbLd(path: string) {
  const page = mainNav.find((item) => item.href === path);
  if (!page) return null;

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: site.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: page.label,
        item: new URL(path, site.url).toString(),
      },
    ],
  };
}

export function faqLd(items: readonly { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}
