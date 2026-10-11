import { cn } from "@/lib/cn";

export function Section({
  id,
  eyebrow,
  title,
  titleClassName,
  children,
  className,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  titleClassName?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-24 py-20 sm:py-24", className)}
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-7">
        <div className="mb-10 max-w-2xl">
          {eyebrow ? (
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-brand-mahogany/90">
              {eyebrow}
            </p>
          ) : null}
          <h2 className={cn("font-heading leading-tight tracking-tight text-brand-ink", titleClassName ?? "text-3xl sm:text-4xl md:text-[2.5rem]")}>
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}

