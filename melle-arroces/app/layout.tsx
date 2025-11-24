import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Melle Arroces - Paellas y Arroces Artesanales",
  description: "Descubre el auténtico sabor del Mediterráneo con nuestras paellas y arroces artesanales. Elaborados con ingredientes de calidad y recetas tradicionales.",
  keywords: ["paella", "arroz", "comida mediterránea", "delivery", "paella valenciana"],
  authors: [{ name: "Melle Arroces" }],
  openGraph: {
    title: "Melle Arroces - Paellas y Arroces Artesanales",
    description: "Descubre el auténtico sabor del Mediterráneo",
    type: "website",
    locale: "es_ES",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
