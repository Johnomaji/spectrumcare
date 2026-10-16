import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { accentBar, type Accent } from "@/components/ui/accents";
import { cn } from "@/components/ui/cn";

export function DataTable({
  id,
  eyebrow,
  headline,
  intro,
  headers,
  rows,
  accent = "teal",
  tone = "mist",
  caption,
}: {
  id?: string;
  eyebrow?: string;
  headline: string;
  intro?: string;
  headers: readonly string[];
  rows: readonly (readonly React.ReactNode[])[];
  accent?: Accent;
  tone?: "white" | "mist" | "tinted";
  caption?: string;
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
      />
      <div className="mt-8 overflow-x-auto rounded-2xl border border-brand-line bg-white shadow-sm">
        <table className="w-full min-w-[34rem] border-collapse text-left text-sm">
          {caption ? <caption className="sr-only">{caption}</caption> : null}
          <thead>
            <tr className={cn(accentBar[accent])}>
              {headers.map((header) => (
                <th
                  key={header}
                  scope="col"
                  className={cn(
                    "px-5 py-3 text-xs font-semibold uppercase tracking-wide",
                    accent === "yellow" ? "text-brand-ink" : "text-white",
                  )}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-brand-line">
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex} className="align-top">
                {row.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className={cn(
                      "px-5 py-3.5 leading-relaxed text-brand-charcoal",
                      cellIndex === 0 && "font-medium text-brand-ink",
                    )}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}
