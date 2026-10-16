"use client";

import { useState } from "react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/components/ui/cn";

export type AccordionItem = { question: string; answer: string };

/** FAQs and myths-vs-facts. The first row opens by default. */
export function Accordion({
  id,
  eyebrow,
  headline,
  intro,
  items,
  tone = "white",
}: {
  id?: string;
  eyebrow?: string;
  headline: string;
  intro?: string;
  items: readonly AccordionItem[];
  tone?: "white" | "mist" | "tinted";
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const headingId = id ? `${id}-heading` : undefined;

  return (
    <Section id={id} tone={tone} width="narrow" labelledBy={headingId}>
      <SectionHeading
        id={headingId}
        eyebrow={eyebrow}
        headline={headline}
        intro={intro}
      />
      <div className="mt-8 divide-y divide-brand-line border-y border-brand-line">
        {items.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={item.question}>
              <h3>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={`accordion-panel-${id}-${index}`}
                  className="flex w-full items-center justify-between gap-4 py-4 text-left text-sm font-semibold text-brand-ink sm:text-base"
                >
                  {item.question}
                  <span
                    aria-hidden="true"
                    className={cn(
                      "shrink-0 text-xl font-normal text-brand-green transition-transform",
                      isOpen && "rotate-45",
                    )}
                  >
                    +
                  </span>
                </button>
              </h3>
              {isOpen ? (
                <div
                  id={`accordion-panel-${id}-${index}`}
                  className="pb-5 text-sm leading-relaxed text-brand-charcoal sm:text-base"
                >
                  {item.answer}
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </Section>
  );
}
