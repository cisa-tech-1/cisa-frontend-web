export const ABOUT_VIDEO_SRC = "/images/videos/landing.mp4";
export const ABOUT_VIDEO_LABEL = "Our story in\n60 seconds!";

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
  badge: "A Chess Piece & A Dream",
  quote:
    "As we continue to expand margins, we must remember that the only future worth creating is the one that includes all of us..",
  attribution: "— Tunde Onakoya, Founder CISA & Guinness World Record Holder",
  sectionTitle: "Meet Tunde Onakoya",
  paragraphs: [
    "For Tunde, chess is far more than a black-and-white board with moving pieces, it was a lifeline. Born and raised in the Isale-Odo community of Ikorodu, Lagos, Tunde grew up surrounded by the harsh realities of poverty. Like many children in underserved communities, access to basic education and opportunities was uncertain. At one point, his parents could not afford to keep him in school.",
    "Then came a turning point, quiet, unexpected, and life-defining. At a small roadside barber's shop, Tunde encountered the game of chess for the first time. What seemed like a simple pastime became a doorway into a different world. He became deeply fascinated, teaching himself the game and sharpening his skills with persistence and curiosity. Over time, he rose through the ranks to become one of Nigeria's top chess players.",
    "But more importantly, chess did something deeper, it changed the trajectory of his life. Through the game, Tunde gained access to education, mentorship, exposure, and opportunities that once felt out of reach. Chess gave him a voice, a vision, and a future.",
  ],
} as const;

export const JOURNEY_STEPS = [
  {
    title: "Our Mission",
    text: "To use chess as a transformative tool to unlock critical thinking, build confidence, and open pathways to education and lifelong opportunities for children in underserved communities.",
  },
  {
    title: "Our Vision",
    text: "To empower, uplift, and educate 1 million children in marginalized communities across Africa over the next decade, using chess as a focal point.",
  },
  {
    title: "Our Theory of Change",
    text: "We believe that every child, regardless of their background, holds the potential to rise beyond adversity and build a brighter future. Through a transformative blend of chess, STEM education, and socio-emotional development, we equip children with critical thinking skills, resilience, and a strong sense of self-worth.",
  },
] as const;

export const MISSION_VISION = {
  mission: {
    title: "Our Mission",
    text: JOURNEY_STEPS[0].text,
  },
  vision: {
    title: "Our Vision",
    text: JOURNEY_STEPS[1].text,
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

export const THEORY_DESCRIPTION = JOURNEY_STEPS[2].text;

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

export const ABOUT_NEWSLETTER = {
  heading: "Stay Inspired with Our Impact Stories!",
  placeholder: "Enter your email for impact updates",
} as const;
