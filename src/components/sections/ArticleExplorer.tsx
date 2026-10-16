"use client";

import { useMemo, useState } from "react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { accentFor } from "@/components/ui/accents";
import { cn } from "@/components/ui/cn";
import { ArticleCard, type Article } from "./ArticleCards";

const PAGE_SIZE = 6;

export function ArticleExplorer({
  id = "articles",
  eyebrow,
  headline,
  filters,
  articles,
}: {
  id?: string;
  eyebrow?: string;
  headline: string;
  filters: readonly string[];
  articles: readonly Article[];
}) {
  const [filter, setFilter] = useState(filters[0]);
  const [visible, setVisible] = useState(PAGE_SIZE);

  const shown = useMemo(
    () => (filter === filters[0] ? articles : articles.filter((a) => a.category === filter)),
    [articles, filter, filters],
  );

  const headingId = `${id}-heading`;

  return (
    <Section id={id} tone="mist" labelledBy={headingId}>
      <SectionHeading id={headingId} eyebrow={eyebrow} headline={headline} />

      <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filter articles">
        {filters.map((option) => (
          <button
            key={option}
            type="button"
            aria-pressed={filter === option}
            onClick={() => {
              setFilter(option);
              setVisible(PAGE_SIZE);
            }}
            className={cn(
              "min-h-11 rounded-full border-2 px-4 text-sm font-semibold transition-colors",
              filter === option
                ? "border-brand-green bg-brand-green text-white"
                : "border-brand-line bg-white text-brand-charcoal hover:border-brand-green hover:text-brand-green",
            )}
          >
            {option}
          </button>
        ))}
      </div>

      <div aria-live="polite" className="mt-8">
        {shown.length === 0 ? (
          <p className="rounded-2xl border border-brand-line bg-white p-8 text-center text-sm text-brand-charcoal">
            Nothing here yet. Choose another category, or check back soon.
          </p>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {shown.slice(0, visible).map((article, index) => (
              <ArticleCard
                key={article.title}
                article={article}
                accent={accentFor(index)}
              />
            ))}
          </div>
        )}
      </div>

      {shown.length > visible ? (
        <div className="mt-10 text-center">
          <Button
            variant="secondary"
            size="lg"
            onClick={() => setVisible((count) => count + PAGE_SIZE)}
          >
            Load more
          </Button>
        </div>
      ) : null}
    </Section>
  );
}
