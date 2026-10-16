import type { CardItem } from "@/components/sections/types";
import type { Stat } from "@/components/sections/StatStrip";

export const hero = {
  eyebrow: "Our Projects & Reach",
  headline: "Impact that starts in Lugbe and spreads far beyond it.",
  subheadline:
    "Our community programmes take expertise out of the clinic and into the streets, schools and homes that need it most.",
  media: "Banner photo: a community screening day in Lugbe, with volunteers and families.",
};

export const stats: Stat[] = [
  { value: "[000]", label: "Children reached through screenings" },
  { value: "[00]", label: "Schools and teachers trained" },
  { value: "[000]", label: "Parents and caregivers trained" },
  { value: "[00]", label: "Sponsored therapy places" },
];

export const programmes: CardItem[] = [
  {
    title: "Community Screening Days",
    body: "Free developmental screenings in the community, so early signs are found early and families are connected to support.",
    media: "Photo: screening day.",
    badge: "Ongoing",
    accent: "red",
  },
  {
    title: "Inclusive Schools Programme",
    body: "Partnering with schools to train teachers, place shadow support and build inclusive classrooms.",
    media: "Photo: teacher workshop.",
    badge: "Ongoing",
    accent: "green",
  },
  {
    title: "Parent Power Workshops",
    body: "Monthly workshops that give parents practical tools to support learning and behaviour at home.",
    media: "Photo: parents in workshop.",
    badge: "Ongoing",
    accent: "orange",
  },
  {
    title: "Sponsored Therapy Places",
    body: "Donor and CSR-funded therapy places for families who cannot afford the full cost of care.",
    media: "Photo: child in therapy.",
    badge: "Seeking sponsors",
    accent: "teal",
  },
  {
    title: "Caregiver & Inclusive Nanny Training",
    body: "Training caregivers who can support children with confidence and compassion.",
    media: "Photo: caregivers practising skills.",
    badge: "Ongoing",
    accent: "yellow",
  },
  {
    title: "Awareness & Advocacy Campaigns",
    body: "Community campaigns that replace stigma with understanding.",
    media: "Photo: awareness walk.",
    badge: "Ongoing",
    accent: "blue",
  },
  {
    title: "Sensory Garden Open Days",
    body: "Opening our outdoor sensory play area to children and families from the community.",
    media: "Photo: kids in the sensory garden.",
    badge: "Coming soon",
    accent: "green",
  },
  {
    title: "Youth Transition & Life Skills",
    body: "Preparing adolescents and young adults for independence, vocational training and work.",
    media: "Photo: young adults in a skills class.",
    badge: "Coming soon",
    accent: "blue",
  },
];

export const programmesNote =
  "Edit this list to match the programmes you are actually running or launching, and set each status honestly.";

export const spotlight = {
  eyebrow: "Spotlight",
  headline: "[Story headline: one child, one family, one breakthrough]",
  body: [
    "[Tell the story of one family or community: where they started, what changed, and what it means today. Use a real name and photograph only with written consent.]",
    "[Suggested shape: the struggle, the first step into Spectrum Care, the support provided, the moment of breakthrough, and the future they are now building.]",
  ],
  button: { label: "Read more stories", href: "/latest" },
  media: "Photo: the featured child and family, in a natural moment.",
};

export const reach = {
  eyebrow: "Our reach",
  headline: "Rooted in Lugbe. Growing across Nigeria and West Africa.",
  body: [
    "Our first home is the community of Lugbe and the wider Federal Capital Territory, where we serve families, schools and partners every week. From here, we are building the systems, the evidence and the team to bring this model to more Nigerian cities and across West Africa.",
  ],
  list: [
    "Today: Lugbe and Abuja, FCT",
    "Next: more branches in major Nigerian cities",
    "Vision: a trusted model across West Africa",
  ],
  media: "Map graphic: Nigeria with a pulsing marker on Abuja, and softer markers on future cities.",
};

export const partnerSlots = [
  "[Partner school]",
  "[Hospital / clinic]",
  "[NGO]",
  "[CSR partner]",
  "[Government agency]",
  "[University]",
];

export const getInvolved: CardItem[] = [
  {
    title: "Give",
    body: "Fund a screening, sponsor a therapy place or make a monthly gift.",
    link: { label: "Donate", href: "/donate" },
    accent: "orange",
  },
  {
    title: "Partner",
    body: "Collaborate on CSR programmes, school initiatives or research.",
    link: { label: "Partner with us", href: "/#contact" },
    accent: "blue",
  },
  {
    title: "Volunteer",
    body: "Share your time and skills with children and families.",
    link: { label: "Volunteer", href: "/join-our-team#volunteer" },
    accent: "green",
  },
];
