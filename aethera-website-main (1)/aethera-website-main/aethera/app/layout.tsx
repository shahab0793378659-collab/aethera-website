import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  metadataBase: new URL("https://klinikaethera.se"),
  title: {
    default:
      "Klinik Aethera | Botox, fillers och estetiska injektionsbehandlingar i Vetlanda",
    template: "%s | Klinik Aethera",
  },
  description:
    "Klinik Aethera i Vetlanda erbjuder botox, fillers och estetiska injektionsbehandlingar med fokus på naturliga resultat. Legitimerad tandläkare. Bokning online för Vetlanda, Jönköping och omnejd.",
  keywords: [
    "botox Vetlanda",
    "fillers Vetlanda",
    "läppfillers Vetlanda",
    "estetiska injektionsbehandlingar Vetlanda",
    "injektionsbehandlingar Vetlanda",
    "botox Jönköping",
    "fillers Jönköping",
    "bruxism botox Vetlanda",
    "svettbehandling Vetlanda",
    "estetisk klinik Vetlanda",
    "Klinik Aethera",
  ],
  alternates: {
    canonical: "https://klinikaethera.se",
  },
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/favicon.ico",
    apple: "/logo.png",
  },
  openGraph: {
    title:
      "Klinik Aethera | Botox och fillers i Vetlanda – naturliga resultat",
    description:
      "Botox, fillers och estetiska injektionsbehandlingar i Vetlanda. Fokus på naturliga resultat och medicinsk precision.",
    url: "https://klinikaethera.se",
    siteName: "Klinik Aethera",
    locale: "sv_SE",
    type: "website",
    images: [
      {
        url: "/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Klinik Aethera Vetlanda",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const clinicJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Klinik Aethera",
  image: "https://klinikaethera.se/hero.jpg",
  url: "https://klinikaethera.se",
  email: "klinik.aethera@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Stationsgatan 4A",
    addressLocality: "Vetlanda",
    postalCode: "574 31",
    addressCountry: "SE",
  },
  areaServed: [
    "Vetlanda",
    "Jönköping",
    "Eksjö",
    "Nässjö",
    "Sävsjö",
    "Tranås",
    "Småland",
  ],
  medicalSpecialty: [
    "Botox",
    "Fillers",
    "Estetiska injektionsbehandlingar",
  ],
  sameAs: [
    "https://www.instagram.com/klinik.aethera/",
    "https://www.tiktok.com/@klinik.aethera",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicJsonLd) }}
        />
        <Navbar />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}