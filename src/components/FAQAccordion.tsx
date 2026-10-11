"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { useId, useState } from "react";
import { cn } from "@/lib/cn";

export function FAQAccordion({
  items,
  className,
}: {
  items: Array<{ q: string; a: string }>;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <div className={cn("space-y-3", className)}>
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        const buttonId = `${baseId}-btn-${idx}`;
        const panelId = `${baseId}-panel-${idx}`;

        return (
          <div
            key={item.q}
            className="rounded-2xl border border-brand-ink/10 bg-white/80 px-5 py-4 shadow-soft"
          >
            <button
              id={buttonId}
              type="button"
              className="flex w-full items-center justify-between gap-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-robin rounded-xl px-1 py-1"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenIndex((v) => (v === idx ? null : idx))}
            >
              <span className="text-base font-semibold text-brand-ink sm:text-lg">
                {item.q}
              </span>
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black/5">
                {isOpen ? (
                  <Minus className="h-5 w-5 text-brand-mahogany" />
                ) : (
                  <Plus className="h-5 w-5 text-brand-mahogany" />
                )}
              </span>
            </button>

            {reduce ? (
              isOpen ? (
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className="mt-3 text-sm leading-7 text-brand-ink/80 sm:text-base"
                >
                  {item.a}
                </div>
              ) : null
            ) : (
              <AnimatePresence initial={false}>
                {isOpen ? (
                  <motion.div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="mt-3 text-sm leading-7 text-brand-ink/80 sm:text-base">
                      {item.a}
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            )}
          </div>
        );
      })}
    </div>
  );
}

