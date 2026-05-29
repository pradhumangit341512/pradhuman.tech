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
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type={interactive ? "button" : undefined}
          onClick={() => interactive && onChange?.(star)}
          className={`${interactive ? "cursor-pointer hover:scale-110" : "cursor-default"} transition-transform`}
        >
          <Star
            size={16}
            className={star <= rating ? "text-amber-400 fill-amber-400" : "text-border"}
          />
        </button>
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: ReviewData }) {
  return (
    <div className="card p-5 sm:p-8 relative min-h-[240px] sm:min-h-[280px] flex flex-col justify-between">
      <div>
        <Quote size={32} className="text-primary/10 absolute top-6 right-6" />
        <StarRating rating={review.rating} />
        <p className="text-foreground/85 mt-5 text-base sm:text-lg leading-relaxed italic">
          &ldquo;{review.message}&rdquo;
        </p>
      </div>
      <div className="mt-8 flex items-center gap-3.5">
        <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-sm shrink-0">
          {review.name.charAt(0)}
        </div>
        <div>
          <h4 className="font-semibold text-foreground text-sm">{review.name}</h4>
          <p className="text-muted text-xs mt-0.5">
            {review.role}, {review.company}
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
      onSubmit(form);
      setForm({ name: "", role: "", company: "", message: "", rating: 5 });
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="card p-5 sm:p-7 space-y-4">
      <h3 className="text-lg font-bold font-[family-name:var(--font-display)]">
        Leave a Review
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <input
          type="text"
          placeholder="Your Name"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="input"
        />
        <input
          type="text"
          placeholder="Your Role"
          required
          value={form.role}
          onChange={(e) => setForm({ ...form, role: e.target.value })}
          className="input"
        />
      </div>

      <input
        type="text"
        placeholder="Company"
        required
        value={form.company}
        onChange={(e) => setForm({ ...form, company: e.target.value })}
        className="input"
      />

      <textarea
        placeholder="Share your experience..."
        required
        rows={4}
        maxLength={500}
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        className="input resize-none"
      />

      <div className="flex items-center justify-between pt-1">
        <div className="flex items-center gap-3">
          <span className="text-xs text-muted font-medium">Rating:</span>
          <StarRating rating={form.rating} interactive onChange={(r) => setForm({ ...form, rating: r })} />
        </div>
        <button
          type="submit"
          disabled={submitting}
          className="btn-primary text-sm px-5 py-2.5 disabled:opacity-50"
        >
          {submitting ? "Sending..." : "Submit"}
          <Send size={14} />
        </button>
      </div>

      <AnimatePresence>
        {success && (
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-green-500 text-sm font-medium"
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
        // Use default reviews
      }
    }
    fetchReviews();
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % reviews.length);
  const prev = () => setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <section id="reviews" className="section-padding section-alt relative">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <SectionHeading
          label="Testimonials"
          title="What People Say"
          description="Hear from clients and colleagues about their experience working with me"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.25 }}
                >
                  <ReviewCard review={reviews[current]} />
                </motion.div>
              </AnimatePresence>

              <div className="flex items-center justify-between mt-5">
                <div className="flex gap-1.5">
                  {reviews.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrent(i)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === current ? "bg-primary-light w-6" : "bg-border w-1.5"
                      }`}
                    />
                  ))}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={prev}
                    className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted hover:text-foreground hover:border-primary-light transition-all duration-200"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    onClick={next}
                    className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted hover:text-foreground hover:border-primary-light transition-all duration-200"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <ReviewForm onSubmit={(review) => setReviews((prev) => [...prev, review])} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
