import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { LegalPage } from "@/components/sections/LegalPage";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Terms",
    description:
      "The terms that apply to the use of the Spectrum Care Foundation website.",
    path: "/terms",
  }),
  robots: { index: false },
};

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Terms"
      headline="The terms of using this website."
      subheadline="Plain terms covering what this website is for, and what it is not."
      shouldCover={[
        "That information on this site is general guidance and not a medical diagnosis or individual clinical advice.",
        "How enquiries, registrations and applications submitted through the site are handled.",
        "Ownership of the content, photographs and resources published here.",
        "Links to third-party sites and the limits of our responsibility for them.",
        "How donations are received, receipted and refunded if something goes wrong.",
        "The governing law, the Foundation's registration details and how to contact us.",
      ]}
    />
  );
}
