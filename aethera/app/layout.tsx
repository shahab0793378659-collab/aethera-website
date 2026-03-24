import Script from "next/script";
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  metadataBase: new URL("https://klinikaethera.se"),
  title: {
    default:
      "Klinik Aethera | Botox, fillers och estetiska injektionsbehandlingar i Vetlanda och Småland",
    template: "%s | Klinik Aethera",
  },
icons: {
  icon: "/favicon.ico",
  shortcut: "/favicon.ico",
  apple: "/favicon.ico",
},
  description:
    "Klinik Aethera erbjuder botox, fillers och estetiska injektionsbehandlingar i Vetlanda med patienter från Eksjö, Nässjö, Sävsjö, Tranås, Vimmerby och närliggande orter i Småland. Legitimerad tandläkare, fokus på naturliga resultat och medicinsk precision.",
  keywords: [
    "botox Vetlanda",
    "fillers Vetlanda",
    "läppfillers Vetlanda",
    "injektionsbehandlingar Vetlanda",
    "estetisk klinik Vetlanda",
    "botox Eksjö",
    "fillers Eksjö",
    "botox Nässjö",
    "fillers Nässjö",
    "botox Sävsjö",
    "fillers Sävsjö",
    "botox Tranås",
    "fillers Tranås",
    "botox Vimmerby",
    "fillers Vimmerby",
    "botox Småland",
    "fillers Småland",
    "bruxism botox Vetlanda",
    "svettbehandling Vetlanda",
    "Klinik Aethera",
  ],
  alternates: {
    canonical: "https://klinikaethera.se",
  },
  openGraph: {
    title:
      "Klinik Aethera | Botox och fillers i Vetlanda och närliggande orter",
    description:
      "Botox, fillers och estetiska injektionsbehandlingar i Vetlanda med patienter från Eksjö, Nässjö, Sävsjö, Tranås, Vimmerby och övriga delar av närområdet.",
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

  <Script
    src="https://www.googletagmanager.com/gtag/js?id=G-QNZK3X81ZN"
    strategy="afterInteractive"
  />
  <Script id="google-analytics" strategy="afterInteractive">
    {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-QNZK3X81ZN');
    `}
  </Script>
</body>
    </html>
  );
}