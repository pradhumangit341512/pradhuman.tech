"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
}

export default function SectionHeading({ label, title, description }: SectionHeadingProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="text-center mb-14">
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4 }}
        className="text-primary-light font-mono text-xs mb-3 tracking-[0.2em] uppercase font-medium"
      >
        {label}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4, delay: 0.08 }}
        className="text-2xl sm:text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] tracking-tight"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.16 }}
          className="text-muted mt-3 max-w-xl mx-auto text-sm sm:text-base leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
