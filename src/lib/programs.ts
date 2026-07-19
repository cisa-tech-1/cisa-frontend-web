export const PROGRAMS_NAV_LINKS = [
  { label: "Who We Are", href: "/about" },
  { label: "Our Programs", href: "/programs" },
  { label: "Our Impact", href: "/impact" },
  { label: "Why Chess", href: "/why-chess" },
  { label: "Latest Story", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const HERO_COLLAGE_IMAGES = [
  { src: "/images/gifs/gif-1.gif", alt: "HandiBlox robotics activity" },
  { src: "/images/gifs/gif-2.gif", alt: "Student painting a landscape" },
  { src: "/images/gifs/gif-3.gif", alt: "Student focused on a chess game" },
  { src: "/images/gifs/gif-4.gif", alt: "Children smiling in a classroom" },
] as const;

export const CASTLE_PATHWAY_CARDS = [
  {
    badge: "Pathway 1",
    title: "Chess in Communities",
    subtitle: "(Street-Level & Grassroots Delivery)",
    description:
      "Reaching children where formal education has never gone - underbridges, floating communities, dump-site settlements, and correctional facilities. A rapid two-week immersive model followed by long-term permanency planning.",
    backgroundColor: "#B6621D",
  },
  {
    badge: "Pathway 2",
    title: "Innovation Hub",
    subtitle: "(Structured Hub-Based Delivery)",
    description:
      "Structured, multi-week programs delivered at the CISA Innovation Hub, Yaba, and in partner public schools. Combines rigorous curriculum across chess, STEAM, digital skills, and vocational training with ongoing mentorship and scholarship support.",
    backgroundColor: "#3469DD",
  },
] as const;

export const PROGRAM_PLACEHOLDER_VIDEO = "/images/videos/landing.mp4";

export type ProgramFeature = {
  title: string;
  description: string;
  nested?: readonly string[];
};

export const PROGRAM_OPTIONS = [
  {
    id: "chess-dream",
    label: "Chess Dream Programs",
    title: "Chess to Dream",
    description:
      "This is a 12-Week Innovation Intensive Program Curated directly from CASTLE framework, the Chess Dream Programs are structured, 12-week intensives delivered at our innovation hubs. The program culminates in a major exhibition where students present capstone projects demonstrating the tech, chess, and creative skills they have mastered.",
    videoSrc: PROGRAM_PLACEHOLDER_VIDEO,
    videoLabel: "Chess to Dream in 60 seconds!",
    badge: "Free for all participants",
    features: [
      {
        title: "After-School Program:",
        description:
          "Designed for students from public schools and low-income communities who come directly to our innovation hub after their standard school day activities.",
      },
      {
        title: "Weekend and Holiday Programs:",
        description:
          "Hosted on Saturdays and during school breaks. This track extends the After-school program and also includes vocational training modules, allowing youth to learn profitable handcrafts including:",
        nested: [
          "Fashion Design & Tailoring",
          "Baking & Culinary Arts",
          "Hairdressing, Barbering, and Beauty Services",
          "Other high-yield crafts",
        ],
      },
    ],
  },
  {
    id: "castle-framework",
    label: "C.A.S.T.L.E Framework",
    title: "The C.A.S.T.L.E. Framework",
    description:
      "Our integrated model combines Chess, Afterschool, STEAM, Technology, Life Skills, and Entrepreneurship — building well-rounded leaders from underserved communities.",
    videoSrc: PROGRAM_PLACEHOLDER_VIDEO,
    videoLabel: "C.A.S.T.L.E in 60 seconds!",
    badge: "Free for all participants",
    features: [
      {
        title: "Holistic curriculum:",
        description: "Spanning chess mastery, STEAM, and life skills.",
      },
      {
        title: "Dual delivery:",
        description: "Designed for both community outreach and hub-based delivery.",
      },
      {
        title: "Measurable outcomes:",
        description: "Across academic, social, and leadership growth.",
      },
    ],
  },
  {
    id: "summer-holiday",
    label: "Summer Holiday Program",
    title: "Summer Holiday Program",
    description:
      "An immersive holiday experience combining chess, STEAM workshops, and creative projects — keeping young minds engaged and inspired during school breaks.",
    videoSrc: PROGRAM_PLACEHOLDER_VIDEO,
    videoLabel: "Summer Holiday in 60 seconds!",
    badge: "Open to all enrolled students",
    features: [
      {
        title: "Full-day sessions:",
        description: "Chess coaching and STEAM activities.",
      },
      {
        title: "Team projects:",
        description: "Exhibitions to showcase student work.",
      },
      {
        title: "Safe environment:",
        description: "Structured learning during school holidays.",
      },
    ],
  },
  {
    id: "chess-in-community",
    label: "Chess in Community",
    title: "Chess in Community",
    description:
      "Grassroots delivery reaching children in under-served areas — slums, floating communities, and correctional facilities — through rapid immersive chess and life-skills programs.",
    videoSrc: PROGRAM_PLACEHOLDER_VIDEO,
    videoLabel: "Chess in Community in 60 seconds!",
    badge: "Community outreach program",
    features: [
      {
        title: "Two-week immersive model:",
        description: "In hard-to-reach communities.",
      },
      {
        title: "Long-term planning:",
        description: "Permanency planning for sustained impact.",
      },
      {
        title: "Chess as a gateway:",
        description: "To education and opportunity.",
      },
    ],
  },
  {
    id: "public-school",
    label: "Public School Programs",
    title: "Public School Programs",
    description:
      "Partnering with public schools to integrate chess and life skills into the learning experience — strengthening focus, discipline, and academic performance.",
    videoSrc: PROGRAM_PLACEHOLDER_VIDEO,
    videoLabel: "Public Schools in 60 seconds!",
    badge: "School partnership program",
    features: [
      {
        title: "In-school sessions:",
        description: "After-school chess programs on campus.",
      },
      {
        title: "Curriculum aligned:",
        description: "With core academic goals.",
      },
      {
        title: "Teacher support:",
        description: "Training and ongoing mentorship.",
      },
    ],
  },
] as const;

export type ProgramOptionId = (typeof PROGRAM_OPTIONS)[number]["id"];

export const SHAPE_FUTURE_OPTIONS = [
  {
    title: "Sponsor A Project",
    description:
      "Become a superhero to the kids, and help bring the joy of chess to underprivileged communities.",
    buttonLabel: "Donate Now",
    background: "#D9F4EC",
    buttonColor: "#15B79E",
    iconSrc: "/images/svg/cash.svg",
    href: "/donate",
  },
  {
    title: "Sponsor A Child",
    description:
      "Become a superhero to the kids, and help bring the joy of chess to underprivileged communities.",
    buttonLabel: "Donate Now",
    background: "#D9F4EC",
    buttonColor: "#15B79E",
    iconSrc: "/images/svg/cash.svg",
    href: "/donate",
  },
  {
    title: "Donate Learning Resources",
    description:
      "Become a superhero to the kids, and help bring the joy of chess to underprivileged communities.",
    buttonLabel: "Donate Now",
    background: "#D9F4EC",
    buttonColor: "#15B79E",
    iconSrc: "/images/svg/cash.svg",
    href: "/donate",
  },
] as const;
