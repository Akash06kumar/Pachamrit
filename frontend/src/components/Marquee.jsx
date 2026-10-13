const items = [
  "Sculptural Cement Pots",
  "Designer Vases",
  "Handmade Paintings",
  "Cast in Small Batches",
  "Ships Across India",
  "Zero-Plastic Packaging",
];

export const Marquee = () => (
  <div
    data-testid="editorial-marquee"
    className="overflow-hidden border-y border-stone-200 bg-cream py-5"
    aria-hidden="true"
  >
    <div className="marquee-track flex w-max items-center">
      {[0, 1].map((copy) => (
        <div key={copy} className="flex items-center">
          {items.map((item, i) => (
            <span
              key={`${copy}-${i}`}
              className="flex items-center whitespace-nowrap"
            >
              <span className="px-8 font-serif text-xl italic text-stone-500 sm:text-2xl">
                {item}
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-terra/70" />
            </span>
          ))}
        </div>
      ))}
    </div>
  </div>
);
