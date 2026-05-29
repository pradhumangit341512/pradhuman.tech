"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Briefcase, GraduationCap, Calendar } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { personalInfo, skills, experiences } from "@/lib/data";

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-foreground font-medium">{name}</span>
        <span className="text-primary-light font-mono text-xs">{level}%</span>
      </div>
      <div className="h-1.5 bg-border/50 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.2, delay, ease: [0.76, 0, 0.24, 1] }}
          className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
        />
      </div>
    </div>
  );
}

function ExperienceCard({
  role,
  company,
  period,
  description,
  tech,
  index,
}: {
  role: string;
  company: string;
  period: string;
  description: string;
  tech: string[];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative pl-8 border-l-2 border-border hover:border-primary-light/60 transition-colors duration-500"
    >
      <div className="absolute left-[-9px] top-1 w-4 h-4 rounded-full bg-primary border-4 border-background transition-colors duration-300" />

      <div className="card p-6">
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <span className="px-3 py-1 bg-primary/10 text-primary-light text-xs font-mono rounded-full flex items-center gap-1.5">
            <Calendar size={11} />
            {period}
          </span>
        </div>

        <h4 className="text-lg font-bold font-[family-name:var(--font-display)]">{role}</h4>
        <p className="text-primary-light font-medium text-sm flex items-center gap-2 mt-1">
          <Briefcase size={13} />
          {company}
        </p>
        <p className="text-muted mt-3 text-sm leading-relaxed">{description}</p>

        <div className="flex flex-wrap gap-1.5 mt-4">
          {tech.map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function About() {
  const aboutRef = useRef(null);
  const isInView = useInView(aboutRef, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="About Me"
          title="Who I Am"
          description="A passionate developer dedicated to creating exceptional digital experiences"
        />

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div ref={aboutRef}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <p className="text-muted text-base sm:text-lg leading-relaxed">{personalInfo.bio}</p>

              <div className="flex flex-wrap gap-5 text-sm">
                <span className="flex items-center gap-2 text-muted">
                  <MapPin size={15} className="text-primary-light" />
                  {personalInfo.location}
                </span>
                <span className="flex items-center gap-2 text-muted">
                  <GraduationCap size={15} className="text-primary-light" />
                  B.Tech Computer Science
                </span>
              </div>
            </motion.div>

            <div className="mt-12 space-y-4">
              <h3 className="text-lg font-bold font-[family-name:var(--font-display)] mb-6">
                Technical Skills
              </h3>
              {skills.map((skill, i) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={i * 0.08} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold font-[family-name:var(--font-display)] mb-8">
              Experience
            </h3>
            <div className="space-y-6">
              {experiences.map((exp, i) => (
                <ExperienceCard key={exp.company} {...exp} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
