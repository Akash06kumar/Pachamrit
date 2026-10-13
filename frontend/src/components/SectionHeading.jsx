import { motion } from "framer-motion";

export const SectionHeading = ({
  eyebrow,
  title,
  copy,
  dark = false,
  testid,
}) => (
  <motion.div
    initial={{ opacity: 0, y: 28 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    className="mb-12 max-w-2xl sm:mb-16"
    data-testid={testid}
  >
    <p
      className={`mb-4 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] ${
        dark ? "text-limewash" : "text-clay"
      }`}
    >
      <span className="h-px w-10 bg-terra" />
      {eyebrow}
    </p>
    <h2
      className={`font-serif text-3xl font-medium leading-tight tracking-tight sm:text-4xl lg:text-5xl ${
        dark ? "text-sand" : "text-ink"
      }`}
    >
      {title}
    </h2>
    {copy && (
      <p
        className={`mt-4 text-base leading-relaxed ${
          dark ? "text-sand/70" : "text-stone-600"
        }`}
      >
        {copy}
      </p>
    )}
  </motion.div>
);
