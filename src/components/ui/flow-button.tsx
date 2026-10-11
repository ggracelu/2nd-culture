"use client";

import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type FlowButtonProps = {
  text?: string;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
  children?: React.ReactNode;
};

const base =
  "group relative flex items-center justify-center gap-1 overflow-hidden rounded-[100px] border-[1.5px] px-6 py-3 text-sm font-semibold cursor-pointer transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:rounded-xl active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-robin focus-visible:ring-offset-2";

const variants = {
  primary:
    "border-brand-mahogany/70 bg-transparent text-brand-mahogany hover:bg-brand-sand hover:text-[color:var(--brand-cream)]",
  secondary:
    "border-brand-ink/40 bg-transparent text-brand-mahogany hover:bg-brand-sand hover:text-[color:var(--brand-cream)]",
};

export function FlowButton({
  text = "Button",
  href,
  variant = "secondary",
  className,
  children,
}: FlowButtonProps) {
  const label = children ?? text;
  const content = (
    <>
      <ArrowRight
        className="absolute left-[-25%] z-[9] h-4 w-4 fill-none stroke-current transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:left-4 group-hover:stroke-[color:var(--brand-cream)]"
        aria-hidden
      />
      <span className="relative z-[1] -translate-x-3 transition-all duration-[800ms] ease-out group-hover:translate-x-3">
        {label}
      </span>
      <span
        className={cn(
          "absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:h-[220px] group-hover:w-[220px] group-hover:opacity-100",
          variant === "primary" ? "bg-brand-mahogany" : "bg-brand-ink",
        )}
      />
      <ArrowRight
        className="absolute right-4 z-[9] h-4 w-4 fill-none stroke-current transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:right-[-25%] group-hover:stroke-[color:var(--brand-cream)]"
        aria-hidden
      />
    </>
  );

  const classes = cn(base, variants[variant], className);

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noreferrer" : undefined}
      >
        {content}
      </a>
    );
  }

  return <button type="button" className={classes}>{content}</button>;
}
