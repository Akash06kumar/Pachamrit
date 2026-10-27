import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { ingredients } from "@/data/products";

export const Ingredients = () => (
  <section
    id="ingredients"
    data-testid="ingredients-section"
    className="scroll-mt-24 bg-cream py-20 sm:py-28"
  >
    <div className="mx-auto max-w-7xl px-5 sm:px-8">
      <SectionHeading
        eyebrow="What's Inside"
        title="Six Ingredients. Nothing Else."
        copy="Every spoon of PachAmrit is slow-roasted and stone-ground from spices your grandmother would recognise — no fillers, no shortcuts."
        testid="ingredients-heading"
      />
      <div
        className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3"
        data-testid="ingredients-grid"
      >
        {ingredients.map((ing, i) => (
          <motion.article
            key={ing.id}
            data-testid={`ingredient-card-${ing.id}`}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.7,
              delay: (i % 3) * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-[22px]">
              <img
                src={ing.url}
                alt={ing.name}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
              />
              <span className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-sand/90 font-serif text-sm font-semibold text-olive backdrop-blur">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="pt-5">
              <h3 className="font-serif text-2xl font-semibold text-olive">
                {ing.name}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-stone-600">
                {ing.benefit}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);
