import { Section } from "@/components/ui/Section";
import { Media } from "@/components/ui/Media";
import { accentText, type Accent } from "@/components/ui/accents";
import { cn } from "@/components/ui/cn";

export function Testimonial({
  id,
  quote,
  attribution,
  media,
  mediaSrc,
  accent = "green",
  tone = "mist",
}: {
  id?: string;
  quote: string;
  attribution: string;
  media: string;
  mediaSrc?: string;
  accent?: Accent;
  tone?: "white" | "mist" | "tinted";
}) {
  return (
    <Section id={id} tone={tone}>
      <figure className="grid items-center gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-12">
        <Media note={media} src={mediaSrc} accent={accent} aspect="landscape" />
        <div>
          <span
            aria-hidden="true"
            className={cn("block text-5xl font-bold leading-none", accentText[accent])}
          >
            &ldquo;
          </span>
          <blockquote className="mt-2 text-xl font-semibold leading-relaxed text-brand-ink sm:text-2xl">
            {quote}
          </blockquote>
          <figcaption className="mt-5 text-sm font-semibold text-brand-charcoal">
            — {attribution}
          </figcaption>
        </div>
      </figure>
    </Section>
  );
}
