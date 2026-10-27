export const Logo = ({ dark = false }) => (
  <a
    href="#top"
    data-testid="brand-logo-link"
    className="flex items-center gap-3"
    aria-label="PachAmrit — back to top"
  >
    <img
      src="/pachamrit-logo.png"
      alt="PachAmrit logo — mortar and pestle with herbs"
      className={`h-12 w-12 rounded-full object-cover ring-1 ring-terra/30 ${
        dark ? "shadow-lg" : "shadow-sm"
      }`}
    />
    <span className="leading-none">
      <span
        className={`block font-serif text-2xl font-semibold tracking-tight ${
          dark ? "text-sand" : "text-olive"
        }`}
      >
        Pach<span className="text-terra">Amrit</span>
      </span>
      <span
        className={`block text-[10px] uppercase tracking-[0.22em] ${
          dark ? "text-sand/60" : "text-stone-500"
        }`}
      >
        Parampara Ka Desi Pachak
      </span>
    </span>
  </a>
);
