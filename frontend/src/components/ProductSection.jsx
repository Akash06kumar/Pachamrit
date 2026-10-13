import { useMemo, useState } from "react";
import { RotateCcw } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { ProductCard } from "./ProductCard";
import {
  priceFilters,
  sizeFilters,
  materialFilters,
  colourFilters,
} from "@/data/products";

const Pill = ({ active, onClick, testid, children }) => (
  <button
    type="button"
    onClick={onClick}
    data-testid={testid}
    className={`rounded-full px-4 py-2 text-xs font-semibold transition-colors duration-300 ${
      active
        ? "bg-ink text-sand"
        : "border border-stone-300 bg-white/60 text-stone-600 hover:border-terra hover:text-terra"
    }`}
  >
    {children}
  </button>
);

const FilterBar = ({ sectionId, filters, setFilter, reset, activeCount }) => (
  <div
    className="mb-10 space-y-4 rounded-[22px] border border-stone-200 bg-white/50 p-5 sm:p-6"
    data-testid={`${sectionId}-filters`}
  >
    <div className="flex flex-wrap items-center gap-2">
      <span className="mr-1 w-16 text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-400">
        Price
      </span>
      {priceFilters.map((f) => (
        <Pill
          key={f.id}
          active={filters.price === f.id}
          onClick={() => setFilter("price", f.id)}
          testid={`${sectionId}-filter-price-${f.id}`}
        >
          {f.label}
        </Pill>
      ))}
    </div>
    <div className="flex flex-wrap items-center gap-2">
      <span className="mr-1 w-16 text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-400">
        Size
      </span>
      {sizeFilters.map((s) => (
        <Pill
          key={s}
          active={filters.size === s}
          onClick={() => setFilter("size", s)}
          testid={`${sectionId}-filter-size-${s.toLowerCase().replace(/\s+/g, "-")}`}
        >
          {s}
        </Pill>
      ))}
    </div>
    <div className="flex flex-wrap items-center gap-2">
      <span className="mr-1 w-16 text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-400">
        Material
      </span>
      {materialFilters.map((m) => (
        <Pill
          key={m}
          active={filters.material === m}
          onClick={() => setFilter("material", m)}
          testid={`${sectionId}-filter-material-${m.toLowerCase().replace(/\s+/g, "-")}`}
        >
          {m}
        </Pill>
      ))}
    </div>
    <div className="flex flex-wrap items-center gap-2">
      <span className="mr-1 w-16 text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-400">
        Colour
      </span>
      {colourFilters.map((c) => (
        <Pill
          key={c}
          active={filters.colour === c}
          onClick={() => setFilter("colour", c)}
          testid={`${sectionId}-filter-colour-${c.toLowerCase().replace(/[\s&]+/g, "-")}`}
        >
          {c}
        </Pill>
      ))}
    </div>
    {activeCount > 0 && (
      <button
        type="button"
        onClick={reset}
        data-testid={`${sectionId}-filter-reset-btn`}
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-terra transition-colors hover:text-clay"
      >
        <RotateCcw className="h-3.5 w-3.5" />
        Clear all filters
      </button>
    )}
  </div>
);

const DEFAULT_FILTERS = {
  price: "all",
  size: "All Sizes",
  material: "All Materials",
  colour: "All Colours",
};

export const ProductSection = ({
  id,
  eyebrow,
  title,
  copy,
  products,
  tone = "light",
  columns = "sm:grid-cols-2 lg:grid-cols-4",
  filterable = false,
}) => {
  const dark = tone === "dark";
  const [filters, setFilters] = useState(DEFAULT_FILTERS);

  const setFilter = (key, value) =>
    setFilters((f) => ({ ...f, [key]: value }));
  const reset = () => setFilters(DEFAULT_FILTERS);

  const activeCount = useMemo(
    () =>
      (filters.price !== "all" ? 1 : 0) +
      (filters.size !== "All Sizes" ? 1 : 0) +
      (filters.material !== "All Materials" ? 1 : 0) +
      (filters.colour !== "All Colours" ? 1 : 0),
    [filters]
  );

  const visible = useMemo(() => {
    if (!filterable) return products;
    const priceTest = priceFilters.find((f) => f.id === filters.price)?.test;
    return products.filter(
      (p) =>
        (!priceTest || priceTest(p)) &&
        (filters.size === "All Sizes" || p.sizeClass === filters.size) &&
        (filters.material === "All Materials" || p.material === filters.material) &&
        (filters.colour === "All Colours" || p.colourFamily === filters.colour)
    );
  }, [products, filters, filterable]);

  return (
    <section
      id={id}
      data-testid={`${id}-section`}
      className={`scroll-mt-24 py-20 sm:py-28 ${
        dark ? "bg-olive" : tone === "cream" ? "bg-cream" : "bg-sand"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          copy={copy}
          dark={dark}
          testid={`${id}-heading`}
        />
        {filterable && (
          <FilterBar
            sectionId={id}
            filters={filters}
            setFilter={setFilter}
            reset={reset}
            activeCount={activeCount}
          />
        )}
        {filterable && (
          <p
            className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-stone-500"
            data-testid={`${id}-result-count`}
          >
            {visible.length} {visible.length === 1 ? "piece" : "pieces"}
            {activeCount > 0
              ? ` ${visible.length === 1 ? "matches" : "match"} your filters`
              : " in this collection"}
          </p>
        )}
        {visible.length > 0 ? (
          <div
            className={`grid grid-cols-1 gap-x-6 gap-y-12 ${columns}`}
            data-testid={`${id}-grid`}
          >
            {visible.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        ) : (
          <div
            className="rounded-[22px] border border-dashed border-stone-300 bg-white/40 py-16 text-center"
            data-testid={`${id}-empty-state`}
          >
            <p className="font-serif text-2xl text-ink">No pieces match those filters.</p>
            <p className="mt-2 text-sm text-stone-500">
              Try widening a filter — or ask us on WhatsApp, we cast custom pieces too.
            </p>
            <button
              type="button"
              onClick={reset}
              data-testid={`${id}-empty-reset-btn`}
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-xs font-semibold text-sand transition-colors hover:bg-terra"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              Clear filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
