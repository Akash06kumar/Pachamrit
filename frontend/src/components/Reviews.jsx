import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { reviews } from "@/data/products";

export const Reviews = () => (
  <section
    id="reviews"
    data-testid="reviews-section"
    className="scroll-mt-24 bg-limewash/40 py-20 sm:py-28"
  >
    <div className="mx-auto max-w-7xl px-5 sm:px-8">
      <SectionHeading
        eyebrow="Happy Guts"
        title="Loved at Dinner Tables Across India"
        copy="Unedited words from customers who ordered on WhatsApp and made PachAmrit their after-meal ritual."
        testid="reviews-heading"
      />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3" data-testid="reviews-grid">
        {reviews.map((r, i) => (
          <motion.figure
            key={r.id}
            data-testid={`review-card-${r.id}`}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.7,
              delay: i * 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative rounded-[22px] border border-limewash bg-sand p-7 shadow-[0_16px_40px_-24px_rgba(42,61,44,0.35)]"
          >
            <Quote className="h-7 w-7 text-terra/40" />
            <div
              className="mt-3 flex gap-1"
              aria-label={`${r.rating} out of 5 stars`}
            >
              {Array.from({ length: r.rating }).map((_, s) => (
                <Star key={s} className="h-4 w-4 fill-terra text-terra" />
              ))}
            </div>
            <blockquote className="mt-4 font-serif text-lg leading-relaxed text-ink">
              {r.text}
            </blockquote>
            <figcaption className="mt-5 text-sm">
              <span className="font-semibold text-ink">{r.name}</span>
              <span className="text-stone-500"> — {r.city}</span>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </div>
  </section>
);
