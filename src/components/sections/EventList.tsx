import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { accentFor, accentSolid } from "@/components/ui/accents";
import { cn } from "@/components/ui/cn";

export type EventItem = {
  date: string;
  title: string;
  body: string;
  location: string;
  href: string;
};

export function EventList({
  id,
  eyebrow,
  headline,
  intro,
  events,
  tone = "white",
}: {
  id?: string;
  eyebrow?: string;
  headline: string;
  intro?: string;
  events: readonly EventItem[];
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
      <ul className="mt-10 space-y-4">
        {events.map((event, index) => (
          <li
            key={event.title}
            className="flex flex-col gap-4 rounded-2xl border border-brand-line bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:gap-6 sm:p-5"
          >
            <p
              className={cn(
                "flex w-full shrink-0 items-center justify-center rounded-xl px-4 py-3 text-sm font-bold sm:w-28",
                accentSolid[accentFor(index)],
              )}
            >
              {event.date}
            </p>
            <div className="flex-1">
              <h3 className="text-base font-bold text-brand-ink">{event.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-brand-charcoal">
                {event.body}
              </p>
              <p className="mt-2 flex items-center gap-1.5 text-xs text-brand-charcoal">
                <span aria-hidden="true">📍</span>
                {event.location}
              </p>
            </div>
            <Button href={event.href} className="sm:shrink-0">
              Register
            </Button>
          </li>
        ))}
      </ul>
    </Section>
  );
}
