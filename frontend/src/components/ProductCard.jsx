import { useState } from "react";
import { motion } from "framer-motion";
import { Eye, MessageCircle, Minus, Plus, X, Truck, Leaf } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { formatINR, waOrderLink, waQuestionLink } from "@/lib/whatsapp";

const swatch = (color) => {
  const c = color.toLowerCase();
  if (c.includes("black") || c.includes("obsidian") || c.includes("charcoal") || c.includes("onyx") || c.includes("nero") || c.includes("midnight"))
    return "#26221f";
  if (c.includes("white") || c.includes("ivory") || c.includes("bone") || c.includes("chalk") || c.includes("cream") || c.includes("carrara"))
    return "#f2ede4";
  if (c.includes("terracotta") || c.includes("ochre") || c.includes("ember")) return "#c06b41";
  if (c.includes("olive") || c.includes("sage")) return "#7a8471";
  if (c.includes("blue") || c.includes("indigo") || c.includes("mist") || c.includes("sapphire"))
    return "#8fa3b8";
  if (c.includes("grey") || c.includes("gray") || c.includes("slate") || c.includes("fog"))
    return "#9a958c";
  if (c.includes("brass") || c.includes("gold")) return "#c39a4e";
  if (c.includes("clay") || c.includes("taupe")) return "#a98a72";
  if (c.includes("steel")) return "#aeb4b8";
  if (c.includes("sand")) return "#d9c9ae";
  if (c.includes("garden") || c.includes("multi")) return "#7a5a8c";
  return "#b8ad9c";
};

export const QuickView = ({ product, open, onClose }) => {
  const [qty, setQty] = useState(1);
  const [imgIdx, setImgIdx] = useState(0);
  const close = () => {
    setQty(1);
    setImgIdx(0);
    onClose();
  };
  return (
    <Dialog open={open} onOpenChange={(v) => !v && close()}>
      <DialogContent
        className="max-w-3xl gap-0 overflow-hidden rounded-3xl border-stone-200 bg-sand p-0"
        data-testid={`${product.id}-quick-view-modal`}
      >
        <button
          onClick={close}
          data-testid={`${product.id}-quick-view-close-btn`}
          className="absolute right-4 top-4 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-ink/70 text-sand backdrop-blur transition-colors hover:bg-terra"
          aria-label="Close quick view"
        >
          <X className="h-4 w-4" />
        </button>
        <div className="grid md:grid-cols-2">
          <div className="flex flex-col">
            <div className="relative aspect-[4/5] md:flex-1">
              <img
                src={product.images[imgIdx]}
                alt={`${product.name} — photo ${imgIdx + 1}`}
                className="absolute inset-0 h-full w-full object-cover"
                data-testid={`${product.id}-modal-image`}
              />
              {product.tag && (
                <span className="absolute left-4 top-4 rounded-full bg-ink/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-sand backdrop-blur">
                  {product.tag}
                </span>
              )}
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-2.5 bg-cream/60 p-3" data-testid={`${product.id}-modal-thumbnails`}>
                {product.images.map((src, i) => (
                  <button
                    key={src}
                    type="button"
                    onClick={() => setImgIdx(i)}
                    data-testid={`${product.id}-thumb-${i}`}
                    aria-label={`View photo ${i + 1}`}
                    className={`relative h-16 w-16 overflow-hidden rounded-xl border-2 transition-colors ${
                      i === imgIdx ? "border-terra" : "border-transparent opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img src={src} alt="" className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className="flex flex-col p-7 sm:p-9">
            <DialogDescription className="text-[10px] font-semibold uppercase tracking-[0.24em] text-clay">
              {product.category}
            </DialogDescription>
            <DialogTitle className="mt-2 font-serif text-2xl font-semibold leading-snug text-ink sm:text-3xl">
              {product.name}
            </DialogTitle>
            <p className="mt-3 font-serif text-2xl font-semibold text-terra" data-testid={`${product.id}-quick-view-price`}>
              {formatINR(product.price)}
            </p>
            <dl className="mt-5 space-y-2.5 border-y border-stone-200 py-5 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-stone-500">Dimensions</dt>
                <dd className="font-medium text-ink">{product.dimensions}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-stone-500">Finish</dt>
                <dd className="text-right font-medium text-ink">{product.finish}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-stone-500">Availability</dt>
                <dd className="font-medium text-olive">{product.availability}</dd>
              </div>
            </dl>
            <div className="mt-5">
              <p className="mb-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
                Available Finishes
              </p>
              <div className="flex flex-wrap gap-2.5">
                {product.colors.map((c) => (
                  <span
                    key={c}
                    className="flex items-center gap-2 rounded-full border border-stone-200 bg-white px-3 py-1.5 text-xs font-medium text-stone-600"
                  >
                    <span
                      className="h-3.5 w-3.5 rounded-full border border-stone-300"
                      style={{ backgroundColor: swatch(c) }}
                    />
                    {c}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-6 flex items-center gap-4">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
                Qty
              </span>
              <div className="flex items-center rounded-full border border-stone-300">
                <button
                  type="button"
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  data-testid={`${product.id}-qty-minus-btn`}
                  className="inline-flex h-9 w-9 items-center justify-center text-stone-600 transition-colors hover:text-terra"
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span
                  className="w-8 text-center text-sm font-semibold"
                  data-testid={`${product.id}-qty-value`}
                >
                  {qty}
                </span>
                <button
                  type="button"
                  onClick={() => setQty((q) => Math.min(9, q + 1))}
                  data-testid={`${product.id}-qty-plus-btn`}
                  className="inline-flex h-9 w-9 items-center justify-center text-stone-600 transition-colors hover:text-terra"
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>
            <div className="mt-6 flex flex-col gap-3">
              <a
                href={waOrderLink(product, qty)}
                target="_blank"
                rel="noopener noreferrer"
                data-testid={`${product.id}-modal-whatsapp-order-btn`}
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-wa px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-wahover"
              >
                <MessageCircle className="h-4 w-4" />
                Order {qty > 1 ? `${qty} ` : ""}on WhatsApp —{" "}
                {formatINR(product.price * qty)}
              </a>
              <a
                href={waQuestionLink(product)}
                target="_blank"
                rel="noopener noreferrer"
                data-testid={`${product.id}-modal-ask-question-btn`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/25 px-6 py-3 text-sm font-semibold text-ink transition-colors duration-300 hover:border-terra hover:text-terra"
              >
                Ask a Question
              </a>
            </div>
            <div className="mt-6 space-y-1.5 text-xs text-stone-500">
              <p className="flex items-center gap-2">
                <Truck className="h-3.5 w-3.5 text-terra" />
                Ships across India in impact-safe packaging
              </p>
              <p className="flex items-center gap-2">
                <Leaf className="h-3.5 w-3.5 text-terra" />
                Wipe with a soft dry cloth · sealed for indoor & balcony use
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export const ProductCard = ({ product, index = 0, onQuickView }) => {
  const [open, setOpen] = useState(false);
  const openQuickView = () =>
    onQuickView ? onQuickView(product) : setOpen(true);
  return (
    <motion.article
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.7,
        delay: (index % 4) * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group"
      data-testid={`${product.id}-card`}
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-[22px] bg-cream">
        <img
          src={product.images[0]}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        {product.tag && (
          <span className="absolute left-4 top-4 rounded-full bg-sand/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-ink backdrop-blur">
            {product.tag}
          </span>
        )}
        {product.images.length > 1 && (
          <span className="absolute right-4 top-4 rounded-full bg-ink/60 px-2.5 py-1 text-[10px] font-semibold text-sand backdrop-blur">
            {product.images.length} photos
          </span>
        )}
        <button
          type="button"
          onClick={openQuickView}
          data-testid={`${product.id}-quick-view-btn`}
          className="absolute bottom-4 left-1/2 flex -translate-x-1/2 translate-y-3 items-center gap-2 rounded-full bg-sand/95 px-5 py-2.5 text-xs font-semibold text-ink opacity-0 shadow-lg backdrop-blur transition-all duration-300 hover:bg-ink hover:text-sand group-hover:translate-y-0 group-hover:opacity-100"
        >
          <Eye className="h-3.5 w-3.5" />
          Quick View
        </button>
      </div>
      <div className="pt-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-clay">
              {product.finish}
            </p>
            <h3 className="mt-1.5 font-serif text-xl font-semibold leading-snug text-ink">
              {product.name}
            </h3>
          </div>
          <p
            className="whitespace-nowrap font-serif text-xl font-semibold text-terra"
            data-testid={`${product.id}-price`}
          >
            {formatINR(product.price)}
          </p>
        </div>
        <p className="mt-1.5 text-xs text-stone-500">
          {product.dimensions} ·{" "}
          <span className="font-medium text-olive">{product.availability}</span>
        </p>
        <div className="mt-4 flex gap-2.5">
          <a
            href={waOrderLink(product, 1)}
            target="_blank"
            rel="noopener noreferrer"
            data-testid={`${product.id}-whatsapp-order-btn`}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-wa px-4 py-2.5 text-xs font-semibold text-white transition-colors duration-300 hover:bg-wahover"
          >
            <MessageCircle className="h-3.5 w-3.5" />
            Order on WhatsApp
          </a>
          <a
            href={waQuestionLink(product)}
            target="_blank"
            rel="noopener noreferrer"
            data-testid={`${product.id}-ask-question-btn`}
            className="inline-flex items-center justify-center rounded-full border border-ink/20 px-4 py-2.5 text-xs font-semibold text-ink transition-colors duration-300 hover:border-terra hover:text-terra"
          >
            Ask
          </a>
        </div>
      </div>
      {!onQuickView && (
        <QuickView product={product} open={open} onClose={() => setOpen(false)} />
      )}
    </motion.article>
  );
};
