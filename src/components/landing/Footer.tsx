const links = [
  { href: "#about", label: "О платформе" },
  { href: "#how", label: "Как это работает" },
  { href: "#features", label: "Возможности" },
  { href: "#contacts", label: "Контакты" },
];

export default function Footer() {
  return (
    <footer id="contacts" className="bg-dark text-cream">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 py-14 sm:px-8 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <p className="font-display text-sm font-semibold tracking-[0.08em]">
            EQUAL <span className="text-lime">ED</span>
          </p>
          <p className="mt-3 max-w-xs text-sm leading-6 text-cream/65">
            Понятная подготовка. Равные возможности.
          </p>
        </div>
        <nav className="flex flex-col gap-3" aria-label="Навигация в подвале">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-cream/75 transition-colors hover:text-lime"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-5 py-5 text-xs text-cream/45 sm:px-8">
          © 2026 Equal Ed
        </p>
      </div>
    </footer>
  );
}
