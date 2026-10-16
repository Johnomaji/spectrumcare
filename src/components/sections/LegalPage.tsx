import { Section } from "@/components/ui/Section";
import { PageHero } from "@/components/sections/PageHero";
import { TeamNote } from "@/components/ui/TeamNote";

/**
 * Shell for the two legal pages. The wording must come from the
 * Foundation's lawyer; these pages exist so the footer links resolve.
 */
export function LegalPage({
  eyebrow,
  headline,
  subheadline,
  shouldCover,
}: {
  eyebrow: string;
  headline: string;
  subheadline: string;
  shouldCover: readonly string[];
}) {
  return (
    <>
      <PageHero
        eyebrow={eyebrow}
        headline={headline}
        subheadline={subheadline}
        theme="deep"
      />
      <Section tone="white" width="narrow">
        <h2 className="text-xl font-bold">What this page will cover</h2>
        <ul className="mt-5 list-disc space-y-2.5 pl-5 text-base leading-relaxed text-brand-charcoal">
          {shouldCover.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <TeamNote>
          This page is a placeholder. Have your lawyer draft and review the
          wording, then replace this content before launch.
        </TeamNote>
      </Section>
    </>
  );
}
