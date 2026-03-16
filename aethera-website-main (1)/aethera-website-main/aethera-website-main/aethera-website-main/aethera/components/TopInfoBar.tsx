export default function TopInfoBar() {
  return (
    <div className="sticky top-[73px] z-40 w-full border-b border-black/5 bg-[#F5F1EC]/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-3 text-sm text-black/75 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-1 md:flex-row md:items-center md:gap-3">
          <span className="font-medium text-black/85">Klinik Aethera</span>
          <span className="hidden md:inline text-black/30">•</span>
          <span>Stationsgatan 4A, 574 31, Vetlanda</span>
        </div>

        <a
          href="https://www.google.com/maps/search/?api=1&query=Stationsgatan+4A+574+31+Vetlanda"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-fit rounded-xl border border-black/10 bg-white/50 px-4 py-2 font-medium text-black/80 transition hover:bg-white"
        >
          Öppna i Google Maps
        </a>
      </div>
    </div>
  );
}