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
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-surface rounded-2xl border border-border overflow-hidden hover:border-primary/40 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5"
    >
      {/* Project image placeholder with gradient */}
      <div className="relative h-48 bg-gradient-to-br from-primary/20 via-surface-light to-accent/10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.15),transparent_70%)]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-6xl font-bold font-[family-name:var(--font-display)] text-white/5 group-hover:text-white/10 transition-all duration-500 group-hover:scale-110">
            {title.charAt(0)}
          </span>
        </div>

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
          <a
            href={liveUrl}
            className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            aria-label="View live"
          >
            <ExternalLink size={20} />
          </a>
          <a
            href={githubUrl}
            className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            aria-label="View source"
          >
            <GithubIcon size={20} />
          </a>
        </div>
      </div>

      <div className="p-6">
        <span className="text-xs font-mono text-primary-light uppercase tracking-wider">
          {category}
        </span>
        <h3 className="text-xl font-bold font-[family-name:var(--font-display)] mt-2 group-hover:text-primary-light transition-colors flex items-center gap-2">
          {title}
          <ArrowUpRight
            size={18}
            className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 -translate-y-2 group-hover:translate-y-0 transition-all duration-300"
          />
        </h3>
        <p className="text-muted text-sm mt-2 line-clamp-2">{description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 bg-surface-light text-xs text-muted rounded-full border border-border"
            >
              {t}
            </span>
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
    <section id="projects" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="My Work"
          title="Featured Projects"
          description="A selection of projects that showcase my expertise in building modern web applications"
        />

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-primary text-white shadow-lg shadow-primary/25"
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
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
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
