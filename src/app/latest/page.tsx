import type { Metadata } from "next";
import { breadcrumbLd, pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/sections/PageHero";
import { SplitFeature } from "@/components/sections/SplitFeature";
import { ArticleExplorer } from "@/components/sections/ArticleExplorer";
import { QuoteCards } from "@/components/sections/QuoteCards";
import { NewsletterSection } from "@/components/sections/NewsletterSection";
import { CardGrid } from "@/components/sections/CardGrid";
import { CtaBanner } from "@/components/sections/CtaBanner";
import * as content from "@/content/latest";

export const metadata: Metadata = pageMetadata({
  title: "Latest News & Stories",
  description:
    "News, family stories, event updates and awareness articles from Spectrum Care Foundation in Lugbe, Abuja.",
  path: "/latest",
});

export default function LatestPage() {
  return (
    <>
      <JsonLd data={breadcrumbLd("/latest")} />

      <PageHero {...content.hero} theme="forest" />

      <SplitFeature
        id="featured"
        eyebrow={content.featured.eyebrow}
        headline={content.featured.headline}
        body={content.featured.body}
        button={content.featured.button}
        media={content.featured.media}
        accent="red"
        tone="white"
      />

      <ArticleExplorer
        eyebrow="Articles"
        headline="Recent articles"
        filters={content.filters}
        articles={content.articles}
      />

      <QuoteCards
        id="voices"
        eyebrow="Family voices"
        headline="In their own words"
        quotes={content.voices}
        tone="white"
      />

      <NewsletterSection
        headline={content.newsletter.headline}
        intro={content.newsletter.intro}
      />

      <CardGrid
        id="social"
        eyebrow="Follow along"
        headline="Join our community online"
        items={content.social}
        columns={3}
        tone="white"
      />

      <CtaBanner id="press" {...content.press} tone="charcoal" />
    </>
  );
}
