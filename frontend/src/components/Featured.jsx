import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { featured } from "@/data/products";
import { formatINR, waOrderLink } from "@/lib/whatsapp";

export const Featured = () => (
  <section
    id="featured"
    data-testid="featured-section"
    className="scroll-mt-24 bg-ink py-20 text-sand sm:py-28"
  >
    <div className="mx-auto max-w-7xl px-5 sm:px-8">
      <SectionHeading
        eyebrow="The Cement Edit"
        title="Featured Pots & Vases"
        copy="Four pieces our studio casts again and again — the sculptural anchors of a hundred Indian living rooms."
        dark
        testid="featured-heading"
      />
      <div
        className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        data-testid="featured-grid"
      >
        {featured.map((p, i) => (
          <motion.a
            key={p.id}
            href={waOrderLink(p, 1)}
            target="_blank"
            rel="noopener noreferrer"
            data-testid={`featured-card-${p.id}`}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.7,
              delay: i * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group relative block overflow-hidden rounded-[22px]"
          >
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={p.images[0]}
                alt={p.name}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.07]"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/15 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-limewash">
                {p.category}
              </p>
              <h3 className="mt-1 font-serif text-lg font-semibold leading-snug">
                {p.name}
              </h3>
              <div className="mt-2 flex items-center justify-between">
                <span className="font-serif text-lg font-semibold text-terra">
                  {formatINR(p.price)}
                </span>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-wa text-white transition-transform duration-300 group-hover:scale-110">
                  <MessageCircle className="h-4 w-4" />
                </span>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-12 flex justify-center"
      >
        <a
          href="#pots"
          data-testid="featured-discover-collection-btn"
          className="group inline-flex items-center gap-2.5 rounded-full border border-sand/30 px-7 py-3.5 text-sm font-semibold text-sand transition-colors duration-300 hover:border-terra hover:text-terra"
        >
          Discover the Cement Collection
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </motion.div>
    </div>
  </section>
);
