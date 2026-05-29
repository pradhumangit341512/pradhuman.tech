"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon, XIcon } from "@/components/icons";
import SectionHeading from "@/components/SectionHeading";
import { personalInfo } from "@/lib/data";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setSubmitting(false);
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: Phone, label: "Phone", value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
    { icon: MapPin, label: "Location", value: personalInfo.location, href: "#" },
  ];

  const socials = [
    { icon: GithubIcon, href: personalInfo.social.github, label: "GitHub" },
    { icon: LinkedinIcon, href: personalInfo.social.linkedin, label: "LinkedIn" },
    { icon: XIcon, href: personalInfo.social.twitter, label: "Twitter" },
  ];

  return (
    <section id="contact" className="section-padding relative">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <SectionHeading
          label="Get In Touch"
          title="Let's Work Together"
          description="Have a project in mind? Let's discuss how I can help bring your vision to life"
        />

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="space-y-5">
              {contactInfo.map(({ icon: Icon, label, value, href }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300 shrink-0">
                    <Icon size={18} className="text-primary-light" />
                  </div>
                  <div>
                    <p className="text-xs text-muted uppercase tracking-wider">{label}</p>
                    <p className="text-foreground text-sm font-medium group-hover:text-primary-light transition-colors duration-300">
                      {value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div>
              <p className="text-xs text-muted mb-3 uppercase tracking-wider">Follow me</p>
              <div className="flex gap-2.5">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl border border-border flex items-center justify-center text-muted hover:text-foreground hover:border-primary-light hover:bg-primary/10 transition-all duration-300"
                    aria-label={label}
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            {/* CTA card */}
            <div className="card p-6 bg-gradient-to-br from-primary/10 to-accent/5 border-primary/15">
              <h4 className="font-bold font-[family-name:var(--font-display)] text-base">
                Ready to start a project?
              </h4>
              <p className="text-muted text-sm mt-1.5 leading-relaxed">
                Let&apos;s schedule a free consultation to discuss your requirements.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 mt-3 text-primary-light font-medium text-sm group"
              >
                Book a call
                <ArrowUpRight
                  size={13}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                />
              </a>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 card p-7 space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="text-xs text-muted mb-1.5 block font-medium uppercase tracking-wider">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="input"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-xs text-muted mb-1.5 block font-medium uppercase tracking-wider">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="input"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="text-xs text-muted mb-1.5 block font-medium uppercase tracking-wider">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                required
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="input"
                placeholder="Project Inquiry"
              />
            </div>

            <div>
              <label htmlFor="message" className="text-xs text-muted mb-1.5 block font-medium uppercase tracking-wider">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                maxLength={1000}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="input resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <div className="flex items-center justify-between pt-2">
              <AnimatePresence>
                {status === "success" && (
                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-green-500 text-sm font-medium"
                  >
                    Message sent successfully!
                  </motion.p>
                )}
                {status === "error" && (
                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-red-500 text-sm font-medium"
                  >
                    Failed to send. Please try again.
                  </motion.p>
                )}
              </AnimatePresence>

              <button
                type="submit"
                disabled={submitting}
                className="btn-primary ml-auto text-sm disabled:opacity-50"
              >
                {submitting ? "Sending..." : "Send Message"}
                <Send size={15} />
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
