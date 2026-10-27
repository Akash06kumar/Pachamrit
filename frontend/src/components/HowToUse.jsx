import { motion } from "framer-motion";
import { UtensilsCrossed, GlassWater, CalendarCheck } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { lifestyleImage } from "@/data/products";

const steps = [
  {
    icon: UtensilsCrossed,
    title: "After Meals",
    copy: "Take ½ to 1 teaspoon of PachAmrit right after lunch or dinner — straight off the spoon.",
  },
  {
    icon: GlassWater,
    title: "With Warm Water",
    copy: "Chase it with warm water or stir it into chaas. Also lovely sprinkled over salads and fruit chaat.",
  },
  {
    icon: CalendarCheck,
    title: "Twice Daily",
    copy: "Stay consistent for 2–3 weeks. Most people notice lighter, easier digestion within days.",
  },
];

export const HowToUse = () => (
  <section
    id="how-to-use"
    data-testid="how-to-use-section"
    className="scroll-mt-24 bg-sand py-20 sm:py-28"
  >
    <div className="mx-auto max-w-7xl px-5 sm:px-8">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <SectionHeading
            eyebrow="How to Use"
            title="Simple as Salt on the Table"
            copy="No brewing, no capsules, no routine to remember — keep the jar where you eat."
            testid="how-to-use-heading"
          />
          <div className="space-y-5" data-testid="how-to-use-steps">
            {steps.map(({ icon: Icon, title, copy }, i) => (
              <motion.div
                key={title}
                data-testid={`how-to-step-${i}`}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="flex items-start gap-5 rounded-[20px] border border-limewash bg-white/60 p-6"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-olive text-sand">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-clay">
                    Step {i + 1}
                  </p>
                  <h3 className="mt-1 font-serif text-xl font-semibold text-olive">
                    {title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-stone-600">
                    {copy}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5"
        >
          <div className="arch-frame overflow-hidden shadow-[0_30px_60px_-25px_rgba(42,61,44,0.4)]">
            <img
              src={lifestyleImage}
              alt="An Indian family sharing a meal with PachAmrit churan on the table"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);
