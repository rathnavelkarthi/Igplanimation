import type { Metadata, Viewport } from "next";
import { Fraunces, Instrument_Serif, JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";
import Atmosphere from "@/components/Atmosphere";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  axes: ["SOFT", "WONK", "opsz"],
  display: "swap"
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-italic",
  weight: "400",
  style: ["normal", "italic"],
  display: "swap"
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600"],
  display: "swap"
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap"
});

const SITE_URL = "https://internationalgarudas.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "International Garudas — Software, Web, App & AI Development in Chennai",
    template: "%s | IGPL — International Garudas"
  },
  description:
    "IGPL is a Chennai-based software development and procurement firm engineering AI systems, enterprise platforms, mobile apps, and intelligence architecture for partners across India and worldwide.",
  keywords: [
    "software development company in Chennai",
    "website development Chennai",
    "mobile app development Chennai",
    "digital marketing agency Chennai",
    "SaaS development Chennai",
    "AI development company Chennai",
    "Next.js development Chennai",
    "React Native app Chennai",
    "enterprise software Tamil Nadu",
    "International Garudas",
    "IGPL"
  ],
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: "International Garudas — Software, Web, App & AI Development in Chennai",
    description:
      "Senior engineers. Fixed-price discovery. Production-grade software shipped from Chennai to the world.",
    url: SITE_URL,
    siteName: "International Garudas",
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "International Garudas — Software, Web, App & AI Development in Chennai",
    description: "Senior engineers. Fixed-price discovery. Production-grade software shipped from Chennai."
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 }
  },
  verification: {
    // Replace placeholder with real verification token from Google Search Console:
    google: "REPLACE_WITH_GSC_TOKEN"
  }
};

const ORG_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}#org`,
  name: "International Garudas Pvt Ltd",
  alternateName: "IGPL",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  email: "igpl@internnationalgradus.com",
  telephone: ["+917871241179", "+919940203992"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Chennai",
    addressRegion: "Tamil Nadu",
    addressCountry: "IN"
  },
  areaServed: ["Chennai", "Tamil Nadu", "India", "Worldwide"],
  sameAs: [
    "https://www.linkedin.com/company/internationalgarudas",
    "https://www.instagram.com/internationalgarudas",
    "https://x.com/internationalgarudas"
  ]
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0a0a0a",
  viewportFit: "cover"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`dark ${fraunces.variable} ${instrument.variable} ${inter.variable} ${mono.variable}`}
    >
      <body className="bg-obsidian text-white/90 antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSONLD) }}
        />
        <div className="bg-mesh" aria-hidden />
        <div className="bg-veil" aria-hidden />
        <div className="bg-vignette" aria-hidden />
        <Atmosphere />
        {children}
      </body>
    </html>
  );
}
