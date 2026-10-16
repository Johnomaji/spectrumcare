import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ApplicationForm } from "@/components/forms/ApplicationForm";

export function ApplicationSection({
  id = "apply",
  headline,
  intro,
  roles,
  note,
}: {
  id?: string;
  headline: string;
  intro: string;
  roles: readonly string[];
  note: string;
}) {
  const headingId = `${id}-heading`;
  return (
    <Section id={id} tone="mist" width="narrow" labelledBy={headingId}>
      <SectionHeading id={headingId} headline={headline} intro={intro} align="center" />
      <div className="mt-8 rounded-2xl border border-brand-line bg-white p-6 shadow-sm sm:p-8">
        <ApplicationForm roles={roles} />
      </div>
      <p className="mt-5 text-center text-sm italic text-brand-charcoal">{note}</p>
    </Section>
  );
}
