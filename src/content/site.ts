/**
 * Organisation-wide details and navigation.
 *
 * Everything inside [square brackets] is a placeholder that must be replaced
 * with a real detail before the site goes live. See PLACEHOLDERS.md.
 */

export const site = {
  name: "Spectrum Care Foundation",
  shortName: "Spectrum Care",
  tagline:
    "A non-profit dedicated to improving the lives of individuals with neurodevelopmental disorders.",
  /**
   * The live origin, used for metadata, the sitemap and robots.txt.
   * Set NEXT_PUBLIC_SITE_URL on the host instead of editing this fallback.
   */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://spectrumcare.com.ng",
  centre: "Spectrum Care Inclusive Center",
  address: {
    street: "[Street address]",
    area: "Lugbe",
    city: "Abuja",
    state: "FCT",
    country: "Nigeria",
  },
  phone: "[+234 000 000 0000]",
  /** Digits only, international format, used for the click-to-chat link. */
  whatsappNumber: "2340000000000",
  email: "info@spectrumcare.com.ng",
  openingHours: "[Monday – Friday, 8:00 am – 5:00 pm]",
  registration: "[Registration details]",
  /** Fixed so every page prerenders deterministically; bump it each January. */
  copyrightYear: 2026,
  socials: [
    { label: "Facebook", href: "[https://facebook.com/your-page]", icon: "facebook" },
    { label: "LinkedIn", href: "[https://linkedin.com/company/your-page]", icon: "linkedin" },
    { label: "Instagram", href: "[https://instagram.com/your-handle]", icon: "instagram" },
    { label: "YouTube", href: "[https://youtube.com/@your-channel]", icon: "youtube" },
  ],
} as const;

export const fullAddress = [
  site.centre,
  site.address.street,
  site.address.area,
  `${site.address.city}, ${site.address.state}`,
  site.address.country,
].join(", ");

export type NavItem = { label: string; href: string };

export const mainNav: NavItem[] = [
  { label: "About Us", href: "/about" },
  { label: "What We Do", href: "/what-we-do" },
  { label: "Our Projects & Reach", href: "/projects-and-reach" },
  { label: "Research", href: "/research" },
  { label: "Learn About NDDs", href: "/learn" },
  { label: "Our Team & Events", href: "/team-and-events" },
  { label: "Join Our Team", href: "/join-our-team" },
  { label: "Latest", href: "/latest" },
];

export const footerNav: { heading: string; links: NavItem[] }[] = [
  {
    heading: "About",
    links: [
      { label: "Our Story", href: "/about#our-story" },
      { label: "Vision & Mission", href: "/about#vision-and-mission" },
      { label: "Our Team", href: "/team-and-events#leadership" },
      { label: "Latest", href: "/latest" },
    ],
  },
  {
    heading: "What We Do",
    links: [
      { label: "Assess & Understand", href: "/what-we-do#assess" },
      { label: "Therapy & Growth", href: "/what-we-do#therapy" },
      { label: "School & Inclusion", href: "/what-we-do#school" },
      { label: "Family & Home", href: "/what-we-do#family" },
    ],
  },
  {
    heading: "Get Involved",
    links: [
      { label: "Donate", href: "/donate" },
      { label: "Volunteer", href: "/join-our-team#volunteer" },
      { label: "Careers", href: "/join-our-team" },
      { label: "Partner with us", href: "/projects-and-reach#get-involved" },
    ],
  },
];
