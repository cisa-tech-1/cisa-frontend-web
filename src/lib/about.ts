export const ABOUT_VIDEO_SRC = "/images/videos/landing.mp4";

export const SCROLL_IMAGES_SET_1 = [
  {
    src: "/images/about/scroll-2.jpg",
    alt: "Children learning together",
    border: "border-[#CCFBEF]",
    rotate: "-rotate-[4.93deg]",
    position: "left-[0%] top-[28%]",
    shadow: "shadow-lg",
  },
  {
    src: "/images/about/scroll-3.jpg",
    alt: "Student playing chess",
    border: "border-[#F5F5F5]",
    rotate: "-rotate-[2.31deg]",
    position: "left-[14%] top-[11%]",
    shadow: "shadow-md",
  },
  {
    src: "/images/about/scroll-1.jpg",
    alt: "Chess in Slums community",
    border: "border-[#F4F0E6]",
    rotate: "rotate-[4.22deg]",
    position: "left-[17%] top-[46%]",
    shadow: "",
  },
] as const;

export const SCROLL_IMAGES_SET_2 = [
  {
    src: "/images/about/scroll-5.jpg",
    alt: "Chess match in progress",
    border: "border-[#CCFBEF]",
    rotate: "-rotate-[4.93deg]",
    position: "left-[0%] top-[28%]",
    shadow: "shadow-lg",
  },
  {
    src: "/images/about/scroll-6.png",
    alt: "Educational setting",
    border: "border-[#F5F5F5]",
    rotate: "-rotate-[2.31deg]",
    position: "left-[14%] top-[11%]",
    shadow: "shadow-md",
  },
  {
    src: "/images/about/scroll-4.jpg",
    alt: "Community chess program",
    border: "border-[#F4F0E6]",
    rotate: "rotate-[4.22deg]",
    position: "left-[17%] top-[46%]",
    shadow: "",
  },
] as const;

export type ScrollImage = {
  src: string;
  alt: string;
  border: string;
  rotate: string;
  position: string;
  shadow: string;
};

export const TIMELINE_PIECES = ["bishop", "knight", "king"] as const;
export type TimelinePiece = (typeof TIMELINE_PIECES)[number];

export const STORY_SECTION = {
  badge: "About Chess in Slums",
  title: "The Story of Chess",
  intro:
    "We are using the game of chess to create a safe environment for education, empowerment and transformation for children living in underserved communities across Africa.",
  body: `Chess in Slums Africa (CISA) is a nonprofit organization dedicated to uplifting children in underserved communities through chess, STEM education, and socio-emotional development. Founded in 2018 by Tunde Onakoya, CISA started with a simple goal: teaching chess to children in slum communities as a way to enhance their cognitive and life skills.

Over the years, our programs have grown to include comprehensive educational initiatives that integrate robotics, AI, and digital literacy alongside chess education. We provide holistic support to children, addressing not only their educational needs but also their social and emotional well-being. Through scholarships, vocational training, and mentorship, we ensure that beneficiaries receive continuous guidance until they become productive, empowered, and responsible members of society.`,
} as const;

export const JOURNEY_NARRATIVE =
  "Founded in 2018 by Tunde Onakoya, Chess in Slums Africa started as a volunteer-driven non-profit with a simple goal: teaching chess to children in slum communities as a way to enhance their cognitive and life skills. What began in Ikorodu, Lagos has grown into a movement reaching communities across Nigeria and beyond — unlocking potential through chess, STEM education, and socio-emotional development.";

export const MISSION_VISION = {
  mission: {
    title: "Mission",
    text: "To use chess as a transformative tool to unlock critical thinking, build confidence, and open pathways to education and lifelong opportunities for children in underserved communities.",
  },
  vision: {
    title: "Vision",
    text: "To empower, uplift, and educate 1 million children in marginalized communities across Africa over the next decade, using chess as a focal point.",
  },
} as const;

export const CHALLENGE_ITEMS = [
  {
    title: "Limited Access to Education",
    description:
      "Many children lack access to quality education, mentorship, and learning resources that could unlock their potential.",
  },
  {
    title: "Poverty and Economic Hardship",
    description:
      "Economic constraints force families to prioritize immediate survival over long-term educational investments.",
  },
  {
    title: "Lack of Critical Thinking",
    description:
      "Without exposure to strategic thinking tools, children struggle to develop problem-solving and decision-making skills.",
  },
  {
    title: "Limited Opportunity Pathways",
    description:
      "Few visible pathways exist for children to access mentorship, exposure, and opportunities for growth.",
  },
] as const;

export const THEORY_DESCRIPTION =
  "We believe that every child, regardless of their background, holds the potential to rise beyond adversity and build a brighter future. Through a transformative blend of chess, STEM education, and socio-emotional development, we equip children with critical thinking skills, resilience, and a strong sense of self-worth.";

export const IMPACT_STATS = [
  {
    value: 5000,
    suffix: "+",
    label: "Total beneficiaries",
    detail: "+40% since 2020",
    target: "Target 2027 - 8,500",
  },
  {
    value: 25,
    suffix: "+",
    label: "African countries engaged",
    detail: "Partnership & chess ed",
    target: "Target 2027 - 35",
  },
  {
    value: 7,
    suffix: "+",
    label: "Communities reached in Nigeria",
    detail: "Makoko, Oshodi, Ilaje +",
    target: "Target 2027 - 20",
  },
  {
    value: 300,
    suffix: "+",
    label: "Children with health coverage",
    detail: "Health insurance active",
    target: "Target 2027 - 1,000",
  },
  {
    value: 100,
    suffix: "+",
    label: "Chess tournament held",
    detail: "+70% top performance rate",
    target: "Target 2027 - 150",
  },
  {
    value: 450,
    suffix: "",
    label: "Scholarship & vocational kids (2022)",
    detail: "Primary:54%, Uni: 7%",
    target: "Target 2027 - 900",
  },
  {
    value: 1,
    suffix: "",
    label: "Innovation Hub (200+ students free access)",
    detail: "Robotics - Coding - Art",
    target: "Target 2027 - 5 hubs",
  },
  {
    value: 200,
    prefix: "$",
    suffix: "K",
    label: "Budget manage (2022)",
    detail: "Multi-source funding",
    target: "Target 2027 - $500k",
  },
] as const;

export const STORY_HIGHLIGHTS = [
  {
    title: "Ferdinand Maumo — A Differently-Abled Chess Prodigy",
    description:
      "Ferdinand's journey demonstrates that chess transcends physical limitations. Through our program, he discovered his passion and potential, becoming an inspiration to his community.",
  },
  {
    title: "Queens, Not Pawns: Empowering Girls in Obanliku, Cross River",
    description:
      "Our initiative in Obanliku focuses on empowering girls through chess, challenging gender stereotypes and creating pathways for female leadership and excellence.",
  },
] as const;

export const TEAM_TABS = [
  { id: "leadership", label: "Leadership Team" },
  { id: "management", label: "Management Team" },
  { id: "volunteers", label: "Volunteers" },
] as const;

export type TeamTabId = (typeof TEAM_TABS)[number]["id"];

const MEMBER_IMAGE = "/images/about/member-1.png";

export const TEAM_BY_TAB: Record<
  TeamTabId,
  readonly { name: string; role: string; image: string }[]
> = {
  leadership: [
    { name: "Tunde Onakoya", role: "Founder, Chess in Slums Africa", image: MEMBER_IMAGE },
    { name: "Ngozi Eze", role: "Educator & Youth Development Advocate", image: MEMBER_IMAGE },
    { name: "Chuka Okoye", role: "Former National Chess Champion", image: MEMBER_IMAGE },
    { name: "Ijeoma Udeh", role: "Social Impact Strategist, UNICEF", image: MEMBER_IMAGE },
  ],
  management: [
    { name: "Adebukola Benjamin", role: "Chief Operating Officer", image: MEMBER_IMAGE },
    { name: "Ahmed Kabiru", role: "Board Trustee", image: MEMBER_IMAGE },
    { name: "Ogbonnaya Obinna", role: "Board Trustee", image: MEMBER_IMAGE },
    { name: "Tunde Onakoya", role: "Founder, Chess in Slums Africa", image: MEMBER_IMAGE },
  ],
  volunteers: [
    { name: "Ngozi Eze", role: "Volunteer Educator", image: MEMBER_IMAGE },
    { name: "Chuka Okoye", role: "Chess Mentor", image: MEMBER_IMAGE },
    { name: "Ijeoma Udeh", role: "Program Volunteer", image: MEMBER_IMAGE },
    { name: "Tunde Onakoya", role: "Community Lead", image: MEMBER_IMAGE },
  ],
};

export const SHAPE_FUTURE_CARDS = [
  {
    title: "Partner With Us",
    description:
      "Give a child the gift of education and opportunity. Your support provides access to learning, mentorship, and a brighter future.",
    href: "/partner",
    color: "#773594",
  },
  {
    title: "Volunteer With Us",
    description:
      "Give a child the gift of education and opportunity. Your support provides access to learning, mentorship, and a brighter future.",
    href: "/volunteer",
    color: "#195C6D",
  },
  {
    title: "Make a Donation",
    description:
      "Give a child the gift of education and opportunity. Your support provides access to learning, mentorship, and a brighter future.",
    href: "/donate",
    color: "#E38B17",
  },
] as const;
