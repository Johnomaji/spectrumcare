import type { CardItem } from "@/components/sections/types";
import type { Stat } from "@/components/sections/StatStrip";
import type { TabItem } from "@/components/sections/Tabs";
import type { NumberedItem } from "@/components/sections/NumberedCards";
import type { Article } from "@/components/sections/ArticleCards";

export const hero = {
  eyebrow: "Spectrum Care Foundation · Lugbe, Abuja",
  headline: "Every mind is different. Every child deserves to thrive.",
  subheadline:
    "Spectrum Care Foundation is a non-profit dedicated to improving the lives of individuals with neurodevelopmental disorders, and the families, schools and communities who walk beside them.",
  buttons: [
    { label: "Our Story", href: "/about" },
    { label: "Get Support", href: "#contact" },
  ],
  media:
    "Full-width photo: a joyful child at the Lugbe center playing with bright sensory blocks while a therapist kneels beside them. Warm natural light, genuine smiles.",
};

export const stats: Stat[] = [
  { value: "[00]+", label: "Families supported" },
  { value: "[00]", label: "Partner schools" },
  { value: "[000]", label: "Children screened free" },
  {
    value: "4",
    label: "Environments of care: home, school, center & community",
  },
];

export const whoWeAre = {
  eyebrow: "Who we are",
  headline: "A place where every child is seen, understood and celebrated.",
  body: [
    "In Nigeria, too many families receive a diagnosis and then silence. No clear next step. No specialist nearby. No school ready to welcome their child. Parents carry the weight alone, while children with extraordinary potential wait for support that should have come years earlier.",
    "Spectrum Care Foundation exists to end that waiting. From our inclusive center in Lugbe, Abuja, behaviour analysts, speech and language therapists, physiotherapists, cognitive therapists and special educators work together as one team, with your family at the heart of every decision.",
    "We believe every child, whatever their diagnosis, deserves the chance to learn, to communicate, to belong, and to live with dignity.",
  ],
  button: { label: "Read our story", href: "/about" },
  media:
    "Photo: a parent and child sharing a quiet, happy moment on a sofa at the center, a picture book open between them.",
};

export const services: CardItem[] = [
  {
    title: "Assess & Understand",
    body: "Clear, compassionate assessments that turn questions into a roadmap, so you know where your child is and where they can go.",
    link: { label: "Explore assessments", href: "/what-we-do#assess" },
    media: "Photo: therapist and child during a play-based assessment.",
    accent: "blue",
  },
  {
    title: "Therapy & Growth",
    body: "ABA, speech and language, physical and cognitive therapy delivered by credentialed specialists and built around your child's goals.",
    link: { label: "Explore therapy", href: "/what-we-do#therapy" },
    media: "Photo: speech therapy session with picture cards.",
    accent: "red",
  },
  {
    title: "School & Inclusion",
    body: "Shadow support, teacher training and school partnerships that open classroom doors for every child.",
    link: { label: "Explore school support", href: "/what-we-do#school" },
    media: "Photo: a child and shadow teacher working together in a bright classroom.",
    accent: "green",
  },
  {
    title: "Family & Home",
    body: "Parent training, trained caregivers and inclusive nanny support, so progress continues long after the session ends.",
    link: { label: "Explore family support", href: "/what-we-do#family" },
    media: "Photo: parents attending a training workshop.",
    accent: "orange",
  },
];

export const audienceTabs: TabItem[] = [
  {
    label: "I'm a parent or caregiver",
    body: "You know your child best. Let's pair that knowledge with expert support: screening, assessment, therapy, parent training and home-based care.",
    link: { label: "Start with a conversation", href: "#contact" },
  },
  {
    label: "I'm a school",
    body: "Make your classrooms ready for every learner through shadow support, teacher training, IEP development and long-term school partnerships.",
    link: { label: "Partner with us", href: "/what-we-do#school" },
  },
  {
    label: "I'm a health professional or organisation",
    body: "Refer a family, collaborate on research or build a CSR programme that changes lives in your community.",
    link: { label: "Work with us", href: "/research#collaborate" },
  },
  {
    label: "I want to support the cause",
    body: "Sponsor a therapy place, fund a free screening day, volunteer your skills or give what you can.",
    link: { label: "Give or volunteer", href: "/projects-and-reach#get-involved" },
  },
];

export const pillars: NumberedItem[] = [
  { title: "Assessment", body: "Understanding strengths and needs." },
  { title: "Therapeutic Intervention", body: "Evidence-based, individualised therapy." },
  { title: "Family Empowerment", body: "Equipping parents and caregivers." },
  { title: "Educational Inclusion", body: "Welcoming every child into school." },
  { title: "Sustainable Support", body: "Systems that last beyond the session." },
];

export const testimonial = {
  quote:
    "[Insert a real quote from a parent, teacher or client here, used with their written consent.]",
  attribution: "[Name, relationship to Spectrum Care]",
  media: "Portrait photo: the person quoted, or a warm photo of the family (with consent).",
};

export const latestArticles: Article[] = [
  {
    title: "[Sample] Welcome to the Spectrum Care Inclusive Center",
    date: "[Date]",
    excerpt: "Take a look inside our new home in Lugbe.",
    category: "News",
    media: "Photo: front entrance of the center.",
    href: "/latest",
  },
  {
    title: "[Sample] Free developmental screening day: register your child",
    date: "[Date]",
    excerpt: "Early answers change everything.",
    category: "Events",
    media: "Photo: screening day banner and families.",
    href: "/latest",
  },
  {
    title: "[Sample] Understanding autism: five things every parent should know",
    date: "[Date]",
    excerpt: "Clear, kind guidance from our clinical team.",
    category: "Awareness",
    media: "Photo: parent reading with child.",
    href: "/latest",
  },
];

export const joinBanner = {
  headline: "Do the most meaningful work of your career.",
  body: "Spectrum Care Foundation is growing a multidisciplinary team of therapists, educators, caregivers and clinical professionals who believe in the potential of every child. Full-time, part-time, volunteer and student placement opportunities are available.",
  buttons: [{ label: "See opportunities", href: "/join-our-team" }],
};

export const video = {
  headline: "See what's possible",
  body: "Meet the children, families and team who make Spectrum Care a home for hope.",
  note: "Video thumbnail: a short film of life at the center (2 to 3 minutes).",
};

export const supportBanner = {
  headline: "Help a child find their voice.",
  body: "Your gift funds free community screenings, sponsored therapy places and programmes that bring inclusion to families in Lugbe and beyond.",
  buttons: [
    { label: "Donate", href: "/donate" },
    { label: "Partner with us", href: "/projects-and-reach#get-involved" },
  ],
};
