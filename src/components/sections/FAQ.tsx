"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { faqs } from "@/lib/data";

function FAQItem({
  question,
  answer,
  index,
  isOpen,
  toggle,
}: {
  question: string;
  answer: string;
  index: number;
  isOpen: boolean;
  toggle: () => void;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="border border-border rounded-xl overflow-hidden hover:border-primary/30 transition-colors"
    >
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-surface-light/50 transition-colors"
      >
        <span className="font-medium text-foreground pr-4">{question}</span>
        <ChevronDown
          size={20}
          className={`text-muted shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180 text-primary-light" : ""
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="px-5 pb-5 text-muted text-sm leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding relative">
      <div className="max-w-3xl mx-auto">
        <SectionHeading
          label="FAQ"
          title="Common Questions"
          description="Everything you need to know about working with me"
        />
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              {...faq}
              index={i}
              isOpen={openIndex === i}
              toggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
