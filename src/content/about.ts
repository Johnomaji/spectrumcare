import type { CardItem } from "@/components/sections/types";
import type { NumberedItem } from "@/components/sections/NumberedCards";
import type { Phase } from "@/components/sections/Timeline";

export const hero = {
  eyebrow: "About Us",
  headline: "We started with a simple belief.",
  subheadline:
    "Every child, regardless of their diagnosis, deserves the opportunity to learn, communicate, thrive and live with dignity.",
  media:
    "Banner photo: children and therapists laughing together in the center's sensory garden.",
};

export const story = {
  eyebrow: "Our story",
  headline: "Where there was a gap, we built a home.",
  body: [
    "Spectrum Care began where every important thing begins: with families. Families who waited months for an assessment. Families who crossed the city in search of a therapist. Families who were told their child would simply grow out of it.",
    "What we saw was not a lack of love, because Nigerian families love fiercely. It was a lack of access: to specialists, to structured therapy, to trained caregivers, and to schools that know how to say yes.",
    "So we set out to build what was missing. Not just a clinic, but a place where assessment, therapy, medical screening, family training and school inclusion live under one roof and work as one team.",
    "Today, from our inclusive center in Lugbe, Abuja, Spectrum Care Foundation is turning that belief into daily progress: first words, first friendships, first days at school, and parents who finally feel they are not alone.",
  ],
  media: "Photo: the Lugbe center exterior with the Spectrum Care sign, families arriving.",
};

export const founder = {
  quote:
    "[Draft for the Executive Director to personalise: ‘I have sat with parents on the day they first heard the word diagnosis. What they ask for is rarely a miracle. They ask for a plan, a team and hope. Spectrum Care is our answer.’]",
  attribution: "[Name], Founder & Executive Director",
  media: "Portrait: Executive Director, smiling, at the center.",
};

export const visionMission: CardItem[] = [
  {
    title: "Our Vision",
    body: "To become the leading neurodevelopmental care and inclusion support organisation in Africa, transforming lives through evidence-based intervention, family empowerment and inclusive systems.",
    accent: "blue",
  },
  {
    title: "Our Mission",
    body: "To provide accessible, high-quality, individualised therapeutic and developmental services for individuals with autism and other neurodevelopmental disorders, while empowering families, schools and communities to build inclusive and supportive environments.",
    accent: "red",
  },
];

export const values: NumberedItem[] = [
  { title: "Excellence", body: "High-standard professional care in every service we deliver." },
  { title: "Compassion", body: "Serving with empathy, dignity and respect." },
  { title: "Inclusion", body: "Equal access and participation for all." },
  { title: "Integrity", body: "Ethical, transparent practice, always." },
  { title: "Innovation", body: "Evidence-based, modern intervention strategies." },
];

export const modelOfCare: CardItem[] = [
  {
    title: "At Home",
    body: "Therapy and coaching in a child's own routines.",
    media: "Photo: home-based session in a living room.",
    accent: "orange",
  },
  {
    title: "At School",
    body: "Shadow support and teacher partnership in the classroom.",
    media: "Photo: shadow teacher in class.",
    accent: "teal",
  },
  {
    title: "At the Center",
    body: "Multidisciplinary therapy under one roof in Lugbe.",
    media: "Photo: therapy room at the center.",
    accent: "yellow",
  },
  {
    title: "In the Community",
    body: "Screenings, workshops and awareness drives.",
    media: "Photo: community screening event.",
    accent: "red",
  },
];

export const whyFoundation = {
  eyebrow: "Spectrum Care Foundation",
  headline: "A non-profit, because this is a cause, not just a service.",
  body: [
    "Spectrum Care Foundation is a non-profit dedicated to improving the lives of individuals with neurodevelopmental disorders. Our work is guided by one question: what does this family need in order to move forward?",
    "Income from our services helps sustain our inclusive center in Lugbe, while donors and partners make it possible for us to run free screenings, sponsored therapy places and community programmes for families who need us most.",
  ],
  list: [
    "Governed by a Board of Trustees",
    "Transparent reporting on how funds are used",
    "Reinvestment in the center and community programmes",
  ],
  media: "Photo: Board and team members standing together outside the center.",
  note: "Confirm the governance and reporting statements with the Board before publishing.",
};

export const roadmap: Phase[] = [
  {
    phase: "Phase 1: Establish (Years 1 to 2)",
    title: "Launch and root",
    body: "Open our doors in Lugbe, serve 20+ families, build partnerships with schools and hospitals, and establish a multidisciplinary team.",
  },
  {
    phase: "Phase 2: Scale (Years 3 to 5)",
    title: "Grow our reach",
    body: "Expand to more branches, launch vocational services, build a digital parent training platform and offer inclusive education consulting.",
  },
  {
    phase: "Phase 3: Lead (Year 5 and beyond)",
    title: "Lead the field",
    body: "Become a national center of excellence, establish a research and training institute, and bring our model across West Africa.",
  },
];

export const closing = {
  headline: "Walk with us.",
  body: "Whether you are a parent looking for answers, a school ready to include, or a partner who wants to make a difference, there is a place for you here.",
  buttons: [
    { label: "Get in touch", href: "/#contact" },
    { label: "Support our work", href: "/donate" },
  ],
};
