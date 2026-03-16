"use client";

import { useEffect } from "react";

export default function ThankYouPage() {
  useEffect(() => {
    const el = document.querySelector("#card");

    setTimeout(() => {
      el?.classList.remove("opacity-0", "translate-y-6");
    }, 100);
  }, []);

  return (
    <main className="min-h-screen bg-[#F5F1EC] pt-32 pb-20">
      <div className="mx-auto max-w-2xl px-6 text-center">

        <div
          id="card"
          className="opacity-0 translate-y-6 transition-all duration-700 rounded-[2rem] border border-[#E6DED5] bg-white p-12 shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
        >
          <div className="mb-6 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-black text-white text-2xl">
              ✓
            </div>
          </div>

          <h1 className="text-3xl font-semibold text-gray-900">
            Tack för din bokning
          </h1>

          <p className="mt-4 text-gray-700 leading-relaxed">
            Din bokning hos <strong>Klinik Aethera</strong> är mottagen.
            Du kommer att få en bekräftelse via e-post eller SMS.
          </p>

          <p className="mt-4 text-gray-600">
            Vi ser fram emot att träffa dig i kliniken i Vetlanda.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">

            <a
              href="/"
              className="inline-flex items-center justify-center rounded-2xl bg-black px-6 py-3 font-medium text-white transition hover:opacity-90"
            >
              Till startsidan
            </a>

            <a
              href="/behandlingar"
              className="inline-flex items-center justify-center rounded-2xl border border-gray-300 px-6 py-3 font-medium text-gray-800 transition hover:bg-gray-50"
            >
              Se behandlingar
            </a>

          </div>
        </div>

      </div>
    </main>
  );
}