import type { CardItem } from "@/components/sections/types";

export const hero = {
  eyebrow: "Research",
  headline: "What we learn should help every family, not just ours.",
  subheadline:
    "We measure what matters, share what works and partner to build evidence that reflects Nigerian children, families and classrooms.",
  media: "Banner photo: team reviewing progress charts around a table.",
};

export const why = {
  eyebrow: "Why research matters",
  headline: "Nigerian families deserve Nigerian evidence.",
  body: [
    "Much of what the world knows about neurodevelopmental conditions comes from research done in other countries and cultures. Families in Nigeria have different languages, school systems, health pathways and daily realities.",
    "Research helps us answer the questions that matter here: how do we identify children earlier, which supports work best in our classrooms, and how do we make quality care affordable?",
  ],
  media: "Photo: a researcher and a clinician in discussion, notebooks open.",
};

export const priorities: CardItem[] = [
  {
    title: "Early identification",
    body: "Finding children sooner in Nigerian communities and schools.",
    accent: "teal",
  },
  {
    title: "Culturally responsive parent training",
    body: "Adapting evidence-based programmes to local families and languages.",
    accent: "blue",
  },
  {
    title: "Inclusive education models",
    body: "What helps teachers and schools include every child.",
    accent: "green",
  },
  {
    title: "Access and affordability",
    body: "Models that bring quality therapy within reach.",
    accent: "orange",
  },
  {
    title: "Caregiver wellbeing",
    body: "Understanding and supporting those who care for others.",
    accent: "red",
  },
  {
    title: "Technology and tele-therapy",
    body: "Extending specialist support beyond the center.",
    accent: "blue",
  },
];

export const measurement = {
  headline: "How we measure what matters",
  intro:
    "From day one, we monitor and evaluate our work, with quarterly reporting to leadership and annual independent reviews.",
  headers: ["What we track", "How often"],
  rows: [
    ["Percentage of clients meeting their individual goal targets", "Monthly"],
    ["Number of active clients and new intake", "Monthly"],
    ["Parent and caregiver satisfaction", "Quarterly"],
    ["School partnership growth and teacher feedback", "Each school term"],
    ["Community reach: screenings and campaigns", "Twice a year"],
  ],
};

export const ethics = {
  eyebrow: "Our promise",
  headline: "Ethical by design.",
  body: [
    "Every family's trust is sacred. Our work is governed by documented safeguarding, data privacy and professional conduct policies. Any research involving children or families will respect informed consent, confidentiality and the right to withdraw at any time.",
  ],
  list: [
    "Informed consent for every participant",
    "Anonymised, securely stored data",
    "Independent ethical review where required",
  ],
  media: "Photo: a clinician speaking warmly with a parent over a consent form.",
};

export const publications = {
  headline: "Publications and reports",
  intro: "[Add your reports, briefs and articles here as they are published.]",
  headers: ["Title", "Year", "Type", "Download"],
  rows: [
    ["[Annual impact report]", "[Year]", "Report", "[PDF]"],
    ["[Research brief]", "[Year]", "Brief", "[PDF]"],
    ["[Journal article]", "[Year]", "Article", "[Link]"],
  ],
};

export const collaborate = {
  headline: "Let's build the evidence together.",
  body: "We welcome collaboration with universities, hospitals, funders and student researchers. Our long-term vision includes a Research and Training Institute to train the next generation of specialists.",
  buttons: [{ label: "Propose a collaboration", href: "/#contact" }],
};
