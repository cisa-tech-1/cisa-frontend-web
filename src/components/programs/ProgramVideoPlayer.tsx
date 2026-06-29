"use client";

import { useRef, useState } from "react";

type ProgramVideoPlayerProps = {
  src: string;
  label: string;
};

export function ProgramVideoPlayer({ src, label }: ProgramVideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      void video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  return (
    <div className="relative min-h-[400px] w-full min-w-0 flex-1 overflow-hidden rounded-xl lg:min-h-[697px] lg:max-w-[539px]">
      <video
        ref={videoRef}
        src={src}
        className="absolute inset-0 size-full cursor-pointer object-cover"
        playsInline
        onEnded={() => setPlaying(false)}
        onClick={togglePlayback}
      />

      <div
        className={`absolute inset-0 flex flex-col items-center justify-center gap-[21px] bg-black/40 transition-opacity ${
          playing ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
      >
        <button
          type="button"
          onClick={togglePlayback}
          className="flex size-[70px] items-center justify-center rounded-full bg-[#F87C22]"
          aria-label="Play video"
        >
          <span className="ml-1 size-0 border-y-12 border-l-20 border-y-transparent border-l-white" />
        </button>

        <p className="max-w-[186px] text-center font-[family-name:var(--font-raleway)] text-2xl font-bold leading-[35px] text-white">
          {label}
        </p>
      </div>
    </div>
  );
}
