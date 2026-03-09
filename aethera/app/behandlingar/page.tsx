"use client";

import { Suspense, useMemo, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

type ServiceItem = {
  id: string;
  title: string;
  duration: string;
  price: string;
  details?: string;
  bookUrl: string;
};

type Category = {
  id: "konsultation" | "botox" | "fillers" | "medicinskt";
  label: string;
  intro?: string;
  items: ServiceItem[];
};

function cx(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function BehandlingarContent() {
  const searchParams = useSearchParams();

  const categories: Category[] = useMemo(
    () => [
      {
        id: "konsultation",
        label: "Konsultation",
        intro:
          "Konsultation är obligatorisk och ska göras minst 48 timmar innan behandling.",
        items: [
          {
            id: "konsultation",
            title: "Konsultation",
            duration: "20 min",
            price: "0 kr",
            bookUrl:
              "https://app.meridiq.com/booking/Nzc1NA==?lang=sv&service_id=8730",
            details:
              "Sedan 2021 är det lagkrav på att en konsultation genomförs minst 48 timmar innan estetisk injektionsbehandling. Under konsultationen går vi igenom önskemål, medicinska förutsättningar, risker och skapar en trygg, individanpassad plan.",
          },
        ],
      },
      {
        id: "botox",
        label: "Botox",
        intro:
          "Behandlingar med botulinumtoxin typ A. Exakta områden och dos anpassas individuellt.",
        items: [
          {
            id: "botox-1",
            title: "Botox – 1 område",
            duration: "30 min",
            price: "1 600 kr",
            bookUrl:
              "https://app.meridiq.com/booking/Nzc1NA==?lang=sv&service_id=8738",
            details:
              "Botox används för att mjuka upp rynkor och fina linjer samt förebygga att de fördjupas över tid. Områden kan t.ex. vara bekymmersrynka/arg-rynka, kråksparkar, panna m.m. Val av område sker vid konsultation.",
          },
          {
            id: "botox-2",
            title: "Botox – 2 områden",
            duration: "40 min",
            price: "2 250 kr",
            bookUrl:
              "https://app.meridiq.com/booking/Nzc1NA==?lang=sv&service_id=8739",
            details:
              "Två områden behandlas vid samma besök. Planeras och doseras individuellt efter ansiktsmimik och mål.",
          },
          {
            id: "botox-3",
            title: "Botox – 3 områden",
            duration: "45 min",
            price: "2 750 kr",
            bookUrl:
              "https://app.meridiq.com/booking/Nzc1NA==?lang=sv&service_id=8740",
            details:
              "Tre områden behandlas vid samma besök. Vanligt vid t.ex. panna + glabella + kråksparkar beroende på behov.",
          },
          {
            id: "botox-4",
            title: "Botox – 4 områden",
            duration: "45 min",
            price: "3 100 kr",
            bookUrl:
              "https://app.meridiq.com/booking/Nzc1NA==?lang=sv&service_id=8741",
            details:
              "Fyra områden behandlas vid samma besök. Upplägg anpassas efter dina förutsättningar och önskemål.",
          },
          {
            id: "botox-5",
            title: "Botox – 5 områden eller fler",
            duration: "60 min",
            price: "från 3 500 kr",
            bookUrl:
              "https://app.meridiq.com/booking/Nzc1NA==?lang=sv&service_id=8742",
            details:
              "För dig som vill behandla flera områden. Slutligt upplägg och pris bestäms vid konsultation utifrån behov.",
          },
        ],
      },
      {
        id: "fillers",
        label: "Fillers",
        intro:
          "Fillers med hyaluronsyra för kontur, balans och volym — med fokus på naturliga resultat.",
        items: [
          {
            id: "filler-lappar",
            title: "Fillers – Läppar (upp till 1 ml)",
            duration: "40 min",
            price: "1 999 kr",
            bookUrl:
              "https://app.meridiq.com/booking/Nzc1NA==?lang=sv&service_id=8729",
            details:
              "Läppar anpassas efter dina önskemål – från diskret återfuktning till mer form/definition. Hyaluronsyra hjälper till att skapa volym och kontur med ett naturligt resultat. Lätt svullnad är vanligt första dagarna.",
          },
          {
            id: "filler-nasolabial",
            title: "Fillers – Nasolabialveck",
            duration: "30 min",
            price: "2 100 kr",
            bookUrl:
              "https://app.meridiq.com/booking/Nzc1NA==?lang=sv&service_id=8732",
            details:
              "Nasolabialveck är linjerna från näsans sida ner mot mungiporna. Fillers med hyaluronsyra kan återställa stöd och mjuka upp intrycket för ett mer harmoniskt uttryck.",
          },
          {
            id: "filler-kindben",
            title: "Fillers – Kindben",
            duration: "30 min",
            price: "2 100 kr",
            bookUrl:
              "https://app.meridiq.com/booking/Nzc1NA==?lang=sv&service_id=8733",
            details:
              "Kindben kan definieras och ge ett mjukt lyft. Hyaluronsyra återställer volym och struktur på ett naturligt sätt. Resultatet syns direkt men kan utvecklas när svullnad lagt sig.",
          },
          {
            id: "filler-haka",
            title: "Fillers – Haka",
            duration: "30 min",
            price: "2 100 kr",
            bookUrl:
              "https://app.meridiq.com/booking/Nzc1NA==?lang=sv&service_id=8734",
            details:
              "Hakan har stor betydelse för ansiktets balans och profil. Fillers med hyaluronsyra kan bygga projektion och förbättra proportioner. Vanligt med lätt ömhet/svullnad första dagarna.",
          },
          {
            id: "filler-kaklinje",
            title: "Fillers – Käklinjer",
            duration: "50 min",
            price: "2 100 kr",
            bookUrl:
              "https://app.meridiq.com/booking/Nzc1NA==?lang=sv&service_id=8737",
            details:
              "Tydligare käklinje kan skapa mer struktur och ett mer markerat uttryck. Behandlingen planeras individuellt och kan kombineras med haka/kindben för helhet.",
          },
        ],
      },
      {
        id: "medicinskt",
        label: "Medicinskt",
        intro:
          "Medicinska indikationer behandlade med injektioner efter individuell bedömning.",
        items: [
          {
            id: "svett",
            title: "Svettbehandling armhålor",
            duration: "50 min",
            price: "3 800 kr",
            bookUrl:
              "https://app.meridiq.com/booking/Nzc1NA==?lang=sv&service_id=8743",
            details:
              "Botulinumtoxin kan minska svettproduktionen vid hyperhidros. Effekten märks oftast inom 1–2 veckor och varar vanligtvis 6–9 månader.",
          },
          {
            id: "bruxism",
            title: "Bruxism (tandgnissling / spända käkmuskler)",
            duration: "40 min",
            price: "3 900 kr",
            bookUrl:
              "https://app.meridiq.com/booking/Nzc1NA==?lang=sv&service_id=8744",
            details:
              "Botulinumtoxin i masseter kan minska muskelkraft och lindra besvär vid bruxism. Kan även bidra till mer avslappnat käkparti och minskad spänning.",
          },
        ],
      },
    ],
    []
  );

  const [active, setActive] = useState<Category["id"]>("konsultation");
  const [openId, setOpenId] = useState<string | null>(null);

  useEffect(() => {
    const category = searchParams.get("category");

    if (
      category === "konsultation" ||
      category === "botox" ||
      category === "fillers" ||
      category === "medicinskt"
    ) {
      setActive(category);
      setOpenId(null);
    }
  }, [searchParams]);

  const activeCategory = categories.find((c) => c.id === active)!;

  return (
    <main className="min-h-screen bg-white pt-24">
      <div className="mx-auto max-w-6xl px-6 pb-24">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-500">
            Klinik Aethera
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-gray-900">
            Våra behandlingar
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Här hittar du behandlingar och priser. Konsultation är obligatorisk och
            ska göras minst <span className="font-semibold">48 timmar</span> innan
            behandling.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => {
                setActive(c.id);
                setOpenId(null);
              }}
              className={cx(
                "rounded-2xl border px-5 py-2 text-sm font-medium transition",
                active === c.id
                  ? "border-black bg-black text-white"
                  : "border-gray-300 hover:bg-gray-50"
              )}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-3xl text-center text-gray-700">
          <p>{activeCategory.intro}</p>
        </div>

        <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-3xl border border-gray-200">
          {activeCategory.items.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className="border-t border-gray-200 first:border-t-0"
              >
                <div className="flex items-stretch">
                  <button
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                    className="flex-1 px-6 py-5 text-left transition hover:bg-gray-50"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="min-w-0">
                        <p className="font-medium text-gray-900">{item.title}</p>
                      </div>

                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span className="hidden sm:inline">{item.duration}</span>
                        <span className="w-[110px] text-right">{item.price}</span>
                        <span className="ml-2 inline-flex items-center justify-center rounded-xl border border-gray-200 bg-gray-50 px-3 py-1 text-sm font-medium text-gray-700 transition hover:bg-gray-100">
                          {isOpen ? "Stäng" : "Mer info"}
                        </span>
                      </div>
                    </div>
                  </button>

                  <div className="hidden items-center pr-6 md:flex">
                    <a
                      href={item.bookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex rounded-2xl bg-black px-5 py-3 text-sm font-medium text-white hover:opacity-90"
                    >
                      Boka
                    </a>
                  </div>
                </div>

                <div className="px-6 pb-4 md:hidden">
                  <a
                    href={item.bookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full justify-center rounded-2xl bg-black px-5 py-3 text-sm font-medium text-white hover:opacity-90"
                  >
                    Boka
                  </a>
                </div>

                {isOpen && (
                  <div className="px-6 pb-6">
                    <p className="text-sm leading-relaxed text-gray-700">
                      {item.details ||
                        "Mer information kommer snart. Boka gärna konsultation för en individuell bedömning."}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-3">
                      <a
                        href={item.bookUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex rounded-2xl bg-black px-5 py-3 text-sm font-medium text-white hover:opacity-90"
                      >
                        Boka denna
                      </a>
                      <a
                        href="/#kontakt"
                        className="inline-flex rounded-2xl border border-gray-300 px-5 py-3 text-sm font-medium hover:bg-gray-50"
                      >
                        Fråga oss
                      </a>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <p className="mx-auto mt-6 max-w-4xl text-center text-xs text-gray-500">
          Priser kan uppdateras. Slutlig bedömning sker alltid individuellt vid
          konsultation.
        </p>
      </div>
    </main>
  );
}

export default function BehandlingarPage() {
  return (
    <Suspense fallback={<main className="min-h-screen bg-white pt-24" />}>
      <BehandlingarContent />
    </Suspense>
  );
}