"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + Math.random() * 12 + 5;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-10"
          >
            <div className="text-5xl font-bold font-[family-name:var(--font-display)] tracking-tight">
              <span className="gradient-text">PS</span>
            </div>

            <div className="w-52 h-1 bg-border/50 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-primary via-primary-light to-accent rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.15, ease: "easeOut" }}
              />
            </div>

            <p className="text-muted/60 text-xs font-mono tracking-widest uppercase">
              Loading
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
