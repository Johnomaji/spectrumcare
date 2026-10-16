import type { Metadata } from "next";
import { breadcrumbLd, pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/sections/PageHero";
import { SplitFeature } from "@/components/sections/SplitFeature";
import { CardGrid } from "@/components/sections/CardGrid";
import { DataTable } from "@/components/sections/DataTable";
import { CtaBanner } from "@/components/sections/CtaBanner";
import * as content from "@/content/research";

export const metadata: Metadata = pageMetadata({
  title: "Research",
  description:
    "Spectrum Care Foundation's research agenda: building Nigerian evidence on early identification, parent training, inclusive education and access to care for neurodevelopmental conditions.",
  path: "/research",
});

export default function ResearchPage() {
  return (
    <>
      <JsonLd data={breadcrumbLd("/research")} />

      <PageHero {...content.hero} theme="amber" />

      <SplitFeature
        id="why-research"
        eyebrow={content.why.eyebrow}
        headline={content.why.headline}
        body={content.why.body}
        media={content.why.media}
        accent="red"
        tone="white"
      />

      <CardGrid
        id="priorities"
        eyebrow="Our research agenda"
        headline="Where we are focusing"
        items={content.priorities}
        columns={3}
        accent="teal"
        tone="mist"
      />

      <DataTable
        id="measurement"
        headline={content.measurement.headline}
        intro={content.measurement.intro}
        headers={content.measurement.headers}
        rows={content.measurement.rows}
        accent="teal"
        tone="white"
        caption="What Spectrum Care tracks and how often"
      />

      <SplitFeature
        id="ethics"
        eyebrow={content.ethics.eyebrow}
        headline={content.ethics.headline}
        body={content.ethics.body}
        list={content.ethics.list}
        media={content.ethics.media}
        accent="green"
        reverse
        tone="mist"
      />

      <DataTable
        id="publications"
        headline={content.publications.headline}
        intro={content.publications.intro}
        headers={content.publications.headers}
        rows={content.publications.rows}
        accent="teal"
        tone="white"
        caption="Published reports, briefs and articles"
      />

      <CtaBanner id="collaborate" {...content.collaborate} tone="teal" />
    </>
  );
}
