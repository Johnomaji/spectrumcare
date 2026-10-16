import type { Profile } from "@/components/sections/ProfileGrid";
import type { EventItem } from "@/components/sections/EventList";

export const hero = {
  eyebrow: "Our Team & Events",
  headline: "The people who make hope practical.",
  subheadline:
    "Trustees, clinicians, educators and carers, united by one conviction: every child can grow.",
  media: "Banner photo: the whole Spectrum Care team in front of the center, in matching colours.",
};

export const trustees: Profile[] = [
  { name: "[Name]", role: "Chairperson, Board of Trustees", bio: "[Two-line bio]" },
  { name: "[Name]", role: "Trustee", bio: "[Two-line bio]" },
  { name: "[Name]", role: "Trustee", bio: "[Two-line bio]" },
  { name: "[Name]", role: "Trustee", bio: "[Two-line bio]" },
];

export const leadership: Profile[] = [
  {
    name: "[Name]",
    role: "Executive Director",
    bio: "Leads the Foundation's vision, partnerships and growth.",
  },
  {
    name: "[Name]",
    role: "Clinical Director",
    bio: "Oversees clinical quality, supervision and service delivery.",
  },
  {
    name: "[Name]",
    role: "ABA Therapist",
    bio: "Delivers behaviour-based skill-building programmes.",
  },
  {
    name: "[Name]",
    role: "Speech & Language Therapist",
    bio: "Supports communication from first sounds to conversation.",
  },
  {
    name: "[Name]",
    role: "Physical / Occupational Therapist",
    bio: "Builds movement, coordination and everyday independence.",
  },
  {
    name: "[Name]",
    role: "Cognitive Therapist",
    bio: "Strengthens attention, memory and learning skills.",
  },
  {
    name: "[Name]",
    role: "Educational Inclusion Specialist",
    bio: "Supports children and teachers in the classroom.",
  },
  {
    name: "[Name]",
    role: "Operations & Administration Team",
    bio: "Keeps every family's journey smooth and organised.",
  },
];

export const portraitNote =
  "Use a square portrait for each person, with a consistent crop and background. Replace the placeholders with real photographs.";

export const philosophy = {
  quote:
    "A child's needs don't arrive in separate boxes, so neither does our care. We think, plan and celebrate together.",
  attribution: "The Spectrum Care team",
  media: "Photo: team huddle around a case review table.",
};

export const events: EventItem[] = [
  {
    date: "[DD MMM]",
    title: "Monthly Parent Workshop",
    body: "Practical strategies for home. Open to all parents and caregivers.",
    location: "Spectrum Care Center, Lugbe",
    href: "/#contact",
  },
  {
    date: "[DD MMM]",
    title: "Free Community Screening Day",
    body: "Quick, friendly developmental screening for young children.",
    location: "[Community venue], Lugbe",
    href: "/#contact",
  },
  {
    date: "[DD MMM]",
    title: "Teacher Training Workshop",
    body: "Inclusive classroom practices for educators.",
    location: "[School / Center]",
    href: "/#contact",
  },
  {
    date: "[DD MMM]",
    title: "Center Open Day",
    body: "Tour our therapy rooms and sensory garden and meet the team.",
    location: "Spectrum Care Center, Lugbe",
    href: "/#contact",
  },
];

export const awarenessCalendar = {
  headers: ["Date", "Observance"],
  rows: [
    ["21 March", "World Down Syndrome Day"],
    ["2 April", "World Autism Awareness Day"],
    ["6 October", "World Cerebral Palsy Day"],
    ["October", "ADHD Awareness Month"],
    ["3 December", "International Day of Persons with Disabilities"],
  ],
};

export const gallery = [
  "Event photo: [event name and date]",
  "Event photo: [event name and date]",
  "Event photo: [event name and date]",
  "Event photo: [event name and date]",
  "Event photo: [event name and date]",
  "Event photo: [event name and date]",
  "Event photo: [event name and date]",
  "Event photo: [event name and date]",
];

export const hostEvent = {
  headline: "Want to host or sponsor an event?",
  body: "Partner with us on a screening day, workshop or awareness campaign.",
  buttons: [{ label: "Talk to us", href: "/#contact" }],
};
