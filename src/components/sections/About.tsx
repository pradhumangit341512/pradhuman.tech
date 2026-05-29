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
        <span className="text-primary-light font-mono">{level}%</span>
      </div>
      <div className="h-2 bg-surface-light rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay, ease: [0.76, 0, 0.24, 1] }}
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
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative pl-8 border-l-2 border-border hover:border-primary-light transition-colors duration-300"
    >
      <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background" />

      <div className="bg-surface/50 rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <span className="px-3 py-1 bg-primary/10 text-primary-light text-xs font-mono rounded-full flex items-center gap-1">
            <Calendar size={12} />
            {period}
          </span>
        </div>

        <h4 className="text-xl font-bold font-[family-name:var(--font-display)]">{role}</h4>
        <p className="text-primary-light font-medium flex items-center gap-2 mt-1">
          <Briefcase size={14} />
          {company}
        </p>
        <p className="text-muted mt-3 text-sm leading-relaxed">{description}</p>

        <div className="flex flex-wrap gap-2 mt-4">
          {tech.map((t) => (
            <span
              key={t}
              className="px-2 py-1 bg-surface-light text-xs text-muted rounded-md border border-border"
            >
              {t}
            </span>
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
          {/* About text & skills */}
          <div ref={aboutRef}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <p className="text-muted text-lg leading-relaxed">{personalInfo.bio}</p>

              <div className="flex flex-wrap gap-4 text-sm text-muted">
                <span className="flex items-center gap-2">
                  <MapPin size={16} className="text-primary-light" />
                  {personalInfo.location}
                </span>
                <span className="flex items-center gap-2">
                  <GraduationCap size={16} className="text-primary-light" />
                  B.Tech Computer Science
                </span>
              </div>
            </motion.div>

            <div className="mt-10 space-y-5">
              <h3 className="text-xl font-bold font-[family-name:var(--font-display)] mb-6">
                Technical Skills
              </h3>
              {skills.map((skill, i) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={i * 0.1} />
              ))}
            </div>
          </div>

          {/* Experience timeline */}
          <div>
            <h3 className="text-xl font-bold font-[family-name:var(--font-display)] mb-8">
              Experience
            </h3>
            <div className="space-y-8">
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
