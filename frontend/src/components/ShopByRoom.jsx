import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { rooms } from "@/data/products";

export const ShopByRoom = () => {
  const [active, setActive] = useState(rooms[0]);

  return (
    <section
      id="rooms"
      data-testid="shop-by-room-section"
      className="scroll-mt-24 bg-cream py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Interior Inspiration"
          title="Shop by Room"
          copy="Every corner of an Indian home has a pot or vase that belongs in it. Find yours room by room."
          testid="rooms-heading"
        />
        <div className="mb-8 flex flex-wrap gap-2.5" role="tablist">
          {rooms.map((room) => (
            <button
              key={room.id}
              role="tab"
              aria-selected={active.id === room.id}
              data-testid={`room-tab-${room.id}`}
              onClick={() => setActive(room)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-300 ${
                active.id === room.id
                  ? "bg-ink text-sand"
                  : "border border-stone-300 bg-sand text-stone-600 hover:border-terra hover:text-terra"
              }`}
            >
              {room.label}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
          <div className="relative overflow-hidden rounded-[26px] lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.img
                key={active.id}
                src={active.url}
                alt={active.headline}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="aspect-[16/10] w-full object-cover"
                data-testid="room-active-image"
              />
            </AnimatePresence>
          </div>
          <div className="lg:col-span-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -12 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <h3
                  className="font-serif text-3xl font-semibold text-ink"
                  data-testid="room-active-headline"
                >
                  {active.headline}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-stone-600">
                  {active.copy}
                </p>
                <a
                  href="#pots"
                  data-testid="room-shop-btn"
                  className="group mt-6 inline-flex items-center gap-2.5 rounded-full bg-terra px-6 py-3.5 text-sm font-semibold text-sand transition-colors duration-300 hover:bg-clay"
                >
                  Shop {active.label} Pieces
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
