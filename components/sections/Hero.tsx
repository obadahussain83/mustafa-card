"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "../Reveal";
import ScrollHint from "../ScrollHint";
import { BackgroundPattern, FloralBranch } from "../Ornaments";
import { WEDDING } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="snap-section flex flex-col items-center justify-center bg-blush text-center px-8">
      <BackgroundPattern opacity={0.1} />
      <OpeningPetals />
      <Image
        src="/keffiyeh-top.png"
        alt=""
        width={180}
        height={180}
        className="pointer-events-none absolute left-1/2 top-7 z-0 w-28 -translate-x-1/2 opacity-[0.16] sm:top-8 sm:w-32"
        style={{
          filter: "sepia(1) saturate(0.9) hue-rotate(354deg) brightness(1.08)",
          mixBlendMode: "multiply",
        }}
        aria-hidden
      />

      {/* توهج وردي ناعم خلف المنتصف */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(60% 42% at 50% 50%, rgba(217,138,128,0.14) 0%, transparent 70%)",
        }}
        aria-hidden
      />

      {/* الإطار الذهبي المزدوج */}
      <div className="absolute inset-3 rounded-[26px] border border-gold/50 pointer-events-none" aria-hidden />
      <div className="absolute inset-[22px] rounded-[18px] border border-gold/25 pointer-events-none" aria-hidden />

      {/* زوايا مزخرفة */}
      <CornerFlourish className="top-5 right-5" rotate={0} />
      <CornerFlourish className="top-5 left-5" rotate={90} />
      <CornerFlourish className="bottom-5 left-5" rotate={180} />
      <CornerFlourish className="bottom-5 right-5" rotate={270} />

      {/* فاصل علوي صغير فوق الآية */}
      <Reveal>
        <div className="flex items-center gap-2 justify-center mb-5 text-gold-dark">
          <span className="h-px w-8 bg-gold/60" />
          <svg viewBox="0 0 16 16" className="w-3 h-3" fill="currentColor" aria-hidden>
            <path d="M8 0 L10 6 L16 8 L10 10 L8 16 L6 10 L0 8 L6 6 Z" />
          </svg>
          <span className="h-px w-8 bg-gold/60" />
        </div>
        <p className="text-sm leading-loose text-gold-dark mb-9 max-w-[300px]">
          {WEDDING.invitationLine}
        </p>
      </Reveal>

      <Reveal delay={0.15}>
        <NameWithTitle title="المحامي" name={WEDDING.groomName} />
      </Reveal>

      <Reveal delay={0.3}>
        <div className="my-4 flex items-center gap-3 justify-center">
          <span className="h-px w-14 bg-gradient-to-l from-gold/70 to-transparent" />
          {/* قلب ذهبي صغير بينبض بهدوء بدل & */}
          <motion.svg
            viewBox="0 0 24 24"
            className="w-5 h-5"
            fill="#C9A227"
            animate={{ scale: [1, 1.18, 1] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </motion.svg>
          <span className="h-px w-14 bg-gradient-to-r from-gold/70 to-transparent" />
        </div>
      </Reveal>

      <Reveal delay={0.45}>
        <NameWithTitle title="المحامية" name={WEDDING.brideName} />
      </Reveal>

      <Reveal delay={0.65}>
        <p className="mt-9 text-base text-ink/70 leading-relaxed max-w-[280px]">
          {WEDDING.heroLine}
        </p>
        {/* غصنان صغيران متقابلان تحت الجملة */}
        <div className="mt-4 flex items-end justify-center gap-1 opacity-70">
          <FloralBranch className="w-20" flip />
          <FloralBranch className="w-20" />
        </div>
      </Reveal>

      <ScrollHint />
    </section>
  );
}

function NameWithTitle({ title, name }: { title: string; name: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-1.5 flex items-center gap-2 text-gold-dark">
        <span className="h-px w-6 bg-gold/45" />
        <span className="text-sm font-medium tracking-wide">{title}</span>
        <span className="h-px w-6 bg-gold/45" />
      </div>
      <h1 className="font-arabic text-6xl leading-tight text-ink drop-shadow-sm">
        {name}
      </h1>
    </div>
  );
}

const OPENING_PETALS = [
  { left: "8%", size: 13, delay: 0.1, duration: 6.2, sway: 28, color: "#D98A80" },
  { left: "18%", size: 10, delay: 0.7, duration: 6.8, sway: -20, color: "#EFC3BA" },
  { left: "31%", size: 15, delay: 0.25, duration: 7.1, sway: 24, color: "#E5A99E" },
  { left: "45%", size: 11, delay: 1.1, duration: 6.4, sway: -26, color: "#D98A80" },
  { left: "59%", size: 14, delay: 0.5, duration: 7.4, sway: 22, color: "#F4D3CB" },
  { left: "72%", size: 10, delay: 1.45, duration: 6.9, sway: -18, color: "#E5A99E" },
  { left: "86%", size: 13, delay: 0.9, duration: 7.2, sway: 25, color: "#D98A80" },
] as const;

function OpeningPetals() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {OPENING_PETALS.map((petal, index) => (
        <motion.div
          key={index}
          className="absolute -top-8"
          style={{ left: petal.left }}
          initial={{ y: "-8vh", x: 0, rotate: 0, opacity: 0 }}
          animate={{
            y: ["-8vh", "108vh"],
            x: [0, petal.sway, -petal.sway * 0.45, petal.sway * 0.2],
            rotate: [0, 115, 245, 380],
            opacity: [0, 0.75, 0.65, 0],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            ease: "easeInOut",
            repeat: 1,
            repeatDelay: 0.8,
          }}
        >
          <svg
            width={petal.size}
            height={petal.size * 1.45}
            viewBox="0 0 14 20"
            className="drop-shadow-sm"
          >
            <path
              d="M7 0 C12 4 13 12 7 20 C1 12 2 4 7 0 Z"
              fill={petal.color}
              opacity="0.82"
            />
            <path d="M7 3 C7 8 7 13 7 18" stroke="#fff" strokeWidth="0.7" opacity="0.45" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}

// زخرفة زاوية ذهبية — قوس بأوراق صغيرة، بتنرسم بكل زاوية بدوران مناسب
function CornerFlourish({ className, rotate }: { className: string; rotate: number }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={`absolute w-14 h-14 pointer-events-none ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
      fill="none"
      aria-hidden
    >
      <g stroke="#C9A227" strokeWidth="1.3" strokeLinecap="round" opacity="0.8">
        <path d="M60 4 Q34 6 20 20 Q6 34 4 60" />
        <path d="M44 10 q-6 -6 -14 -4 q4 8 14 4z" fill="#C9A227" fillOpacity="0.3" />
        <path d="M10 44 q-6 -6 -4 -14 q8 4 4 14z" fill="#C9A227" fillOpacity="0.3" />
        <circle cx="24" cy="24" r="3" strokeWidth="1" />
        <circle cx="24" cy="24" r="6" strokeWidth="0.7" strokeDasharray="2 3" />
      </g>
    </svg>
  );
}
