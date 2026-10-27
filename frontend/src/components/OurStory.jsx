import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Leaf, Flame, PackageCheck } from "lucide-react";
import { storyImage } from "@/data/products";

const stats = [
  { icon: Leaf, label: "100% natural, no preservatives" },
  { icon: Flame, label: "Slow-roasted in small batches" },
  { icon: PackageCheck, label: "Ships fresh across India" },
];

export const OurStory = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section
      id="story"
      ref={ref}
      data-testid="our-story-section"
      className="scroll-mt-24 overflow-hidden bg-sand py-20 sm:py-28"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative lg:col-span-5"
        >
          <div className="arch-frame overflow-hidden shadow-[0_30px_60px_-25px_rgba(42,61,44,0.4)]">
            <motion.img
              src={storyImage}
              alt="Grinding roasted spices with a traditional mortar and pestle"
              style={{ y }}
              loading="lazy"
              className="aspect-[4/5] w-full scale-110 object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-2 rounded-2xl bg-terra px-6 py-4 text-sand shadow-xl sm:-right-6">
            <p className="font-serif text-3xl font-semibold">100%</p>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-sand/80">
              Natural Recipe
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7 lg:pl-8"
        >
          <p className="mb-4 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-clay">
            <span className="h-px w-10 bg-terra" />
            Our Story
          </p>
          <h2 className="font-serif text-3xl font-medium leading-tight tracking-tight text-olive sm:text-4xl lg:text-5xl">
            From our rasoi,{" "}
            <em className="italic text-terra">to your table.</em>
          </h2>
          <div className="mt-6 max-w-xl space-y-4 text-base leading-relaxed text-stone-600">
            <p>
              PachAmrit began with a recipe written in a grandmother's hand — the
              same churan that appeared on the table after every heavy family
              meal. When friends kept asking for "a little extra to take home",
              we knew it deserved a jar of its own.
            </p>
            <p>
              We still make it the slow way: whole spices dry-roasted in small
              batches, stone-ground for texture, and packed within days so the
              aroma hits you the moment you open the pack. No sugar, no
              preservatives, nothing you can't pronounce.
            </p>
          </div>
          <ul className="mt-8 space-y-3.5">
            {stats.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-3 text-sm font-medium text-ink"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cream text-terra">
                  <Icon className="h-4 w-4" />
                </span>
                {label}
              </li>
            ))}
          </ul>
          <p className="mt-9 font-serif text-2xl italic text-clay" data-testid="story-tagline">
            “Ancient recipe. Modern gut. Everyday relief.”
          </p>
        </motion.div>
      </div>
    </section>
  );
};
