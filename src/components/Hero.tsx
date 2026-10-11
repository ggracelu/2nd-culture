"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ExternalLink } from "lucide-react";
import { LINKS, TAGLINE_OPTIONS } from "@/lib/content";
import { FlowButton } from "@/components/ui/flow-button";

function splitLetters(text: string) {
  return Array.from(text);
}

export function Hero() {
  const reduce = useReducedMotion();
  const title = "Second Culture Yogurt";
  const letters = splitLetters(title);

  return (
    <section id="top" className="relative isolate min-h-[70dvh] overflow-hidden bg-[color:var(--brand-cream)]">
      <div className="absolute inset-0 hero-bg-gradient" />
      <div className="relative z-10 min-h-[70dvh]">
        <div className="mx-auto flex min-h-[70dvh] max-w-6xl items-center px-4 pb-6 pt-14 sm:px-5 sm:pt-16">
          <div className="grid w-full grid-cols-1 items-center gap-8 lg:grid-cols-[1.25fr_0.75fr]">
            <div className="text-brand-ink font-body">
              <div className="mb-6 flex items-center">
                <Image
                  src="/brand/logo-sc.png"
                  alt="Second Culture Yogurt logo mark"
                  width={64}
                  height={64}
                  className="h-14 w-14 drop-shadow-md"
                  priority
                />
              </div>

              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-brand-mahogany/90">
                  Second Culture Yogurt
                </p>
                <h1 className="max-w-2xl font-body text-4xl font-semibold uppercase leading-[1.1] tracking-[0.02em] text-brand-ink text-justify sm:text-5xl md:text-[3.5rem] lg:text-[4rem]">
                  <span className="block">Meet your new</span>
                  <span className="block">favorite healthy</span>
                  <span className="block">sweet treat</span>
                </h1>
              </div>

              <p className="mt-6 text-sm leading-6 text-brand-ink/80 sm:text-base font-body">
                Double-strained homemade yogurt bowls highlighting Chinese and multicultural flavors
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <FlowButton
                  href="#current-menu"
                  text="Current menu"
                  variant="primary"
                  className="text-base px-7 py-3.5"
                />
                <FlowButton
                  href="#upcoming-popups"
                  text="Upcoming pop-ups"
                  variant="secondary"
                  className="text-base px-7 py-3.5"
                />
                <a
                  href={LINKS.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 rounded-xl p-4 text-brand-ink transition hover:scale-105 hover:text-brand-mahogany focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-robin"
                >
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  <span>@sec_culture</span>
                </a>
              </div>
            </div>

            <div className="relative flex flex-col items-center justify-center lg:block lg:pl-10 lg:translate-x-8">
              <motion.div
                className="relative h-[260px] w-[260px] overflow-hidden rounded-full border border-brand-ink/15 bg-white/70 shadow-lift sm:h-[300px] sm:w-[300px]"
                whileHover={{
                  scale: 1.05,
                  rotate: [0, -1.5, 1.2, -0.8, 0],
                }}
                transition={{
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <Image
                  src="/photos/hero-bowl-rose.png"
                  alt="Second Culture yogurt bowl with seasonal toppings"
                  fill
                  sizes="300px"
                  className="object-cover"
                  priority
                />
              </motion.div>
              <ScrollIndicator />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ScrollIndicator() {
  const reduce = useReducedMotion();
  return (
    <div className="pointer-events-none absolute -bottom-12 left-1/2 hidden -translate-x-1/2 sm:block">
      {reduce ? null : (
        <motion.div
          initial={{ opacity: 0.7, y: 0 }}
          animate={{ opacity: 0.9, y: 10 }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 1.25,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="flex items-center gap-2 rounded-full border border-brand-ink/15 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-brand-ink/80 shadow-soft"
        >
          Scroll
          <ArrowDown className="h-4 w-4" aria-hidden="true" />
        </motion.div>
      )}
    </div>
  );
}
