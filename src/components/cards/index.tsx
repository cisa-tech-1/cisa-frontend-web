import Image from "next/image";
import { type ReactNode } from "react";

type InfoCardProps = {
  image: string;
  imageAlt: string;
  title: string;
  subtitle?: string;
  description?: string;
  features?: string[];
  accent?: string;
  className?: string;
  overlay?: boolean;
};

export function InfoCard({
  image,
  imageAlt,
  title,
  subtitle,
  description,
  features,
  accent,
  className = "",
  overlay = false,
}: InfoCardProps) {
  if (overlay) {
    return (
      <article className={`relative h-[424px] overflow-hidden rounded-sm ${className}`}>
        <Image src={image} alt={imageAlt} fill className="object-cover" sizes="288px" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="font-[family-name:var(--font-bricolage)] text-[28px] font-bold leading-[34px] text-white">
            {title}
          </h3>
          {subtitle && (
            <p className="mt-1 font-[family-name:var(--font-bricolage)] text-[28px] font-bold leading-[34px] text-white">
              {subtitle}
            </p>
          )}
        </div>
      </article>
    );
  }

  return (
    <article className={`flex flex-col gap-3 ${className}`}>
      <div className="relative h-[372px] overflow-hidden rounded-xl">
        <Image src={image} alt={imageAlt} fill className="object-cover" sizes="408px" />
      </div>
      <div className="flex flex-col gap-2.5">
        <div className="flex items-center gap-2">
          {accent && (
            <span className="font-[family-name:var(--font-jost)] text-[28px] font-bold text-teal-600">
              {accent}
            </span>
          )}
          <h3 className="font-[family-name:var(--font-bricolage)] text-2xl font-semibold text-[#282828]">
            {title}
          </h3>
        </div>
        {description && (
          <p className="text-lg font-medium text-[#5A5A5A]">{description}</p>
        )}
        {features && (
          <ul className="flex flex-col gap-1">
            {features.map((feature) => (
              <li key={feature} className="flex items-center gap-2 text-lg text-[#5A5A5A]">
                <ChessPieceIcon />
                {feature}
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}

function ChessPieceIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 2v4M8 6h8M10 10h4v2c0 2-1 3-1 5H9c0-2-1-3-1-5v-2zM7 20h10"
        stroke="#1BA38E"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

type BlogCardProps = {
  image: string;
  imageAlt: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
};

export function BlogCard({ image, imageAlt, title, excerpt, date, author }: BlogCardProps) {
  return (
    <article className="flex min-w-[320px] flex-1 flex-col gap-5">
      <div className="relative h-60 overflow-hidden rounded-2xl">
        <Image src={image} alt={imageAlt} fill className="object-cover" sizes="405px" />
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-[family-name:var(--font-bricolage)] text-2xl font-semibold leading-8 text-[#181D27]">
              {title}
            </h3>
            <SendIcon />
          </div>
          <p className="text-base font-medium leading-6 text-[#535862]">{excerpt}</p>
        </div>
        <div className="flex items-center gap-2.5 text-sm font-medium text-[#535862]">
          <span>{date}</span>
          <span>·</span>
          <span className="font-[family-name:var(--font-bricolage)] font-semibold text-[#181D27]">
            {author}
          </span>
        </div>
      </div>
    </article>
  );
}

function SendIcon() {
  return (
    <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#E6F6F4]">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"
          stroke="#125D56"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

type ImpactStatCardProps = {
  value: string;
  label: string;
  variant?: "brown" | "cream" | "orange" | "wide";
  className?: string;
};

const impactVariants = {
  brown: "bg-brown-dark text-white",
  cream: "bg-cream text-[#282828]",
  orange: "bg-brown-accent text-white",
  wide: "bg-brown-accent text-white ",
};

export function ImpactStatCard({
  value,
  label,
  variant = "brown",
  className = "",
}: ImpactStatCardProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2.5 px-8 py-[60px] text-center ${impactVariants[variant]} ${className}`}
    >
      <p className="font-[family-name:var(--font-bricolage)] text-[40px] font-extrabold leading-none">
        {value}
      </p>
      <p className="max-w-[210px] text-[15px] font-medium leading-5">{label}</p>
    </div>
  );
}

type ActionCardProps = {
  title: string;
  description: string;
  backgroundColor: string;
  href?: string;
  children?: ReactNode;
};

export function ActionCard({
  title,
  description,
  backgroundColor,
  href = "#",
  children,
}: ActionCardProps) {
  return (
    <a
      href={href}
      className="group relative flex h-[272px] flex-col justify-between overflow-hidden rounded-[30px] p-7 text-white transition-transform hover:scale-[1.02]"
      style={{ backgroundColor }}
    >
      <div className="flex flex-col gap-1">
        <h3 className="font-[family-name:var(--font-bricolage)] text-[25px] font-bold leading-[38px]">
          {title}
        </h3>
        <p className="max-w-[318px] text-lg font-medium leading-7">{description}</p>
      </div>
      <span className="flex size-11 items-center justify-center rounded-full border-2 border-white/25 bg-white/50 backdrop-blur-md">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      {children}
    </a>
  );
}

type TestimonialCardProps = {
  name: string;
  quote: string;
  avatar: string;
  platform?: "twitter" | "default";
  featured?: boolean;
};

export function TestimonialCard({
  name,
  quote,
  avatar,
  platform = "default",
  featured = false,
}: TestimonialCardProps) {
  return (
    <article
      className={`relative flex flex-col items-center gap-7 rounded-lg bg-[#28292C] p-7 text-center ${
        featured ? "z-10 scale-105 shadow-2xl" : "opacity-90"
      }`}
    >
      <div className="relative size-[95px] overflow-hidden rounded-full">
        <Image src={avatar} alt={name} fill className="object-cover" sizes="95px" />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-center gap-1.5">
          {platform === "twitter" && (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#1DA1F2" aria-hidden>
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          )}
          <h3 className="font-[family-name:var(--font-bricolage)] text-2xl font-bold text-[#EFEFEF]">
            {name}
          </h3>
        </div>
        <p className="font-[family-name:var(--font-jost)] text-xl leading-[27px] text-white">
          {quote}
        </p>
      </div>
    </article>
  );
}
