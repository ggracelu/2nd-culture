"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export interface Gallery4Item {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
}

export interface Gallery4Props {
  title?: string;
  description?: string;
  items: Gallery4Item[];
  /** Auto-advance interval in ms; 0 = off */
  autoScrollInterval?: number;
}

const Gallery4 = ({
  title = "Bowls & pop‑ups",
  description = "A peek at some of our favorite bowls and pop‑up moments.",
  items,
  autoScrollInterval = 4000,
}: Gallery4Props) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!carouselApi) return;
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
      setCurrentSlide(carouselApi.selectedScrollSnap());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  useEffect(() => {
    if (!carouselApi || !autoScrollInterval || items.length <= 1) return;
    const prefersReducedMotion = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;
    const timer = setInterval(() => {
      if (carouselApi.canScrollNext()) {
        carouselApi.scrollNext();
      } else {
        carouselApi.scrollTo(0);
      }
    }, autoScrollInterval);
    return () => clearInterval(timer);
  }, [carouselApi, autoScrollInterval, items.length]);

  return (
    <section id="gallery" className="scroll-mt-24 bg-[color:var(--brand-sand)]/25 py-8 sm:py-10">
      <div className="mx-auto flex max-w-6xl items-end justify-between px-5 sm:px-7">
        <div className="flex flex-col gap-3">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-mahogany/90">
            Gallery
          </p>
          {title ? (
            <h2 className="font-heading text-3xl leading-tight tracking-tight text-brand-ink sm:text-4xl">
              {title}
            </h2>
          ) : null}
          {description ? (
            <p className="max-w-xl text-sm leading-7 text-brand-ink/75 sm:text-base">
              {description}
            </p>
          ) : null}
        </div>
        <div className="hidden shrink-0 gap-2 md:flex">
          <Button
            size="icon"
            variant="ghost"
            onClick={() => carouselApi?.scrollPrev()}
            disabled={!canScrollPrev}
            className="disabled:pointer-events-auto"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <Button
            size="icon"
            variant="ghost"
            onClick={() => carouselApi?.scrollNext()}
            disabled={!canScrollNext}
            className="disabled:pointer-events-auto"
          >
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
      <div className="mt-4 w-full">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            breakpoints: {
              "(max-width: 768px)": {
                dragFree: true,
              },
            },
          }}
        >
          <CarouselContent className="ml-0 px-5 sm:px-7">
            {items.map((item) => (
              <CarouselItem
                key={item.id}
                className="max-w-[320px] pl-[20px] lg:max-w-[360px]"
              >
                <a
                  href={item.href}
                  className="group rounded-xl"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="group relative h-full min-h-[22rem] max-w-full overflow-hidden rounded-2xl border border-black/8 bg-white/85 shadow-soft md:aspect-[5/4] lg:aspect-[16/9]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width:768px) 80vw, 360px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/30 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-4 text-[color:var(--brand-cream)] md:p-5">
                      <div className="mb-1 text-sm font-semibold uppercase tracking-[0.2em] text-brand-sand/80">
                        {item.id}
                      </div>
                      <div className="mb-1 text-lg font-semibold md:text-xl">
                        {item.title}
                      </div>
                      <div className="mb-3 line-clamp-2 text-sm text-[color:var(--brand-cream)]/85">
                        {item.description}
                      </div>
                    </div>
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="mt-6 flex justify-center gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full transition-colors ${
                currentSlide === index ? "bg-brand-mahogany" : "bg-brand-mahogany/20"
              }`}
              onClick={() => carouselApi?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export { Gallery4 };

