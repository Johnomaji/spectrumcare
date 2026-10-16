import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Media } from "@/components/ui/Media";
import { Badge } from "@/components/ui/Card";
import { accentFor, type Accent } from "@/components/ui/accents";
import type { LinkRef } from "./types";

export type Article = {
  title: string;
  date: string;
  excerpt: string;
  category: string;
  media: string;
  src?: string;
  href: string;
};

export function ArticleCard({
  article,
  accent,
}: {
  article: Article;
  accent: Accent;
}) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-brand-line bg-white shadow-sm">
      <Media
        note={article.media}
        src={article.src}
        accent={accent}
        aspect="wide"
        rounded={false}
      />
      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap items-center gap-3">
          <Badge accent={accent}>{article.category}</Badge>
          <span className="text-xs text-brand-charcoal">{article.date}</span>
        </div>
        <h3 className="mt-3 text-base font-bold leading-snug text-brand-ink">
          <Link href={article.href} className="hover:text-brand-blue">
            {article.title}
          </Link>
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-brand-charcoal">
          {article.excerpt}
        </p>
        <p className="mt-auto pt-4 text-sm font-semibold text-brand-blue">
          <Link href={article.href} className="inline-flex min-h-11 items-center gap-1.5">
            Read more <span aria-hidden="true">→</span>
          </Link>
        </p>
      </div>
    </article>
  );
}

export function ArticleCards({
  id,
  eyebrow,
  headline,
  intro,
  articles,
  button,
  tone = "mist",
}: {
  id?: string;
  eyebrow?: string;
  headline: string;
  intro?: string;
  articles: readonly Article[];
  button?: LinkRef;
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
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article, index) => (
          <ArticleCard key={article.title} article={article} accent={accentFor(index)} />
        ))}
      </div>
      {button ? (
        <div className="mt-10 text-center">
          <Button href={button.href} variant="secondary" size="lg">
            {button.label}
          </Button>
        </div>
      ) : null}
    </Section>
  );
}
