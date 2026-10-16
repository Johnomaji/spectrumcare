import { cn } from "./cn";
import { accentText, type Accent } from "./accents";

export function SectionHeading({
  eyebrow,
  headline,
  intro,
  id,
  accent = "blue",
  align = "left",
  level = "h2",
  className,
}: {
  eyebrow?: string;
  headline: string;
  intro?: string;
  id?: string;
  accent?: Accent;
  align?: "left" | "center";
  level?: "h2" | "h3";
  className?: string;
}) {
  const Heading = level;
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "mb-3 text-xs font-semibold uppercase tracking-[0.18em]",
            accentText[accent],
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <Heading
        id={id}
        className="text-3xl font-bold leading-tight sm:text-4xl"
      >
        {headline}
      </Heading>
      {intro ? (
        <p className="mt-4 text-base leading-relaxed text-brand-charcoal sm:text-lg">
          {intro}
        </p>
      ) : null}
    </div>
  );
}
