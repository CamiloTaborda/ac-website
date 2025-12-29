import { Playfair_Display, Montserrat } from "next/font/google";
import Navbar from "app/components/Navbar";
import Footer from "app/components/Footer";
import ChatBot from "app/components/ChatBot";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "AC Tributaria | Asesoría Contable y Tributaria",
    template: "%s | AC Tributaria",
  },
  description:
    "AC Tributaria ofrece servicios profesionales de contabilidad, impuestos y asesoría financiera para personas naturales y empresas en Colombia.",

  metadataBase: new URL("https://www.actributaria.com"),

  keywords: [
    "contador público",
    "asesoría contable",
    "impuestos Colombia",
    "contador para empresas",
    "declaración de renta",
    "asesoría tributaria",
  ],

  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://www.actributaria.com",
    siteName: "AC Tributaria",
    title: "AC Tributaria | Asesoría Contable y Tributaria",
    description:
      "Servicios contables y tributarios profesionales para personas naturales y empresas en Colombia.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AC Tributaria - Asesoría Contable",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "AC Tributaria | Asesoría Contable",
    description:
      "Servicios profesionales de contabilidad e impuestos en Colombia.",
    images: ["/og-image.jpg"],
  },

  alternates: {
    canonical: "https://www.actributaria.com",
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

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${playfair.variable} ${montserrat.variable} antialiased bg-white text-gray-900`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ChatBot />
      </body>
    </html>
  );
}
