import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Media } from "@/components/ui/Media";
import { CheckList } from "@/components/ui/CheckList";
import { cn } from "@/components/ui/cn";
import type { Accent } from "@/components/ui/accents";
import { TeamNote } from "@/components/ui/TeamNote";
import type { LinkRef } from "./types";

/** Image on one side, copy on the other — the blueprint's most common layout. */
export function SplitFeature({
  id,
  eyebrow,
  headline,
  body = [],
  list,
  listAccent,
  button,
  media,
  mediaSrc,
  accent = "blue",
  reverse = false,
  tone = "white",
  note,
}: {
  id?: string;
  eyebrow?: string;
  headline: string;
  body?: readonly string[];
  list?: readonly string[];
  listAccent?: Accent;
  button?: LinkRef;
  media: string;
  mediaSrc?: string;
  accent?: Accent;
  /** Place the image on the right instead of the left. */
  reverse?: boolean;
  tone?: "white" | "mist" | "tinted";
  note?: string;
}) {
  const headingId = id ? `${id}-heading` : undefined;
  return (
    <Section id={id} tone={tone} labelledBy={headingId}>
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div className={cn(reverse && "lg:order-2")}>
          <Media note={media} src={mediaSrc} accent={accent} aspect="landscape" />
        </div>

        <div className={cn(reverse && "lg:order-1")}>
          <SectionHeading
            id={headingId}
            eyebrow={eyebrow}
            headline={headline}
            accent={accent}
          />
          {body.length > 0 ? (
            <div className="mt-5 space-y-4 text-base leading-relaxed text-brand-charcoal">
              {body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          ) : null}
          {list ? (
            <CheckList items={list} accent={listAccent ?? accent} className="mt-6" />
          ) : null}
          {button ? (
            <div className="mt-7">
              <Button href={button.href}>{button.label}</Button>
            </div>
          ) : null}
          {note ? <TeamNote>{note}</TeamNote> : null}
        </div>
      </div>
    </Section>
  );
}
