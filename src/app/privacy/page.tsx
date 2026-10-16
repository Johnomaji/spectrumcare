import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { LegalPage } from "@/components/sections/LegalPage";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Privacy Policy",
    description:
      "How Spectrum Care Foundation collects, uses and protects the personal information of families, staff and supporters.",
    path: "/privacy",
  }),
  robots: { index: false },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Privacy Policy"
      headline="How we look after your information."
      subheadline="Every family's trust is sacred. This policy will set out exactly what we collect, why, and the choices you have."
      shouldCover={[
        "What personal information we collect through the website, enquiry forms and job applications.",
        "How clinical and safeguarding records are stored, who can see them, and for how long they are kept.",
        "Consent for photographs, stories and quotes, and how consent can be withdrawn.",
        "Cookies and analytics used on this website.",
        "How information is shared with schools, clinicians and partners, and when it is not.",
        "How to request a copy of your data, correct it, or ask us to delete it, and who to contact.",
      ]}
    />
  );
}
