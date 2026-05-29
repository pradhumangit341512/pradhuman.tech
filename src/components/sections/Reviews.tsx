"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote, Send } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { defaultReviews } from "@/lib/data";

interface ReviewData {
  name: string;
  role: string;
  company: string;
  message: string;
  rating: number;
}

function StarRating({ rating, interactive, onChange }: { rating: number; interactive?: boolean; onChange?: (r: number) => void }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type={interactive ? "button" : undefined}
          onClick={() => interactive && onChange?.(star)}
          className={interactive ? "cursor-pointer" : "cursor-default"}
        >
          <Star
            size={18}
            className={star <= rating ? "text-yellow-400 fill-yellow-400" : "text-border"}
          />
        </button>
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: ReviewData }) {
  return (
    <div className="bg-surface rounded-2xl border border-border p-8 relative">
      <Quote size={40} className="text-primary/10 absolute top-6 right-6" />
      <StarRating rating={review.rating} />
      <p className="text-foreground/90 mt-4 text-lg leading-relaxed italic">
        &ldquo;{review.message}&rdquo;
      </p>
      <div className="mt-6 flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg">
          {review.name.charAt(0)}
        </div>
        <div>
          <h4 className="font-bold text-foreground">{review.name}</h4>
          <p className="text-muted text-sm">
            {review.role} at {review.company}
          </p>
        </div>
      </div>
    </div>
  );
}

function ReviewForm({ onSubmit }: { onSubmit: (review: ReviewData) => void }) {
  const [form, setForm] = useState({ name: "", role: "", company: "", message: "", rating: 5 });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        onSubmit(form);
        setForm({ name: "", role: "", company: "", message: "", rating: 5 });
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000);
      }
    } catch {
      // If API fails (no DB), still show locally
      onSubmit(form);
      setForm({ name: "", role: "", company: "", message: "", rating: 5 });
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-surface rounded-2xl border border-border p-8 space-y-5">
      <h3 className="text-xl font-bold font-[family-name:var(--font-display)]">
        Leave a Review
      </h3>

      <div className="grid sm:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Your Name"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full px-4 py-3 bg-surface-light border border-border rounded-xl text-foreground placeholder:text-muted/50 focus:outline-none focus:border-primary-light transition-colors"
        />
        <input
          type="text"
          placeholder="Your Role"
          required
          value={form.role}
          onChange={(e) => setForm({ ...form, role: e.target.value })}
          className="w-full px-4 py-3 bg-surface-light border border-border rounded-xl text-foreground placeholder:text-muted/50 focus:outline-none focus:border-primary-light transition-colors"
        />
      </div>

      <input
        type="text"
        placeholder="Company"
        required
        value={form.company}
        onChange={(e) => setForm({ ...form, company: e.target.value })}
        className="w-full px-4 py-3 bg-surface-light border border-border rounded-xl text-foreground placeholder:text-muted/50 focus:outline-none focus:border-primary-light transition-colors"
      />

      <textarea
        placeholder="Your review..."
        required
        rows={4}
        maxLength={500}
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        className="w-full px-4 py-3 bg-surface-light border border-border rounded-xl text-foreground placeholder:text-muted/50 focus:outline-none focus:border-primary-light transition-colors resize-none"
      />

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted">Rating:</span>
          <StarRating rating={form.rating} interactive onChange={(r) => setForm({ ...form, rating: r })} />
        </div>
        <button
          type="submit"
          disabled={submitting}
          className="px-6 py-3 bg-primary hover:bg-primary-light text-white rounded-xl font-medium flex items-center gap-2 transition-all duration-300 disabled:opacity-50 hover:shadow-lg hover:shadow-primary/25"
        >
          {submitting ? "Submitting..." : "Submit"}
          <Send size={16} />
        </button>
      </div>

      <AnimatePresence>
        {success && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-green-400 text-sm"
          >
            Thank you for your review!
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  );
}

export default function Reviews() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [reviews, setReviews] = useState<ReviewData[]>(defaultReviews);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const res = await fetch("/api/reviews");
        if (res.ok) {
          const data = await res.json();
          if (data.length > 0) setReviews(data);
        }
      } catch {
        // Use default reviews if API unavailable
      }
    }
    fetchReviews();
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % reviews.length);
  const prev = () => setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <section id="reviews" className="section-padding relative">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <SectionHeading
          label="Testimonials"
          title="What People Say"
          description="Hear from clients and colleagues about their experience working with me"
        />

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <ReviewCard review={reviews[current]} />
                </motion.div>
              </AnimatePresence>

              <div className="flex items-center justify-between mt-6">
                <div className="flex gap-2">
                  {reviews.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrent(i)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        i === current ? "bg-primary-light w-6" : "bg-border"
                      }`}
                    />
                  ))}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={prev}
                    className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted hover:text-foreground hover:border-primary-light transition-all"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={next}
                    className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted hover:text-foreground hover:border-primary-light transition-all"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ReviewForm onSubmit={(review) => setReviews((prev) => [...prev, review])} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
