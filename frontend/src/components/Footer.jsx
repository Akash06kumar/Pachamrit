import { MessageCircle, MapPin, Clock } from "lucide-react";
import { Logo } from "./Logo";
import { waGeneralLink } from "@/lib/whatsapp";

const shopLinks = [
  { label: "Pots & Planters", href: "#pots" },
  { label: "Designer Vases", href: "#vases" },
  { label: "Wall Art & Paintings", href: "#wall-art" },
  { label: "Decorative Objects", href: "#decor" },
];

const exploreLinks = [
  { label: "Styling Ideas", href: "#styling" },
  { label: "Shop by Room", href: "#rooms" },
  { label: "Our Story", href: "#story" },
  { label: "FAQs", href: "#faqs" },
];

export const Footer = () => (
  <footer
    data-testid="footer-container"
    className="bg-ink pb-10 pt-16 text-sand sm:pt-20"
  >
    <div className="mx-auto max-w-7xl px-5 sm:px-8">
      <div className="grid grid-cols-1 gap-12 border-b border-sand/10 pb-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <Logo dark />
          <p className="mt-5 max-w-sm font-serif text-2xl italic leading-snug text-sand/85">
            Sculptural Pots. Beautiful Vases. Thoughtful Living.
          </p>
          <a
            href={waGeneralLink()}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="footer-whatsapp-btn"
            className="mt-7 inline-flex items-center gap-2.5 rounded-full bg-wa px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-wahover"
          >
            <MessageCircle className="h-4 w-4" />
            Chat on WhatsApp
          </a>
        </div>
        <div className="md:col-span-2">
          <h4 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sand/50">
            Shop
          </h4>
          <ul className="mt-4 space-y-2.5">
            {shopLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm text-sand/75 transition-colors hover:text-terra"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-2">
          <h4 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sand/50">
            Explore
          </h4>
          <ul className="mt-4 space-y-2.5">
            {exploreLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm text-sand/75 transition-colors hover:text-terra"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-3">
          <h4 className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sand/50">
            Reach Us
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-sand/75">
            <li className="flex items-center gap-2.5">
              <MessageCircle className="h-4 w-4 shrink-0 text-terra" />
              <a
                href={waGeneralLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-terra"
                data-testid="footer-phone-link"
              >
                +91 70617 12908
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <MapPin className="h-4 w-4 shrink-0 text-terra" />
              Shipping across India
            </li>
            <li className="flex items-center gap-2.5">
              <Clock className="h-4 w-4 shrink-0 text-terra" />
              Replies within a few hours, 9am–9pm IST
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between gap-3 pt-8 text-xs text-sand/45 sm:flex-row">
        <p>© {new Date().getFullYear()} Avora Homes. Handcrafted with care in India.</p>
        <p className="flex items-center gap-4">
          <span>Prices in INR · Shipping & payment confirmed on WhatsApp</span>
          <a href="/admin" data-testid="footer-admin-link" className="transition-colors hover:text-terra">
            Admin
          </a>
        </p>
      </div>
    </div>
  </footer>
);
