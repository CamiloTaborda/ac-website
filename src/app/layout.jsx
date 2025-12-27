import { Playfair_Display, Montserrat } from "next/font/google";
import Navbar from "app/components/Navbar";
import Footer from "app/components/Footer";
import ChatBot from "app/components/ChatBot";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], 
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "AC Tributaria | Asesores Contables",
  description: "Servicios contables profesionales y confiables.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${playfair.variable} ${montserrat.variable} antialiased bg-white text-gray-900`}
      >
        <Navbar />
        {children}
        <Footer />
        <ChatBot />
      </body>
    </html>
  );
}
