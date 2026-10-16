import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { CardGrid } from "@/components/sections/CardGrid";
import { SplitFeature } from "@/components/sections/SplitFeature";
import { TeamNote } from "@/components/ui/TeamNote";
import { CtaBanner } from "@/components/sections/CtaBanner";
import type { CardItem } from "@/components/sections/types";

export const metadata: Metadata = pageMetadata({
  title: "Donate",
  description:
    "Support Spectrum Care Foundation. Your gift funds free community screenings, sponsored therapy places and inclusion programmes for families in Lugbe, Abuja.",
  path: "/donate",
});

const ways: CardItem[] = [
  {
    title: "Bank transfer",
    body: "Account name: [Account name] · Bank: [Bank] · Account number: [Account number]. Send your details to our team so we can send a receipt.",
    accent: "blue",
  },
  {
    title: "Give online",
    body: "[Add your payment gateway link once a provider is chosen, for example Paystack or Flutterwave.]",
    link: { label: "Give now", href: "[Add the payment link]" },
    accent: "orange",
  },
  {
    title: "Sponsor a place",
    body: "Fund a therapy place or a free screening day for a family who cannot meet the full cost of care.",
    link: { label: "Talk to us", href: "/#contact" },
    accent: "green",
  },
];

export default function DonatePage() {
  return (
    <>
      <PageHero
        eyebrow="Support our work"
        headline="Help a child find their voice."
        subheadline="Your gift funds free community screenings, sponsored therapy places and programmes that bring inclusion to families in Lugbe and beyond."
        media="Banner photo: a child and therapist celebrating a breakthrough moment."
        theme="amber"
      />

      <CardGrid
        id="ways-to-give"
        eyebrow="Ways to give"
        headline="Three ways to support a family today"
        items={ways}
        columns={3}
        accent="orange"
        tone="mist"
      >
        <TeamNote>
          Decide how donations will be received — bank transfer details, a
          payment gateway, or both — and replace every placeholder on this page
          before publishing. Confirm the wording with your Board and, where
          required, your regulator.
        </TeamNote>
      </CardGrid>

      <SplitFeature
        id="where-it-goes"
        eyebrow="Where your gift goes"
        headline="Every gift turns into something a family can feel."
        body={[
          "Income from our services helps sustain the inclusive center in Lugbe. Donations and partnerships make the rest possible: the free screening day in a community that has never had one, the therapy place for a child whose family cannot pay, the teacher training that opens a classroom door.",
          "We report on how funds are used, and we are happy to discuss restricted gifts for a specific programme.",
        ]}
        list={[
          "Free community developmental screenings",
          "Sponsored therapy places for families in need",
          "Teacher training and school inclusion support",
          "Parent training and caregiver programmes",
        ]}
        listAccent="orange"
        media="Photo: a community screening day, volunteers welcoming families."
        accent="teal"
        tone="white"
      />

      <CtaBanner
        headline="Prefer to talk it through first?"
        body="Our team will gladly walk you through the options, including CSR partnerships and in-kind support."
        buttons={[
          { label: "Get in touch", href: "/#contact" },
          { label: "See our programmes", href: "/projects-and-reach" },
        ]}
        tone="orange"
      />
    </>
  );
}
