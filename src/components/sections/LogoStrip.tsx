import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TeamNote } from "@/components/ui/TeamNote";

/**
 * Partner and trusted-source slots. Each box is replaced by a real logo
 * (or a linked name) once permissions are in place.
 */
export function LogoStrip({
  id,
  eyebrow,
  headline,
  intro,
  slots,
  tone = "white",
  note,
}: {
  id?: string;
  eyebrow?: string;
  headline: string;
  intro?: string;
  slots: readonly string[];
  tone?: "white" | "mist" | "tinted";
  /** Internal reminder shown until the real content is in place. */
  note?: string;
}) {
  const headingId = id ? `${id}-heading` : undefined;
  return (
    <Section id={id} tone={tone} labelledBy={headingId}>
      <SectionHeading
        id={headingId}
        eyebrow={eyebrow}
        headline={headline}
        intro={intro}
        align="center"
      />
      <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {slots.map((slot) => (
          <li
            key={slot}
            className="flex min-h-20 items-center justify-center rounded-xl border-2 border-dashed border-brand-line px-3 py-4 text-center text-xs font-medium text-brand-charcoal"
          >
            {slot}
          </li>
        ))}
      </ul>
      {note ? <TeamNote>{note}</TeamNote> : null}
    </Section>
  );
}
