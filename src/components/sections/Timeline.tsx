import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { accentFor, accentSolid } from "@/components/ui/accents";
import { cn } from "@/components/ui/cn";

export type Phase = { phase: string; title: string; body: string };

export function Timeline({
  id,
  eyebrow,
  headline,
  intro,
  phases,
  tone = "mist",
}: {
  id?: string;
  eyebrow?: string;
  headline: string;
  intro?: string;
  phases: readonly Phase[];
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
      <ol className="mt-10 grid gap-5 lg:grid-cols-3">
        {phases.map((phase, index) => (
          <li
            key={phase.phase}
            className="rounded-2xl border border-brand-line bg-white p-6 shadow-sm"
          >
            <span
              className={cn(
                "inline-flex rounded-full px-3.5 py-1.5 text-xs font-bold",
                accentSolid[accentFor(index)],
              )}
            >
              {phase.phase}
            </span>
            <h3 className="mt-4 text-base font-bold text-brand-ink">{phase.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-brand-charcoal">
              {phase.body}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
