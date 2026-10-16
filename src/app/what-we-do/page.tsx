import type { Metadata } from "next";
import { breadcrumbLd, faqLd, pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/sections/PageHero";
import { CardGrid } from "@/components/sections/CardGrid";
import { SplitFeature } from "@/components/sections/SplitFeature";
import { Steps } from "@/components/sections/Steps";
import { Accordion } from "@/components/sections/Accordion";
import { CtaBanner } from "@/components/sections/CtaBanner";
import * as content from "@/content/what-we-do";

export const metadata: Metadata = pageMetadata({
  title: "What We Do | Therapy, Assessment, School & Family Support",
  description:
    "Explore Spectrum Care's services: functional assessments, ABA, speech and language, physical and cognitive therapy, school inclusion, parent training, caregiver support and diagnostics in Lugbe, Abuja.",
  path: "/what-we-do",
});

export default function WhatWeDoPage() {
  return (
    <>
      <JsonLd data={breadcrumbLd("/what-we-do")} />
      <JsonLd data={faqLd(content.faqs)} />

      <PageHero {...content.hero} theme="ocean" />

      <CardGrid
        id="where-we-work"
        eyebrow="One team, four environments"
        headline="Wherever your child learns and grows, we are there"
        intro="Our multidisciplinary specialists work together under one roof and out in the world, so skills learned in therapy become skills used every day."
        items={content.environments}
        columns={4}
        tone="mist"
      />

      <SplitFeature
        id="assess"
        eyebrow={content.assess.eyebrow}
        headline={content.assess.headline}
        body={content.assess.body}
        list={content.assess.list}
        button={content.assess.button}
        media={content.assess.media}
        accent="green"
        tone="white"
      />

      <CardGrid
        id="therapy"
        eyebrow="Therapy & Growth"
        headline="Evidence-based therapy, built around your child"
        intro="Every child follows an individualised care plan, reviewed regularly with you."
        items={content.therapy}
        columns={3}
        tone="mist"
      />

      <CardGrid
        id="school"
        eyebrow="School & Inclusion"
        headline="Classrooms where every child belongs"
        intro="Inclusion does not happen by accident. It happens when teachers are trained, plans are clear and children are supported."
        items={content.school}
        columns={3}
        accent="green"
        tone="white"
      />

      <CardGrid
        id="family"
        eyebrow="Family & Home"
        headline="Because parents are a child's first and best teachers"
        intro="We equip families with skills and confidence, and for families who need extra hands, we provide trained caregivers."
        items={content.family}
        columns={3}
        accent="orange"
        tone="mist"
      />

      <SplitFeature
        id="health"
        eyebrow={content.health.eyebrow}
        headline={content.health.headline}
        body={content.health.body}
        list={content.health.list}
        button={content.health.button}
        media={content.health.media}
        accent="red"
        listAccent="green"
        reverse
        tone="white"
        note={content.health.note}
      />

      <Steps
        id="how-it-works"
        headline="How it works"
        intro="A clear path, with you in the lead."
        steps={content.steps}
        tone="mist"
      />

      <Accordion
        id="faqs"
        headline="Questions families ask us"
        items={content.faqs}
        tone="white"
      />

      <CtaBanner {...content.closing} tone="green" />
    </>
  );
}
