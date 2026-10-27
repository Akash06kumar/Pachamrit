import { motion } from "framer-motion";
import { Wind, Flame, ShieldCheck, Leaf, MessageCircle } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { waGeneralLink } from "@/lib/whatsapp";

const benefits = [
  {
    icon: Wind,
    title: "Relieves Bloating & Gas",
    copy: "Ajwain and jeera break down trapped gas so your stomach feels flat and light again.",
  },
  {
    icon: Flame,
    title: "Kindles Digestive Fire",
    copy: "Sonth (dry ginger) stokes Agni — helping your body process heavy meals with ease.",
  },
  {
    icon: ShieldCheck,
    title: "Soothes Acidity",
    copy: "Saunf and black salt calm the stomach lining and cool post-meal burning.",
  },
  {
    icon: Leaf,
    title: "100% Natural, Always",
    copy: "No added sugar, no preservatives, no chemicals. Just six roasted kitchen spices.",
  },
];

export const Benefits = () => (
  <section
    id="benefits"
    data-testid="benefits-section"
    className="scroll-mt-24 bg-olive py-20 text-sand sm:py-28"
  >
    <div className="mx-auto max-w-7xl px-5 sm:px-8">
      <SectionHeading
        eyebrow="Why PachAmrit"
        title="One Spoon After Meals"
        copy="A pinch of kitchen wisdom that works harder than an antacid — gently, every single day."
        dark
        testid="benefits-heading"
      />
      <div
        className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        data-testid="benefits-grid"
      >
        {benefits.map(({ icon: Icon, title, copy }, i) => (
          <motion.div
            key={title}
            data-testid={`benefit-card-${i}`}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.7,
              delay: i * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="rounded-[22px] border border-sand/15 bg-sand/5 p-7 transition-colors duration-300 hover:border-terra/50"
          >
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-terra/15 text-terra">
              <Icon className="h-5 w-5" />
            </span>
            <h3 className="mt-5 font-serif text-xl font-semibold leading-snug">
              {title}
            </h3>
            <p className="mt-2.5 text-sm leading-relaxed text-sand/70">{copy}</p>
          </motion.div>
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
          href={waGeneralLink()}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="benefits-whatsapp-cta"
          className="inline-flex items-center gap-2.5 rounded-full bg-wa px-7 py-4 text-sm font-semibold text-white transition-colors duration-300 hover:bg-wahover"
        >
          <MessageCircle className="h-4 w-4" />
          Order on WhatsApp
        </a>
      </motion.div>
    </div>
  </section>
);
