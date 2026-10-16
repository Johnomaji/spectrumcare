import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, Badge } from "@/components/ui/Card";
import { Media } from "@/components/ui/Media";
import { ArrowLink } from "@/components/ui/Button";
import { accentFor, accentText, type Accent } from "@/components/ui/accents";
import { cn } from "@/components/ui/cn";
import type { CardItem } from "./types";

const columnClass: Record<2 | 3 | 4, string> = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
};

export function CardGrid({
  id,
  eyebrow,
  headline,
  intro,
  items,
  columns = 3,
  tone = "mist",
  accent = "blue",
  align = "left",
  palette,
  children,
}: {
  id?: string;
  eyebrow?: string;
  headline: string;
  intro?: string;
  items: readonly CardItem[];
  columns?: 2 | 3 | 4;
  tone?: "white" | "mist" | "tinted";
  accent?: Accent;
  align?: "left" | "center";
  /** Override the colour cycle used across the cards. */
  palette?: readonly Accent[];
  children?: React.ReactNode;
}) {
  const headingId = id ? `${id}-heading` : undefined;
  return (
    <Section id={id} tone={tone} labelledBy={headingId}>
      <SectionHeading
        id={headingId}
        eyebrow={eyebrow}
        headline={headline}
        intro={intro}
        accent={accent}
        align={align}
      />
      <ul className={cn("mt-10 grid gap-5", columnClass[columns])}>
        {items.map((item, index) => {
          const cardAccent = item.accent ?? accentFor(index, palette);
          return (
            <Card key={item.title} accent={cardAccent} as="li" className="group">
              {item.media ? (
                <Media
                  note={item.media}
                  src={item.src}
                  accent={cardAccent}
                  aspect="landscape"
                  className="mb-4"
                />
              ) : null}
              <h3 className={cn("text-base font-bold", accentText[cardAccent])}>
                {item.title}
              </h3>
              {item.meta ? (
                <p className="mt-1 text-xs font-medium text-brand-charcoal/80">
                  {item.meta}
                </p>
              ) : null}
              {item.body ? (
                <p className="mt-2 text-sm leading-relaxed text-brand-charcoal">
                  {item.body}
                </p>
              ) : null}
              <div className="mt-auto flex flex-wrap items-center gap-3 pt-4">
                {item.badge ? <Badge accent={cardAccent}>{item.badge}</Badge> : null}
                {item.link ? (
                  <ArrowLink
                    href={item.link.href}
                    className={cn("-my-2", accentText[cardAccent])}
                  >
                    {item.link.label}
                  </ArrowLink>
                ) : null}
              </div>
            </Card>
          );
        })}
      </ul>
      {children}
    </Section>
  );
}
