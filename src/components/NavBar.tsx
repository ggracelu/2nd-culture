"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/cn";
import { LINKS } from "@/lib/content";
import { FlowButton } from "@/components/ui/flow-button";

const NAV_ITEMS = [
  { href: "#about", label: "About Us" },
  { href: "#menu", label: "Menu" },
  { href: "#faq", label: "FAQ" },
  { href: "#socials", label: "Follow" },
] as const;

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const containerClass = useMemo(
    () =>
      cn(
        "fixed inset-x-0 top-0 z-50 transition-colors",
        scrolled
          ? "bg-[color:var(--brand-cream)]/92 backdrop-blur border-b border-black/5"
          : "bg-transparent",
      ),
    [scrolled],
  );

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className={containerClass}>
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-5 sm:px-7">
        <Link
          href="#top"
          className="flex items-center gap-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-robin"
          aria-label="Second Culture Yogurt"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/brand/logo-sc.png"
            alt=""
            width={36}
            height={36}
            className="h-9 w-9"
            priority
          />
          <span className="hidden font-heading text-lg tracking-tight text-brand-ink sm:inline">
            Second Culture
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative text-sm font-medium text-brand-ink/85 transition-colors hover:text-brand-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-robin rounded-md px-1 py-1"
            >
              {item.label}
              <span className="pointer-events-none absolute -bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-brand-brick transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <FlowButton
            href={LINKS.interestForm}
            text="Order Now"
            variant="primary"
            className="hidden text-sm md:inline-flex"
          />
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-brand-ink md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-robin"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={cn(
          "md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out",
          open ? "max-h-[460px] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="mx-auto max-w-6xl px-5 pb-5 sm:px-7">
          <div className="rounded-2xl border border-black/5 bg-[color:var(--brand-cream)] shadow-soft">
            <div className="flex flex-col p-4">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-3 py-3 text-base font-medium text-brand-ink/90 hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-robin"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <FlowButton
                href={LINKS.interestForm}
                text="Sign Up for Priority Access"
                variant="primary"
                className="mt-2 w-full justify-center text-base"
              />
              <a
                href={LINKS.instagram}
                target="_blank"
                rel="noreferrer"
                className="mt-2 rounded-lg px-3 py-3 text-base font-medium text-brand-ink/80 hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-robin"
                onClick={() => setOpen(false)}
              >
                Follow @sec_culture
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

