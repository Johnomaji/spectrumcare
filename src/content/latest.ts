import type { CardItem } from "@/components/sections/types";
import type { Article } from "@/components/sections/ArticleCards";
import type { QuoteItem } from "@/components/sections/QuoteCards";

export const hero = {
  eyebrow: "Latest",
  headline: "News, stories and voices from Spectrum Care.",
  subheadline: "Celebrations, updates and insights from our community.",
  media: "Banner photo: candid, colourful moment from a recent event.",
};

export const featured = {
  eyebrow: "Featured · [Category]",
  headline: "[Sample] Our doors are open: welcome to the Spectrum Care Inclusive Center",
  body: [
    "[Sample teaser] Step inside our new home in Lugbe, a place designed from the ground up so every child can learn, play and grow. Meet the team, tour the therapy rooms and the sensory garden, and discover how to begin.",
  ],
  button: { label: "Read the story", href: "#articles" },
  media: "Photo: ribbon-cutting or opening day at the center.",
};

export const filters = ["All", "News", "Stories", "Events", "Awareness", "Press"];

export const articles: Article[] = [
  {
    title: "[Sample] Free screening day: what to expect",
    date: "[Date]",
    excerpt: "A friendly walkthrough for parents.",
    category: "Events",
    media: "Photo: screening.",
    href: "#articles",
  },
  {
    title: "[Sample] Five signs of autism parents shouldn't ignore",
    date: "[Date]",
    excerpt: "Early signs and what to do next.",
    category: "Awareness",
    media: "Photo: toddler playing.",
    href: "#articles",
  },
  {
    title: "[Sample] Meet our Speech & Language Therapist",
    date: "[Date]",
    excerpt: "Why they do what they do.",
    category: "Stories",
    media: "Photo: therapist.",
    href: "#articles",
  },
  {
    title: "[Sample] Shadow teachers: the quiet heroes of inclusion",
    date: "[Date]",
    excerpt: "How classroom support works.",
    category: "News",
    media: "Photo: classroom.",
    href: "#articles",
  },
  {
    title: "[Sample] Partnering with [School name]",
    date: "[Date]",
    excerpt: "A new school partnership begins.",
    category: "News",
    media: "Photo: school visit.",
    href: "#articles",
  },
  {
    title: "[Sample] Parent workshop highlights",
    date: "[Date]",
    excerpt: "What parents learned and loved.",
    category: "Events",
    media: "Photo: workshop.",
    href: "#articles",
  },
];

export const voices: QuoteItem[] = [
  { quote: "[Parent quote]", attribution: "[Name, relationship]" },
  { quote: "[Teacher quote]", attribution: "[Name, school]" },
  { quote: "[Partner quote]", attribution: "[Name, organisation]" },
];

export const newsletter = {
  headline: "Stay in the loop",
  intro: "Get stories, events and resources in your inbox.",
};

export const social: CardItem[] = [
  {
    title: "Instagram",
    body: "Daily moments and educational posts.",
    link: { label: "@[handle]", href: "[https://instagram.com/your-handle]" },
    accent: "red",
  },
  {
    title: "Facebook",
    body: "Events, news and parent discussions.",
    link: { label: "Visit our page", href: "[https://facebook.com/your-page]" },
    accent: "blue",
  },
  {
    title: "WhatsApp Community",
    body: "Parent tips and updates.",
    link: { label: "Join the group", href: "[Add the WhatsApp group link]" },
    accent: "green",
  },
];

export const press = {
  headline: "Media enquiries",
  body: "Journalists and partners: contact our communications team for interviews, images and press resources.",
  buttons: [{ label: "Contact communications", href: "/#contact" }],
};
