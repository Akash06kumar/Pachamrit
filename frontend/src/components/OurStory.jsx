import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Leaf, Hammer, PackageCheck } from "lucide-react";
import { storyImage } from "@/data/products";

const stats = [
  { icon: Hammer, label: "Hand-cast in small batches" },
  { icon: Leaf, label: "Natural pigments, zero plastic" },
  { icon: PackageCheck, label: "Impact-safe, all-India delivery" },
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
          <div className="arch-frame overflow-hidden shadow-[0_30px_60px_-25px_rgba(74,58,42,0.4)]">
            <motion.img
              src={storyImage}
              alt="Artisan hands shaping raw clay in the Avora Homes studio"
              style={{ y }}
              loading="lazy"
              className="aspect-[4/5] w-full scale-110 object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-2 rounded-2xl bg-terra px-6 py-4 text-sand shadow-xl sm:-right-6">
            <p className="font-serif text-3xl font-semibold">2019</p>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-sand/80">
              Est. Studio
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
          <h2 className="font-serif text-3xl font-medium leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
            Born from earth,{" "}
            <em className="italic text-terra">finished by hand.</em>
          </h2>
          <div className="mt-6 max-w-xl space-y-4 text-base leading-relaxed text-stone-600">
            <p>
              Avora Homes began in a small workshop with one belief — that the
              objects holding your plants and flowers should be as considered as
              the rooms they live in. Every cement pot is hand-cast, cured
              slowly, and burnished until the surface holds light the way raw
              earth does.
            </p>
            <p>
              We work with natural pigments, reclaimed stone dust, and
              zero-plastic packaging, so what arrives at your door is honest —
              sculptural pots, beautiful vases, and paintings made by people,
              not production lines.
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
            “Sculptural Pots. Beautiful Vases. Thoughtful Living.”
          </p>
        </motion.div>
      </div>
    </section>
  );
};
