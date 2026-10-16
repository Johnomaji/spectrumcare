import type { Metadata } from "next";
import { breadcrumbLd, faqLd, pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/sections/PageHero";
import { SplitFeature } from "@/components/sections/SplitFeature";
import { CardGrid } from "@/components/sections/CardGrid";
import { ChecklistSection } from "@/components/sections/ChecklistSection";
import { Steps } from "@/components/sections/Steps";
import { Accordion } from "@/components/sections/Accordion";
import { DataTable } from "@/components/sections/DataTable";
import { LogoStrip } from "@/components/sections/LogoStrip";
import * as content from "@/content/learn";

export const metadata: Metadata = pageMetadata({
  title: "Learn About Neurodevelopmental Disorders",
  description:
    "Clear, compassionate guidance on autism, ADHD, cerebral palsy, Down syndrome, learning disabilities and more: early signs, myths and facts, and where to find help in Nigeria.",
  path: "/learn",
});

export default function LearnPage() {
  return (
    <>
      <JsonLd data={breadcrumbLd("/learn")} />
      <JsonLd data={faqLd(content.myths)} />

      <PageHero {...content.hero} theme="night" />

      <SplitFeature
        id="basics"
        eyebrow={content.basics.eyebrow}
        headline={content.basics.headline}
        body={content.basics.body}
        media={content.basics.media}
        accent="red"
        tone="white"
      />

      <CardGrid
        id="conditions"
        eyebrow="Conditions we support"
        headline="Know the conditions"
        items={content.conditions}
        columns={4}
        tone="mist"
      />

      <ChecklistSection
        id="early-signs"
        headline="Trust your instinct: early signs to look out for"
        intro="These signs do not mean a child has a disorder, but if you notice them, an early conversation is always worth having."
        items={content.earlySigns}
        accent="blue"
        tone="white"
      />

      <Steps
        id="what-to-do"
        headline="Worried about your child? Four steps to take."
        steps={content.whatToDo}
        tone="mist"
      />

      <Accordion
        id="myths"
        headline="Myths and facts"
        items={content.myths}
        tone="white"
      />

      <CardGrid
        id="resources"
        eyebrow="Resource library"
        headline="Guides, videos and downloads"
        items={content.resources}
        columns={3}
        tone="mist"
      />

      <DataTable
        id="glossary"
        headline="Plain-language glossary"
        headers={content.glossary.headers}
        rows={content.glossary.rows}
        accent="blue"
        tone="white"
        caption="Common terms explained"
      />

      <LogoStrip
        id="trusted-sources"
        headline="Trusted sources to read next"
        slots={content.trustedSources}
        tone="mist"
        note="Add the real link for each source, and name the Nigerian health body and disability rights organisation."
      />
    </>
  );
}
