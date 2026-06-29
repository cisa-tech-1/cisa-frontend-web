export const DONATION_HERO = {
  title: "Are You Ready to Be a Change Maker?",
  description:
    "While chess provides the platform, your support creates opportunities to scale our programs and ensure long-term sustainability.",
  image: "/images/donations/donations-1.jpg",
} as const;

export const DONATION_OPTIONS = [
  {
    id: "once",
    title: "Give Once",
    description:
      "Become a superhero to the kids, and help bring the joy of chess to underprivileged communities.",
    buttonLabel: "Donate Now",
    background: "#D9F4EC",
    buttonColor: "#15B79E",
    iconSrc: "/images/svg/cash.svg",
  },
  {
    id: "recurring",
    title: "Recurring Donation",
    description:
      "Become a superhero to the kids, and help bring the joy of chess to underprivileged communities.",
    buttonLabel: "Donate Monthly",
    background: "#E2ECFF",
    buttonColor: "#1163FC",
    iconSrc: "/images/svg/cash-blue.svg",
  },
] as const;

export const LOCAL_BANK_DETAILS = [
  { label: "Account Number", value: "0491316991" },
  { label: "Bank Name", value: "Guaranty Trust Bank" },
  { label: "Account Name", value: "Chess In Slums Initiative" },
] as const;

export const FOREIGN_BANK_DETAILS = [
  { label: "Account Number", value: "0089938550" },
  { label: "Bank Name", value: "Sterling Bank" },
  { label: "Account Name", value: "Chess In Slums Initiative Donation" },
] as const;

export const GOFUNDME_URL = "https://www.gofundme.com";

export const CAMPAIGN_FILTERS = [
  { id: "campaign", label: "Campaign Donation", active: true, tag: "New" },
  { id: "scholarship", label: "Project Circle - Scholarship", active: false, tag: "New" },
] as const;

const CAMPAIGN_IMAGE = "/images/donations/girls.jpg";

export const CAMPAIGNS = [
  {
    id: "1",
    title: "Vocational Scholarship for Makoko Girls",
    description:
      "This donation pool is created to help raise funds to support food drives campaigns to underserved communities.",
    image: CAMPAIGN_IMAGE,
    createdBy: "Created By CISA",
    target: "₦500,000",
    donatedPercent: 95,
  },
  {
    id: "2",
    title: "Vocational Scholarship for Makoko Girls",
    description:
      "This donation pool is created to help raise funds to support food drives campaigns to underserved communities.",
    image: CAMPAIGN_IMAGE,
    createdBy: "Created By Tayo Aina",
    target: "₦500,000",
    donatedPercent: 73,
  },
  {
    id: "3",
    title: "Vocational Scholarship for Makoko Girls",
    description:
      "This donation pool is created to help raise funds to support food drives campaigns to underserved communities.",
    image: CAMPAIGN_IMAGE,
    createdBy: "Created By CISA",
    target: "₦500,000",
    donatedPercent: 95,
  },
] as const;

export const CONTACT_CHANNELS = [
  {
    title: "For Partnership Related Purposes",
    email: "partnership@chessinslumsafrica.com",
    background: "#FFFFFF",
    textColor: "#000000",
  },
  {
    title: "For Scholarship Related Purposes",
    email: "scholarship@chessinslumsafrica.com",
    background: "#F6BA36",
    textColor: "#000000",
  },
  {
    title: "For Enquiries And Other Purposes",
    email: "hello@chessinslumsafrica.com",
    background: "#603103",
    textColor: "#FFFFFF",
  },
] as const;
