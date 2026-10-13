import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowDown, MessageCircle } from "lucide-react";
import { heroImage, pots } from "@/data/products";
import { formatINR, waOrderLink } from "@/lib/whatsapp";

const EASE = [0.22, 1, 0.36, 1];

const MaskedLine = ({ children, delay = 0 }) => (
  <span className="block overflow-hidden pb-1">
    <motion.span
      className="block will-change-transform"
      initial={{ y: "112%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1, delay, ease: EASE }}
    >
      {children}
    </motion.span>
  </span>
);

export const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const cardY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  return (
    <section
      id="top"
      ref={ref}
      data-testid="hero-section"
      className="relative overflow-hidden pt-[76px]"
    >
      <div
        className="pointer-events-none absolute -right-40 top-24 h-[540px] w-[540px] rounded-full bg-limewash/60 blur-3xl"
        aria-hidden="true"
      />
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 pb-16 pt-12 sm:px-8 lg:grid-cols-12 lg:gap-8 lg:pb-24 lg:pt-20">
        <div className="relative z-10 lg:col-span-6">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
            className="mb-6 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-clay"
            data-testid="hero-eyebrow"
          >
            <span className="h-px w-10 bg-terra" />
            Handcrafted Cement · Clay · Stone
          </motion.p>

          <h1
            data-testid="hero-headline"
            className="font-serif text-5xl font-medium leading-[1.04] tracking-tight text-ink sm:text-6xl lg:text-7xl"
          >
            <MaskedLine delay={0.25}>Elevate Your</MaskedLine>
            <MaskedLine delay={0.4}>
              Space,{" "}
              <em className="font-medium italic text-terra">Naturally.</em>
            </MaskedLine>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65, ease: EASE }}
            className="mt-6 max-w-md text-base leading-relaxed text-stone-600 sm:text-lg"
            data-testid="hero-subcopy"
          >
            Discover sculptural cement pots, contemporary planters, and
            beautifully designed vases that bring character and calm to every
            corner of your home.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: EASE }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#pots"
              data-testid="hero-cta-pots"
              className="group inline-flex items-center gap-2.5 rounded-full bg-ink px-7 py-4 text-sm font-semibold text-sand transition-colors duration-300 hover:bg-terra"
            >
              Shop Pots & Planters
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#vases"
              data-testid="hero-cta-vases"
              className="inline-flex items-center gap-2.5 rounded-full border border-ink/25 px-7 py-4 text-sm font-semibold text-ink transition-colors duration-300 hover:border-terra hover:text-terra"
            >
              Explore Vases
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.05 }}
            className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-500"
            data-testid="hero-stats"
          >
            <span>Handcrafted in India</span>
            <span className="hidden h-1 w-1 rounded-full bg-terra sm:block" />
            <span>All-India Delivery</span>
            <span className="hidden h-1 w-1 rounded-full bg-terra sm:block" />
            <span>Zero-Plastic Packaging</span>
          </motion.div>
        </div>

        <div className="relative lg:col-span-6">
          <motion.div
            initial={{ clipPath: "inset(100% 0 0 0)" }}
            animate={{ clipPath: "inset(0% 0 0 0)" }}
            transition={{ duration: 1.2, delay: 0.35, ease: EASE }}
            className="arch-frame relative mx-auto aspect-[4/5] max-w-[520px] overflow-hidden shadow-[0_40px_80px_-30px_rgba(74,58,42,0.45)]"
          >
            <motion.img
              src={heroImage}
              alt="Sorrento marble and gold designer vases styled with roses and pampas grass"
              style={{ y: imgY }}
              className="h-[112%] w-full scale-105 object-cover"
              data-testid="hero-image"
              loading="eager"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-transparent" />
          </motion.div>

          <motion.div
            style={{ y: cardY }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.1, ease: EASE }}
            className="absolute bottom-6 left-0 flex items-center gap-4 rounded-2xl border border-white/50 bg-sand/85 p-4 pr-3 shadow-xl backdrop-blur-xl sm:bottom-10 sm:left-4"
            data-testid="hero-featured-card"
          >
            <img
              src={pots[0].images[0]}
              alt={pots[0].name}
              className="h-14 w-14 rounded-xl object-cover"
              loading="lazy"
            />
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-clay">
                Bestseller
              </p>
              <p className="font-serif text-base font-semibold text-ink">
                {pots[0].name}
              </p>
              <p className="text-sm font-semibold text-terra">
                {formatINR(pots[0].price)}
              </p>
            </div>
            <a
              href={waOrderLink(pots[0], 1)}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="hero-featured-order-btn"
              aria-label={`Order ${pots[0].name} on WhatsApp`}
              className="ml-2 inline-flex h-11 w-11 items-center justify-center rounded-full bg-wa text-white transition-colors duration-300 hover:bg-wahover"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="pointer-events-none absolute bottom-5 left-1/2 hidden -translate-x-1/2 lg:block"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
        >
          <ArrowDown className="h-5 w-5 text-stone-400" />
        </motion.div>
      </motion.div>
    </section>
  );
};
