"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";

const YOGURT_FLAVORS = [
  "Pistachio + mango & raspberry",
  "Matcha + honey drizzle",
  "Raspberry compote + fresh fruit",
  "Double-strained with toppings",
] as const;

const HERO_VIDEO_SRC = "/videos/hero-bowls.mp4";

export function HeroVideo() {
  const [videoError, setVideoError] = React.useState(false);
  const hasVideo = !videoError;

  return (
    <div className="flex w-full max-w-lg flex-col gap-3 lg:max-w-none">
      <FlavorRotator />
      <div className="relative aspect-video h-[280px] overflow-hidden rounded-2xl border border-black/10 bg-brand-sand/40 shadow-soft sm:h-[340px] lg:h-[400px]">
        {hasVideo ? (
          <video
            src={HERO_VIDEO_SRC}
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
            onError={() => setVideoError(true)}
            aria-hidden
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-brand-cream via-brand-sand/60 to-brand-robin/20">
            <p className="text-center text-sm font-medium text-brand-ink/60">
              Add <code className="rounded bg-black/10 px-1.5 py-0.5 text-xs">public/videos/hero-bowls.mp4</code> for a looping yogurt bowl video
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function FlavorRotator() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % YOGURT_FLAVORS.length);
    }, 3200);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex items-center gap-2 text-brand-ink/90">
      <span className="text-xs font-semibold uppercase tracking-wider text-brand-mahogany/80">
        Flavors
      </span>
      <span className="text-sm font-medium text-brand-ink">
        <AnimatePresence mode="wait">
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.35 }}
            className="inline-block min-h-[1.25em] min-w-[180px]"
          >
            {YOGURT_FLAVORS[index]}
          </motion.span>
        </AnimatePresence>
      </span>
    </div>
  );
}
