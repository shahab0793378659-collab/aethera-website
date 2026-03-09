import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  metadataBase: new URL("https://klinikaethera.se"),
  title: {
    default: "Klinik Aethera – Botox, fillers och estetiska injektionsbehandlingar i Vetlanda",
    template: "%s | Klinik Aethera",
  },
  description:
    "Klinik Aethera i Vetlanda erbjuder botox, fillers och estetiska injektionsbehandlingar med fokus på naturliga resultat. Legitimerad tandläkare. Bokning online för Vetlanda, Jönköping och omnejd.",
  keywords: [
    "botox Vetlanda",
    "fillers Vetlanda",
    "estetiska injektionsbehandlingar Vetlanda",
    "injektionsbehandlingar Vetlanda",
    "botox Jönköping",
    "fillers Jönköping",
    "läppfillers Vetlanda",
    "bruxism botox Vetlanda",
    "svettbehandling Vetlanda",
    "estetisk klinik Vetlanda",
    "Klinik Aethera",
  ],
  alternates: {
    canonical: "https://klinikaethera.se",
  },
  openGraph: {
    title:
      "Klinik Aethera – Botox, fillers och estetiska injektionsbehandlingar i Vetlanda",
    description:
      "Naturliga resultat med medicinsk precision. Botox, fillers och estetiska injektionsbehandlingar i Vetlanda.",
    url: "https://klinikaethera.se",
    siteName: "Klinik Aethera",
    locale: "sv_SE",
    type: "website",
    images: [
      {
        url: "/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Klinik Aethera i Vetlanda",
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
  telephone: "",
  email: "klinik.aethera@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Stationsgatan 4C",
    addressLocality: "Vetlanda",
    postalCode: "57431",
    addressCountry: "SE",
  },
  areaServed: [
    "Vetlanda",
    "Jönköping",
    "Nässjö",
    "Sävsjö",
    "Eksjö",
    "Tranås",
    "Småland",
  ],
  medicalSpecialty: [
    "Estetiska injektionsbehandlingar",
    "Botox",
    "Fillers",
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
      </body>
    </html>
  );
}