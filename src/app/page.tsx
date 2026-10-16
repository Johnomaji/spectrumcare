import { JsonLd } from "@/components/JsonLd";
import { organizationLd, webSiteLd } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { StatStrip } from "@/components/sections/StatStrip";
import { SplitFeature } from "@/components/sections/SplitFeature";
import { CardGrid } from "@/components/sections/CardGrid";
import { Tabs } from "@/components/sections/Tabs";
import { NumberedCards } from "@/components/sections/NumberedCards";
import { Testimonial } from "@/components/sections/Testimonial";
import { ArticleCards } from "@/components/sections/ArticleCards";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { VideoFeature } from "@/components/sections/VideoFeature";
import { ContactSection } from "@/components/sections/ContactSection";
import * as home from "@/content/home";

export default function HomePage() {
  return (
    <>
      <JsonLd data={organizationLd()} />
      <JsonLd data={webSiteLd()} />

      <PageHero {...home.hero} theme="sunset" size="home" />

      <StatStrip stats={home.stats} />

      <SplitFeature
        id="who-we-are"
        eyebrow={home.whoWeAre.eyebrow}
        headline={home.whoWeAre.headline}
        body={home.whoWeAre.body}
        button={home.whoWeAre.button}
        media={home.whoWeAre.media}
        accent="red"
        tone="white"
      />

      <CardGrid
        id="services"
        eyebrow="How we support you"
        headline="Four ways we walk with your family"
        items={home.services}
        columns={4}
        tone="mist"
      />

      <Tabs id="how-we-help" headline="How can we help you?" items={home.audienceTabs} />

      <NumberedCards
        id="our-approach"
        eyebrow="Our approach"
        headline="One child. Five pillars. A whole community."
        items={home.pillars}
        tone="mist"
      />

      <Testimonial {...home.testimonial} accent="green" tone="white" />

      <ArticleCards
        id="latest"
        eyebrow="Latest"
        headline="Latest from Spectrum Care"
        articles={home.latestArticles}
        button={{ label: "View all news", href: "/latest" }}
      />

      <CtaBanner {...home.joinBanner} tone="teal" />

      <VideoFeature {...home.video} />

      <CtaBanner id="support" {...home.supportBanner} tone="orange" />

      <ContactSection />
    </>
  );
}
