"use client";

import Reveal from "../Reveal";
import ScrollHint from "../ScrollHint";
import { BackgroundPattern, FloralBranch } from "../Ornaments";
import { WEDDING } from "@/lib/constants";

export default function FamilyNote() {
  return (
    <section className="snap-section flex flex-col items-center justify-center bg-blush text-center px-7">
      <BackgroundPattern opacity={0.09} />
      <FloralBranch className="absolute top-8 -right-6 w-36 rotate-180 opacity-50" />
      <FloralBranch className="absolute bottom-12 -left-6 w-36 opacity-50" flip />

      <Reveal>
        <div className="flex items-center gap-2 justify-center mb-4 text-gold-dark">
          <span className="h-px w-8 bg-gold/60" />
          <span className="w-2 h-2 rotate-45 border border-gold/70 bg-blush" />
          <span className="h-px w-8 bg-gold/60" />
        </div>
        <h2 className="font-arabic text-3xl text-ink mb-7">
          فرحتنا بتكمل بوجودكم
        </h2>
      </Reveal>

      <Reveal delay={0.18}>
        <div className="relative max-w-xs rounded-2xl border border-gold/50 bg-white/45 px-6 py-7 shadow-[0_8px_28px_rgba(110,62,54,0.12)] backdrop-blur-sm">
          <div className="absolute inset-1.5 rounded-xl border border-gold/25 pointer-events-none" />
          <p className="font-arabic text-2xl leading-loose text-ink">
            حضوركم فرحة
            <br />
            ودعواتكم بركة
          </p>
          <div className="mx-auto my-5 h-px w-20 bg-gold/50" />
          <p className="text-base leading-relaxed text-ink/70">
            نتشرف بكم في ليلة زفاف {WEDDING.groomName} و{WEDDING.brideName}
            <br />
            ونسأل الله أن يجعلها بداية خير ومحبة
          </p>
        </div>
      </Reveal>
      <ScrollHint />
    </section>
  );
}
