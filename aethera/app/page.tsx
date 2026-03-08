"use client";
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    const onScroll = () => {
      const scroll = window.scrollY;

      const overlay = document.getElementById("hero-overlay");
      const text = document.getElementById("hero-text");

      if (!overlay || !text) return;

      const opacity = Math.min(scroll / 400, 1);

      overlay.style.opacity = `${1 - opacity * 0.6}`;
      text.style.opacity = `${1 - opacity}`;
      text.style.transform = `translateY(${scroll * 0.2}px)`;
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="relative">
      <div id="top" />

      {/* HERO */}
      <section
  id="hero"
  className="relative pt-16 h-[90vh] min-h-[620px] w-full bg-[url('/hero.jpg')] bg-cover bg-center transition-all duration-700"
>
        <div
  id="hero-overlay"
  className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/70 to-black/65 transition-all duration-700"
/>
        <div className="absolute inset-0 [box-shadow:inset_0_0_120px_rgba(0,0,0,0.55)]" />

        <div
  id="hero-text"
  className="relative mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center text-white transition-all duration-500"
>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/80">
            Klinik Aethera
          </p>

          <h1 className="mt-5 text-4xl font-semibold leading-[1.05] md:text-6xl">
            Estetiska injektionsbehandlingar
          </h1>

          <p className="mt-6 max-w-2xl text-base text-white/85 md:text-lg">
            Legitimerad tandläkare med certifiering inom estetiska injektioner.
            Naturliga resultat med medicinsk precision.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a
              href="#behandlingar"
              className="rounded-2xl border border-white/70 px-6 py-3 font-medium text-white hover:bg-white/10"
            >
              Våra behandlingar
            </a>
          </div>

          <div className="mt-12 w-full max-w-4xl rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-md">
            <div className="grid grid-cols-1 gap-6 text-sm md:grid-cols-3">
              <div>
                <p className="font-semibold">Konsultation</p>
                <p className="text-white/75">
                  Obligatorisk minst 48h innan behandling
                </p>
              </div>
              <div>
                <p className="font-semibold">Plats</p>
                <p className="text-white/75">Vetlanda</p>
              </div>
              <div>
                <p className="font-semibold">Bokning</p>
                <p className="text-white/75">Online via Meridiq</p>
              </div>
            </div>
          </div>

          <div className="mt-10 text-xs text-white/60">
            Scrolla för att läsa mer ↓
          </div>
        </div>
      </section>

      {/* BEHANDLINGAR */}
      <section id="behandlingar" className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-500">
              Behandlingar
            </p>

            <h2 className="mt-4 text-3xl font-semibold text-gray-900 md:text-4xl">
              Våra behandlingar
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Estetiska injektionsbehandlingar med fokus på naturliga resultat.
              Konsultation ska göras minst{" "}
              <span className="font-semibold">48 timmar</span> innan behandling.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Fillers */}
            <a
              href="/behandlingar?category=fillers"
              className="block rounded-3xl border border-gray-200 bg-[#F5F1EC] p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <div className="group relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-white/40 bg-white/10 shadow-md backdrop-blur-lg transition-transform duration-300 hover:scale-105">
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/40 via-white/10 to-transparent opacity-70" />
                  <img
                    src="/icons/fillers.png"
                    alt="Fillers"
                    className="relative h-6 w-6 opacity-80 transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <p className="text-sm font-semibold uppercase tracking-widest text-gray-700">
                  Fillers
                </p>
              </div>

              <ul className="mt-5 space-y-2 text-gray-800">
                <li>• Läppar (upp till 1 ml)</li>
                <li>• Nasolabialveck</li>
                <li>• Kindben</li>
                <li>• Haka</li>
                <li>• Käklinjer</li>
              </ul>
            </a>

            {/* Botox */}
            <a
              href="/behandlingar?category=botox"
              className="block rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <div className="group relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-white/40 bg-white/10 shadow-md backdrop-blur-lg transition-transform duration-300 hover:scale-105">
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/40 via-white/10 to-transparent opacity-70" />
                  <img
                    src="/icons/botox.png"
                    alt="Botox"
                    className="relative h-6 w-6 opacity-80 transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <p className="text-sm font-semibold uppercase tracking-widest text-gray-700">
                  Botox
                </p>
              </div>

              <ul className="mt-5 space-y-2 text-gray-800">
                <li>• 1 område</li>
                <li>• 2 områden</li>
                <li>• 3 områden</li>
                <li>• 4 områden</li>
                <li>• 5 områden eller fler</li>
              </ul>
            </a>

            {/* Medicinskt */}
            <a
              href="/behandlingar?category=medicinskt"
              className="block rounded-3xl border border-gray-200 bg-[#F5F1EC] p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <div className="group relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-white/40 bg-white/10 shadow-md backdrop-blur-lg transition-transform duration-300 hover:scale-105">
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/40 via-white/10 to-transparent opacity-70" />
                  <img
                    src="/icons/medical.png"
                    alt="Medicinskt"
                    className="relative h-6 w-6 opacity-80 transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <p className="text-sm font-semibold uppercase tracking-widest text-gray-700">
                  Medicinskt
                </p>
              </div>

              <ul className="mt-5 space-y-2 text-gray-800">
                <li>• Bruxism (tandgnissling)</li>
                <li>• Svettbehandling armhålor</li>
              </ul>
            </a>

            {/* Konsultation */}
            <a
              href="/behandlingar?category=konsultation"
              className="block rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <div className="group relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-white/40 bg-white/10 shadow-md backdrop-blur-lg transition-transform duration-300 hover:scale-105">
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/40 via-white/10 to-transparent opacity-70" />
                  <img
                    src="/icons/consultation.png"
                    alt="Konsultation"
                    className="relative h-6 w-6 opacity-80 transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <p className="text-sm font-semibold uppercase tracking-widest text-gray-700">
                  Konsultation
                </p>
              </div>

              <p className="mt-5 text-gray-700 leading-relaxed">
                Obligatorisk konsultation minst{" "}
                <span className="font-semibold">48 timmar</span> innan behandling.
              </p>
            </a>
          </div>

          <div className="mt-12 flex justify-center">
            <a
              href="#boka"
              className="inline-flex rounded-2xl border border-gray-300 px-7 py-3 font-medium hover:bg-gray-50"
            >
              Se tider & boka
            </a>
          </div>
        </div>
      </section>

      {/* OM */}
      <section id="om" className="bg-[#C8A27A] py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
          <div className="flex justify-center md:justify-start">
            <div className="relative h-[360px] w-[280px] overflow-hidden rounded-[999px] bg-white/30 shadow-lg">
              <img
                src="/shahab.jpg"
                alt="Shahab Mohammadi"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="text-black">
            <p className="text-sm font-semibold uppercase tracking-widest opacity-80">
              Shahab Mohammadi
            </p>

            <h2 className="mt-3 text-3xl font-semibold leading-tight md:text-4xl">
              Legitimerad tandläkare med certifiering inom estetiska injektioner
            </h2>

            <p className="mt-6 leading-relaxed text-black/80">
              På Klinik Aethera är målet att skapa ett fräscht och naturligt
              resultat med hög patientsäkerhet. Behandlingarna utförs med
              medicinsk precision, tydlig information och ett lugnt,
              professionellt bemötande.
            </p>

            <p className="mt-4 leading-relaxed text-black/80">
              Alla injektionsbehandlingar föregås av en konsultation minst{" "}
              <span className="font-semibold">48 timmar</span> innan behandling,
              där vi går igenom mål, förväntningar, risker och eftervård.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#boka"
                className="rounded-xl bg-black px-6 py-3 font-medium text-white hover:opacity-90"
              >
                Boka tid
              </a>
              <a
                href="#kontakt"
                className="rounded-xl border border-black/30 px-6 py-3 font-medium hover:bg-black/5"
              >
                Kontakta oss
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* BOKA */}
      <section id="boka" className="bg-[#F5F1EC] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-gray-900">
              Boka konsultation eller behandling
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Konsultation är obligatorisk och ska göras minst{" "}
              <span className="font-semibold">48 timmar</span> innan behandling.
              Välj tid och boka direkt online.
            </p>
          </div>

          <div className="mt-12 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <div className="h-[680px] w-full">
              <iframe
                title="Meridiq Bokningssystem"
                src="https://app.meridiq.com/booking/Nzc1NA==?lang=sv"
                className="h-full w-full"
                frameBorder="0"
                allowFullScreen
              />
            </div>
          </div>

          <p className="mt-6 text-center text-sm text-gray-500">
            Har du frågor innan du bokar?{" "}
            <a href="#kontakt" className="underline hover:opacity-80">
              Kontakta oss
            </a>
            .
          </p>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-500">
                Följ oss
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-gray-900 md:text-4xl">
                Klinik Aethera på Instagram
              </h2>
              <p className="mt-4 max-w-2xl text-gray-600">
                Resultat, klinikvardag och tips kring eftervård & hudhälsa.
              </p>
            </div>

            <a
              href="https://www.instagram.com/klinik.aethera/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-2xl border border-gray-300 px-6 py-3 font-medium hover:bg-gray-50"
            >
              Öppna @klinik.aethera →
            </a>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-12">
            <a
              href="https://www.instagram.com/klinik.aethera/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-[4/3] overflow-hidden rounded-3xl border border-gray-200 bg-gray-100 md:col-span-7"
            >
              <img
                src="/ig1.jpg"
                alt="Klinik Aethera Instagram"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-black/0 opacity-0 transition group-hover:opacity-100" />
              <div className="absolute bottom-5 left-5 right-5 opacity-0 transition group-hover:opacity-100">
                <p className="text-sm font-medium text-white/90">
                  Se fler bilder på Instagram
                </p>
                <p className="text-xs text-white/70">@klinik.aethera</p>
              </div>
            </a>

            <div className="grid grid-cols-2 gap-4 md:col-span-5">
              {["ig2.jpg", "ig3.jpg", "ig4.jpg", "ig5.jpg"].map((img) => (
                <a
                  key={img}
                  href="https://www.instagram.com/klinik.aethera/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative aspect-square overflow-hidden rounded-3xl border border-gray-200 bg-gray-100"
                >
                  <img
                    src={`/${img}`}
                    alt="Klinik Aethera Instagram"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/10" />
                </a>
              ))}
            </div>

            <a
              href="https://www.instagram.com/klinik.aethera/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-[21/9] overflow-hidden rounded-3xl border border-gray-200 bg-gray-100 md:col-span-12"
            >
              <img
                src="/ig6.jpg"
                alt="Klinik Aethera Instagram"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/10" />
            </a>
          </div>

          <p className="mt-6 text-sm text-gray-500">
            Tips: använd bilder i samma stil (ljus, neutral bakgrund) för en mer
            exklusiv känsla.
          </p>
        </div>
      </section>

      {/* KONTAKT */}
      <section id="kontakt" className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-3xl border border-gray-200 bg-[#F5F1EC] p-10 md:p-12">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-500">
                  Kontakt
                </p>
                <h2 className="mt-4 text-3xl font-semibold text-gray-900">
                  Kontakta Klinik Aethera
                </h2>
                <p className="mt-4 text-gray-700">
                  Har du frågor innan du bokar? Hör gärna av dig så hjälper vi
                  dig.
                </p>
              </div>

              <div className="space-y-4 text-gray-800">
                <div>
                  <p className="text-sm font-semibold">E-post</p>
                  <a
  href="mailto:klinik.aethera@gmail.com"
  className="text-gray-700 underline hover:opacity-80"
>
  klinik.aethera@gmail.com
</a>
<div className="mt-4">
  <p className="text-sm font-semibold">Sociala medier</p>

  <div className="mt-2 flex gap-4">
    <a
      href="https://www.instagram.com/klinik.aethera/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm font-medium underline hover:opacity-80"
    >
      Instagram
    </a>

    <a
      href="https://www.tiktok.com/@klinik.aethera"
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm font-medium underline hover:opacity-80"
    >
      TikTok
    </a>
  </div>
</div>
                </div>
                <div>
                  <p className="text-sm font-semibold">Plats</p>
                  <p className="text-gray-700">Vetlanda</p>
                  <p className="text-gray-700">Stationsgatan 4C</p>
                </div>
              </div>

              <div className="space-y-4 text-gray-800">
                <div>
                  <p className="text-sm font-semibold">Öppettider</p>
                  <p className="text-gray-700">Endast tidsbokning</p>
                  <p className="text-gray-700">Se lediga tider via bokningen</p>
                </div>

                <a
                  href="#boka"
                  className="inline-flex rounded-2xl bg-black px-6 py-3 font-medium text-white hover:opacity-90"
                >
                  Boka tid
                </a>
                <a
  href="/vanliga-fragor"
  className="inline-flex rounded-2xl border border-gray-300 px-6 py-3 font-medium hover:bg-gray-50"
>
  Vanliga frågor
</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FOOTER */}
      <footer className="bg-[#0F0F0F] py-12 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="text-lg font-semibold tracking-wide">AETHERA</p>
              <p className="mt-3 max-w-sm text-sm text-white/70">
                Estetiska injektionsbehandlingar med fokus på naturliga resultat
                och hög patientsäkerhet.
              </p>
              <p className="mt-6 text-xs text-white/50">
                © {new Date().getFullYear()} Klinik Aethera. Alla rättigheter
                förbehållna.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-10 text-sm md:grid-cols-3">
              <div>
                <p className="font-semibold">Info</p>
                <ul className="mt-4 space-y-2 text-white/70">
                  <li>
                    <a href="#behandlingar" className="hover:text-white">
                      Behandlingar
                    </a>
                  </li>
                  <li>
                    <a href="#om" className="hover:text-white">
                      Om
                    </a>
                  </li>
                  <li>
                    <a href="#boka" className="hover:text-white">
                      Boka tid
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-semibold">Kontakt</p>
                <ul className="mt-4 space-y-2 text-white/70">
                  <li>klinik.aethera@gmail.com</li>
                  <li>Vetlanda</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold">Viktigt</p>
                <ul className="mt-4 space-y-2 text-white/70">
                  <li>Konsultation minst 48h innan</li>
                  <li>Eftervård enligt instruktion</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}