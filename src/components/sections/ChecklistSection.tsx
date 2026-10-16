import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CheckList } from "@/components/ui/CheckList";
import type { Accent } from "@/components/ui/accents";

export function ChecklistSection({
  id,
  eyebrow,
  headline,
  intro,
  items,
  accent = "blue",
  tone = "white",
}: {
  id?: string;
  eyebrow?: string;
  headline: string;
  intro?: string;
  items: readonly string[];
  accent?: Accent;
  tone?: "white" | "mist" | "tinted";
}) {
  const headingId = id ? `${id}-heading` : undefined;
  return (
    <Section id={id} tone={tone} labelledBy={headingId}>
      <SectionHeading
        id={headingId}
        eyebrow={eyebrow}
        headline={headline}
        intro={intro}
      />
      <CheckList items={items} accent={accent} columns={2} className="mt-8" />
    </Section>
  );
}
