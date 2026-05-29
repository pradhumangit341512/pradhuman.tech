"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, Send } from "lucide-react";
import { personalInfo } from "@/lib/data";
import dynamic from "next/dynamic";
import gsap from "gsap";

const Scene3D = dynamic(() => import("@/components/Scene3D"), { ssr: false });

export default function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!headingRef.current) return;

    const chars = headingRef.current.querySelectorAll(".char");
    gsap.fromTo(
      chars,
      { y: 80, opacity: 0, rotateX: -80 },
      {
        y: 0,
        opacity: 1,
        rotateX: 0,
        duration: 0.7,
        stagger: 0.025,
        ease: "back.out(1.4)",
        delay: 1.6,
      }
    );
  }, []);

  const splitText = (text: string) =>
    text.split("").map((char, i) => (
      <span key={i} className="char inline-block" style={{ opacity: 0 }}>
        {char === " " ? "\u00A0" : char}
      </span>
    ));

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <Scene3D />

      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/70 to-background z-[1]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 15, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-border bg-surface/60 backdrop-blur-md mb-10"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
          </span>
          <span className="text-sm text-muted font-medium">Available for opportunities</span>
        </motion.div>

        {/* Heading */}
        <h1
          ref={headingRef}
          className="text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold font-[family-name:var(--font-display)] leading-[1.05] tracking-tight mb-8"
        >
          <span className="block">{splitText("Hi, I'm")}</span>
          <span className="block text-primary-light mt-3">
            {splitText(personalInfo.name)}
          </span>
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.2 }}
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-foreground/80 font-semibold max-w-2xl mx-auto mb-4"
        >
          {personalInfo.title}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.4 }}
          className="text-sm sm:text-base md:text-lg text-muted max-w-xl mx-auto mb-12 leading-relaxed"
        >
          {personalInfo.tagline}
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#contact" className="btn-primary group text-base px-8 py-4">
            Get In Touch
            <Send size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
          <a href={personalInfo.resumeUrl} className="btn-secondary group text-base px-8 py-4">
            Download CV
            <Download size={18} className="group-hover:translate-y-0.5 transition-transform duration-300" />
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 3.0 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted/60 hover:text-primary-light transition-colors duration-300"
          >
            <span className="text-[10px] tracking-[0.2em] uppercase font-medium">Scroll</span>
            <ArrowDown size={18} className="animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
