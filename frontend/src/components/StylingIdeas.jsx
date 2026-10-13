import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { stylingIdeas } from "@/data/products";
import { waLookLink } from "@/lib/whatsapp";

export const StylingIdeas = () => (
  <section
    id="styling"
    data-testid="styling-ideas-section"
    className="scroll-mt-24 bg-sand py-20 sm:py-28"
  >
    <div className="mx-auto max-w-7xl px-5 sm:px-8">
      <SectionHeading
        eyebrow="Styling Journal"
        title="Best Styling Ideas for Pots & Vases"
        copy="Three arrangements our stylists return to — steal them, then make them yours."
        testid="styling-heading"
      />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3" data-testid="styling-grid">
        {stylingIdeas.map((idea, i) => (
          <motion.article
            key={idea.id}
            data-testid={`styling-tip-card-${idea.id}`}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.7,
              delay: i * 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={`group ${i === 1 ? "md:mt-12" : ""}`}
          >
            <div className="relative overflow-hidden rounded-[22px]">
              <div className="aspect-[4/5]">
                <img
                  src={idea.url}
                  alt={idea.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                />
              </div>
              <span className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-sand/90 font-serif text-base font-semibold text-ink backdrop-blur">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="pt-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-clay">
                {idea.products}
              </p>
              <h3 className="mt-1.5 font-serif text-2xl font-semibold text-ink">
                {idea.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">
                {idea.copy}
              </p>
              <a
                href={waLookLink(idea.title)}
                target="_blank"
                rel="noopener noreferrer"
                data-testid={`styling-shop-look-btn-${idea.id}`}
                className="mt-3.5 inline-flex items-center gap-1.5 text-sm font-semibold text-terra transition-colors hover:text-clay"
              >
                Shop this look on WhatsApp
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);
