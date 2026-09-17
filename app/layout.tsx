import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://comprooroplatajoya.vercel.app"),

  title: {
    default: "Compra y Venta de Oro en Quito | Compro Oro & Relojes",
    template: "%s | Compro Oro & Relojes",
  },

  description:
    "Compra y venta de oro, plata, joyas y relojes en Quito, Ecuador. Recibe valoración personalizada, atención directa y cotización por WhatsApp.",

  keywords: [
    "comprar oro Quito",
    "vender oro Quito",
    "compra de oro Quito",
    "venta de oro Quito",
    "compro oro Quito",
    "joyas Quito",
    "plata Quito",
    "relojes Quito",
    "comprar joyas usadas Quito",
    "vender joyas Quito",
  ],

  authors: [{ name: "Compro Oro & Relojes" }],
  creator: "Compro Oro & Relojes",
  publisher: "Compro Oro & Relojes",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Compra y Venta de Oro en Quito | Compro Oro & Relojes",
    description:
      "Compramos oro, plata, joyas y relojes en Quito. Solicita una valoración y cotización por WhatsApp.",
    url: "https://comprooroplatajoya.vercel.app",
    siteName: "Compro Oro & Relojes",
    locale: "es_EC",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Compro Oro & Relojes en Quito",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Compra y Venta de Oro en Quito | Compro Oro & Relojes",
    description:
      "Compramos oro, plata, joyas y relojes en Quito, Ecuador. Cotiza tus piezas de forma directa.",
    images: ["/opengraph-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",

  name: "Compro Oro & Relojes",

  description:
    "Compra y venta de oro, plata, joyas y relojes en Quito, Ecuador.",

  url: "https://comprooroplatajoya.vercel.app",

  image:
    "https://comprooroplatajoya.vercel.app/opengraph-image.png",

  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Avenida La Coruña y 12 de Octubre, Condominio General Artigas",
    addressLocality: "Quito",
    addressRegion: "Pichincha",
    addressCountry: "EC",
  },

  areaServed: {
    "@type": "City",
    name: "Quito",
  },

  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "09:00",
      closes: "18:00",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />

        {children}
      </body>
    </html>
  );
}