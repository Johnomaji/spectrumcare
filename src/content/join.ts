import type { CardItem } from "@/components/sections/types";
import type { NumberedItem } from "@/components/sections/NumberedCards";
import type { Role } from "@/components/sections/RoleList";
import type { Step } from "@/components/sections/Steps";

export const hero = {
  eyebrow: "Join Our Team",
  headline: "Do work that changes a family's story.",
  subheadline:
    "Come and build the future of neurodevelopmental care in Nigeria with a team that believes in every child.",
  media: "Banner photo: staff members celebrating a child's milestone together.",
};

export const why: NumberedItem[] = [
  { title: "Purpose", body: "See the difference you make every day." },
  { title: "Teamwork", body: "Work alongside specialists across disciplines." },
  { title: "Supervision", body: "Clinical supervision and clear caseload targets." },
  { title: "Growth", body: "Continuing professional development built in." },
  { title: "Belonging", body: "A warm, inclusive and supportive culture." },
];

export const roles: Role[] = [
  {
    title: "ABA Therapist / RBT",
    detail: "Full-time · Lugbe, Abuja",
    cta: "Apply",
    href: "#apply",
  },
  {
    title: "Speech & Language Therapist",
    detail: "Full-time · Lugbe, Abuja",
    cta: "Apply",
    href: "#apply",
  },
  {
    title: "Physiotherapist / Occupational Therapist",
    detail: "Full-time · Lugbe, Abuja",
    cta: "Apply",
    href: "#apply",
  },
  {
    title: "Special Education / Inclusion Specialist",
    detail: "Full-time · School-based",
    cta: "Apply",
    href: "#apply",
  },
  {
    title: "Professional Caregiver / Inclusive Nanny",
    detail: "Full-time / Part-time · Home-based",
    cta: "Apply",
    href: "#apply",
  },
  {
    title: "Medical Laboratory Scientist",
    detail: "Full-time · Lugbe, Abuja",
    cta: "Apply",
    href: "#apply",
  },
  {
    title: "Administrative & Front Desk Officer",
    detail: "Full-time · Lugbe, Abuja",
    cta: "Apply",
    href: "#apply",
  },
  {
    title: "Don't see your role?",
    detail: "Send us your CV. We would love to hear from you.",
    cta: "Send your CV",
    href: "#apply",
  },
];

/** Used by the application form's role picker. */
export const roleOptions = [
  "ABA Therapist / RBT",
  "Speech & Language Therapist",
  "Physiotherapist / Occupational Therapist",
  "Special Education / Inclusion Specialist",
  "Professional Caregiver / Inclusive Nanny",
  "Medical Laboratory Scientist",
  "Administrative & Front Desk Officer",
  "Volunteer",
  "Student placement",
  "Community ambassador",
  "Other",
];

export const volunteering: CardItem[] = [
  {
    title: "Volunteers",
    body: "Support events, screening days, the sensory garden and more.",
    link: { label: "Volunteer", href: "#apply" },
    accent: "green",
  },
  {
    title: "Student Placements",
    body: "Supervised clinical and educational placements for students.",
    link: { label: "Apply for placement", href: "#apply" },
    accent: "blue",
  },
  {
    title: "Community Ambassadors",
    body: "Help us spread awareness in your church, mosque, school or neighbourhood.",
    link: { label: "Become an ambassador", href: "#apply" },
    accent: "orange",
  },
];

export const hiringSteps: Step[] = [
  { title: "Apply", body: "Submit the form below." },
  { title: "Intro call", body: "A friendly conversation about you." },
  { title: "Skills interview", body: "Meet the team and show your craft." },
  { title: "Reference checks", body: "We speak to people who know your work." },
  { title: "Welcome", body: "Orientation and mentoring." },
];

export const staffVoice = {
  quote: "[Insert a quote from a team member about why they love working at Spectrum Care.]",
  attribution: "[Name, role]",
  media: "Portrait: a team member at work with a child.",
};

export const application = {
  headline: "Apply now",
  intro: "Tell us about yourself and the role you are interested in.",
  note: "Spectrum Care Foundation is an equal-opportunity employer and welcomes applications from people with disabilities and neurodivergent people.",
};
