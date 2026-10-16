import type { Metadata } from "next";
import { breadcrumbLd, pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/sections/PageHero";
import { StatStrip } from "@/components/sections/StatStrip";
import { CardGrid } from "@/components/sections/CardGrid";
import { SplitFeature } from "@/components/sections/SplitFeature";
import { TeamNote } from "@/components/ui/TeamNote";
import { LogoStrip } from "@/components/sections/LogoStrip";
import * as content from "@/content/projects";

export const metadata: Metadata = pageMetadata({
  title: "Our Projects & Reach",
  description:
    "See how Spectrum Care Foundation brings free screenings, school inclusion, parent training and sponsored therapy to families in Lugbe, Abuja and beyond.",
  path: "/projects-and-reach",
});

export default function ProjectsPage() {
  return (
    <>
      <JsonLd data={breadcrumbLd("/projects-and-reach")} />

      <PageHero {...content.hero} theme="ocean" />

      <StatStrip stats={content.stats} />

      <CardGrid
        id="programmes"
        eyebrow="Our programmes"
        headline="Programmes that change what's possible"
        items={content.programmes}
        columns={3}
        accent="orange"
        tone="mist"
      >
        <TeamNote>{content.programmesNote}</TeamNote>
      </CardGrid>

      <SplitFeature
        id="spotlight"
        eyebrow={content.spotlight.eyebrow}
        headline={content.spotlight.headline}
        body={content.spotlight.body}
        button={content.spotlight.button}
        media={content.spotlight.media}
        accent="red"
        tone="white"
      />

      <SplitFeature
        id="reach"
        eyebrow={content.reach.eyebrow}
        headline={content.reach.headline}
        body={content.reach.body}
        list={content.reach.list}
        listAccent="orange"
        media={content.reach.media}
        accent="green"
        reverse
        tone="mist"
      />

      <LogoStrip
        id="partners"
        headline="Our partners"
        intro="Together we reach further."
        slots={content.partnerSlots}
        tone="white"
      />

      <CardGrid
        id="get-involved"
        eyebrow="Get involved"
        headline="There's a place for you in this story"
        items={content.getInvolved}
        columns={3}
        accent="orange"
        tone="mist"
      />
    </>
  );
}
