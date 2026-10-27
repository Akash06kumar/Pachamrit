import { useMemo, useState } from "react";
import { Search, SearchX } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ProductCard, QuickView } from "./ProductCard";
import { packs } from "@/data/products";

const allProducts = packs;

export const SearchDialog = ({ open, onClose }) => {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return allProducts.filter((p) =>
      [p.name, p.finish, p.category, p.material, p.sizeClass, ...(p.colors || [])]
        .join(" ")
        .toLowerCase()
        .includes(q)
    );
  }, [query]);

  const close = () => {
    setQuery("");
    onClose();
  };

  const openProduct = (product) => {
    setQuery("");
    onClose();
    setSelected(product);
  };

  return (
    <>
      <Dialog open={open} onOpenChange={(v) => !v && close()}>
        <DialogContent
          className="flex max-h-[88vh] max-w-5xl flex-col gap-0 overflow-hidden rounded-[26px] border-limewash bg-sand p-0"
          data-testid="search-dialog"
        >
          <div className="border-b border-limewash p-6 sm:p-8">
            <DialogDescription className="text-[10px] font-semibold uppercase tracking-[0.24em] text-clay">
              Search PachAmrit
            </DialogDescription>
            <DialogTitle className="sr-only">Search products</DialogTitle>
            <div className="mt-3 flex items-center gap-3 rounded-2xl border border-limewash bg-white px-5">
              <Search className="h-5 w-5 shrink-0 text-stone-400" />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Try “50g”, “combo”, “jar”…"
                data-testid="search-input"
                className="h-14 w-full bg-transparent font-serif text-xl text-ink outline-none placeholder:text-stone-400"
              />
            </div>
          </div>
          <div className="flex-1 overflow-y-auto p-6 sm:p-8">
            {query.trim() === "" ? (
              <div className="py-14 text-center" data-testid="search-idle-state">
                <Search className="mx-auto h-8 w-8 text-stone-300" />
                <p className="mt-4 font-serif text-2xl text-ink">
                  Looking for a pack?
                </p>
                <p className="mt-2 text-sm text-stone-500">
                  Search our churan packs by size or name — 50g pouch, 100g jar
                  or the combo.
                </p>
              </div>
            ) : results.length === 0 ? (
              <div className="py-14 text-center" data-testid="search-empty-state">
                <SearchX className="mx-auto h-8 w-8 text-stone-300" />
                <p className="mt-4 font-serif text-2xl text-ink">
                  Nothing found for “{query.trim()}”.
                </p>
                <p className="mt-2 text-sm text-stone-500">
                  Try “50g” or “combo” — or ask us on WhatsApp, we're happy to
                  help you pick.
                </p>
              </div>
            ) : (
              <>
                <p
                  className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-stone-500"
                  data-testid="search-result-count"
                >
                  {results.length} {results.length === 1 ? "match" : "matches"} for
                  “{query.trim()}”
                </p>
                <div
                  className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3"
                  data-testid="search-results-grid"
                >
                  {results.map((p) => (
                    <ProductCard key={p.id} product={p} onQuickView={openProduct} />
                  ))}
                </div>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
      {selected && (
        <QuickView
          product={selected}
          open={true}
          onClose={() => setSelected(null)}
        />
      )}
    </>
  );
};
