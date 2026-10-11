import Image from "next/image";
import { Instagram, Youtube, ArrowRight } from "lucide-react";
import { NavBar } from "@/components/NavBar";
import React from "react";

function TikTokIcon({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      {...props}
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  );
}
import { Hero } from "@/components/Hero";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { FAQAccordion } from "@/components/FAQAccordion";
import { ABOUT_COPY, COMING_SOON_BUBBLE, FAQ, LINKS, OUR_STORY_FEATURES, VISUALS } from "@/lib/content";
import { FeatureSteps } from "@/components/ui/feature-section";
import { FlowButton } from "@/components/ui/flow-button";
import { Gallery4, type Gallery4Item } from "@/components/ui/gallery4";

// Current Menu section with interactive flyers
function CurrentMenuSection() {
  const [topIndex, setTopIndex] = React.useState(0);
  const flavors = [
    { name: "Mango Sticky Rice", bg: "#fff8e1" },
    { name: "Raspberry Matcha", bg: "#e8f5e9" },
    { name: "Black Sesame", bg: "#f3e5f5" },
    { name: "Seasonal Special", bg: "#fff3e0" },
  ];

  return (
    <Section id="current-menu" eyebrow="" title="Current menu" titleClassName="font-body font-bold text-3xl sm:text-4xl md:text-[3rem] lg:text-[3.5rem] uppercase tracking-[0.02em]" className="bg-[color:var(--brand-sand)]/25">
      <div className="relative">
        {/* Flyer stack */}
        {flavors.map((flavor, idx) => {
          const isTop = idx === topIndex;
          const zIndex = flavors.length - idx + (isTop ? 100 : 0);
          const offset = isTop ? 0 : (idx - topIndex + flavors.length) % flavors.length * 12; // offset for tabs
          return (
            <div
              key={idx}
              className={`absolute left-0 top-0 w-[300px] h-[400px] border border-brand-ink/20 rounded-2xl shadow-md bg-white/90 transition-transform duration-300`}
              style={{ zIndex, transform: `translateY(${offset}px)` }}
              onClick={() => {
                if (!isTop) setTopIndex(idx);
              }}
            >
              {/* Tab with flavor name */}
              {!isTop && (
                <div className="absolute left-0 top-[calc(100%-24px)] w-16 h-6 bg-brand-mahogany text-xs font-medium text-[color:var(--brand-cream)] flex items-center justify-center rounded-tr-none rounded-br-none">
                  {flavor.name}
                </div>
              )}
              {/* Flyer content placeholder */}
              <div className="flex h-full items-center justify-center text-brand-ink text-sm font-medium">
                {/* Placeholder for flyer */}
                <div className="w-[80%] h-[80%] border-dashed border-brand-ink/40 flex items-center justify-center">
                  {flavor.name}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

// Upcoming Pop-ups section with calendar
function UpcomingPopupsSection() {
  const [month, setMonth] = React.useState(9); // 0-index: 9 = October
  const [year, setYear] = React.useState(2026);
  const [selectedDay, setSelectedDay] = React.useState(null);

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const daysInMonth = (m: number, y: number) => new Date(y, m + 1, 0).getDate();
  const firstDayIndex = (m: number, y: number) => new Date(y, m, 1).getDay(); // 0 = Sunday

  const handlePrevMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };

  const handleNextMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };

  const isOctober = month === 9 && year === 2026;
  const isNovember = month === 10 && year === 2026;
  const isDecember = month === 11 && year === 2026;

  const handleDayClick = (day: number) => {
    if (isOctober && day === 18) {
      setSelectedDay(day);
    }
  };

  return (
    <Section id="upcoming-popups" eyebrow="" title="Upcoming Pop-ups" titleClassName="font-body font-bold text-3xl sm:text-4xl md:text-[3rem] lg:text-[3.5rem] uppercase tracking-[0.02em]" className="bg-[color:var(--brand-sand)]/25">
      <div className="mb-6 flex items-center justify-between">
        <button
          onClick={handlePrevMonth}
          className="rounded-full border border-brand-ink/20 bg-brand-ink/5 px-3 py-1 text-xs font-medium hover:bg-brand-ink/10"
        >
          ‹
        </button>
        <h2 className="text-2xl font-bold text-brand-ink">
          {monthNames[month]} {year}
        </h2>
        <button
          onClick={handleNextMonth}
          className="rounded-full border border-brand-ink/20 bg-brand-ink/5 px-3 py-1 text-xs font-medium hover:bg-brand-ink/10"
        >
          ›
        </button>
      </div>

      {/* Calendar weekday headers */}
      <div className="grid grid-cols-7 gap-2 text-xs font-medium text-brand-ink/75">
        {[ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ].map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>

      {/* Calendar days */}
      <div className="grid grid-cols-7 gap-2 mb-4">
        {(() => {
          const daysCount = daysInMonth(month, year);
          const startOffset = firstDayIndex(month, year);
          const cells = [];

          // blank cells before first day
          for (let i = 0; i < startOffset; i++) {
            cells.push(<div key={`blank-${i}`}></div>);
          }

          for (let day = 1; day <= daysCount; day++) {
            const isSelected = selectedDay === day;
            const isOct18 = isOctober && day === 18;
            const bgColor = isSelected ? "#fff3e0" : isOct18 ? "#ffecd1" : "transparent";
            const borderColor = isOct18 ? "border-2 border-brand-mahogany" : "";
            const cursor = isOct18 ? "pointer" : "default";
            cells.push(
              <div
                key={`day-${day}`}
                onClick={() => handleDayClick(day)}
                className={`rounded-md p-2 text-center text-brand-ink/80 ${bgColor} ${borderColor} cursor-${cursor}`}
              >
                {day}
              </div>
            );
          }

          // fill remaining cells to complete last week (optional)
          const totalCells = cells.length;
          const remaining = (7 - (totalCells % 7)) % 7;
          for (let i = 0; i < remaining; i++) {
            cells.push(<div key={`fill-${i}`}></div>);
          }

          return cells;
        })()}
      </div>

      {/* Selected day info */}
      {selectedDay === 18 && isOctober && (
        <div className="mt-4 p-4 bg-brand-cream/50 rounded-xl border border-brand-ink/20">
          <h3 className="font-semibold text-brand-mahogany">Oct 18 Pop‑up at Strangelove</h3>
          <p className="mt-2 text-brand-ink/80">
            2614 E Cesar Chavez St, Austin, TX 78702
          </p>
          <a
            href="https://www.google.com/maps/search/?api=1&query=2614+E+Cesar+Chavez+St+Austin+TX+78702"
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-brand-mahogany hover:underline"
          >
            View on Google Maps
            <ArrowRight className="h-3 w-3" aria-hidden="true" />
          </a>
        </div>
      )}

      {/* Coming soon banner for Nov/Dec */}
      {(isNovember || isDecember) && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="bg-black/40 text-white font-bold text-lg px-6 py-3 rounded-md">
            Coming soon
          </div>
        </div>
      )}
    </Section>
  );
}

const galleryItems: Gallery4Item[] = [
  { id: "g1", title: "Bowls with friends", description: "Yogurt bowls shared at a pop‑up.", href: "/photos/gallery-1.png", image: "/photos/gallery-1.png" },
  { id: "g2", title: "Ube crème brûlée", description: "Purple yam yogurt with brûléed topping.", href: "/photos/gallery-2.png", image: "/photos/gallery-2.png" },
  { id: "g3", title: "Scooping yogurt", description: "Double-strained yogurt from the batch.", href: "/photos/gallery-3.png", image: "/photos/gallery-3.png" },
  { id: "g4", title: "Brûlée in the kitchen", description: "Torching the topping.", href: "/photos/gallery-4.png", image: "/photos/gallery-4.png" },
  { id: "g5", title: "Matcha & mango", description: "Green yogurt with mango and syrup.", href: "/photos/gallery-5.png", image: "/photos/gallery-5.png" },
  { id: "g6", title: "Berry & peach bowl", description: "Creamy base with fresh fruit.", href: "/photos/gallery-6.png", image: "/photos/gallery-6.png" },
  { id: "g7", title: "Chocolate & strawberry", description: "Dark chocolate topping with sea salt.", href: "/photos/gallery-7.png", image: "/photos/gallery-7.png" },
  { id: "g8", title: "Signature bowl", description: "Yogurt bowl with berries and granola.", href: "/photos/gallery-8.png", image: "/photos/gallery-8.png" },
  { id: "g9", title: "Taro & pastries", description: "Lavender yogurt with Asian-inspired toppings.", href: "/photos/gallery-9.png", image: "/photos/gallery-9.png" },
  { id: "g10", title: "Bowls to go", description: "Ready to enjoy.", href: "/photos/gallery-10.png", image: "/photos/gallery-10.png" },
  { id: "g11", title: "Double-strained", description: "Yogurt straining in the fridge.", href: "/photos/gallery-11.png", image: "/photos/gallery-11.png" },
  { id: "lake", title: "Lakefront bowls", description: "Golden hour yogurt by the lake with friends.", href: VISUALS.heroImage.src, image: VISUALS.heroImage.src },
];

export default function Home() {
  return (
    <div className="min-h-dvh">
      <NavBar />
      <main>
        <Hero />
        <CurrentMenuSection />

        <Gallery4
          items={galleryItems}
          title=""
          description=""
          autoScrollInterval={2000}
        />

        <Section
          id="about"
          eyebrow="About Us"
          title={ABOUT_COPY.heading}
          titleClassName="font-body font-bold text-3xl sm:text-4xl md:text-[3rem] lg:text-[3.5rem] uppercase tracking-[0.02em]"
          className="bg-[color:var(--brand-cream)]"
        >
          <FeatureSteps
            features={[...OUR_STORY_FEATURES]}
            title={ABOUT_COPY.heading}
            showTitle={false}
            autoPlayInterval={2250}
            imageHeight="h-[400px]"
            className="p-0 md:p-4"
          />
        </Section>

        <UpcomingPopupsSection />

        <Section
          id="faq"
          eyebrow="FAQ"
          title="Everything you want to know"
          className="bg-[color:var(--brand-cream)]"
        >
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
            <Reveal>
              <FAQAccordion items={[...FAQ]} />
            </Reveal>
            <Reveal className="rounded-2xl border border-brand-ink/10 bg-white/80 p-6 shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-mahogany/90">
                Still have questions?
              </p>
              <p className="mt-3 text-base leading-7 text-brand-ink/80">
                DM us on Instagram — we’ll help you figure out the perfect bowl.
              </p>
              <FlowButton href={LINKS.instagram} text="Message @sec_culture" variant="secondary" className="mt-6" />
            </Reveal>
          </div>
        </Section>

        <Section
          id="socials"
          title="Keep up with us @sec_culture on all platforms"
          titleClassName="text-xl sm:text-2xl md:text-[1.5rem]"
          className="bg-[color:var(--brand-sand)]/25"
        >
          <Reveal>
            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
              <a
                href={LINKS.instagram}
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center gap-2 rounded-xl p-4 text-brand-ink transition hover:scale-105 hover:text-brand-mahogany focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-robin"
                aria-label="Follow @sec_culture on Instagram"
              >
                <Instagram className="h-10 w-10 sm:h-12 sm:w-12" aria-hidden="true" />
                <span className="text-sm font-medium">Instagram</span>
              </a>
              <a
                href={LINKS.tiktok}
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center gap-2 rounded-xl p-4 text-brand-ink transition hover:scale-105 hover:text-brand-mahogany focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-robin"
                aria-label="Follow @sec_culture on TikTok"
              >
                <TikTokIcon className="h-10 w-10 sm:h-12 sm:w-12" aria-hidden="true" />
                <span className="text-sm font-medium">TikTok</span>
              </a>
              <a
                href={LINKS.youtube}
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center gap-2 rounded-xl p-4 text-brand-ink transition hover:scale-105 hover:text-brand-mahogany focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-robin"
                aria-label="Follow @sec_culture on YouTube"
              >
                <Youtube className="h-10 w-10 sm:h-12 sm:w-12" aria-hidden="true" />
                <span className="text-sm font-medium">YouTube</span>
              </a>
            </div>
          </Reveal>
        </Section>

        <footer className="grain relative overflow-hidden bg-brand-mahogany text-[color:var(--brand-cream)]">
          <div className="mx-auto max-w-6xl px-5 py-10 sm:px-7 sm:py-12">
            <div className="mb-8">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--brand-cream)]/80">
                Second Culture Yogurt
              </p>
              <h2 className="mt-2 font-heading text-3xl tracking-tight sm:text-4xl">
                Ready for the next bowl?
              </h2>
              <p className="mt-3 max-w-xl text-base leading-7 text-[color:var(--brand-cream)]/85">
                Sign up for priority access to pre‑orders and pop‑up updates.
                DM us on Instagram with any questions!
              </p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
                <FlowButton
                  href={LINKS.interestForm}
                  text="Sign Up for Priority Access"
                  variant="primary"
                  className="text-base px-7 py-3.5"
                />
                <a
                  href={LINKS.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-base font-semibold text-[color:var(--brand-cream)] shadow-soft transition hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-robin active:scale-[0.99]"
                >
                  <Instagram className="h-4 w-4" aria-hidden="true" />
                  @sec_culture
                </a>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="rounded-3xl border border-white/15 bg-white/10 p-5 shadow-soft text-center max-w-sm w-full">
                <div className="flex flex-col items-center justify-center gap-3">
                  <Image
                    src="/brand/logo-sc.png"
                    alt=""
                    width={96}
                    height={96}
                    className="h-20 w-20 sm:h-24 sm:w-24"
                  />
                  <div>
                    <p className="font-[family-name:var(--font-playfair)] text-xl tracking-tight">
                      Second Culture
                    </p>
                    <p className="text-sm text-[color:var(--brand-cream)]/75">
                      {`© ${new Date().getFullYear()} Second Culture Yogurt`}
                    </p>
                  </div>
                </div>

                <div className="mt-4 space-y-1.5 text-sm text-[color:var(--brand-cream)]/80">
                  <p>
                    <span className="font-semibold text-[color:var(--brand-cream)]">
                      Interest form:
                    </span>{" "}
                    <a
                      href={LINKS.interestForm}
                      target="_blank"
                      rel="noreferrer"
                      className="underline underline-offset-4 hover:opacity-90"
                    >
                      Priority access sign‑up
                    </a>
                  </p>
                  <p>
                    <span className="font-semibold text-[color:var(--brand-cream)]">
                      Instagram:
                    </span>{" "}
                    <a
                      href={LINKS.instagram}
                      target="_blank"
                      rel="noreferrer"
                      className="underline underline-offset-4 hover:opacity-90"
                    >
                      @sec_culture
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
