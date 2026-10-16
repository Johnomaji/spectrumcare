import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { accentFor, accentSolid } from "@/components/ui/accents";
import { cn } from "@/components/ui/cn";

export type NumberedItem = { title: string; body: string };

const columnClass: Record<4 | 5, string> = {
  4: "sm:grid-cols-2 lg:grid-cols-4",
  5: "sm:grid-cols-2 lg:grid-cols-5",
};

/** Pillars, values and "why work with us" — numbered badge cards. */
export function NumberedCards({
  id,
  eyebrow,
  headline,
  intro,
  items,
  tone = "mist",
  columns = 5,
}: {
  id?: string;
  eyebrow?: string;
  headline: string;
  intro?: string;
  items: readonly NumberedItem[];
  tone?: "white" | "mist" | "tinted";
  columns?: 4 | 5;
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
      <ol className={cn("mt-10 grid gap-5", columnClass[columns])}>
        {items.map((item, index) => (
          <li
            key={item.title}
            className="flex h-full flex-col rounded-2xl border border-brand-line bg-white p-6 text-center shadow-sm"
          >
            <span
              className={cn(
                "mx-auto flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold",
                accentSolid[accentFor(index)],
              )}
            >
              {index + 1}
            </span>
            <h3 className="mt-4 text-sm font-bold text-brand-ink">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-brand-charcoal">
              {item.body}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
