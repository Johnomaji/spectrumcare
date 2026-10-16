import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TeamNote } from "@/components/ui/TeamNote";
import { Media } from "@/components/ui/Media";
import { accentFor } from "@/components/ui/accents";

export function PhotoGrid({
  id,
  eyebrow,
  headline,
  intro,
  photos,
  tone = "white",
  note,
}: {
  id?: string;
  eyebrow?: string;
  headline: string;
  intro?: string;
  /** One caption per photo: the event name and date. */
  photos: readonly string[];
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
      />
      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {photos.map((photo, index) => (
          <li key={`${photo}-${index}`}>
            <Media note={photo} accent={accentFor(index)} aspect="landscape" />
          </li>
        ))}
      </ul>
      {note ? <TeamNote>{note}</TeamNote> : null}
    </Section>
  );
}
