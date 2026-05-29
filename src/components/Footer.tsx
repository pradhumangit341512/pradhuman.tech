"use client";

import { ArrowUp, Heart } from "lucide-react";
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
    <footer className="relative border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold font-[family-name:var(--font-display)]">
              <span className="gradient-text">{personalInfo.name.split(" ")[0]}</span>
              <span className="text-muted">.</span>
            </h3>
            <p className="text-muted text-xs mt-1.5">
              Building the future, one line at a time.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted hover:text-foreground hover:border-primary-light hover:bg-primary/10 transition-all duration-300"
                aria-label={label}
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-3">
          <p className="text-muted text-xs flex items-center gap-1">
            Made with <Heart size={12} className="text-red-500 fill-red-500" /> by{" "}
            {personalInfo.name}
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-muted hover:text-primary-light transition-colors duration-300 group"
          >
            Back to top
            <ArrowUp size={12} className="group-hover:-translate-y-0.5 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </footer>
  );
}
