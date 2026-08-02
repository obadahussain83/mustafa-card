"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

type Props = {
  play: boolean;
};

export default function AudioControl({ play }: Props) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [muted, setMuted] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !play) return;

    audio.volume = 0.55;
    audio.muted = muted;
    audio.play()
      .then(() => setStarted(true))
      .catch(() => setStarted(false));
  }, [play, muted]);

  const toggleMuted = () => {
    const audio = audioRef.current;
    const nextMuted = !muted;
    setMuted(nextMuted);

    if (audio) {
      audio.muted = nextMuted;
      if (!nextMuted && play) {
        audio.play()
          .then(() => setStarted(true))
          .catch(() => setStarted(false));
      }
    }
  };

  if (!play) {
    return <audio ref={audioRef} src="/audio/wedding-sound.mp4" loop preload="auto" />;
  }

  return (
    <>
      <audio ref={audioRef} src="/audio/wedding-sound.mp4" loop preload="auto" />
      <motion.button
        type="button"
        onClick={toggleMuted}
        className="absolute top-4 left-4 z-[60] flex h-10 w-10 items-center justify-center rounded-full border border-white/45 bg-white/35 text-gold-dark shadow-[0_8px_22px_rgba(74,58,42,0.16)] backdrop-blur-md transition active:scale-95"
        aria-label={muted || !started ? "تشغيل الصوت" : "كتم الصوت"}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        {muted || !started ? <VolumeOffIcon /> : <VolumeIcon />}
      </motion.button>
    </>
  );
}

function VolumeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden>
      <path d="M4 10v4h4l5 4V6l-5 4H4z" strokeLinejoin="round" />
      <path d="M16 9.5a4 4 0 0 1 0 5" strokeLinecap="round" />
      <path d="M18.5 7a7.5 7.5 0 0 1 0 10" strokeLinecap="round" />
    </svg>
  );
}

function VolumeOffIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden>
      <path d="M4 10v4h4l5 4V6l-5 4H4z" strokeLinejoin="round" />
      <path d="M17 9l4 4m0-4l-4 4" strokeLinecap="round" />
    </svg>
  );
}
