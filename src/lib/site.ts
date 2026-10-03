import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Youtube } from "lucide-react";

export const site = {
  name: "Strike",
  legalName: "Strike Technologies Private Limited",
  url: "https://www.strikeapp.in",
  tagline: "Turn Customers Into Members. Members Into Loyal Customers.",
  description:
    "Strike helps businesses build memberships, offer exclusive discounts, provide early access, share updates, and keep customers engaged.",
  email: "Support.striketechnologies@gmail.com",
  phone: "+91 7708562836",
  phoneHref: "+917708562836",
  addressLines: [
    "Flat No. 305, Tirumala Enclave Apartment,",
    "Beside TMB Bank, Kotla Bazar,",
    "Chirala, Prakasam District,",
    "Andhra Pradesh – 523155",
  ],
};

export const keywords = [
  "membership platform",
  "customer engagement platform",
  "customer retention platform",
  "loyalty platform",
  "membership management",
  "customer loyalty software",
  "customer retention software",
  "business membership platform",
  "digital membership platform",
  "customer engagement software",
];

export const navLinks = [
  { label: "Platform", href: "/#platform" },
  { label: "Solutions", href: "/#solutions" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "For Businesses", href: "/#for-businesses" },
  { label: "For Customers", href: "/#for-customers" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Resources", href: "/#resources" },
];

export const footerLinks = {
  platform: [
    { label: "Memberships", href: "/#platform" },
    { label: "Discounts", href: "/#platform" },
    { label: "Early Access", href: "/#platform" },
    { label: "Customer Updates", href: "/#platform" },
    { label: "Analytics", href: "/#platform" },
  ],
  solutions: [
    { label: "Restaurants", href: "/#solutions" },
    { label: "Retail", href: "/#solutions" },
    { label: "Fitness", href: "/#solutions" },
    { label: "Entertainment", href: "/#solutions" },
    { label: "Hospitality", href: "/#solutions" },
    { label: "Communities", href: "/#solutions" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Careers", href: `mailto:${site.email}?subject=Careers%20at%20Strike` },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
  ],
};

export const contactCards = [
  {
    icon: MapPin,
    title: "Visit us",
    lines: site.addressLines,
  },
  {
    icon: Mail,
    title: "Email us",
    lines: [site.email],
    href: `mailto:${site.email}`,
  },
  {
    icon: Phone,
    title: "Call us",
    lines: [site.phone],
    href: `tel:${site.phoneHref}`,
  },
];

export const formEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ID
  ? `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}`
  : "";

export const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/striketechnologies",
    icon: Linkedin,
  },
  {
    label: "X (Twitter)",
    href: "https://x.com/striketechnologies",
    icon: Twitter,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/striketechnologies",
    icon: Instagram,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@striketechnologies",
    icon: Youtube,
  },
];

export const metrics = [
  { value: 10, suffix: "K+", label: "Members" },
  { value: 500, suffix: "+", label: "Businesses" },
  { value: 50, suffix: "K+", label: "Offers Delivered" },
  { value: 90, suffix: "%", label: "Engagement Potential" },
];
