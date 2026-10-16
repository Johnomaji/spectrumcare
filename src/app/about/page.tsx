import type { Metadata } from "next";
import { breadcrumbLd, pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/sections/PageHero";
import { SplitFeature } from "@/components/sections/SplitFeature";
import { Testimonial } from "@/components/sections/Testimonial";
import { CardGrid } from "@/components/sections/CardGrid";
import { NumberedCards } from "@/components/sections/NumberedCards";
import { Timeline } from "@/components/sections/Timeline";
import { CtaBanner } from "@/components/sections/CtaBanner";
import * as about from "@/content/about";

export const metadata: Metadata = pageMetadata({
  title: "About Us",
  description:
    "Discover the story, vision, mission and values behind Spectrum Care Foundation, a non-profit building an inclusive future for people with neurodevelopmental disorders in Nigeria.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbLd("/about")} />

      <PageHero {...about.hero} theme="amber" />

      <SplitFeature
        id="our-story"
        eyebrow={about.story.eyebrow}
        headline={about.story.headline}
        body={about.story.body}
        media={about.story.media}
        accent="red"
      />

      <Testimonial {...about.founder} accent="green" tone="mist" />

      <CardGrid
        id="vision-and-mission"
        eyebrow="Why we exist"
        headline="Our vision and mission"
        items={about.visionMission}
        columns={2}
        tone="white"
      />

      <NumberedCards
        id="values"
        eyebrow="What we stand for"
        headline="Five values. Every decision."
        items={about.values}
        tone="mist"
      />

      <CardGrid
        id="model-of-care"
        eyebrow="Our model of care"
        headline="Care that goes where life happens"
        intro="Therapy only changes lives when it reaches the places a child actually lives, learns and plays. That is why we deliver care in four environments."
        items={about.modelOfCare}
        columns={4}
        tone="white"
      />

      <SplitFeature
        id="why-a-foundation"
        eyebrow={about.whyFoundation.eyebrow}
        headline={about.whyFoundation.headline}
        body={about.whyFoundation.body}
        list={about.whyFoundation.list}
        listAccent="red"
        media={about.whyFoundation.media}
        accent="green"
        tone="mist"
        note={about.whyFoundation.note}
      />

      <Timeline
        id="roadmap"
        eyebrow="Our roadmap"
        headline="Where we are going"
        phases={about.roadmap}
        tone="white"
      />

      <CtaBanner {...about.closing} tone="red" />
    </>
  );
}
