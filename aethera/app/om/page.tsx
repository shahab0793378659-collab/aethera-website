"use client";

import { useEffect } from "react";

export const metadata = {
  title: "Om",
  description:
    "Läs mer om Shahab Mohammadi, filosofin bakom Klinik Aethera och varför naturliga resultat står i centrum för varje behandling i Vetlanda.",
};
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

export default function OmPage() {
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
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gray-500">
              Om Klinik Aethera
            </p>
            <h1 className="mt-4 text-4xl font-semibold text-gray-900 md:text-5xl">
              Naturliga resultat börjar med rätt tanke
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-700 md:text-lg">
              För mig handlar estetiska injektionsbehandlingar inte om att förändra
              vem du är. Det handlar om att varsamt lyfta fram det du redan har.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
          <div
            className="opacity-0 translate-y-8 transition-all duration-700"
            data-reveal
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-[#E8E0D7] bg-[#F5F1EC] shadow-[0_25px_70px_rgba(0,0,0,0.06)]">
              <img
                src="/shahab.jpg"
                alt="Shahab Mohammadi, legitimerad tandläkare och behandlare på Klinik Aethera"
                className="h-full w-full object-cover transition duration-700 hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
            </div>
          </div>

          <div
            className="opacity-0 translate-y-8 transition-all duration-700"
            data-reveal
          >
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gray-500">
              Min filosofi
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-tight text-gray-900 md:text-4xl">
              Jag började med injektionsbehandlingar för att jag såg hur lätt det är
              att få fel bild av dem
            </h2>

            <div className="mt-6 space-y-5 text-[17px] leading-relaxed text-gray-700">
              <p>
                Många har sett resultat som känns överdrivna och långt ifrån
                naturliga. Det har gjort att injektionsbehandlingar ibland fått ett
                rykte de inte förtjänar.
              </p>

              <p>
                För mig handlar det inte om att skapa ett nytt ansikte. Det handlar
                om balans, harmoni och att lyfta fram det som redan finns där.
              </p>

              <p>
                Ibland kan det vara att mjukt definiera en kontur. Ibland att återge
                lite stöd. Ibland att lugna en muskel som spänner för mycket med
                hjälp av botulinumtoxin.
              </p>

              <p>
                Mitt mål är alltid detsamma: ett resultat som känns naturligt, tryggt
                och genomtänkt.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#C8A27A] py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div
            className="mx-auto max-w-4xl rounded-[2rem] border border-black/10 bg-white/20 p-8 shadow-[0_25px_70px_rgba(0,0,0,0.08)] backdrop-blur-sm opacity-0 translate-y-8 transition-all duration-700 md:p-10"
            data-reveal
          >
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-black/60">
              Varför detta passar mig
            </p>

            <h2 className="mt-4 text-3xl font-semibold text-black md:text-4xl">
              Som tandläkare arbetar jag redan varje dag med precision, estetik och
              långsiktigt tänkande
            </h2>

            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-black/10 bg-white/30 p-5">
                <p className="text-sm font-semibold text-black">Precision</p>
                <p className="mt-2 text-sm leading-relaxed text-black/75">
                  Jag arbetar med små detaljer som gör stor skillnad för helheten.
                </p>
              </div>

              <div className="rounded-2xl border border-black/10 bg-white/30 p-5">
                <p className="text-sm font-semibold text-black">Estetiskt öga</p>
                <p className="mt-2 text-sm leading-relaxed text-black/75">
                  Jag bygger och formar redan behandlingar som ska kännas naturliga
                  och hålla över tid.
                </p>
              </div>

              <div className="rounded-2xl border border-black/10 bg-white/30 p-5">
                <p className="text-sm font-semibold text-black">Trygghet</p>
                <p className="mt-2 text-sm leading-relaxed text-black/75">
                  Jag vill att du ska känna att varje beslut tas med omtanke,
                  kunskap och respekt för dina drag.
                </p>
              </div>
            </div>

            <p className="mt-6 text-[17px] leading-relaxed text-black/80">
              Jag har alltid velat hjälpa människor att se ut som sig själva —
              bara lite mer utvilade, balanserade och harmoniska.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div
            className="rounded-[2rem] border border-[#E8E0D7] bg-[#F5F1EC] p-8 text-center shadow-[0_25px_70px_rgba(0,0,0,0.05)] opacity-0 translate-y-8 transition-all duration-700 md:p-12"
            data-reveal
          >
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-500">
              Min ambition
            </p>

            <h2 className="mt-4 text-3xl font-semibold text-gray-900 md:text-4xl">
              Naturliga resultat. Tydlig plan. Trygg behandling.
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-gray-700 md:text-lg">
              Om du söker ett överdrivet uttryck är jag förmodligen inte rätt
              behandlare för dig. Om du däremot söker ett mjukt, naturligt och
              professionellt resultat där dina egna drag står i centrum, då är du
              varmt välkommen till Klinik Aethera.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="/#boka"
                className="inline-flex rounded-2xl bg-black px-6 py-3 font-medium text-white transition hover:-translate-y-0.5 hover:opacity-90"
              >
                Boka konsultation
              </a>
              <a
                href="/behandlingar"
                className="inline-flex rounded-2xl border border-gray-300 px-6 py-3 font-medium text-black/80 transition hover:-translate-y-0.5 hover:bg-white/60"
              >
                Se behandlingar
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}