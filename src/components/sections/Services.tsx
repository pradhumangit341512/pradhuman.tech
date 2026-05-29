"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Palette, Code2, Layout, TrendingUp } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { services, processSteps } from "@/lib/data";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Palette,
  Code2,
  Layout,
  TrendingUp,
};

function ServiceCard({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: string;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const Icon = iconMap[icon] || Code2;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className="group card p-7 relative overflow-hidden"
    >
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 group-hover:scale-105 transition-all duration-300">
        <Icon size={24} className="text-primary-light" />
      </div>
      <h3 className="text-lg font-bold font-[family-name:var(--font-display)] mb-2.5 group-hover:text-primary-light transition-colors duration-300">
        {title}
      </h3>
      <p className="text-muted text-sm leading-relaxed">{description}</p>

      <div className="absolute top-3 right-4 text-5xl font-bold font-[family-name:var(--font-display)] text-foreground/[0.02] group-hover:text-primary/[0.06] transition-colors duration-500">
        {String(index + 1).padStart(2, "0")}
      </div>
    </motion.div>
  );
}

function ProcessStep({
  step,
  title,
  description,
  index,
}: {
  step: string;
  title: string;
  description: string;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className="relative flex gap-3 sm:gap-5 group"
    >
      <div className="flex flex-col items-center">
        <div className="w-11 h-11 rounded-full bg-primary/10 border-2 border-primary/25 flex items-center justify-center font-bold font-mono text-sm text-primary-light group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300">
          {step}
        </div>
        {index < processSteps.length - 1 && (
          <div className="w-px flex-1 bg-gradient-to-b from-primary/25 to-transparent mt-2" />
        )}
      </div>
      <div className="pb-10">
        <h4 className="text-base font-bold font-[family-name:var(--font-display)] group-hover:text-primary-light transition-colors duration-300">
          {title}
        </h4>
        <p className="text-muted text-sm mt-1.5 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="What I Do"
          title="Services & Process"
          description="End-to-end solutions tailored to bring your vision to life"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-16 sm:mb-24">
          {services.map((service, i) => (
            <ServiceCard key={service.title} {...service} index={i} />
          ))}
        </div>

        <div className="max-w-xl mx-auto">
          <h3 className="text-xl font-bold font-[family-name:var(--font-display)] text-center mb-12">
            My <span className="gradient-text">Process</span>
          </h3>
          {processSteps.map((ps, i) => (
            <ProcessStep key={ps.step} {...ps} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
