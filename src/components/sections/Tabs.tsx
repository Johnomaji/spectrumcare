"use client";

import { useState } from "react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowLink } from "@/components/ui/Button";
import { accentFor, accentSolid, accentText } from "@/components/ui/accents";
import { cn } from "@/components/ui/cn";
import type { LinkRef } from "./types";

export type TabItem = { label: string; body: string; link: LinkRef };

/** "How can we help you?" — one panel per audience. */
export function Tabs({
  id,
  headline,
  items,
  tone = "white",
}: {
  id?: string;
  headline: string;
  items: readonly TabItem[];
  tone?: "white" | "mist" | "tinted";
}) {
  const [active, setActive] = useState(0);
  const headingId = id ? `${id}-heading` : undefined;
  const accent = accentFor(active);

  return (
    <Section id={id} tone={tone} labelledBy={headingId}>
      <SectionHeading id={headingId} headline={headline} />

      <div
        role="tablist"
        aria-label={headline}
        className="mt-8 flex flex-wrap gap-2"
      >
        {items.map((item, index) => (
          <button
            key={item.label}
            type="button"
            role="tab"
            id={`tab-${index}`}
            aria-selected={active === index}
            aria-controls={`tabpanel-${index}`}
            tabIndex={active === index ? 0 : -1}
            onClick={() => setActive(index)}
            className={cn(
              "min-h-11 rounded-full px-4 text-sm font-semibold transition-colors",
              active === index
                ? accentSolid[accentFor(index)]
                : "bg-brand-mist text-brand-charcoal hover:bg-brand-line",
            )}
          >
            {item.label}
          </button>
        ))}
      </div>

      {items.map((item, index) =>
        active === index ? (
          <div
            key={item.label}
            role="tabpanel"
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
            tabIndex={0}
            className="mt-6 rounded-2xl border border-brand-line bg-brand-mist p-6 sm:p-8"
          >
            <p className="max-w-3xl text-base leading-relaxed text-brand-charcoal">
              {item.body}
            </p>
            <ArrowLink href={item.link.href} className={cn("mt-2", accentText[accent])}>
              {item.link.label}
            </ArrowLink>
          </div>
        ) : null,
      )}
    </Section>
  );
}
