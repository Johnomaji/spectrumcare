import type { Accent } from "@/components/ui/accents";

export type LinkRef = { label: string; href: string };

export type CardItem = {
  title: string;
  body?: string;
  /** Photo brief for the card image; omit for a text-only card. */
  media?: string;
  /** Real image path once a photograph is available. */
  src?: string;
  badge?: string;
  meta?: string;
  link?: LinkRef;
  accent?: Accent;
};
