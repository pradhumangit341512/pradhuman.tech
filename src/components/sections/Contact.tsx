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
    <section id="contact" className="section-padding relative bg-surface/30">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <SectionHeading
          label="Get In Touch"
          title="Let's Work Together"
          description="Have a project in mind? Let's discuss how I can help bring your vision to life"
        />

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="space-y-6">
              {contactInfo.map(({ icon: Icon, label, value, href }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon size={20} className="text-primary-light" />
                  </div>
                  <div>
                    <p className="text-sm text-muted">{label}</p>
                    <p className="text-foreground font-medium group-hover:text-primary-light transition-colors">
                      {value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div>
              <p className="text-sm text-muted mb-4">Follow me</p>
              <div className="flex gap-3">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-xl border border-border flex items-center justify-center text-muted hover:text-foreground hover:border-primary-light hover:bg-primary/10 transition-all duration-300"
                    aria-label={label}
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* CTA card */}
            <div className="bg-gradient-to-br from-primary/20 to-accent/10 rounded-2xl p-6 border border-primary/20">
              <h4 className="font-bold font-[family-name:var(--font-display)] text-lg">
                Ready to start a project?
              </h4>
              <p className="text-muted text-sm mt-2">
                Let&apos;s schedule a free consultation to discuss your requirements.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 mt-4 text-primary-light font-medium text-sm group"
              >
                Book a call
                <ArrowUpRight
                  size={14}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </a>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 bg-surface rounded-2xl border border-border p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="text-sm text-muted mb-2 block">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 bg-surface-light border border-border rounded-xl text-foreground placeholder:text-muted/50 focus:outline-none focus:border-primary-light transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm text-muted mb-2 block">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 bg-surface-light border border-border rounded-xl text-foreground placeholder:text-muted/50 focus:outline-none focus:border-primary-light transition-colors"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="text-sm text-muted mb-2 block">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                required
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="w-full px-4 py-3 bg-surface-light border border-border rounded-xl text-foreground placeholder:text-muted/50 focus:outline-none focus:border-primary-light transition-colors"
                placeholder="Project Inquiry"
              />
            </div>

            <div>
              <label htmlFor="message" className="text-sm text-muted mb-2 block">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                maxLength={1000}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 bg-surface-light border border-border rounded-xl text-foreground placeholder:text-muted/50 focus:outline-none focus:border-primary-light transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <div className="flex items-center justify-between">
              <AnimatePresence>
                {status === "success" && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-green-400 text-sm"
                  >
                    Message sent successfully!
                  </motion.p>
                )}
                {status === "error" && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-red-400 text-sm"
                  >
                    Failed to send. Please try again.
                  </motion.p>
                )}
              </AnimatePresence>

              <button
                type="submit"
                disabled={submitting}
                className="ml-auto px-8 py-3 bg-primary hover:bg-primary-light text-white rounded-xl font-medium flex items-center gap-2 transition-all duration-300 disabled:opacity-50 hover:shadow-lg hover:shadow-primary/25"
              >
                {submitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
