import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TeamNote } from "@/components/ui/TeamNote";
import { Button } from "@/components/ui/Button";
import { accentBar, accentFor } from "@/components/ui/accents";
import { cn } from "@/components/ui/cn";

export type Role = {
  title: string;
  detail: string;
  cta: string;
  href: string;
};

export function RoleList({
  id,
  eyebrow,
  headline,
  intro,
  roles,
  tone = "mist",
  note,
}: {
  id?: string;
  eyebrow?: string;
  headline: string;
  intro?: string;
  roles: readonly Role[];
  tone?: "white" | "mist" | "tinted";
  /** Internal reminder shown until the real content is in place. */
  note?: string;
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
      <ul className="mt-10 grid gap-4 lg:grid-cols-2">
        {roles.map((role, index) => (
          <li
            key={role.title}
            className="flex items-center gap-4 overflow-hidden rounded-2xl border border-brand-line bg-white p-4 shadow-sm sm:p-5"
          >
            <span
              aria-hidden="true"
              className={cn("h-12 w-1.5 shrink-0 rounded-full", accentBar[accentFor(index)])}
            />
            <div className="flex-1">
              <h3 className="text-sm font-bold text-brand-ink sm:text-base">
                {role.title}
              </h3>
              <p className="mt-1 text-xs text-brand-charcoal sm:text-sm">{role.detail}</p>
            </div>
            <Button href={role.href} variant="secondary" className="shrink-0">
              {role.cta}
            </Button>
          </li>
        ))}
      </ul>
      {note ? <TeamNote>{note}</TeamNote> : null}
    </Section>
  );
}
