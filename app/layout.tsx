import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

/* Fuentes */
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* ----------------------------------------------------
   SEO COMPLETO PARA NERIOM (optimizado)
---------------------------------------------------- */
export const metadata: Metadata = {
  metadataBase: new URL("https://neriom.mx"),

  title: "Neriom™ – Automatización Inteligente para Empresas",
  description:
    "Soluciones de automatización, chatbots, procesamiento XML e integraciones empresariales. Tecnología real para empresas reales.",
  keywords: [
    "automatización",
    "chatbots",
    "XML",
    "renombrado XML",
    "software empresarial",
    "inteligencia artificial",
    "flujos automáticos",
    "automatización de procesos",
    "Neriom",
  ],

  openGraph: {
    title: "Neriom – Automatización Inteligente",
    description:
      "Tecnología real para empresas reales: automatización XML, chatbots e integraciones empresariales.",
    url: "https://neriom.mx",
    siteName: "Neriom",
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: "/og-image-new.png",
        width: 1200,
        height: 630,
        alt: "Neriom – Automatización Inteligente",
      },
    ],
  },

  icons: {
    icon: "/favicon-new.png",
    apple: "/apple-touch-icon.png",
  },

  manifest: "/manifest.json", // opcional futuro — PWA
};

/* ----------------------------------------------------
   ROOT LAYOUT
---------------------------------------------------- */
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
        {children}
      </body>
    </html>
  );
}
