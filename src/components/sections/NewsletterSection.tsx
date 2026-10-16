import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { NewsletterForm } from "@/components/forms/NewsletterForm";

export function NewsletterSection({
  id = "newsletter",
  headline,
  intro,
}: {
  id?: string;
  headline: string;
  intro: string;
}) {
  const headingId = `${id}-heading`;
  return (
    <Section id={id} tone="tinted" labelledBy={headingId}>
      <SectionHeading id={headingId} headline={headline} intro={intro} align="center" />
      <NewsletterForm />
    </Section>
  );
}
