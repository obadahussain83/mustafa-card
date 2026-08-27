"use client";

import Reveal from "../Reveal";
import WaxSeal from "../WaxSeal";
import { BackgroundPattern, OrnamentalRing } from "../Ornaments";
import { WEDDING } from "@/lib/constants";

export default function Closing() {
  return (
    <section className="snap-section flex flex-col items-center justify-center bg-blush-dark text-center px-6">
      <BackgroundPattern opacity={0.12} />
      <a
        href="https://www.instagram.com/dawainvitation"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram @dawainvitation"
        className="absolute bottom-5 left-1/2 z-10 inline-flex -translate-x-1/2 items-center gap-2 rounded-full border border-gold/35 bg-white/30 px-3 py-2 text-xs font-medium text-gold-dark shadow-[0_6px_18px_rgba(74,58,42,0.10)] backdrop-blur-sm transition hover:bg-white/45 active:scale-95"
        dir="ltr"
      >
        <InstagramIcon />
        <span>@dawainvitation</span>
      </a>

      <Reveal>
        <p className="font-arabic text-2xl leading-relaxed text-ink max-w-xs">
          {WEDDING.thankYouMessage}
        </p>
      </Reveal>

      <Reveal delay={0.25} className="my-10">
        <div className="relative">
          <OrnamentalRing className="absolute -inset-5 w-[calc(100%+2.5rem)] h-[calc(100%+2.5rem)]" />
          <WaxSeal size={130} />
        </div>
      </Reveal>

      <Reveal delay={0.45}>
        <p className="font-script text-3xl text-gold-dark">
          {WEDDING.groomInitial} &amp; {WEDDING.brideInitial}
        </p>
        <p className="mt-2 text-sm text-ink/60">
          {WEDDING.groomName} و {WEDDING.brideName} — {WEDDING.dateLabel}
        </p>
      </Reveal>
    </section>
  );
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="4" y="4" width="16" height="16" rx="5" />
      <circle cx="12" cy="12" r="3.4" />
      <circle cx="16.8" cy="7.2" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}
