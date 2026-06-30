export const LANDING_HERO_BADGE = {
  tag: "New",
  message: "Our 2024 Impact Report is out now!",
  href: "/impact",
} as const;

export const LANDING_SUCCESS_STORIES = [
  {
    name: "AYOMIDE OJO",
    subtitle: "Tech. Enthusiast",
    image: "/images/home/children/ayomide.jpg",
  },
  {
    name: "MARY IBRAHIM",
    subtitle: "University Graduate",
    image: "/images/home/children/mary.jpg",
  },
  {
    name: "FAWAZ ADEOYE",
    subtitle: "Fashion Enthusiast",
    image: "/images/home/children/fawaz.jpg",
  },
  {
    name: "SUNDAY MOSES",
    subtitle: "Scholarship Beneficiary",
    image: "/images/home/children/sunday.jpg",
  },
] as const;

export const LANDING_APPROACH_BLOCKS = {
  ca: {
    accent: "C.A",
    title: "Chess Training & Education",
    image: "/images/home/home-1.jpg",
    imageAlt: "Instructor teaching children chess on a digital board",
    features: ["Training & Education", "Chess Hub", "Virtual Competition"],
  },
  st: {
    accent: "S.T",
    title: "STEM Education & Art",
    image: "/images/home/home-2.jpg",
    imageAlt: "Children gathered around a 3D printer",
    features: ["Training & Education", "Chess Hub", "Virtual Competition"],
  },
  le: {
    accent: "L.E",
    title: "Lifeline & Empowerment",
    image: "/images/home/home-3.jpg",
    imageAlt: "Mentor connecting with a smiling child",
    features: [
      "Vocational Empowerment",
      "Career Development",
      "Mentorship",
      "Literacy and Civic Education",
    ],
  },
} as const;

export const LANDING_GALLERY_FILTERS = [
  "All",
  "Slum to School",
  "Chess",
  "Impact",
  "Children",
  "Events",
] as const;

export const LANDING_GALLERY_IMAGES = [
  { src: "/images/home/children/fawaz.jpg", alt: "Fawaz smiling", rotation: -3, h: "h-[210px]" },
  { src: "/images/home/home-1.jpg", alt: "Classroom session", rotation: 4, h: "h-[464px]" },
  { src: "/images/home/children/ayomide.jpg", alt: "Ayomide portrait", rotation: -5, h: "h-[226px]" },
  { src: "/images/home/home-2.jpg", alt: "Children at a table", rotation: 2, h: "h-[397px]" },
  { src: "/images/home/children/mary.jpg", alt: "Mary portrait", rotation: -4, h: "h-[464px]" },
  { src: "/images/home/home-3.jpg", alt: "Group mentorship", rotation: 6, h: "h-[426px]" },
  { src: "/images/home/children/sunday.jpg", alt: "Sunday portrait", rotation: -2, h: "h-[271px]" },
  { src: "/images/gifs/gif-1.gif", alt: "HandiBlox robotics activity", rotation: 3, h: "h-[226px]" },
  { src: "/images/gifs/gif-3.gif", alt: "Student focused on a chess game", rotation: -6, h: "h-[464px]" },
  { src: "/images/gifs/gif-4.gif", alt: "Children smiling in a classroom", rotation: 5, h: "h-[464px]" },
] as const;

const CHANGE_MAKER_DESCRIPTION =
  "Give a child the gift of education and opportunity. Your support provides access to learning, mentorship, and a brighter future.";

export const LANDING_CHANGE_MAKER_ACTIONS = [
  {
    title: "Sponsor A Child",
    description: CHANGE_MAKER_DESCRIPTION,
    backgroundColor: "#252B37",
    href: "/sponsor",
  },
  {
    title: "Give a Kit",
    description: CHANGE_MAKER_DESCRIPTION,
    backgroundColor: "#15A992",
    href: "/give-kit",
  },
  {
    title: "Donate To a Cause",
    description: CHANGE_MAKER_DESCRIPTION,
    backgroundColor: "#E38B17",
    href: "/donate",
  },
  {
    title: "Volunteer With Us",
    description: CHANGE_MAKER_DESCRIPTION,
    backgroundColor: "#195C6D",
    href: "/volunteer",
  },
  {
    title: "Partner With Us",
    description: CHANGE_MAKER_DESCRIPTION,
    backgroundColor: "#773594",
    href: "/partner",
  },
] as const;

export const LANDING_BRAND_LOGOS = [
  { src: "/images/logos/brands/danhypro.png", alt: "DanhyPro" },
  { src: "/images/logos/brands/Chessable.png", alt: "Chessable" },
  { src: "/images/logos/brands/chipper.png", alt: "Chipper" },
  { src: "/images/logos/brands/lufthansaicon.png", alt: "Lufthansa" },
  { src: "/images/logos/brands/octa.png", alt: "Octa" },
  { src: "/images/logos/brands/chesskid.png", alt: "ChessKid" },
  { src: "/images/logos/brands/venture-garden.png", alt: "Venture Garden" },
  { src: "/images/logos/brands/cafe-one.png", alt: "Cafe One" },
  { src: "/images/logos/brands/chess-com.png", alt: "Chess.com" },
  { src: "/images/logos/brands/Crevatal.png", alt: "Crevatal" },
  { src: "/images/logos/brands/gift-of-chess.png", alt: "Gift of Chess" },
  { src: "/images/logos/brands/piggyvest.png", alt: "Piggyvest" },
] as const;

export const LANDING_MEDIA_LOGOS = [
  { src: "/images/logos/brands/cnn.png", alt: "CNN" },
  { src: "/images/logos/brands/bbc.png", alt: "BBC" },
  { src: "/images/logos/brands/guardian.png", alt: "The Guardian" },
  { src: "/images/logos/brands/reuters.png", alt: "Reuters" },
  { src: "/images/logos/brands/france.png", alt: "France 24" },
  { src: "/images/logos/brands/the-times.png", alt: "The Times" },
] as const;

export const LANDING_GLOBAL_LOCATIONS = [
  { name: "MAGIDUN, IKORODU", top: "55%", left: "12%" },
  { name: "OSHODI, UNDERBRIDGE", top: "18%", left: "35%" },
  { name: "IKATE, LEKKI", top: "62%", left: "32%" },
  { name: "MOLETE, IBADAN", top: "58%", left: "58%" },
  { name: "ISALE EKO", top: "20%", left: "66%" },
  { name: "OBANLIKU, CROSS RIVER", top: "55%", left: "82%" },
] as const;

export const LANDING_BLOG_POSTS = [
  {
    image: "/images/home/blogs/blog-1.jpg",
    imageAlt: "Sunday Moses graduation story",
    title: "Sunday Moses Graduates: From Scavenger to Scholar",
    excerpt:
      "Five years ago, Sunday was scavenging for plastic on the streets of Lagos. Today, he graduates with honors.",
    date: "20 Jan 2025",
    author: "CIS Team",
  },
  {
    image: "/images/home/blogs/blog-2.jpg",
    imageAlt: "Chess in slums community",
    title: "The Power of a Pawn: Stories from Magidun",
    excerpt:
      "Inside our Ikorodu hub where children discover chess, confidence, and community every single day.",
    date: "15 Jan 2025",
    author: "Tunde Onakoya",
  },
  {
    image: "/images/home/blogs/blog-3.png",
    imageAlt: "Education program vision",
    title: "Building Africa's Largest Free School",
    excerpt:
      "Our vision for a future where every out-of-school child has access to world-class education.",
    date: "10 Jan 2025",
    author: "CIS Team",
  },
] as const;

export const LANDING_TESTIMONIAL = {
  name: "Kate Henshaw",
  quote:
    "Little drops make a mighty ocean. 🙏 Again, I applaud you Tunde... You will never tire and great doors will be opened to you because you cared for others other than yourself..",
  avatar: "/images/home/children/mary.jpg",
} as const;

export const LANDING_VISION = {
  title: "The Next Chapter is even Bigger...",
  subtitle:
    "We are building toward a future where our model can reach children across Africa:",
  cardTitle:
    "To build Africa's largest free school for out-of-school and street-connected children",
} as const;
