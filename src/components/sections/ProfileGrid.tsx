import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TeamNote } from "@/components/ui/TeamNote";
import { Media } from "@/components/ui/Media";
import { accentFor, accentText } from "@/components/ui/accents";
import { cn } from "@/components/ui/cn";

export type Profile = {
  name: string;
  role: string;
  bio?: string;
  /** Photo brief; replaced by a real portrait. */
  media?: string;
  src?: string;
};

export function ProfileGrid({
  id,
  eyebrow,
  headline,
  intro,
  profiles,
  tone = "mist",
  note,
}: {
  id?: string;
  eyebrow?: string;
  headline: string;
  intro?: string;
  profiles: readonly Profile[];
  tone?: "white" | "mist" | "tinted";
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
      <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {profiles.map((profile, index) => {
          const accent = accentFor(index);
          return (
            <li
              key={`${profile.role}-${index}`}
              className="overflow-hidden rounded-2xl border border-brand-line bg-white shadow-sm"
            >
              <Media
                note={profile.media ?? "Portrait photo"}
                src={profile.src}
                accent={accent}
                aspect="square"
                rounded={false}
              />
              <div className="p-5 text-center">
                <p className="text-sm font-bold text-brand-ink">{profile.name}</p>
                <p className={cn("mt-1 text-xs font-semibold", accentText[accent])}>
                  {profile.role}
                </p>
                {profile.bio ? (
                  <p className="mt-2 text-sm leading-relaxed text-brand-charcoal">
                    {profile.bio}
                  </p>
                ) : null}
              </div>
            </li>
          );
        })}
      </ul>
      {note ? <TeamNote>{note}</TeamNote> : null}
    </Section>
  );
}
