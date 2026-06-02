import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { JsonLd } from "@/components/seo/JsonLd";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = createMetadata();

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f2744",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={siteConfig.language}>
      <head>
        <link rel="icon" href="/images/logo-sr.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/logo-sr.png" />
      </head>
      <body className={`${montserrat.variable} ${cormorant.variable} antialiased`}>
        <JsonLd />
        <a
          href="#conteudo-principal"
          className="sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:block focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:py-2 focus:shadow-lg focus:[clip:auto] focus:[height:auto] focus:[width:auto] focus:overflow-visible focus:m-0 focus:p-4"
        >
          Ir para o conteúdo principal
        </a>
        <SmoothScrollProvider>
          <Header />
          <main id="conteudo-principal">{children}</main>
          <Footer />
          <WhatsAppFloat />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
