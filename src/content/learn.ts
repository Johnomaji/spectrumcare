import type { CardItem } from "@/components/sections/types";
import type { Step } from "@/components/sections/Steps";
import type { AccordionItem } from "@/components/sections/Accordion";

export const hero = {
  eyebrow: "Learn More About NDDs",
  headline: "Understanding is where acceptance begins.",
  subheadline:
    "Plain-language guides, early-sign checklists and trusted resources for families, teachers and communities.",
  media: "Banner photo: a parent and child reading together.",
};

export const basics = {
  eyebrow: "The basics",
  headline: "What are neurodevelopmental disorders?",
  body: [
    "Neurodevelopmental disorders (NDDs) are a group of conditions that begin in early childhood and affect how the brain develops, shaping the way a person communicates, learns, moves, behaves and relates to others.",
    "For many people they are lifelong, but with early and appropriate support, children can make remarkable progress. NDDs are not caused by bad parenting, they are not contagious and they say nothing about a child's worth.",
  ],
  media: "Illustration: a friendly, colourful brain graphic with branching pathways.",
};

export const conditions: CardItem[] = [
  {
    title: "Autism Spectrum Disorder",
    body: "A developmental difference affecting social communication and interaction, often with repetitive behaviours, intense interests and sensory differences. It is a spectrum: every autistic person is different.",
    accent: "blue",
  },
  {
    title: "ADHD",
    body: "Affects attention, activity levels and impulse control, and can influence learning, friendships and daily routines.",
    accent: "red",
  },
  {
    title: "Cerebral Palsy",
    body: "A group of lifelong conditions affecting movement, muscle tone and posture, linked to differences in the developing brain.",
    accent: "green",
  },
  {
    title: "Down Syndrome",
    body: "A genetic condition caused by an extra copy of chromosome 21, usually bringing developmental and learning differences and sometimes health needs.",
    accent: "orange",
  },
  {
    title: "Learning Disabilities",
    body: "Specific difficulties with reading, writing, maths or processing information, such as dyslexia.",
    accent: "green",
  },
  {
    title: "Speech & Language Disorders",
    body: "Difficulties understanding language, producing speech or using language to communicate.",
    accent: "blue",
  },
  {
    title: "Sensory Processing Differences",
    body: "Differences in how the brain receives and responds to sound, touch, light, movement and other input.",
    accent: "red",
  },
  {
    title: "Developmental Delay",
    body: "When a child reaches milestones later than expected in one or more areas.",
    accent: "teal",
  },
];

export const earlySigns = [
  "Doesn't respond to their name by around 12 months",
  "Little or no babbling, pointing or gesturing by 12 to 18 months",
  "Very few words by 16 to 24 months",
  "Loses words or social skills they once had",
  "Limited eye contact or interest in other children",
  "Strong distress at changes in routine, or at certain sounds, textures or lights",
  "Repetitive movements or very narrow, intense interests",
  "Delays in sitting, walking or coordination",
  "Struggles to pay attention or sit still beyond what is typical for their age",
  "Finds reading, writing or numbers much harder than classmates",
];

export const whatToDo: Step[] = [
  {
    title: "Write down what you notice",
    body: "Dates, examples, even short videos help.",
  },
  {
    title: "Talk to someone",
    body: "Speak to your paediatrician, your child's teacher or our team.",
  },
  {
    title: "Request a screening",
    body: "A developmental screening is quick and gives direction.",
  },
  {
    title: "Start support early",
    body: "Don't wait for a label to begin helping.",
  },
];

export const myths: AccordionItem[] = [
  {
    question: "Myth: It's caused by bad parenting.",
    answer:
      "Fact: NDDs are developmental conditions that begin in the brain. They are not caused by anything a parent did or did not do.",
  },
  {
    question: "Myth: They'll grow out of it.",
    answer:
      "Fact: Many conditions are lifelong, and waiting costs precious time. Early support makes a real difference to communication, learning and independence.",
  },
  {
    question: "Myth: It's a curse or a spiritual attack.",
    answer:
      "Fact: Faith can be a great strength for families, but NDDs are developmental and medical in nature. They are not a punishment and no one is to blame.",
  },
  {
    question: "Myth: Children with NDDs can't learn.",
    answer:
      "Fact: They can learn, often in different ways. With the right support, children grow, achieve and surprise us.",
  },
  {
    question: "Myth: There is a single cure.",
    answer:
      "Fact: NDDs are not illnesses to be cured. The goal is to build skills, independence and quality of life through consistent, evidence-based support.",
  },
];

export const resources: CardItem[] = [
  {
    title: "Parent Starter Guide",
    meta: "[PDF]",
    body: "First steps after a concern or diagnosis.",
    link: { label: "Download", href: "[Add the PDF link]" },
    accent: "blue",
  },
  {
    title: "Teacher's Inclusion Toolkit",
    meta: "[PDF]",
    body: "Practical classroom strategies.",
    link: { label: "Download", href: "[Add the PDF link]" },
    accent: "green",
  },
  {
    title: "Sensory-Friendly Home Tips",
    meta: "[PDF]",
    body: "Simple changes that make home calmer.",
    link: { label: "Download", href: "[Add the PDF link]" },
    accent: "orange",
  },
  {
    title: "Video Series",
    meta: "[Videos]",
    body: "Short explainers from our clinical team.",
    link: { label: "Watch", href: "[Add the video link]" },
    accent: "red",
  },
  {
    title: "Webinars",
    meta: "[Recordings]",
    body: "Replays of our parent and teacher sessions.",
    link: { label: "Watch", href: "[Add the recording link]" },
    accent: "green",
  },
  {
    title: "Ask a Specialist",
    body: "Send us your question and we'll point you in the right direction.",
    link: { label: "Ask now", href: "/#contact" },
    accent: "blue",
  },
];

export const glossary = {
  headers: ["Term", "What it means"],
  rows: [
    [
      "ABA",
      "Applied Behaviour Analysis: a structured approach that teaches skills using positive reinforcement.",
    ],
    [
      "IEP",
      "Individualised Education Plan: a written plan of goals and supports for a child at school.",
    ],
    [
      "Early intervention",
      "Support provided in the early years, when the brain is developing fastest.",
    ],
    [
      "AAC",
      "Augmentative and alternative communication: tools such as picture cards or devices that help a person communicate.",
    ],
    [
      "Sensory processing",
      "How the nervous system receives and responds to sensory information.",
    ],
    [
      "Shadow teacher",
      "A trained support person who helps a child take part in class.",
    ],
    [
      "Screening vs assessment vs diagnosis",
      "Screening flags possible concerns, assessment explores them in depth, and diagnosis is a formal medical or clinical conclusion.",
    ],
  ],
};

export const trustedSources = [
  "World Health Organization",
  "CDC: Learn the Signs. Act Early.",
  "[Nigerian health body]",
  "[Disability rights organisation]",
];
