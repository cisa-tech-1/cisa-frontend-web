import { BlogCard } from "@/components/cards";
import { PageContainer } from "@/components/layout/PageContainer";
import { Badge } from "@/components/ui/Badge";
import { LANDING_BLOG_POSTS } from "@/lib/landing";
import Link from "next/link";

export function BlogSection() {
  return (
    <section className="bg-white pb-24 pt-12 md:pb-32 md:pt-16">
      <PageContainer>
        <div className="mb-8 flex flex-col items-center gap-[18px] text-center">
          <Badge variant="pill">Blog</Badge>
          <h2 className="font-[family-name:var(--font-manrope)] text-[32px] font-extrabold leading-[44px] tracking-[-0.02em] text-[#181D27] md:text-[45px]">
            Latest King Maker Highlights
          </h2>
        </div>

        <div className="flex flex-wrap gap-6 md:gap-8">
          {LANDING_BLOG_POSTS.map((post) => (
            <BlogCard key={post.title} {...post} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 font-[family-name:var(--font-jost)] text-xl font-semibold leading-7 text-[#414651]"
          >
            View more articles
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden className="-rotate-[16deg]">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </PageContainer>
    </section>
  );
}
