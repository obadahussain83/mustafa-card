// زخارف SVG نباتية ذهبية line-art — تُستخدم بعدة أماكن لتوحيد الهوية البصرية

export function FloralBranch({
  className = "",
  flip = false,
}: {
  className?: string;
  flip?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 200 120"
      fill="none"
      className={className}
      style={flip ? { transform: "scaleX(-1)" } : undefined}
      aria-hidden
    >
      <g stroke="#C9A227" strokeWidth="1.4" strokeLinecap="round">
        <path d="M10 110 Q60 70 100 60 T190 20" />
        <path d="M60 82 q-6 -18 -22 -22" />
        <path d="M100 60 q-2 -20 -16 -28" />
        <path d="M140 42 q2 -18 16 -24" />
        {/* أوراق */}
        <path d="M38 88 q-14 -4 -20 6 q12 6 20 -6z" fill="#C9A227" fillOpacity="0.25" />
        <path d="M84 66 q-14 -6 -22 2 q10 8 22 -2z" fill="#C9A227" fillOpacity="0.25" />
        <path d="M128 48 q-12 -8 -22 -2 q8 10 22 2z" fill="#C9A227" fillOpacity="0.25" />
        <path d="M168 30 q-10 -10 -20 -6 q6 12 20 6z" fill="#C9A227" fillOpacity="0.25" />
      </g>
      {/* وردة صغيرة */}
      <g stroke="#B8860B" strokeWidth="1.2" fill="none">
        <circle cx="190" cy="18" r="5" />
        <circle cx="190" cy="18" r="9" strokeDasharray="3 3" />
      </g>
    </svg>
  );
}

export function Bee({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 32" fill="none" className={className} aria-hidden>
      <g stroke="#B8860B" strokeWidth="1.2">
        <ellipse cx="20" cy="20" rx="9" ry="6.5" fill="#C9A227" fillOpacity="0.3" />
        <path d="M15 15 Q10 6 6 8" />
        <path d="M25 15 Q30 6 34 8" />
        <path d="M16 17 v7 M20 15.5 v9 M24 17 v7" />
        <circle cx="11.5" cy="18" r="2.5" fill="#F7E9DE" />
      </g>
    </svg>
  );
}

// إطار زخرفي دائري — يُستخدم حول الختم وبالسكشن الختامي
export function OrnamentalRing({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 220 220" fill="none" className={className} aria-hidden>
      <circle cx="110" cy="110" r="104" stroke="#C9A227" strokeWidth="1" strokeDasharray="1 5" />
      <circle cx="110" cy="110" r="96" stroke="#C9A227" strokeWidth="0.8" opacity="0.6" />
    </svg>
  );
}

export function KeffiyehBorderPattern() {
  return (
    <div
      className="pointer-events-none absolute inset-6 z-0 overflow-hidden rounded-[18px]"
      aria-hidden
    >
      <KeffiyehCornerMotif className="absolute right-0 top-0 w-24 opacity-[0.14] sm:w-28 sm:opacity-[0.16]" />
      <KeffiyehCornerMotif className="absolute bottom-0 left-0 w-24 rotate-180 opacity-[0.12] sm:w-28 sm:opacity-[0.14]" />
    </div>
  );
}

function KeffiyehCornerMotif({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 112 112"
      fill="none"
      style={{
        WebkitMaskImage: "radial-gradient(circle at 100% 0%, black 0%, black 54%, transparent 100%)",
        maskImage: "radial-gradient(circle at 100% 0%, black 0%, black 54%, transparent 100%)",
      }}
      aria-hidden
    >
      <g strokeLinecap="round" strokeLinejoin="round">
        <path
          d="M108 6 C86 7 67 13 51 24 C34 36 22 54 11 78"
          stroke="#B8860B"
          strokeWidth="2.1"
        />
        <path
          d="M112 24 C86 26 64 35 47 50 C33 63 23 80 14 105"
          stroke="#C9A227"
          strokeWidth="1.7"
        />
        <path
          d="M93 0 C78 18 63 35 45 51 C33 62 20 73 3 85"
          stroke="#B8860B"
          strokeWidth="1.9"
        />
        <path
          d="M112 50 C89 48 68 53 48 65 C31 75 17 90 5 111"
          stroke="#C9A227"
          strokeWidth="1.35"
        />
        <path
          d="M70 0 C83 17 95 35 108 57"
          stroke="#C9A227"
          strokeWidth="1.4"
        />
        <path
          d="M46 9 C57 25 69 43 82 65 C90 79 97 93 103 110"
          stroke="#B8860B"
          strokeWidth="1.6"
        />
        <path
          d="M23 28 C37 38 51 51 64 68 C74 81 82 95 89 112"
          stroke="#C9A227"
          strokeWidth="1.25"
        />
        <path
          d="M4 57 C18 65 33 77 46 91 C52 98 57 105 62 112"
          stroke="#B8860B"
          strokeWidth="1.45"
        />
        <g fill="#C9A227">
          <circle cx="92" cy="23" r="2.2" />
          <circle cx="72" cy="36" r="2.5" />
          <circle cx="53" cy="51" r="2.1" />
          <circle cx="35" cy="66" r="2.4" />
          <circle cx="78" cy="62" r="2.3" />
          <circle cx="61" cy="78" r="2" />
          <circle cx="43" cy="94" r="2.2" />
          <circle cx="98" cy="56" r="1.9" />
        </g>
        <g fill="#B8860B" opacity="0.9">
          <path d="M84 35 q9 -5 17 -1 q-6 8 -17 1z" />
          <path d="M55 72 q8 -6 16 -3 q-5 8 -16 3z" />
          <path d="M29 91 q7 -5 14 -2 q-5 7 -14 2z" />
        </g>
      </g>
    </svg>
  );
}

// نمط خلفية شفاف من فروع نباتية — يوضع فوق الخلفية بشفافية خفيفة
export function BackgroundPattern({ opacity = 0.1 }: { opacity?: number }) {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      <KeffiyehBorderPattern />
      <div className="absolute inset-0" style={{ opacity }}>
        <FloralBranch className="absolute -top-2 -right-6 w-44 rotate-180" />
        <FloralBranch className="absolute top-24 -left-8 w-40" flip />
        <FloralBranch className="absolute bottom-24 -right-8 w-40" />
        <FloralBranch className="absolute -bottom-2 -left-6 w-44" flip />
        <Bee className="absolute top-[18%] left-[16%] w-7 -rotate-12" />
        <Bee className="absolute bottom-[22%] right-[14%] w-6 rotate-12" />
      </div>
    </div>
  );
}
