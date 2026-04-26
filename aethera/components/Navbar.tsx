"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const close = () => setOpen(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href === "/behandlingar") return pathname === "/behandlingar";
    if (href === "/om") return pathname === "/om";
    if (href === "/vanliga-fragor") return pathname === "/vanliga-fragor";
    if (href === "/kontakt") return pathname === "/kontakt";
    return false;
  };

  const navLinkClass = (href: string) =>
    [
      "rounded-xl px-3 py-2 text-sm uppercase tracking-wider transition",
      isActive(href)
        ? "bg-black text-white"
        : "text-black/80 hover:bg-black/5",
    ].join(" ");

  return (
    <header
      className={[
        "fixed top-0 left-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-black/10 bg-white/80 backdrop-blur-md"
          : "border-b border-black/10 bg-white",
      ].join(" ")}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] md:items-center">
          <div className="flex items-center">
            <a href="/" onClick={close}>
              <img
                src="/logo.png"
                alt="Klinik Aethera"
                className="h-10 w-auto"
              />
            </a>
          </div>

          <nav className="flex items-center justify-center gap-2">
            <a href="/" onClick={close} className={navLinkClass("/")}>
              Hem
            </a>

            <a
              href="/behandlingar"
              onClick={close}
              className={navLinkClass("/behandlingar")}
            >
              Behandlingar
            </a>

            <a href="/om" onClick={close} className={navLinkClass("/om")}>
              Om
            </a>

            <a
              href="/vanliga-fragor"
              onClick={close}
              className={navLinkClass("/vanliga-fragor")}
            >
              Vanliga frågor
            </a>

            <a
              href="/kontakt"
              onClick={close}
              className={navLinkClass("/kontakt")}
            >
              Kontakt
            </a>
          </nav>

          <div className="flex justify-end">
            <a
  href="/behandlingar"
  className="inline-flex rounded-2xl bg-black px-5 py-2 text-sm font-medium text-white hover:opacity-90"
>
  Boka tid
</a>
          </div>
        </div>

        <div className="relative flex items-center justify-between md:hidden">
          <a href="/" onClick={close}>
            <img
              src="/logo.png"
              alt="Klinik Aethera"
              className="h-9 w-auto"
            />
          </a>

          <div className="absolute left-1/2 -translate-x-1/2 font-semibold tracking-wide text-black/85">
            Aethera
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Öppna meny"
            className="inline-flex items-center justify-center rounded-2xl px-3 py-2 text-black hover:bg-black/5"
          >
            <span className="text-xl">{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-black/10 bg-white/95 backdrop-blur-md md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-4">
            <a href="/" onClick={close} className={navLinkClass("/")}>
              Hem
            </a>

            <a
              href="/behandlingar"
              onClick={close}
              className={navLinkClass("/behandlingar")}
            >
              Behandlingar
            </a>

            <a href="/om" onClick={close} className={navLinkClass("/om")}>
              Om
            </a>

            <a
              href="/vanliga-fragor"
              onClick={close}
              className={navLinkClass("/vanliga-fragor")}
            >
              Vanliga frågor
            </a>

            <a
              href="/kontakt"
              onClick={close}
              className={navLinkClass("/kontakt")}
            >
              Kontakt
            </a>

          <a
  href="/behandlingar"
  onClick={close}
  className="mt-2 inline-flex justify-center rounded-2xl bg-black px-5 py-3 font-medium text-white"
>
  Boka tid
</a>
          </div>
        </div>
      )}
      <div className="border-t border-[#B36B45]/20 bg-[#FFF4EA] px-4 py-3 text-center">
  <p className="text-xs font-semibold tracking-wide text-[#B36B45] drop-shadow-[0_0_6px_rgba(179,107,69,0.25)] sm:text-sm md:text-base">
    ✨ Just nu 15% rabatt på alla behandlingar under begränsad period. Boka din gratis konsultation nu! ✨
  </p>
</div>
    </header>
  );
}