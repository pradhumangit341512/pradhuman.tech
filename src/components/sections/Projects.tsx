"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import SectionHeading from "@/components/SectionHeading";
import { projects } from "@/lib/data";

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

function ProjectCard({
  title,
  category,
  description,
  tech,
  liveUrl,
  githubUrl,
  index,
}: (typeof projects)[0] & { index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group card overflow-hidden"
    >
      {/* Project visual */}
      <div className="relative h-52 bg-gradient-to-br from-primary/15 via-surface-light to-accent/10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(124,58,237,0.12),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(6,182,212,0.08),transparent_50%)]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-7xl font-bold font-[family-name:var(--font-display)] text-foreground/[0.04] group-hover:text-foreground/[0.08] transition-all duration-700 group-hover:scale-125">
            {title.charAt(0)}
          </span>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-primary/85 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-400 flex items-center justify-center gap-4">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"
            aria-label="View live"
          >
            <ExternalLink size={18} />
          </a>
          <a
            href={githubUrl}
            className="w-11 h-11 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"
            aria-label="View source"
          >
            <GithubIcon size={18} />
          </a>
        </div>
      </div>

      <div className="p-6">
        <span className="text-[11px] font-mono text-primary-light uppercase tracking-wider font-medium">
          {category}
        </span>
        <h3 className="text-lg font-bold font-[family-name:var(--font-display)] mt-2 group-hover:text-primary-light transition-colors duration-300 flex items-center gap-1.5">
          {title}
          <ArrowUpRight
            size={16}
            className="opacity-0 group-hover:opacity-100 transition-all duration-300"
          />
        </h3>
        <p className="text-muted text-sm mt-2 line-clamp-2 leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-1.5 mt-4">
          {tech.map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="section-padding section-alt relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="My Work"
          title="Featured Projects"
          description="Real products I've built — from SaaS platforms to AI-powered applications"
        />

        <div className="flex flex-wrap justify-center gap-2.5 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "btn-primary py-2 px-5"
                  : "bg-surface border border-border text-muted hover:text-foreground hover:border-primary/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            layout
            className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6"
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} {...project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
