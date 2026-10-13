export const LogoMark = ({ className = "w-9 h-9" }) => (
  <svg
    className={className}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M20 4L34 34H6L20 4Z"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
    <path
      d="M14 21C14 24.3137 16.6863 27 20 27C23.3137 27 26 24.3137 26 21"
      stroke="#C85A32"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

export const Logo = ({ dark = false }) => (
  <a
    href="#top"
    data-testid="brand-logo-link"
    className={`flex items-center gap-2.5 ${dark ? "text-sand" : "text-ink"}`}
  >
    <LogoMark />
    <span className="leading-none">
      <span className="block font-serif text-xl font-semibold tracking-tight">
        Avora Homes
      </span>
      <span
        className={`block text-[10px] uppercase tracking-[0.28em] ${
          dark ? "text-sand/60" : "text-stone-500"
        }`}
      >
        Pots · Vases · Living
      </span>
    </span>
  </a>
);
