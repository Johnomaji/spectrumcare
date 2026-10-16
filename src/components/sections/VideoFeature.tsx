import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

/**
 * Video slot. Replace the placeholder with the embed (or a <video> element)
 * once the film is edited; remember to add captions.
 */
export function VideoFeature({
  id,
  headline,
  body,
  note,
}: {
  id?: string;
  headline: string;
  body: string;
  note: string;
}) {
  const headingId = id ? `${id}-heading` : undefined;
  return (
    <Section id={id} tone="white" labelledBy={headingId}>
      <SectionHeading
        id={headingId}
        headline={headline}
        intro={body}
        align="center"
      />
      <div className="relative mx-auto mt-10 aspect-video max-w-4xl overflow-hidden rounded-2xl bg-gradient-to-br from-brand-red via-brand-blue to-brand-teal">
        <div
          aria-hidden="true"
          className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/95 shadow-lg">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="ml-1 h-7 w-7 text-brand-blue"
              aria-hidden="true"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </div>
        <p className="absolute inset-x-4 bottom-4 rounded-lg bg-black/45 px-3 py-2 text-[11px] text-white sm:inset-x-6">
          {note}
        </p>
      </div>
    </Section>
  );
}
