export const IMPACT_HERO = {
  badge: "Our Impact Report",
  title: "Together for Transformation & Partnerships That Drive Impact",
  description:
    "At Chess in Slums Africa, we understand that transparency is the cornerstone of trust and meaningful collaboration. Our annual impact reports showcase our unwavering commitment to accountability and highlight how partnerships help us amplify the reach, sustainability, and transformative power of our programs.",
  image: "/images/impact/impact-hero-img.png",
} as const;

export const FORECAST_BANNER =
  "2026 forecast based on CISA's year-on-year growth trajectory (~30% average). Projections assume continued program expansion and secured partnerships.";

export const ROUNDED_LOGO = "/images/logos/rounded-logo.png";

export const IMPACT_REPORT_HEADER = {
  title: "Our Impact Report at a Glance",
  subtitle:
    "A summary of our key achievements and the progress we have made in our mission.",
} as const;

export const BUDGET_CATEGORIES = [
  { label: "Programs", value: "$82K", color: "#EC4A0A" },
  { label: "Operations", value: "$48K", color: "#EC4A0A" },
  { label: "Staff", value: "$35K", color: "#EC4A0A" },
  { label: "Outreach", value: "$22K", color: "#EC4A0A" },
  { label: "Admin", value: "$13K", color: "#EC4A0A" },
] as const;

export const TOTAL_FUNDING = "$200K";

export const SECTOR_IMPACT_DATA = [
  { name: "Education", value: 58, color: "#66C61C" },
  { name: "Community", value: 42, color: "#FB6514" },
] as const;

export const FINANCIAL_STATUS_DATA = [
  { category: "Chess Education", amount: 746 },
  { category: "Scholarships", amount: 737 },
  { category: "Health Coverage", amount: 646 },
  { category: "Innovation Hub", amount: 547 },
] as const;

export const GLOBAL_REACH_COUNTRIES = [
  { code: "NG", name: "Nigeria", percentage: 50 },
  { code: "IN", name: "India", percentage: 30 },
  { code: "GB", name: "United Kingdom", percentage: 20 },
  { code: "AU", name: "Australia", percentage: 10 },
  { code: "CA", name: "Canada", percentage: 10 },
] as const;

export const MAP_MARKERS = [
  { name: "Nigeria", left: "48%", top: "52%" },
  { name: "Ghana", left: "44%", top: "56%" },
  { name: "Kenya", left: "58%", top: "62%" },
  { name: "UK", left: "46%", top: "28%" },
  { name: "India", left: "68%", top: "48%" },
] as const;

export const SDG_GOALS = [
  { id: 1, image: "/images/impact/sdg/sdg-1.png", label: "No Poverty" },
  { id: 2, image: "/images/impact/sdg/sdg-2.png", label: "Zero Hunger" },
  { id: 3, image: "/images/impact/sdg/sdg-3.png", label: "Good Health" },
  { id: 4, image: "/images/impact/sdg/sdg-4.png", label: "Quality Education" },
  { id: 5, image: "/images/impact/sdg/sdg-5.png", label: "Gender Equality" },
  { id: 8, image: "/images/impact/sdg/sdg-8.png", label: "Decent Work" },
  { id: 10, image: "/images/impact/sdg/sdg-10.png", label: "Reduced Inequalities" },
  { id: 17, image: "/images/impact/sdg/sdg-17.png", label: "Partnerships" },
] as const;

export const SECTOR_BREAKDOWN_DATA = [
  { name: "Grassroots", value: 35, color: "#107569" },
  { name: "Schools", value: 28, color: "#15B79E" },
  { name: "Innovation", value: 22, color: "#2ED3B7" },
  { name: "Partnerships", value: 15, color: "#5FE9D0" },
] as const;

export const REVENUE_GROWTH_DATA = [
  { year: "2019", revenue: 45, beneficiaries: 320 },
  { year: "2020", revenue: 68, beneficiaries: 580 },
  { year: "2021", revenue: 95, beneficiaries: 890 },
  { year: "2022", revenue: 140, beneficiaries: 1450 },
  { year: "2023", revenue: 200, beneficiaries: 2200 },
  { year: "2024", revenue: 260, beneficiaries: 3100 },
  { year: "2025", revenue: 340, beneficiaries: 4200 },
  { year: "2026", revenue: 420, beneficiaries: 5000 },
] as const;

export const IMPACT_GROWTH_DATA = [
  { year: "2019", value: 12 },
  { year: "2020", value: 28 },
  { year: "2021", value: 45 },
  { year: "2022", value: 70 },
  { year: "2023", value: 90 },
  { year: "2024", value: 111 },
  { year: "2025", value: 134 },
  { year: "2026", value: 161 },
] as const;

export const SUPPORTING_DOCUMENTS = [
  {
    title: "Audited FS 2019 - 2020",
    meta: "PDF • 2.4 MB",
    pdf: "/pdfs/sample.pdf",
  },
  {
    title: "Audited FS 2020 - 2021",
    meta: "PDF • 2.4 MB",
    pdf: "/pdfs/sample.pdf",
  },
  {
    title: "Audited FS 2021 - 2022",
    meta: "PDF • 2.4 MB",
    pdf: "/pdfs/sample.pdf",
  },
] as const;

export const PARTNER_LOGOS = [
  "/images/logos/astra-logo.png",
  "/images/logos/bolt-logo.png",
  "/images/logos/atlas-logo.png",
] as const;

export const IMPACT_CTA = {
  title: "Be a Game Changer",
  description:
    "Partner with us, volunteer your time, or support our mission financially. Every contribution helps us reach more children in underserved communities.",
  primaryCta: "DONATE NOW",
  secondaryCta: "PARTNER WITH US",
} as const;
