import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { accentFor, accentSolid } from "@/components/ui/accents";
import { cn } from "@/components/ui/cn";

export type Step = { title: string; body: string };

export function Steps({
  id,
  eyebrow,
  headline,
  intro,
  steps,
  tone = "mist",
}: {
  id?: string;
  eyebrow?: string;
  headline: string;
  intro?: string;
  steps: readonly Step[];
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
      <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
        {steps.map((step, index) => (
          <li key={step.title} className="relative text-center">
            <span
              className={cn(
                "mx-auto flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold",
                accentSolid[accentFor(index)],
              )}
            >
              {index + 1}
            </span>
            <h3 className="mt-4 text-sm font-bold text-brand-ink">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-brand-charcoal">
              {step.body}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
