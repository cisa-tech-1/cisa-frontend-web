import type { Metadata } from "next";
import { ComingSoonPage } from "@/components/pages/ComingSoonPage";

type ComingSoonConfig = {
  title: string;
  description: string;
  metadataTitle: string;
  metadataDescription: string;
};

export const COMING_SOON_PAGES = {
  blog: {
    title: "Our blog is on the way",
    description:
      "Stories, updates, and voices from Chess in Slums Africa are coming soon. Check back for articles from the communities we serve.",
    metadataTitle: "Blog | Chess in Slums Africa",
    metadataDescription: "Stories and updates from Chess in Slums Africa are coming soon.",
  },
  contact: {
    title: "Contact us soon",
    description:
      "We're setting up new ways to reach our team. In the meantime, explore our programs or support the mission through a donation.",
    metadataTitle: "Contact | Chess in Slums Africa",
    metadataDescription: "Contact options for Chess in Slums Africa are coming soon.",
  },
  "get-involved": {
    title: "Get involved soon",
    description:
      "Volunteer, mentor, and partnership opportunities are on the way. We're building ways for you to join the movement.",
    metadataTitle: "Get Involved | Chess in Slums Africa",
    metadataDescription: "Ways to get involved with Chess in Slums Africa are coming soon.",
  },
  "why-chess": {
    title: "Why chess — coming soon",
    description:
      "Learn how chess builds focus, confidence, and opportunity for children in underserved communities across Africa.",
    metadataTitle: "Why Chess | Chess in Slums Africa",
    metadataDescription: "Learn why chess matters at Chess in Slums Africa — page coming soon.",
  },
  community: {
    title: "Our community is coming soon",
    description:
      "Meet the children, mentors, and partners who make our work possible. This section is under construction.",
    metadataTitle: "Our Community | Chess in Slums Africa",
    metadataDescription: "Community stories from Chess in Slums Africa are coming soon.",
  },
  press: {
    title: "Press & media — coming soon",
    description:
      "Press releases, media kits, and coverage of our work will be available here shortly.",
    metadataTitle: "Press | Chess in Slums Africa",
    metadataDescription: "Press and media resources from Chess in Slums Africa are coming soon.",
  },
  faqs: {
    title: "FAQs — coming soon",
    description:
      "Answers to common questions about our programs, donations, and how to support the mission are on the way.",
    metadataTitle: "FAQs | Chess in Slums Africa",
    metadataDescription: "Frequently asked questions for Chess in Slums Africa are coming soon.",
  },
  careers: {
    title: "Careers — coming soon",
    description:
      "Open roles and opportunities to work with Chess in Slums Africa will be posted here soon.",
    metadataTitle: "Careers | Chess in Slums Africa",
    metadataDescription: "Career opportunities at Chess in Slums Africa are coming soon.",
  },
  privacy: {
    title: "Privacy policy — coming soon",
    description:
      "Our privacy policy is being finalized and will be published here shortly.",
    metadataTitle: "Privacy Policy | Chess in Slums Africa",
    metadataDescription: "Privacy policy for Chess in Slums Africa is coming soon.",
  },
  "my-journey": {
    title: "My journey — coming soon",
    description:
      "Personal stories and journeys from children and alumni in our programs will be shared here soon.",
    metadataTitle: "My Journey | Chess in Slums Africa",
    metadataDescription: "Personal journey stories from Chess in Slums Africa are coming soon.",
  },
  news: {
    title: "News — coming soon",
    description:
      "The latest announcements and updates from Chess in Slums Africa will appear here shortly.",
    metadataTitle: "News | Chess in Slums Africa",
    metadataDescription: "News and updates from Chess in Slums Africa are coming soon.",
  },
  legal: {
    title: "Legal — coming soon",
    description:
      "Legal information and disclosures for Chess in Slums Africa will be available here soon.",
    metadataTitle: "Legal | Chess in Slums Africa",
    metadataDescription: "Legal information for Chess in Slums Africa is coming soon.",
  },
  terms: {
    title: "Terms of use — coming soon",
    description:
      "Our terms of use are being prepared and will be published here shortly.",
    metadataTitle: "Terms of Use | Chess in Slums Africa",
    metadataDescription: "Terms of use for Chess in Slums Africa are coming soon.",
  },
  sponsor: {
    title: "Become a sponsor — coming soon",
    description:
      "Sponsorship packages and ways to fund our programs will be available here soon.",
    metadataTitle: "Sponsor | Chess in Slums Africa",
    metadataDescription: "Sponsorship opportunities with Chess in Slums Africa are coming soon.",
  },
  "give-kit": {
    title: "Give a kit — coming soon",
    description:
      "Details on donating chess kits and learning materials to children in our communities are on the way.",
    metadataTitle: "Give a Kit | Chess in Slums Africa",
    metadataDescription: "Give a kit opportunities with Chess in Slums Africa are coming soon.",
  },
  volunteer: {
    title: "Volunteer — coming soon",
    description:
      "Sign-up and information for volunteering with Chess in Slums Africa will be available here soon.",
    metadataTitle: "Volunteer | Chess in Slums Africa",
    metadataDescription: "Volunteer opportunities with Chess in Slums Africa are coming soon.",
  },
  partner: {
    title: "Partner with us — coming soon",
    description:
      "Partnership opportunities for organizations and institutions will be shared here shortly.",
    metadataTitle: "Partner | Chess in Slums Africa",
    metadataDescription: "Partnership opportunities with Chess in Slums Africa are coming soon.",
  },
  cookies: {
    title: "Cookie policy — coming soon",
    description:
      "Information about how we use cookies on this site will be published here shortly.",
    metadataTitle: "Cookie Policy | Chess in Slums Africa",
    metadataDescription: "Cookie policy for Chess in Slums Africa is coming soon.",
  },
  mentor: {
    title: "Become a mentor — coming soon",
    description:
      "Mentorship programs and sign-up details are being prepared. Check back soon to guide the next generation.",
    metadataTitle: "Mentor | Chess in Slums Africa",
    metadataDescription: "Mentorship opportunities with Chess in Slums Africa are coming soon.",
  },
  "our-work": {
    title: "Our work — coming soon",
    description:
      "A deeper look at how we deliver chess, education, and life skills across Africa is on the way.",
    metadataTitle: "Our Work | Chess in Slums Africa",
    metadataDescription: "Our work at Chess in Slums Africa — page coming soon.",
  },
  projects: {
    title: "Our projects — coming soon",
    description:
      "Explore the communities and initiatives we support. Project profiles and impact stories are coming soon.",
    metadataTitle: "Projects | Chess in Slums Africa",
    metadataDescription: "Projects from Chess in Slums Africa are coming soon.",
  },
  gallery: {
    title: "Gallery — coming soon",
    description:
      "Photos and moments from our programs across Africa will be showcased here shortly.",
    metadataTitle: "Gallery | Chess in Slums Africa",
    metadataDescription: "Photo gallery from Chess in Slums Africa is coming soon.",
  },
} as const satisfies Record<string, ComingSoonConfig>;

export type ComingSoonPageKey = keyof typeof COMING_SOON_PAGES;

export function createComingSoonRoute(key: ComingSoonPageKey) {
  const config = COMING_SOON_PAGES[key];

  const metadata: Metadata = {
    title: config.metadataTitle,
    description: config.metadataDescription,
  };

  function Page() {
    return <ComingSoonPage title={config.title} description={config.description} />;
  }

  return { metadata, Page };
}
