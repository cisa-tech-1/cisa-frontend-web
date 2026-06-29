import { BlogCard } from "@/components/cards";
import { Badge } from "@/components/ui/Badge";
import { TextLink } from "@/components/ui/PrimaryButton";

const POSTS = [
  {
    image: "https://images.unsplash.com/photo-1586167752837-2587ce291b1c?w=800&q=80",
    imageAlt: "Chess tournament",
    title: "Sunday Moses Graduates: From Scavenger to Scholar",
    excerpt:
      "Five years ago, Sunday was scavenging for plastic on the streets of Lagos. Today, he graduates with honors.",
    date: "20 Jan 2025",
    author: "CIS Team",
  },
  {
    image: "https://images.unsplash.com/photo-1529699211952-484e120d0d87?w=800&q=80",
    imageAlt: "Chess in slums",
    title: "The Power of a Pawn: Stories from Magidun",
    excerpt:
      "Inside our Ikorodu hub where children discover chess, confidence, and community every single day.",
    date: "15 Jan 2025",
    author: "Tunde Onakoya",
  },
  {
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
    imageAlt: "Education program",
    title: "Building Africa's Largest Free School",
    excerpt:
      "Our vision for a future where every out-of-school child has access to world-class education.",
    date: "10 Jan 2025",
    author: "CIS Team",
  },
];

export function BlogSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1280px] px-5">
        <div className="mb-12 flex flex-col items-center gap-5 text-center">
          <Badge variant="pill">Blog</Badge>
          <h2 className="text-[32px] font-extrabold tracking-tight text-[#181D27] md:text-[45px]">
            Latest King &amp; Pawn Highlights
          </h2>
          <p className="text-xl font-medium text-[#5A5A5A]">
            Stories, updates, and insights from the Chess in Slums community
          </p>
        </div>

        <div className="flex flex-wrap gap-8 md:gap-12">
          {POSTS.map((post) => (
            <BlogCard key={post.title} {...post} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <TextLink href="/blog">Read All Articles</TextLink>
        </div>
      </div>
    </section>
  );
}
