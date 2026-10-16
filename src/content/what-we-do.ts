import type { CardItem } from "@/components/sections/types";
import type { Step } from "@/components/sections/Steps";
import type { AccordionItem } from "@/components/sections/Accordion";

export const hero = {
  eyebrow: "What We Do",
  headline: "Support that follows your child everywhere.",
  subheadline:
    "Home. School. Center. Community. Because growth doesn't stop when the session ends.",
  media:
    "Banner photo: a child confidently walking into the center holding a therapist's hand.",
};

export const environments: CardItem[] = [
  {
    title: "Home-based",
    body: "Support within real family routines.",
    media: "Photo: home session.",
    accent: "red",
  },
  {
    title: "School-based",
    body: "Shadow support and teacher partnership.",
    media: "Photo: classroom support.",
    accent: "green",
  },
  {
    title: "Center-based",
    body: "Specialist therapy at our Lugbe center.",
    media: "Photo: therapy room.",
    accent: "orange",
  },
  {
    title: "Community-based",
    body: "Screenings, workshops and awareness events.",
    media: "Photo: community event.",
    accent: "teal",
  },
];

export const assess = {
  eyebrow: "Assess & Understand",
  headline: "Understanding is where every journey begins.",
  body: [
    "You may be holding a diagnosis, or only a feeling that something is different. Either way, our assessments give you what you have been missing: clarity. We look closely at your child's communication, behaviour, sensory responses, learning and daily living skills, then explain what we find in plain, compassionate language and put it in a written report you can share with doctors and schools.",
  ],
  list: [
    "Developmental screening (child)",
    "Behavioural assessment and report",
    "Sensory profile assessment",
    "School readiness assessment",
    "Comprehensive home-based functional assessment",
    "School-based functional assessment",
    "Parent consultation and written report",
    "Comprehensive across-board functional assessment (3 days)",
  ],
  button: { label: "Request an assessment", href: "/#contact" },
  media: "Photo: therapist and parent reviewing an assessment report together.",
};

export const therapy: CardItem[] = [
  {
    title: "ABA Behavioural Therapy",
    body: "Structured, positive and play-based teaching of communication, social, learning and daily-living skills. Available at home or at the center.",
    accent: "blue",
  },
  {
    title: "Speech & Language Therapy",
    body: "Helping children understand, express and connect, from first sounds and words to confident conversation.",
    accent: "red",
  },
  {
    title: "Physical Therapy",
    body: "Building strength, balance, coordination and independence in movement.",
    accent: "green",
  },
  {
    title: "Cognitive Therapy",
    body: "Strengthening attention, memory, problem-solving and learning skills in a supportive setting.",
    accent: "teal",
  },
  {
    title: "Intensive In-Home ABA",
    body: "Daily, in-home programmes for children who need a higher intensity of support.",
    accent: "orange",
  },
  {
    title: "Individualised Care Plans",
    body: "Clear goals, regular reviews and monthly progress reports for every child.",
    accent: "blue",
  },
];

export const school: CardItem[] = [
  {
    title: "School Integration Therapy",
    body: "Preparing and supporting children to settle, learn and thrive in school.",
    accent: "green",
  },
  {
    title: "Shadow Support",
    body: "A trained specialist alongside the child in class, building independence step by step.",
    accent: "blue",
  },
  {
    title: "School Partnership Support",
    body: "Long-term partnerships that help schools build inclusive systems.",
    accent: "red",
  },
  {
    title: "Teacher Training Workshops",
    body: "Practical strategies teachers can use from the next lesson.",
    accent: "orange",
  },
  {
    title: "IEP Development & Records",
    body: "Individualised Education Plans written, tracked and shared with the whole team.",
    accent: "teal",
  },
];

export const family: CardItem[] = [
  {
    title: "Parent Training Programme",
    body: "A structured 6-week course that turns therapy goals into everyday routines.",
    accent: "orange",
  },
  {
    title: "Parent Workshops",
    body: "Monthly group sessions on behaviour, communication, sensory needs and more.",
    accent: "blue",
  },
  {
    title: "Home Behaviour Consultation",
    body: "A specialist visits your home and tailors strategies to your family.",
    accent: "green",
  },
  {
    title: "Professional Caregivers",
    body: "Trained caregivers deployed to support children at home.",
    accent: "red",
  },
  {
    title: "Inclusive & Developmental Nanny Services",
    body: "Nannies trained to nurture development, not just supervise.",
    accent: "teal",
  },
];

export const health = {
  eyebrow: "Health & Diagnostics",
  headline: "Basic health screening, right where you are.",
  body: [
    "Our in-house medical laboratory and pharmacy support routine clinical assessment, appropriate referrals and monitoring, so families do not have to travel elsewhere for basic tests. Services include haematology and serology screening along with common tests that support a child's overall health.",
  ],
  list: [
    "Blood count and sickle cell / genotype screening",
    "Vitamin and mineral levels (for example vitamin D, B12, ferritin)",
    "Thyroid, glucose and routine chemistry tests",
    "Urine and stool examinations",
  ],
  button: { label: "See our laboratory services", href: "/#contact" },
  media: "Photo: friendly lab scientist preparing a child-friendly sample collection area.",
  note: "Confirm the final test list, pharmacy scope and whether services are open to the public before publishing.",
};

export const steps: Step[] = [
  { title: "Reach out", body: "Call, message or visit. Tell us your story." },
  { title: "Meet & understand", body: "Intake and assessment to see strengths and needs." },
  { title: "Your personalised plan", body: "Goals set together with you." },
  { title: "Support in every setting", body: "Therapy at home, school and center." },
  { title: "Review & grow", body: "Monthly progress reports and plan updates." },
];

export const faqs: AccordionItem[] = [
  {
    question: "Do we need a diagnosis to begin?",
    answer:
      "No. Many families come to us with questions rather than answers. Our screening and assessments help clarify your child's strengths and needs, and where a formal medical diagnosis is needed we will guide you on where to go.",
  },
  {
    question: "Who do you support?",
    answer:
      "We support children, adolescents and young adults with autism, ADHD, cerebral palsy, Down syndrome, learning disabilities, speech and language disorders, sensory processing differences and related needs.",
  },
  {
    question: "Can you work with my child's school?",
    answer:
      "Yes. Our school-based team can observe, support and train, and we collaborate closely with teachers on the child's plan.",
  },
  {
    question: "What do services cost?",
    answer:
      "Fees depend on the service and the intensity of support. We share a clear fee schedule on request and work to keep care within reach through payment plans and sponsored places.",
  },
  {
    question: "How do we get started?",
    answer:
      "Fill in the enquiry form or call us. We will arrange a first conversation to understand your child and your priorities.",
  },
];

export const closing = {
  headline: "Not sure where to start? Start with a conversation.",
  body: "Tell us about your child. We will listen first, then help you find the right next step.",
  buttons: [{ label: "Book a conversation", href: "/#contact" }],
};
