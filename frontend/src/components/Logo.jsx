export const LogoMark = ({ className = "w-10 h-10" }) => (
  <svg
    className={className}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path d="M8 21h24c0 7.5-5.4 13-12 13S8 28.5 8 21z" fill="#2A3D2C" />
    <path d="M28.5 5.5L17 18" stroke="#D9822B" strokeWidth="3.6" strokeLinecap="round" />
    <circle cx="30.5" cy="4.8" r="3.1" fill="#D9822B" />
    <path
      d="M13 25.5c2 2.2 4.4 3.3 7 3.3s5-1.1 7-3.3"
      stroke="#FBF7EF"
      strokeWidth="1.8"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

export const Logo = ({ dark = false }) => (
  <a
    href="#top"
    data-testid="brand-logo-link"
    className={`flex items-center gap-2.5 ${dark ? "text-sand" : "text-ink"}`}
    aria-label="PachAmrit — back to top"
  >
    <LogoMark />
    <span className="leading-none">
      <span className="block font-serif text-2xl font-semibold tracking-tight">
        Pach<span className="text-terra">Amrit</span>
      </span>
      <span
        className={`block text-[10px] uppercase tracking-[0.26em] ${
          dark ? "text-sand/60" : "text-stone-500"
        }`}
      >
        Ayurvedic Digestive Churan
      </span>
    </span>
  </a>
);
