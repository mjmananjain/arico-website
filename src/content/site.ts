/**
 * Site-wide config and copy.
 *
 * IMPORTANT: everything in `copy` is TEMPORARY. Text in [square brackets] is a
 * marker for content ARICO still has to supply. The hero headline is a
 * stand-in tagline so the type scale can be judged; replace it with real copy.
 * Do not add product claims, specifications or certifications here until they
 * are provided.
 */

const rawUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const siteConfig = {
  name: "ARICO",
  url: rawUrl.replace(/\/$/, ""),
  description: "Official website of ARICO, a cleaning-products brand.",
} as const;

export type NavItem = { label: string; href: string };

export const navItems: readonly NavItem[] = [
  { label: "Products", href: "/#products" },
  { label: "Range", href: "/#range" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export const ctaItem: NavItem = { label: "Where to buy", href: "/#where-to-buy" };

export const copy = {
  hero: {
    headline: "Clean, made visible.", // TEMP tagline
    lead: "[Supporting line pending]",
    primaryCta: "Explore products",
    secondaryCta: "Where to buy",
  },
  about: {
    label: "About ARICO",
    statement: "[Brand statement pending. Two to three lines on why ARICO exists.]",
  },
  products: {
    heading: "Products",
    lead: "[Introduction to the range pending]",
  },
  detail: {
    heading: "Detail",
    lead: "[Craft and function copy pending]",
    items: ["[Detail one]", "[Detail two]", "[Detail three]"],
  },
  inUse: {
    heading: "In use",
    lead: "[In-use context pending]",
  },
  range: {
    heading: "Range",
  },
  whereToBuy: {
    heading: "Where to buy",
    body: "[Sales model pending: retailers, online store or enquiries]",
    cta: "Get in touch",
  },
  footer: {
    contact: "[Contact details pending]",
  },
} as const;
