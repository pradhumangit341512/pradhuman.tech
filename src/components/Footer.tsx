"use client";

import { ArrowUpRight, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon, XIcon } from "@/components/icons";
import { personalInfo } from "@/lib/data";

const socialLinks = [
  { icon: GithubIcon, href: personalInfo.social.github, label: "GitHub" },
  { icon: LinkedinIcon, href: personalInfo.social.linkedin, label: "LinkedIn" },
  { icon: XIcon, href: personalInfo.social.twitter, label: "Twitter" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border bg-surface/50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl font-bold font-[family-name:var(--font-display)]">
              <span className="gradient-text">{personalInfo.name.split(" ")[0]}</span>
              <span className="text-muted">.</span>
            </h3>
            <p className="text-muted text-sm mt-2">
              Building the future, one pixel at a time.
            </p>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted hover:text-foreground hover:border-primary-light hover:bg-primary/10 transition-all duration-300"
                aria-label={label}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted text-sm flex items-center gap-1">
            Made with <Heart size={14} className="text-red-500 fill-red-500" /> by{" "}
            {personalInfo.name}
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-muted hover:text-primary-light transition-colors group"
          >
            Back to top
            <ArrowUpRight
              size={14}
              className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform"
            />
          </button>
        </div>
      </div>
    </footer>
  );
}
