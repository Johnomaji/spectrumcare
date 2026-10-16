import type { Metadata } from "next";
import { breadcrumbLd, pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/sections/PageHero";
import { NumberedCards } from "@/components/sections/NumberedCards";
import { RoleList } from "@/components/sections/RoleList";
import { CardGrid } from "@/components/sections/CardGrid";
import { Steps } from "@/components/sections/Steps";
import { Testimonial } from "@/components/sections/Testimonial";
import { ApplicationSection } from "@/components/sections/ApplicationSection";
import * as content from "@/content/join";

export const metadata: Metadata = pageMetadata({
  title: "Careers & Volunteering | Join Our Team",
  description:
    "Join Spectrum Care Foundation: careers for therapists, educators, caregivers and clinical professionals, plus volunteer and student placement opportunities in Lugbe, Abuja.",
  path: "/join-our-team",
});

export default function JoinOurTeamPage() {
  return (
    <>
      <JsonLd data={breadcrumbLd("/join-our-team")} />

      <PageHero {...content.hero} theme="deep" />

      <NumberedCards
        id="why-us"
        eyebrow="Why Spectrum Care"
        headline="Why people choose to work with us"
        items={content.why}
        tone="white"
      />

      <RoleList
        id="roles"
        eyebrow="Opportunities"
        headline="Current opportunities"
        roles={content.roles}
        tone="mist"
        note="Keep this list in step with your live vacancies."
      />

      <CardGrid
        id="volunteer"
        eyebrow="Not ready for a full-time role?"
        headline="Volunteer, intern or train with us"
        items={content.volunteering}
        columns={3}
        accent="red"
        tone="white"
      />

      <Steps
        id="hiring"
        headline="How hiring works"
        steps={content.hiringSteps}
        tone="mist"
      />

      <Testimonial {...content.staffVoice} accent="red" tone="white" />

      <ApplicationSection
        headline={content.application.headline}
        intro={content.application.intro}
        roles={content.roleOptions}
        note={content.application.note}
      />
    </>
  );
}
