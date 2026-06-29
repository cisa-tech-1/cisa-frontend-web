import Image from "next/image";

type ProgramFeatureCardProps = {
  badge: string;
  title: string;
  subtitle?: string;
  description: string;
  backgroundColor: string;
};

export function ProgramFeatureCard({
  badge,
  title,
  subtitle,
  description,
  backgroundColor,
}: ProgramFeatureCardProps) {
  return (
    <article
      className="flex min-h-[381px] flex-col items-center justify-center rounded-lg px-8 py-10 text-center text-white"
      style={{ backgroundColor }}
    >
      <span className="mb-4 inline-flex items-center gap-1.5 rounded-2xl border border-[#E9EAEB] bg-white/70 px-3 py-1 text-sm font-medium text-[#414651]">
        <span className="size-1.5 rounded-full bg-[#717680]" />
        {badge}
      </span>
      <div className="flex flex-col items-center gap-[5px]">
        <h3 className="font-[family-name:var(--font-bricolage)] text-[40px] font-extrabold leading-[48px]">
          {title}
        </h3>
        {subtitle && (
          <p className="font-[family-name:var(--font-manrope)] text-xl font-bold leading-[30px]">
            {subtitle}
          </p>
        )}
      </div>
      <p className="mt-[11px] max-w-[484px] font-[family-name:var(--font-manrope)] text-xl font-medium leading-[30px]">
        {description}
      </p>
    </article>
  );
}

type ProgramDetailBlockProps = {
  title: string;
  content: string;
  image: string;
  imageAlt: string;
  imagePosition: "left" | "right";
};

export function ProgramDetailBlock({
  title,
  content,
  image,
  imageAlt,
  imagePosition,
}: ProgramDetailBlockProps) {
  const textBlock = (
    <div className="flex max-w-[637px] flex-1 flex-col gap-[18px]">
      <h3 className="text-2xl font-bold leading-[170%] text-[#282828]">{title}</h3>
      <p className="text-xl font-medium leading-[170%] text-[#5C5C5C]">{content}</p>
    </div>
  );

  const imageBlock = (
    <div className="relative size-[min(100%,539px)] max-h-[539px] min-h-[280px] flex-1 overflow-hidden rounded-[10px] sm:min-h-[400px]">
      <Image src={image} alt={imageAlt} fill className="object-cover" sizes="539px" />
    </div>
  );

  return (
    <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-10">
      {imagePosition === "left" ? (
        <>
          {imageBlock}
          {textBlock}
        </>
      ) : (
        <>
          {textBlock}
          {imageBlock}
        </>
      )}
    </div>
  );
}

type ImageCollageProps = {
  images: readonly { src: string; alt: string }[];
};

export function ImageCollage({ images }: ImageCollageProps) {
  return (
    <div className="relative mx-auto w-full max-w-[491px]">
      <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-md bg-[#27B9A2]" />
      <div className="relative overflow-hidden rounded-md border-[3px] border-[#27B9A2] bg-white p-0.5">
        <div className="grid grid-cols-2 gap-0.5">
          {images.map((img, i) => (
            <div key={img.src} className="relative aspect-square overflow-hidden">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="236px"
                priority={i === 0}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export { ProgramVideoPlayer } from "./ProgramVideoPlayer";
