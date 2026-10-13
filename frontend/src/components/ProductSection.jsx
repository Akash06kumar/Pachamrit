import { SectionHeading } from "./SectionHeading";
import { ProductCard } from "./ProductCard";

export const ProductSection = ({
  id,
  eyebrow,
  title,
  copy,
  products,
  tone = "light",
  columns = "sm:grid-cols-2 lg:grid-cols-4",
}) => {
  const dark = tone === "dark";
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
        <div
          className={`grid grid-cols-1 gap-x-6 gap-y-12 ${columns}`}
          data-testid={`${id}-grid`}
        >
          {products.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
