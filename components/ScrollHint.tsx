"use client";

import { motion } from "framer-motion";

// مؤشر "اسحب للأسفل" واضح وأنيق — نص صغير مع سهم بينساب لتحت بهدوء
export default function ScrollHint() {
  return (
    <div
      className="absolute bottom-4 inset-x-0 flex flex-col items-center gap-1 pointer-events-none text-gold-dark/85 drop-shadow-sm"
      aria-hidden
    >
      <p className="text-[11px] font-medium tracking-[0.22em]">اسحب للأسفل</p>
      <motion.svg
        viewBox="0 0 24 24"
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.1"
        animate={{ y: [0, 5, 0], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
      </motion.svg>
    </div>
  );
}
