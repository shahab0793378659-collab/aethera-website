export default function SiteFooter() {
  return (
    <footer className="bg-[#0F0F0F] py-12 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-lg font-semibold tracking-wide">AETHERA</p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/70">
              Estetiska injektionsbehandlingar med fokus på naturliga resultat,
              medicinsk precision och hög patientsäkerhet.
            </p>
            <p className="mt-6 text-xs text-white/50">
              © {new Date().getFullYear()} Klinik Aethera. Alla rättigheter
              förbehållna.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-10 text-sm sm:grid-cols-2 md:grid-cols-4">
            <div>
              <p className="font-semibold">Info</p>
              <ul className="mt-4 space-y-2 text-white/70">
                <li>
                  <a href="/behandlingar" className="hover:text-white">
                    Behandlingar
                  </a>
                </li>
                <li>
                  <a href="/om" className="hover:text-white">
                    Om
                  </a>
                </li>
                <li>
                  <a href="/#boka" className="hover:text-white">
                    Boka tid
                  </a>
                </li>
                <li>
                  <a href="/vanliga-fragor" className="hover:text-white">
                    Vanliga frågor
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-semibold">Kontakt</p>
              <ul className="mt-4 space-y-2 text-white/70">
                <li>
                  <a
                    href="mailto:klinik.aethera@gmail.com"
                    className="hover:text-white"
                  >
                    klinik.aethera@gmail.com
                  </a>
                </li>
                <li>Vetlanda</li>
              </ul>
            </div>

            <div>
              <p className="font-semibold">Adress</p>
              <div className="mt-4 space-y-3 text-white/70">
                <p>Stationsgatan 4A, 574 31, Vetlanda</p>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Stationsgatan+4A+574+31+Vetlanda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-2xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
                >
                  Öppna i Google Maps
                </a>
              </div>
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
  );
}