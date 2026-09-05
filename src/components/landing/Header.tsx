"use client";

import { useEffect, useState } from "react";

const navItems = [
  { href: "#about", label: "О платформе" },
  { href: "#how", label: "Как это работает" },
  { href: "#features", label: "Возможности" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-dark/8 bg-cream/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-[4.5rem] sm:px-8">
        <a
          href="#top"
          className="font-display text-[15px] font-semibold tracking-[0.08em] text-dark transition-opacity hover:opacity-80"
        >
          EQUAL <span className="text-purple">ED</span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Основная навигация">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-dark/70 transition-colors hover:text-dark"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#start"
            className="hidden rounded-full bg-purple px-4 py-2.5 text-sm font-semibold text-cream transition-transform hover:scale-[1.03] hover:bg-[#5a1ff0] sm:inline-flex"
          >
            Начать подготовку
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-dark/10 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">Меню</span>
            <span className="relative block h-3.5 w-4">
              <span
                className={`absolute left-0 block h-0.5 w-4 bg-dark transition-transform ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 block h-0.5 w-4 bg-dark transition-opacity ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 block h-0.5 w-4 bg-dark transition-transform ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-dark/8 bg-cream px-5 py-6 lg:hidden"
      >
        <nav className="flex flex-col gap-1" aria-label="Мобильная навигация">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-2xl px-3 py-3 text-base font-medium text-dark transition-colors hover:bg-dark/5"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#start"
            className="mt-3 inline-flex min-h-12 items-center justify-center rounded-full bg-purple px-5 py-3 text-base font-semibold text-cream"
            onClick={() => setOpen(false)}
          >
            Начать подготовку
          </a>
        </nav>
      </div>
    </header>
  );
}
