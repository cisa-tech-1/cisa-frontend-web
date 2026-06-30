"use client";

import {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
  type ReactNode,
} from "react";

type HeroVideoContextValue = {
  videoRef: React.RefObject<HTMLVideoElement | null>;
  isMuted: boolean;
  toggleMute: () => void;
};

const HeroVideoContext = createContext<HeroVideoContextValue | null>(null);

export function HeroVideoProvider({ children }: { children: ReactNode }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  }, []);

  return (
    <HeroVideoContext.Provider value={{ videoRef, isMuted, toggleMute }}>
      {children}
    </HeroVideoContext.Provider>
  );
}

export function useHeroVideo() {
  return useContext(HeroVideoContext);
}

export function HeroVideoBackground() {
  const context = useHeroVideo();
  if (!context) return null;

  const { videoRef } = context;

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      className="absolute inset-0 h-full w-full object-cover"
    >
      <source src="/images/videos/landing.mp4" type="video/mp4" />
    </video>
  );
}

export function HeroVolumeToggle({ className }: { className?: string }) {
  const context = useHeroVideo();
  if (!context) return null;

  const { isMuted, toggleMute } = context;

  return (
    <button
      type="button"
      onClick={toggleMute}
      className={className}
      aria-label={isMuted ? "Unmute video" : "Mute video"}
      aria-pressed={!isMuted}
    >
      {isMuted ? (
        <svg width="16" height="18" viewBox="0 0 16 18" fill="currentColor" aria-hidden>
          <path d="M0 6h3l4-4v16l-4-4H0V6zm9 2.5v5c1.2-.7 2-2 2-3.5s-.8-2.8-2-3.5z" />
          <path
            d="M14 2L2 16"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      ) : (
        <svg width="16" height="18" viewBox="0 0 16 18" fill="currentColor" aria-hidden>
          <path d="M0 6h3l4-4v16l-4-4H0V6zm9 2.5v5c1.2-.7 2-2 2-3.5s-.8-2.8-2-3.5z" />
        </svg>
      )}
    </button>
  );
}
