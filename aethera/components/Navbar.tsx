"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu when clicking a link
  const close = () => setOpen(false);

  return (
    <header
      className={[
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-white/70 backdrop-blur-md border-b border-black/10"
          : "bg-transparent",
      ].join(" ")}
    >
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <a
          href="#top"
          onClick={close}
          className={[
            "text-lg font-semibold tracking-wide transition-colors",
            scrolled ? "text-black" : "text-white",
          ].join(" ")}
        >
          AETHERA
        </a>

        {/* Desktop nav */}
        <nav
          className={[
            "hidden md:flex gap-8 text-sm uppercase tracking-wider transition-colors",
            scrolled ? "text-black/80" : "text-white/85",
          ].join(" ")}
        >
          <a href="/behandlingar" className="hover:opacity-70">
  Behandlingar
</a>
          <a href="#om" className="hover:opacity-70">
            Om
          </a>
          <a href="#kontakt" className="hover:opacity-70">
            Kontakt
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#boka"
            className={[
              "hidden sm:inline-flex rounded-2xl px-5 py-2 text-sm font-medium transition-all",
              scrolled
                ? "bg-black text-white hover:opacity-90"
                : "bg-white text-black hover:opacity-90",
            ].join(" ")}
          >
            Boka tid
          </a>

          {/* Mobile button */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Öppna meny"
            className={[
              "md:hidden inline-flex items-center justify-center rounded-2xl px-3 py-2 transition",
              scrolled ? "text-black hover:bg-black/5" : "text-white hover:bg-white/10",
            ].join(" ")}
          >
            {/* simple hamburger icon */}
            <span className="text-xl leading-none">{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div className="md:hidden border-t border-black/10 bg-white/90 backdrop-blur-md">
          <div className="mx-auto max-w-6xl px-6 py-4 flex flex-col gap-3 text-sm">
            <a href="/behandlingar" onClick={close} className="py-2">
  Behandlingar
</a>
            <a href="#om" onClick={close} className="py-2">
              Om
            </a>
            <a href="#kontakt" onClick={close} className="py-2">
              Kontakt
            </a>
            <a
              href="#boka"
              onClick={close}
              className="mt-2 inline-flex justify-center rounded-2xl bg-black px-5 py-3 font-medium text-white"
            >
              Boka tid
            </a>
          </div>
        </div>
      )}
    </header>
  );
}