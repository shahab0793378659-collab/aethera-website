"use client";

import { useEffect } from "react";

function revealElements() {
  const elements = document.querySelectorAll("[data-reveal]");

  elements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    const inView = rect.top < window.innerHeight - 80;

    if (inView) {
      el.classList.add("opacity-100", "translate-y-0");
      el.classList.remove("opacity-0", "translate-y-8");
    }
  });
}

export default function KontaktPage() {
  useEffect(() => {
    revealElements();
    const onScroll = () => revealElements();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="min-h-screen bg-white pt-24">
      <section className="bg-[#F5F1EC] py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div
            className="mx-auto max-w-3xl text-center opacity-0 translate-y-8 transition-all duration-700"
            data-reveal
          >
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-500">
              Kontakt
            </p>
            <h1 className="mt-4 text-4xl font-semibold text-gray-900 md:text-5xl">
              Kontakta Klinik Aethera
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-700 md:text-lg">
              Har du frågor innan du bokar? Du är varmt välkommen att höra av dig.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div
            className="rounded-[2rem] border border-[#E8E0D7] bg-[#F5F1EC] p-8 shadow-[0_25px_70px_rgba(0,0,0,0.05)] opacity-0 translate-y-8 transition-all duration-700 md:p-12"
            data-reveal
          >
            <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-500">
                  Klinik Aethera
                </p>
                <h2 className="mt-4 text-3xl font-semibold text-gray-900">
                  Vi hjälper dig gärna
                </h2>
                <p className="mt-4 text-[17px] leading-relaxed text-gray-700">
                  Oavsett om du har frågor om behandlingar, konsultation eller
                  bokning, kan du kontakta oss så återkommer vi så snart vi kan.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="/#boka"
                    className="inline-flex rounded-2xl bg-black px-6 py-3 font-medium text-white transition hover:-translate-y-0.5 hover:opacity-90"
                  >
                    Boka tid
                  </a>

                  <a
                    href="/vanliga-fragor"
                    className="inline-flex rounded-2xl border border-gray-300 px-6 py-3 font-medium text-black/80 transition hover:-translate-y-0.5 hover:bg-white/60"
                  >
                    Vanliga frågor
                  </a>
                </div>
              </div>

              <div className="space-y-6 text-gray-800">
                <div className="rounded-2xl border border-black/5 bg-white/50 p-5 transition duration-300 hover:-translate-y-0.5 hover:bg-white/70">
                  <p className="text-sm font-semibold">E-post</p>
                  <a
                    href="mailto:klinik.aethera@gmail.com"
                    className="mt-2 inline-block text-gray-700 underline hover:opacity-80"
                  >
                    klinik.aethera@gmail.com
                  </a>
                </div>

                <div className="rounded-2xl border border-black/5 bg-white/50 p-5 transition duration-300 hover:-translate-y-0.5 hover:bg-white/70">
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

              <div className="space-y-6 text-gray-800">
                <div className="rounded-2xl border border-black/5 bg-white/50 p-5 transition duration-300 hover:-translate-y-0.5 hover:bg-white/70">
                  <p className="text-sm font-semibold">Plats</p>
                  <p className="mt-2 text-gray-700">
                    Stationsgatan 4A, 574 31, Vetlanda
                  </p>

                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Stationsgatan+4A+574+31+Vetlanda"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex rounded-2xl border border-gray-300 px-4 py-2 text-sm font-medium text-black/80 transition hover:bg-white/60"
                  >
                    Öppna i Google Maps
                  </a>
                </div>

                <div className="rounded-2xl border border-black/5 bg-white/50 p-5 transition duration-300 hover:-translate-y-0.5 hover:bg-white/70">
                  <p className="text-sm font-semibold">Öppettider</p>
                  <p className="mt-2 text-gray-700">Endast tidsbokning</p>
                  <p className="text-gray-700">Se lediga tider via bokningen</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <div
            className="overflow-hidden rounded-[2rem] border border-[#E8E0D7] bg-white shadow-[0_25px_70px_rgba(0,0,0,0.05)] opacity-0 translate-y-8 transition-all duration-700"
            data-reveal
          >
            <iframe
              title="Klinik Aethera karta"
              src="https://www.google.com/maps?q=Stationsgatan+4A,+574+31,+Vetlanda&output=embed"
              className="h-[340px] w-full md:h-[420px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </main>
  );
}