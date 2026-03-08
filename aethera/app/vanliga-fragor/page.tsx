"use client";

import { useState } from "react";

export default function VanligaFragorPage() {
  const [open, setOpen] = useState<number | null>(0);

  const faqs = [
    {
      q: "Vad är Botox?",
      a: "Botox är ett läkemedel (botulinumtoxin typ A) som tillfälligt slappnar av utvalda muskler. Det används för att mjuka upp mimiklinjer och rynkor, men även för vissa medicinska besvär som tandgnissling eller överdriven svettning.",
    },
    {
      q: "Vad är fillers?",
      a: "Fillers består oftast av hyaluronsyra, ett ämne som naturligt finns i kroppen. Det används för att skapa volym, förbättra konturer och ge ett mer balanserat och fräscht intryck.",
    },
    {
      q: "Vad är skillnaden mellan Botox och fillers?",
      a: "Botox verkar genom att minska muskelaktivitet, vilket passar för mimikrynkor. Fillers används istället för att skapa volym, stöd och form i olika områden.",
    },
    {
      q: "Är behandlingarna säkra?",
      a: "Ja, när de utförs av legitimerad vårdpersonal och efter en korrekt konsultation. På Klinik Aethera utförs behandlingarna med fokus på patientsäkerhet, medicinsk precision och naturliga resultat.",
    },
    {
      q: "Gör det ont att behandlas?",
      a: "De flesta upplever endast ett lätt obehag. Tunna nålar används och vid behov kan bedövning användas för att göra behandlingen mer komfortabel.",
    },
    {
      q: "Hur snabbt ser man resultat?",
      a: "Vid fillers syns resultatet direkt, men slutresultatet bedöms bäst när eventuell svullnad lagt sig. Vid Botox börjar effekten oftast märkas efter några dagar och full effekt ses vanligtvis efter cirka 10–14 dagar.",
    },
    {
      q: "Hur länge håller resultatet?",
      a: "Botox håller ofta cirka 3–4 månader. Fillers håller vanligtvis 6–12 månader, beroende på område, produkt och individuella förutsättningar.",
    },
    {
      q: "Kan jag gå tillbaka till jobbet direkt efter behandlingen?",
      a: "Ja, de flesta kan återgå till sina vanliga aktiviteter direkt. Lätt rodnad, svullnad eller ömhet kan förekomma tillfälligt.",
    },
    {
      q: "Behöver jag konsultation innan behandling?",
      a: "Ja. Enligt svensk lag krävs konsultation minst 48 timmar innan estetisk injektionsbehandling.",
    },
    {
      q: "Hur vet jag vilken behandling som passar mig?",
      a: "Det avgörs vid konsultationen. Då går vi igenom dina önskemål, förutsättningar och vilket upplägg som passar bäst för ett tryggt och naturligt resultat.",
    },
  ];

  return (
    <main className="min-h-screen bg-white pt-24">
      <div className="mx-auto max-w-4xl px-6 pb-24">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-500">
            Klinik Aethera
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-gray-900">
            Vanliga frågor
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Här hittar du svar på vanliga frågor om fillers, botox, konsultation
            och eftervård.
          </p>
        </div>

        <div className="mt-14 rounded-3xl border border-gray-200 bg-white">
          {faqs.map((faq, i) => {
            const isOpen = open === i;

            return (
              <div
                key={i}
                className="border-t border-gray-200 first:border-t-0"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left transition hover:bg-gray-50"
                >
                  <span className="pr-6 text-base font-medium text-gray-900">
                    {faq.q}
                  </span>

                  <span
                    className={`text-xl transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    ⌄
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6">
                    <p className="max-w-3xl leading-relaxed text-gray-700">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 rounded-3xl border border-gray-200 bg-[#F5F1EC] p-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-900">
            Har du fler frågor?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-700">
            Du är varmt välkommen att kontakta Klinik Aethera via e-post eller
            sociala medier, eller boka en kostnadsfri konsultation.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href="mailto:klinik.aethera@gmail.com"
              className="inline-flex rounded-2xl border border-gray-300 px-5 py-3 text-sm font-medium hover:bg-gray-50"
            >
              Mejla oss
            </a>

            <a
              href="https://www.instagram.com/klinik.aethera/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-2xl border border-gray-300 px-5 py-3 text-sm font-medium hover:bg-gray-50"
            >
              Instagram
            </a>

            <a
              href="https://www.tiktok.com/@klinik.aethera"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-2xl border border-gray-300 px-5 py-3 text-sm font-medium hover:bg-gray-50"
            >
              TikTok
            </a>

            <a
              href="/#boka"
              className="inline-flex rounded-2xl bg-black px-5 py-3 text-sm font-medium text-white hover:opacity-90"
            >
              Boka konsultation
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}