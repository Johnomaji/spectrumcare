import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { accentFor, accentText } from "@/components/ui/accents";
import { cn } from "@/components/ui/cn";

export type QuoteItem = { quote: string; attribution: string };

export function QuoteCards({
  id,
  eyebrow,
  headline,
  quotes,
  tone = "white",
}: {
  id?: string;
  eyebrow?: string;
  headline: string;
  quotes: readonly QuoteItem[];
  tone?: "white" | "mist" | "tinted";
}) {
  const headingId = id ? `${id}-heading` : undefined;
  return (
    <Section id={id} tone={tone} labelledBy={headingId}>
      <SectionHeading id={headingId} eyebrow={eyebrow} headline={headline} />
      <ul className="mt-10 grid gap-5 lg:grid-cols-3">
        {quotes.map((item, index) => {
          const accent = accentFor(index);
          return (
            <li
              key={item.attribution}
              className="rounded-2xl border border-brand-line bg-white p-6 shadow-sm"
            >
              <figure>
                <span
                  aria-hidden="true"
                  className={cn("block text-4xl font-bold leading-none", accentText[accent])}
                >
                  &ldquo;
                </span>
                <blockquote className="mt-2 text-base leading-relaxed text-brand-ink">
                  {item.quote}
                </blockquote>
                <figcaption className="mt-4 text-sm font-semibold text-brand-charcoal">
                  {item.attribution}
                </figcaption>
              </figure>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
