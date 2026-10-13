import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import { Logo } from "./Logo";
import { waGeneralLink } from "@/lib/whatsapp";

const links = [
  { label: "Pots & Planters", href: "#pots", testid: "nav-link-pots" },
  { label: "Vases", href: "#vases", testid: "nav-link-vases" },
  { label: "Styling", href: "#styling", testid: "nav-link-styling" },
  { label: "Wall Art", href: "#wall-art", testid: "nav-link-wall-art" },
  { label: "Our Story", href: "#story", testid: "nav-link-story" },
  { label: "FAQs", href: "#faqs", testid: "nav-link-faqs" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="site-header"
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,border-color] duration-500 ${
        scrolled
          ? "border-b border-stone-200/80 bg-sand/85 shadow-[0_8px_30px_rgba(28,25,23,0.06)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8">
        <Logo />
        <nav
          className="hidden items-center gap-7 lg:flex"
          aria-label="Primary"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={l.testid}
              className="group relative text-[13px] font-medium tracking-wide text-stone-600 transition-colors duration-300 hover:text-ink"
            >
              {l.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-terra transition-[width] duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={waGeneralLink()}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="nav-whatsapp-cta"
            className="hidden items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-[13px] font-semibold text-sand transition-colors duration-300 hover:bg-terra sm:inline-flex"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp Us
          </a>
          <button
            type="button"
            data-testid="nav-mobile-menu-btn"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-stone-300 bg-sand/70 text-ink lg:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-stone-200 bg-sand/95 backdrop-blur-xl lg:hidden"
            aria-label="Mobile"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  data-testid={`mobile-${l.testid}`}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 font-serif text-lg text-ink transition-colors hover:bg-cream"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={waGeneralLink()}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="mobile-nav-whatsapp-cta"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-sand"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp Us
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};
